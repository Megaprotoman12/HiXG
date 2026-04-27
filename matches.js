/* ═══════════════════════════════════════════════════════════════
   matches.js  —  Hidden xG
   ✅ Módulo Tabla     → ranking por liga desde window.bases
   ✅ Módulo Partidos  → split layout + panel xG con liga correcta
   ✅ Módulo Pronósticos → todos los partidos ordenados por pick más claro
   ═══════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════
   POISSON COMPARTIDO — usado por Partidos y Pronósticos
   ════════════════════════════════════════════════════════ */
window.HXG = window.HXG || {};

HXG.poisson = function(k, λ) {
  let f = 1; for (let i = 2; i <= k; i++) f *= i;
  return (Math.pow(λ, k) * Math.exp(-λ)) / f;
};

HXG.calcProbs = function(xgH, xgA, nameH, nameA, maxG = 10) {
  const P = [];
  for (let i = 0; i <= maxG; i++) {
    P[i] = [];
    for (let j = 0; j <= maxG; j++) P[i][j] = HXG.poisson(i, xgH) * HXG.poisson(j, xgA);
  }
  let win = 0, draw = 0, loss = 0, btts = 0;
  for (let i = 0; i <= maxG; i++) for (let j = 0; j <= maxG; j++) {
    if (i > j) win += P[i][j]; else if (i === j) draw += P[i][j]; else loss += P[i][j];
    if (i >= 1 && j >= 1) btts += P[i][j];
  }
  const ou = {};
  [0.5, 1.5, 2.5, 3.5, 4.5].forEach(line => {
    let over = 0;
    for (let i = 0; i <= maxG; i++) for (let j = 0; j <= maxG; j++) if (i + j > line) over += P[i][j];
    ou['+' + line] = +(over * 100).toFixed(1);
    ou['-' + line] = +((1 - over) * 100).toFixed(1);
  });
  const scores = [];
  for (let i = 0; i <= maxG; i++) for (let j = 0; j <= maxG; j++) scores.push({ s: `${i}-${j}`, p: P[i][j] });
  scores.sort((a, b) => b.p - a.p);
  return {
    win:  +(win  * 100).toFixed(1),
    draw: +(draw * 100).toFixed(1),
    loss: +(loss * 100).toFixed(1),
    bttsY: +(btts * 100).toFixed(1),
    bttsN: +((1 - btts) * 100).toFixed(1),
    ou,
    top5: scores.slice(0, 5).map(x => ({ s: x.s, p: +(x.p * 100).toFixed(2) })),
    nameH, nameA,
  };
};

/* Mapa: nombre de liga en partidos → clave de bases[] */
HXG.LEAGUE_MAP = {
  'Premier League':   'PremierLeague',
  'La Liga':          'LaLiga',
  'Serie A':          'SerieA',
  'Bundesliga':       'Bundesliga',
  'Ligue 1':          'Ligue1',
  'Championship':     'Championship',
  '2. Bundesliga':    '_2Bundesliga',
  'FA Cup':           'FACup',
  'Liga 1':           'Liga1',
  'J1 League':        'J1League',
  'Champions League': 'ChampionsLeague',
};

/* Busca un equipo SÓLO en la liga indicada por el partido */
HXG.findTeam = function(teamName, leagueKey) {
  if (typeof bases === 'undefined') return null;
  const leagueData = bases[leagueKey];
  if (!leagueData) return null;
  return leagueData[teamName] || null;
};

/* Calcula xG para un partido dado su objeto m (con m.leagueKey) */
HXG.computeXG = function(m) {
  const key = m.leagueKey;
  if (!key) return null;
  const L = HXG.findTeam(m.home, key);
  const V = HXG.findTeam(m.away, key);
  if (!L || !V) return null;
  let xgH = L.ataque + L.PLUSLOCALataque - (V.defensa + V.PLUSVISITAdefensa);
  let xgA = V.ataque + V.PLUSVISITAataque - (L.defensa + L.PLUSLOCALdefensa);
  return { xgH: Math.max(0, xgH), xgA: Math.max(0, xgA) };
};


/* ════════════════════════════════════════════════════════
   MÓDULO 1 — TABLA
   ════════════════════════════════════════════════════════ */
