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
  'UEFA Champions League': 'ChampionsLeague',
  'CONMEBOL Libertadores': 'CopaLibertadores',
  'CONMEBOL Sudamericana': 'CopaSudamericana',
  "Ligat Ha'al": 'LigathaAl',
  'J1 League': 'J1League',
  'Pro League': 'SaudiProLeague',
  'Premier League': 'EgyptianPremierLeague',
};

HXG.TEAM_ALIASES = {
  //Champions
  'Paris Saint Germain': 'PSG',
  'Bayern München': 'Bayern Múnich',

  //Libertadores
  'Cruzeiro': 'Cruzeiro (Bra)',
  'Boca Juniors': 'Boca Jrs. (Arg)',

  'Sporting Cristal': 'Sporting Cristal (Per)',
  'Junior': 'Junior (Col)',

  'Lanus': 'Lanús (Arg)',
  'LDU de Quito': 'LDU Quito (Ecu)',

  'Libertad Asuncion': 'Libertad (Par)',
  'Independiente del Valle': 'Ind. del Valle (Ecu)',
//No existe Venezuela xd
  'UCV': 'Universidad Central (Ven)',
  'Rosario Central': 'Rosario Central (Arg)',

  'Deportes Tolima': 'Tolima (Col)',
  'Coquimbo Unido': 'Coquimbo (Chi)',

  //Sudamericana
  'Botafogo': 'Botafogo (Bra)',
  'Independiente Petrolero': 'Independiente (Bol)',

  'San Lorenzo': 'San Lorenzo (Arg)',
  'Santos': 'Santos (Bra)',
  
  'Barracas Central': 'Barracas Central (Arg)',
  'A. Italiano': 'Audax (Chi)',
  
  'Millonarios': 'Millonarios (Col)',
  'Sao Paulo': 'Sao Paulo (Bra)',
  
  'Deportivo Recoleta': 'Recoleta (Par)',
  'Deportivo Cuenca': 'Dep. Cuenca (Ecu)',
  
  "O'Higgins": "O'Higgins (Chi)",
  'Boston River': 'Boston River (Uru)',

  'Al-Shabab': 'Al Shabab',
  'Al-Fateh': 'Al Fateh',

  'NEOM': 'Neom SC',
  'Al-Hazm': 'Al Hazem',

  'Al Khaleej Saihat': 'Al Khaleej',
  'Al Najma': 'Al Najma',

  'Al-Hilal Saudi FC': 'Al-Hilal',
  'Damac': 'Damac',

  'Petrojet': 'Petrojet',
  'Ismaily SC': 'Ismaily',

  'Masr': 'ZED',
  'Pharco': 'Pharco',

  'El Mokawloon': 'Arab Contractors',
  'Ghazl El Mehalla': 'Ghazl El Mahallah',

  'Kahraba Ismailia': 'Kahrabaa Ismailia',
  'National Bank of Egypt': 'National Bank Egypt',
  
  'Maccabi Tel Aviv': 'Maccabi Tel Aviv',
  'Hapoel Beer Sheva': 'H. Beer Sheva',

  'Beitar Jerusalem': 'B. Jerusalem',
  'Hapoel Petah Tikva': 'H. Petah Tikva',
  // agrega los que necesites
  /* Para facilitarte mi querido YO del futuro
    'Independiente': 'Independiente',
    'Independiente': 'Independiente',
  */
};

