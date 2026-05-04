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

  /* ── Estado de ordenación ── */
  let sortCol = 'index';
  let sortDir = 'desc';
  let currentLiga = null;
  let currentTeams = [];

  /* ── Definición de columnas ── */
  const COLS = [
    { key: 'rank',      label: '#',            sortable: false, cls: 'col-rank'  },
    { key: 'name',      label: 'Equipo',        sortable: false, cls: 'col-team'  },
    { key: 'atk',       label: '⚽ Ataque',     sortable: true,  cls: 'col-atk'  },
    { key: 'def',       label: '🛡 Defensa',    sortable: true,  cls: 'col-def'  },
    { key: 'index',     label: '📊 Índice',     sortable: true,  cls: 'col-index'},
    { key: 'localAtk',  label: '🏠⚽',          sortable: true,  cls: 'col-lAtk' },
    { key: 'localDef',  label: '🏠🛡',          sortable: true,  cls: 'col-lDef' },
    { key: 'visitaAtk', label: '✈️⚽',          sortable: true,  cls: 'col-vAtk' },
    { key: 'visitaDef', label: '✈️🛡',          sortable: true,  cls: 'col-vDef' },
    { key: 'trend',     label: '±',             sortable: false, cls: 'col-trend'},
  ];

  function buildTeams(ligaKey) {
    const data = bases[ligaKey];
    return Object.entries(data).map(([name, s]) => ({
      name,
      atk:       s.ataque    ?? 0,
      def:       s.defensa   ?? 0,
      index:    (s.ataque    ?? 0) + (s.defensa ?? 0),
      localAtk:  s.PLUSLOCALataque   ?? 0,
      localDef:  s.PLUSLOCALdefensa  ?? 0,
      visitaAtk: s.PLUSVISITAataque  ?? 0,
      visitaDef: s.PLUSVISITAdefensa ?? 0,
    }));
  }

  function renderTabla(ligaKey) {
    if (typeof bases === 'undefined') {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>⚠️ Recarga la página.</p></div>';
      return;
    }
    if (!bases[ligaKey]) {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><p>Liga no encontrada.</p></div>';
      return;
    }
    currentLiga = ligaKey;
    currentTeams = buildTeams(ligaKey);
    renderSorted();
  }

  function renderSorted() {
    const sorted = [...currentTeams].sort((a, b) => {
      const diff = b[sortCol] - a[sortCol];
      return sortDir === 'desc' ? diff : -diff;
    });

    /* Barra siempre proporcional al índice xG */
    const maxIdx = Math.max(...currentTeams.map(t => t.index));
    const minIdx = Math.min(...currentTeams.map(t => t.index));

    const sign = v => (v >= 0 ? '+' : '') + v.toFixed(2);

    const rows = sorted.map((t, i) => {
      const rank  = i + 1;
      const pct   = maxIdx === minIdx ? 1 : (t.index - minIdx) / (maxIdx - minIdx);
      const barW  = Math.max(4, Math.round(pct * 100));
      const rCls  = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : '';
      const third = Math.ceil(currentTeams.length * 0.33);
      const two3  = Math.ceil(currentTeams.length * 0.66);
      const trend = rank <= third ? '▲' : rank <= two3 ? '—' : '▼';
      const tCls  = rank <= third ? 'trend-up' : rank <= two3 ? 'trend-mid' : 'trend-down';

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
        <td class="col-lAtk"><span class="mini-stat ${t.localAtk  >= 0 ? 'mini-pos' : 'mini-neg'}">${sign(t.localAtk)}</span></td>
        <td class="col-lDef"><span class="mini-stat ${t.localDef  >= 0 ? 'mini-pos' : 'mini-neg'}">${sign(t.localDef)}</span></td>
        <td class="col-vAtk"><span class="mini-stat ${t.visitaAtk >= 0 ? 'mini-pos' : 'mini-neg'}">${sign(t.visitaAtk)}</span></td>
        <td class="col-vDef"><span class="mini-stat ${t.visitaDef >= 0 ? 'mini-pos' : 'mini-neg'}">${sign(t.visitaDef)}</span></td>
        <td class="col-trend"><span class="${tCls}">${trend}</span></td>
      </tr>`;
    }).join('');

    const ths = COLS.map(col => {
      if (!col.sortable) return `<th class="${col.cls}">${col.label}</th>`;
      const active = sortCol === col.key;
      const arrow  = active ? (sortDir === 'desc' ? '▼' : '▲') : '⇅';
      return `<th class="${col.cls} th-sortable${active ? ' th-active' : ''}" data-col="${col.key}" title="Ordenar por ${col.label}">
        ${col.label} <span class="sort-arrow">${arrow}</span>
      </th>`;
    }).join('');

    tablaContainer.innerHTML = `
      <div class="tabla-league-label">${LIGA_LABELS[currentLiga] || currentLiga}</div>
      <div class="tabla-wrap">
        <table class="tabla-table">
          <thead><tr>${ths}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="tabla-note">* Toca un encabezado para ordenar · Índice xG = Ataque + Defensa</p>`;

    tablaContainer.querySelectorAll('.th-sortable').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (sortCol === col) {
          sortDir = sortDir === 'desc' ? 'asc' : 'desc';
        } else {
          sortCol = col;
          sortDir = 'desc';
        }
        renderSorted();
      });
    });
  }

  /* ── Carga automática al activar la sección Tabla ── */
  const DEFAULT_LIGA = 'ChampionsLeague';
  const sectionTabla = document.getElementById('section-tabla');
  if (sectionTabla) {
    const observer = new MutationObserver(() => {
      if (sectionTabla.classList.contains('active') && !currentLiga) {
        tablaLigaSel.value = DEFAULT_LIGA;
        renderTabla(DEFAULT_LIGA);
      }
    });
    observer.observe(sectionTabla, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── Cambio manual de liga ── */
  tablaLigaSel.addEventListener('change', () => {
    const val = tablaLigaSel.value;
    if (!val) {
      tablaContainer.innerHTML = '<div class="tabla-empty-state"><span class="tabla-empty-icon">👆</span><p>Selecciona una liga</p></div>';
      currentLiga = null;
      return;
    }
    sortCol = 'index';
    sortDir = 'desc';
    renderTabla(val);
  });
})();
