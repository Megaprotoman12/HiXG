/* ════════════════════════════════════════════════════════
   MÓDULO 1 — TABLA
   Depende de: hxg-core.js, bases.js
   ════════════════════════════════════════════════════════ */
(function TablaModule() {
  const tablaLigaSel   = document.getElementById('tabla-liga');
  const tablaContainer = document.getElementById('tabla-container');
  if (!tablaLigaSel || !tablaContainer) return;

  const LIGA_LABELS = {
    ChampionsLeague:    '👑 Champions League',
    PremierLeague:      '🏆 Premier League',
    LaLiga:             '🇪🇸 La Liga',
    SerieA:             '🇮🇹 Serie A',
    Bundesliga:         '🇩🇪 Bundesliga',
    Ligue1:             '🇫🇷 Ligue 1',
    Championship:       '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    _2Bundesliga:       '🇩🇪 2. Bundesliga',
    FACup:              '🏆 FA Cup',
    Liga1:              '🇵🇪 Liga 1',
    J1League:           '🇯🇵 J1 League',
    CopaLibertadores:   '👑 Copa Libertadores',
  };

  function renderTabla(ligaKey) {
    if (typeof bases === 'undefined') {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>⚠️ Recarga la página.</p></div>';
      return;
    }
    const data = bases[ligaKey];
    if (!data) {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>Liga no encontrada.</p></div>';
      return;
    }

    const teams = Object.entries(data).map(([name, s]) => ({
      name,
      atk:       s.ataque    ?? 0,
      def:       s.defensa   ?? 0,
      index:    (s.ataque    ?? 0) + (s.defensa ?? 0),
      localAtk:  s.PLUSLOCALataque   ?? 0,
      localDef:  s.PLUSLOCALdefensa  ?? 0,
      visitaAtk: s.PLUSVISITAataque  ?? 0,
      visitaDef: s.PLUSVISITAdefensa ?? 0,
    })).sort((a, b) => b.index - a.index);

    const maxIdx = teams[0]?.index ?? 1;
    const minIdx = teams[teams.length - 1]?.index ?? 0;

    const rows = teams.map((t, i) => {
      const rank = i + 1;
      const pct  = maxIdx === minIdx ? 1 : (t.index - minIdx) / (maxIdx - minIdx);
      const barW = Math.max(4, Math.round(pct * 100));
      const rCls = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : '';
      const third = Math.ceil(teams.length * 0.33);
      const twothirds = Math.ceil(teams.length * 0.66);
      const trend = rank <= third      ? '▲' : rank <= twothirds ? '—' : '▼';
      const tCls  = rank <= third      ? 'trend-up' : rank <= twothirds ? 'trend-mid' : 'trend-down';

      return `<tr class="tabla-row ${rank <= 3 ? 'top-row' : ''}">
        <td class="col-rank"><span class="rank-badge ${rCls}">${rank}</span></td>
        <td class="col-team">
          <div class="team-name-cell">
            <span class="team-name-text">${t.name}</span>
            <div class="index-bar-wrap"><div class="index-bar" style="width:${barW}%"></div></div>
          </div>
        </td>
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
      <div class="tabla-wrap">
        <table class="tabla-table">
          <thead><tr>
            <th class="col-rank">#</th>
            <th class="col-team">Equipo</th>
            <th class="col-atk">⚽ Ataque</th>
            <th class="col-def">🛡 Defensa</th>
            <th class="col-index">📊 Índice xG</th>
            <th class="col-local">🏠 Local</th>
            <th class="col-visita">✈️ Visita</th>
            <th class="col-trend">±</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="tabla-note">* Índice xG = Ataque + Defensa · Ordenado de mayor a menor</p>`;
  }

  tablaLigaSel.addEventListener('change', () => {
    const val = tablaLigaSel.value;
    if (!val) {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><span class="tabla-empty-icon">👆</span><p>Selecciona una liga</p></div>';
      return;
    }
    renderTabla(val);
  });
})();
