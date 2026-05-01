/* ════════════════════════════════════════════════════════
   HXG CORE — Poisson compartido
   Carga este archivo PRIMERO en el HTML, antes de bases.js
   y antes de cualquier módulo.
   ════════════════════════════════════════════════════════ */
window.HXG = window.HXG || {};

/* ── Mapeo de nombres de liga (API → clave de bases[]) ── */
HXG.LEAGUE_MAP = HXG.LEAGUE_MAP || {};

/* ── Alias de equipos (nombre API → nombre en bases[]) ── */
HXG.TEAM_ALIASES = HXG.TEAM_ALIASES || {};

/* ── Distribución de Poisson ── */
HXG.poisson = function(k, λ) {
  let f = 1;
  for (let i = 2; i <= k; i++) f *= i;
  return (Math.pow(λ, k) * Math.exp(-λ)) / f;
};

/* ── Cálculo de probabilidades 1X2, BTTS, O/U y marcadores ── */
HXG.calcProbs = function(xgH, xgA, nameH, nameA, maxG = 10) {
  const P = [];
  for (let i = 0; i <= maxG; i++) {
    P[i] = [];
    for (let j = 0; j <= maxG; j++) {
      P[i][j] = HXG.poisson(i, xgH) * HXG.poisson(j, xgA);
    }
  }

  let win = 0, draw = 0, loss = 0, btts = 0;
  for (let i = 0; i <= maxG; i++) {
    for (let j = 0; j <= maxG; j++) {
      if (i > j)       win  += P[i][j];
      else if (i === j) draw += P[i][j];
      else              loss += P[i][j];
      if (i >= 1 && j >= 1) btts += P[i][j];
    }
  }

  const ou = {};
  [0.5, 1.5, 2.5, 3.5, 4.5].forEach(line => {
    let over = 0;
    for (let i = 0; i <= maxG; i++) {
      for (let j = 0; j <= maxG; j++) {
        if (i + j > line) over += P[i][j];
      }
    }
    ou['+' + line] = +(over * 100).toFixed(1);
    ou['-' + line] = +((1 - over) * 100).toFixed(1);
  });

  const scores = [];
  for (let i = 0; i <= maxG; i++) {
    for (let j = 0; j <= maxG; j++) {
      scores.push({ s: `${i}-${j}`, p: P[i][j] });
    }
  }
  scores.sort((a, b) => b.p - a.p);

  return {
    win:   +(win  * 100).toFixed(1),
    draw:  +(draw * 100).toFixed(1),
    loss:  +(loss * 100).toFixed(1),
    bttsY: +(btts * 100).toFixed(1),
    bttsN: +((1 - btts) * 100).toFixed(1),
    ou,
    top5: scores.slice(0, 5).map(x => ({ s: x.s, p: +(x.p * 100).toFixed(2) })),
    nameH,
    nameA,
  };
};

/* ── Busca un equipo SÓLO en la liga indicada ── */
HXG.findTeam = function(teamName, leagueKey) {
  const league = HXG.LEAGUE_MAP[leagueKey] || leagueKey;
  if (typeof bases === 'undefined') return null;
  const leagueData = bases[league];
  if (!leagueData) return null;
  const name = HXG.TEAM_ALIASES[teamName] || teamName;
  return leagueData[name] || null;
};

/* ── Calcula xG para un partido dado su objeto m ── */
HXG.computeXG = function(m) {
  const key = m.leagueKey;
  if (!key) return null;
  const L = HXG.findTeam(m.home, key);
  const V = HXG.findTeam(m.away, key);
  if (!L || !V) return null;
  const xgH = L.ataque + L.PLUSLOCALataque - (V.defensa + V.PLUSVISITAdefensa);
  const xgA = V.ataque + V.PLUSVISITAataque - (L.defensa + L.PLUSLOCALdefensa);
  return { xgH: Math.max(0, xgH), xgA: Math.max(0, xgA) };
};
