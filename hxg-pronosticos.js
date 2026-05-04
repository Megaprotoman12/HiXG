/* ════════════════════════════════════════════════════════
   MÓDULO — PRONÓSTICOS
   Depende de: hxg-core.js, hxg-partidos.js
   ════════════════════════════════════════════════════════ */
(function PronosticosModule() {
  const pronList = document.getElementById('pron-list');

  /* ── Controles de ordenación y filtro ── */
  let sortKey      = 'double'; // 'double' | 'single'
  let sortDir      = 'desc';   // 'desc'   | 'asc'
  let filterLeague = '';       // '' = todas
  let cachedPicks  = [];

    /* Insertar controles encima de pron-list */
  const controls = document.querySelector('.pron-controls');

  pronList.parentNode.insertBefore(controls, pronList);

  document.getElementById('pron-sort-key').addEventListener('change', e => {
    sortKey = e.target.value;
    applySort();
  });
  document.getElementById('pron-sort-dir').addEventListener('change', e => {
    sortDir = e.target.value;
    applySort();
  });
  document.getElementById('pron-filter-league').addEventListener('change', e => {
    filterLeague = e.target.value;
    applySort();
  });

  /* Callback que llama el módulo de Partidos cuando carga datos */
  window.HXG_onMatchesReady = function(matches) {
    renderPronosticos(matches);
  };

  function getScore(pk) {
    if (sortKey === 'unidades') return pk.dif;
    /* Única Oportunidad: probabilidad del resultado más probable */
    if (sortKey === 'double') return pk.dominance;
    /* Única Oportunidad: probabilidad del resultado más probable */
    return pk.best.pct;
  }

  function applySort() {
    if (!cachedPicks.length) return;
    const filtered = filterLeague
      ? cachedPicks.filter(pk => pk.m.league === filterLeague)
      : cachedPicks;

    if (!filtered.length) {
      pronList.innerHTML = '<div class="pron-empty"><span>🔍</span><p>No hay pronósticos para esta liga hoy.</p></div>';
      return;
    }

    const sorted = [...filtered].sort((a, b) => {
      const diff = getScore(b) - getScore(a);
      return sortDir === 'desc' ? diff : -diff;
    });
    pronList.innerHTML = sorted.map((pk, i) => renderPickCard(pk, i)).join('');
  }

  function renderPronosticos(matches) {
    if (typeof bases === 'undefined') {
      pronList.innerHTML = '<div class="pron-empty"><span>⚠️</span><p>Base de datos no disponible.</p></div>';
      return;
    }

    const picks = [];
    for (const m of matches) {
      const xgData = HXG.computeXG(m);
      if (!xgData) continue;
      const { xgH, xgA } = xgData;
      const p = HXG.calcProbs(xgH, xgA, m.home, m.away);

      const candidates = [
        { label: `Victoria ${m.home}`, pct: p.win,  type: 'win'  },
        { label: 'Empate',             pct: p.draw, type: 'draw' },
        { label: `Victoria ${m.away}`, pct: p.loss, type: 'loss' },
      ];
      const sorted = [...candidates].sort((a, b) => b.pct - a.pct);
      const best   = sorted[0];
      const second = sorted[1];
      const dominance = best.pct + second.pct;
      const dif = Math.abs(xgH-xgA);//Math.abs(xgH-xgA)//best.pct + second.pct;

      picks.push({
        m, p, xgH, xgA, dif,
        best, second, dominance,
        win: p.win, draw: p.draw, loss: p.loss,
      });
    }

    if (!picks.length) {
      pronList.innerHTML = '<div class="pron-empty"><span>📊</span><p>No hay partidos con datos xG disponibles para hoy.</p></div>';
      return;
    }

    cachedPicks = picks;

    /* ── Poblar selector de ligas con las disponibles ── */
    const leagueSel = document.getElementById('pron-filter-league');
    const prevVal   = leagueSel.value;
    const leagues   = [...new Set(picks.map(pk => pk.m.league))].sort();
    leagueSel.innerHTML = '<option value="">🌐 Todas las ligas</option>' +
      leagues.map(lg => `<option value="${lg}">${lg}</option>`).join('');
    /* Mantener selección si la liga sigue disponible */
    if (leagues.includes(prevVal)) leagueSel.value = prevVal;
    else { leagueSel.value = ''; filterLeague = ''; }

    applySort();
  }

  function renderPickCard(pk, idx) {
    const { m, win, draw, loss, best, dominance, xgH, xgA} = pk;
    const rank = idx + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;

    const typeClass = best.type === 'win' ? 'pick-win' : best.type === 'draw' ? 'pick-draw' : 'pick-loss';
    const typeIcon  = best.type === 'win' ? '🟢' : best.type === 'draw' ? '🟡' : '🔵';

    return `
      <div class="pron-card ${typeClass} ${rank <= 3 ? 'pron-top' : ''}">
        <div class="pron-card-rank">${medal}</div>
        <div class="pron-card-body">

          <!-- Match header -->
          <div class="pron-match-header">
            <span class="pron-league">${m.league} <strong>Diferencia: ${Math.abs(xgH-xgA).toFixed(2)}</strong></span>
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

          <!-- Cuotas + dominancia -->
          <div class="pron-footer">
            <span class="pron-xg">Cuotas mínimas:<br>x${(101/win).toFixed(2)} — x${(101/draw).toFixed(2)} — x${(101/loss).toFixed(2)}</span>
            <span class="pron-dom">Doble Oportunidad: ${dominance.toFixed(1)}%<br>Cuota mínima: x${(101/dominance).toFixed(2)}</span>
          </div>

        </div>
      </div>`;
  }

})();
