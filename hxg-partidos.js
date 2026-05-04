
/* ════════════════════════════════════════════════════════
   MÓDULO 2 — PARTIDOS DESDE API (1 request/día a las 00:01)
   Depende de: hxg-core.js, bases.js
   ════════════════════════════════════════════════════════ */
(function MatchesModule() {

  /* ╔═══════════════════════════════════════════════════════╗
     ║         ⚙️  CONFIGURACIÓN — EDITA AQUÍ                ║
     ╠═══════════════════════════════════════════════════════╣
     ║                                                       ║
     ║  API_KEY → tu clave de api-sports.io                  ║
     ║                                                       ║
     ║  MY_LEAGUE_IDS → IDs de las ligas que quieres ver.    ║
     ║  SOLO aparecerán partidos de estas ligas, y SOLO si   ║
     ║  ambos equipos existen en tu bases[].                 ║
     ║                                                       ║
     ║  IDs comunes:                                         ║
     ║   2   → Champions League                              ║
     ║   3   → Europa League                                 ║
     ║   39  → Premier League                                ║
     ║   71  → Brasileirao Serie A                           ║
     ║   188 → Copa Libertadores                             ║
     ║                                                       ║
     ║  Busca cualquier liga en:                             ║
     ║  https://v3.football.api-sports.io/leagues            ║
     ╚═══════════════════════════════════════════════════════╝ 
     const MY_LEAGUE_IDS = [
    2,    // UEFA Champions League
    3,    // UEFA Europa League
    39,   // Premier League
    848,  // UEFA Europa Conference League
    78,   // Bundesliga
    135,  // Serie A
    140,  // La Liga
    61,   // Ligue 1
    40,   // Championship
    45,   // FA Cup
    253,  // Liga 1 Perú
    79,   // 2. Bundesliga
    71,   // Brasileirao Serie A
    292,  // Liga Profesional Argentina
    13,   // Copa Libertadores
    11,   // Copa Sudamericana
    252,  // J1 League
    233,  // Premier League - Egipto
    383,  // Israel
    307,  // Arabia Saudí
    94,   // Primeira Liga
    98,   // J1 League
    120,  // Superliga
    103,  // Eliteserien
  ];
  */

  const API_KEY = '7657ca8f8011c6cbc615b2c74ccb75da';

  const MY_LEAGUE_IDS = [
    // ── EUROPA ÉLITE ──────────────────────────────────
    39,   // Premier League (Inglaterra) YALA
    140,  // La Liga (España)
    135,  // Serie A (Italia)
    78,   // Bundesliga (Alemania)
    61,   // Ligue 1 (Francia)
  
    // ── EUROPA SEGUNDA LÍNEA ──────────────────────────
    40,   // Championship (Inglaterra)
    94,   // Primeira Liga (Portugal)
    203,  // Süper Lig (Turquía)
    88,   // Eredivisie (Países Bajos)
    235,  // Premier Liga (Rusia)
    144,  // Jupiler Pro League (Bélgica) YALA
    197,  // Super League 1 (Grecia)
    136,  // Serie B (Italia)
    79,   // 2. Bundesliga (Alemania)
    141,  // LaLiga Hypermotion (España)
    207,  // Super League (Suiza)
  
    // ── SUDAMÉRICA ────────────────────────────────────
    128,  // Torneo Betano (Argentina) ⚠️ verificar — puede ser 130
    71,   // Campeonato Brasileiro Série A (Brasil)
    262,  // Liga MX (México)
    253,  // Major League Soccer (MLS, USA)
    268,  // Liga AUF (Uruguay) ⚠️ verificar
    239,  // Liga Dimayor (Colombia) ⚠️ verificar
    281,  // Liga 1 (Perú) ⚠️ verificar //253 XD
    278,  // Primera División (Paraguay) ⚠️ verificar
    72,   // Campeonato Brasileiro Série B (Brasil)
    265,  // Primera División (Chile) ⚠️ verificar nombre exacto
    258,  // LigaPro Serie A (Ecuador) ⚠️ verificar
  
    // ── ASIA / ORIENTE MEDIO ─────────────────────────
    307,  // Saudi Pro League (Arabia Saudita)
    98,   // Qatar Stars League (Catar) ⚠️ verificar
    188,  // UAE Pro League (Emiratos) ⚠️ verificar
    98,   // J1 League (Japón)
  
    // ── ÁFRICA ───────────────────────────────────────
    233,  // Egyptian Premier League (Egipto)
    288,  // Betway Premiership (Sudáfrica) ⚠️ verificar
  
    // ── OTROS EUROPA ─────────────────────────────────
    119,  // Superliga (Dinamarca)
    103,  // Eliteserien (Noruega)
    113,  // Allsvenskan (Suecia)
    383,  // Ligat ha'Al (Israel)
    169,  // Chinese Super League (China)
    333,  // Premier League (Ucrania) ⚠️ verificar
    120,  // 1. División (Dinamarca) ⚠️ verificar
  ];

  /* ═══════════════════════════════════════════════════════
     PARTIDOS DE RESPALDO — se muestran si:
       • La API falla
       • No hay partidos hoy en tus ligas
       • El usuario no tiene conexión
     ═══════════════════════════════════════════════════════ */
  const FALLBACK_MATCHES = [
    {
      id:        1,
      league:    'Premier League',
      leagueKey: 'PremierLeague',
      country:   'England',
      home:      'Arsenal',
      away:      'Liverpool',
      time:      '2025-05-03T15:00:00',
    },
    {
      id:        2,
      league:    'La Liga',
      leagueKey: 'LaLiga',
      country:   'Spain',
      home:      'Barcelona',
      away:      'Real Madrid',
      time:      '2025-05-03T18:00:00',
    },
  ];
  /* ═══ FIN CONFIGURACIÓN ═══════════════════════════════ */

  /* ── Fecha Lima ── */
  function getLimaDate(d = new Date()) {
    const lima = new Date(d.getTime() - 5 * 3600000);
    return lima.toISOString().slice(0, 10);
  }

  const limaToday  = getLimaDate();
  let selectedDate = getLimaDate();
  const todayKey   = () => 'hxg_matches_' + selectedDate;

  /* ── Navegación de fechas ── */
  function getLimaDateOffset(offset) {
    const d = new Date(limaToday + 'T12:00:00');
    d.setDate(d.getDate() + offset);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  const dateMin = getLimaDateOffset(-1); // ayer
  const dateMax = getLimaDateOffset(+1); // mañana

  function formatDateLabel(dateStr) {
    if (dateStr === limaToday)            return '📅 Hoy';
    if (dateStr === getLimaDateOffset(-1)) return '⬅️ Ayer';
    if (dateStr === getLimaDateOffset(+1)) return '➡️ Mañana';
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  function syncDateLabels() {
    const label1 = document.getElementById('date-label');
    const label2 = document.getElementById('pron-date-label');
    const txt = formatDateLabel(selectedDate);
    if (label1) label1.textContent = txt;
    if (label2) label2.textContent = txt;
  }

  async function changeDate(offset) {
    const d = new Date(selectedDate + 'T12:00:00');
    d.setDate(d.getDate() + offset);
    const next = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    if (next < dateMin || next > dateMax) return;
    selectedDate = next;
    syncDateLabels();
    closeXGPanel();
    allMatchesRef.length = 0;
    listEl.innerHTML = '<div class="matches-loading"><div class="spinner"></div><span>Cargando…</span></div>';
    /* Spinner también en pronósticos */
    const pronList = document.getElementById('pron-list');
    if (pronList) pronList.innerHTML = '<div class="pron-loading"><div class="spinner"></div><span>Cargando…</span></div>';
    try {
      const matches = await fetchTodayFromAPI();
      allMatchesRef.push(...matches);
    } catch (e) {
      allMatchesRef.push(...FALLBACK_MATCHES);
    }
    renderMatches();
    updateCounts();
    notifyPronosticos();
  }

  /* Exponer para que pronósticos pueda llamar */
  HXG.changeDate = changeDate;

  function initDateNav() {
    syncDateLabels();
    const btnPrev1 = document.getElementById('date-prev');
    const btnNext1 = document.getElementById('date-next');
    const btnPrev2 = document.getElementById('pron-date-prev');
    const btnNext2 = document.getElementById('pron-date-next');

    [btnPrev1, btnPrev2].forEach(btn => btn && btn.addEventListener('click', () => changeDate(-1)));
    [btnNext1, btnNext2].forEach(btn => btn && btn.addEventListener('click', () => changeDate(+1)));
  }

  /* ── Caché con TTL (tiempo de vida) ──────────────────────────────
     Cada entrada guarda { timestamp, data } en lugar de solo data.
     Al leer, se verifica si el tiempo de vida ya expiró.

     TTL según tipo de fecha:
       • Pasado  → Infinity   (los resultados ya no cambian)
       • Hoy     → 15 minutos (puede haber nuevos partidos agregados)
       • Futuro  → 1 hora     (los horarios pueden cambiar)
  ── */
  function getTTL(dateStr) {
    const today = getLimaDate();
    if (dateStr < today) return Infinity; // pasado: nunca expira
  
      // Calculamos ms que faltan hasta medianoche en Lima
      const ahora     = new Date();
      const limaAhora = new Date(ahora.getTime() - 5 * 3600000);
      const manana    = new Date(limaAhora);
      manana.setUTCHours(24, 0, 0, 0);
    if (dateStr === today) {
 // próxima medianoche Lima (UTC-5 = UTC+0 del día siguiente)
      return manana - limaAhora;        // ms hasta medianoche
    }
  
    return manana - limaAhora;//6 * 60 * 60 * 1000; // mañana: 6 horas
  }

  function readCache() {
    try {
      const raw = localStorage.getItem(todayKey());
      if (!raw) return null;

      const entry = JSON.parse(raw);

      // Formato viejo (sin timestamp) → descartamos para forzar refetch
      if (!entry.timestamp || !entry.data) {
        localStorage.removeItem(todayKey());
        return null;
      }

      const ttl  = getTTL(selectedDate);
      const edad = Date.now() - entry.timestamp;

      if (edad > ttl) {
        // Caché expirado → lo borramos para que se haga un nuevo request
        localStorage.removeItem(todayKey());
        console.log(`[HXG] Caché de ${selectedDate} expirado (${Math.round(edad/60000)}m). Refetch.`);
        return null;
      }

      console.log(`[HXG] Caché válido de ${selectedDate} (${Math.round(edad/60000)}m de antigüedad).`);
      return entry.data;
    } catch { return null; }
  }

  function writeCache(data) {
    try {
      // Solo guardamos las últimas 7 fechas para no llenar el localStorage
      const keep = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return 'hxg_matches_' + d.toISOString().slice(0, 10);
      });
      Object.keys(localStorage)
        .filter(k => k.startsWith('hxg_matches_') && !keep.includes(k))
        .forEach(k => localStorage.removeItem(k));

      // Guardamos datos + timestamp para poder calcular el TTL al leer
      const entry = { timestamp: Date.now(), data };
      localStorage.setItem(todayKey(), JSON.stringify(entry));
    } catch { }
  }

  /* ── Llamada a la API ── */
  async function fetchTodayFromAPI() {
    const cached = readCache();
    if (cached) {
      console.log('[HXG] Partidos desde caché local (0 requests gastados)');
      return cached;
    }

    console.log(`[HXG] Consultando API para ${selectedDate}…`);
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${selectedDate}&timezone=America/Lima`,
      { headers: { 'x-apisports-key': API_KEY } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    if (json.errors && Object.keys(json.errors).length) {
      const msg = Object.values(json.errors)[0];
      throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }

    const raw = (json.response || [])
      .filter(f => MY_LEAGUE_IDS.includes(f.league.id))
      .map((f, i) => ({
        id:        f.fixture.id || (9000 + i),
        league:    f.league.name,
        leagueKey: HXG.LEAGUE_MAP[f.league.id] || null,
        country:   f.league.country,
        home:      f.teams.home.name,
        away:      f.teams.away.name,
        scoreHome: f.goals.home,
        scoreAway: f.goals.away,
        time:      f.fixture.date,
      }))
      .filter(m => {
        if (!m.leagueKey || typeof bases === 'undefined') return false;
        const leagueData = bases[m.leagueKey];
        if (!leagueData) return false;
        const homeName = HXG.TEAM_ALIASES[m.home] || m.home;
        const awayName = HXG.TEAM_ALIASES[m.away] || m.away;
        const hasHome  = !!leagueData[homeName];
        const hasAway  = !!leagueData[awayName];
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

  /* ── Contador de requests ── */
  function updateRequestBadge() {
    const key   = 'hxg_req_' + new Date().toISOString().slice(0, 10);
    const count = parseInt(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, count);
    const el = document.getElementById('req-counter');
    if (el) el.textContent = `${count} req hoy`;
  }

  /* ── Actualización automática a las 00:01 ── */
  function scheduleDaily() {
    const now  = new Date();
    const next = new Date(now);
    next.setHours(7, 15, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    const msUntil = next - now;
    const hh = Math.floor(msUntil / 3600000);
    const mm = Math.floor((msUntil % 3600000) / 60000);
    console.log(`[HXG] Próxima actualización automática en ${hh}h ${mm}m`);
    setTimeout(async () => {
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
      scheduleDaily();
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
  splitWrap.id        = 'matches-split';
  splitWrap.className = 'matches-split';
  const listPane = document.createElement('div');
  listPane.id        = 'matches-list-pane';
  listPane.className = 'matches-list-pane';
  const xgPane = document.createElement('div');
  xgPane.id        = 'matches-xg-pane';
  xgPane.className = 'matches-xg-pane';
  xgPane.setAttribute('aria-hidden', 'true');
  listEl.parentNode.insertBefore(splitWrap, listEl);
  splitWrap.appendChild(listPane);
  splitWrap.appendChild(xgPane);
  listPane.appendChild(listEl);

  /* ── Tabs ── */
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
    saveFavs();
    updateCounts();
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
    const dia  = d.toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' });
    const hora = d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    return `<div class="xgp-inner">
      <div class="xgp-topbar">
        <span class="xgp-league">${m.league}</span>
        <button class="xgp-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="xgp-matchup">
        <div class="xgp-team home">🔥${m.home}</div>
        <div class="xgp-mid">
          <span class="xgp-kickoff-date">${dia}</span>
          <span class="xgp-kickoff-time">${hora}</span>
          <span class="xgp-vs">VS</span>
        </div>
        <div class="xgp-team away">${m.away}🔥</div>
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
        <span class="leg-w">🟢 Local</span>
        <span class="leg-d">🟡 Empate</span>
        <span class="leg-l">🔵 Visita</span>
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

  /* ── Render lista ── */
  function renderMatches() {
    const filtered = activeTab === 'favorites'
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
    const done  = (m.scoreHome !== null && m.scoreAway !== null);

    if (done) {
      return `<div class="match-row" data-id="${m.id}">
        <div class="match-team home-team"><span class="team-name-match">${m.home}</span></div>
        <div class="match-center sched-center">
          <div class="match-score done-score">${m.scoreHome}<span class="score-sep">—</span>${m.scoreAway}</div>
          <div class="match-ft-label">FT</div>
        </div>
        <div class="match-team away-team"><span class="team-name-match">${m.away}</span></div>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${m.id}" title="Favorito">${isFav ? '★' : '☆'}</button>
      </div>`;
    }
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
    England: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', Spain: '🇪🇸', Italy: '🇮🇹', Germany: '🇩🇪',
    France: '🇫🇷', Peru: '🇵🇪', Perú: '🇵🇪', Japan: '🇯🇵',
    Europe: '🌍', World: '🌐', Brazil: '🇧🇷', Argentina: '🇦🇷',
    Mexico: '🇲🇽', Colombia: '🇨🇴', Saudi: '🇸🇦',
  };
  function countryFlag(c) { return FLAGS[c] || '🏆'; }

  function notifyPronosticos() {
    window.HXG_currentMatches = allMatchesRef;
    if (typeof window.HXG_onMatchesReady === 'function') {
      window.HXG_onMatchesReady(allMatchesRef);
    }
  }

  /* ── INIT ── */
  async function init() {
    const CACHE_VERSION = '5';
    const versionKey    = 'hxg_cache_v';
    if (localStorage.getItem(versionKey) !== CACHE_VERSION) {
      Object.keys(localStorage)
        .filter(k => k.startsWith('hxg_matches_'))
        .forEach(k => localStorage.removeItem(k));
      localStorage.setItem(versionKey, CACHE_VERSION);
    }

    listEl.innerHTML = '<div class="matches-loading"><div class="spinner"></div><span>Cargando partidos…</span></div>';
    try {
      const matches = await fetchTodayFromAPI();
      allMatchesRef.push(...(matches.length ? matches : FALLBACK_MATCHES.map(m => ({ ...m }))));
      if (!matches.length) console.log('[HXG] Sin partidos de API hoy → mostrando fallback');
    } catch (err) {
      console.warn('[HXG] Error API:', err.message, '→ usando fallback');
      allMatchesRef.push(...FALLBACK_MATCHES.map(m => ({ ...m })));
    }

    renderMatches();
    updateCounts();
    notifyPronosticos();
    initDateNav();
    scheduleDaily();
  }

  init();
})();
