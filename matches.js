/* ═══════════════════════════════════════════════════════════════
   matches.js  —  Módulo de Partidos para Hidden xG
   ───────────────────────────────────────────────────────────────
   ✅  Completamente independiente de script.js
   ✅  No toca ninguna variable ni función del calculador
   ✅  Se comunica SOLO con elementos dentro de #matches-section

   PARA DATOS REALES:
   1. Regístrate gratis en https://dashboard.api-football.com
   2. Copia tu API key y pégala en API_KEY abajo
   3. Cambia USE_DEMO_DATA = false
   ═══════════════════════════════════════════════════════════════ */

(function MatchesModule() {

  /* ──────────────────────────────────────────────────
     CONFIG
  ────────────────────────────────────────────────── */
  const API_KEY       = 'TU_API_KEY_AQUI';
  const USE_DEMO_DATA = true;
  const REFRESH_MS    = 60_000;

  const LEAGUE_IDS = [39,140,135,78,61,40,45,268,98,2,3];

  /* ──────────────────────────────────────────────────
     ESTADO
  ────────────────────────────────────────────────── */
  let allMatches = [];
  let favorites  = loadFavs();
  let activeTab  = 'all';
  let refreshTimer = null;

  /* ──────────────────────────────────────────────────
     DOM
  ────────────────────────────────────────────────── */
  const listEl      = document.getElementById('matches-list');
  const loadingEl   = document.getElementById('matches-loading');
  const liveCountEl = document.getElementById('live-count');
  const favCountEl  = document.getElementById('fav-count');
  const liveDotEl   = document.getElementById('matches-live-dot');

  /* ──────────────────────────────────────────────────
     TABS
  ────────────────────────────────────────────────── */
  document.querySelectorAll('.m-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.m-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeTab = btn.dataset.filter;
      renderMatches();
    });
  });

  /* ──────────────────────────────────────────────────
     FAVORITOS
  ────────────────────────────────────────────────── */
  function loadFavs() {
    try { return new Set(JSON.parse(localStorage.getItem('hxg_favs') || '[]')); }
    catch { return new Set(); }
  }
  function saveFavs() {
    localStorage.setItem('hxg_favs', JSON.stringify([...favorites]));
  }
  function toggleFav(id) {
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    saveFavs();
    updateCounts();
    if (activeTab === 'favorites') {
      renderMatches();
    } else {
      const btn = listEl.querySelector(`.fav-btn[data-id="${id}"]`);
      if (btn) {
        const on = favorites.has(id);
        btn.classList.toggle('active', on);
        btn.title = on ? 'Quitar de favoritos' : 'Añadir a favoritos';
        btn.textContent = on ? '★' : '☆';
      }
    }
  }

  /* ──────────────────────────────────────────────────
     API REAL
  ────────────────────────────────────────────────── */
  async function fetchFromAPI() {
    const today = new Date().toISOString().slice(0, 10);
    const url = `https://v3.football.api-sports.io/fixtures?date=${today}&timezone=America/Lima`;
    const res = await fetch(url, {
      headers: {
        'x-apisports-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.errors && Object.keys(json.errors).length)
      throw new Error(Object.values(json.errors)[0]);
    return json.response
      .filter(f => LEAGUE_IDS.includes(f.league.id))
      .map(normalizeAPIMatch);
  }

  function normalizeAPIMatch(f) {
    const st = f.fixture.status;
    let status = 'scheduled';
    if (['1H','2H','HT','ET','P','BT','SUSP','INT','LIVE'].includes(st.short)) status = 'live';
    else if (['FT','AET','PEN'].includes(st.short)) status = 'finished';
    else if (['PST','CANC','ABD'].includes(st.short)) status = 'cancelled';
    return {
      id: f.fixture.id,
      league: f.league.name,
      leagueLogo: f.league.logo,
      country: f.league.country,
      home: f.teams.home.name,
      away: f.teams.away.name,
      homeLogo: f.teams.home.logo,
      awayLogo: f.teams.away.logo,
      scoreHome: f.goals.home ?? null,
      scoreAway: f.goals.away ?? null,
      minute: st.elapsed ?? null,
      statusShort: st.short,
      statusLong: st.long,
      status,
      time: f.fixture.date
    };
  }

  /* ──────────────────────────────────────────────────
     DEMO DATA
  ────────────────────────────────────────────────── */
  function getDemoData() {
    const n = new Date();
    const ago = m => new Date(n - m*60000).toISOString();
    const fwd = m => new Date(n + m*60000).toISOString();
    return [
      { id:1,  league:'Premier League',    country:'England', home:'Arsenal',            away:'Liverpool',          scoreHome:1, scoreAway:1, minute:35, status:'live',      statusShort:'1H', statusLong:'First Half',    time:ago(35) },
      { id:2,  league:'La Liga',           country:'Spain',   home:'Barcelona',          away:'Real Madrid',        scoreHome:2, scoreAway:1, minute:67, status:'live',      statusShort:'2H', statusLong:'Second Half',   time:ago(67) },
      { id:3,  league:'Serie A',           country:'Italy',   home:'Inter',              away:'Juventus',           scoreHome:0, scoreAway:0, minute:12, status:'live',      statusShort:'1H', statusLong:'First Half',    time:ago(12) },
      { id:4,  league:'Champions League',  country:'Europe',  home:'PSG',                away:'Bayern München',     scoreHome:1, scoreAway:1, minute:55, status:'live',      statusShort:'2H', statusLong:'Second Half',   time:ago(55) },
      { id:5,  league:'Bundesliga',        country:'Germany', home:'Bayern München',     away:'Dortmund',           scoreHome:3, scoreAway:1, minute:90, status:'finished',  statusShort:'FT', statusLong:'Match Finished',time:ago(120)},
      { id:6,  league:'Liga 1',            country:'Perú',    home:'Universitario',      away:'Alianza Lima',       scoreHome:1, scoreAway:2, minute:90, status:'finished',  statusShort:'FT', statusLong:'Match Finished',time:ago(90) },
      { id:7,  league:'Ligue 1',           country:'France',  home:'PSG',                away:'Marseille',          scoreHome:2, scoreAway:0, minute:90, status:'finished',  statusShort:'FT', statusLong:'Match Finished',time:ago(100)},
      { id:8,  league:'Championship',      country:'England', home:'Leeds United',       away:'Sunderland',         scoreHome:1, scoreAway:1, minute:90, status:'finished',  statusShort:'FT', statusLong:'Match Finished',time:ago(80) },
      { id:9,  league:'Premier League',    country:'England', home:'Chelsea',            away:'Manchester City',    scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS',statusLong:'Not Started', time:fwd(90) },
      { id:10, league:'Champions League',  country:'Europe',  home:'Real Madrid',        away:'Manchester City',    scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS',statusLong:'Not Started', time:fwd(150)},
      { id:11, league:'La Liga',           country:'Spain',   home:'Atlético de Madrid', away:'Villarreal',         scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS',statusLong:'Not Started', time:fwd(180)},
      { id:12, league:'Serie A',           country:'Italy',   home:'Napoli',             away:'Milan',              scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS',statusLong:'Not Started', time:fwd(240)},
      { id:13, league:'J1 League',         country:'Japan',   home:'Kawasaki Frontale',  away:'Gamba Osaka',        scoreHome:null,scoreAway:null,minute:null,status:'scheduled',statusShort:'NS',statusLong:'Not Started', time:fwd(300)},
    ];
  }

  /* ──────────────────────────────────────────────────
     LOAD & REFRESH
  ────────────────────────────────────────────────── */
  async function loadMatches() {
    showLoading(true);
    try {
      if (USE_DEMO_DATA) {
        await new Promise(r => setTimeout(r, 500));
        allMatches = getDemoData();
      } else {
        allMatches = await fetchFromAPI();
      }
      updateCounts();
      renderMatches();
      flashLiveDot();
    } catch (err) {
      showError(err.message);
    } finally {
      showLoading(false);
    }
  }

  function startAutoRefresh() {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(loadMatches, REFRESH_MS);
  }

  /* ──────────────────────────────────────────────────
     RENDER
  ────────────────────────────────────────────────── */
  function renderMatches() {
    let filtered = allMatches;
    if (activeTab === 'live')       filtered = allMatches.filter(m => m.status === 'live');
    else if (activeTab === 'finished')  filtered = allMatches.filter(m => m.status === 'finished');
    else if (activeTab === 'favorites') filtered = allMatches.filter(m => favorites.has(m.id));

    const order = { live:0, scheduled:1, finished:2, cancelled:3 };
    filtered = [...filtered].sort((a,b) => (order[a.status]??9)-(order[b.status]??9));

    if (!filtered.length) { listEl.innerHTML = emptyState(); return; }

    // Agrupar por liga
    const byLeague = {};
    filtered.forEach(m => {
      if (!byLeague[m.league]) byLeague[m.league] = { country:m.country, matches:[] };
      byLeague[m.league].matches.push(m);
    });

    listEl.innerHTML = Object.entries(byLeague)
      .map(([lg, g]) => renderLeagueGroup(lg, g))
      .join('');

    // Event listeners para estrellas
    listEl.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFav(Number(btn.dataset.id));
      });
    });
  }

  function renderLeagueGroup(leagueName, group) {
    return `
      <div class="league-group">
        <div class="league-group-header">
          <span class="league-flag">${countryFlag(group.country)}</span>
          <span class="league-group-name">${leagueName}</span>
          <div class="league-group-line"></div>
        </div>
        ${group.matches.map(renderMatchRow).join('')}
      </div>`;
  }

  function renderMatchRow(m) {
    const isFav  = favorites.has(m.id);
    const isLive = m.status === 'live';
    const isDone = m.status === 'finished';

    let centerHTML;
    if (isLive) {
      centerHTML = `
        <div class="match-center live-center">
          <div class="match-score live-score">${m.scoreHome}<span class="score-sep">—</span>${m.scoreAway}</div>
          <div class="match-minute"><span class="live-pip"></span>${m.minute}'</div>
        </div>`;
    } else if (isDone) {
      centerHTML = `
        <div class="match-center done-center">
          <div class="match-score done-score">${m.scoreHome}<span class="score-sep">—</span>${m.scoreAway}</div>
          <div class="match-ft-label">FT</div>
        </div>`;
    } else {
      const d = new Date(m.time);
      const hhmm = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
      centerHTML = `
        <div class="match-center sched-center">
          <div class="match-kickoff">${hhmm}</div>
          <div class="match-vs-label">VS</div>
        </div>`;
    }

    const logoOrPlaceholder = (logo, alt) =>
      logo
        ? `<img class="team-logo" src="${logo}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`
        : `<span class="team-logo-placeholder">⚽</span>`;

    return `
      <div class="match-row ${isLive?'is-live':''} ${isDone?'is-done':''}">
        <div class="match-team home-team">
          ${logoOrPlaceholder(m.homeLogo, m.home)}
          <span class="team-name-match">${m.home}</span>
        </div>
        ${centerHTML}
        <div class="match-team away-team">
          <span class="team-name-match">${m.away}</span>
          ${logoOrPlaceholder(m.awayLogo, m.away)}
        </div>
        <button class="fav-btn ${isFav?'active':''}"
                data-id="${m.id}"
                title="${isFav?'Quitar de favoritos':'Añadir a favoritos'}"
                aria-label="Favorito">${isFav?'★':'☆'}</button>
      </div>`;
  }

  /* ──────────────────────────────────────────────────
     HELPERS
  ────────────────────────────────────────────────── */
  function updateCounts() {
    const liveN = allMatches.filter(m => m.status==='live').length;
    const favN  = allMatches.filter(m => favorites.has(m.id)).length;
    if (liveCountEl) liveCountEl.textContent = liveN || '';
    if (favCountEl)  favCountEl.textContent  = favN  || '';
  }

  function showLoading(show) {
    if (!loadingEl) return;
    loadingEl.style.display = show ? 'flex' : 'none';
    if (!show && listEl.contains(loadingEl)) listEl.removeChild(loadingEl);
  }

  function showError(msg) {
    listEl.innerHTML = `
      <div class="matches-error">
        <span>⚠️</span>
        <p>Error: <em>${msg}</em></p>
        <button onclick="location.reload()" class="retry-btn">↻ Reintentar</button>
      </div>`;
  }

  function emptyState() {
    const msgs = {
      all:'No hay partidos hoy 📭',
      live:'No hay partidos en vivo ahora mismo 📺',
      finished:'No hay partidos finalizados aún 🏁',
      favorites:'Dale ★ a un partido para guardarlo aquí ⭐',
    };
    return `<div class="matches-empty"><p>${msgs[activeTab]||msgs.all}</p></div>`;
  }

  function flashLiveDot() {
    if (!liveDotEl) return;
    liveDotEl.classList.add('flash');
    setTimeout(() => liveDotEl.classList.remove('flash'), 800);
  }

  const FLAGS = {
    England:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',Spain:'🇪🇸',Italy:'🇮🇹',Germany:'🇩🇪',
    France:'🇫🇷',Peru:'🇵🇪','Perú':'🇵🇪',Japan:'🇯🇵',
    Europe:'🌍',World:'🌐',Portugal:'🇵🇹',Netherlands:'🇳🇱',
    Brazil:'🇧🇷',Argentina:'🇦🇷',Mexico:'🇲🇽',USA:'🇺🇸',
  };
  function countryFlag(c) { return FLAGS[c] || '🏆'; }

  /* ── INIT ── */
  loadMatches();
  startAutoRefresh();

})();
