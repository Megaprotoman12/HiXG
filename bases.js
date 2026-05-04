

/* Mapa: nombre de liga en partidos → clave de bases[] */
//MAPA LEAGUES LIGAS KEYS LLAVES NOMBRES REALES Y EN BASE BD
HXG.LEAGUE_MAP = {
  // ── EUROPA ÉLITE ──────────────────────────────────
  39:  'PremierLeague',
  140: 'LaLiga',
  135: 'SerieA',
  78:  'Bundesliga',
  61:  'Ligue1',
  // ── EUROPA SEGUNDA LÍNEA ──────────────────────────
  40:  'Championship',
  94:  'PrimeiraLiga',
  203: 'SuperLig',
  88:  'Eredivisie',
  235: 'RussiaPremierLiga',
  144: 'JupilerProLeague',
  197: 'SuperLeague1',
  136: 'SerieB',
  79:  '_2Bundesliga',//'Bundesliga2',
  141: 'LaLiga2',
  207: 'SwissSuperLeague',
  // ── SUDAMÉRICA ────────────────────────────────────
  128: 'LigaArgentina',      // ⚠️
  71:  'BrasilSerieA',
  262: 'LigaMX',
  253: 'MLS',
  268: 'LigaUruguay',        // ⚠️
  239: 'LigaDimayor',        // ⚠️
  281: 'Liga1',          // ⚠️
  278: 'LigaParaguay',       // ⚠️
  72:  'BrasilSerieB',
  265: 'LigaChile',          // ⚠️
  258: 'LigaProEcuador',     // ⚠️
  // ── ASIA / ORIENTE MEDIO ─────────────────────────
  307: 'SaudiProLeague',
  98:  'J1League', // J1 League (Japón) 98:  'QatarStarsLeague',   // ⚠️
  188: 'UAEProLeague',       // ⚠️
  // ── ÁFRICA ───────────────────────────────────────
  233: 'EgyptianPremierLeague', // ⚠️
  288: 'PSLSudafrica',       // ⚠️
  // ── OTROS EUROPA ─────────────────────────────────
  119: 'DanishSuperliga',
  103: 'Eliteserien',
  113: 'Allsvenskan',
  383: 'LigatHaAl',          // ⚠️
  169: 'ChineseSuperLeague',
  333: 'UkrainePremierLeague', // ⚠️
  120: 'DanishDivision1',    // ⚠️
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
  
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  
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

  
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  
  'Kyoto Sanga': 'Kyoto',
  'Shimizu S-pulse': 'Shimizu',
  
  'Arminia Bielefeld': 'Arminia Bielefeld',
  'VfL Bochum': 'Bochum',
  
  'Holstein Kiel': 'Kiel',
  'Eintracht Braunschweig': 'Braunschweig',
  
  'Dynamo Dresden': 'Dynamo Dresden',
  '1. FC Kaiserslautern': 'Kaiserslautern',
  
  'Hull City': 'Hull',
  'Norwich': 'Norwich',
  
  'Sheffield Wednesday': 'Sheffield Wed',
  'West Brom': 'West Brom',
  
  'Millwall ': 'Millwall',
  'Oxford United': 'Oxford Utd',
  
  'Bristol City': 'Bristol City',
  'Stoke City': 'Stoke',
  
  'Nantes': 'Nantes',
  'Marseille': 'Marsella',
  
  'Bayern München': 'Bayern Múnich',
  '1. FC Heidenheim': 'Heidenheim',
  
  'Eintracht Frankfurt': 'Eintracht Fráncfort',
  'Hamburger SV': 'Hamburgo',
  
  '1899 Hoffenheim': 'Hoffenheim',
  'VfB Stuttgart': 'Stuttgart',
  
  'Union Berlin': 'Union Berlin',
  '1. FC Köln': 'Colonia',
  
  'Werder Bremen': 'Werder Bremen',
  'FC Augsburg': 'Augsburgo',
  
  'Brentford': 'Brentford',
  'West Ham': 'West Ham',
  
  'Newcastle ': 'Newcastle',
  'Brighton': 'Brighton',
  
  'Wolves': 'Wolves',
  'Sunderland': 'Sunderland',
  
  'Nacional': 'Nacional',
  'AVS': 'AFS',
  
  'Como': 'Como',
  'Napoli': 'Nápoles',
  
  'Arsenal': 'Arsenal',
  'Fulham': 'Fulham',
  
  'Alaves': 'Alavés',
  'Athletic Club': 'Athletic Club',
  
  'Metz': 'Metz',
  'Monaco': 'Mónaco',
  
  'FC Schalke 04': 'Schalke',
  'Fortuna Düsseldorf': 'Fortuna Düsseldorf',
  
  'Botafogo': 'Botafogo',
  'Remo': 'Remo',
  
  'Nice': 'Niza',
  'Lens': 'Lens',
  
  'FC Porto': 'Oporto',
  'Alverca': 'Alverca',
  
  'Palmeiras': 'Palmeiras',
  'Santos': 'Santos',
  
  'Vitoria': 'Vitória',
  'Coritiba': 'Coritiba',
  
  'Atletico Paranaense': 'Athletico-PR',
  'Gremio': 'Grêmio',
  
  'Cruzeiro': 'Cruzeiro',
  'Atletico-MG': 'Atlético-MG',

  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  'Oleksandria': 'Oleksandriya',
  'Kolos Kovalivka': 'Kolos Kovalivka',
  /*
  'Dinamo Makhachkala': 'Independiente',
  'FC Rostov': 'Independiente',*/
  
  'Veres Rivne': 'Veres-Rivne',
  'Epitsentr Dunayivtsi': 'Epitsentr',
  /*
  'Baltika': 'Independiente',
  'Rubin': 'Independiente',*/
  
  'Karpaty': 'Karpaty Lviv',
  'LNZ Cherkasy': 'LNZ Cherkasy',
  /*
  'CSKA Moscow ': 'Independiente',
  'Zenit': 'Independiente',*/
  
  'KVC Westerlo': 'Westerlo',
  'OH Leuven': 'Leuven',
  /*
  'Lommel United': 'Independiente',
  'Beerschot VA': 'Independiente',*/
  
  'St. Truiden': 'St. Truiden',
  'Union St. Gilloise': 'Royale Union SG',
  
  'Tigres UANL': 'Tigres UANL',
  'Guadalajara Chivas': 'Guadalajara',
  
  'Independiente': 'Charleroi',
  'Independiente': 'Genk',
  
  'Independiente': 'Atlas',
  'Independiente': 'Cruz Azul',
  
  'ADT': 'AD Tarma',
  'Atletico Grau': 'Grau',
  
  'Cienciano': 'Cienciano',
  'Comerciantes Unidos': 'Comerciantes Unidos',
  
  'Alianza Lima': 'Alianza Lima',
  'UCV Moquegua': 'Moquegua',
  
  'Chelsea': 'Chelsea',
  'Nottingham Forest': 'Nottingham Forest',
  
  'Djurgardens IF': 'Djurgarden',
  'IFK Goteborg': 'Göteborg',
  
  'Halmstad': 'Halmstad',
  'IF Brommapojkarna': 'Brommapojkarna',
  
  'Club Deportivo Los Chankas': 'Los Chankas',
  'Deportivo Garcilaso': 'Deportivo Garcilaso',
  
  'AS Roma': 'Roma',
  'Fiorentina': 'Fiorentina',
  
  'Everton': 'Everton',
  'Manchester City': 'Manchester City',
  
  'Sporting CP': 'Sporting CP',
  'Guimaraes': 'Vitória Guimaraes',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
  'Independiente': 'Independiente',
  'Independiente': 'Independiente',
  
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