(function TablaModule() {
  const tablaLigaSel   = document.getElementById('tabla-liga');
  const tablaContainer = document.getElementById('tabla-container');
  if (!tablaLigaSel || !tablaContainer) return;

  const LIGA_LABELS = {
    ChampionsLeague:'👑 Champions League', PremierLeague:'🏆 Premier League',
    LaLiga:'🇪🇸 La Liga', SerieA:'🇮🇹 Serie A', Bundesliga:'🇩🇪 Bundesliga',
    Ligue1:'🇫🇷 Ligue 1', Championship:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    _2Bundesliga:'🇩🇪 2. Bundesliga', FACup:'🏆 FA Cup',
    Liga1:'🇵🇪 Liga 1', J1League:'🇯🇵 J1 League',
  };

  function renderTabla(ligaKey) {
    if (typeof bases === 'undefined') {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>⚠️ Recarga la página.</p></div>'; return;
    }
    const data = bases[ligaKey];
    if (!data) { tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>Liga no encontrada.</p></div>'; return; }

    const teams = Object.entries(data).map(([name, s]) => ({
      name, atk: s.ataque ?? 0, def: s.defensa ?? 0,
      index: (s.ataque ?? 0) + (s.defensa ?? 0),
      localAtk: s.PLUSLOCALataque ?? 0, localDef: s.PLUSLOCALdefensa ?? 0,
      visitaAtk: s.PLUSVISITAataque ?? 0, visitaDef: s.PLUSVISITAdefensa ?? 0,
    })).sort((a, b) => b.index - a.index);

    const maxIdx = teams[0]?.index ?? 1, minIdx = teams[teams.length - 1]?.index ?? 0;
    const rows = teams.map((t, i) => {
      const rank = i + 1, pct = maxIdx === minIdx ? 1 : (t.index - minIdx) / (maxIdx - minIdx);
      const barW = Math.max(4, Math.round(pct * 100));
      const rCls = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : '';
      const trend = rank <= Math.ceil(teams.length * .33) ? '▲' : rank <= Math.ceil(teams.length * .66) ? '—' : '▼';
      const tCls  = rank <= Math.ceil(teams.length * .33) ? 'trend-up' : rank <= Math.ceil(teams.length * .66) ? 'trend-mid' : 'trend-down';
      return `<tr class="tabla-row ${rank <= 3 ? 'top-row' : ''}">
        <td class="col-rank"><span class="rank-badge ${rCls}">${rank}</span></td>
        <td class="col-team"><div class="team-name-cell"><span class="team-name-text">${t.name}</span>
          <div class="index-bar-wrap"><div class="index-bar" style="width:${barW}%"></div></div></div></td>
        <td class="col-atk">${t.atk.toFixed(2)}</td>
        <td class="col-def">${t.def.toFixed(2)}</td>
        <td class="col-index"><span class="index-badge">${t.index.toFixed(2)}</span></td>
        <td class="col-local"><span class="mini-stat">${t.localAtk >= 0 ? '+' : ''}${t.localAtk.toFixed(2)} / ${t.localDef >= 0 ? '+' : ''}${t.localDef.toFixed(2)}</span></td>
        <td class="col-visita"><span class="mini-stat">${t.visitaAtk >= 0 ? '+' : ''}${t.visitaAtk.toFixed(2)} / ${t.visitaDef >= 0 ? '+' : ''}${t.visitaDef.toFixed(2)}</span></td>
        <td class="col-trend"><span class="${tCls}">${trend}</span></td>
      </tr>`;
    }).join('');

    tablaContainer.innerHTML = `
      <div class="tabla-league-label">${LIGA_LABELS[ligaKey] || ligaKey}</div>
      <div class="tabla-wrap"><table class="tabla-table">
        <thead><tr>
          <th class="col-rank">#</th><th class="col-team">Equipo</th>
          <th class="col-atk">⚽ Ataque</th><th class="col-def">🛡 Defensa</th>
          <th class="col-index">📊 Índice xG</th>
          <th class="col-local">🏠 Local</th><th class="col-visita">✈️ Visita</th>
          <th class="col-trend">±</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      <p class="tabla-note">* Índice xG = Ataque + Defensa · Ordenado de mayor a menor</p>`;
  }

  tablaLigaSel.addEventListener('change', () => {
    const val = tablaLigaSel.value;
    if (!val) { tablaContainer.innerHTML = '<div class="tabla-empty-state"><span class="tabla-empty-icon">👆</span><p>Selecciona una liga</p></div>'; return; }
    renderTabla(val);
  });
})();


/* ════════════════════════════════════════════════════════
   MÓDULO 2 — PARTIDOS + PANEL xG
   ════════════════════════════════════════════════════════ */
(function MatchesModule() {

  const API_KEY       = 'TU_API_KEY_AQUI'/*'7657ca8f8011c6cbc615b2c74ccb75da';*/
  const USE_DEMO_DATA = true;
  /* IDs de ligas — edita aquí para agregar/quitar */
  const LEAGUE_IDS    = [39, 140, 135, 78, 61, 40, 45, 268, 98, 2, 3];

  /* ── ESTRATEGIA DE REQUESTS ────────────────────────────────
     El plan free tiene 100 requests/día.
     En lugar de refrescar cada 1 min (1440 req/día!), usamos
     un intervalo dinámico según si hay partidos en vivo o no.

     • Con partidos EN VIVO   → refresca cada 3 min  (~20 req)
     • Sin partidos en vivo   → refresca cada 30 min  (~4 req)
     • Al cargar la página    → 1 request inicial
     Total estimado por sesión activa: ~25-30 req/día ─────── */
  const REFRESH_LIVE_MS = 3 * 60 * 1000;   /* 3 min — hay partidos en vivo */
  const REFRESH_IDLE_MS = 30 * 60 * 1000;  /* 30 min — sin partidos en vivo */

  let allMatches    = [];
  let favorites     = loadFavs();
  let activeTab     = 'all';
  let refreshTimer  = null;
  let selectedMatch = null;

  const listEl      = document.getElementById('matches-list');
  const loadingEl   = document.getElementById('matches-loading');
  const liveCountEl = document.getElementById('live-count');
  const favCountEl  = document.getElementById('fav-count');
  const liveDotEl   = document.getElementById('matches-live-dot');
  if (!listEl) return;

  /* ── Split layout ── */
  const splitWrap = document.createElement('div');
  splitWrap.id = 'matches-split';
  splitWrap.className = 'matches-split';

  const listPane = document.createElement('div');
  listPane.id = 'matches-list-pane';
  listPane.className = 'matches-list-pane';

  const xgPane = document.createElement('div');
  xgPane.id = 'matches-xg-pane';
  xgPane.className = 'matches-xg-pane';
  xgPane.setAttribute('aria-hidden', 'true');

  listEl.parentNode.insertBefore(splitWrap, listEl);
  splitWrap.appendChild(listPane);
  splitWrap.appendChild(xgPane);
  listPane.appendChild(listEl);

  /* ── Tabs ── */
  document.querySelectorAll('.m-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.m-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
      activeTab = btn.dataset.filter;
      renderMatches();
    });
  });

  /* ── Favoritos ── */
  function loadFavs() {
    try { return new Set(JSON.parse(localStorage.getItem('hxg_favs') || '[]')); } catch { return new Set(); }
  }
  function saveFavs() { localStorage.setItem('hxg_favs', JSON.stringify([...favorites])); }
  function toggleFav(id) {
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    saveFavs(); updateCounts();
    if (activeTab === 'favorites') { renderMatches(); return; }
    const btn = listEl.querySelector(`.fav-btn[data-id="${id}"]`);
    if (btn) { const on = favorites.has(id); btn.classList.toggle('active', on); btn.textContent = on ? '★' : '☆'; }
  }

  /* ── Panel xG ── */
  function openXGPanel(m) {
    selectedMatch = m.id;
    listEl.querySelectorAll('.match-row').forEach(r => r.classList.remove('match-selected'));
    const activeRow = listEl.querySelector(`.match-row[data-id="${m.id}"]`);
    if (activeRow) activeRow.classList.add('match-selected');
    splitWrap.classList.add('panel-open');
    xgPane.setAttribute('aria-hidden', 'false');

    const xgData = HXG.computeXG(m);
    if (!xgData) {
      xgPane.innerHTML = buildShell(m, `<div class="xgp-no-data">
        <span>📊</span>
        <p>No hay datos xG para <strong>${m.home}</strong> o <strong>${m.away}</strong> en <em>${m.league}</em>.</p>
        <p class="xgp-hint">Verifica que ambos equipos estén en la base de datos de esa liga.</p>
      </div>`);
    } else {
      const { xgH, xgA } = xgData;
      const probs = HXG.calcProbs(xgH, xgA, m.home, m.away);
      xgPane.innerHTML = buildShell(m, buildProbsHTML(xgH, xgA, probs, m));
    }
    xgPane.querySelector('.xgp-close').addEventListener('click', closeXGPanel);
    xgPane.scrollTop = 0;
  }

  function closeXGPanel() {
    selectedMatch = null;
    splitWrap.classList.remove('panel-open');
    xgPane.setAttribute('aria-hidden', 'true');
    xgPane.innerHTML = '';
    listEl.querySelectorAll('.match-row').forEach(r => r.classList.remove('match-selected'));
  }

  function buildShell(m, content) {
    const isLive = m.status === 'live', isDone = m.status === 'finished';
    const statusBadge = isLive
      ? `<span class="xgp-live-badge"><span class="live-pip"></span>${m.minute}'</span>`
      : isDone ? `<span class="xgp-done-badge">FT</span>` : '';
    const score = (m.scoreHome !== null && m.scoreAway !== null)
      ? `<div class="xgp-score">${m.scoreHome} <span class="xgp-score-sep">—</span> ${m.scoreAway}</div>` : '';
    return `<div class="xgp-inner">
      <div class="xgp-topbar">
        <span class="xgp-league">${m.league}</span>
        <button class="xgp-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="xgp-matchup">
        <div class="xgp-team home">${m.home}</div>
        <div class="xgp-mid">${statusBadge}${score}<span class="xgp-vs">VS</span></div>
        <div class="xgp-team away">${m.away}</div>
      </div>
      ${content}
    </div>`;
  }

  function buildProbsHTML(xgH, xgA, p, m) {
    const { win, draw, loss, ou, top5, bttsY, bttsN } = p;
    return `<div class="xgp-body">
      <div class="xgp-xg-row">
        <div class="xgp-xg-block home">
          <span class="xgp-xg-num">${xgH.toFixed(3)}</span>
          <span class="xgp-xg-lbl">xG Local</span>
        </div>
        <div class="xgp-xg-sep">🔥</div>
        <div class="xgp-xg-block away">
          <span class="xgp-xg-num">${xgA.toFixed(3)}</span>
          <span class="xgp-xg-lbl">xG Visita</span>
        </div>
      </div>
      <div class="xgp-section-title">1 X 2</div>
      <div class="xgp-1x2">
        <div class="xgp-outcome ${win >= draw && win >= loss ? 'best' : ''}">
          <span class="xgp-out-pct">${win}%</span>
          <span class="xgp-out-lbl">Victoria<br>${m.home.split(' ')[0]}</span>
        </div>
        <div class="xgp-outcome ${draw >= win && draw >= loss ? 'best' : ''}">
          <span class="xgp-out-pct">${draw}%</span>
          <span class="xgp-out-lbl">Empate</span>
        </div>
        <div class="xgp-outcome ${loss >= win && loss >= draw ? 'best' : ''}">
          <span class="xgp-out-pct">${loss}%</span>
          <span class="xgp-out-lbl">Victoria<br>${m.away.split(' ')[0]}</span>
        </div>
      </div>
      <div class="xgp-bar-wrap">
        <div class="xgp-bar-seg win"  style="width:${win}%"></div>
        <div class="xgp-bar-seg draw" style="width:${draw}%"></div>
        <div class="xgp-bar-seg loss" style="width:${loss}%"></div>
      </div>
      <div class="xgp-bar-legend">
        <span class="leg-w">🟢 Local</span><span class="leg-d">🟡 Empate</span><span class="leg-l">🔴 Visita</span>
      </div>
      <div class="xgp-section-title">Ambos Anotan</div>
      <div class="xgp-btts">
        <div class="xgp-btts-item ${bttsY >= 50 ? 'best' : ''}">
          <span class="xgp-btts-pct">${bttsY}%</span><span class="xgp-btts-lbl">Sí</span>
        </div>
        <div class="xgp-btts-item ${bttsN >= 50 ? 'best' : ''}">
          <span class="xgp-btts-pct">${bttsN}%</span><span class="xgp-btts-lbl">No</span>
        </div>
      </div>
      <div class="xgp-section-title">Más / Menos Goles</div>
      <div class="xgp-ou-grid">
        ${[0.5, 1.5, 2.5, 3.5, 4.5].map(line => `
          <div class="xgp-ou-row">
            <span class="xgp-ou-line">±${line}</span>
            <div class="xgp-ou-pair">
              <span class="xgp-ou-over ${ou['+' + line] >= 50 ? 'over-hot' : ''}">+${ou['+' + line]}%</span>
              <span class="xgp-ou-under">-${ou['-' + line]}%</span>
            </div>
          </div>`).join('')}
      </div>
      <div class="xgp-section-title">Marcadores Más Probables</div>
      <div class="xgp-scores">
        ${top5.map((x, i) => `
          <div class="xgp-score-item ${i === 0 ? 'top-score' : ''}">
            <span class="xgp-score-badge">${x.s}</span>
            <div class="xgp-score-bar-wrap"><div class="xgp-score-bar" style="width:${Math.min(100, x.p * 4)}%"></div></div>
            <span class="xgp-score-pct">${x.p}%</span>
          </div>`).join('')}
      </div>
    </div>`;
  }

  /* ── API real ── */
  async function fetchFromAPI() {
    const today = new Date().toISOString().slice(0, 10);
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${today}&timezone=America/Lima`,
      { headers: { 'x-apisports-key': API_KEY } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status} — verifica tu conexión`);
    const json = await res.json();
    if (json.errors && Object.keys(json.errors).length) {
      const msg = Object.values(json.errors)[0];
      throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }
    if (!json.response || !json.response.length) return [];
    return json.response
      .filter(f => LEAGUE_IDS.includes(f.league.id))
      .map(normalizeAPIMatch);
  }
  function normalizeAPIMatch(f) {
    const st = f.fixture.status; let status = 'scheduled';
    if (['1H','2H','HT','ET','P','BT','SUSP','INT','LIVE'].includes(st.short)) status = 'live';
    else if (['FT','AET','PEN'].includes(st.short)) status = 'finished';
    else if (['PST','CANC','ABD'].includes(st.short)) status = 'cancelled';
    return {
      id: f.fixture.id, league: f.league.name, leagueKey: HXG.LEAGUE_MAP[f.league.name] || null,
      country: f.league.country, home: f.teams.home.name, away: f.teams.away.name,
      homeLogo: f.teams.home.logo, awayLogo: f.teams.away.logo,
      scoreHome: f.goals.home ?? null, scoreAway: f.goals.away ?? null,
      minute: st.elapsed ?? null, statusShort: st.short, status, time: f.fixture.date,
    };
  }

  /* ── Demo data — leagueKey mapeado correctamente ── */
  function getDemoData() {
    const n = new Date(), ago = m => new Date(n - m * 60000).toISOString(), fwd = m => new Date(n + m * 60000).toISOString();
    return [
      { id:1, league:'🇹🇷 Süper Lig', leagueKey:'SüperLig', country:'', 
      home:'Alanyaspor', away:'Samsunspor', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.4]*60*60*10000).toISOString()},
      
      { id:2, league:'🇮🇹 Serie A', leagueKey:'SerieA', country:'', 
      home:'Cagliari', away:'Atalanta', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.65]*60*60*10000).toISOString()},
      
      { id:3, league:'🇹🇷 Süper Lig', leagueKey:'SüperLig', country:'', 
      home:'Beşiktaş', away:'Karagumruk', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.7]*60*60*10000).toISOString()},
      { id:4, league:'🇹🇷 Süper Lig', leagueKey:'SüperLig', country:'', 
      home:'Konyaspor', away:'Trabzonspor', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.7]*60*60*10000).toISOString()},
      
      { id:5, league:'🇮🇹 Serie A', leagueKey:'SerieA', country:'', 
      home:'Lazio', away:'Udinese', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.875]*60*60*10000).toISOString()},
      { id:6, league:'🇪🇸 La Liga', leagueKey:'LaLiga', country:'', 
      home:'Espanyol', away:'Levante', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.9]*60*60*10000).toISOString()},
      { id:7, league:'🇽🇪 Premier League', leagueKey:'PremierLeague', country:'', 
      home:'Manchester Utd', away:'Brentford', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.9]*60*60*10000).toISOString()},
      { id:8, league:'🇵🇪 Liga 1', leagueKey:'Liga1', country:'', 
      home:'AD Tarma', away:'Los Chankas', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([2]*60*60*10000).toISOString()},
      
      { id:9, league:'🇦🇷 Liga Profesional', leagueKey:'LigaProfesional', country:'', 
      home:'Vélez Sarsfield', away:'Unión Santa Fe', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1+1.175]*60*60*10000).toISOString()},
      { id:10, league:'🇧🇷 Brasileirao Serie B', leagueKey:'🇧BrasileiraoSerieB', country:'', 
      home:'Athletic Club', away:'Náutico', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([2.2]*60*60*10000).toISOString()},
      { id:11, league:'🇦🇷 Liga Profesional', leagueKey:'LigaProfesional', country:'', 
      home:'Huracán', away:'Argentinos Jrs.', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([2.4]*60*60*10000).toISOString()},

      { id:12, league:'🇵🇪 Liga 1', leagueKey:'Liga1', country:'', 
      home:'Deportivo Garcilaso', away:'Melgar', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([2.4]*60*60*10000).toISOString()},
      
      { id:13, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Al-Gharafa', away:'Al-Shahaniya', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.425]*60*60*10000).toISOString()},
      { id:14, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Al-Rayyan', away:'Al Arabi', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.425]*60*60*10000).toISOString()},
      { id:15, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Al-Wakra', away:'Al Sailiya', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.425]*60*60*10000).toISOString()},
      { id:16, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Qatar SC', away:'Al-Duhail', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.425]*60*60*10000).toISOString()},
      { id:17, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Umm-Salal', away:'Al Ahli Doha', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.425]*60*60*10000).toISOString()},
      { id:18, league:'🇶🇦 Qatar Stars League', leagueKey:'QatarStarsLeague', country:'', 
      home:'Al-Sadd', away:'Shamal', scoreHome:null, scoreAway:null, minute:null, 
      status:'scheduled', statusShort:'NS', time: new Date([1.65]*60*60*10000).toISOString()},
      
      
      
      
      /*      HORA = 1 + .4 (Este último es 5h + u*h)
      { id:4,  league:'Champions League', leagueKey:'ChampionsLeague', country:'Europe',  home:'PSG',                away:'Bayern Múnich',    scoreHome:1,  scoreAway:1,  minute:55,  status:'live',      statusShort:'2H', time:ago(55)  },
      { id:5,  league:'Bundesliga',       leagueKey:'Bundesliga',      country:'Germany', home:'Bayern Múnich',      away:'Borussia Dortmund',scoreHome:3,  scoreAway:1,  minute:90,  status:'finished',  statusShort:'FT', time:ago(120) },
      { id:6,  league:'Liga 1',           leagueKey:'Liga1',           country:'Perú',    home:'Universitario',      away:'Alianza Lima',     scoreHome:1,  scoreAway:2,  minute:90,  status:'finished',  statusShort:'FT', time:ago(90)  },
      { id:7,  league:'Ligue 1',          leagueKey:'Ligue1',          country:'France',  home:'PSG',                away:'Marsella',         scoreHome:2,  scoreAway:0,  minute:90,  status:'finished',  statusShort:'FT', time:ago(100) },
      { id:9,  league:'Premier League',   leagueKey:'PremierLeague',   country:'England', home:'Chelsea',            away:'Manchester City',  scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS', time:fwd(90)  },
      */];
  }

  /* ── Load & Refresh ── */
  async function loadMatches() {
    showLoading(true);
    try {
      if (USE_DEMO_DATA) { await new Promise(r => setTimeout(r, 500)); allMatches = getDemoData(); }
      else               { allMatches = await fetchFromAPI(); }
      updateCounts();
      renderMatches();
      flashLiveDot();
      updateRequestCounter();
      /* Notificar al módulo de Pronósticos que hay datos nuevos */
      if (typeof window.HXG_onMatchesReady === 'function') window.HXG_onMatchesReady(allMatches);
    } catch (err) { showError(err.message); }
    finally       { showLoading(false); }
  }
  /* Refresca según si hay partidos en vivo o no */
  function scheduleNextRefresh() {
    if (refreshTimer) clearInterval(refreshTimer);
    const hasLive = allMatches.some(m => m.status === 'live');
    const delay   = hasLive ? REFRESH_LIVE_MS : REFRESH_IDLE_MS;
    const label   = hasLive ? '3 min (en vivo)' : '30 min (sin partidos en vivo)';
    console.log(`[HXG] Próximo refresh en ${label}`);
    refreshTimer = setTimeout(async () => {
      await loadMatches();
      scheduleNextRefresh(); /* reprograma después de cada carga */
    }, delay);
  }

  /* ── Render lista ── */
  function renderMatches() {
    let filtered = allMatches;
    if (activeTab === 'live')      filtered = allMatches.filter(m => m.status === 'live');
    if (activeTab === 'finished')  filtered = allMatches.filter(m => m.status === 'finished');
    if (activeTab === 'favorites') filtered = allMatches.filter(m => favorites.has(m.id));
    const order = { live:0, scheduled:1, finished:2, cancelled:3 };
    filtered = [...filtered].sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9));
    if (!filtered.length) { listEl.innerHTML = emptyState(); return; }
    const byLeague = {};
    filtered.forEach(m => { if (!byLeague[m.league]) byLeague[m.league] = { country: m.country, matches: [] }; byLeague[m.league].matches.push(m); });
    listEl.innerHTML = Object.entries(byLeague).map(([lg, g]) => renderLeagueGroup(lg, g)).join('');

    listEl.querySelectorAll('.match-row').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', e => {
        if (e.target.closest('.fav-btn')) return;
        const id = Number(row.dataset.id);
        const m  = allMatches.find(x => x.id === id);
        if (!m) return;
        if (selectedMatch === id) { closeXGPanel(); return; }
        openXGPanel(m);
      });
    });
    listEl.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); toggleFav(Number(btn.dataset.id)); });
    });
    if (selectedMatch !== null) {
      const row = listEl.querySelector(`.match-row[data-id="${selectedMatch}"]`);
      if (row) row.classList.add('match-selected');
    }
  }

  function renderLeagueGroup(leagueName, group) {
    return `<div class="league-group">
      <div class="league-group-header">
        <span class="league-flag">${countryFlag(group.country)}</span>
        <span class="league-group-name">${leagueName}</span>
        <div class="league-group-line"></div>
      </div>
      ${group.matches.map(renderMatchRow).join('')}
    </div>`;
  }

  function renderMatchRow(m) {
    const isFav = favorites.has(m.id), isLive = m.status === 'live', isDone = m.status === 'finished';
    let centerHTML;
    if (isLive) {
      centerHTML = `<div class="match-center live-center">
        <div class="match-score live-score">${m.scoreHome}<span class="score-sep">—</span>${m.scoreAway}</div>
        <div class="match-minute"><span class="live-pip"></span>${m.minute}'</div>
      </div>`;
    } else if (isDone) {
      centerHTML = `<div class="match-center done-center">
        <div class="match-score done-score">${m.scoreHome}<span class="score-sep">—</span>${m.scoreAway}</div>
        <div class="match-ft-label">FT</div>
      </div>`;
    } else {
      const d = new Date(m.time);
      const hhmm = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
      centerHTML = `<div class="match-center sched-center">
        <div class="match-kickoff">${hhmm}</div>
        <div class="match-vs-label">VS</div>
      </div>`;
    }
    const logo = (src, alt) => src ? `<img class="team-logo" src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">` : `<span class="team-logo-placeholder">⚽</span>`;
    return `<div class="match-row ${isLive ? 'is-live' : ''} ${isDone ? 'is-done' : ''}" data-id="${m.id}">
      <div class="match-team home-team">${logo(m.homeLogo, m.home)}<span class="team-name-match">${m.home}</span></div>
      ${centerHTML}
      <div class="match-team away-team"><span class="team-name-match">${m.away}</span>${logo(m.awayLogo, m.away)}</div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${m.id}">${isFav ? '★' : '☆'}</button>
    </div>`;
  }

  /* ── Helpers ── */
  function updateCounts() {
    const lN = allMatches.filter(m => m.status === 'live').length;
    const fN = allMatches.filter(m => favorites.has(m.id)).length;
    if (liveCountEl) liveCountEl.textContent = lN || '';
    if (favCountEl)  favCountEl.textContent  = fN || '';
  }
  function showLoading(show) {
    if (!loadingEl) return;
    loadingEl.style.display = show ? 'flex' : 'none';
    if (!show && listEl.contains(loadingEl)) listEl.removeChild(loadingEl);
  }
  function showError(msg) {
    listEl.innerHTML = `<div class="matches-error"><span>⚠️</span><p>${msg}</p><button onclick="location.reload()" class="retry-btn">↻ Reintentar</button></div>`;
  }
  function emptyState() {
    const msgs = { all:'No hay partidos hoy 📭', live:'No hay partidos en vivo 📺', finished:'Sin partidos finalizados 🏁', favorites:'Dale ★ a un partido ⭐' };
    return `<div class="matches-empty"><p>${msgs[activeTab] || msgs.all}</p></div>`;
  }
  function flashLiveDot() {
    if (!liveDotEl) return;
    liveDotEl.classList.add('flash');
    setTimeout(() => liveDotEl.classList.remove('flash'), 800);
  }
  const FLAGS = { England:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',Spain:'🇪🇸',Italy:'🇮🇹',Germany:'🇩🇪',France:'🇫🇷',Peru:'🇵🇪','Perú':'🇵🇪',Japan:'🇯🇵',Europe:'🌍',World:'🌐' };
  function countryFlag(c) { return FLAGS[c] || '🏆'; }

  /* Contador visual de requests gastados hoy */
  function updateRequestCounter() {
    if (USE_DEMO_DATA) return;
    const today = new Date().toISOString().slice(0, 10);
    const key   = 'hxg_req_' + today;
    const count = (parseInt(localStorage.getItem(key) || '0')) + 1;
    localStorage.setItem(key, count);
    const el = document.getElementById('req-counter');
    if (el) el.textContent = `${count} req hoy`;
    console.log(`[HXG] Requests usados hoy: ${count}/100`);
  }

  loadMatches().then(() => scheduleNextRefresh());
})();


