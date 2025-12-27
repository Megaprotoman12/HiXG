const bases = {
    premier: {
      'Liverpool': { ataque: 0.59, defensa: -0.5, PLUSataque: 0.38, PLUSdefensa: 0.35 },
      'Bournemouth': { ataque: 0.5, defensa: -0.93, PLUSataque: 0.06, PLUSdefensa: 0.59 },
      'Aston Villa': { ataque: 1.04, defensa: -0.91, PLUSataque: 0.47, PLUSdefensa: 0.35 },
      'Newcastle': { ataque: 0.46, defensa: -0.56, PLUSataque: 0.52, PLUSdefensa: 0.23 },
      'Tottenham': { ataque: 0.24, defensa: -0.89, PLUSataque: 0.06, PLUSdefensa: 0.24 },
      'Burnley': { ataque: 0.26, defensa: -1.31, PLUSataque: 0.22, PLUSdefensa: 0.34 },
      'Sunderland': { ataque: 0.37, defensa: -0.64, PLUSataque: 0.32, PLUSdefensa: 0.33 },
      'West Ham': { ataque: 0.55, defensa: -0.97, PLUSataque: 0.29, PLUSdefensa: -0.05 },
      'Brighton': { ataque: 0.47, defensa: -0.59, PLUSataque: 0.39, PLUSdefensa: -0.03 },
      'Fulham': { ataque: 0.14, defensa: -0.7, PLUSataque: 0.36, PLUSdefensa: 0.22 },
      'Wolves': { ataque: 0.12, defensa: -1.35, PLUSataque: 0.05, PLUSdefensa: -0.18 },
      'Manchester City': { ataque: 1.08, defensa: -0.33, PLUSataque: 0.51, PLUSdefensa: 0.25 },
      'Nottingham Forest': { ataque: 0.43, defensa: -0.98, PLUSataque: 0.45, PLUSdefensa: 0.31 },
      'Brentford': { ataque: 0.38, defensa: -0.85, PLUSataque: 0.37, PLUSdefensa: 0.43 },
      'Chelsea': { ataque: 0.9, defensa: -0.92, PLUSataque: 0.41, PLUSdefensa: 0.33 },
      'Crystal Palace': { ataque: 0.62, defensa: -0.84, PLUSataque: 0.23, PLUSdefensa: 0.22 },
      'Manchester Utd': { ataque: 0.9, defensa: -0.52, PLUSataque: 0.46, PLUSdefensa: 0.35 },
      'Arsenal': { ataque: 1.21, defensa: 0.02, PLUSataque: 0.38, PLUSdefensa: 0.53 },
      'Leeds Utd': { ataque: 0.55, defensa: -1.25, PLUSataque: 0.67, PLUSdefensa: 0.59 },
      'Everton': { ataque: 0.52, defensa: -0.62, PLUSataque: 0.12, PLUSdefensa: 0.28 }
    }
  };
  
  const competition = document.getElementById('competition');
  const localSel = document.getElementById('local');
  const visitaSel = document.getElementById('visita');
  
  function loadTeams() {
    const data = bases[competition.value];
    localSel.innerHTML = '<option value="">Seleccionar</option>';
    visitaSel.innerHTML = '<option value="">Seleccionar</option>';
    Object.keys(data).forEach(t => {
      localSel.innerHTML += `<option>${t}</option>`;
      visitaSel.innerHTML += `<option>${t}</option>`;
    });
  }

  
  
  function calcular() {
    const data = bases[competition.value];
    if (!localSel.value || !visitaSel.value) return;
  
    const L = data[localSel.value];
    const V = data[visitaSel.value];
  
    
    const xgL = L.ataque + L.PLUSataque - V.defensa;
    const xgV = V.ataque - (L.defensa + L.PLUSdefensa);
  
    document.getElementById('StatsLocal').textContent = 'Goles a Favor: ' + (L.ataque + L.PLUSataque).toFixed(2) + '\n Goles en Contra: ' + (L.defensa + L.PLUSdefensa).toFixed(2)
    document.getElementById('StatsVisita').textContent = 'Goles a Favor: ' + (V.ataque) + '\n Goles en Contra: ' + V.defensa
    document.getElementById('xgLocal').textContent = 'Local: ' + xgL.toFixed(3) + ' vs ' + xgV.toFixed(3) + ' :Visita';
    /*document.getElementById('xgVisita').textContent = 'xG Visita: ' + xgV.toFixed(3);*/
  }
  
  competition.addEventListener('change', loadTeams);
  localSel.addEventListener('change', calcular);
  visitaSel.addEventListener('change', calcular);
  
  loadTeams();
  