/* Busca un equipo SÓLO en la liga indicada por el partido */
HXG.findTeam = function(teamName, leagueKey) {
  if (typeof bases === 'undefined') return null;
  const leagueData = bases[leagueKey];
  if (!leagueData) return null;
  const name = HXG.TEAM_ALIASES[teamName] || teamName;
  return leagueData[name] || null;
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
    Liga1:'🇵🇪 Liga 1', J1League:'🇯🇵 J1 League',  CopaLibertadores:'👑 Copa Libertadores',
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
   MÓDULO 2 — PARTIDOS DESDE API (1 request/día a las 00:01)
   ════════════════════════════════════════════════════════ */
(function MatchesModule() {

  /* ╔═══════════════════════════════════════════════════════╗
     ║         ⚙️  CONFIGURACIÓN — EDITA AQUÍ               ║
     ╠═══════════════════════════════════════════════════════╣
     ║                                                       ║
     ║  API_KEY → tu clave de api-sports.io                 ║
     ║                                                       ║
     ║  MY_LEAGUE_IDS → IDs de las ligas que quieres ver.   ║
     ║  SOLO aparecerán partidos de estas ligas, y SOLO si  ║
     ║  ambos equipos existen en tu bases[].                 ║
     ║                                                       ║
     ║  IDs comunes:                                         ║
     ║   2   → Champions League                             ║
     ║   3   → Europa League                                ║
     ║   39  → Premier League                               ║
     ║   61  → Ligue 1                                      ║
     ║   71  → Brasileirao Serie A                          ║
     ║   78  → Bundesliga                                   ║
     ║   135 → Serie A                                      ║
     ║   140 → La Liga                                      ║
     ║   253 → Liga 1 Perú                                  ║
     ║   292 → Liga Profesional Argentina                   ║
     ║   40  → Championship                                 ║
     ║   45  → FA Cup                                       ║
     ║   188 → Copa Libertadores                            ║
     ║                                                       ║
     ║  Busca cualquier liga en:                            ║
     ║  https://v3.football.api-sports.io/leagues           ║
     ╚═══════════════════════════════════════════════════════╝ */

  const API_KEY = '7657ca8f8011c6cbc615b2c74ccb75da';

  const MY_LEAGUE_IDS = [
    2,    // Champions League
    39,   // Premier League
    78,   // Bundesliga
    135,  // Serie A
    140,  // La Liga
    61,   // Ligue 1
    40,   // Championship
    45,   // FA Cup
    253,  // Liga 1 Perú
                         
    3   ,// Europa League    
                                                    
    71  ,// Brasileirao Serie A                            
    292 ,// Liga Profesional Argentina               
    13 ,// Copa Libertadores           
    11 ,// Copa Sudamericana 
    252, //J1League
    233,//Premier League - Egipto
    383, // Israel
    307, //Arabia Saudí
  ];
  /* ═══════════════════════════════════════════════════════
     PARTIDOS DE RESPALDO — se muestran si:
       • La API falla
       • No hay partidos hoy en tus ligas
       • El usuario no tiene conexión
     Edítalos libremente, mismo formato que siempre.
     ═══════════════════════════════════════════════════════ */
  const FALLBACK_MATCHES = [
    {
      id: 1,
      league:    'Premier League',
      leagueKey: 'PremierLeague',
      country:   'England',
      home:      'Arsenal',
      away:      'Liverpool',
      time:      '2025-05-03T15:00:00',
    },
    {
      id: 2,
      league:    'La Liga',
      leagueKey: 'LaLiga',
      country:   'Spain',
      home:      'Barcelona',
      away:      'Real Madrid',
      time:      '2025-05-03T18:00:00',
    },
  ];
  /* ═══ FIN CONFIGURACIÓN ═══════════════════════════════ */

  /* ── Clave de caché por día ── */
  const todayKey = () => 'hxg_matches_' + new Date().toISOString().slice(0, 10);

  /* ── Leer / guardar caché ── */
  function readCache() {
    try {
      const raw = localStorage.getItem(todayKey());
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
  function writeCache(data) {
    try {
      /* Limpiar cachés de días anteriores */
      Object.keys(localStorage)
        .filter(k => k.startsWith('hxg_matches_') && k !== todayKey())
        .forEach(k => localStorage.removeItem(k));
      localStorage.setItem(todayKey(), JSON.stringify(data));
    } catch { /* storage lleno → ignorar */ }
  }

  /* ── Llamada a la API (solo 1 vez por día) ── */
  async function fetchTodayFromAPI() {
    const cached = readCache();
    if (cached) {
      console.log('[HXG] Partidos desde caché local (0 requests gastados)');
      return cached;
    }

    const today = new Date().toISOString().slice(0, 10);
    console.log(`[HXG] Consultando API para ${today}…`);

    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${today}&timezone=America/Lima`,
      { headers: { 'x-apisports-key': API_KEY } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    if (json.errors && Object.keys(json.errors).length) {
      const msg = Object.values(json.errors)[0];
      throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }

    const raw = (json.response || [])
      /* 1. Solo las ligas que decidiste */
      //.filter(f => { console.log(f.league.id, f.league.name); return MY_LEAGUE_IDS.includes(f.league.id); })
      .filter(f => MY_LEAGUE_IDS.includes(f.league.id))
      /* 2. Normalizar */
      .map((f, i) => {
        const leagueKey = HXG.LEAGUE_MAP[f.league.name] || null;
        return {
          id:        f.fixture.id || (9000 + i),
          league:    f.league.name,
          leagueKey,
          country:   f.league.country,
          home:      f.teams.home.name,
          away:      f.teams.away.name,
          time:      f.fixture.date,
        };
      })
      /* 3. Solo los que tienen AMBOS equipos en bases[] */
      
      .filter(m => {
        if (!m.leagueKey || typeof bases === 'undefined') return false;
        const leagueData = bases[m.leagueKey];
        if (!leagueData) return false;
        const homeName = HXG.TEAM_ALIASES[m.home] || m.home;
        const awayName = HXG.TEAM_ALIASES[m.away] || m.away;
        const hasHome = !!leagueData[homeName];
        const hasAway = !!leagueData[awayName];
        if (!hasHome || !hasAway) {
          console.log(`[HXG] Omitido "${m.home} vs ${m.away}" — equipo sin datos en bases[]`);
        }
        return hasHome && hasAway;
      });

    writeCache(raw);
    console.log(`[HXG] ${raw.length} partidos guardados en caché. 1 request gastado hoy.`);
    updateRequestBadge();
    return raw;
  }

  /* ── Contador visual de requests ── */
  function updateRequestBadge() {
    const key   = 'hxg_req_' + new Date().toISOString().slice(0, 10);
    const count = parseInt(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, count);
    const el = document.getElementById('req-counter');
    if (el) el.textContent = `${count} req hoy`;
  }

  /* ── Programar la llamada de 00:01 ── */
  function scheduleDaily() {
    const now   = new Date();
    const next  = new Date(now);
    next.setHours(3, 24, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);   // ya pasó → mañana
    const msUntil = next - now;
    const hh = Math.floor(msUntil / 3600000);
    const mm = Math.floor((msUntil % 3600000) / 60000);
    console.log(`[HXG] Próxima actualización automática en ${hh}h ${mm}m (a las 00:01)`);
    setTimeout(async () => {
      /* Borrar caché del día anterior para forzar fetch fresco */
      localStorage.removeItem(todayKey());
      try {
        const matches = await fetchTodayFromAPI();
        allMatchesRef.length = 0;
        matches.forEach(m => allMatchesRef.push(m));
        renderMatches();
        updateCounts();
        notifyPronosticos();
      } catch (e) {
        console.warn('[HXG] Fetch automático de 00:01 falló:', e.message);
      }
      scheduleDaily(); // reprogramar para mañana
    }, msUntil);
  }

  /* ── Estado ── */
  let allMatchesRef = [];
  let favorites     = loadFavs();
  let activeTab     = 'all';
  let selectedMatch = null;

  const listEl      = document.getElementById('matches-list');
  const liveCountEl = document.getElementById('live-count');
  const favCountEl  = document.getElementById('fav-count');
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

  /* ── Tabs (Todos y Favoritos) ── */
  document.querySelectorAll('.m-tab').forEach(btn => {
    const f = btn.dataset.filter;
    if (f === 'live' || f === 'finished') btn.style.display = 'none';
    btn.addEventListener('click', () => {
      document.querySelectorAll('.m-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeTab = f;
      renderMatches();
    });
  });

  /* ── Favoritos ── */
  function loadFavs() {
    try { return new Set(JSON.parse(localStorage.getItem('hxg_favs') || '[]')); }
    catch { return new Set(); }
  }
  function saveFavs() { localStorage.setItem('hxg_favs', JSON.stringify([...favorites])); }
  function toggleFav(id) {
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    saveFavs(); updateCounts();
    if (activeTab === 'favorites') { renderMatches(); return; }
    const btn = listEl.querySelector(`.fav-btn[data-id="${id}"]`);
    if (btn) {
      const on = favorites.has(id);
      btn.classList.toggle('active', on);
      btn.textContent = on ? '★' : '☆';
    }
  }

  /* ── Panel xG ── */
  function openXGPanel(m) {
    selectedMatch = m.id;
    listEl.querySelectorAll('.match-row').forEach(r => r.classList.remove('match-selected'));
    const row = listEl.querySelector(`.match-row[data-id="${m.id}"]`);
    if (row) row.classList.add('match-selected');
    splitWrap.classList.add('panel-open');
    xgPane.setAttribute('aria-hidden', 'false');
    const xgData = HXG.computeXG(m);
    if (!xgData) {
      xgPane.innerHTML = buildShell(m, `<div class="xgp-no-data">
        <span>📊</span>
        <p>Sin datos xG para <strong>${m.home}</strong> o <strong>${m.away}</strong> en <em>${m.league}</em>.</p>
        <p class="xgp-hint">Verifica que los nombres coincidan con bases[].</p>
      </div>`);
    } else {
      const { xgH, xgA } = xgData;
      xgPane.innerHTML = buildShell(m, buildProbsHTML(xgH, xgA, HXG.calcProbs(xgH, xgA, m.home, m.away), m));
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
    const d    = new Date(m.time);
    const dia  = d.toLocaleDateString('es-PE', { weekday:'long', day:'numeric', month:'long' });
    const hora = d.toLocaleTimeString('es-PE', { hour:'2-digit', minute:'2-digit' });
    return `<div class="xgp-inner">
      <div class="xgp-topbar">
        <span class="xgp-league">${m.league}</span>
        <button class="xgp-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="xgp-matchup">
        <div class="xgp-team home">${m.home}</div>
        <div class="xgp-mid">
          <span class="xgp-kickoff-date">${dia}</span>
          <span class="xgp-kickoff-time">${hora}</span>
          <span class="xgp-vs">VS</span>
        </div>
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

  /* ── Render ── */
  function renderMatches() {
    let filtered = activeTab === 'favorites'
      ? allMatchesRef.filter(m => favorites.has(m.id))
      : [...allMatchesRef];

    filtered.sort((a, b) => new Date(a.time) - new Date(b.time));

    if (!filtered.length) {
      listEl.innerHTML = `<div class="matches-empty"><p>${
        activeTab === 'favorites'
          ? 'Dale ★ a un partido ⭐'
          : 'No hay partidos programados para hoy 📭'
      }</p></div>`;
      return;
    }

    const byLeague = {};
    filtered.forEach(m => {
      if (!byLeague[m.league]) byLeague[m.league] = { country: m.country, matches: [] };
      byLeague[m.league].matches.push(m);
    });

    listEl.innerHTML = Object.entries(byLeague).map(([lg, g]) => `
      <div class="league-group">
        <div class="league-group-header">
          <span class="league-flag">${countryFlag(g.country)}</span>
          <span class="league-group-name">${lg}</span>
          <div class="league-group-line"></div>
        </div>
        ${g.matches.map(renderRow).join('')}
      </div>`).join('');

    listEl.querySelectorAll('.match-row').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', e => {
        if (e.target.closest('.fav-btn')) return;
        const id = Number(row.dataset.id);
        const m  = allMatchesRef.find(x => x.id === id);
        if (!m) return;
        if (selectedMatch === id) { closeXGPanel(); return; }
        openXGPanel(m);
      });
    });
    listEl.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFav(Number(btn.dataset.id));
      });
    });
    if (selectedMatch !== null) {
      const row = listEl.querySelector(`.match-row[data-id="${selectedMatch}"]`);
      if (row) row.classList.add('match-selected');
    }
  }

  function renderRow(m) {
    const isFav = favorites.has(m.id);
    const d     = new Date(m.time);
    const hhmm  = d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    const fecha = d.toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric', month: 'short' });
    return `<div class="match-row" data-id="${m.id}">
      <div class="match-team home-team"><span class="team-name-match">${m.home}</span></div>
      <div class="match-center sched-center">
        <div class="match-kickoff">${hhmm}</div>
        <div class="match-date-label">${fecha}</div>
      </div>
      <div class="match-team away-team"><span class="team-name-match">${m.away}</span></div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${m.id}" title="Favorito">${isFav ? '★' : '☆'}</button>
    </div>`;
  }

  /* ── Helpers ── */
  function updateCounts() {
    const fN = allMatchesRef.filter(m => favorites.has(m.id)).length;
    if (liveCountEl) liveCountEl.textContent = '';
    if (favCountEl)  favCountEl.textContent  = fN || '';
  }
  const FLAGS = {
    England:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', Spain:'🇪🇸', Italy:'🇮🇹', Germany:'🇩🇪',
    France:'🇫🇷', Peru:'🇵🇪', Perú:'🇵🇪', Japan:'🇯🇵',
    Europe:'🌍', World:'🌐', Brazil:'🇧🇷', Argentina:'🇦🇷',
    Mexico:'🇲🇽', Colombia:'🇨🇴', Saudi:'🇸🇦',
  };
  function countryFlag(c) { return FLAGS[c] || '🏆'; }

  function notifyPronosticos() {
    window.HXG_currentMatches = allMatchesRef;
    if (typeof window.HXG_onMatchesReady === 'function') window.HXG_onMatchesReady(allMatchesRef);
  }

  /* ── INIT ── */
  async function init() {
    /* Mostrar loading */
    listEl.innerHTML = '<div class="matches-loading"><div class="spinner"></div><span>Cargando partidos…</span></div>';
    try {
      const matches = await fetchTodayFromAPI();
      allMatchesRef.push(...(matches.length ? matches : FALLBACK_MATCHES.map(m => ({ ...m }))));
      if (!matches.length) {
        console.log('[HXG] Sin partidos de API hoy → mostrando fallback');
      }
    } catch (err) {
      console.warn('[HXG] Error API:', err.message, '→ usando fallback');
      allMatchesRef.push(...FALLBACK_MATCHES.map(m => ({ ...m })));
    }
    renderMatches();
    updateCounts();
    notifyPronosticos();
    scheduleDaily();
  }

  init();

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