/* ════════════════════════════════════════════════════════
   MÓDULO 3 — PRONÓSTICOS
   Calcula probs de todos los partidos, ordena por mayor
   diferencia entre el resultado dominante y los demás.
   ════════════════════════════════════════════════════════ */
(function PronosticosModule() {

  const container = document.getElementById('section-pronosticos');
  if (!container) return;

  /* Crear estructura interna */
  /*
  container.innerHTML = `
    <main class="section-inner">
      <div class="pron-header">
        <h2 class="pron-title">🤑 Pronósticos Sugeridos</h2>
        <p class="pron-sub">Picks ordenados por la mayor diferencia de probabilidad entre el resultado dominante y los demás · Modelo Poisson Hidden xG</p>
      </div>
      <div id="pron-list" class="pron-list">
        <div class="pron-loading">
          <div class="spinner"></div>
          <span>Esperando partidos…</span>
        </div>
      </div>
    </main>`;
*/
  const pronList = document.getElementById('pron-list');

  /* Callback que llama el módulo de Partidos cuando carga datos */
  window.HXG_onMatchesReady = function(matches) {
    renderPronosticos(matches);
  };

  function renderPronosticos(matches) {
    if (typeof bases === 'undefined') {
      pronList.innerHTML = '<div class="pron-empty"><span>⚠️</span><p>Base de datos no disponible.</p></div>';
      return;
    }

    /* Calcular pick para cada partido */
    const picks = [];
    for (const m of matches) {
      const xgData = HXG.computeXG(m);
      if (!xgData) continue; /* sin datos → saltar */
      const { xgH, xgA } = xgData;
      const p = HXG.calcProbs(xgH, xgA, m.home, m.away);

      /* Determinar resultado dominante */
      const candidates = [
        { label: `Victoria ${m.home}`, pct: p.win,  type: 'win'  },
        { label: 'Empate',             pct: p.draw, type: 'draw' },
        { label: `Victoria ${m.away}`, pct: p.loss, type: 'loss' },
      ];
      const sorted = [...candidates].sort((a, b) => b.pct - a.pct);
      const best = sorted[0];
      const second = sorted[1];
      /* Diferencia dominante: pct_1 - pct_2 */
      const dominance = best.pct - second.pct;

      picks.push({
        m, p, xgH, xgA,
        best, second,
        dominance,
        win: p.win, draw: p.draw, loss: p.loss,
      });
    }

    if (!picks.length) {
      pronList.innerHTML = '<div class="pron-empty"><span>📊</span><p>No hay partidos con datos xG disponibles para hoy.</p></div>';
      return;
    }

    /* Ordenar descendente por dominancia */
    picks.sort((a, b) => b.dominance - a.dominance);

    /* Render */
    pronList.innerHTML = picks.map((pk, i) => renderPickCard(pk, i)).join('');
  }

  function renderPickCard(pk, idx) {
    const { m, win, draw, loss, best, dominance, xgH, xgA } = pk;
    const rank = idx + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;

    /* Clases de color según tipo dominante */
    const typeClass = best.type === 'win' ? 'pick-win' : best.type === 'draw' ? 'pick-draw' : 'pick-loss';
    const typeIcon  = best.type === 'win' ? '🟢' : best.type === 'draw' ? '🟡' : '🔴';

    /* Barra de dominancia (0-50 → 0-100%) */
    const domBar = Math.min(100, Math.round(dominance * 2));

    return `
      <div class="pron-card ${typeClass} ${rank <= 3 ? 'pron-top' : ''}">
        <div class="pron-card-rank">${medal}</div>
        <div class="pron-card-body">

          <!-- Match header -->
          <div class="pron-match-header">
            <span class="pron-league">${m.league}</span>
            <span class="pron-status ${m.status === 'live' ? 'pron-live' : ''}">
              ${m.status === 'live' ? `<span class="live-pip"></span>${m.minute}'` : m.status === 'finished' ? 'FT' : ''}
            </span>
          </div>

          <!-- Equipos -->
          <div class="pron-teams">
            <span class="pron-home">${m.home}</span>
            <span class="pron-vs">vs</span>
            <span class="pron-away">${m.away}</span>
          </div>

          <!-- Pick destacado -->
          <div class="pron-pick-row">
            <span class="pron-pick-icon">${typeIcon}</span>
            <span class="pron-pick-label">${best.label}</span>
            <span class="pron-pick-pct">${best.pct}%</span>
          </div>

          <!-- 1X2 compacto -->
          <div class="pron-1x2">
            <div class="pron-cell ${best.type === 'win'  ? 'dom' : ''}">
              <span class="pron-cell-pct">${win}%</span>
              <span class="pron-cell-lbl">Local</span>
            </div>
            <div class="pron-cell ${best.type === 'draw' ? 'dom' : ''}">
              <span class="pron-cell-pct">${draw}%</span>
              <span class="pron-cell-lbl">Empate</span>
            </div>
            <div class="pron-cell ${best.type === 'loss' ? 'dom' : ''}">
              <span class="pron-cell-pct">${loss}%</span>
              <span class="pron-cell-lbl">Visita</span>
            </div>
          </div>

          <!-- Barra 1X2 -->
          <div class="pron-bar-wrap">
            <div class="pron-bar-seg win"  style="width:${win}%"></div>
            <div class="pron-bar-seg draw" style="width:${draw}%"></div>
            <div class="pron-bar-seg loss" style="width:${loss}%"></div>
          </div>

          <!-- xG + dominancia -->
          <div class="pron-footer">
            <span class="pron-xg">xG ${xgH.toFixed(2)} — ${xgA.toFixed(2)}</span>
            <span class="pron-dom">Diferencia: <strong>+${dominance.toFixed(1)}pp</strong></span>
          </div>

        </div>
      </div>`;
  }

})();
