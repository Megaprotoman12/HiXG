const bases = {
  ChampionsLeague: {
    'Eintracht Fráncfort':{'ataque': 0.28, 'defensa': -1.17, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.28, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': -0.29, 'History': []},

  'Galatasaray':{'ataque': 0.60, 'defensa': -0.84, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.32, 'PLUSVISITAataque': -0.31, 'PLUSVISITAdefensa': -0.56, 'History': []},

  'Manchester City':{'ataque': 0.58, 'defensa': -0.60, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.09, 'History': []},

  'Nápoles':{'ataque': 0.51, 'defensa': -0.74, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': -0.36, 'History': []},

  'Newcastle':{'ataque': 0.97, 'defensa': -0.90, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.40, 'PLUSVISITAdefensa': -0.46, 'History': []},

  'Barcelona':{'ataque': 1.15, 'defensa': -0.42, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'Sporting CP':{'ataque': 0.69, 'defensa': -0.12, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': 0.47, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': 0.01, 'History': []},

  'Kairat Almaty':{'ataque': 0.32, 'defensa': -1.35, 'PLUSLOCALataque': -0.44, 'PLUSLOCALdefensa': -0.42, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.33, 'History': []},

  'Club Brujas':{'ataque': 0.89, 'defensa': -1.04, 'PLUSLOCALataque': 0.40, 'PLUSLOCALdefensa': -0.08, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.36, 'History': []},

  'Mónaco':{'ataque': 0.71, 'defensa': -0.77, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.45, 'History': []},

  'Copenhague':{'ataque': 0.46, 'defensa': -1.22, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.44, 'History': []},

  'Bayer Leverkusen':{'ataque': 0.60, 'defensa': -0.27, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': 0.22, 'History': []},

  'Ajax':{'ataque': 0.43, 'defensa': -0.98, 'PLUSLOCALataque': -0.27, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': -0.31, 'History': []},

  'Inter':{'ataque': 0.72, 'defensa': -0.43, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': 0.13, 'History': []},

  'Bayern Múnich':{'ataque': 1.76, 'defensa': -0.62, 'PLUSLOCALataque': 0.47, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.69, 'PLUSVISITAdefensa': -0.01, 'History': []},

  'Chelsea':{'ataque': 0.81, 'defensa': -0.59, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.29, 'History': []},

  'Liverpool':{'ataque': 1.01, 'defensa': -0.22, 'PLUSLOCALataque': 0.62, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': 0.24, 'History': []},

  'Atlético de Madrid':{'ataque': 1.05, 'defensa': -0.41, 'PLUSLOCALataque': 0.46, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'PSG':{'ataque': 1.46, 'defensa': -0.24, 'PLUSLOCALataque': 0.49, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.37, 'PLUSVISITAdefensa': 0.28, 'History': []},

  'Atalanta':{'ataque': 0.83, 'defensa': -1.11, 'PLUSLOCALataque': 0.45, 'PLUSLOCALdefensa': -0.43, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.08, 'History': []},

  'Olympiacos':{'ataque': 0.39, 'defensa': -0.65, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.07, 'History': []},

  'Pafos':{'ataque': 0.49, 'defensa': -0.85, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': -0.28, 'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'Slavia Praga':{'ataque': 0.45, 'defensa': -1.20, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': -0.16, 
  'PLUSVISITAataque': -0.27, 'PLUSVISITAdefensa': -0.44, 'History': []},

  'Bodo/Glimt':{'ataque': 0.99, 'defensa': -0.75, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.41, 'History': []},

  'Benfica':{'ataque': 0.46, 'defensa': -0.33, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': 0.02, 'History': []},

  'Qarabag':{'ataque': 0.53, 'defensa': -1.75, 'PLUSLOCALataque': -0.00, 'PLUSLOCALdefensa': -0.50, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.65, 'History': []},

  'Juventus':{'ataque': 0.94, 'defensa': -0.78, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.48, 'History': []},

  'Borussia Dortmund':{'ataque': 0.75, 'defensa': -0.79, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': -0.40, 'History': []},

  'Real Madrid':{'ataque': 1.30, 'defensa': -0.61, 'PLUSLOCALataque': 0.41, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': 0.29, 'PLUSVISITAdefensa': -0.17, 'History': []},

  'Marsella':{'ataque': 0.48, 'defensa': -0.68, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': -0.18, 'History': []},

  'Tottenham':{'ataque': 0.82, 'defensa': -0.63, 'PLUSLOCALataque': 0.19, 'PLUSLOCALdefensa': 0.43, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.46, 'History': []},

  'Villarreal':{'ataque': 0.17, 'defensa': -1.02, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.15, 'PLUSVISITAataque': -0.40, 'PLUSVISITAdefensa': -0.27, 'History': []},

  'Athletic Club':{'ataque': 0.71, 'defensa': -0.75, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.05, 'History': []},

  'Arsenal':{'ataque': 0.91, 'defensa': -0.09, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.26, 'History': []},

  'PSV':{'ataque': 0.75, 'defensa': -0.88, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': -0.22, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': -0.06, 'History': []},

  'Royale Union SG':{'ataque': 0.53, 'defensa': -0.69, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': -0.25, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': 0.16, 'History': []},
  },
  PremierLeague: {
    'Leeds Utd':{'ataque': 0.66, 'defensa': -0.51, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.09, 'History': []},

  'Everton':{'ataque': 0.66, 'defensa': -0.53, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.13, 'PLUSVISITAdefensa': -0.06, 'History': []},

  'Manchester Utd':{'ataque': 0.64, 'defensa': -0.59, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.05, 'History': []},

  'Arsenal':{'ataque': 0.69, 'defensa': -0.32, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': 0.10, 'History': []},

  'Chelsea':{'ataque': 0.61, 'defensa': -0.85, 'PLUSLOCALataque': -0.17, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': -0.30, 'History': []},

  'Crystal Palace':{'ataque': 0.50, 'defensa': -0.73, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.12, 'History': []},

  'Nottingham Forest':{'ataque': 0.80, 'defensa': -0.51, 'PLUSLOCALataque': 0.03, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'Brentford':{'ataque': 0.74, 'defensa': -0.68, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.12, 'History': []},

  'Wolves':{'ataque': 0.20, 'defensa': -1.03, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': -0.30, 'PLUSVISITAdefensa': -0.42, 'History': []},

  'Manchester City':{'ataque': 1.01, 'defensa': -0.28, 'PLUSLOCALataque': 0.19, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': 0.23, 'History': []},

  'Brighton':{'ataque': 0.64, 'defensa': -0.29, 'PLUSLOCALataque': 0.17, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.01, 'History': []},

  'Fulham':{'ataque': 0.46, 'defensa': -0.47, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.01, 'History': []},

  'Sunderland':{'ataque': 0.54, 'defensa': -1.02, 'PLUSLOCALataque': -0.19, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': 0.12, 'PLUSVISITAdefensa': -0.24, 'History': []},

  'West Ham':{'ataque': 0.66, 'defensa': -0.57, 'PLUSLOCALataque': 0.33, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.27, 'PLUSVISITAdefensa': -0.13, 'History': []},

  'Tottenham':{'ataque': 0.34, 'defensa': -0.68, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.30, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': 0.23, 'History': []},

  'Burnley':{'ataque': 0.39, 'defensa': -1.21, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.44, 'History': []},

  'Aston Villa':{'ataque': 0.73, 'defensa': -0.78, 'PLUSLOCALataque': 0.27, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.13, 'History': []},

  'Newcastle':{'ataque': 0.60, 'defensa': -0.78, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': -0.38, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': 0.20, 'History': []},

  'Liverpool':{'ataque': 1.10, 'defensa': -0.56, 'PLUSLOCALataque': 0.48, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.01, 'History': []},

  'Bournemouth':{'ataque': 0.96, 'defensa': -0.55, 'PLUSLOCALataque': 0.20, 'PLUSLOCALdefensa': 0.40, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.34, 'History': []},
  },
  LaLiga: {
    'Real Madrid':{'ataque': 1.21, 'defensa': -0.53, 'PLUSLOCALataque': 0.53, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': 0.08, 'History': []},

  'Osasuna':{'ataque': 0.51, 'defensa': -0.57, 'PLUSLOCALataque': 0.41, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': -0.50, 'PLUSVISITAdefensa': -0.10, 'History': []},

  'Elche':{'ataque': 0.72, 'defensa': -0.78, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.24, 'History': []},

  'Real Betis':{'ataque': 0.56, 'defensa': -0.28, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.11, 'History': []},

  'Espanyol':{'ataque': 0.32, 'defensa': -0.93, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.29, 'History': []},

  'Atlético de Madrid':{'ataque': 0.71, 'defensa': -0.73, 'PLUSLOCALataque': 0.39, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': -0.29, 'History': []},

  'Athletic Club':{'ataque': 0.65, 'defensa': -0.80, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.44, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': -0.63, 'History': []},

  'Sevilla':{'ataque': 0.36, 'defensa': -0.86, 'PLUSLOCALataque': -0.27, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.14, 'History': []},

  'Celta de Vigo':{'ataque': 0.45, 'defensa': -0.51, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.20, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.29, 'History': []},

  'Getafe':{'ataque': 0.41, 'defensa': -0.20, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.36, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'Alavés':{'ataque': 0.49, 'defensa': -0.53, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.06, 'History': []},

  'Levante':{'ataque': 0.47, 'defensa': -0.54, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.09, 'History': []},

  'Valencia':{'ataque': 0.65, 'defensa': -0.52, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': -0.18, 'History': []},

  'Real Sociedad':{'ataque': 0.68, 'defensa': -0.91, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.42, 'History': []},

  'Mallorca':{'ataque': 0.55, 'defensa': -0.75, 'PLUSLOCALataque': 0.50, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.55, 'PLUSVISITAdefensa': -0.28, 'History': []},

  'Barcelona':{'ataque': 1.46, 'defensa': -0.34, 'PLUSLOCALataque': 0.32, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': 0.55, 'PLUSVISITAdefensa': -0.01, 'History': []},

  'Villarreal':{'ataque': 0.90, 'defensa': -0.58, 'PLUSLOCALataque': 0.66, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': -0.05, 'History': []},

  'Real Oviedo':{'ataque': 0.27, 'defensa': -0.82, 'PLUSLOCALataque': -0.32, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.38, 'History': []},

  'Girona':{'ataque': 0.58, 'defensa': -0.55, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.11, 'History': []},

  'Rayo Vallecano':{'ataque': 0.32, 'defensa': -0.58, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': -0.41, 'PLUSVISITAdefensa': -0.19, 'History': []},

  },
  SerieA: {
      'Inter':{'ataque': 1.64, 'defensa': -0.48, 'PLUSLOCALataque': 0.53, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.50, 'PLUSVISITAdefensa': 0.06, 'History': ['0.65;-0.57', '0.62;-0.68', '0.87;-0.99', '0.87;-0.89', '1.04;-0.67', '1.27;-0.63', '1.17;-0.45', '1.11;-0.42', '1.18;-0.34', '1.19;-0.36', '1.19;-0.29', '1.15;-0.29', '1.19;-0.24', '1.46;-0.13', '1.39;-0.18', '1.28;-0.03', '1.3;-0.1', '1.37;-0.12', '1.27;-0.11', '1.04;-0.11', '0.92;-0.04', '1.16;-0.03', '1.15;-0.03', '1.5;-0.01', '1.52;0.04', '1.46;0.04', '1.36;0.08', '1.25;0.1', '1.07;-0.09', '1.04;-0.26', '1.45;-0.47', '1.73;-0.58', '1.64;-0.48']},

      'Torino':{'ataque': 0.47, 'defensa': -0.77, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': 0.01, 'History': ['0.57;-0.65', '0.55;-0.72', '0.53;-0.68', 
      '0.41;-0.88', '0.41;-0.9', '0.53;-0.79', '0.63;-0.77', '0.69;-0.69', '0.62;-0.55', '0.5;-0.59', '0.46;-0.49', '0.54;-0.71', '0.55;-0.92', '0.66;-1.01', '0.55;-0.82', '0.61;-0.67', '0.51;-0.76', '0.57;-0.6', '0.49;-0.73', '0.52;-0.91', '0.44;-0.86', '0.35;-1.04', '0.45;-0.93', '0.4;-0.86', '0.27;-0.76', '0.23;-0.81', '0.27;-0.81', '0.33;-0.89', '0.53;-0.78', '0.72;-0.92', '0.69;-0.83', '0.78;-0.85', '0.47;-0.77']},
      
      'Udinese':{'ataque': 0.55, 'defensa': -0.60, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.17, 'History': ['0.54;-0.52', '0.66;-0.49', '0.61;-0.4', 
      '0.54;-0.45', '0.55;-0.52', '0.74;-0.51', '0.59;-0.53', '0.57;-0.49', '0.5;-0.7', '0.48;-0.57', '0.36;-0.63', '0.41;-0.79', '0.5;-0.71', '0.47;-0.75', '0.55;-0.67', '0.42;-0.9', '0.4;-0.86', '0.4;-0.87', 
      '0.53;-0.79', '0.58;-0.84', '0.5;-0.72', '0.56;-0.63', '0.56;-0.47', '0.41;-0.57', '0.27;-0.64', '0.26;-0.71', '0.27;-0.69', '0.27;-0.62', '0.3;-0.82', '0.4;-0.68', '0.49;-0.5', '0.55;-0.47', '0.55;-0.6']},
      
      'Verona':{'ataque': 0.08, 'defensa': -0.66, 'PLUSLOCALataque': -0.28, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': -0.12, 'History': ['0.52;-0.54', '0.5;-0.94', '0.55;-0.72', 
      '0.58;-0.59', '0.49;-0.65', '0.4;-0.76', '0.46;-0.69', '0.52;-0.63', '0.54;-0.8', '0.57;-0.81', '0.53;-0.7', '0.38;-0.8', '0.38;-0.83', '0.68;-0.83', '0.71;-0.7', '0.61;-0.74', '0.46;-0.8', '0.63;-0.66', 
      '0.52;-0.69', '0.62;-0.89', '0.46;-0.76', '0.38;-0.82', '0.33;-0.92', '0.07;-0.8', '-0.04;-0.85', '-0.09;-0.81', '0.1;-0.87', '0.33;-0.9', '0.23;-0.94', '0.16;-0.77', '0.11;-0.63', '0.13;-0.72', '0.08;-0.66']},
      
      'Atalanta':{'ataque': 0.66, 'defensa': -0.32, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.39, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.11, 'History': ['0.69;-0.53', '0.61;-0.48', '0.72;-0.46', '0.92;-0.34', '0.77;-0.35', '0.78;-0.42', '0.86;-0.29', '0.83;-0.36', '0.83;-0.26', '0.7;-0.24', '0.58;-0.4', '0.57;-0.47', '0.61;-0.34', '0.61;-0.64', '0.72;-0.6', '0.76;-0.5', '0.62;-0.39', '0.65;-0.41', '0.66;-0.38', '0.84;-0.41', '0.76;-0.52', '0.97;-0.66', '0.88;-0.94', '0.83;-0.96', '0.78;-0.87', 
      '0.74;-0.82', '0.64;-0.87', '0.57;-0.87', '0.75;-0.69', '0.59;-0.62', '0.84;-0.5', '0.67;-0.38', '0.66;-0.32']},
      
      'Pisa':{'ataque': 0.20, 'defensa': -1.21, 'PLUSLOCALataque': -0.30, 'PLUSLOCALdefensa': -0.00, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.61, 'History': ['0.53;-0.69', '0.4;-0.65', '0.31;-0.6', '0.47;-0.77', '0.45;-0.71', '0.33;-0.98', '0.26;-1.04', '0.38;-0.92', '0.42;-0.8', '0.46;-0.69', '0.43;-0.59', '0.46;-0.61', '0.42;-0.65', '0.28;-0.68', '0.18;-0.79', '0.39;-0.78', '0.39;-0.89', '0.3;-0.73', '0.23;-0.94', '0.29;-1.0', '0.4;-0.92', '0.39;-1.16', '0.44;-1.25', '0.33;-1.0', '0.41;-0.97', '0.31;-0.91', '0.19;-0.82', '0.16;-0.83', '0.26;-0.84', '0.23;-1.15', '0.14;-1.13', '0.1;-1.18', '0.2;-1.21']},
      
      'Juventus':{'ataque': 1.22, 'defensa': -0.13, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.24, 'PLUSVISITAdefensa': 0.31, 'History': ['0.74;-0.53', '0.73;-0.48', '1.04;-0.72', 
      '0.9;-0.76', '0.91;-0.6', '0.87;-0.63', '0.82;-0.64', '0.65;-0.56', '0.85;-0.49', '0.98;-0.43', '0.88;-0.39', '0.86;-0.28', '0.82;-0.36', '0.74;-0.44', '0.84;-0.34', '0.81;-0.35', '0.92;-0.35', '1.0;-0.31', '1.11;-0.26', '1.21;-0.32', '1.11;-0.32', '1.09;-0.24', '1.38;-0.28', '1.44;-0.4', '1.38;-0.43', '1.23;-0.39', '1.26;-0.45', '1.27;-0.42', '1.47;-0.45', '1.36;-0.42', '1.36;-0.37', '1.24;-0.2', '1.22;-0.13']},
      
      'Parma':{'ataque': 0.31, 'defensa': -0.58, 'PLUSLOCALataque': -0.27, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.05, 'History': ['0.53;-0.74', '0.48;-0.67', '0.35;-0.75', 
      '0.35;-0.52', '0.37;-0.51', '0.29;-0.48', '0.16;-0.68', '0.19;-0.59', '0.33;-0.68', '0.24;-0.95', '0.43;-0.94', '0.53;-0.79', '0.45;-0.88', '0.48;-0.75', '0.51;-0.79', '0.42;-0.61', '0.43;-0.56', '0.45;-0.63', '0.57;-0.67', '0.45;-0.64', '0.37;-0.58', '0.51;-0.79', '0.56;-1.09', '0.48;-0.86', '0.53;-0.75', '0.47;-0.7', '0.44;-0.61', '0.37;-0.62', '0.26;-0.82', '0.1;-0.77', '0.15;-0.62', '0.18;-0.58', '0.31;-0.58']},
      
      'Cagliari':{'ataque': 0.22, 'defensa': -0.81, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.27, 'PLUSVISITAdefensa': -0.41, 'History': ['0.59;-0.57', '0.52;-0.62', '0.61;-0.5', '0.72;-0.52', '0.49;-0.69', '0.49;-0.88', '0.39;-0.84', '0.34;-0.9', '0.36;-0.98', '0.26;-0.98', '0.27;-0.82', '0.26;-0.81', '0.34;-0.77', '0.46;-0.59', '0.42;-0.71', '0.41;-0.92', '0.49;-0.83', '0.37;-0.7', '0.43;-0.76', '0.29;-0.99', '0.3;-0.88', '0.32;-0.82', '0.42;-0.77', '0.4;-0.77', '0.39;-0.89', 
      '0.37;-0.87', '0.29;-0.83', '0.43;-0.83', '0.44;-0.92', '0.39;-0.93', '0.35;-1.01', '0.31;-0.91', '0.22;-0.81']},
      
      'Fiorentina':{'ataque': 0.79, 'defensa': -0.41, 'PLUSLOCALataque': 0.34, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.09, 'History': ['0.57;-0.59', '0.64;-0.58', '0.73;-0.83', '0.6;-0.78', '0.55;-0.76', '0.6;-0.81', '0.64;-0.86', '0.97;-0.73', '0.89;-0.8', '0.87;-0.83', '0.86;-0.85', '0.75;-0.83', '0.62;-0.87', '0.59;-1.04', '0.46;-1.07', '0.68;-0.95', '0.5;-0.86', '0.56;-0.81', '0.7;-0.98', '0.75;-0.98', '0.81;-0.86', '0.75;-0.88', '0.81;-0.92', '0.74;-0.86', '0.72;-0.61', '0.66;-0.51', '0.64;-0.52', '0.65;-0.45', '0.92;-0.44', '1.1;-0.41', '0.96;-0.36', '0.89;-0.3', '0.79;-0.41']},
      
      'Como':{'ataque': 1.11, 'defensa': -0.63, 'PLUSLOCALataque': 0.74, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': 0.07, 'History': ['0.61;-0.48', '0.54;-0.49', '0.64;-0.68', '0.59;-0.55', '0.58;-0.48', '0.66;-0.49', '0.67;-0.45', '0.57;-0.47', '0.74;-0.49', '0.73;-0.42', '0.57;-0.43', '0.78;-0.52', '0.81;-0.44', '0.7;-0.71', '0.63;-0.68', '0.72;-0.61', '0.73;-0.6', '0.95;-0.54', '0.77;-0.52', '0.74;-0.73', '0.83;-0.58', '1.01;-0.49', '1.29;-0.4', '1.04;-0.38', '0.99;-0.25', '0.95;-0.1', '1.11;-0.12', '1.11;-0.26', '1.1;-0.18', '1.41;-0.15', '1.22;-0.24', '1.33;-0.52', '1.11;-0.63']},
      
      'Lazio':{'ataque': 0.51, 'defensa': -0.21, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.17, 'History': ['0.48;-0.61', '0.88;-0.6', '0.77;-0.61', '0.73;-0.62', '0.97;-0.48', '0.86;-0.6', '0.73;-0.69', '0.66;-0.51', '0.54;-0.56', '0.54;-0.46', '0.47;-0.46', '0.59;-0.51', '0.53;-0.48', '0.45;-0.45', '0.49;-0.48', '0.34;-0.48', '0.3;-0.46', '0.28;-0.53', '0.46;-0.67', '0.49;-0.56', '0.35;-0.66', '0.29;-0.64', '0.23;-0.56', '0.35;-0.61', '0.25;-0.56', '0.23;-0.54', '0.23;-0.58', '0.44;-0.5', '0.46;-0.28', '0.59;-0.25', '0.44;-0.31', '0.39;-0.23', '0.51;-0.21']},
      
      'AC Milan':{'ataque': 0.81, 'defensa': -0.46, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': 0.08, 'History': ['0.57;-0.7', '0.67;-0.59', '0.64;-0.47', 
      '0.68;-0.39', '0.77;-0.31', '0.8;-0.26', '0.85;-0.3', '0.73;-0.42', '0.64;-0.42', '0.93;-0.51', '0.92;-0.7', '0.91;-0.67', '0.88;-0.62', '0.97;-0.73', '0.92;-0.65', '0.96;-0.54', '0.83;-0.42', '0.92;-0.49', '0.92;-0.54', '1.12;-0.51', '1.3;-0.46', '1.15;-0.55', '1.1;-0.44', '1.07;-0.52', '0.94;-0.47', '0.89;-0.42', '1.13;-0.42', '1.11;-0.3', '0.88;-0.32', '1.02;-0.5', '0.9;-0.44', '0.87;-0.51', '0.81;-0.46']},
      
      'Cremonese':{'ataque': 0.22, 'defensa': -0.83, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.23, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': 0.00, 'History': ['0.7;-0.57', '0.95;-0.61', '0.73;-0.65', '0.5;-0.65', '0.43;-0.64', '0.4;-0.88', '0.42;-0.73', '0.49;-0.69', '0.53;-0.69', '0.47;-0.81', '0.37;-0.78', '0.33;-0.8', '0.58;-0.9', '0.7;-0.87', '0.51;-0.76', '0.52;-0.6', '0.45;-0.77', '0.4;-0.82', '0.46;-0.88', '0.52;-0.98', '0.39;-0.82', '0.31;-0.78', '0.31;-0.78', '0.34;-0.73', '0.45;-0.72', '0.47;-0.75', '0.47;-1.0', '0.5;-1.06', '0.48;-1.34', '0.43;-1.18', '0.4;-1.17', '0.3;-1.13', '0.22;-0.83']},
      
      'Roma':{'ataque': 0.70, 'defensa': -0.65, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.52, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.57, 'History': ['0.65;-0.52', '0.6;-0.39', '0.57;-0.37', '0.57;-0.32', '0.64;-0.24', '0.69;-0.29', '0.51;-0.19', '0.6;-0.26', '0.69;-0.4', '0.77;-0.7', '0.83;-0.59', '0.85;-0.55', '0.75;-0.57', '0.57;-0.68', '0.54;-0.62', '0.55;-0.58', '0.56;-0.55', '0.58;-0.58', 
      '0.59;-0.5', '0.77;-0.5', '0.71;-0.42', '0.81;-0.27', '0.65;-0.27', '0.65;-0.25', '0.7;-0.18', '0.74;-0.2', '0.81;-0.23', '0.7;-0.33', '0.63;-0.32', '0.48;-0.3', '0.69;-0.71', '0.75;-0.67', '0.7;-0.65']},
      'Bolonia':{'ataque': 0.32, 'defensa': -0.60, 'PLUSLOCALataque': -0.26, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.12, 'History': ['0.52;-0.65', '0.53;-0.58', '0.41;-0.54', '0.47;-0.45', '0.48;-0.58', '0.74;-0.46', '0.7;-0.37', '0.57;-0.7', '0.43;-0.62', '0.71;-0.53', '0.63;-0.44', '0.79;-0.48', '0.89;-0.74', '0.87;-0.65', '0.76;-0.76', '0.68;-0.8', '0.75;-0.82', '0.72;-0.83', '0.7;-0.66', '0.91;-0.76', '0.78;-0.82', '0.86;-0.99', '0.76;-0.94', '0.53;-0.87', '0.43;-0.74', 
      '0.5;-0.73', '0.4;-0.61', '0.43;-0.83', '0.3;-0.67', '0.28;-0.79', '0.27;-0.76', '0.38;-0.62', '0.32;-0.6']},
      
      'Genoa':{'ataque': 0.74, 'defensa': -0.61, 'PLUSLOCALataque': 0.21, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.08, 'History': ['0.51;-0.5', '0.46;-0.48', '0.65;-0.58', '0.55;-0.64', '0.42;-0.89', '0.37;-0.86', '0.58;-0.73', '0.5;-0.8', '0.49;-0.84', '0.57;-0.77', '0.59;-0.76', '0.58;-0.76', '0.62;-0.75', '0.65;-0.72', '0.7;-0.66', '0.6;-0.69', '0.57;-0.71', '0.41;-0.62', 
      '0.48;-0.7', '0.7;-0.56', '0.64;-0.48', '0.81;-0.56', '0.73;-0.5', '0.69;-0.58', '0.69;-0.7', '0.74;-0.67', '0.69;-0.57', '0.79;-0.46', '0.83;-0.37', '0.7;-0.47', '0.65;-0.47', '0.7;-0.51', '0.74;-0.61']},
      
      'Lecce':{'ataque': 0.29, 'defensa': -0.94, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': -0.39, 'History': ['0.5;-0.51', '0.38;-0.61', '0.36;-0.72', '0.38;-0.83', '0.51;-0.84', '0.47;-0.76', '0.39;-0.6', '0.35;-0.58', '0.2;-0.49', '0.23;-0.47', '0.12;-0.44', '0.17;-0.55', '0.39;-0.56', '0.36;-0.67', '0.48;-0.57', '0.4;-0.66', '0.36;-0.73', '0.28;-0.74', '0.31;-0.85', '0.31;-0.63', '0.26;-0.8', '0.24;-0.74', '0.13;-0.84', '0.23;-0.69', '0.35;-0.69', '0.35;-0.63', '0.37;-0.79', '0.43;-0.82', '0.47;-0.82', '0.45;-0.67', '0.33;-0.92', '0.19;-1.04', '0.29;-0.94']},
      
      'Sassuolo':{'ataque': 0.52, 'defensa': -0.61, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.02, 'History': ['0.5;-0.6', '0.53;-0.85', '0.54;-0.74', 
      '0.45;-0.75', '0.52;-0.76', '0.63;-0.66', '0.48;-0.58', '0.54;-0.67', '0.63;-0.69', '0.56;-0.77', '0.72;-0.65', '0.74;-0.68', '0.66;-0.71', '0.83;-0.68', '0.75;-0.63', '0.6;-0.69', '0.65;-0.61', '0.59;-0.62', '0.55;-0.74', '0.54;-0.92', '0.45;-0.81', '0.41;-0.74', '0.5;-0.79', '0.49;-1.14', '0.56;-1.0', '0.53;-0.95', '0.58;-0.85', '0.51;-1.06', '0.34;-0.93', '0.31;-0.82', '0.38;-0.77', '0.42;-0.83', '0.52;-0.61']},
      
      'Nápoles':{'ataque': 0.63, 'defensa': -0.47, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': 0.19, 'History': ['0.6;-0.5', '0.65;-0.43', '0.91;-0.51', '1.08;-0.68', '0.99;-0.77', '0.96;-0.72', '0.94;-0.82', '0.91;-0.76', '0.83;-0.61', '0.75;-0.59', '0.66;-0.52', '0.73;-0.5', '0.75;-0.4', '0.83;-0.32', '0.75;-0.4', '0.92;-0.34', '0.98;-0.32', '0.84;-0.49', '0.83;-0.39', '0.8;-0.28', '0.7;-0.18', '0.61;-0.16', '0.65;-0.21', '0.73;-0.18', '0.66;-0.23', '0.6;-0.19', '0.66;-0.38', '0.74;-0.44', '0.75;-0.48', '0.75;-0.43', '0.69;-0.32', '0.65;-0.35', '0.63;-0.47']},

  },

  Bundesliga: {
    "Borussia M'gladbach":{'ataque': 0.28, 'defensa': -0.62, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': -0.16, 'History': []},

    'Hamburgo':{'ataque': 0.26, 'defensa': -1.11, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': -0.48, 'History': []},
    
    'Mainz':{'ataque': 0.96, 'defensa': -0.47, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': 0.13, 'PLUSVISITAdefensa': -0.10, 'History': []},
    
    'Colonia':{'ataque': 0.85, 'defensa': -0.87, 'PLUSLOCALataque': 0.27, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.41, 'History': []},
    
    'St. Pauli':{'ataque': 0.20, 'defensa': -0.80, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.34, 'PLUSVISITAdefensa': -0.26, 'History': []},
    
    'Borussia Dortmund':{'ataque': 1.08, 'defensa': -0.36, 'PLUSLOCALataque': 0.59, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.17, 'History': []},
    
    'Bayer Leverkusen':{'ataque': 0.98, 'defensa': -0.56, 'PLUSLOCALataque': 0.65, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': 0.02, 'History': []},
    
    'Hoffenheim':{'ataque': 0.62, 'defensa': -0.65, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.33, 'History': []},
    
    'Eintracht Fráncfort':{'ataque': 0.59, 'defensa': -0.98, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 
    -0.18, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.20, 'History': []},
    
    'Werder Bremen':{'ataque': 0.52, 'defensa': -0.67, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.16, 'History': []},
    
    'Friburgo':{'ataque': 0.62, 'defensa': -0.81, 'PLUSLOCALataque': 0.27, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': -0.20, 'History': []},
    
    'Augsburgo':{'ataque': 0.55, 'defensa': -0.73, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.04, 'History': []},
    
    'Heidenheim':{'ataque': 0.63, 'defensa': -0.79, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.00, 'History': []},
    
    'Wolfsburgo':{'ataque': 0.57, 'defensa': -0.95, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.47, 'History': []},
    
    'Union Berlin':{'ataque': 0.28, 'defensa': -0.99, 'PLUSLOCALataque': -0.00, 'PLUSLOCALdefensa': 0.09, 
    'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.48, 'History': []},
    
    'Stuttgart':{'ataque': 1.07, 'defensa': -0.71, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': 0.39, 'PLUSVISITAdefensa': -0.41, 'History': []},
    
    'Bayern Múnich':{'ataque': 2.10, 'defensa': -0.74, 'PLUSLOCALataque': 0.95, 'PLUSLOCALdefensa': 0.05, 
    'PLUSVISITAataque': 0.55, 'PLUSVISITAdefensa': -0.19, 'History': []},
    
    'RB Leipzig':{'ataque': 1.22, 'defensa': -0.56, 'PLUSLOCALataque': 0.57, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': 0.05, 'PLUSVISITAdefensa': 0.03, 'History': []},
  },
  Ligue1: {
    'Nantes':{'ataque': 0.46, 'defensa': -0.60, 'PLUSLOCALataque': -0.26, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.13, 'History': []},

    'PSG':{'ataque': 1.28, 'defensa': -0.36, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.34, 'PLUSVISITAdefensa': 0.12, 'History': []},
    
    'Angers':{'ataque': 0.18, 'defensa': -0.89, 'PLUSLOCALataque': -0.24, 'PLUSLOCALdefensa': -0.15, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': -0.14, 'History': []},
    
    'Paris FC':{'ataque': 0.81, 'defensa': -0.56, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': -0.14, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.18, 'History': []},
    
    'Auxerre':{'ataque': 0.44, 'defensa': -0.73, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.08, 'History': []},
    
    'Lorient':{'ataque': 0.53, 'defensa': -0.65, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.22, 'History': []},
    
    'Metz':{'ataque': 0.46, 'defensa': -1.00, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': -0.40, 'PLUSVISITAdefensa': -0.28, 'History': []},
    
    'Estrasburgo':{'ataque': 0.88, 'defensa': -0.88, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.28, 'PLUSVISITAdefensa': -0.31, 'History': []},
    
    'Brest':{'ataque': 0.26, 'defensa': -0.87, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.39, 'PLUSVISITAdefensa': -0.27, 'History': []},
    
    'Lille':{'ataque': 0.61, 'defensa': 0.02, 'PLUSLOCALataque': -0.17, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': 0.34, 'History': []},
    
    'Niza':{'ataque': 0.48, 'defensa': -0.96, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': -0.31, 'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': -0.05, 'History': []},
    
    'Toulouse':{'ataque': 0.60, 'defensa': -0.66, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': -0.12, 'History': []},
    
    'Mónaco':{'ataque': 0.79, 'defensa': -0.79, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.20, 'History': []},
    
    'Le Havre':{'ataque': 0.36, 'defensa': -0.94, 'PLUSLOCALataque': -0.17, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.43, 'History': []},
    
    'Lens':{'ataque': 1.38, 'defensa': -0.65, 'PLUSLOCALataque': 0.63, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.08, 'History': []},
    
    'Lyon':{'ataque': 0.81, 'defensa': -0.63, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.04, 'History': []},
    
    'Stade Rennais':{'ataque': 1.08, 'defensa': -0.60, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.46, 'PLUSVISITAdefensa': 0.01, 'History': []},
    
    'Marsella':{'ataque': 0.91, 'defensa': -0.60, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': -0.06, 'History': []},
  },
  PrimeiraLiga: {
    'Oporto':{'ataque': 1.07, 'defensa': -0.33, 'PLUSLOCALataque': 0.27, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': 0.17, 'History': ['0.73;-0.52', '0.62;-0.62', '0.56;-0.63', '0.53;-0.55', '0.59;-0.5', '0.83;-0.39', '1.0;-0.31', '1.0;-0.26', '0.98;-0.17', '0.8;-0.38', '0.87;-0.31', '0.96;-0.29', '1.07;-0.33']},

    'Gil Vicente':{'ataque': 0.65, 'defensa': -0.72, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.16, 'History': ['0.52;-0.73', '0.74;-0.59', '0.9;-0.48', '0.88;-0.37', '0.96;-0.53', '0.92;-0.6', '0.96;-0.61', '0.82;-0.75', '0.64;-0.68', '0.7;-0.64', '0.61;-0.67', '0.65;-0.72']},

    'SC Braga':{'ataque': 0.59, 'defensa': -0.46, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': -0.12, 'History': ['0.88;-0.48', '0.97;-0.41', '1.07;-0.35', '0.96;-0.33', '1.02;-0.34', '1.1;-0.39', '1.09;-0.43', '0.99;-0.42', '0.85;-0.38', '0.72;-0.28', '0.7;-0.25', '0.66;-0.16', '0.59;-0.46']},

    'Alverca':{'ataque': 0.57, 'defensa': -0.68, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': 0.05, 'PLUSVISITAdefensa': -0.02, 'History': ['0.48;-0.88', '0.45;-0.84', '0.5;-0.82', '0.43;-0.84', '0.48;-0.8', '0.59;-0.73', '0.47;-0.65', '0.61;-0.5', '0.65;-0.78', '0.71;-0.73', '0.72;-0.7', '0.59;-0.71', '0.57;-0.68']},

    'Benfica':{'ataque': 1.31, 'defensa': -0.17, 'PLUSLOCALataque': 0.63, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': 0.36, 'History': ['0.77;-0.47', '0.87;-0.41', '0.85;-0.46', '0.84;-0.39', '1.05;-0.27', '1.12;-0.24', '1.04;-0.41', '1.03;-0.43', '1.08;-0.33', '1.03;-0.26', '1.08;-0.22', '1.07;-0.09', '1.31;-0.17']},

    'Estrela':{'ataque': 0.43, 'defensa': -0.52, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': -0.39, 'PLUSVISITAdefensa': -0.16, 'History': ['0.47;-0.77', '0.43;-0.73', '0.44;-0.59', '0.45;-0.64', '0.44;-0.68', '0.38;-0.62', '0.39;-0.66', '0.39;-0.79', '0.74;-0.73', '0.67;-0.69', '0.49;-0.46', '0.39;-0.41', '0.43;-0.52']},

    'Famalicao':{'ataque': 0.56, 'defensa': -0.16, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.32, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.12, 'History': ['0.53;-0.47', '0.39;-0.68', '0.54;-0.54', '0.5;-0.62', '0.59;-0.54', '0.51;-0.54', '0.4;-0.45', '0.44;-0.34', '0.49;-0.37', '0.7;-0.18', '0.72;-0.27', '0.69;-0.25', '0.56;-0.16']},

    'Tondela':{'ataque': 0.11, 'defensa': -0.82, 'PLUSLOCALataque': -0.30, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': -0.06, 'History': ['0.47;-0.53', '0.41;-0.63', '0.52;-0.69', '0.54;-0.62', '0.58;-0.61', '0.64;-0.74', '0.51;-0.77', '0.4;-0.72', '0.21;-0.71', '0.25;-0.62', '0.22;-0.71', '0.11;-0.82']},

    'Nacional':{'ataque': 0.50, 'defensa': -0.45, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': 0.32, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.17, 'History': ['0.64;-0.51', '0.65;-0.58', '0.59;-0.51', '0.51;-0.48', '0.46;-0.57', '0.51;-0.65', '0.51;-0.65', '0.42;-0.65', '0.45;-0.7', '0.41;-0.63', '0.38;-0.68', '0.39;-0.55', '0.5;-0.45']},

    'Rio Ave':{'ataque': 0.49, 'defensa': -0.76, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': -0.24, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': 0.08, 'History': ['0.51;-0.64', '0.42;-0.66', '0.36;-0.75', '0.35;-0.88', '0.3;-0.94', '0.3;-0.86', '0.33;-0.73', '0.45;-0.73', '0.52;-0.7', '0.47;-0.76', '0.42;-0.65', '0.56;-0.76', '0.49;-0.76']},

    'Estoril':{'ataque': 0.35, 'defensa': -0.86, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.27, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': 0.01, 'History': ['0.7;-0.69', '0.84;-0.74', '0.9;-0.85', 
    '0.79;-0.8', '0.94;-0.88', '0.85;-0.93', '0.69;-0.91', '0.68;-0.82', '0.65;-0.89', '0.62;-0.92', '0.55;-1.0', '0.43;-0.99', '0.35;-0.86']},

    'Vitória Guimaraes':{'ataque': 0.53, 'defensa': -0.75, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.31, 'History': ['0.69;-0.7', '0.77;-0.63', '0.79;-0.68', '0.84;-0.69', '0.85;-0.76', '0.78;-0.87', '0.56;-0.94', '0.45;-0.97', '0.36;-1.03', '0.35;-0.84', '0.53;-0.81', '0.53;-0.75']},

    'Arouca':{'ataque': 0.48, 'defensa': -0.47, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': 0.05, 'History': ['0.57;-0.7', '0.59;-0.61', '0.65;-0.63', '0.62;-0.74', '0.71;-0.69', '0.61;-0.93', '0.53;-0.82', '0.54;-0.81', '0.62;-0.76', '0.65;-0.72', '0.56;-0.59', '0.51;-0.49', '0.48;-0.47']},

    'Sporting CP':{'ataque': 1.35, 'defensa': -0.42, 'PLUSLOCALataque': 0.34, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': 0.41, 'PLUSVISITAdefensa': 0.22, 'History': ['0.7;-0.57', '0.77;-0.59', '0.78;-0.52', '0.86;-0.48', '1.02;-0.41', '1.07;-0.32', '1.12;-0.3', '1.39;-0.35', '1.67;-0.53', '1.44;-0.35', '1.3;-0.34', '1.35;-0.42']},

    'Moreirense':{'ataque': 0.40, 'defensa': -0.86, 'PLUSLOCALataque': -0.40, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': -0.25, 'History': ['0.48;-0.48', '0.4;-0.56', '0.29;-0.72', '0.42;-0.71', '0.35;-0.87', '0.37;-0.78', '0.38;-0.77', '0.33;-0.78', '0.28;-0.86', '0.24;-0.71', 
    '0.33;-0.73', '0.32;-0.62', '0.4;-0.86']},

    'Santa Clara':{'ataque': 0.64, 'defensa': -0.44, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.38, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.22, 'History': ['0.48;-0.48', '0.53;-0.62', '0.39;-0.63', '0.32;-0.62', '0.28;-0.67', '0.42;-0.73', '0.48;-0.51', '0.53;-0.45', '0.46;-0.28', '0.64;-0.55', '0.53;-0.51', '0.35;-0.51', '0.64;-0.44']},

    'Casa Pia':{'ataque': 0.38, 'defensa': -0.76, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': -0.27, 'History': ['0.65;-0.87', '0.75;-0.76', '0.67;-0.7', '0.78;-0.67', '0.7;-0.76', '0.61;-0.79', '0.58;-0.63', '0.52;-0.98', '0.45;-0.92', '0.42;-0.93', '0.42;-0.75', '0.34;-0.72', '0.38;-0.76']},

    'AFS':{'ataque': 0.37, 'defensa': -1.16, 'PLUSLOCALataque': -0.18, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.37, 'History': ['0.87;-0.65', '0.8;-0.74', '0.66;-0.9', '0.61;-0.78', '0.49;-1.0', '0.43;-0.94', '0.34;-0.81', '0.29;-0.86', '0.24;-0.74', '0.2;-0.8', '0.17;-0.98', '0.28;-1.11', '0.37;-1.16']},
    },
  Eredivise: {

    'Feyenoord':{'ataque': 0.77, 'defensa': -0.55, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': -0.13, 'History': ['0.95;-0.7', '0.79;-0.77', '0.76;-0.63', '0.95;-0.5', '0.86;-0.47', '0.73;-0.51', '0.81;-0.54', '0.9;-0.54', '0.71;-0.42', '0.7;-0.45', '0.77;-0.55']},

    'Heracles':{'ataque': 0.53, 'defensa': -1.38, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.75, 'History': ['0.7;-0.95', '0.83;-0.8', '0.84;-0.86', '0.77;-0.86', '0.63;-0.99', '0.6;-1.17', '0.49;-1.15', '0.44;-1.25', '0.47;-1.2', '0.51;-1.32', '0.53;-1.38']},
    
    'Utrecht':{'ataque': 1.02, 'defensa': -0.60, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': -0.16, 'History': ['0.45;-0.57', '0.42;-0.65', '0.28;-0.61', 
    '0.4;-0.65', '0.5;-0.6', '0.64;-0.6', '0.66;-0.5', '0.65;-0.39', '0.73;-0.35', '0.84;-0.35', '0.78;-0.6', '1.02;-0.6']},
    
    'Sparta Rotterdam':{'ataque': 0.38, 'defensa': -0.64, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.14, 'History': ['0.57;-0.45', '0.62;-0.36', '0.62;-0.4', '0.64;-0.34', '0.59;-0.37', '0.52;-0.42', '0.54;-0.52', '0.46;-0.78', '0.49;-0.69', '0.39;-0.6', '0.38;-0.64']},
    
    'Groningen':{'ataque': 0.92, 'defensa': -0.89, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': 0.26, 'PLUSVISITAdefensa': -0.15, 'History': ['0.57;-0.7', '0.49;-0.74', '0.51;-0.85', '0.46;-0.94', '0.49;-0.91', '0.62;-1.08', '0.71;-1.13', '0.82;-1.19', '0.87;-1.09', '0.95;-0.99', '0.92;-0.89']},
    
    'Sittard':{'ataque': 0.76, 'defensa': -0.91, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.31, 'History': ['0.7;-0.57', '0.55;-0.71', '0.59;-0.71', 
    '0.59;-0.99', '0.72;-0.94', '0.9;-0.85', '0.99;-1.0', '1.04;-1.04', '0.95;-0.98', '0.78;-0.95', '0.76;-0.91']},
    
    'Telstar':{'ataque': 0.56, 'defensa': -1.14, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': -0.66, 'History': ['0.58;-0.58', '0.65;-0.77', '0.68;-0.89', '0.7;-0.89', '0.67;-0.8', '0.67;-0.69', '0.82;-0.78', '0.6;-0.89', '0.66;-0.83', '0.56;-0.91', '0.56;-1.14']},
    
    'AZ Alkmaar':{'ataque': 0.67, 'defensa': -0.35, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.23, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': 0.02, 'History': ['0.58;-0.58', '0.56;-0.8', '0.67;-0.71', '0.83;-0.66', '0.86;-0.61', '0.76;-0.63', '0.72;-0.62', '0.82;-0.57', '0.71;-0.62', '0.68;-0.45', '0.67;-0.35']},
    
    'Twente':{'ataque': 0.99, 'defensa': -0.41, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.11, 'History': ['0.62;-0.56', '0.65;-0.58', '0.97;-0.48', '0.97;-0.5', '0.93;-0.54', '0.98;-0.4', '1.08;-0.49', '1.05;-0.56', '0.99;-0.48', '1.02;-0.33', '0.99;-0.41']},
    
    'Excelsior':{'ataque': 0.30, 'defensa': -0.98, 'PLUSLOCALataque': -0.36, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.27, 'History': ['0.56;-0.62', '0.53;-0.52', '0.62;-0.37', '0.57;-0.53', '0.52;-0.66', '0.35;-0.66', '0.31;-0.72', '0.31;-0.8', '0.26;-0.83', '0.21;-0.82', '0.3;-0.98']},
    
    'PSV':{'ataque': 1.30, 'defensa': -0.66, 'PLUSLOCALataque': 0.50, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.19, 'PLUSVISITAdefensa': -0.14, 'History': ['0.67;-0.63', '0.74;-0.47', '0.85;-0.49', '0.78;-0.6', '0.98;-0.64', '1.16;-0.6', '1.15;-0.56', '1.08;-0.67', '1.01;-0.73', '1.26;-0.68', '1.3;-0.66']},
    
    'Breda':{'ataque': 0.28, 'defensa': -0.67, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.07, 'History': ['0.63;-0.67', '0.64;-0.71', '0.49;-0.8', '0.5;-0.74', '0.55;-0.6', '0.43;-0.61', '0.46;-0.7', '0.46;-0.73', '0.41;-0.78', '0.32;-0.69', '0.28;-0.67']},
    
    'Nijmegen':{'ataque': 0.99, 'defensa': -0.60, 'PLUSLOCALataque': 0.17, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': 0.18, 'History': ['0.62;-0.58', '0.85;-0.56', '0.91;-0.57', '0.94;-0.69', '0.88;-0.71', '0.85;-0.65', '0.76;-0.82', '0.73;-0.66', '0.84;-0.59', '0.9;-0.58', '0.89;-0.53', '0.99;-0.6']},
    
    'Zwolle':{'ataque': 0.91, 'defensa': -1.00, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': -0.15, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.25, 'History': ['0.58;-0.62', '0.77;-0.69', '0.61;-0.82', 
    '0.6;-0.85', '0.59;-0.99', '0.59;-0.8', '0.69;-0.82', '0.75;-0.93', '0.8;-0.88', '0.76;-0.91', '0.91;-1.0']},
    
    'Ajax':{'ataque': 0.80, 'defensa': -0.41, 'PLUSLOCALataque': 0.59, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.40, 'PLUSVISITAdefensa': 0.00, 'History': ['0.85;-0.49', '0.76;-0.45', '0.67;-0.56', '0.95;-0.56', '0.89;-0.53', '0.7;-0.52', '0.75;-0.62', '1.01;-0.54', '0.89;-0.35', '0.74;-0.38', '0.8;-0.41']},
    
    'FC Volendam':{'ataque': 0.66, 'defensa': -0.75, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': -0.11, 'History': ['0.49;-0.85', '0.5;-0.79', '0.62;-0.63', '0.73;-0.56', '0.6;-0.62', '0.77;-0.75', '0.61;-0.73', '0.64;-0.78', '0.55;-0.8', '0.58;-0.78', '0.66;-0.75']},
    
    'G.A. Eagles':{'ataque': 0.57, 'defensa': -0.75, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.31, 'PLUSVISITAdefensa': -0.11, 'History': ['0.53;-0.61', '0.65;-0.64', '0.52;-0.72', '0.39;-0.91', '0.52;-0.76', '0.51;-0.59', '0.6;-0.69', '0.64;-0.7', '0.64;-0.81', '0.67;-0.77', 
    '0.57;-0.75']},
    
    'Heerenveen':{'ataque': 0.96, 'defensa': -0.69, 'PLUSLOCALataque': 0.39, 'PLUSLOCALdefensa': 0.29, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.39, 'History': ['0.67;-0.57', '0.58;-0.89', '0.66;-0.76', '0.69;-0.75', '0.72;-0.95', '0.78;-0.88', '0.84;-0.83', '0.95;-0.61', '0.94;-0.67', '1.06;-0.71', 
    '0.96;-0.69']},
    
  },
  SüperLig: {

    'Eyupspor':{'ataque': 0.07, 'defensa': -0.77, 'PLUSLOCALataque': -0.28, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.25, 'PLUSVISITAdefensa': -0.16, 'History': ['0.69;-0.67', '0.92;-0.63', '0.8;-0.79', '0.74;-0.85', '0.62;-0.72', '0.44;-0.76', '0.35;-0.74', '0.22;-0.69', '0.15;-0.54', '0.05;-0.73', '0.07;-0.82', '0.07;-0.77']},

    'Beşiktaş':{'ataque': 0.90, 'defensa': -0.44, 'PLUSLOCALataque': 0.47, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.03, 'History': ['0.67;-0.69', '0.76;-0.64', '0.89;-0.53', '1.05;-0.52', '1.3;-0.43', '1.16;-0.3', '1.05;-0.37', '1.08;-0.32', '1.08;-0.35', '0.93;-0.4', '1.04;-0.42', '0.9;-0.44']},
    
    'Fenerbahçe':{'ataque': 0.98, 'defensa': -0.40, 'PLUSLOCALataque': 0.39, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': 0.14, 'History': ['0.72;-0.56', '0.82;-0.43', '0.9;-0.43', '1.11;-0.54', '1.04;-0.59', '0.96;-0.52', '1.11;-0.68', '0.96;-0.71', '1.07;-0.69', '1.13;-0.54', '1.06;-0.45', '0.98;-0.4']},
    
    'Göztepe':{'ataque': 0.62, 'defensa': -0.89, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': -0.44, 'History': ['0.56;-0.72', '0.67;-0.69', '0.58;-0.64', '0.44;-0.64', '0.36;-0.89', '0.4;-0.71', '0.45;-0.69', '0.51;-0.67', '0.53;-0.67', '0.53;-0.87', '0.65;-0.76', '0.62;-0.89']},
    
    'Antalyaspor':{'ataque': 0.58, 'defensa': -1.00, 'PLUSLOCALataque': 0.17, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': -0.36, 'History': ['0.59;-0.56', '0.54;-0.67', '0.42;-0.88', '0.7;-0.82', '0.6;-0.9', '0.54;-0.81', '0.49;-0.9', '0.37;-1.12', '0.42;-0.99', '0.61;-0.89', '0.63;-1.01', '0.58;-1.0']},
    
    'Genclerbirligi':{'ataque': 0.24, 'defensa': -0.90, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': -0.27, 'History': ['0.56;-0.59', '0.61;-0.6', '0.6;-0.68', '0.58;-0.76', '0.45;-0.64', '0.34;-0.57', '0.17;-0.59', '0.12;-0.62', '0.09;-0.61', '0.1;-0.63', '0.18;-0.94', '0.24;-0.9']},
    
    'Rizespor':{'ataque': 0.68, 'defensa': -0.57, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.00, 'History': ['0.5;-0.62', '0.44;-0.63', '0.45;-0.73', '0.52;-0.7', '0.54;-0.63', '0.59;-0.58', '0.67;-0.53', '0.58;-0.54', '0.59;-0.68', '0.67;-0.71', '0.73;-0.64', '0.68;-0.57']},
    
    'Alanyaspor':{'ataque': 0.33, 'defensa': -0.64, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': 0.01, 'History': ['0.62;-0.5', '0.59;-0.73', '0.48;-0.86', '0.58;-0.76', '0.61;-0.97', '0.57;-0.95', '0.59;-0.79', '0.57;-0.84', '0.51;-0.71', '0.49;-0.67', 
    '0.41;-0.68', '0.33;-0.64']},
    
    'Gaziantep':{'ataque': 0.49, 'defensa': -0.77, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.23, 'History': ['0.52;-0.58', '0.53;-0.63', '0.54;-0.59', '0.48;-0.77', '0.48;-0.77', '0.36;-0.73', '0.35;-0.69', '0.57;-0.57', '0.55;-0.68', '0.5;-0.67', '0.44;-0.72', '0.49;-0.77']},
    
    'Konyaspor':{'ataque': 0.90, 'defensa': -0.44, 'PLUSLOCALataque': 0.36, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.05, 'History': ['0.58;-0.52', '0.53;-0.61', '0.48;-0.52', '0.38;-0.63', '0.52;-0.48', '0.4;-0.53', '0.55;-0.67', '0.75;-0.62', '0.74;-0.59', '0.78;-0.58', '0.91;-0.49', '0.9;-0.44']},
    
    'Karagumruk':{'ataque': 0.37, 'defensa': -0.77, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': -0.37, 'PLUSVISITAdefensa': -0.44, 'History': ['0.52;-0.62', '0.49;-0.73', '0.69;-0.61', '0.69;-0.76', '0.59;-0.71', '0.52;-0.68', '0.48;-0.67', '0.51;-0.51', '0.37;-0.62', '0.51;-0.64', 
    '0.42;-0.77', '0.37;-0.77']},
    
    'Galatasaray':{'ataque': 1.13, 'defensa': -0.49, 'PLUSLOCALataque': 0.41, 'PLUSLOCALdefensa': 0.23, 'PLUSVISITAataque': 0.12, 'PLUSVISITAdefensa': -0.12, 'History': ['0.62;-0.52', '0.92;-0.48', '1.02;-0.49', '1.07;-0.44', '0.92;-0.58', '0.91;-0.54', '0.99;-0.43', '1.14;-0.27', '1.06;-0.38', '1.25;-0.37', 
    '1.17;-0.43', '1.13;-0.49']},
    
    'Samsunspor':{'ataque': 0.69, 'defensa': -0.70, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.30, 'History': ['0.53;-0.5', '0.52;-0.38', '0.49;-0.57', '0.44;-0.84', '0.39;-0.74', '0.35;-0.62', '0.5;-0.77', '0.58;-0.72', '0.56;-0.75', '0.59;-0.83', '0.68;-0.84', '0.69;-0.7']},
    
    'Kocaelispor':{'ataque': 0.44, 'defensa': -0.36, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.27, 'History': ['0.5;-0.53', '0.37;-0.62', '0.46;-0.64', '0.63;-0.58', '0.56;-0.59', '0.42;-0.45', '0.39;-0.36', '0.34;-0.56', '0.21;-0.5', '0.25;-0.47', '0.31;-0.39', '0.44;-0.36']},
    
    'Kayserispor':{'ataque': 0.45, 'defensa': -0.79, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': -0.24, 'History': ['0.48;-0.66', '0.45;-0.95', '0.47;-1.04', '0.47;-0.91', '0.54;-0.81', '0.48;-0.7', '0.55;-0.8', '0.5;-0.88', '0.61;-0.73', '0.49;-0.81', '0.4;-0.74', '0.45;-0.79']},
    
    'Başakşehir':{'ataque': 0.97, 'defensa': -0.67, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': 0.15, 'PLUSVISITAdefensa': 0.09, 'History': ['0.66;-0.48', '0.67;-0.42', '0.82;-0.3', '0.82;-0.47', '1.03;-0.49', '1.07;-0.38', '1.05;-0.43', '0.89;-0.58', '0.77;-0.63', '0.74;-0.67', '1.05;-0.75', '0.97;-0.67']},
    
    'Trabzonspor':{'ataque': 0.92, 'defensa': -0.23, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': 0.26, 'PLUSVISITAdefensa': 0.16, 'History': ['0.54;-0.51', '0.65;-0.45', '0.84;-0.42', '0.95;-0.63', '0.96;-0.63', '0.92;-0.56', '1.02;-0.64', '1.03;-0.54', '0.88;-0.48', '0.99;-0.4', '1.0;-0.31', '0.92;-0.23']},
    
    'Kasimpasa':{'ataque': 0.55, 'defensa': -0.48, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.16, 'History': ['0.51;-0.54', '0.38;-0.53', '0.35;-0.54', '0.49;-0.54', '0.54;-0.47', '0.49;-0.52', '0.64;-0.68', '0.59;-0.54', '0.61;-0.54', '0.69;-0.43', 
    '0.59;-0.55', '0.55;-0.48']},
    

  },
  Championship: {
    'Leicester':{'ataque': 0.61, 'defensa': -0.64, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': 0.07, 'History': []},

  'Sheffield Wed':{'ataque': 0.32, 'defensa': -1.18, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.24, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.34, 'History': []},

  'Sheffield Utd':{'ataque': 0.57, 'defensa': -0.91, 'PLUSLOCALataque': 0.19, 'PLUSLOCALdefensa': -0.35, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'Bristol City':{'ataque': 0.59, 'defensa': -0.90, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.28, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.02, 'History': []},

  'Middlesbrough':{'ataque': 1.09, 'defensa': -0.45, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.03, 
  'PLUSVISITAataque': 0.45, 'PLUSVISITAdefensa': 0.12, 'History': []},

  'Swansea':{'ataque': 0.52, 'defensa': -0.51, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.08, 'History': []},

  'Norwich':{'ataque': 0.81, 'defensa': -0.43, 'PLUSLOCALataque': -0.29, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.50, 'PLUSVISITAdefensa': 0.11, 'History': []},

  'Millwall':{'ataque': 0.97, 'defensa': -0.48, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.28, 'PLUSVISITAdefensa': -0.01, 'History': []},

  'Oxford Utd':{'ataque': 0.72, 'defensa': -0.61, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.12, 'History': []},

  'Portsmouth':{'ataque': 0.62, 'defensa': -0.54, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.34, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.28, 'History': []},

  'QPR':{'ataque': 0.60, 'defensa': -0.79, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': -0.02, 'History': []},

  'Preston':{'ataque': 0.78, 'defensa': -0.97, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.31, 'PLUSVISITAdefensa': -0.25, 'History': []},

  'Stoke':{'ataque': 0.36, 'defensa': -1.02, 'PLUSLOCALataque': 0.21, 'PLUSLOCALdefensa': -0.14, 'PLUSVISITAataque': -0.45, 'PLUSVISITAdefensa': -0.28, 'History': []},

  'Derby':{'ataque': 0.72, 'defensa': -0.57, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.31, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': -0.27, 'History': []},

  'West Brom':{'ataque': 0.63, 'defensa': -0.38, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.07, 'History': []},

  'Blackburn':{'ataque': 0.63, 'defensa': -0.63, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.13, 'PLUSVISITAdefensa': -0.15, 'History': []},

  'Charlton':{'ataque': 0.34, 'defensa': -0.70, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'Watford':{'ataque': 0.41, 'defensa': -1.10, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.14, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.37, 'History': []},

  'Coventry':{'ataque': 1.16, 'defensa': -0.48, 'PLUSLOCALataque': 0.69, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': 0.09, 'History': []},

  'Hull':{'ataque': 0.55, 'defensa': -0.93, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.26, 'History': []},

  'Southampton':{'ataque': 1.06, 'defensa': -0.51, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': 0.39, 'PLUSVISITAdefensa': -0.19, 'History': []},

  'Wrexham':{'ataque': 0.69, 'defensa': -0.55, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'Birmingham':{'ataque': 0.46, 'defensa': -0.48, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.42, 'PLUSVISITAdefensa': -0.08, 'History': []},

  'Ipswich':{'ataque': 1.00, 'defensa': -0.47, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.09, 'PLUSVISITAdefensa': 0.02, 'History': []},
  },
  _2Bundesliga: {
    'Greuther Fürth':{'ataque': 0.45, 'defensa': -0.83, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.13, 'History': []},

  'Dynamo Dresden':{'ataque': 0.60, 'defensa': -0.49, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': -0.07, 'History': []},

  'Hannover':{'ataque': 0.67, 'defensa': -0.35, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': 0.13, 'PLUSVISITAdefensa': 0.21, 'History': []},

  'Kaiserslautern':{'ataque': 0.50, 'defensa': -0.91, 'PLUSLOCALataque': 0.20, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.30, 'PLUSVISITAdefensa': -0.40, 'History': []},

  'Magdeburgo':{'ataque': 0.75, 'defensa': -0.73, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': -0.24, 'History': []},

  'Braunschweig':{'ataque': 0.62, 'defensa': -0.38, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'Arminia Bielefeld':{'ataque': 0.65, 'defensa': -0.78, 'PLUSLOCALataque': 0.20, 'PLUSLOCALdefensa': 0.35, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.53, 'History': []},

  'Fortuna Düsseldorf':{'ataque': 0.51, 'defensa': -0.83, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': -0.21, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': -0.02, 'History': []},

  'Darmstadt':{'ataque': 0.69, 'defensa': -1.03, 'PLUSLOCALataque': 0.21, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.51, 'History': []},

  'Bochum':{'ataque': 0.71, 'defensa': -0.90, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': -0.24, 'History': []},

  'Elversberg':{'ataque': 0.81, 'defensa': -0.42, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': 0.29, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.11, 'History': []},

  'Núremberg':{'ataque': 0.64, 'defensa': -0.41, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 0.32, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.13, 'History': []},

  'Karlsruher':{'ataque': 0.69, 'defensa': -0.95, 'PLUSLOCALataque': 0.44, 'PLUSLOCALdefensa': -0.16, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': -0.19, 'History': []},

  'Preussen Münster':{'ataque': 0.44, 'defensa': -1.07, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': -0.35, 'History': []},

  'Paderborn':{'ataque': 1.10, 'defensa': -0.64, 'PLUSLOCALataque': 0.54, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.05, 'History': []},

  'Kiel':{'ataque': 0.59, 'defensa': -0.62, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 0.23, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.25, 'History': []},

  'Schalke':{'ataque': 1.26, 'defensa': -0.45, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': 0.40, 'PLUSVISITAdefensa': -0.02, 'History': []},

  'Hertha BSC':{'ataque': 0.63, 'defensa': -0.51, 'PLUSLOCALataque': -0.27, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.29, 'PLUSVISITAdefensa': -0.01, 'History': []},
  },
  FACup: {

    'Brackley Town':{'ataque': 0.48, 'defensa': -0.71, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.48;-0.71']},

    'Burton':{'ataque': 0.56, 'defensa': -0.36, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.05, 'PLUSVISITAdefensa': 0.24, 'History': ['0.71;-0.48', '0.65;-0.36', '0.56;-0.36']},
    'Blackpool':{'ataque': 0.71, 'defensa': -0.84, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.18, 'History': ['0.85;-0.66', '0.71;-0.84']},
    
    'Carlisle':{'ataque': 0.66, 'defensa': -0.85, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.25, 'History': ['0.66;-0.85']},
    
    'Gateshead':{'ataque': 0.48, 'defensa': -0.60, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.48;-0.6']},
    
    'Walsall':{'ataque': 0.49, 'defensa': -0.75, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.15, 'History': ['0.6;-0.48', '0.49;-0.75']},
    
    'Boreham Wood':{'ataque': 0.80, 'defensa': -0.47, 'PLUSLOCALataque': 0.20, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.92;-0.53', '0.8;-0.47']},
    
    'Newport':{'ataque': 0.53, 'defensa': -0.92, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.32, 'History': ['0.53;-0.92']},
    
    'Slough':{'ataque': 0.47, 'defensa': -0.65, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.47;-0.65']},
    
    'Macclesfield':{'ataque': 0.65, 'defensa': -0.44, 'PLUSLOCALataque': -0.00, 'PLUSLOCALdefensa': 0.03, 
    'PLUSVISITAataque': 0.05, 'PLUSVISITAdefensa': 0.13, 'History': ['0.65;-0.47', '0.74;-0.46', '0.65;-0.44']},
    
    'Chesterfield':{'ataque': 0.61, 'defensa': -0.64, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': -0.04, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.61;-0.64']},
    
    'Doncaster':{'ataque': 0.73, 'defensa': -0.84, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.22, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': -0.02, 'History': ['0.64;-0.61', '0.73;-0.84']},
    
    'Sutton':{'ataque': 0.58, 'defensa': -0.65, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.58;-0.65']},
    
    'Shrewsbury':{'ataque': 0.51, 'defensa': -1.02, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.42, 'History': ['0.65;-0.58', '0.51;-1.02']},
    
    'Accrington':{'ataque': 0.57, 'defensa': -0.57, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.57']},
    
    'Mansfield':{'ataque': 1.02, 'defensa': -0.79, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': 0.35, 'PLUSVISITAdefensa': -0.09, 'History': ['0.57;-0.57', '0.93;-0.81', '0.95;-0.69', '1.02;-0.79']},
    
    'Chelmsford':{'ataque': 0.45, 'defensa': -0.95, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': -0.35, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.95']},
    
    'Weston-super-Mare':{'ataque': 0.85, 'defensa': -0.41, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.25, 'PLUSVISITAdefensa': 0.19, 'History': ['0.95;-0.45', '0.85;-0.41']},    
    
    'Cheltenham':{'ataque': 0.98, 'defensa': -0.63, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['1.2;-0.7', '0.98;-0.63']},
    
    'Buxton':{'ataque': 0.70, 'defensa': -1.20, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': -0.60, 'History': ['0.7;-1.2']},
    
    'Exeter':{'ataque': 0.84, 'defensa': -0.61, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.16, 'History': ['0.95;-0.45', '0.84;-0.61']},
    
    'Wycombe':{'ataque': 0.45, 'defensa': -0.95, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.35, 'History': ['0.45;-0.95']},
    
    'Fleetwood':{'ataque': 0.73, 'defensa': -0.76, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.06, 'History': ['0.7;-0.7', '0.73;-0.76']},
    
    'Luton':{'ataque': 0.70, 'defensa': -0.70, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': -0.10, 'History': ['0.7;-0.7']},
    
    'Grimsby':{'ataque': 0.85, 'defensa': -0.35, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': 0.25, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.95;-0.45', '0.91;-0.35', '0.85;-0.35']},
    'Wealdstone':{'ataque': 0.45, 'defensa': -0.95, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.35, 'History': ['0.45;-0.95']},
    
    'MK Dons':{'ataque': 0.93, 'defensa': -0.46, 'PLUSLOCALataque': 0.33, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.82;-0.48', '0.93;-0.46']},
    
    'Oldham':{'ataque': 0.48, 'defensa': -0.82, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.23, 'History': ['0.48;-0.82']},
    
    'Peterborough':{'ataque': 0.45, 'defensa': -0.57, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 0.02, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.57']},
    
    'Barnsley':{'ataque': 0.58, 'defensa': -0.59, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.01, 'History': ['0.57;-0.45', '0.58;-0.59']},
    
    'Port Vale':{'ataque': 0.48, 'defensa': -0.77, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.45, 'History': ['0.57;-0.45', '0.64;-0.48', '0.59;-0.4', '0.62;-0.32', '0.48;-0.77']},
    
    'Bristol Rovers':{'ataque': 0.45, 'defensa': -0.57, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.02, 'History': ['0.45;-0.57']},
    
    'Stockport':{'ataque': 0.45, 'defensa': -0.45, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.45']},
    
    'Cambridge Utd':{'ataque': 0.44, 'defensa': -0.46, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.15, 'History': ['0.45;-0.45', '0.44;-0.46']},     
    
    'Swindon':{'ataque': 0.96, 'defensa': -0.61, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.16, 'History': ['0.85;-0.45', '0.96;-0.61']},
    
    'Bolton':{'ataque': 0.45, 'defensa': -0.85, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.25, 'History': ['0.45;-0.85']},
    
    'Wigan':{'ataque': 0.56, 'defensa': -0.74, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.04, 'History': ['0.7;-0.7', '0.65;-0.6', '0.56;-0.74']},  
    
    'Barrow':{'ataque': 0.70, 'defensa': -0.70, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': -0.10, 'History': ['0.7;-0.7']},
    
    'Salford':{'ataque': 0.97, 'defensa': -0.67, 'PLUSLOCALataque': 0.51, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.11, 'History': ['0.95;-0.45', '1.11;-0.56', '0.97;-0.67']},
    
    'Leyton Orient':{'ataque': 0.45, 'defensa': -0.95, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 
    'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.35, 'History': ['0.45;-0.95']},
    
    'Liverpool':{'ataque': 0.96, 'defensa': -0.27, 'PLUSLOCALataque': 0.34, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.16, 'History': ['0.74;-0.61', '0.94;-0.43', '1.03;-0.25', '0.96;-0.27']},
    
    'Manchester Utd':{'ataque': 0.57, 'defensa': -0.70, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.7']},
    
    'Brighton':{'ataque': 0.52, 'defensa': -0.77, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': -0.17, 'History': ['0.7;-0.57', '0.52;-0.77']},
    
    'Hull':{'ataque': 0.53, 'defensa': -0.49, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.56;-0.5', '0.53;-0.49']},
    
    'Blackburn':{'ataque': 0.50, 'defensa': -0.56, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': 0.04, 'History': ['0.5;-0.56']},
    
    'Norwich':{'ataque': 0.91, 'defensa': -0.54, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.07, 'History': ['0.87;-0.49', '0.98;-0.47', '0.91;-0.54']},
    
    'Sheffield Utd':{'ataque': 0.83, 'defensa': -0.96, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': -0.36, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.83;-0.96']},
    
    'Swansea':{'ataque': 0.71, 'defensa': -0.57, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.71;-0.57']},
    
    'West Brom':{'ataque': 0.55, 'defensa': -0.82, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.22, 'History': ['0.57;-0.71', '0.55;-0.82']},
    
    'West Ham':{'ataque': 0.92, 'defensa': -0.48, 'PLUSLOCALataque': 0.32, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': 0.09, 'History': ['0.62;-0.49', '0.62;-0.4', '0.74;-0.44', 
    '0.92;-0.48']},
    
    'QPR':{'ataque': 0.49, 'defensa': -0.62, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.02, 'History': ['0.49;-0.62']},
    
    'Portsmouth':{'ataque': 0.58, 'defensa': -0.71, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.58;-0.71']},
    
    'Arsenal':{'ataque': 0.88, 'defensa': -0.66, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.14, 'PLUSVISITAdefensa': -0.15, 'History': ['0.71;-0.58', '0.85;-0.5', '0.95;-0.57', '0.88;-0.66']},
    
    'Derby':{'ataque': 0.51, 'defensa': -0.66, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.51;-0.66']},
    
    'Leeds Utd':{'ataque': 0.69, 'defensa': -0.63, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.10, 'History': ['0.66;-0.51', '0.58;-0.52', '0.65;-0.45', '0.69;-0.63']},
    
    'Charlton':{'ataque': 0.59, 'defensa': -0.81, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.21, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.59;-0.81']},
    
    'Chelsea':{'ataque': 1.15, 'defensa': -0.42, 'PLUSLOCALataque': 0.45, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': 0.04, 'History': ['0.81;-0.59', '0.81;-0.56', '0.7;-0.56', '1.15;-0.42']},
    
    'Bristol City':{'ataque': 0.79, 'defensa': -0.49, 'PLUSLOCALataque': 0.27, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.05, 'History': ['0.86;-0.54', '0.79;-0.49']},        
    
    'Watford':{'ataque': 0.54, 'defensa': -0.86, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.27, 'History': ['0.54;-0.86']},
    
    'Birmingham':{'ataque': 0.63, 'defensa': -0.50, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.01, 'History': ['0.61;-0.59', '0.63;-0.5']},
    
    'Tottenham':{'ataque': 0.54, 'defensa': -0.70, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.54;-0.7']},
    
    'Aston Villa':{'ataque': 0.63, 'defensa': -0.54, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.05, 'History': ['0.7;-0.54', '0.63;-0.54']},
    
    'Burnley':{'ataque': 0.66, 'defensa': -0.62, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.78;-0.6', '0.66;-0.62']},
    
    'Millwall':{'ataque': 0.60, 'defensa': -0.78, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.18, 'History': ['0.6;-0.78']},
    
    'Southampton':{'ataque': 0.80, 'defensa': -0.38, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': 0.11, 'History': ['0.82;-0.7', '0.74;-0.65', '0.7;-0.45', '0.8;-0.38']},
    
    'Fulham':{'ataque': 0.56, 'defensa': -0.36, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': 0.14, 'History': ['0.72;-0.54', '0.76;-0.4', '0.56;-0.36']}, 
    
    'Middlesbrough':{'ataque': 0.54, 'defensa': -0.72, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 
    'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.12, 'History': ['0.54;-0.72']},
    
    'Ipswich':{'ataque': 0.74, 'defensa': -0.48, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.02, 'History': ['0.78;-0.46', '0.74;-0.48']},
    
    'Manchester City':{'ataque': 1.13, 'defensa': -0.28, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': 0.31, 'PLUSVISITAataque': 0.24, 'PLUSVISITAdefensa': 0.01, 'History': ['0.76;-0.49', '0.87;-0.36', '1.11;-0.35', '1.13;-0.28']},
    
    'Newcastle':{'ataque': 0.69, 'defensa': -0.83, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.30, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': 0.08, 'History': ['0.7;-0.67', '0.7;-0.59', '0.69;-0.83']},
    
    'Bournemouth':{'ataque': 0.67, 'defensa': -0.70, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': -0.10, 'History': ['0.67;-0.7']},
    
    'Sheffield Wed':{'ataque': 0.50, 'defensa': -0.92, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.32, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.5;-0.92']},
    
    'Brentford':{'ataque': 0.93, 'defensa': -0.52, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.33, 'PLUSVISITAdefensa': 0.08, 'History': ['0.92;-0.5', '0.9;-0.4', '0.93;-0.52']}, 
    
    'Stoke':{'ataque': 0.64, 'defensa': -0.61, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.78;-0.57', '0.64;-0.61']},
    
    'Coventry':{'ataque': 0.57, 'defensa': -0.78, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.18, 'History': ['0.57;-0.78']},
    
    'Leicester':{'ataque': 0.49, 'defensa': -0.30, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.30, 'History': ['0.53;-0.38', '0.49;-0.3']},
    
    'Everton':{'ataque': 0.51, 'defensa': -0.53, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.51;-0.53']},
    
    'Sunderland':{'ataque': 0.43, 'defensa': -0.42, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': 0.18, 'History': ['0.53;-0.51', '0.51;-0.39', '0.43;-0.42']},
    
    'Crystal Palace':{'ataque': 0.59, 'defensa': -0.69, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.09, 'History': ['0.59;-0.69']},
    
    'Wolves':{'ataque': 0.86, 'defensa': -0.49, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.06, 'History': ['1.04;-0.46', '1.04;-0.4', '0.86;-0.49']},  
    
    'Oxford Utd':{'ataque': 0.45, 'defensa': -0.68, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.10, 'History': ['0.58;-0.7', '0.45;-0.68']},
    
    'Preston':{'ataque': 0.51, 'defensa': -0.55, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.51;-0.55']},
    
    'Wrexham':{'ataque': 0.75, 'defensa': -0.54, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.73;-0.68', '0.75;-0.65', '0.75;-0.54']},
    'Nottingham Forest':{'ataque': 0.68, 'defensa': -0.73, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': -0.13, 'History': ['0.68;-0.73']},      

  },
  CopaDelRey: {

    'Granada':{'ataque': 0.57, 'defensa': -0.82, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.23, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.82']},

    'Rayo Vallecano':{'ataque': 0.76, 'defensa': -0.67, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.07, 'History': ['0.82;-0.57', '0.76;-0.67']},      
    
    'Real Murcia':{'ataque': 0.45, 'defensa': -0.70, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': -0.10, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.7']},
    
    'Real Betis':{'ataque': 0.68, 'defensa': -0.64, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': 0.10, 'PLUSVISITAdefensa': 0.15, 'History': ['0.7;-0.45', '0.82;-0.46', '0.68;-0.64']},
    
    'Burgos CF':{'ataque': 0.48, 'defensa': -0.59, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.6;-0.49', '0.48;-0.59']},
    
    'Getafe':{'ataque': 0.49, 'defensa': -0.60, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.00, 'History': ['0.49;-0.6']},
    
    'Ourense CF':{'ataque': 0.49, 'defensa': -0.63, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.49;-0.63']},
    
    'Athletic Club':{'ataque': 0.62, 'defensa': -0.51, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.14, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.23, 'History': ['0.63;-0.49', '0.57;-0.45', '0.71;-0.44', '0.7;-0.57', '0.62;-0.51']},
    
    'Alavés':{'ataque': 0.61, 'defensa': -0.52, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.6;-0.53', '0.7;-0.46', '0.61;-0.52']},   
    
    'Sevilla':{'ataque': 0.53, 'defensa': -0.60, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.00, 'History': ['0.53;-0.6']},
    
    'CF Talavera':{'ataque': 0.65, 'defensa': -0.72, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.65;-0.72']},
    
    'Real Madrid':{'ataque': 0.77, 'defensa': -0.87, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.17, 'PLUSVISITAdefensa': -0.27, 'History': ['0.72;-0.65', '0.77;-0.87']},
    
    'Albacete':{'ataque': 0.73, 'defensa': -0.76, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': -0.16, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.56;-0.68', '0.78;-0.73', '0.73;-0.76']},
    
    'Celta de Vigo':{'ataque': 0.68, 'defensa': -0.56, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 
    'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': 0.04, 'History': ['0.68;-0.56']},
    
    'At. Baleares':{'ataque': 0.70, 'defensa': -0.82, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.23, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.7;-0.82']},
    
    'Atlético de Madrid':{'ataque': 1.09, 'defensa': -0.42, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.23, 'PLUSVISITAdefensa': -0.05, 'History': ['0.82;-0.7', '0.83;-0.62', '1.01;-0.48', '1.16;-0.43', '0.97;-0.59', '1.09;-0.42']},
    
    'Huesca':{'ataque': 0.54, 'defensa': -0.62, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.54;-0.62']},
    
    'Osasuna':{'ataque': 0.53, 'defensa': -0.65, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.05, 'History': ['0.62;-0.54', '0.53;-0.65']},
    
    'R. Racing Club':{'ataque': 0.67, 'defensa': -0.73, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.7;-0.57', '0.67;-0.73']},       
    
    'Villarreal':{'ataque': 0.57, 'defensa': -0.70, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.10, 'History': ['0.57;-0.7']},
    
    'Cultural Leonesa':{'ataque': 0.62, 'defensa': -0.49, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.66;-0.54', '0.62;-0.49']},     
    
    'Levante':{'ataque': 0.54, 'defensa': -0.66, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.06, 'History': ['0.54;-0.66']},
    
    'Eldense':{'ataque': 0.51, 'defensa': -0.59, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.51;-0.59']},
    
    'Real Sociedad':{'ataque': 0.66, 'defensa': -0.35, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.18, 
    'PLUSVISITAataque': 0.19, 'PLUSVISITAdefensa': 0.19, 'History': ['0.59;-0.51', '0.71;-0.41', '0.77;-0.32', '0.9;-0.32', '0.84;-0.23', '0.66;-0.35']},
    
    'Guadalajara':{'ataque': 0.47, 'defensa': -0.68, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': -0.08, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.47;-0.68']},
    
    'Barcelona':{'ataque': 0.98, 'defensa': -0.35, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': 0.21, 'PLUSVISITAdefensa': 0.06, 'History': ['0.68;-0.47', '0.84;-0.44', '0.87;-0.39', '0.81;-0.54', '0.98;-0.35']},
    
    'Real Sporting':{'ataque': 0.49, 'defensa': -0.69, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.49;-0.69']},
    
    'Valencia':{'ataque': 0.78, 'defensa': -0.50, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.14, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': 0.24, 'History': ['0.69;-0.49', '0.8;-0.36', '0.78;-0.5']},
    
    'Deportivo de La Coruña':{'ataque': 0.50, 'defensa': -0.46, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.45', '0.5;-0.46']},
    
    'Mallorca':{'ataque': 0.45, 'defensa': -0.57, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.02, 'History': ['0.45;-0.57']},
    
    'Eibar':{'ataque': 0.47, 'defensa': -0.53, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.47;-0.53']},
    
    'Elche':{'ataque': 0.54, 'defensa': -0.59, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.01, 'History': ['0.53;-0.47', '0.54;-0.59']},

  },
  JupilerProLeague: {

    'St. Truiden':{'ataque': 0.96, 'defensa': -0.40, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.41, 'PLUSVISITAdefensa': 0.08, 'History': ['0.82;-0.57', '0.84;-0.52', '0.97;-0.46', '0.97;-0.5', '1.01;-0.4', '1.04;-0.42', 
    '0.87;-0.57', '0.76;-0.72', '0.71;-0.75', '0.98;-0.72', '0.89;-0.68', '0.77;-0.64', '0.89;-0.64', '0.72;-0.55', '0.86;-0.65', '1.01;-0.55', '1.21;-0.73', '1.16;-0.84', '1.04;-0.69', '1.04;-0.6', '0.91;-0.48', '0.88;-0.42', '0.73;-0.5', '0.96;-0.42', '1.03;-0.43', '1.18;-0.51', '0.95;-0.55', '1.11;-0.56', '0.9;-0.52', '0.85;-0.54', '0.8;-0.51', '0.76;-0.49', '0.74;-0.44', '0.73;-0.29', '0.96;-0.4']},
    
    'Gent':{'ataque': 0.50, 'defensa': -0.62, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.14, 'History': ['0.57;-0.82', '0.6;-0.68', '0.66;-0.92', '0.71;-0.81', '0.66;-0.79', '0.67;-0.73', '0.84;-0.62', '0.78;-0.7', '1.04;-0.72', '1.07;-0.68', '1.11;-0.74', '1.34;-0.65', '1.36;-0.68', '1.2;-0.66', '1.0;-0.75', '0.9;-0.9', '0.95;-0.84', '0.78;-0.88', '0.66;-1.01', '0.61;-0.84', '0.83;-0.84', '0.92;-0.81', '0.88;-0.64', '0.84;-0.81', '1.0;-0.7', '0.8;-0.9', '0.67;-0.95', '0.9;-0.85', '0.82;-0.67', '0.81;-0.6', '0.68;-0.61', '0.6;-0.79', '0.55;-0.77', '0.55;-0.63', '0.5;-0.62']},
    
    'Club Brujas':{'ataque': 1.44, 'defensa': -0.67, 'PLUSLOCALataque': 0.69, 'PLUSLOCALdefensa': -0.30, 'PLUSVISITAataque': 0.15, 'PLUSVISITAdefensa': 0.22, 'History': ['0.7;-0.56', '0.72;-0.68', '0.75;-0.65', '0.74;-0.44', '0.72;-0.4', '0.57;-0.46', 
    '0.72;-0.34', '0.78;-0.55', '0.84;-0.57', '0.75;-0.39', '0.71;-0.29', '0.69;-0.22', '0.66;-0.3', '0.7;-0.38', '0.63;-0.31', 
    '0.66;-0.53', '0.84;-0.73', '1.0;-0.72', '1.13;-0.59', '1.56;-0.79', '1.26;-0.91', '1.49;-1.12', '1.31;-1.01', '1.27;-0.89', '1.05;-0.79', '1.23;-0.76', '1.14;-0.62', '1.13;-0.68', '1.21;-0.62', '1.3;-0.54', '1.39;-0.69', '1.37;-0.65', '1.34;-0.7', '1.46;-0.73', '1.44;-0.67']},
    
    'Genk':{'ataque': 1.16, 'defensa': -0.48, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': 0.39, 'PLUSVISITAdefensa': -0.08, 'History': ['0.56;-0.7', '0.54;-0.61', '0.55;-0.68', '0.63;-0.65', '0.74;-0.66', '0.7;-0.54', '0.63;-0.49', '0.66;-0.57', '0.7;-0.52', '0.7;-0.6', '0.62;-0.77', '0.65;-0.82', '0.57;-0.69', '0.54;-0.53', '0.36;-0.48', '0.45;-0.51', '0.42;-0.57', '0.63;-0.4', '0.6;-0.37', '0.8;-0.79', '0.67;-0.9', '0.55;-0.73', '0.66;-0.75', '0.59;-0.59', '0.84;-0.61', '0.82;-0.7', '0.87;-0.58', '0.88;-0.62', '0.84;-0.4', '1.03;-0.47', '1.06;-0.49', '0.96;-0.49', '1.09;-0.41', '1.13;-0.55', '1.16;-0.48']},
    
    'Leuven':{'ataque': 0.31, 'defensa': -0.73, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': 0.03, 'History': ['0.6;-0.61', '0.49;-0.81', '0.37;-0.89', '0.34;-0.96', '0.4;-0.8', '0.34;-0.61', '0.24;-0.72', '0.18;-0.77', '0.34;-0.67', '0.4;-0.83', '0.31;-0.79', '0.35;-0.73', '0.38;-0.75', '0.24;-0.58', '0.34;-0.71', '0.37;-0.81', '0.29;-0.69', '0.45;-0.58', '0.42;-0.68', '0.43;-0.71', '0.31;-0.58', '0.4;-0.61', '0.65;-0.72', '0.82;-0.68', '0.94;-0.79', '0.92;-0.97', '0.79;-0.91', '0.55;-0.81', '0.63;-0.61', '0.65;-0.5', '0.65;-0.66', '0.65;-0.55', '0.49;-0.71', '0.51;-0.76', '0.31;-0.73']},
    
    'Charleroi':{'ataque': 0.50, 'defensa': -0.75, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.27, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': 0.11, 'History': ['0.61;-0.6', '0.56;-0.61', '0.5;-0.6', '0.48;-0.56', '0.54;-0.55', '0.75;-0.62', '0.7;-0.55', '0.61;-0.55', '0.53;-0.57', '0.49;-0.6', '0.59;-0.72', '0.61;-0.73', '0.61;-0.76', '0.86;-0.7', '0.79;-0.64', '0.76;-0.6', '0.66;-0.57', '0.72;-0.56', '0.7;-0.53', '0.73;-0.49', '0.83;-0.47', '0.91;-0.4', '0.99;-0.25', '1.04;-0.52', '0.94;-0.68', '0.88;-0.79', '0.74;-0.7', '0.69;-0.85', '0.49;-0.93', '0.29;-0.84', '0.25;-0.9', '0.36;-0.91', '0.39;-0.91', '0.53;-0.95', '0.5;-0.75']},
    
    'Anderlecht':{'ataque': 0.67, 'defensa': -1.02, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.30, 'PLUSVISITAdefensa': -0.52, 'History': ['0.77;-0.55', '0.79;-0.49', '0.85;-0.75', '0.92;-0.7', '0.88;-0.71', '0.75;-0.67', '0.64;-0.55', '0.73;-0.49', '0.64;-0.66', '0.68;-0.64', '0.64;-0.55', '0.65;-0.58', '0.68;-0.55', '0.76;-0.58', '0.89;-0.56', '0.79;-0.44', '0.72;-0.65', '0.83;-0.59', '0.87;-0.72', '0.84;-0.76', '0.84;-0.98', '0.8;-0.9', '0.59;-0.97', '0.42;-0.9', '0.45;-0.86', '0.57;-0.97', '0.51;-0.84', '0.57;-0.83', '0.39;-0.7', '0.48;-0.94', '0.63;-1.03', '0.81;-0.96', '0.86;-0.86', '0.71;-0.85', '0.67;-1.02']},
    
    'Westerlo':{'ataque': 0.65, 'defensa': -0.77, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': -0.28, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': 0.11, 'History': ['0.55;-0.77', '0.57;-0.66', '0.38;-0.65', '0.44;-0.75', '0.67;-0.81', '0.82;-0.65', 
    '0.76;-0.6', '0.97;-0.66', '0.83;-0.73', '0.99;-0.79', '0.91;-0.67', '0.85;-0.8', '0.73;-0.72', '0.67;-0.98', '0.77;-0.77', 
    '1.0;-0.67', '1.21;-0.6', '1.04;-0.81', '1.0;-0.84', '0.83;-0.79', '0.73;-0.71', '0.69;-0.86', '0.75;-0.73', '0.67;-0.96', '0.66;-0.73', '0.77;-0.67', '0.68;-0.55', '0.58;-0.31', '0.52;-0.38', '0.7;-0.29', '0.75;-0.25', '0.8;-0.26', '0.73;-0.39', '0.78;-0.41', '0.65;-0.77']},
    
    'RAAL La Louviere':{'ataque': -0.02, 'defensa': -1.09, 'PLUSLOCALataque': -0.43, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': -0.52, 'History': ['0.58;-0.68', '0.43;-0.71', '0.42;-0.65', '0.46;-0.65', '0.39;-0.48', '0.35;-0.64', '0.41;-0.49', '0.46;-0.43', '0.39;-0.45', '0.43;-0.35', '0.32;-0.28', '0.37;-0.31', '0.46;-0.32', '0.39;-0.43', '0.37;-0.56', '0.34;-0.52', '0.43;-0.72', '0.43;-0.73', '0.46;-0.69', '0.49;-0.71', '0.62;-0.41', '0.56;-0.38', '0.39;-0.35', 
    '0.54;-0.45', '0.49;-0.48', '0.37;-0.42', '0.36;-0.52', '0.5;-0.44', '0.64;-0.4', '0.71;-0.59', '0.49;-0.61', '0.18;-0.79', 
    '0.03;-0.86', '-0.02;-1.09']},
    
    'St. Lieja':{'ataque': 0.63, 'defensa': -0.84, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': -0.35, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.12, 'History': ['0.68;-0.58', '0.67;-0.5', '0.73;-0.52', '0.65;-0.71', '0.61;-0.91', '0.42;-0.86', '0.41;-0.82', '0.37;-0.76', '0.39;-0.82', '0.37;-0.86', '0.34;-0.71', '0.25;-0.94', '0.28;-0.94', '0.2;-0.77', '0.27;-0.66', 
    '0.34;-0.52', '0.45;-0.48', '0.34;-0.65', '0.26;-0.52', '0.16;-0.52', '0.14;-0.62', '0.11;-0.71', '0.18;-0.5', '0.06;-0.46', '0.18;-0.52', '0.27;-0.5', '0.37;-0.48', '0.43;-0.44', '0.68;-0.41', '0.59;-0.59', '0.75;-0.59', '0.75;-0.64', '0.75;-0.67', '0.7;-0.81', '0.63;-0.84']},
    
    'Waregem':{'ataque': 1.05, 'defensa': -0.65, 'PLUSLOCALataque': 0.41, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': -0.30, 'History': ['0.74;-0.51', '0.63;-0.53', '0.88;-0.59', '0.68;-0.58', '0.57;-0.62', '0.58;-0.74', '0.69;-0.63', '0.69;-0.54', '0.76;-0.46', '0.67;-0.5', '0.73;-0.54', '0.66;-0.58', '0.8;-0.99', '0.65;-1.07', '0.54;-1.14', '0.55;-0.98', '0.43;-0.89', '0.45;-0.89', '0.48;-0.83', '0.54;-0.83', '0.65;-0.71', '0.86;-0.93', '0.72;-0.99', '0.67;-0.87', 
    '0.68;-0.94', '0.79;-1.06', '0.69;-1.03', '0.65;-1.09', '0.48;-1.01', '0.39;-0.81', '0.44;-0.79', '0.75;-0.86', '0.82;-0.71', '1.05;-0.65']},
    
    'KV Mechelen':{'ataque': 0.37, 'defensa': -1.24, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': -0.44, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.20, 'History': ['0.51;-0.74', '0.63;-0.76', '0.62;-0.58', '0.52;-0.63', '0.52;-0.75', '0.69;-0.71', '0.65;-0.7', '0.56;-0.69', '0.58;-0.61', '0.55;-0.87', '0.78;-0.89', '0.73;-0.93', '0.7;-0.96', '0.74;-0.79', '0.69;-0.61', '0.55;-0.67', '0.51;-0.57', '0.65;-0.68', '0.5;-0.56', '0.38;-0.55', '0.35;-0.48', '0.5;-0.44', '0.62;-0.69', '0.72;-0.63', '0.74;-0.88', '0.68;-0.77', '0.65;-0.67', '0.54;-0.9', '0.41;-0.71', '0.33;-0.8', '0.34;-0.67', '0.32;-0.84', '0.22;-0.89', '0.26;-1.01', '0.37;-1.24']},
    
    'Dender':{'ataque': 0.41, 'defensa': -1.16, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.72, 'PLUSVISITAataque': -0.09, 
    'PLUSVISITAdefensa': 0.17, 'History': ['0.62;-0.59', '0.55;-0.58', '0.49;-0.71', '0.45;-0.78', '0.28;-0.83', '0.27;-0.89', '0.24;-0.72', '0.13;-0.9', '0.14;-0.83', '0.22;-0.83', '0.24;-1.07', '0.37;-1.0', '0.45;-0.97', '0.52;-0.83', '0.53;-0.76', '0.43;-0.99', '0.63;-1.08', '0.61;-1.24', '0.48;-1.15', '0.48;-1.03', '0.51;-0.86', '0.43;-0.82', '0.45;-0.93', '0.33;-0.87', '0.44;-0.99', '0.52;-1.15', '0.41;-1.12', '0.56;-1.07', '0.48;-1.03', '0.42;-1.02', '0.44;-0.8', '0.51;-1.11', '0.49;-1.21', '0.41;-1.16']},
    
    'Círculo Brujas':{'ataque': 1.14, 'defensa': -0.73, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': -0.26, 'PLUSVISITAataque': 
    0.46, 'PLUSVISITAdefensa': 0.13, 'History': ['0.59;-0.62', '0.53;-0.64', '0.5;-0.67', '0.6;-0.73', '0.81;-0.69', '0.83;-0.72', '0.91;-0.93', '0.9;-0.84', '0.91;-1.1', '0.82;-1.18', '0.98;-1.09', '1.02;-1.02', '1.03;-1.11', '0.86;-0.97', '0.77;-0.86', '0.61;-0.87', '0.57;-0.98', '0.67;-1.12', '0.77;-1.08', '0.86;-1.07', '0.78;-0.97', '0.61;-0.84', '0.4;-1.16', '0.67;-1.21', '0.56;-0.99', '0.76;-0.78', '0.73;-0.68', '0.75;-0.84', '0.7;-0.98', '0.94;-1.08', '0.91;-1.13', '1.09;-0.82', '1.19;-0.81', '1.14;-0.73']},
    
    'Antwerp':{'ataque': 1.07, 'defensa': -0.62, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.33, 'PLUSVISITAdefensa': -0.15, 'History': ['0.51;-0.71', '0.42;-0.69', '0.5;-0.57', '0.47;-0.55', '0.59;-0.55', '0.65;-0.79', '0.59;-0.8', '0.47;-0.69', '0.39;-0.76', '0.46;-0.67', '0.31;-0.64', '0.24;-0.63', '0.23;-0.75', '0.34;-0.68', '0.27;-0.69', '0.49;-0.72', '0.54;-0.69', '0.58;-0.52', '0.71;-0.56', '0.71;-0.62', '0.54;-0.65', '0.47;-0.73', '0.78;-0.53', '0.72;-0.62', 
    '0.48;-0.62', '0.57;-0.64', '0.61;-0.41', '0.53;-0.55', '0.5;-0.81', '0.39;-0.83', '0.41;-0.86', '0.42;-0.96', '0.58;-0.81', '0.71;-0.75', '1.07;-0.62']},
    
    'Royale Union SG':{'ataque': 1.06, 'defensa': -0.12, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': 0.52, 'PLUSVISITAataque': 
    0.32, 'PLUSVISITAdefensa': -0.03, 'History': ['0.71;-0.51', '0.91;-0.4', '1.15;-0.46', '1.33;-0.37', '1.16;-0.3', '1.17;-0.26', '1.0;-0.23', '1.08;-0.26', '1.15;-0.12', '0.97;-0.03', '1.09;-0.13', '1.04;-0.01', '1.45;-0.14', '1.29;-0.19', '1.17;-0.1', '1.05;0.0', '0.98;-0.05', '0.97;-0.11', '0.91;-0.15', '0.9;-0.23', '0.82;-0.2', '0.85;-0.3', '0.74;-0.12', '0.85;-0.26', '0.91;-0.39', '0.94;-0.47', '0.82;-0.38', '0.86;-0.39', '0.81;-0.31', '0.83;-0.26', '0.81;-0.21', '0.98;-0.19', '1.02;-0.15', '0.88;-0.16', '1.06;-0.12']},
    
    'Lommel SK':{'ataque': 0.62, 'defensa': -0.50, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': 0.00, 
    'PLUSVISITAdefensa': 0.00, 'History': ['0.62;-0.5']},
    
    'RFC Liege':{'ataque': 0.50, 'defensa': -0.62, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.02, 'History': ['0.5;-0.62']},
    
    'Patro Eisden':{'ataque': 0.49, 'defensa': -0.60, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.49;-0.6']},
    
    'Beerschot VA':{'ataque': 0.60, 'defensa': -0.49, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': 0.11, 'History': ['0.6;-0.49']},
    

  },
  LigathaAl: {

    'B. Jerusalem':{'ataque': 1.17, 'defensa': -0.39, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.29, 'PLUSVISITAataque': 0.34, 'PLUSVISITAdefensa': -0.08, 'History': ['0.66;-0.48', '0.66;-0.38', '0.75;-0.32', '0.92;-0.42', '0.76;-0.34', '0.96;-0.34', '0.97;-0.49', '0.91;-0.53', '0.86;-0.48', '0.9;-0.38', 
    '1.01;-0.29', '1.12;-0.54', '1.14;-0.49', '1.28;-0.28', '1.17;-0.39']},
    
    'Sakhnin':{'ataque': 0.22, 'defensa': -0.80, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': -0.27, 'History': ['0.48;-0.66', '0.48;-0.57', '0.64;-0.56', '0.46;-0.72', '0.35;-0.68', '0.47;-0.64', '0.52;-0.62', '0.37;-0.65', '0.34;-0.71', '0.33;-0.83', '0.35;-0.79', '0.19;-0.84', '0.39;-0.8', '0.3;-0.67', '0.22;-0.8']},
    
    'Maccabi Tel Aviv':{'ataque': 0.99, 'defensa': -0.55, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.03, 'History': ['0.82;-0.6', '0.7;-0.67', '0.75;-0.63', '0.93;-0.63', '0.89;-0.52', '0.86;-0.71', '0.74;-0.78', '0.84;-0.54', '1.17;-0.51', '1.07;-0.55', '1.18;-0.76', '1.16;-0.71', '1.06;-0.85', '0.99;-0.59', '0.99;-0.55']},
    
    'H. Petah Tikva':{'ataque': 0.40, 'defensa': -0.74, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.33, 'History': ['0.6;-0.82', '0.66;-0.72', '0.75;-0.77', '0.68;-0.69', '0.79;-0.62', '0.8;-0.82', '0.67;-0.88', '0.75;-0.77', '0.8;-0.75', '0.71;-0.73', '0.62;-0.62', '0.54;-0.5', '0.45;-0.43', '0.43;-0.74', '0.4;-0.74']},
    
    'Maccabi Bnei Raina':{'ataque': 0.18, 'defensa': -1.29, 'PLUSLOCALataque': -0.20, 'PLUSLOCALdefensa': 
    -0.59, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': -0.10, 'History': ['0.63;-1.11', '0.52;-1.28', 
    '0.72;-1.13', '0.64;-1.06', '0.56;-0.9', '0.42;-0.81', '0.43;-0.62', '0.32;-0.85', '0.29;-1.18', '0.23;-1.48', '0.26;-1.48', '0.14;-1.29', '0.1;-1.49', '0.3;-1.54', '0.18;-1.29']},
    
    'Maccabi Haifa':{'ataque': 0.84, 'defensa': -0.65, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': 0.21, 
    'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.26, 'History': ['1.11;-0.63', '1.01;-0.63', '1.22;-0.5', '1.19;-0.43', '1.03;-0.39', '1.22;-0.36', '0.99;-0.64', '1.14;-0.64', '1.1;-0.52', '1.22;-0.51', '1.11;-0.42', '0.98;-0.51', '1.09;-0.5', '0.88;-0.64', '0.84;-0.65']},
    
    'H. Beer Sheva':{'ataque': 1.39, 'defensa': -0.34, 'PLUSLOCALataque': 0.59, 'PLUSLOCALdefensa': 0.27, 
    'PLUSVISITAataque': 0.19, 'PLUSVISITAdefensa': -0.01, 'History': ['0.64;-0.54', '0.47;-0.78', '0.89;-0.64', '1.05;-0.45', '1.01;-0.29', '0.96;-0.4', '1.0;-0.52', '1.23;-0.41', '1.18;-0.35', '1.07;-0.41', 
    '0.95;-0.65', '0.82;-0.57', '0.97;-0.47', '1.28;-0.45', '1.39;-0.34']},
    
    'Netanya':{'ataque': 1.10, 'defensa': -0.59, 'PLUSLOCALataque': 0.33, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': 0.17, 'PLUSVISITAdefensa': -0.20, 'History': ['0.54;-0.64', '0.61;-0.52', '0.66;-0.61', 
    '0.62;-0.63', '0.65;-0.76', '0.61;-0.89', '0.9;-0.66', '0.84;-0.64', '0.67;-0.61', '0.97;-0.54', '0.88;-0.66', '0.95;-0.76', '0.94;-0.63', '0.98;-0.66', '1.1;-0.59']},
    
    'Hapoel Haifa':{'ataque': 0.40, 'defensa': -0.64, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.32, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': 0.28, 'History': ['0.7;-0.54', '0.67;-0.38', '0.66;-0.55', '0.59;-0.52', '0.67;-0.52', '0.54;-0.67', '0.36;-0.68', '0.4;-0.62', '0.31;-0.65', '0.29;-0.55', '0.53;-0.43', '0.47;-0.4', '0.35;-0.4', '0.4;-0.6', '0.4;-0.64']},
    
    'Ironi Tiberias':{'ataque': 0.37, 'defensa': -0.72, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': -0.27, 'History': ['0.54;-0.7', '0.78;-0.53', '0.74;-0.58', '0.75;-0.54', '0.69;-0.65', '0.54;-0.68', '0.52;-0.73', '0.53;-0.88', '0.41;-0.9', '0.36;-0.84', '0.36;-0.87', '0.61;-0.98', '0.47;-0.93', '0.34;-0.83', '0.37;-0.72']},
    
    'Kiryat Shmona':{'ataque': 0.80, 'defensa': -0.75, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.08, 'History': ['0.69;-0.72', '0.58;-0.78', '0.42;-0.98', '0.52;-1.15', '0.81;-1.13', '0.95;-1.01', '1.08;-1.05', '0.83;-1.15', '0.8;-0.99', '0.74;-0.94', '0.68;-0.76', '0.73;-0.6', '0.72;-0.7', '0.91;-0.72', '0.8;-0.75']},
    
    'H. Tel-Aviv':{'ataque': 0.67, 'defensa': -0.01, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': 0.44, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': 0.14, 'History': ['0.72;-0.69', '0.89;-0.58', '0.83;-0.66', '0.72;-0.57', '0.71;-0.65', '0.82;-0.59', '0.89;-0.48', '0.87;-0.42', '0.89;-0.3', '0.94;-0.31', '0.91;-0.33', '1.0;-0.2', '0.94;-0.12', '0.68;-0.04', '0.67;-0.01']},
    
    'Ashdod':{'ataque': 0.27, 'defensa': -0.80, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': -0.45, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.25, 'History': ['0.54;-0.72', '0.45;-0.73', '0.32;-0.93', '0.22;-0.81', '0.21;-1.1', '0.11;-0.96', '0.26;-0.97', '0.15;-1.05', '0.18;-0.96', '0.24;-0.84', '0.45;-0.96', '0.55;-1.03', '0.5;-0.89', '0.53;-0.92', '0.27;-0.8']},
    'Hapoel Jerusalem':{'ataque': 0.21, 'defensa': -0.75, 'PLUSLOCALataque': -0.37, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.34, 'History': ['0.72;-0.54', '0.57;-0.51', '0.42;-0.93', '0.43;-1.11', '0.56;-1.14', '0.59;-1.0', '0.66;-0.87', '0.69;-0.72', '0.57;-0.68', '0.57;-0.73', '0.39;-0.68', '0.2;-0.55', '0.15;-0.57', '0.17;-0.75', '0.21;-0.75']},
    

  },
  CopaLibertadores: {

    'Juventud (Uru)':{'ataque': 0.67, 'defensa': -0.51, 'PLUSLOCALataque': -0.21, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': 0.29, 'PLUSVISITAdefensa': -0.15, 'History': ['0.45;-0.57', '0.84;-0.81', '0.78;-0.69', '0.75;-0.65', '0.75;-0.56', '0.67;-0.51']},

    'U. Católica (Ecu)':{'ataque': 0.81, 'defensa': -0.84, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': -0.39, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.15, 'History': ['0.57;-0.45', '0.81;-0.84']},  
    
    '2 de Mayo (Par)':{'ataque': 0.52, 'defensa': -0.61, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.19, 'History': ['0.57;-0.45', '0.6;-0.57', '0.59;-0.53', '0.52;-0.61']},
    
    'Alianza Lima (Per)':{'ataque': 0.57, 'defensa': -0.60, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.02, 'History': ['0.45;-0.57', '0.57;-0.6']},  
    
    'The Strongest (Bol)':{'ataque': 0.55, 'defensa': -0.55, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 
    0.02, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.02, 'History': ['0.7;-0.57', '0.55;-0.55']},  
    
    'Dep. Táchira (Ven)':{'ataque': 0.52, 'defensa': -0.49, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 
    0.03, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': 0.09, 'History': ['0.57;-0.7', '0.55;-0.55', '0.53;-0.67', '0.52;-0.49']},
    
    'Tolima (Col)':{'ataque': 0.41, 'defensa': -0.57, 'PLUSLOCALataque': -0.17, 'PLUSLOCALdefensa': 0.14, 
    'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.11, 'History': ['0.72;-0.58', '0.53;-0.57', '0.5;-0.62', '0.61;-0.54', '0.52;-0.49', '0.41;-0.57']},
    
    'Guaraní (Par)':{'ataque': 0.45, 'defensa': -0.51, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.06, 'History': ['0.48;-0.54', '0.45;-0.51']},      
    
    'Barcelona SC (Ecu)':{'ataque': 0.38, 'defensa': -0.63, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': 
    -0.11, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.08, 'History': ['0.45;-0.57', '0.46;-0.43', '0.52;-0.4', '0.52;-0.28', '0.46;-0.44', '0.38;-0.63']},
    
    'Argentinos Jrs. (Arg)':{'ataque': 0.43, 'defensa': -0.46, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.15, 'History': ['0.57;-0.45', '0.43;-0.46']},
    
    'Nacional Potosí (Bol)':{'ataque': 0.54, 'defensa': -0.68, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.05, 'History': ['0.69;-0.63', '0.54;-0.68']},
    
    'Botafogo (Bra)':{'ataque': 0.53, 'defensa': -0.59, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': -0.14, 'History': ['0.63;-0.69', '0.68;-0.54', '0.65;-0.59', '0.53;-0.59']},
    
    "O'Higgins (Chi)":{'ataque': 0.51, 'defensa': -0.72, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.22, 'History': ['0.55;-0.54', '0.54;-0.65', '0.59;-0.62', '0.51;-0.72']},
    
    'Bahia (Bra)':{'ataque': 0.65, 'defensa': -0.54, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.05, 'History': ['0.54;-0.55', '0.65;-0.54']},
    
    'Sporting Cristal (Per)':{'ataque': 0.62, 'defensa': -0.46, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': 0.07, 'History': ['0.56;-0.59', '0.64;-0.51', '0.64;-0.38', '0.61;-0.51', '0.68;-0.38', '0.62;-0.46']},
    
    'Liverpool M. (Uru)':{'ataque': 0.55, 'defensa': -0.59, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': -0.08, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.08, 'History': ['0.61;-0.68', '0.55;-0.59']}, 
    
    'Ind. Medellín (Col)':{'ataque': 0.35, 'defensa': -0.66, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.25, 'History': ['0.68;-0.61', '0.59;-0.55', 
    '0.5;-0.55', '0.45;-0.48', '0.42;-0.41', '0.35;-0.66']},
    
    'Carabobo (Ven)':{'ataque': 0.64, 'defensa': -0.48, 'PLUSLOCALataque': -0.21, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.25, 'PLUSVISITAdefensa': 0.03, 'History': ['0.53;-0.52', '0.64;-0.52', '0.51;-0.51', '0.64;-0.48']},
    
    'Huachipato (Chi)':{'ataque': 0.52, 'defensa': -0.64, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.07, 'History': ['0.52;-0.53', '0.52;-0.64']},  
    
    'Ind. Santa Fe (Col)':{'ataque': 0.47, 'defensa': -0.60, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.00, 'History': ['0.56;-0.6', '0.47;-0.6']}, 
    
    'Peñarol (Uru)':{'ataque': 0.57, 'defensa': -0.68, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.03, 'History': ['0.6;-0.56', '0.57;-0.68']},       
    
    'Platense (Arg)':{'ataque': 0.59, 'defensa': -0.58, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.12, 'PLUSVISITAdefensa': 0.03, 'History': ['0.47;-0.6', '0.59;-0.58']},      
    
    'Corinthians (Bra)':{'ataque': 0.61, 'defensa': -0.38, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.12, 'History': ['0.6;-0.47', '0.61;-0.38']},     
    
    'Rosario Central (Arg)':{'ataque': 0.57, 'defensa': -0.52, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.11, 'History': ['0.62;-0.62', '0.57;-0.52']},
    
    'Ind. del Valle (Ecu)':{'ataque': 0.82, 'defensa': -0.63, 'PLUSLOCALataque': 0.19, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.02, 'History': ['0.62;-0.62', '0.82;-0.63']},
    
    'Universidad Central (Ven)':{'ataque': 0.84, 'defensa': -0.77, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.19, 'History': ['0.82;-0.57', '0.84;-0.77']},
    
    'Libertad (Par)':{'ataque': 0.47, 'defensa': -0.78, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.23, 'History': ['0.57;-0.82', '0.47;-0.78']},    
    
    'Cerro Porteño (Par)':{'ataque': 0.48, 'defensa': -0.64, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 
    0.03, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.07, 'History': ['0.46;-0.67', '0.48;-0.64']},
    'Cusco (Per)':{'ataque': 0.45, 'defensa': -0.64, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.05, 'History': ['0.5;-0.59', '0.45;-0.64']},        
    
    'Flamengo (Bra)':{'ataque': 0.83, 'defensa': -0.42, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': 0.10, 'History': ['0.59;-0.5', '0.83;-0.42']},       
    
    'Junior (Col)':{'ataque': 0.47, 'defensa': -0.70, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.02, 'History': ['0.49;-0.69', '0.47;-0.7']},      
    
    'Palmeiras (Bra)':{'ataque': 0.77, 'defensa': -0.44, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.09, 'PLUSVISITAdefensa': 0.11, 'History': ['0.69;-0.49', '0.77;-0.44']},      
    
    'Estudiantes L.P. (Arg)':{'ataque': 0.59, 'defensa': -0.52, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.03, 'History': ['0.54;-0.57', '0.59;-0.52']},
    
    'Coquimbo (Chi)':{'ataque': 0.74, 'defensa': -0.41, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': 0.09, 'PLUSVISITAdefensa': 0.09, 'History': ['0.65;-0.51', '0.74;-0.41']},       
    
    'Nacional (Uru)':{'ataque': 0.59, 'defensa': -0.54, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.05, 'History': ['0.51;-0.65', '0.59;-0.54']},     
    
    'Mirassol (Bra)':{'ataque': 0.44, 'defensa': -0.44, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.06, 'History': ['0.51;-0.49', '0.44;-0.44']},     
    
    'Lanús (Arg)':{'ataque': 0.65, 'defensa': -0.44, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.10, 'History': ['0.49;-0.51', '0.65;-0.44']},
    
    'Universitario (Per)':{'ataque': 0.45, 'defensa': -0.60, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.09, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.09, 'History': ['0.55;-0.51', '0.45;-0.6']},
    'U. Católica (Chi)':{'ataque': 0.66, 'defensa': -0.53, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.04, 'History': ['0.55;-0.57', '0.66;-0.53']},   
    
    'Boca Jrs. (Arg)':{'ataque': 0.75, 'defensa': -0.47, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': 0.05, 'History': ['0.57;-0.55', '0.75;-0.47']},     
    
    'Always Ready (Bol)':{'ataque': 0.47, 'defensa': -0.82, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 
    -0.06, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.16, 'History': ['0.54;-0.66', '0.47;-0.82']},
    
    'LDU Quito (Ecu)':{'ataque': 0.60, 'defensa': -0.48, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': 0.06, 'History': ['0.66;-0.54', '0.6;-0.48']},      
    
    'Cruzeiro (Bra)':{'ataque': 0.72, 'defensa': -0.65, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': 0.06, 'History': ['0.76;-0.54', '0.72;-0.65']},     
    
    'Independiente Rivadavia (Arg)':{'ataque': 0.73, 'defensa': -0.53, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.02, 'History': ['0.62;-0.54', '0.73;-0.53']},
    
    'Bolívar (Bol)':{'ataque': 0.65, 'defensa': -0.51, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.11, 
    'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.02, 'History': ['0.54;-0.62', '0.65;-0.51']},      
    
    'La Guaira (Ven)':{'ataque': 0.36, 'defensa': -0.71, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': -0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.10, 'History': ['0.47;-0.6', '0.36;-0.71']},   
    
    'Fluminense (Bra)':{'ataque': 0.59, 'defensa': -0.58, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.11, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.13, 'History': ['0.6;-0.47', '0.59;-0.58']},    
    

  },
  CopaSudamericana: {

    'Orense (Ecu)':{'ataque': 0.45, 'defensa': -0.57, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 0.02, 
    'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.57']},
    
    'Macará (Ecu)':{'ataque': 0.54, 'defensa': -0.27, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.07, 
    'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.27, 'History': ['0.57;-0.45', '0.56;-0.38', '0.54;-0.27']},
    
    'América de Cali (Col)':{'ataque': 0.64, 'defensa': -0.43, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.02, 'History': ['0.63;-0.48', '0.56;-0.47', 
    '0.64;-0.43']},
    
    'Atl. Bucaramanga (Col)':{'ataque': 0.48, 'defensa': -0.63, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.03, 'History': ['0.48;-0.63']},
    
    'Cienciano (Per)':{'ataque': 0.75, 'defensa': -0.49, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.08, 'History': ['0.63;-0.5', '0.55;-0.58', '0.75;-0.49']},
    
    'Melgar (Per)':{'ataque': 0.50, 'defensa': -0.63, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.03, 'History': ['0.5;-0.63']},
    
    'Boston River (Uru)':{'ataque': 0.37, 'defensa': -0.48, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 
    0.09, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.02, 'History': ['0.54;-0.53', '0.45;-0.51', '0.37;-0.48']},
    
    'Racing Montevideo (Uru)':{'ataque': 0.53, 'defensa': -0.54, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.06, 'History': ['0.53;-0.54']},
    
    'Nacional Asunción (Par)':{'ataque': 0.58, 'defensa': -0.47, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.58;-0.47']},
    
    'Recoleta (Par)':{'ataque': 0.44, 'defensa': -0.84, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.20, 'History': ['0.47;-0.58', '0.45;-0.62', '0.44;-0.84']},
    
    'Dep. Cuenca (Ecu)':{'ataque': 0.46, 'defensa': -0.53, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.12, 'History': ['0.65;-0.55', '0.61;-0.41', '0.46;-0.53']},
    
    'Libertad (Ecu)':{'ataque': 0.55, 'defensa': -0.65, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.05, 'History': ['0.55;-0.65']},
    
    'Atl. Nacional (Col)':{'ataque': 0.57, 'defensa': -0.82, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.23, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.82']},
    
    'Millonarios (Col)':{'ataque': 0.65, 'defensa': -0.52, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': 0.01, 'History': ['0.82;-0.57', '0.67;-0.59', '0.65;-0.52']},
    
    'Sportivo Trinidense (Par)':{'ataque': 0.45, 'defensa': -0.57, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.45;-0.57']},
    
    'Olimpia (Par)':{'ataque': 0.57, 'defensa': -0.29, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': 0.26, 'History': ['0.57;-0.45', '0.67;-0.34', '0.57;-0.29']},
    
    'U. De Chile (Chi)':{'ataque': 0.57, 'defensa': -0.58, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.57;-0.58']},
    
    'Palestino (Chi)':{'ataque': 0.41, 'defensa': -0.62, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.11, 'History': ['0.58;-0.57', '0.52;-0.49', '0.41;-0.62']},
    
    'Blooming (Bol)':{'ataque': 0.79, 'defensa': -0.73, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': 0.18, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.32, 'History': ['0.77;-0.49', '0.73;-0.41', '0.79;-0.73']},
    
    'SA Bulo Bulo (Bol)':{'ataque': 0.49, 'defensa': -0.77, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.17, 'History': ['0.49;-0.77']},
    
    'Caracas (Ven)':{'ataque': 0.38, 'defensa': -0.36, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.04, 'History': ['0.51;-0.52', '0.4;-0.48', '0.38;-0.36']},
    
    'Metropolitanos (Ven)':{'ataque': 0.52, 'defensa': -0.51, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.09, 'History': ['0.52;-0.51']},
    
    'Alianza Atl. (Per)':{'ataque': 0.68, 'defensa': -0.64, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.08, 'History': ['0.68;-0.47', '0.72;-0.56', '0.68;-0.64']},
    
    'Deportivo Garcilaso (Per)':{'ataque': 0.47, 'defensa': -0.68, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.08, 'History': ['0.47;-0.68']},        
    
    'Cobresal (Chi)':{'ataque': 0.70, 'defensa': -0.54, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.00, 'History': ['0.7;-0.54']},
    
    'Audax (Chi)':{'ataque': 0.51, 'defensa': -0.75, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.09, 
    'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.06, 'History': ['0.54;-0.7', '0.44;-0.79', '0.51;-0.75']},
    
    'Puerto Cabello (Ven)':{'ataque': 0.58, 'defensa': -0.68, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.20, 'History': ['0.6;-0.47', '0.66;-0.48', '0.58;-0.68']},
    
    'Monagas (Ven)':{'ataque': 0.47, 'defensa': -0.60, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 
    'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.00, 'History': ['0.47;-0.6']},
    
    'Independiente (Bol)':{'ataque': 0.43, 'defensa': -0.85, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': -0.27, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.02, 'History': ['0.57;-0.66', '0.55;-0.87', 
    '0.43;-0.85']},
    
    'Guabirá (Bol)':{'ataque': 0.66, 'defensa': -0.57, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 
    'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': 0.03, 'History': ['0.66;-0.57']},
    
    'Montevideo City (Uru)':{'ataque': 0.63, 'defensa': -0.26, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.23, 'PLUSVISITAataque': 0.13, 'PLUSVISITAdefensa': 0.11, 'History': ['0.5;-0.49', '0.5;-0.37', '0.63;-0.26']},
    
    'Defensor Sp. (Uru)':{'ataque': 0.49, 'defensa': -0.50, 'PLUSLOCALataque': 0.00, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.10, 'History': ['0.49;-0.5']},
    
    'Carabobo (Ven)':{'ataque': 0.45, 'defensa': -0.56, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.11, 'History': ['0.57;-0.45', '0.45;-0.56']},    
    
    'Bragantino (Bra)':{'ataque': 0.77, 'defensa': -0.64, 'PLUSLOCALataque': 0.32, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.02, 'History': ['0.45;-0.57', '0.77;-0.64']},   
    
    'Botafogo (Bra)':{'ataque': 0.79, 'defensa': -0.57, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.23, 'PLUSVISITAdefensa': -0.09, 'History': ['0.56;-0.49', '0.79;-0.57']},     
    
    'Juventud (Uru)':{'ataque': 0.64, 'defensa': -0.63, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.11, 'History': ['0.68;-0.53', '0.64;-0.63']},     
    
    'Atlético-MG (Bra)':{'ataque': 0.72, 'defensa': -0.62, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.07, 'History': ['0.61;-0.67', '0.72;-0.62']},   
    
    'River Plate (Arg)':{'ataque': 0.63, 'defensa': -0.44, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.04, 'History': ['0.53;-0.56', '0.63;-0.44']},   
    
    'Grêmio (Bra)':{'ataque': 0.44, 'defensa': -0.47, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.13, 
    'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.00, 'History': ['0.48;-0.6', '0.44;-0.47']},        
    
    'Santos (Bra)':{'ataque': 0.68, 'defensa': -0.55, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': 0.04, 'History': ['0.46;-0.56', '0.68;-0.55']},        
    
    'Deportivo Riestra (Arg)':{'ataque': 0.39, 'defensa': -0.50, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.03, 'History': ['0.52;-0.54', '0.39;-0.5']},
    
    'San Lorenzo (Arg)':{'ataque': 0.75, 'defensa': -0.43, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': 0.02, 'History': ['0.64;-0.58', '0.75;-0.43']},    
    
    'Tigre (Arg)':{'ataque': 0.57, 'defensa': -0.61, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.09, 'PLUSVISITAdefensa': -0.04, 'History': ['0.69;-0.64', '0.57;-0.61']},        
    
    'Sao Paulo (Bra)':{'ataque': 0.70, 'defensa': -0.37, 'PLUSLOCALataque': 0.12, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.09, 'History': ['0.58;-0.51', '0.7;-0.37']},      
    
    "O'Higgins (Chi)":{'ataque': 0.48, 'defensa': -0.57, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.12, 'History': ['0.62;-0.45', '0.48;-0.57']},    
    
    'Barracas Central (Arg)':{'ataque': 0.45, 'defensa': -0.48, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.09, 'History': ['0.5;-0.57', '0.45;-0.48']},
    
    'Vasco (Bra)':{'ataque': 0.53, 'defensa': -0.57, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': -0.07, 
    'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': 0.10, 'History': ['0.57;-0.5', '0.53;-0.57']},        
    
    'Racing Club (Arg)':{'ataque': 0.90, 'defensa': -0.82, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': -0.23, 'PLUSVISITAataque': 0.21, 'PLUSVISITAdefensa': 0.02, 'History': ['0.81;-0.58', '0.9;-0.82']},

  },
  LigaProfesional: {

    'Argentinos Jrs.':{'ataque': 0.79, 'defensa': -0.42, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': 
    -0.10, 'PLUSVISITAdefensa': 0.03, 'History': ['0.67;-0.47', '0.61;-0.4', '0.73;-0.37', '0.67;-0.47', '0.63;-0.34', '0.64;-0.38', '0.6;-0.42', '0.67;-0.4', '0.61;-0.31', '0.84;-0.36', '0.95;-0.32', '1.07;-0.51', '0.92;-0.5', '0.79;-0.42']},
    
    'Sarmiento':{'ataque': 0.26, 'defensa': -0.75, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': -0.31, 'PLUSVISITAdefensa': -0.20, 'History': ['0.47;-0.67', '0.56;-0.58', '0.64;-0.68', '0.73;-0.63', '0.59;-0.57', '0.52;-0.51', '0.49;-0.74', '0.4;-0.62', '0.34;-0.52', '0.29;-0.75', '0.32;-0.72', '0.36;-0.67', '0.31;-0.78', '0.26;-0.75']},
    
    'Tigre':{'ataque': 0.47, 'defensa': -0.35, 'PLUSLOCALataque': -0.00, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.14, 'History': ['0.55;-0.49', '0.46;-0.41', '0.5;-0.43', '0.6;-0.36', '0.61;-0.35', '0.58;-0.36', '0.52;-0.42', '0.6;-0.42', '0.64;-0.46', '0.63;-0.53', '0.49;-0.52', '0.36;-0.58', '0.46;-0.52', '0.47;-0.35']},
    
    'Estudiantes Rio Cuarto':{'ataque': 0.29, 'defensa': -0.99, 'PLUSLOCALataque': -0.02, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': -0.35, 'History': ['0.49;-0.55', '0.42;-0.49', '0.42;-0.63', '0.3;-0.57', '0.25;-0.71', '0.17;-0.8', '0.4;-0.74', '0.28;-0.65', '0.24;-0.7', '0.23;-0.89', '0.17;-0.92', '0.3;-0.85', '0.32;-0.99', '0.29;-0.99']},
    'Boca Jrs.':{'ataque': 0.70, 'defensa': -0.22, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.01, 
    'PLUSVISITAdefensa': 0.30, 'History': ['0.56;-0.47', '0.55;-0.62', '0.5;-0.55', '0.41;-0.56', '0.44;-0.53', '0.34;-0.47', '0.43;-0.47', '0.44;-0.38', '0.43;-0.42', '0.5;-0.29', '0.64;-0.37', '0.67;-0.27', '0.7;-0.36', '0.7;-0.22']},
    
    'Deportivo Riestra':{'ataque': 0.22, 'defensa': -0.66, 'PLUSLOCALataque': -0.07, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.30, 'PLUSVISITAdefensa': -0.03, 'History': ['0.47;-0.56', '0.36;-0.56', '0.44;-0.48', '0.33;-0.45', '0.44;-0.37', '0.41;-0.3', '0.44;-0.25', '0.49;-0.28', '0.45;-0.27', '0.34;-0.38', '0.33;-0.42', '0.31;-0.49', '0.28;-0.61', '0.22;-0.66']}, 
    
    'Rosario Central':{'ataque': 0.73, 'defensa': -0.49, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 
    -0.03, 'PLUSVISITAdefensa': 0.09, 'History': ['0.57;-0.7', '0.67;-0.67', '0.67;-0.64', '0.66;-0.64', '0.89;-0.52', '0.75;-0.44', '0.83;-0.44', '0.79;-0.31', '0.83;-0.27', '0.86;-0.35', '0.74;-0.31', '0.83;-0.39', '0.76;-0.54', '0.73;-0.49']},      
    
    'Belgrano':{'ataque': 0.45, 'defensa': -0.49, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.05, 'History': ['0.7;-0.57', '0.63;-0.48', '0.59;-0.6', '0.58;-0.53', '0.61;-0.52', '0.62;-0.42', '0.65;-0.39', '0.53;-0.52', '0.58;-0.48', '0.54;-0.44', '0.58;-0.56', '0.55;-0.57', '0.51;-0.53', '0.45;-0.49']},
    
    'Gimnasia L.P.':{'ataque': 0.50, 'defensa': -0.98, 'PLUSLOCALataque': 0.03, 'PLUSLOCALdefensa': -0.45, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': 0.07, 'History': ['0.7;-0.57', '0.6;-0.63', '0.64;-0.64', '0.53;-0.64', '0.47;-0.66', '0.5;-0.54', '0.51;-0.62', '0.51;-0.7', '0.56;-0.72', '0.7;-0.92', '0.58;-0.87', '0.39;-1.05', '0.51;-1.0', '0.5;-0.98']},
    
    'Racing Club':{'ataque': 0.70, 'defensa': -0.54, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.12, 'History': ['0.57;-0.7', '0.54;-0.79', '0.55;-0.83', '0.65;-0.78', '0.62;-0.69', '0.56;-0.58', '0.48;-0.49', '0.54;-0.44', '0.44;-0.37', '0.64;-0.36', '0.76;-0.4', '0.65;-0.35', '0.62;-0.49', '0.7;-0.54']},
    
    'Barracas Central':{'ataque': 0.33, 'defensa': -0.56, 'PLUSLOCALataque': -0.27, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': -0.03, 'History': ['0.51;-0.71', '0.45;-0.63', '0.36;-0.71', '0.36;-0.6', '0.24;-0.83', '0.19;-0.8', '0.24;-0.73', '0.28;-0.74', '0.29;-0.69', '0.24;-0.61', '0.28;-0.56', '0.23;-0.61', '0.38;-0.62', '0.33;-0.56']},     
    
    'River Plate':{'ataque': 1.02, 'defensa': -0.24, 'PLUSLOCALataque': 0.20, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': 0.24, 'History': ['0.71;-0.51', '0.77;-0.41', '0.74;-0.42', '0.67;-0.52', '0.54;-0.48', '0.45;-0.46', '0.56;-0.41', '0.52;-0.4', '0.76;-0.4', '0.98;-0.35', '1.01;-0.3', '1.02;-0.27', '1.16;-0.24', '1.02;-0.24']},
    
    'Independiente Rivadavia':{'ataque': 0.82, 'defensa': -0.25, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.25, 'PLUSVISITAataque': 0.21, 'PLUSVISITAdefensa': 0.10, 'History': ['0.55;-0.51', '0.67;-0.5', '0.76;-0.58', '0.71;-0.46', '0.7;-0.49', '0.79;-0.52', '0.7;-0.44', '0.68;-0.4', '0.63;-0.41', '0.83;-0.55', '0.79;-0.44', '0.85;-0.31', '0.84;-0.17', '0.82;-0.25']},  
    
    'Atl. Tucumán':{'ataque': 0.29, 'defensa': -0.46, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.14, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': 0.01, 'History': ['0.51;-0.55', '0.55;-0.46', '0.5;-0.5', '0.45;-0.59', '0.59;-0.53', '0.56;-0.55', '0.53;-0.57', '0.48;-0.64', '0.47;-0.57', '0.4;-0.52', '0.34;-0.4', '0.43;-0.49', '0.37;-0.59', '0.29;-0.46']},
    
    'Talleres':{'ataque': 0.87, 'defensa': -0.43, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.05, 'PLUSVISITAdefensa': 0.05, 'History': ['0.71;-0.56', '0.69;-0.67', '0.64;-0.77', '0.58;-0.72', '0.7;-0.72', '0.62;-0.57', '0.58;-0.54', '0.58;-0.51', '0.67;-0.39', '0.63;-0.35', '0.78;-0.44', '0.67;-0.48', '0.82;-0.49', '0.87;-0.43']},
    
    "Newell's":{'ataque': 0.67, 'defensa': -0.72, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.12, 
    'PLUSVISITAdefensa': -0.16, 'History': ['0.56;-0.71', '0.49;-0.57', '0.43;-0.52', '0.62;-0.8', '0.53;-0.91', '0.49;-0.95', '0.51;-1.07', '0.38;-1.03', '0.37;-1.05', '0.32;-1.11', '0.32;-0.99', '0.43;-0.89', '0.38;-0.73', '0.67;-0.72']},
    
    'Independiente':{'ataque': 0.62, 'defensa': -0.44, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.05, 'History': ['0.57;-0.62', '0.43;-0.55', '0.43;-0.58', '0.5;-0.43', '0.58;-0.28', '0.61;-0.37', '0.55;-0.36', '0.63;-0.33', '0.64;-0.32', '0.56;-0.48', '0.65;-0.63', '0.6;-0.52', '0.69;-0.55', '0.62;-0.44']},        
    
    'Estudiantes L.P.':{'ataque': 0.87, 'defensa': -0.20, 'PLUSLOCALataque': 0.24, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.17, 'History': ['0.62;-0.57', '0.77;-0.56', '0.68;-0.52', '0.66;-0.41', '0.68;-0.35', '0.62;-0.27', '0.74;-0.29', '0.71;-0.29', '0.63;-0.32', '0.74;-0.42', '1.0;-0.39', '0.88;-0.39', '0.9;-0.36', '0.87;-0.2']},        
    
    'San Lorenzo':{'ataque': 0.34, 'defensa': -0.40, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.25, 'PLUSVISITAdefensa': 0.09, 'History': ['0.54;-0.68', '0.55;-0.61', '0.58;-0.52', '0.43;-0.4', '0.43;-0.57', '0.51;-0.49', '0.41;-0.55', '0.38;-0.55', '0.42;-0.54', '0.46;-0.65', '0.5;-0.64', '0.49;-0.52', '0.34;-0.47', '0.34;-0.4']},
    
    'Lanús':{'ataque': 0.45, 'defensa': -0.41, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.31, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.12, 'History': ['0.68;-0.54', '0.74;-0.56', '0.8;-0.52', '0.75;-0.46', '0.6;-0.54', '0.58;-0.54', '0.49;-0.55', '0.53;-0.47', '0.59;-0.42', '0.64;-0.33', '0.68;-0.55', '0.65;-0.46', '0.57;-0.33', '0.45;-0.41']},
    
    'Central Córdoba':{'ataque': 0.61, 'defensa': -1.09, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': -0.25, 'PLUSVISITAdefensa': -0.38, 'History': ['0.45;-0.57', '0.36;-0.61', '0.27;-0.64', '0.26;-0.57', '0.2;-0.66', '0.21;-0.64', '0.17;-0.6', '0.15;-0.68', '0.22;-0.69', '0.33;-0.59', '0.3;-0.85', '0.19;-0.97', '0.16;-0.82', '0.61;-1.09']},      
    
    'Gimnasia Mendoza':{'ataque': 0.40, 'defensa': -0.63, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': -0.13, 'History': ['0.57;-0.45', '0.5;-0.46', '0.39;-0.57', '0.37;-0.45', '0.37;-0.57', '0.24;-0.6', '0.23;-0.55', '0.23;-0.64', '0.23;-0.59', '0.32;-0.7', '0.21;-0.7', '0.32;-0.75', '0.32;-0.75', '0.4;-0.63']},        
    
    'Instituto':{'ataque': 0.61, 'defensa': -0.51, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.17, 'History': ['0.45;-0.57', '0.44;-0.68', '0.4;-0.74', '0.28;-0.72', '0.37;-0.66', '0.4;-0.64', '0.45;-0.53', '0.47;-0.57', '0.36;-0.65', '0.52;-0.58', '0.6;-0.71', '0.64;-0.57', '0.77;-0.54', '0.61;-0.51']},
    
    'Vélez Sarsfield':{'ataque': 0.51, 'defensa': -0.34, 'PLUSLOCALataque': -0.19, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': 0.13, 'History': ['0.57;-0.45', '0.68;-0.43', '0.71;-0.43', '0.73;-0.34', '0.68;-0.29', '0.66;-0.2', '0.61;-0.24', '0.61;-0.21', '0.65;-0.26', '0.77;-0.2', '0.67;-0.25', '0.73;-0.37', '0.58;-0.34', '0.51;-0.34']},       
    
    'Banfield':{'ataque': 0.67, 'defensa': -0.60, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': -0.08, 
    'PLUSVISITAdefensa': -0.26, 'History': ['0.56;-0.61', '0.47;-0.71', '0.61;-0.7', '0.53;-0.69', '0.44;-0.66', '0.48;-0.62', '0.44;-0.73', '0.44;-0.64', '0.47;-0.69', '0.54;-0.72', '0.53;-0.57', '0.72;-0.69', '0.59;-0.61', '0.67;-0.6']},
    
    'Huracán':{'ataque': 0.60, 'defensa': -0.40, 'PLUSLOCALataque': 0.04, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': 0.12, 'History': ['0.61;-0.56', '0.6;-0.67', '0.64;-0.62', '0.52;-0.47', '0.47;-0.34', '0.41;-0.31', '0.35;-0.55', '0.48;-0.43', '0.48;-0.66', '0.49;-0.61', '0.44;-0.65', '0.62;-0.46', '0.77;-0.39', '0.6;-0.4']},
    
    'Unión Santa Fe':{'ataque': 0.90, 'defensa': -0.91, 'PLUSLOCALataque': 0.24, 'PLUSLOCALdefensa': -0.16, 'PLUSVISITAataque': 
    0.06, 'PLUSVISITAdefensa': -0.15, 'History': ['0.61;-0.54', '0.63;-0.6', '0.74;-0.49', '0.67;-0.48', '0.83;-0.48', '0.85;-0.46', '1.08;-0.43', '1.12;-0.46', '1.1;-0.46', '0.97;-0.54', '0.87;-0.62', '0.93;-0.61', '0.91;-0.63', '0.9;-0.91']},        
    
    'Platense':{'ataque': 0.55, 'defensa': -0.99, 'PLUSLOCALataque': -0.21, 'PLUSLOCALdefensa': -0.00, 'PLUSVISITAataque': 0.15, 'PLUSVISITAdefensa': -0.38, 'History': ['0.54;-0.61', '0.65;-0.6', '0.75;-0.55', '0.6;-0.63', '0.56;-0.66', '0.53;-0.6', '0.45;-0.48', '0.48;-0.53', '0.51;-0.52', '0.46;-0.64', '0.37;-0.58', '0.27;-0.55', '0.27;-0.54', '0.55;-0.99']},
    
    'Aldosivi':{'ataque': 0.08, 'defensa': -0.80, 'PLUSLOCALataque': -0.28, 'PLUSLOCALdefensa': -0.17, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': -0.04, 'History': ['0.51;-0.51', '0.43;-0.45', '0.44;-0.49', '0.44;-0.47', '0.43;-0.48', '0.41;-0.5', '0.32;-0.51', '0.25;-0.49', '0.2;-0.51', '0.17;-0.53', '0.13;-0.63', '0.06;-0.76', '0.02;-0.72', '0.08;-0.8']},
    
    'Defensa y Justicia':{'ataque': 0.47, 'defensa': -0.51, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.07, 'History': ['0.51;-0.51', '0.51;-0.4', '0.48;-0.31', '0.76;-0.51', '0.7;-0.46', '0.6;-0.47', '0.48;-0.4', '0.48;-0.38', '0.49;-0.45', '0.6;-0.5', '0.69;-0.39', '0.55;-0.43', '0.57;-0.58', '0.47;-0.51']}, 

  },
  SerieABetano:
  {

    'Botafogo':{'ataque': 0.73, 'defensa': -0.69, 'PLUSLOCALataque': 0.25, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.08, 'History': ['0.63;-0.63', '0.6;-0.8', '0.49;-0.76', '0.36;-0.99', '0.44;-0.98', '0.54;-0.87', '0.56;-1.19', '0.69;-1.13', '0.67;-1.09', '0.86;-1.04', '0.7;-0.84', '0.73;-0.69']},

    'Cruzeiro':{'ataque': 0.74, 'defensa': -0.54, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.43, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.37, 'History': ['0.63;-0.63', '0.56;-0.78', '0.52;-0.92', '0.53;-0.74', '0.47;-0.73', '0.5;-0.74', '0.51;-0.85', '0.47;-0.68', '0.61;-0.58', '0.68;-0.9', '0.76;-0.76', '0.79;-0.75', '0.74;-0.54']},
    
    'Mirassol':{'ataque': 0.41, 'defensa': -0.65, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': 0.02, 'History': ['0.54;-0.53', '0.58;-0.57', '0.72;-0.54', '0.67;-0.5', '0.53;-0.42', '0.4;-0.45', '0.33;-0.42', '0.26;-0.55', '0.24;-0.62', '0.31;-0.74', '0.47;-0.79', '0.41;-0.65']},
    
    'Vasco':{'ataque': 0.75, 'defensa': -0.59, 'PLUSLOCALataque': 0.44, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': -0.12, 'History': ['0.53;-0.54', '0.97;-0.39', '0.72;-0.38', '0.68;-0.52', '0.7;-0.41', '0.71;-0.44', '0.92;-0.56', '0.93;-0.6', '0.83;-0.71', '0.79;-0.69', '0.81;-0.59', '0.86;-0.58', '0.75;-0.59']},
    
    'Sao Paulo':{'ataque': 0.65, 'defensa': -0.35, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': 0.36, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.11, 'History': ['0.7;-0.57', '0.57;-0.55', '0.77;-0.41', '0.69;-0.3', '0.62;-0.19', '0.76;-0.23', '0.66;-0.3', '0.5;-0.2', '0.52;-0.23', '0.84;-0.3', '0.79;-0.37', '0.78;-0.41', '0.65;-0.35']},
    
    'Flamengo':{'ataque': 1.15, 'defensa': -0.36, 'PLUSLOCALataque': 0.34, 'PLUSLOCALdefensa': 0.19, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': 0.05, 'History': ['0.57;-0.7', '0.55;-0.65', '0.46;-0.54', '0.45;-0.48', '0.68;-0.36', '0.83;-0.26', '0.81;-0.33', '0.6;-0.44', '0.77;-0.51', '1.0;-0.44', '1.05;-0.39', '1.15;-0.36']},
    
    'Chapecoense':{'ataque': 0.24, 'defensa': -0.96, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': -0.03, 
    'PLUSVISITAataque': -0.33, 'PLUSVISITAdefensa': -0.33, 'History': ['0.95;-0.7', '0.8;-1.15', '0.87;-1.14', '0.77;-1.07', '0.52;-0.94', '0.51;-0.97', '0.45;-1.14', '0.33;-1.5', '0.47;-1.33', '0.4;-1.21', '0.2;-1.06', '0.24;-0.96']},
    
    'Santos':{'ataque': 0.60, 'defensa': -0.83, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.31, 'History': ['0.7;-0.95', '0.68;-0.82', '0.64;-0.79', '0.78;-0.75', '0.74;-0.7', '0.73;-0.67', '0.61;-0.77', '0.44;-0.73', '0.38;-0.64', '0.45;-0.82', '0.55;-0.75', '0.62;-0.93', '0.6;-0.83']},
    
    'Corinthians':{'ataque': 0.32, 'defensa': -0.26, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.27, 'PLUSVISITAataque': -0.22, 'PLUSVISITAdefensa': 0.08, 'History': ['0.57;-0.7', '0.59;-0.54', '0.59;-0.4', '0.41;-0.41', '0.36;-0.35', '0.33;-0.34', '0.35;-0.33', '0.43;-0.31', '0.42;-0.43', '0.33;-0.47', '0.34;-0.42', '0.31;-0.37', '0.32;-0.26']},
    
    'Bahia':{'ataque': 0.54, 'defensa': -0.60, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': 0.04, 'History': ['0.7;-0.57', '0.68;-0.64', '0.68;-0.38', '0.64;-0.31', '0.56;-0.29', '0.64;-0.36', '0.53;-0.5', '0.53;-0.4', '0.57;-0.5', '0.69;-0.57', '0.64;-0.63', '0.54;-0.6']},
    
    'Fluminense':{'ataque': 1.01, 'defensa': -0.86, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': 0.31, 'PLUSVISITAdefensa': -0.20, 'History': ['0.74;-0.65', '0.81;-0.64', '0.76;-0.52', '0.72;-0.57', '0.7;-0.48', '0.84;-0.44', '0.96;-0.65', '0.87;-0.57', '0.99;-0.56', '0.99;-0.53', '0.92;-0.75', '1.1;-0.82', '1.01;-0.86']},
    
    'Grêmio':{'ataque': 0.42, 'defensa': -0.59, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.14, 'History': ['0.65;-0.74', '0.82;-0.71', '0.68;-0.91', '0.6;-0.79', '0.66;-0.84', '0.54;-0.59', '0.49;-0.5', '0.53;-0.51', '0.59;-0.58', '0.45;-0.65', '0.41;-0.59', '0.4;-0.62', '0.42;-0.59']},
    
    'Atlético-MG':{'ataque': 0.64, 'defensa': -0.54, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.05, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': 0.01, 'History': ['0.52;-0.58', '0.45;-0.58', '0.6;-0.73', '0.48;-0.65', '0.45;-0.51', '0.35;-0.62', '0.42;-0.52', '0.34;-0.43', '0.7;-0.31', '0.71;-0.26', '0.64;-0.36', '0.67;-0.44', '0.64;-0.54']},
    
    'Palmeiras':{'ataque': 0.74, 'defensa': -0.19, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': 0.00, 'PLUSVISITAdefensa': 0.24, 'History': ['0.58;-0.52', '0.73;-0.46', '0.95;-0.51', '1.0;-0.47', '0.89;-0.5', '0.81;-0.36', '0.81;-0.44', '0.71;-0.28', '0.78;-0.35', '0.89;-0.38', '0.84;-0.38', '0.79;-0.29', '0.74;-0.19']},
    
    'Coritiba':{'ataque': 0.38, 'defensa': -0.61, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.08, 'History': ['0.49;-0.8', '0.64;-0.73', '0.64;-0.8', '0.52;-0.72', '0.47;-0.66', '0.37;-0.55', '0.41;-0.42', '0.29;-0.47', '0.41;-0.37', '0.38;-0.37', '0.33;-0.56', '0.41;-0.59', '0.38;-0.61']},
    
    'Bragantino':{'ataque': 0.57, 'defensa': -0.58, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': -0.11, 'History': ['0.8;-0.49', '0.8;-0.42', '0.64;-0.43', '0.6;-0.47', '0.65;-0.53', '0.69;-0.67', '0.77;-0.75', '0.66;-0.84', '0.77;-0.63', '0.84;-0.61', '0.69;-0.69', '0.67;-0.63', '0.57;-0.58']},
    
    'Internacional':{'ataque': 0.41, 'defensa': -0.53, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': 0.26, 'History': ['0.45;-0.57', '0.4;-0.55', '0.45;-0.77', '0.41;-0.75', '0.27;-0.72', '0.25;-0.64', '0.34;-0.51', '0.51;-0.46', '0.53;-0.47', '0.57;-0.38', '0.51;-0.34', '0.55;-0.5', '0.41;-0.53']},
    
    'Athletico-PR':{'ataque': 0.67, 'defensa': -0.42, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': 0.08, 'History': ['0.57;-0.45', '0.55;-0.42', '0.41;-0.42', '0.45;-0.39', '0.4;-0.53', '0.51;-0.53', '0.56;-0.42', '0.88;-0.44', '0.78;-0.44', '0.72;-0.45', 
    '0.61;-0.39', '0.52;-0.34', '0.67;-0.42']},
    
    'Vitória':{'ataque': 0.41, 'defensa': -0.73, 'PLUSLOCALataque': 0.21, 'PLUSLOCALdefensa': 0.36, 'PLUSVISITAataque': -0.40, 'PLUSVISITAdefensa': -0.49, 'History': ['0.84;-0.58', '0.79;-0.73', '0.67;-0.64', '0.6;-0.6', '0.7;-0.51', '0.62;-0.46', '0.59;-0.39', '0.49;-0.53', '0.32;-0.66', '0.39;-0.61', '0.34;-0.58', '0.41;-0.73']},
    
    'Remo':{'ataque': 0.18, 'defensa': -0.67, 'PLUSLOCALataque': -0.24, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': -0.23, 'History': ['0.58;-0.84', '0.62;-0.89', '0.78;-1.04', '0.75;-1.0', '0.67;-0.98', '0.56;-0.89', '0.45;-1.04', '0.59;-0.92', '0.5;-0.86', '0.57;-0.73', '0.47;-0.74', '0.4;-0.73', '0.18;-0.67']},

  },
  LigaMX: {

    'Querétaro':{'ataque': 0.65, 'defensa': -0.56, 'PLUSLOCALataque': 0.29, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': 0.04, 'History': []},

    'Pachuca':{'ataque': 0.66, 'defensa': -0.56, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.12, 'History': []},

    'León':{'ataque': 0.75, 'defensa': -0.88, 'PLUSLOCALataque': 0.22, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.31, 'History': []},

    'Tigres UANL':{'ataque': 0.78, 'defensa': -0.28, 'PLUSLOCALataque': 0.37, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.04, 'History': []},

    'Monterrey':{'ataque': 0.36, 'defensa': -0.92, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.38, 'PLUSVISITAdefensa': -0.27, 'History': []},

    'Tijuana':{'ataque': 0.69, 'defensa': -0.56, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': 0.02, 'History': []},

    'Atlas':{'ataque': 0.24, 'defensa': -0.48, 'PLUSLOCALataque': -0.19, 'PLUSLOCALdefensa': -0.00, 'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.12, 'History': []},

    'Mazatlán':{'ataque': 0.81, 'defensa': -1.14, 'PLUSLOCALataque': 0.36, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.50, 'History': []},

    'Atlético de San Luis':{'ataque': 0.37, 'defensa': -0.50, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.15, 'History': []},

    'Guadalajara':{'ataque': 1.28, 'defensa': -0.44, 'PLUSLOCALataque': 0.73, 'PLUSLOCALdefensa': 0.37, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.21, 'History': []},

    'Club América':{'ataque': 0.50, 'defensa': -0.44, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.01, 
    'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': 0.15, 'History': []},

    'Necaxa':{'ataque': 0.38, 'defensa': -0.64, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.23, 'PLUSVISITAataque': -0.24, 'PLUSVISITAdefensa': -0.26, 'History': []},

    'Juárez':{'ataque': 0.73, 'defensa': -0.89, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.27, 'History': []},

    'Cruz Azul':{'ataque': 0.93, 'defensa': -0.35, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': 0.07, 'PLUSVISITAdefensa': 0.19, 'History': []},

    'Pumas UNAM':{'ataque': 1.00, 'defensa': -0.41, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.18, 'History': []},

    'Santos Laguna':{'ataque': 0.55, 'defensa': -0.96, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.62, 'History': []},

    'Puebla':{'ataque': 0.28, 'defensa': -1.17, 'PLUSLOCALataque': -0.12, 'PLUSLOCALdefensa': -0.29, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': -0.29, 'History': []},

    'Toluca':{'ataque': 0.87, 'defensa': -0.61, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': -0.29, 'History': []},

  },
  Liga1: {
    'Comerciantes Unidos':{'ataque': 0.44, 'defensa': -0.64, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.28, 'History': ['0.51;-0.47', '0.38;-0.63', 
    '0.37;-0.55', '0.36;-0.85', '0.46;-0.83', '0.42;-0.87', '0.44;-0.82', '0.45;-0.79', '0.37;-0.81', '0.41;-0.67', '0.44;-0.64']},
    
    'Moquegua':{'ataque': 0.52, 'defensa': -0.39, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': 0.01, 'History': ['0.47;-0.51', '0.42;-0.6', '0.37;-0.83', 
    '0.36;-0.74', '0.38;-0.75', '0.39;-0.62', '0.43;-0.67', '0.41;-0.79', '0.5;-0.62', '0.66;-0.44', '0.52;-0.39']},
    
    'Universitario':{'ataque': 0.72, 'defensa': -0.38, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': 0.32, 
    'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': -0.10, 'History': ['0.58;-0.45', '0.58;-0.51', '0.65;-0.5', '0.57;-0.57', '0.58;-0.53', '0.58;-0.54', '0.69;-0.45', '0.66;-0.45', '0.7;-0.35', '0.61;-0.32', '0.72;-0.38']},
    
    'AD Tarma':{'ataque': 0.49, 'defensa': -0.58, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.02, 'History': ['0.45;-0.58', '0.47;-0.48', '0.44;-0.45', '0.44;-0.44', '0.44;-0.42', '0.51;-0.58', '0.54;-0.42', '0.47;-0.37', '0.64;-0.55', '0.56;-0.56', '0.49;-0.58']},
    
    'Alianza Atl.':{'ataque': 0.49, 'defensa': -0.55, 'PLUSLOCALataque': -0.21, 'PLUSLOCALdefensa': 0.07, 
    'PLUSVISITAataque': 0.09, 'PLUSVISITAdefensa': -0.01, 'History': ['0.64;-0.5', '0.6;-0.56', '0.53;-0.51', '0.48;-0.41', '0.46;-0.42', '0.55;-0.51', '0.6;-0.55', '0.73;-0.46', '0.66;-0.51', '0.52;-0.52', '0.49;-0.55']},
    
    'Cusco':{'ataque': 0.77, 'defensa': -0.57, 'PLUSLOCALataque': 0.05, 'PLUSLOCALdefensa': 0.25, 'PLUSVISITAataque': 0.12, 'PLUSVISITAdefensa': -0.22, 'History': ['0.5;-0.64', '0.55;-0.65', '0.46;-0.57', '0.76;-0.56', '0.65;-0.67', '0.59;-0.56', '0.47;-0.47', '0.58;-0.44', '0.86;-0.41', '0.89;-0.61', '0.77;-0.57']},
    
    'Deportivo Garcilaso':{'ataque': 0.68, 'defensa': -0.86, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 
    -0.15, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.10, 'History': ['0.56;-0.55', '0.53;-0.45', 
    '0.5;-0.41', '0.4;-0.4', '0.31;-0.58', '0.21;-0.52', '0.22;-0.43', '0.34;-0.5', '0.64;-0.65', '0.62;-0.75', '0.68;-0.86']},
    
    'Sporting Cristal':{'ataque': 0.82, 'defensa': -1.28, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': -0.22, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': -0.46, 'History': ['0.55;-0.56', '0.54;-0.65', '0.8;-0.56', '0.87;-0.49', '0.65;-0.7', '0.75;-0.78', '0.83;-0.73', '0.79;-0.76', '0.62;-0.86', '0.86;-0.94', '0.82;-1.28']},
    
    'Melgar':{'ataque': 0.66, 'defensa': -0.63, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': 0.01, 'History': ['0.74;-0.51', '0.83;-0.51', '1.07;-0.45', 
    '0.92;-0.43', '0.83;-0.44', '0.8;-0.64', '0.66;-0.63', '0.61;-0.55', '0.57;-0.83', '0.69;-0.71', '0.66;-0.63']},
    
    'Cienciano':{'ataque': 1.05, 'defensa': -0.45, 'PLUSLOCALataque': 0.53, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.04, 'History': ['0.51;-0.74', '0.82;-0.78', '0.81;-0.84', '0.72;-0.79', '0.89;-0.7', '0.84;-0.64', '0.74;-0.52', '0.98;-0.46', '1.16;-0.63', '1.11;-0.49', '1.05;-0.45']},
    
    'Juan Pablo II':{'ataque': 0.46, 'defensa': -1.23, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': -0.21, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.42, 'History': ['0.7;-0.57', '0.74;-0.88', '0.65;-1.14', '0.62;-1.1', '0.72;-0.98', '0.88;-1.05', '0.95;-1.2', '0.81;-1.12', '0.78;-1.03', '0.6;-1.19', 
    '0.46;-1.23']},
    
    'FC Cajamarca':{'ataque': 0.10, 'defensa': -0.48, 'PLUSLOCALataque': -0.22, 'PLUSLOCALdefensa': 0.30, 
    'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': -0.18, 'History': ['0.57;-0.7', '0.47;-0.67', '0.38;-0.62', '0.35;-0.47', '0.32;-0.48', '0.3;-0.49', '0.25;-0.51', '0.19;-0.75', '0.12;-0.67', '0.14;-0.6', 
    '0.1;-0.48']},
    
    'Sport Boys':{'ataque': 0.59, 'defensa': -0.68, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': -0.14, 'History': ['0.58;-0.55', '0.48;-0.57', '0.47;-0.52', '0.39;-0.46', '0.4;-0.48', '0.35;-0.43', '0.29;-0.5', '0.53;-0.41', '0.69;-0.71', '0.58;-0.83', '0.59;-0.68']},
    
    'Los Chankas':{'ataque': 0.89, 'defensa': -0.38, 'PLUSLOCALataque': 0.34, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': 0.13, 'History': ['0.55;-0.58', '0.61;-0.54', '0.54;-0.53', '0.78;-0.68', '0.78;-0.59', '0.79;-0.59', '0.94;-0.65', '0.97;-0.62', '0.9;-0.55', '0.93;-0.44', '0.89;-0.38']},
    
    'UTC':{'ataque': 0.48, 'defensa': -0.70, 'PLUSLOCALataque': -0.13, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.21, 'History': ['0.7;-0.45', '0.78;-0.39', '0.71;-0.31', '0.7;-0.31', '0.62;-0.25', '0.66;-0.21', '0.57;-0.32', '0.49;-0.45', '0.39;-0.42', '0.4;-0.47', '0.48;-0.7']},
    
    'Grau':{'ataque': 0.62, 'defensa': -0.50, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.28, 'PLUSVISITAdefensa': -0.01, 'History': ['0.45;-0.7', '0.38;-0.56', '0.34;-0.55', '0.3;-0.52', '0.28;-0.62', '0.28;-0.6', '0.27;-0.46', '0.33;-0.58', '0.38;-0.51', '0.28;-0.54', '0.62;-0.5']},
    
    'Sport Huancayo':{'ataque': 0.54, 'defensa': -0.77, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': -0.16, 'PLUSVISITAdefensa': -0.43, 'History': ['0.57;-0.7', '0.44;-0.63', '0.39;-0.54', '0.55;-0.78', '0.76;-0.56', '0.63;-0.58', '0.46;-0.62', '0.37;-0.86', '0.39;-0.79', '0.44;-0.79', '0.54;-0.77']},
    
    'Alianza Lima':{'ataque': 0.82, 'defensa': -0.05, 'PLUSLOCALataque': 0.41, 'PLUSLOCALdefensa': 0.34, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': 0.21, 'History': ['0.7;-0.57', '0.85;-0.45', '0.8;-0.37', '0.73;-0.3', '0.68;-0.22', '0.88;-0.2', '0.79;-0.21', '0.72;-0.07', '0.62;-0.1', '0.62;-0.02', '0.82;-0.05']},
  },
  BrasileiraoSerieB: {

    'Novorizontino':{'ataque': 0.63, 'defensa': -0.56, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.22, 'History': ['0.57;-0.82', '0.47;-0.74', '0.5;-0.76', '0.55;-0.63', '0.63;-0.56']},

    'Londrina':{'ataque': 0.59, 'defensa': -0.77, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.17, 'History': ['0.82;-0.57', '0.85;-0.64', '0.78;-0.67', '0.58;-0.86', '0.59;-0.77']},
    
    'Athletic Club':{'ataque': 0.42, 'defensa': -0.79, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': -0.05, 'PLUSVISITAataque': -0.14, 'PLUSVISITAdefensa': -0.14, 'History': ['0.58;-0.55', '0.52;-0.66', '0.5;-0.76', '0.49;-0.7', '0.42;-0.79']},
    
    'Ponte Preta':{'ataque': 0.53, 'defensa': -0.62, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.06, 
    'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.04, 'History': ['0.55;-0.58', '0.61;-0.71', '0.55;-0.78', '0.41;-0.7', '0.53;-0.62']},
    
    'Goiás':{'ataque': 0.61, 'defensa': -0.60, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': -0.08, 'PLUSVISITAdefensa': 0.02, 'History': ['0.82;-0.57', '0.89;-0.6', '0.88;-0.54', '0.74;-0.49', '0.61;-0.6']},
    
    'América-MG':{'ataque': 0.60, 'defensa': -0.72, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': 0.08, 'PLUSVISITAdefensa': -0.20, 'History': ['0.57;-0.82', '0.57;-0.88', '0.67;-0.85', '0.54;-0.9', '0.6;-0.72']},
    
    'Avaí':{'ataque': 0.47, 'defensa': -0.61, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': -0.09, 'History': ['0.57;-0.54', '0.56;-0.4', '0.57;-0.26', '0.55;-0.49', '0.47;-0.61']},
    
    'Juventude':{'ataque': 0.47, 'defensa': -0.52, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.25, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': -0.17, 'History': ['0.54;-0.57', '0.46;-0.46', '0.47;-0.61', '0.42;-0.47', '0.47;-0.52']},
    
    'Náutico':{'ataque': 0.62, 'defensa': -0.60, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.03, 'History': ['0.45;-0.57', '0.54;-0.56', '0.61;-0.5', 
    '0.57;-0.55', '0.62;-0.6']},
    
    'Criciúma':{'ataque': 0.78, 'defensa': -0.59, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.12, 'PLUSVISITAataque': 0.03, 'PLUSVISITAdefensa': -0.11, 'History': ['0.57;-0.45', '0.69;-0.39', '0.62;-0.39', '0.66;-0.33', '0.78;-0.59']},
    
    'Cuiabá':{'ataque': 0.41, 'defensa': -0.34, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': 0.24, 'History': ['0.52;-0.56', '0.36;-0.5', '0.33;-0.52', '0.31;-0.47', '0.41;-0.34']},
    
    'Sport Recife':{'ataque': 0.60, 'defensa': -0.57, 'PLUSLOCALataque': 0.17, 'PLUSLOCALdefensa': -0.06, 
    'PLUSVISITAataque': -0.18, 'PLUSVISITAdefensa': 0.09, 'History': ['0.56;-0.52', '0.51;-0.59', '0.54;-0.53', '0.77;-0.51', '0.6;-0.57']},
    
    'Botafogo SP':{'ataque': 0.61, 'defensa': -0.53, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.03, 'History': ['0.78;-0.49', '0.82;-0.48', '0.77;-0.59', '0.71;-0.63', '0.61;-0.53']},
    
    'Fortaleza':{'ataque': 0.89, 'defensa': -0.75, 'PLUSLOCALataque': 0.35, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.17, 'History': ['0.49;-0.78', '0.43;-0.62', '0.58;-0.64', '0.62;-0.63', '0.89;-0.75']},
    
    'Operario':{'ataque': 0.68, 'defensa': -0.54, 'PLUSLOCALataque': 0.14, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.04, 'History': ['0.79;-0.52', '0.87;-0.52', '0.73;-0.53', '0.68;-0.51', '0.68;-0.54']},
    
    'Atlético-GO':{'ataque': 0.61, 'defensa': -0.64, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': 0.11, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': -0.14, 'History': ['0.52;-0.79', '0.51;-0.89', '0.52;-0.94', '0.71;-0.74', '0.61;-0.64']},
    
    'Ceará':{'ataque': 0.68, 'defensa': -0.48, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.15, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': -0.03, 'History': ['0.57;-0.48', '0.71;-0.54', '0.73;-0.51', '0.78;-0.47', '0.68;-0.48']},
    
    'Sao Bernardo':{'ataque': 0.64, 'defensa': -0.69, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.04, 'PLUSVISITAdefensa': 0.03, 'History': ['0.48;-0.57', '0.48;-0.65', '0.59;-0.6', '0.58;-0.64', '0.64;-0.69']},
    
    'Vila Nova':{'ataque': 0.59, 'defensa': -0.40, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': -0.00, 'PLUSVISITAdefensa': 0.19, 'History': ['0.51;-0.59', '0.59;-0.53', '0.64;-0.54', '0.56;-0.4', '0.59;-0.4']},
    
    'CRB':{'ataque': 0.46, 'defensa': -0.58, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.06, 'History': ['0.59;-0.51', '0.45;-0.5', '0.48;-0.53', '0.42;-0.52', '0.46;-0.58']},

    
  },
  SaudiProLeague: {
    'Al Okhdood':{'ataque': 0.26, 'defensa': -1.17, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.50, 'PLUSVISITAataque': -0.25, 'PLUSVISITAdefensa': -0.07, 'History': []},

    'Al-Ittihad FC':{'ataque': 0.77, 'defensa': -0.83, 'PLUSLOCALataque': 0.15, 'PLUSLOCALdefensa': 0.00, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.24, 'History': []},
    
    'Al Qadsiah':{'ataque': 1.58, 'defensa': -0.56, 'PLUSLOCALataque': 0.42, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': 0.56, 'PLUSVISITAdefensa': 0.07, 'History': []},
    
    'Al Najma':{'ataque': 0.36, 'defensa': -1.29, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.50, 'History': []},
    
    'Al Fateh':{'ataque': 0.26, 'defensa': -0.63, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': -0.31, 'PLUSVISITAdefensa': -0.24, 'History': []},
    
    'Al Fayha':{'ataque': 0.42, 'defensa': -0.67, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.29, 'History': []},
    
    'Al Shabab':{'ataque': 1.18, 'defensa': -0.69, 'PLUSLOCALataque': 0.31, 'PLUSLOCALdefensa': -0.24, 'PLUSVISITAataque': 0.26, 'PLUSVISITAdefensa': 0.14, 'History': []},
    
    'Al Khaleej':{'ataque': 0.42, 'defensa': -0.79, 'PLUSLOCALataque': 0.13, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': -0.31, 'PLUSVISITAdefensa': -0.18, 'History': []},
    
    'Al-Taawon':{'ataque': 0.39, 'defensa': -0.59, 'PLUSLOCALataque': -0.00, 'PLUSLOCALdefensa': 0.02, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.01, 'History': []},
    
    'Al Nassr Riyadh':{'ataque': 1.26, 'defensa': -0.16, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': 0.40, 'PLUSVISITAdefensa': 0.18, 'History': []},
    
    'Al-Hilal':{'ataque': 1.20, 'defensa': -0.20, 'PLUSLOCALataque': 0.30, 'PLUSLOCALdefensa': 0.28, 'PLUSVISITAataque': 0.30, 'PLUSVISITAdefensa': 0.13, 'History': []},
    
    'Al Riyadh':{'ataque': 0.63, 'defensa': -1.05, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': -0.38, 'History': []},
    
    'Al Ahli SC':{'ataque': 1.05, 'defensa': -0.30, 'PLUSLOCALataque': 0.62, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': -0.17, 'PLUSVISITAdefensa': 0.14, 'History': []},
    
    'Neom SC':{'ataque': 0.74, 'defensa': -0.68, 'PLUSLOCALataque': -0.03, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': 0.17, 'PLUSVISITAdefensa': -0.01, 'History': []},
    
    'Al-Ettifaq':{'ataque': 0.66, 'defensa': -0.98, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.28, 'History': []},
    
    'Al Kholood':{'ataque': 0.43, 'defensa': -0.88, 'PLUSLOCALataque': -0.31, 'PLUSLOCALdefensa': -0.12, 'PLUSVISITAataque': 0.14, 'PLUSVISITAdefensa': -0.16, 'History': []},
    
    'Damac':{'ataque': 0.37, 'defensa': -0.32, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.34, 'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.06, 'History': []},
    
    'Al Hazem':{'ataque': 0.53, 'defensa': -0.67, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.14, 'History': []},
  },
  J1League: {
    'Verdy':{'ataque': 0.57, 'defensa': -0.62, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': 0.33, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': -0.35, 'History': []},

  'Mito':{'ataque': 0.61, 'defensa': -0.56, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': -0.21, 'History': []},

  'Kawasaki':{'ataque': 0.35, 'defensa': -0.75, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': -0.36, 'PLUSVISITAataque': -0.20, 'PLUSVISITAdefensa': 0.21, 'History': []},

  'Kashiwa':{'ataque': 0.50, 'defensa': -0.73, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': 0.26, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.39, 'History': []},

  'Nagoya':{'ataque': 0.71, 'defensa': -0.54, 'PLUSLOCALataque': -0.11, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': 0.22, 'PLUSVISITAdefensa': 0.10, 'History': []},

  'Shimizu':{'ataque': 0.44, 'defensa': -0.79, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.06, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': -0.13, 'History': []},

  'Avispa Fukuoka':{'ataque': 0.24, 'defensa': -0.59, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': -0.00, 'History': []},

  'Okayama':{'ataque': 0.71, 'defensa': -0.45, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': 0.16, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.00, 'History': []},

  'C-Osaka':{'ataque': 0.60, 'defensa': -0.41, 'PLUSLOCALataque': 0.02, 'PLUSLOCALdefensa': 0.17, 'PLUSVISITAataque': -0.03, 'PLUSVISITAdefensa': 0.03, 'History': []},

  'G-Osaka':{'ataque': 0.88, 'defensa': -0.55, 'PLUSLOCALataque': 0.47, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': -0.19, 'PLUSVISITAdefensa': -0.04, 'History': []},

  'Tokyo':{'ataque': 1.08, 'defensa': -0.36, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': 0.17, 'History': []},

  'Kashima':{'ataque': 0.65, 'defensa': -0.38, 'PLUSLOCALataque': -0.06, 'PLUSLOCALdefensa': 0.29, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.07, 'History': []},

  'Chiba':{'ataque': 0.32, 'defensa': -0.83, 'PLUSLOCALataque': 0.01, 'PLUSLOCALdefensa': -0.19, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': -0.04, 'History': []},

  'Urawa':{'ataque': 0.60, 'defensa': -0.48, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'Kyoto':{'ataque': 0.48, 'defensa': -0.75, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.03, 'PLUSVISITAataque': -0.21, 'PLUSVISITAdefensa': -0.19, 'History': []},

  'Vissel Kobe':{'ataque': 0.81, 'defensa': -0.72, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': 0.11, 'PLUSVISITAdefensa': -0.20, 'History': []},

  'V-Varen Nagasaki':{'ataque': 0.35, 'defensa': -0.71, 'PLUSLOCALataque': -0.19, 'PLUSLOCALdefensa': -0.15, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': 0.04, 'History': []},

  'Hiroshima':{'ataque': 0.79, 'defensa': -0.48, 'PLUSLOCALataque': 0.23, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.04, 'PLUSVISITAdefensa': -0.08, 'History': []},

  'Yokohama M.':{'ataque': 0.67, 'defensa': -0.98, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': -0.18, 
  'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.20, 'History': []},

'Machida':{'ataque': 0.71, 'defensa': -0.35, 'PLUSLOCALataque': 0.08, 'PLUSLOCALdefensa': -0.02, 'PLUSVISITAataque': 0.02, 'PLUSVISITAdefensa': 0.26, 'History': []},
  },
  EgyptianPremierLeague: {

    'National Bank Egypt':{'ataque': 0.41, 'defensa': -0.41, 'PLUSLOCALataque': 0.07, 'PLUSLOCALdefensa': 
    -0.02, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': 0.21, 'History': ['0.54;-0.48', '0.4;-0.47', '0.6;-0.39', '0.64;-0.36', '0.66;-0.33', '0.72;-0.25', '0.78;-0.22', '0.83;-0.33', '0.79;-0.35', '0.8;-0.28', '0.72;-0.31', '0.71;-0.29', '0.55;-0.22', '0.59;-0.18', '0.54;-0.11', '0.46;-0.12', '0.37;-0.15', '0.44;-0.49', '0.4;-0.42', '0.34;-0.38', '0.41;-0.42', '0.46;-0.43', '0.39;-0.46', '0.45;-0.49', '0.43;-0.49', '0.41;-0.41']},
    
    'Ghazl El Mahallah':{'ataque': 0.45, 'defensa': -0.72, 'PLUSLOCALataque': -0.32, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': 0.18, 'PLUSVISITAdefensa': -0.22, 'History': ['0.48;-0.54', '0.53;-0.49', '0.5;-0.44', '0.4;-0.46', '0.47;-0.45', '0.56;-0.66', '0.56;-0.77', '0.49;-0.64', '0.44;-0.5', '0.51;-0.57', '0.38;-0.43', '0.26;-0.43', '0.22;-0.44', '0.41;-0.72', '0.3;-0.68', '0.48;-0.77', '0.38;-0.76', '0.43;-0.82', '0.33;-0.75', '0.24;-0.79', '0.28;-0.85', '0.22;-0.82', '0.29;-0.67', '0.27;-0.68', '0.45;-0.69', '0.45;-0.72']},
    
    'Pharco':{'ataque': 0.11, 'defensa': -0.76, 'PLUSLOCALataque': -0.22, 'PLUSLOCALdefensa': 0.04, 'PLUSVISITAataque': -0.27, 'PLUSVISITAdefensa': -0.20, 'History': ['0.53;-0.53', '0.51;-0.57', '0.43;-0.6', 
    '0.35;-0.76', '0.43;-0.75', '0.4;-0.61', '0.31;-0.55', '0.31;-0.53', '0.31;-0.43', '0.26;-0.54', '0.24;-0.47', '0.26;-0.38', '0.33;-0.57', '0.3;-0.7', '0.32;-0.79', '0.26;-0.95', '0.18;-0.91', '0.21;-0.81', '0.11;-0.78', '0.14;-0.69', '0.24;-0.7', '0.21;-0.63', '0.15;-0.73', '0.26;-0.81', '0.14;-0.75', '0.11;-0.76']},
    
    'Enppi':{'ataque': 0.61, 'defensa': -0.19, 'PLUSLOCALataque': 0.24, 'PLUSLOCALdefensa': 0.22, 'PLUSVISITAataque': -0.23, 'PLUSVISITAdefensa': 0.19, 'History': ['0.53;-0.53', '0.51;-0.49', '0.4;-0.64', '0.38;-0.55', '0.41;-0.46', '0.49;-0.51', '0.5;-0.59', '0.65;-0.57', '0.5;-0.52', '0.49;-0.44', '0.43;-0.46', '0.48;-0.52', '0.49;-0.7', '0.53;-0.6', '0.43;-0.5', '0.44;-0.42', '0.33;-0.32', '0.39;-0.35', '0.45;-0.42', '0.57;-0.37', '0.61;-0.29', '0.59;-0.28', '0.63;-0.31', '0.61;-0.19']},
    
    'Kahrabaa Ismailia':{'ataque': 0.21, 'defensa': -1.02, 'PLUSLOCALataque': -0.10, 'PLUSLOCALdefensa': -0.53, 'PLUSVISITAataque': -0.29, 'PLUSVISITAdefensa': 0.11, 'History': ['0.45;-0.57', '0.47;-0.7', '0.39;-0.89', '0.43;-0.95', '0.39;-1.02', '0.41;-1.31', '0.34;-1.2', '0.45;-1.16', '0.63;-1.28', '0.48;-1.15', '0.4;-0.94', '0.37;-0.98', '0.27;-1.06', '0.31;-1.05', '0.26;-0.98', '0.3;-1.09', '0.32;-1.1', '0.28;-1.13', '0.24;-1.02', '0.31;-1.09', '0.28;-1.06', '0.22;-0.96', '0.21;-0.85', '0.19;-0.95', '0.19;-1.13', '0.21;-1.02']},
    
    'El Gounah':{'ataque': 0.41, 'defensa': -0.33, 'PLUSLOCALataque': -0.04, 'PLUSLOCALdefensa': 0.13, 'PLUSVISITAataque': -0.15, 'PLUSVISITAdefensa': 0.13, 'History': ['0.57;-0.45', '0.53;-0.42', '0.44;-0.4', '0.36;-0.36', '0.41;-0.54', '0.58;-0.52', '0.53;-0.45', '0.61;-0.59', '0.65;-0.49', '0.58;-0.5', '0.66;-0.37', '0.57;-0.39', '0.69;-0.38', '0.63;-0.37', '0.58;-0.33', '0.49;-0.26', '0.56;-0.31', '0.65;-0.41', '0.62;-0.25', '0.63;-0.16', '0.56;-0.22', '0.51;-0.26', '0.36;-0.33', '0.38;-0.37', '0.4;-0.36', '0.41;-0.33']},
    
    'Ismaily':{'ataque': 0.13, 'defensa': -0.68, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': -0.22, 'PLUSVISITAataque': -0.43, 'PLUSVISITAdefensa': 0.14, 'History': ['0.47;-0.58', '0.36;-0.61', '0.32;-0.59', '0.31;-0.57', '0.31;-0.64', '0.19;-0.61', '0.2;-0.65', '0.18;-0.79', '0.29;-0.84', '0.29;-0.88', '0.5;-0.89', '0.43;-0.87', '0.47;-0.85', '0.34;-0.9', '0.29;-0.81', '0.29;-0.74', '0.27;-0.77', '0.23;-0.58', '0.33;-0.67', '0.29;-0.77', '0.24;-0.72', '0.17;-0.67', '0.17;-0.7', '0.27;-0.68', '0.25;-0.7', '0.13;-0.68']},
    
    'Petrojet':{'ataque': 0.41, 'defensa': -0.62, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.01, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': -0.03, 'History': ['0.58;-0.47', '0.7;-0.49', '0.7;-0.39', '0.67;-0.33', '0.57;-0.34', '0.49;-0.41', '0.47;-0.57', '0.35;-0.5', '0.64;-0.59', '0.57;-0.64', '0.5;-0.68', '0.57;-0.77', '0.73;-0.81', '0.62;-0.76', '0.59;-0.73', '0.48;-0.76', '0.45;-0.69', '0.43;-0.62', '0.46;-0.65', '0.5;-0.82', '0.43;-0.71', '0.33;-0.65', '0.51;-0.63', '0.44;-0.73', '0.38;-0.61', 
    '0.41;-0.62']},
    
    'Modern Sport':{'ataque': 0.17, 'defensa': -0.64, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.03, 'PLUSVISITAataque': -0.35, 'PLUSVISITAdefensa': -0.01, 'History': ['0.54;-0.58', '0.56;-0.55', '0.59;-0.68', '0.71;-0.65', '0.7;-0.54', '0.53;-0.56', '0.62;-0.58', '0.66;-0.66', '0.64;-0.66', '0.77;-0.62', '0.76;-0.68', '0.76;-0.64', '0.7;-0.48', '0.61;-0.43', '0.57;-0.39', '0.58;-0.4', '0.47;-0.4', '0.49;-0.42', '0.44;-0.63', '0.31;-0.73', '0.28;-0.7', '0.26;-0.65', '0.15;-0.58', '0.19;-0.6', '0.19;-0.77', '0.17;-0.64']},
    
    'Al Ahly':{'ataque': 1.21, 'defensa': -0.18, 'PLUSLOCALataque': 0.24, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': 0.37, 'PLUSVISITAdefensa': 0.13, 'History': ['0.58;-0.54', '0.63;-0.52', '0.65;-0.43', '0.64;-0.43', '0.69;-0.51', '0.77;-0.41', '1.14;-0.33', '1.18;-0.33', '1.29;-0.52', '1.28;-0.56', '1.33;-0.5', '1.41;-0.39', '1.48;-0.36', '1.41;-0.31', '1.34;-0.31', '1.26;-0.21', '1.16;-0.09', '1.21;-0.1', '1.36;-0.21', '1.39;-0.34', '1.32;-0.21', '1.35;-0.2', '1.21;-0.18']},
    
    'Arab Contractors':{'ataque': 0.54, 'defensa': -0.36, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': 0.15, 'History': ['0.53;-0.67', '0.41;-0.61', '0.63;-0.46', '0.57;-0.42', '0.44;-0.43', '0.64;-0.52', '0.5;-0.49', '0.48;-0.48', '0.44;-0.59', '0.39;-0.61', '0.41;-0.55', '0.47;-0.54', '0.49;-0.47', '0.38;-0.53', '0.43;-0.4', '0.38;-0.44', '0.35;-0.29', 
    '0.36;-0.26', '0.42;-0.33', '0.52;-0.47', '0.41;-0.41', '0.41;-0.36', '0.43;-0.36', '0.47;-0.43', '0.63;-0.31', '0.54;-0.36']},
    
    'ZED':{'ataque': 0.53, 'defensa': -0.66, 'PLUSLOCALataque': -0.05, 'PLUSLOCALdefensa': 0.21, 'PLUSVISITAataque': -0.02, 'PLUSVISITAdefensa': -0.27, 'History': ['0.67;-0.53', '0.61;-0.53', '0.54;-0.61', '0.6;-0.71', '0.56;-0.64', '0.53;-0.52', '0.42;-0.53', '0.46;-0.51', '0.42;-0.49', '0.34;-0.47', '0.39;-0.4', '0.38;-0.64', '0.36;-0.62', '0.44;-0.52', '0.53;-0.54', '0.42;-0.65', '0.41;-0.55', '0.46;-0.6', '0.47;-0.65', '0.57;-0.51', '0.51;-0.42', '0.47;-0.41', '0.45;-0.59', '0.44;-0.68', '0.6;-0.67', '0.53;-0.66']},
    
    'Smouha':{'ataque': 0.84, 'defensa': -0.32, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.30, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': -0.02, 'History': ['0.68;-0.47', '0.62;-0.51', '0.7;-0.43', '0.76;-0.47', '0.78;-0.37', '0.67;-0.36', '0.59;-0.31', '0.64;-0.32', '0.67;-0.32', '0.59;-0.2', '0.45;-0.28', '0.38;-0.3', '0.51;-0.27', '0.68;-0.29', '0.79;-0.34', '0.66;-0.26', '0.66;-0.27', '0.53;-0.17', '0.87;-0.24', '1.08;-0.2', '1.0;-0.24', '0.99;-0.27', '0.93;-0.34', '0.84;-0.32']},
    
    'El Gaish':{'ataque': 0.43, 'defensa': -0.50, 'PLUSLOCALataque': 0.09, 'PLUSLOCALdefensa': 0.33, 'PLUSVISITAataque': -0.26, 'PLUSVISITAdefensa': -0.22, 'History': ['0.47;-0.68', '0.43;-0.65', '0.45;-0.57', '0.43;-0.56', '0.4;-0.58', '0.42;-0.41', '0.34;-0.38', '0.33;-0.36', '0.29;-0.43', '0.19;-0.47', '0.2;-0.53', '0.44;-0.52', '0.52;-0.7', '0.58;-0.75', '0.54;-0.64', '0.42;-0.58', '0.45;-0.54', '0.35;-0.52', '0.52;-0.57', '0.66;-0.6', '0.56;-0.54', '0.52;-0.47', '0.55;-0.4', '0.65;-0.32', '0.54;-0.48', '0.43;-0.5']},
    
    'Al Masry':{'ataque': 0.66, 'defensa': -0.36, 'PLUSLOCALataque': 0.16, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.15, 'History': ['0.56;-0.56', '0.53;-0.52', '0.62;-0.56', '0.54;-0.59', '0.61;-0.55', '0.59;-0.56', '0.71;-0.56', '0.65;-0.47', '0.73;-0.76', '0.76;-0.72', '0.64;-0.63', '0.52;-0.72', '0.53;-0.62', '0.64;-0.51', '0.58;-0.51', '0.56;-0.52', '0.55;-0.4', '0.58;-0.46', '0.68;-0.42', '0.6;-0.43', '0.49;-0.39', '0.64;-0.4', '0.67;-0.44', '0.66;-0.36']},
    
    'Al Ittihad':{'ataque': 0.23, 'defensa': -0.34, 'PLUSLOCALataque': -0.26, 'PLUSLOCALdefensa': 0.10, 'PLUSVISITAataque': -0.11, 'PLUSVISITAdefensa': 0.16, 'History': ['0.56;-0.56', '0.52;-0.58', '0.51;-0.55', '0.47;-0.59', '0.39;-0.61', '0.38;-0.69', '0.27;-0.61', '0.26;-0.65', '0.28;-0.59', '0.32;-0.58', 
    '0.25;-0.53', '0.32;-0.6', '0.31;-0.71', '0.37;-0.83', '0.42;-0.73', '0.37;-0.61', '0.38;-0.6', '0.32;-0.59', '0.24;-0.49', '0.22;-0.41', '0.22;-0.51', '0.26;-0.46', '0.15;-0.46', '0.23;-0.45', '0.19;-0.43', '0.23;-0.34']},
    
    'Ceramica Cleopatra':{'ataque': 0.54, 'defensa': -0.25, 'PLUSLOCALataque': 0.06, 'PLUSLOCALdefensa': 0.07, 'PLUSVISITAataque': -0.12, 'PLUSVISITAdefensa': 0.27, 'History': ['0.48;-0.54', '0.47;-0.49', '0.63;-0.38', '0.63;-0.25', '0.62;-0.14', '0.52;-0.23', '0.6;-0.26', '0.75;-0.34', '0.89;-0.24', '0.95;-0.25', '0.73;-0.16', '0.82;-0.22', '1.01;-0.29', '1.13;-0.36', '1.03;-0.36', '1.11;-0.54', '1.0;-0.55', '0.8;-0.51', '0.69;-0.46', '0.62;-0.41', '0.49;-0.34', '0.48;-0.32', '0.54;-0.25']},
    
    'Zamalek':{'ataque': 0.64, 'defensa': -0.10, 'PLUSLOCALataque': -0.16, 'PLUSLOCALdefensa': 0.41, 'PLUSVISITAataque': 0.20, 'PLUSVISITAdefensa': 0.08, 'History': ['0.54;-0.48', '0.48;-0.36', '0.61;-0.39', 
    '0.76;-0.31', '0.73;-0.38', '0.73;-0.37', '0.77;-0.38', '0.7;-0.33', '0.7;-0.37', '0.77;-0.43', '0.8;-0.36', '0.98;-0.44', '0.95;-0.4', '1.07;-0.44', '0.99;-0.31', '0.89;-0.32', '0.94;-0.37', '0.97;-0.23', '0.89;-0.21', '0.84;-0.32', '0.8;-0.22', '0.77;-0.12', '0.64;-0.1']},
    
    'Wadi Degla':{'ataque': 0.53, 'defensa': -0.32, 'PLUSLOCALataque': 0.03, 'PLUSLOCALdefensa': 0.20, 'PLUSVISITAataque': -0.10, 'PLUSVISITAdefensa': 0.08, 'History': ['0.55;-0.46', '0.51;-0.45', '0.41;-0.45', '0.52;-0.51', '0.58;-0.48', '0.87;-0.5', '0.84;-0.43', '0.82;-0.48', '0.82;-0.53', '0.72;-0.53', '0.68;-0.66', '0.62;-0.59', '0.57;-0.58', '0.85;-0.77', '0.82;-0.83', '0.66;-0.8', '0.66;-0.74', '0.7;-0.72', '0.65;-0.6', '0.48;-0.58', '0.55;-0.5', '0.49;-0.48', '0.59;-0.42', '0.61;-0.4', '0.6;-0.38', '0.53;-0.32']},
    
    'Pyramids':{'ataque': 0.73, 'defensa': -0.24, 'PLUSLOCALataque': 0.19, 'PLUSLOCALdefensa': 0.39, 'PLUSVISITAataque': -0.06, 'PLUSVISITAdefensa': -0.03, 'History': ['0.46;-0.55', '0.49;-0.44', '0.53;-0.54', '0.51;-0.66', '0.51;-0.65', '0.52;-0.55', '0.59;-0.5', '0.7;-0.45', '0.77;-0.51', '0.83;-0.41', '0.82;-0.45', '0.77;-0.35', '0.77;-0.28', '0.82;-0.4', '0.72;-0.3', '0.73;-0.18', '0.8;-0.24', '0.67;-0.27', '0.87;-0.33', '0.84;-0.27', '0.85;-0.42', '0.75;-0.38', '0.73;-0.24']},
    
    'Haras El Hodood':{'ataque': 0.14, 'defensa': -0.94, 'PLUSLOCALataque': -0.14, 'PLUSLOCALdefensa': 0.09, 'PLUSVISITAataque': -0.32, 'PLUSVISITAdefensa': -0.43, 'History': ['0.59;-0.46', '0.44;-0.68', '0.48;-0.59', '0.37;-0.59', '0.54;-0.64', '0.5;-0.55', '0.42;-0.92', '0.39;-0.88', '0.29;-1.02', '0.29;-1.23', '0.3;-1.11', '0.29;-1.06', '0.32;-1.22', '0.26;-1.16', '0.16;-1.21', '0.31;-1.15', '0.32;-1.05', 
    '0.22;-0.94', '0.2;-0.85', '0.26;-1.05', '0.2;-1.0', '0.21;-1.06', '0.14;-0.95', '0.22;-1.06', '0.2;-1.01', '0.14;-0.94']},
    
  },
  QatarStarsLeague: {

    'Al-Sadd':{'ataque': 1.20, 'defensa': -0.59, 'PLUSLOCALataque': 0.26, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': 0.34, 'PLUSVISITAdefensa': 0.19, 'History': ['0.7;-0.82', '0.87;-0.74', '0.81;-0.56', '0.76;-0.54', '0.78;-0.76', '0.8;-0.72', '0.65;-0.75', '0.91;-0.48', '1.06;-0.62', '1.09;-0.66', '1.16;-0.43', '1.27;-0.62', '1.24;-0.54', '1.3;-0.48', '1.4;-0.41', '1.45;-0.31', '1.55;-0.34', '1.53;-0.64', '1.17;-0.73', '1.19;-0.63', '1.2;-0.59']},

    'Qatar SC':{'ataque': 0.91, 'defensa': -0.56, 'PLUSLOCALataque': 0.10, 'PLUSLOCALdefensa': -0.04, 'PLUSVISITAataque': 0.21, 'PLUSVISITAdefensa': 0.08, 'History': ['0.82;-0.7', '0.88;-0.57', '0.9;-0.48', '0.86;-0.41', '0.78;-0.35', '0.74;-0.35', '0.7;-0.36', '0.57;-0.38', '0.54;-0.41', '0.49;-0.74', '0.33;-0.57', '0.52;-0.68', '0.49;-0.83', '0.57;-0.85', '0.62;-0.9', '0.95;-1.09', '0.92;-0.88', '0.71;-0.73', '0.72;-0.76', '0.82;-0.77', '0.91;-0.56']},
    
    'Al-Duhail':{'ataque': 0.92, 'defensa': -0.84, 'PLUSLOCALataque': 0.33, 'PLUSLOCALdefensa': 0.06, 'PLUSVISITAataque': -0.01, 'PLUSVISITAdefensa': -0.29, 'History': ['0.7;-0.57', '0.54;-0.55', '0.39;-0.5', '0.4;-0.41', '0.49;-0.33', '0.44;-0.35', '0.61;-0.33', '0.62;-0.51', '1.06;-0.56', '1.03;-0.73', '0.86;-0.57', '0.67;-0.58', '0.88;-0.61', '0.87;-0.49', '0.56;-0.61', '0.44;-0.52', '0.46;-0.62', '0.61;-0.55', '0.8;-0.61', '0.9;-0.77', '0.92;-0.84']},
    
    'Al-Shahaniya':{'ataque': 0.71, 'defensa': -1.19, 'PLUSLOCALataque': 0.38, 'PLUSLOCALdefensa': 0.08, 'PLUSVISITAataque': -0.27, 'PLUSVISITAdefensa': -0.67, 'History': ['0.57;-0.7', '0.5;-0.7', '0.41;-0.66', '0.39;-0.62', '0.33;-0.54', '0.22;-0.67', '0.1;-0.68', '-0.0;-0.83', '0.02;-1.04', '-0.03;-1.21', '0.24;-1.0', '0.25;-0.81', '0.4;-0.66', '0.41;-1.05', '0.35;-1.15', '0.54;-1.47', '0.52;-1.31', '0.53;-1.16', '0.65;-1.32', '0.6;-1.3', '0.71;-1.19']},
    
    'Al-Gharafa':{'ataque': 0.71, 'defensa': -1.08, 'PLUSLOCALataque': 0.18, 'PLUSLOCALdefensa': -0.01, 'PLUSVISITAataque': -0.07, 'PLUSVISITAdefensa': -0.47, 'History': ['0.84;-0.6', '0.88;-0.58', '0.7;-0.52', '0.72;-0.44', '0.64;-0.35', '0.95;-0.48', '1.04;-0.48', '1.22;-0.49', '1.24;-0.46', '1.09;-0.27', '0.88;-0.55', '0.99;-0.66', '0.94;-0.55', '0.87;-0.61', '0.87;-0.68', '0.67;-0.61', '0.89;-0.68', '0.68;-0.65', '0.56;-0.89', '0.72;-0.99', '0.71;-1.08']},
    
    'Umm-Salal':{'ataque': 0.58, 'defensa': -1.00, 'PLUSLOCALataque': 0.11, 'PLUSLOCALdefensa': -0.07, 'PLUSVISITAataque': -0.13, 'PLUSVISITAdefensa': -0.33, 'History': ['0.6;-0.84', '0.6;-0.77', '0.69;-0.96', '0.6;-0.96', '0.66;-0.98', '0.75;-1.08', '0.76;-1.04', '0.6;-1.21', '0.75;-1.37', '0.6;-1.32', '0.42;-1.13', '0.53;-1.23', '0.39;-1.39', '0.52;-1.53', '0.64;-1.22', '0.63;-1.02', '0.63;-1.14', '0.93;-1.13', '0.78;-0.92', '0.66;-0.84', '0.58;-1.0']},
    
    'Al Arabi':{'ataque': 0.59, 'defensa': -0.74, 'PLUSLOCALataque': -0.17, 'PLUSLOCALdefensa': -0.18, 'PLUSVISITAataque': 0.16, 'PLUSVISITAdefensa': 0.04, 'History': ['0.55;-0.62', '0.53;-0.65', '0.72;-0.75', '0.82;-0.86', '0.73;-0.95', '0.65;-1.15', '0.68;-1.0', '0.83;-0.9', '0.83;-0.8', '1.16;-0.76', '1.07;-0.82', '0.98;-0.63', '0.87;-0.58', '1.01;-0.72', '0.96;-0.96', '0.87;-0.84', '0.73;-0.87', '0.82;-0.51', '0.8;-0.46', '0.8;-0.56', '0.59;-0.74']},
    
    'Al-Wakra':{'ataque': 0.89, 'defensa': -0.54, 'PLUSLOCALataque': 0.28, 'PLUSLOCALdefensa': -0.08, 'PLUSVISITAataque': 0.01, 'PLUSVISITAdefensa': 0.14, 'History': ['0.62;-0.55', '0.59;-0.39', '0.56;-0.3', 
    '0.57;-0.56', '0.79;-0.57', '0.89;-0.67', '0.77;-0.66', '0.79;-0.53', '0.86;-0.5', '0.68;-0.36', '0.51;-0.35', '0.33;-0.25', '0.36;-0.47', '0.75;-0.48', '0.98;-0.51', '0.88;-0.56', '1.0;-0.57', '0.83;-0.48', '0.77;-0.53', '0.8;-0.54', '0.89;-0.54']},
    
    'Shamal':{'ataque': 0.43, 'defensa': -0.40, 'PLUSLOCALataque': -0.08, 'PLUSLOCALdefensa': -0.13, 'PLUSVISITAataque': -0.09, 'PLUSVISITAdefensa': 0.33, 'History': ['0.66;-0.48', '0.95;-0.56', '0.99;-0.57', '1.1;-0.67', '1.01;-0.59', '1.0;-0.55', '0.98;-0.72', '1.15;-0.55', '1.12;-0.62', '1.29;-0.56', '1.06;-0.64', '0.86;-0.8', '0.81;-0.64', '0.68;-0.55', '0.92;-0.5', '0.85;-0.31', '0.77;-0.13', '0.83;-0.32', '0.75;-0.2', '0.64;-0.31', '0.43;-0.4']},
    
    'Al Ahli Doha':{'ataque': 0.50, 'defensa': -0.56, 'PLUSLOCALataque': -0.15, 'PLUSLOCALdefensa': -0.10, 'PLUSVISITAataque': 0.06, 'PLUSVISITAdefensa': 0.14, 'History': ['0.48;-0.66', '0.39;-0.83', '0.3;-0.85', '0.56;-0.86', '0.41;-1.05', '0.54;-0.95', '0.54;-1.03', '0.46;-0.85', '0.37;-0.84', '0.55;-0.81', '0.35;-0.63', '0.52;-0.44', '0.44;-0.4', '0.46;-0.48', '0.49;-0.71', '0.43;-0.74', '0.27;-0.72', '0.3;-0.58', '0.54;-0.45', '0.44;-0.54', '0.5;-0.56']},
    
    'Al-Rayyan':{'ataque': 0.88, 'defensa': -0.58, 'PLUSLOCALataque': -0.09, 'PLUSLOCALdefensa': 0.24, 'PLUSVISITAataque': 0.36, 'PLUSVISITAdefensa': -0.22, 'History': ['0.68;-0.46', '0.75;-0.75', '0.71;-0.61', '0.64;-0.57', '0.83;-0.42', '0.96;-0.73', '0.95;-0.61', '0.67;-0.86', '0.89;-0.89', '0.85;-0.74', '0.91;-0.66', '1.04;-0.56', '0.89;-0.5', '0.77;-0.48', '0.82;-0.53', '0.84;-0.47', '0.91;-0.69', '0.76;-0.7', '0.82;-0.65', '0.72;-0.66', '0.88;-0.58']},
    
    'Al Sailiya':{'ataque': 0.54, 'defensa': -0.79, 'PLUSLOCALataque': -0.01, 'PLUSLOCALdefensa': -0.08, 'PLUSVISITAataque': -0.05, 'PLUSVISITAdefensa': -0.11, 'History': ['0.46;-0.68', '0.34;-0.73', '0.35;-0.77', '0.28;-0.78', '0.3;-0.84', '0.5;-0.76', '0.51;-0.64', '0.33;-0.56', '0.38;-1.0', '0.41;-1.03', '0.4;-0.86', '0.3;-1.0', '0.45;-0.97', '0.36;-0.84', '0.43;-0.84', '0.23;-0.83', '0.16;-0.98', '0.32;-1.09', '0.41;-0.99', '0.36;-1.0', '0.54;-0.79']},
    
  },
};
  
  const competition = document.getElementById('competition');
  const localSel = document.getElementById('local');
  const visitaSel = document.getElementById('visita');
  
  function loadTeams() {
    const data = bases[competition.value];
    localSel.innerHTML = '<option value="">Seleccionar</option>';
    visitaSel.innerHTML = '<option value="">Seleccionar</option>';
    Object.keys(data).sort((a, b) => a.localeCompare(b, 'es')).forEach(t => {
      localSel.innerHTML += `<option>${t}</option>`;
      visitaSel.innerHTML += `<option>${t}</option>`;
    });
  }

  
  
  function calcular() {
    const data = bases[competition.value];
    if (!localSel.value || !visitaSel.value) return;
  
    const L = data[localSel.value];
    const V = data[visitaSel.value];
    const NLocal = localSel.options[localSel.selectedIndex].text;
    const NVisita = visitaSel.options[visitaSel.selectedIndex].text;  
    
    let xgL = L.ataque + L.PLUSLOCALataque - (V.defensa + V.PLUSVISITAdefensa);
    if (xgL < 0){
      xgL = 0;
    } 
    //xgL += .15; 

    let xgV = V.ataque + V.PLUSVISITAataque - (L.defensa + L.PLUSLOCALdefensa);
    if (xgV < 0){
      xgV = 0;
    } 
    //xgV += .15;

/**/ 
function poisson(k, lambda) {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function probMatch(xG_home, xG_away, NLocal, NVisita, maxGoals = 10) {

  // Matriz de probabilidades
  let probs = [];
  for (let i = 0; i <= maxGoals; i++) {
    probs[i] = [];
    for (let j = 0; j <= maxGoals; j++) {
      probs[i][j] = poisson(i, xG_home) * poisson(j, xG_away);
    }
  }

  let pWin = 0, pDraw = 0, pLoss = 0;

  for (let i = 0; i <= maxGoals; i++) {
    for (let j = 0; j <= maxGoals; j++) {
      if (i > j) pWin += probs[i][j];
      else if (i === j) pDraw += probs[i][j];
      else pLoss += probs[i][j];
    }
  }

  // Ambos anotan
  let pBTTSyes = 0;
  for (let i = 1; i <= maxGoals; i++) {
    for (let j = 1; j <= maxGoals; j++) {
      pBTTSyes += probs[i][j];
    }
  }
  let pBTTSno = 1 - pBTTSyes;

  // Over / Under
  let overUnder = {};
  [0.5, 1.5, 2.5, 3.5, 4.5].forEach(line => {
    let pOver = 0;
    for (let i = 0; i <= maxGoals; i++) {
      for (let j = 0; j <= maxGoals; j++) {
        if (i + j > line) pOver += probs[i][j];
      }
    }
    overUnder[`Más de ${line} Goles`] = +(pOver * 100).toFixed(1);
    overUnder[`Menos de ${line} Goles`] = +((1 - pOver) * 100).toFixed(1);
  });

  // Marcadores más probables
  let scores = [];
  for (let i = 0; i <= maxGoals; i++) {
    for (let j = 0; j <= maxGoals; j++) {
      scores.push({
        score: `${i}-${j}`,
        prob: probs[i][j]
      });
    }
  }

  scores.sort((a, b) => b.prob - a.prob);
  let topScores = scores.slice(0, 5).map(s => ({
    marcador: s.score,
    probabilidad: +(s.prob * 100).toFixed(2)
  }));

  return {
    [`Victoria ${NLocal}`]:  +(pWin * 100).toFixed(1) + "%",
    "Empate":  + (pDraw * 100).toFixed(1) + "%",
    [`Victoria ${NVisita}`]: +(pLoss * 100).toFixed(1) + "%",
    "Ambos Anotan (Sí)": +(pBTTSyes * 100).toFixed(1) + "%",
    "Ambos Anotan (No)": +(pBTTSno * 100).toFixed(1) + ('%') ,
    "Más/Menos": overUnder,
    "Marcadores más probables": topScores
  };
}


/**/
const res = probMatch(xgL, xgV, NLocal, NVisita);

const formatValue = (val) => {
  if (Array.isArray(val)) {
      // Para "Marcadores más probables", une cada marcador con una coma
      return val.map(obj => `\n ${obj.marcador} (${obj.probabilidad}%)`).join('');
  } else if (typeof val === 'object' && val !== null) {
      // Para "Over/Under", une sus propiedades
      return Object.entries(val).map(([k, v]) => `\n ${k}: ${v}`).join('%');
  }
  return val;
};

// Creamos una lista de líneas "Propiedad: Valor"
const textoLegible = Object.entries(res)
    .map(([key, value]) => `\n ${key}: ${formatValue(value)}`)
    .join('\n');




  
    document.getElementById('StatsLocal').innerHTML = 'Goles a Favor: ' + (L.ataque + L.PLUSLOCALataque).toFixed(2) + "<br>Goles en Contra: " + (L.defensa + L.PLUSLOCALdefensa).toFixed(2);

    document.getElementById('StatsVisita').innerHTML = 'Goles a Favor: ' + (V.ataque + V.PLUSVISITAataque).toFixed(2) + "<br>Goles en Contra: " + (V.defensa + V.PLUSVISITAdefensa).toFixed(2);
    
    document.getElementById('xgLocal').textContent = xgL.toFixed(3) + ' vs ' + xgV.toFixed(3);
    document.getElementById('xgVisita').textContent = textoLegible;
  }
  
  competition.addEventListener('change', loadTeams);
  localSel.addEventListener('change', calcular);
  visitaSel.addEventListener('change', calcular);
  
  loadTeams();

  const btn = document.getElementById('theme-toggle');
const body = document.body;

// Al cargar, verificar si ya existía una preferencia
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  btn.textContent = '🌙 Modo Oscuro';
}

btn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    btn.textContent = '🌙 Modo Oscuro';
  } else {
    localStorage.setItem('theme', 'dark');
    btn.textContent = '☀️ Modo Diurno';
  }
});

  
document.getElementById('btnCopiar').addEventListener('click', async () => {
  // 1. Seleccionamos el div (excluyendo el propio botón del texto copiado)
  const contenedor = document.getElementById('miContenedor');
  
  // 2. Obtenemos el texto. Usamos innerText porque respeta los saltos de línea visibles
  const textoACopiar = document.querySelector('.toCopiar').innerText.trim();
  contenedor.innerText.replace('📋 Copiar Resultados', '');

  try {
      // 3. Intentamos copiar al portapapeles
      await navigator.clipboard.writeText(textoACopiar);
      
      // 4. Feedback visual (Opcional)
      const boton = document.getElementById('btnCopiar');
      const textoOriginal = boton.textContent;
      boton.textContent = '✅ ¡Copiado!';
      setTimeout(() => boton.textContent = textoOriginal, 2000);
      
  } catch (err) {
      console.error('Error al copiar: ', err);
  }
});

document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('section-' + btn.dataset.section).classList.add('active');
  });
});

function spawnBalls(){
  const emojis=['⚽','🏆','⚽','🥅','⚽','🎽','⚽','🤑','⚽','🍀'];
  for(let i=0;i<67;i++){
    const b=document.createElement('div');
    b.className='ball';
    b.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    b.style.left=Math.random()*100+'vw';
    b.style.animationDuration=(8+Math.random()*16)+'s';
    b.style.animationDelay=(-Math.random()*20)+'s';
    b.style.fontSize=(16+Math.random()*20)+'px';
    document.body.appendChild(b);
  }
}
spawnBalls();

document.getElementById('swapBtn').addEventListener('click', function() {
  const selectA = document.getElementById('local');
  const selectB = document.getElementById('visita');

  // 1. Guardamos el valor de A en una "caja" temporal
  const temp = selectA.value;

  // 2. Pasamos el valor de B hacia A
  selectA.value = selectB.value;

  // 3. Pasamos el valor guardado en la "caja" hacia B
  selectB.value = temp;
  
  // Opcional: Si tienes funciones que calculan xG automáticamente, 
  // deberías llamarlas aquí para que los datos se actualicen al instante.
  // calcularProbabilidades(); 
  calcular();
});
/* ═══════════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════════ */
const navLinks = document.getElementById('navLinks');
const overlay  = document.getElementById('overlay');
const btnOpen  = document.getElementById('menuOpen');
const btnClose = document.getElementById('menuClose');

function openMenu()  { navLinks.classList.add('open');    overlay.classList.add('open'); }
function closeMenu() { navLinks.classList.remove('open'); overlay.classList.remove('open'); }

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (window.innerWidth <= 768) closeMenu();
  });
});

//// Calculadora de Montos MÓDULO 4

function fmt(n) { return n.toFixed(2); }

function calc() {
  const qG = parseFloat(document.getElementById('q_gana').value);
  const qE = parseFloat(document.getElementById('q_empate').value);
  const M  = parseFloat(document.getElementById('monto').value);

  if (!qG || !qE || !M || qG <= 1 || qE <= 1 || M <= 0) return;

  const sum = qG + qE;

  const sG = M * (qE / sum);
  const sE = M * (qG / sum);

  const retG = sG * qG;
  const retE = sE * qE;
  const netNormal = retG - M;

  const bonusTotal = retG + retE;
  const bonusNet   = bonusTotal - M;

  document.getElementById('stake_gana').textContent    = 'S/ ' + fmt(sG);
  document.getElementById('stake_empate').textContent  = 'S/ ' + fmt(sE);
  document.getElementById('pct_gana').textContent      = ((sG/M)*100).toFixed(1) + '% del total';
  document.getElementById('pct_empate').textContent    = ((sE/M)*100).toFixed(1) + '% del total';

  document.getElementById('ret_bruto').textContent      = 'S/ ' + fmt(retG);
  document.getElementById('net_normal').textContent     = 'ganancia neta: S/ ' + fmt(netNormal);
  document.getElementById('ret_empate_check').textContent = 'S/ ' + fmt(retE);
  document.getElementById('net_check').textContent      = 'ganancia neta: S/ ' + fmt(retE - M);

  document.getElementById('bonus_total').textContent   = 'S/ ' + fmt(bonusTotal);
  document.getElementById('bonus_badge').innerHTML     = 'Ganancia neta<br>S/ ' + fmt(bonusNet);
}

document.addEventListener('DOMContentLoaded', calc);

(function() {
  /* ── Stats patch ── */
  function patchStats(id, atkId, defId) {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new MutationObserver(() => {
      const html = el.innerHTML;
      const atkM = html.match(/Goles a Favor:\s*([\d.\-]+)/);
      const defM = html.match(/Goles en Contra:\s*([\d.\-]+)/);
      const aEl = document.getElementById(atkId);
      const dEl = document.getElementById(defId);
      if (aEl && atkM) aEl.textContent = atkM[1];
      if (dEl && defM) dEl.textContent = defM[1];
      el.style.display = 'none';
    });
    obs.observe(el, { childList: true, subtree: true, characterData: true });
  }
  patchStats('StatsLocal',  'stat-local-atk',  'stat-local-def');
  patchStats('StatsVisita', 'stat-visita-atk', 'stat-visita-def');

  /* ── xG score patch ── */
  const xgLocalEl = document.getElementById('xgLocal');
  const numLocal  = document.getElementById('xg-num-local');
  const numVisita = document.getElementById('xg-num-visita');
  new MutationObserver(() => {
    const raw   = xgLocalEl.textContent.trim();
    const parts = raw.split(' vs ');
    if (parts.length === 2) {
      numLocal.textContent  = parts[0];
      numVisita.textContent = parts[1];
      const l = parseFloat(parts[0]), v = parseFloat(parts[1]);
      numLocal.style.color  = l > v ? 'var(--lime)' : l < v ? 'var(--muted-fg)' : 'var(--cyan)';
      numVisita.style.color = v > l ? 'var(--lime)' : v < l ? 'var(--muted-fg)' : 'var(--cyan)';
      document.getElementById('xg-display').classList.add('has-result');
      document.getElementById('probs-card').classList.add('has-result');
    }
  }).observe(xgLocalEl, { childList: true, subtree: true, characterData: true });

  /* ── Theme label sync ── */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      const span = themeBtn.querySelector('span');
      if (span) span.textContent = isLight ? 'Modo Claro' : 'Modo Oscuro';
    });
  }


  /* ── Ordenar competiciones alfabéticamente ── */
  document.querySelectorAll('select#competition, select#tabla-liga').forEach(sel => {
    const placeholder = sel.querySelector('option[value=""]');
    const opts = Array.from(sel.querySelectorAll('option:not([value=""])'));
    opts.sort((a, b) =>
      a.textContent.replace(/[^\p{L}\p{N} ]/gu, '').trim()
        .localeCompare(b.textContent.replace(/[^\p{L}\p{N} ]/gu, '').trim(), 'es', { sensitivity: 'base' })
    );
    sel.innerHTML = '';
    if (placeholder) sel.appendChild(placeholder);
    opts.forEach(o => sel.appendChild(o));
  });
  
})();









