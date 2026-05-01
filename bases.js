

/* Mapa: nombre de liga en partidos → clave de bases[] */
//MAPA LEAGUES LIGAS KEYS LLAVES NOMBRES REALES Y EN BASE BD
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
  'UEFA Europa League': 'EuropaLeague',
  'UEFA Europa Conference League': 'ConferenceLeague',

  'UEFA Champions League': 'ChampionsLeague',



  'CONMEBOL Libertadores': 'CopaLibertadores',
  'CONMEBOL Sudamericana': 'CopaSudamericana',
  "Ligat Ha'al": 'LigathaAl',
  'J1 League': 'J1League',
  'Pro League': 'SaudiProLeague',
  'Premier League': 'EgyptianPremierLeague',
  'Primeira Liga': 'PrimeiraLiga',

  'Superliga': 'Superliga',
  'Eliteserien': 'Eliteserien',
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


  'El Gouna FC': 'El Gounah',
  'Haras': 'Haras El Hodood',
  
  'Future FC': 'Modern Sport',
  'El Geish': 'El Gaish',
  
//  'Al Taawon': 'Wadi Degla',
//  'Al-Ittihad FC': 'Al Ittihad',

  'Al Taawon': 'Al-Taawon',
  'Al-Ittihad FC': 'Al-Ittihad FC',
  
  'Al Riyadh': 'Al Riyadh',
  'Al-Qadisiyah FC': 'Al Qadsiah',

  'Hapoel Tel Aviv': 'H. Tel-Aviv',
  'Maccabi Haifa': 'Maccabi Haifa',
  
  'Al-Nassr': 'Al Nassr Riyadh',
  'Al-Ahli Jeddah': 'Al Ahli SC',
  
  'Atletico Madrid': 'Atlético de Madrid',
  'Arsenal': 'Arsenal',
  
  'Caracas FC': 'Caracas (Ven)',
  'Racing Club': 'Racing Club (Arg)',
  
  'Deportivo Riestra': 'Deportivo Riestra (Arg)',
  'Atletico Torque': 'Montevideo City (Uru)',
  
  'Juventud': 'Juventud (Uru)',
  'Puerto Cabello': 'Puerto Cabello (Ven)',
  
  'Mirassol': 'Mirassol (Bra)',
  'Always Ready': 'Always Ready (Bol)',

  'Platense': 'Platense (Arg)',
  'Santa Fe': 'Ind. Santa Fe (Col)',
  
  'Barcelona SC': 'Barcelona SC (Ecu)',
  'U. Catolica': 'U. Católica (Chi)',
  
  'Cienciano': 'Cienciano (Per)',
  'Atletico-MG': 'Atlético-MG (Bra)',
  
  'Palestino': 'Palestino (Chi)',
  'Gremio': 'Grêmio (Bra)',
  
  'Cerro Porteno': 'Cerro Porteño (Par)',
  'Palmeiras': 'Palmeiras (Bra)',
  
  'Estudiantes L.P.': 'Estudiantes L.P. (Arg)',
  'Flamengo': 'Flamengo (Bra)',
  
  'Universitario': 'Universitario (Per)',
  'Club Nacional': 'Nacional (Uru)',

  'Avispa Fukuoka': 'Avispa Fukuoka',
  'Sanfrecce Hiroshima': 'Hiroshima',
  
  'JEF United Chiba': 'Chiba',
  'Yokohama F. Marinos': 'Yokohama M.',
  
  'Vissel Kobe': 'Vissel Kobe',
  'Cerezo Osaka': 'C-Osaka',
  
  'Kyoto Sanga': 'Kyoto',
  'Gamba Osaka': 'G-Osaka',
  
  'Nagoya Grampus': 'Nagoya',
  'Fagiano Okayama': 'Okayama',
  
  'Urawa': 'Urawa',
  'Kawasaki Frontale': 'Kawasaki',
  
  'Kashiwa Reysol': 'Kashiwa',
  'FC Tokyo': 'Tokyo',
  
  'Mito Hollyhock': 'Mito',
  'Machida Zelvia': 'Machida',
  
  'Ironi Kiryat Shmona': 'Independiente',
  'Maccabi Netanya': 'Independiente',
  
  'Maccabi Bnei Raina': 'Independiente',
  'Hapoel Katamon': 'Independiente',
  
  //HERE
  'Al Kholood': 'Independiente',
  'Al-Fayha': 'Independiente',

  'Carabobo FC': 'Blooming',
  'Blooming': 'Independiente',
  
  'Vasco DA Gama': 'Independiente',
  'Olimpia': 'Independiente',

  'Al Kholood': 'Independiente',
  'Al-Fayha': 'Independiente',

  'Bolívar': 'Fluminense',
  'Blooming': 'Independiente',
  
  'Independ. Rivadavia': 'Independiente',
  'Deportivo La Guaira': 'Independiente',

  'Tigre ': 'Independiente',
  'Al-Fayha': 'Independiente',

  'Corinthians ': 'America de Cali',
  'Penarol': 'Independiente',
  
  'RB Bragantino': 'Independiente',
  'River Plate': 'Independiente',

  'Alianza Atletico': 'Independiente',
  'Macara': 'Independiente',
  
  'Independiente Medellin': 'Independiente',
  'Cusco': 'Independiente',
  
  'Al Kholood': 'Al Kholood',
  'Al-Fayha': 'Al Fayha',
  
  'Bolívar': 'Bolívar (Bol)',
  'Fluminense': 'Fluminense (Bra)',
  
  'Carabobo FC': 'Carabobo (Ven)',
  'Blooming': 'Blooming (Bol)',
  
  'Vasco DA Gama': 'Vasco (Bra)',
  'Olimpia': 'Olimpia (Par)',
  
  'Independ. Rivadavia': 'Independiente Rivadavia (Arg)',
  'Deportivo La Guaira': 'La Guaira (Ven)',
  
  'Tigre': 'Tigre (Arg)',
  'America de Cali': 'América de Cali (Col)',
  
  'Corinthians': 'Corinthians (Bra)',
  'Penarol': 'Peñarol (Uru)',
  
  'RB Bragantino': 'Bragantino (Bra)',
  'River Plate': 'River Plate (Arg)',

  'Alianza Atletico': 'Alianza Atl. (Per)',
  'Macara': 'Macará (Ecu)',
  
  'Independiente Medellin': 'Ind. Medellín (Col)',
  'Cusco': 'Cusco (Per)',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  // agrega los que necesites
  /* Para facilitarte mi querido YO del futuro
    'Independiente': 'Independiente',
    'Independiente': 'Independiente',
  */
};