const bases = {
    premier: {
      'Liverpool': {'ataque': 0.59, 'defensa': -0.5, 'PLUSataque': 0.38, 'PLUSdefensa': 0.35}, 'Bournemouth': {'ataque': 0.87, 'defensa': -1.38, 'PLUSataque': 0.06, 'PLUSdefensa': 0.59}, 'Aston Villa': {'ataque': 
      1.04, 'defensa': -0.91, 'PLUSataque': 0.47, 'PLUSdefensa': 0.35}, 
      'Newcastle': {'ataque': 0.46, 'defensa': -0.56, 'PLUSataque': 0.52, 'PLUSdefensa': 0.23}, 'Tottenham': {'ataque': 0.24, 'defensa': -0.89, 'PLUSataque': 0.06, 'PLUSdefensa': 0.24}, 'Burnley': {'ataque': 0.33, 'defensa': -1.23, 'PLUSataque': 0.29, 
      'PLUSdefensa': 0.42}, 
      'Sunderland': {'ataque': 0.37, 'defensa': -0.64, 'PLUSataque': 0.32, 'PLUSdefensa': 0.33}, 'West Ham': {'ataque': 0.47, 'defensa': -0.98, 'PLUSataque': 0.21, 'PLUSdefensa': -0.06}, 'Brighton': {'ataque': 0.47, 'defensa': -0.59, 'PLUSataque': 0.39, 'PLUSdefensa': -0.03}, 'Fulham': {'ataque': 0.17, 'defensa': -0.54, 'PLUSataque': 0.36, 'PLUSdefensa': 0.22}, 'Wolves': {'ataque': 0.12, 'defensa': -1.35, 'PLUSataque': 0.05, 'PLUSdefensa': -0.18}, 'Manchester City': {'ataque': 0.99, 'defensa': -0.17, 'PLUSataque': 0.51, 'PLUSdefensa': 0.25}, 'Nottingham Forest': {'ataque': 0.35, 'defensa': -0.94, 'PLUSataque': 0.37, 'PLUSdefensa': 0.35}, 'Brentford': {'ataque': 0.6, 'defensa': -1.03, 'PLUSataque': 0.59, 'PLUSdefensa': 0.25}, 'Chelsea': {'ataque': 0.9, 'defensa': -0.92, 'PLUSataque': 0.41, 'PLUSdefensa': 0.33}, 'Crystal Palace': {'ataque': 0.62, 'defensa': -0.84, 'PLUSataque': 0.23, 'PLUSdefensa': 0.22}, 'Manchester Utd': {'ataque': 0.9, 'defensa': -0.52, 'PLUSataque': 0.46, 'PLUSdefensa': 0.35}, 'Arsenal': {'ataque': 1.21, 'defensa': 0.02, 'PLUSataque': 0.38, 'PLUSdefensa': 0.53}, 'Leeds Utd': {'ataque': 0.55, 
      'defensa': -1.25, 'PLUSataque': 0.67, 'PLUSdefensa': 0.59}, 
      'Everton': {'ataque': 0.37, 'defensa': -0.76, 'PLUSataque': 0.12, 'PLUSdefensa': 0.28}
    },
    laLiga: {
      'Girona': {'ataque': 0.49, 'defensa': -0.73, 'PLUSataque': 0.1, 'PLUSdefensa': 0.36}, 
      'Rayo Vallecano': {'ataque': 0.43, 'defensa': -1.09, 'PLUSataque': 0.33, 'PLUSdefensa': 0.54}, 'Villarreal': {'ataque': 1.02, 'defensa': -0.2, 'PLUSataque': 0.51, 'PLUSdefensa': 0.41}, 'Real Oviedo': {'ataque': 0.05, 'defensa': -0.82, 'PLUSataque': 0.18, 'PLUSdefensa': -0.13}, 'Mallorca': {'ataque': 0.36, 'defensa': -0.91, 'PLUSataque': 0.28, 'PLUSdefensa': 0.43}, 'Barcelona': {'ataque': 1.38, 'defensa': -0.7, 'PLUSataque': 0.73, 'PLUSdefensa': 0.54}, 'Valencia': {'ataque': 0.2, 'defensa': -0.84, 'PLUSataque': 0.27, 'PLUSdefensa': 
      0.72}, 
      'Real Sociedad': {'ataque': 0.22, 'defensa': -0.55, 'PLUSataque': 0.29, 'PLUSdefensa': 0.29}, 'Alavés': {'ataque': 0.08, 'defensa': -0.44, 'PLUSataque': 0.02, 'PLUSdefensa': 0.31}, 'Levante': {'ataque': 0.52, 'defensa': -1.15, 'PLUSataque': 0.05, 'PLUSdefensa': -0.18}, 'Celta de Vigo': {'ataque': 0.25, 'defensa': -0.61, 'PLUSataque': 0.13, 'PLUSdefensa': 0.22}, 'Getafe': {'ataque': 0.07, 'defensa': -0.83, 
      'PLUSataque': 0.02, 'PLUSdefensa': 0.27}, 
      'Athletic Club': {'ataque': 0.49, 'defensa': -0.58, 'PLUSataque': 0.17, 'PLUSdefensa': 0.3}, 'Sevilla': {'ataque': 0.27, 'defensa': -0.98, 'PLUSataque': 0.22, 'PLUSdefensa': 0.14}, 'Espanyol': {'ataque': 0.71, 'defensa': -0.53, 'PLUSataque': 0.29, 'PLUSdefensa': 0.26}, 
      'Atlético de Madrid': {'ataque': 0.72, 'defensa': -0.47, 'PLUSataque': 0.72, 'PLUSdefensa': 0.31}, 'Elche': {'ataque': 0.35, 'defensa': -1.02, 'PLUSataque': 0.53, 'PLUSdefensa': 0.17}, 'Real Betis': {'ataque': 0.96, 'defensa': -0.76, 'PLUSataque': 0.45, 'PLUSdefensa': 0.14}, 'Real Madrid': {'ataque': 1.6, 'defensa': -0.34, 'PLUSataque': 0.45, 'PLUSdefensa': 0.42}, 'Osasuna': {'ataque': 0.34, 'defensa': -0.7, 'PLUSataque': 0.31, 'PLUSdefensa': 0.24}
    },
    serieA: {
      'Sassuolo': {'ataque': 0.48, 'defensa': -0.53, 'PLUSataque': 0.22, 'PLUSdefensa': 0.12}, 'Nápoles': {'ataque': 0.64, 'defensa': -0.28, 'PLUSataque': 0.38, 'PLUSdefensa': 0.49}, 'Genoa': {'ataque': 0.43, 'defensa': -0.64, 'PLUSataque': 0.07, 'PLUSdefensa': 0.34}, 'Lecce': {'ataque': 0.28, 'defensa': -0.69, 'PLUSataque': 0.23, 'PLUSdefensa': 0.33}, 'Roma': {'ataque': 0.93, 'defensa': -0.92, 'PLUSataque': 0.2, 'PLUSdefensa': 0.48}, 'Bolonia': {'ataque': 0.45, 'defensa': -0.86, 'PLUSataque': 0.3, 'PLUSdefensa': 0.29}, 'AC Milan': {'ataque': 0.84, 'defensa': -0.29, 'PLUSataque': 0.45, 'PLUSdefensa': 0.18}, 'Cremonese': {'ataque': 0.42, 'defensa': -0.62, 'PLUSataque': 0.19, 'PLUSdefensa': 0.32}, 'Como': {'ataque': 0.72, 'defensa': -0.18, 'PLUSataque': 0.23, 'PLUSdefensa': 0.37}, 'Lazio': {'ataque': 0.26, 'defensa': -0.66, 'PLUSataque': 0.4, 'PLUSdefensa': 0.27}, 'Cagliari': {'ataque': 0.35, 'defensa': -1.3, 'PLUSataque': -0.02, 'PLUSdefensa': 0.08}, 'Fiorentina': {'ataque': 0.37, 'defensa': -0.71, 'PLUSataque': 0.17, 'PLUSdefensa': 0.01}, 'Juventus': {'ataque': 0.75, 'defensa': -0.45, 'PLUSataque': 0.49, 'PLUSdefensa': 0.28}, 'Parma': {'ataque': 0.46, 'defensa': -0.59, 'PLUSataque': 0.14, 'PLUSdefensa': 0.18}, 'Atalanta': {'ataque': 
      0.45, 'defensa': -0.46, 'PLUSataque': 0.46, 'PLUSdefensa': 0.27}, 
      'Pisa': {'ataque': 0.26, 'defensa': -1.06, 'PLUSataque': 0.04, 'PLUSdefensa': 0.33}, 
      'Udinese': {'ataque': 0.45, 'defensa': -0.56, 'PLUSataque': 0.36, 'PLUSdefensa': 0.26}, 'Verona': {'ataque': 0.31, 'defensa': -0.83, 'PLUSataque': 0.12, 'PLUSdefensa': 0.53}, 'Inter': {'ataque': 0.88, 'defensa': -0.33, 'PLUSataque': 0.44, 'PLUSdefensa': 0.32}, 
      'Torino': {'ataque': 0.37, 'defensa': -0.28, 'PLUSataque': -0.04, 'PLUSdefensa': -0.03}
    },
    primeiraLiga: {
      'Casa Pia': {'ataque': 0.3, 'defensa': -0.7, 'PLUSataque': -0.06, 'PLUSdefensa': -0.01}, 'Sporting CP': {'ataque': 1.09, 'defensa': 0.07, 'PLUSataque': 0.4, 'PLUSdefensa': 0.4}, 'Nacional': {'ataque': 0.67, 
      'defensa': -0.76, 'PLUSataque': 0.21, 'PLUSdefensa': 0.22}, 
      'Gil Vicente': {'ataque': 0.26, 'defensa': -0.21, 'PLUSataque': 0.14, 'PLUSdefensa': 0.31}, 'Arouca': {'ataque': 0.18, 'defensa': -0.61, 'PLUSataque': 0.21, 'PLUSdefensa': 0.21}, 'AFS': {'ataque': 0.09, 'defensa': -0.96, 'PLUSataque': 0.11, 'PLUSdefensa': 0.25}, 'Famalicao': {'ataque': 0.73, 'defensa': -0.62, 'PLUSataque': 0.37, 'PLUSdefensa': 0.04}, 'Santa Clara': {'ataque': 0.18, 'defensa': -0.75, 'PLUSataque': 0.14, 'PLUSdefensa': 0.49}, 'SC Braga': {'ataque': 1.01, 'defensa': -0.62, 'PLUSataque': 0.22, 'PLUSdefensa': 0.18}, 'Tondela': {'ataque': 0.19, 'defensa': -0.83, 'PLUSataque': 0.26, 'PLUSdefensa': 0.11}, 'Moreirense': {'ataque': 0.57, 'defensa': -0.76, 'PLUSataque': 0.31, 'PLUSdefensa': 0.48}, 'Alverca': {'ataque': 0.08, 'defensa': -0.86, 'PLUSataque': 0.27, 'PLUSdefensa': 0.34}, 'Estoril': {'ataque': 0.52, 'defensa': -1.36, 'PLUSataque': 0.41, 'PLUSdefensa': 0.17}, 'Estrela': {'ataque': 0.1, 'defensa': -0.67, 'PLUSataque': 0.19, 'PLUSdefensa': 0.15}, 'Oporto': {'ataque': 1.12, 'defensa': 0.14, 'PLUSataque': 0.39, 'PLUSdefensa': 0.56}, 'Vitória Guimaraes': {'ataque': 0.31, 'defensa': -0.72, 'PLUSataque': 0.21, 'PLUSdefensa': 0.44}, 'Benfica': {'ataque': 0.95, 
      'defensa': 0.11, 'PLUSataque': 0.41, 'PLUSdefensa': 0.38}, 
      'Rio Ave': {'ataque': 0.35, 'defensa': -0.84, 'PLUSataque': 0.2, 'PLUSdefensa': 0.32}
    },
    arabiaSaudiPremierLeague: {
      'Damac': {'ataque': 0.12, 'defensa': -0.65, 'PLUSataque': 0.16, 'PLUSdefensa': 0.22}, 
      'Al Hazem': {'ataque': 0.09, 'defensa': -0.54, 'PLUSataque': 0.11, 'PLUSdefensa': 0.25}, 
      'Al-Ettifaq': {'ataque': 0.46, 'defensa': -0.87, 'PLUSataque': 0.12, 'PLUSdefensa': 0.09}, 'Al Kholood': {'ataque': 0.15, 'defensa': -0.62, 'PLUSataque': 0.3, 'PLUSdefensa': 0.38}, 'Al Ahli SC': {'ataque': 0.57, 'defensa': -0.19, 'PLUSataque': 0.33, 'PLUSdefensa': 0.25}, 'Neom SC': {'ataque': 0.71, 'defensa': -0.14, 'PLUSataque': 0.35, 'PLUSdefensa': 0.23}, 'Al-Hilal': {'ataque': 1.54, 'defensa': -0.36, 'PLUSataque': 0.72, 'PLUSdefensa': 0.45}, 'Al Riyadh': {'ataque': 0.11, 'defensa': -1.27, 'PLUSataque': 0.09, 'PLUSdefensa': 0.44}, 'Al-Taawon': 
      {'ataque': 0.92, 'defensa': -0.42, 'PLUSataque': 0.18, 'PLUSdefensa': 0.09}, 
      'Al Nassr Riyadh': {'ataque': 1.25, 'defensa': -0.26, 'PLUSataque': 0.55, 'PLUSdefensa': 0.37}, 'Al Shabab': {'ataque': 0.2, 'defensa': -0.94, 'PLUSataque': 0.09, 'PLUSdefensa': 0.22}, 'Al Khaleej': {'ataque': 0.54, 'defensa': -0.82, 'PLUSataque': 0.4, 'PLUSdefensa': 0.34}, 'Al Fateh': {'ataque': 0.74, 'defensa': -0.81, 'PLUSataque': 0.38, 'PLUSdefensa': 0.13}, 'Al Fayha': {'ataque': 0.23, 'defensa': -0.6, 'PLUSataque': 0.14, 'PLUSdefensa': 0.33}, 'Al Qadisiya': {'ataque': 0.8, 'defensa': -0.74, 'PLUSataque': 0.49, 'PLUSdefensa': 0.48}, 
      'Al Najma': {'ataque': 0.01, 'defensa': -1.12, 'PLUSataque': 0.08, 'PLUSdefensa': 0.39}, 
      'Al Okhdood': {'ataque': 0.31, 'defensa': -1.22, 'PLUSataque': 0.18, 'PLUSdefensa': 0.26}, 'Al-Ittihad FC': {'ataque': 0.54, 'defensa': -0.66, 'PLUSataque': 0.39, 'PLUSdefensa': 0.16}, 'Al Qadsiah': {'ataque': 0.4, 'defensa': -0.8, 'PLUSataque': 0.4, 'PLUSdefensa': 0.4}
    },
    championship: {
      'Preston': {'ataque': 0.37, 'defensa': -0.68, 'PLUSataque': 0.22, 'PLUSdefensa': 0.36196044921875004, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'V', 'L', 'V']}, 'Birmingham': {'ataque': 0.36, 'defensa': -0.68, 'PLUSataque': 0.53466552734375, 'PLUSdefensa': 0.37666015625, 'History': ['V', 'V', 'L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'L']}, 'Portsmouth': {'ataque': 0.25, 'defensa': -0.81, 'PLUSataque': 0.31260375976562504, 'PLUSdefensa': 0.40826110839843754, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'L', 'V', 'L']}, 'Coventry': {'ataque': 1.0, 'defensa': -0.38, 'PLUSataque': 0.4, 'PLUSdefensa': 0.4, 'History': ['V', 'V', 'L', 'V', 'V', 'L', 'V', 'L', 'L']}, 'Millwall': {'ataque': 0.43, 
      'defensa': -0.81, 'PLUSataque': 0.38, 'PLUSdefensa': 0.57, 'History': ['L', 'L', 'V', 'V', 'L', 'L', 'L', 'V', 'V', 'V', 'L']}, 'Stoke': {'ataque': 0.28, 'defensa': -0.84, 'PLUSataque': 0.1609326171875001, 'PLUSdefensa': 0.42488769531250004, 'History': ['V', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'V', 'L', 'V', 'L']}, 'Ipswich': {'ataque': 0.64, 'defensa': -0.1, 'PLUSataque': 0.46002441406250005, 'PLUSdefensa': 0.56284912109375, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'V', 'L', 'L', 'V', 'L', 'V']}, 'Charlton': {'ataque': 0.35, 'defensa': -0.86, 'PLUSataque': 0.09875, 'PLUSdefensa': -0.0884375, 'History': ['V', 'V', 'L', 'L', 'V', 'L', 'V', 'V', 'L', 'V', 'L', 'V']}, 'Hull': {'ataque': 0.47, 'defensa': -1.04, 'PLUSataque': 0.32620574951171877, 'PLUSdefensa': 0.21756530761718754, 'History': ['L', 'L', 'V', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V']}, 'Leicester': {'ataque': 0.35, 'defensa': -0.81, 'PLUSataque': 0.152578125, 'PLUSdefensa': 0.202421875, 'History': ['V', 'V', 'L', 'L', 'V', 'L', 'L', 'V', 'V', 'L', 'V', 'L']}, 'Derby': {'ataque': 0.33, 'defensa': -0.28, 'PLUSataque': 0.12179199218749998, 'PLUSdefensa': 0.3321759033203125, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'L', 'V', 'L']}, 'Norwich': {'ataque': 0.43, 'defensa': -0.96, 'PLUSataque': 0.06335266113281254, 'PLUSdefensa': 0.6458126831054688, 'History': ['V', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'V', 'L', 'V', 'L']}, 'Blackburn': {'ataque': 0.73, 'defensa': -0.46, 'PLUSataque': 0.33034089088439944, 'PLUSdefensa': 0.39303020477294925, 'History': ['L', 'L', 'V', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'L', 'V']}, 'Sheffield Utd': {'ataque': 0.83, 'defensa': -0.8, 'PLUSataque': 0.45033203125000004, 'PLUSdefensa': 0.23619140624999999, 'History': ['V', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'L', 'V', 'V']}, 'Bristol City': {'ataque': 0.56, 'defensa': -0.8, 'PLUSataque': 0.44396484375, 'PLUSdefensa': 0.38537109375, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'L', 'V', 'L', 'V']}, 'Southampton': {'ataque': 0.88, 'defensa': -0.72, 'PLUSataque': 0.24250000000000002, 'PLUSdefensa': 0.27125, 'History': ['V', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'L', 'V', 'V']}, 'Wrexham': {'ataque': 0.12, 'defensa': -1.06, 'PLUSataque': 0.4665625, 'PLUSdefensa': 0.4019140625, 'History': ['L', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'V', 'L', 'V', 'L']}, 
      'Oxford Utd': {'ataque': 0.12, 'defensa': -0.86, 'PLUSataque': 0.34, 'PLUSdefensa': 0.13519775390624997, 'History': ['V', 'V', 'L', 'L', 'V', 'L', 'V', 'L', 'V', 'V', 'L', 'V', 'L']}, 'Watford': {'ataque': 0.54, 'defensa': -0.34, 'PLUSataque': 0.39390625000000007, 'PLUSdefensa': 0.36623046875000004, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'L', 'V']}, 'West Brom': {'ataque': 0.39, 'defensa': -0.83, 'PLUSataque': 0.49848632812500004, 'PLUSdefensa': 0.53034912109375, 'History': ['V', 'V', 'L', 'V', 'L', 'L', 'L', 'V', 'V', 'L', 'L']}, 'Sheffield Wed': {'ataque': 0.2, 'defensa': -1.26, 'PLUSataque': 0.17661479949951175, 'PLUSdefensa': 0.10852897644042969, 'History': ['L', 'L', 'V', 'L', 'V', 'L', 'V', 'L', 'V', 'L', 'V', 'L']}, 'Middlesbrough': {'ataque': 0.35, 'defensa': -0.3, 'PLUSataque': 0.29290588378906257, 'PLUSdefensa': 0.10035064697265624, 'History': ['V', 'L', 'V', 'V', 'L', 'V', 'L', 'L', 'V', 'V', 'L', 'V', 'L']}, 'Swansea': {'ataque': 0.25, 'defensa': -0.88, 'PLUSataque': 0.31658203124999995, 'PLUSdefensa': 0.383046875, 'History': ['L', 'V', 'V', 'L', 'V', 'L', 'V', 'L', 'L', 'V', 'L', 'V']}, 'QPR': {'ataque': 0.31, 'defensa': -0.33, 'PLUSataque': 0.5548666381835938, 'PLUSdefensa': 0.4673226928710938, 'History': ['V', 'L', 'L', 'V', 'L', 'V', 'V', 'L', 'L', 'V', 'L', 'V']}
    },
    QSL: {
      'Al-Rayyan': {'ataque': 1.19, 'defensa': -0.32, 'PLUSataque': 0.3030859375, 'PLUSdefensa': 0.34507812500000007, 'History': ['L', 'L', 'L', 'V', 'L', 'V', 'V', 'V']}, 'Al Sailiya': {'ataque': 0.3, 'defensa': 
      -1.42, 'PLUSataque': 0.4, 'PLUSdefensa': 0.39, 'History': ['V', 'V', 'L', 'V', 'V', 'L', 'V', 'L', 'V', 'V']}, 'Shamal': {'ataque': 0.64, 'defensa': -0.81, 'PLUSataque': 0.33890624999999996, 'PLUSdefensa': 0.4830664062500001, 'History': ['L', 'V', 'L', 'L', 'V', 'V', 'L', 'L']}, 
      'Al Ahli Doha': {'ataque': 0.49, 'defensa': -0.29, 'PLUSataque': 0.15, 'PLUSdefensa': 0.0047973632812499944, 'History': ['V', 'L', 'V', 'L', 'L', 'V', 'L', 'V', 'V', 'V']}, 'Al Arabi': {'ataque': 1.22, 
      'defensa': -0.91, 'PLUSataque': 0.47, 'PLUSdefensa': 0.47, 'History': ['L', 'V', 
      'L', 'V', 'V', 'L', 'L', 'V']}, 
      'Al-Wakra': {'ataque': 0.87, 'defensa': -0.81, 'PLUSataque': 0.26875000000000004, 'PLUSdefensa': 0.3075, 'History': ['V', 'V', 'V', 'V', 'L', 'L', 'L', 'V', 'V']}, 'Al-Gharafa': {'ataque': 0.43, 'defensa': -0.73, 'PLUSataque': 0.5900000000000001, 'PLUSdefensa': 0.35250000000000004, 'History': ['L', 'L', 'V', 'L', 'V', 'V', 'V', 'L', 'L', 'V']}, 'Umm-Salal': {'ataque': 0.35, 'defensa': -1.35, 'PLUSataque': 0.35388671875, 'PLUSdefensa': 0.16378906250000003, 'History': ['V', 'L', 'V', 'V', 'L', 'V', 'V', 'L', 'L']}, 'Al-Duhail': {'ataque': 0.67, 'defensa': -0.87, 'PLUSataque': 0.6874072265625, 'PLUSdefensa': 0.16031738281249996, 'History': ['L', 'V', 'L', 'V', 'L', 'L', 'L']}, 'Al-Shahaniya': {'ataque': 0.2, 'defensa': -1.18, 'PLUSataque': 0.44830078125, 'PLUSdefensa': 0.2753125, 'History': ['V', 'V', 'L', 'L', 'V', 'L', 'L', 'V', 'L', 'V', 'L']}, 'Al-Sadd': {'ataque': 1.27, 'defensa': -0.98, 'PLUSataque': 0.22875000000000004, 'PLUSdefensa': 0.11796874999999998, 'History': ['L', 'V', 'L', 'V', 'L', 'L', 'V', 'L']}, 'Qatar SC': {'ataque': 0.35, 'defensa': -0.99, 'PLUSataque': 0.22875000000000006, 'PLUSdefensa': -0.014531249999999996, 'History': ['V', 'L', 'L', 'V', 'L', 'L', 'L', 'V', 'V', 'L']}
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
    const NLocal = localSel.options[localSel.selectedIndex].text;
    const NVisita = visitaSel.options[visitaSel.selectedIndex].text;  
    
    let xgL = L.ataque + L.PLUSataque - V.defensa;
    if (xgL < 0){
      xgL = 0;
    } 
    xgL += .15;

    let xgV = V.ataque - (L.defensa + L.PLUSdefensa);
    if (xgV < 0){
      xgV = 0;
    } 
    xgV += .15;

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




  
    document.getElementById('StatsLocal').innerHTML = 'Goles a Favor: ' + (L.ataque + L.PLUSataque).toFixed(2) + "<br>Goles en Contra: " + (L.defensa + L.PLUSdefensa).toFixed(2);

    document.getElementById('StatsVisita').innerHTML = 'Goles a Favor: ' + (V.ataque) + '<br>Goles en Contra: ' + V.defensa
    
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
