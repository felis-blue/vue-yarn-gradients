export interface Color {
  name: string;
  colorNumber: string;
  hex: string | null;
  textColor: 'light' | 'dark';
  hueGroupStart: boolean;
}

export function findColor(colorNumber: string) {
  return colors.find((color) => color.colorNumber === colorNumber);
}

export const noColor: Color = { name: 'Remove color', colorNumber: '000', hex: null, textColor: 'dark', hueGroupStart: true };

export const colors = [
  // group 1: neutral
  { name: 'weiß', colorNumber: '005', hex: '#F8F8F9', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'hellgrau', colorNumber: '315', hex: '#E1E2E3', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'hellgrau-toe', colorNumber: '1009', hex: '#D4DEE4', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'asche-3k', colorNumber: '3212', hex: '#C7D8DC', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'stahl', colorNumber: '450', hex: '#CBD1DE', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'beton', colorNumber: '620', hex: '#CCC9C6', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'silber-mel', colorNumber: '300', hex: '#B3BCBC', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'stone', colorNumber: '695', hex: '#B1BCBA', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'blei-mel', colorNumber: '010', hex: '#ABB3B6', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'kies-mel', colorNumber: '400', hex: '#BAB0AC', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'zinn', colorNumber: '015', hex: '#8F9094', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'mittelgrau', colorNumber: '170', hex: '#768186', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'grau-mel', colorNumber: '355', hex: '#6A7075', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'khaki-toe', colorNumber: '1003', hex: '#646D5C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'khaki', colorNumber: '435', hex: '#646D56', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'asche-mel', colorNumber: '625', hex: '#444745', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'anthrazit-mel', colorNumber: '305', hex: '#3F4447', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'anthrazit', colorNumber: '175', hex: '#353B37', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'graphit-mel', colorNumber: '520', hex: '#2C3032', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'schwarz', colorNumber: '070', hex: '#222324', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'tiefschwarz', colorNumber: '340', hex: '#1D2022', textColor: 'light', hueGroupStart: false } as Color,

  // group 2: beige/braun
  { name: 'wollweiß', colorNumber: '310', hex: '#F9F7F1', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'creme', colorNumber: '110', hex: '#F5F0E5', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'hellbeige', colorNumber: '115', hex: '#E5DFD4', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'alabaster', colorNumber: '495', hex: '#D6C8BA', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'beige', colorNumber: '120', hex: '#DCC9B2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'beige-toe', colorNumber: '1011', hex: '#D6C49D', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'schlamm', colorNumber: '155', hex: '#A38C7A', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'lehm', colorNumber: '790', hex: '#AE8F73', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'mocca', colorNumber: '125', hex: '#B47450', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'taupe', colorNumber: '360', hex: '#655D54', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'braun-mel', colorNumber: '525', hex: '#5E4F4B', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'nuss', colorNumber: '615', hex: '#6D4633', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'braun', colorNumber: '135', hex: '#4B3027', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'schokolade', colorNumber: '140', hex: '#2A2624', textColor: 'light', hueGroupStart: false } as Color,

  // group 3: red
  { name: 'rose', colorNumber: '185', hex: '#FBD5D9', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'babe', colorNumber: '700', hex: '#F9B9BE', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'koralle-toe', colorNumber: '1015', hex: '#EA8B8F', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'lachs', colorNumber: '430', hex: '#F07278', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'coralle-toe', colorNumber: '1022', hex: '#E76E7C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'rost', colorNumber: '500', hex: '#D95851', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'koralle', colorNumber: '730', hex: '#EA4A4A', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'hummer', colorNumber: '190', hex: '#D94A5D', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'kirsche', colorNumber: '325', hex: '#D83B49', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'mars', colorNumber: '795', hex: '#DB3941', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'ziegel', colorNumber: '245', hex: '#A73B41', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'rot', colorNumber: '195', hex: '#B32B3F', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'salsa', colorNumber: '735', hex: '#B92130', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'burgund', colorNumber: '200', hex: '#92232E', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'malaga', colorNumber: '205', hex: '#8E2232', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'kastanie', colorNumber: '685', hex: '#7D2B2A', textColor: 'light', hueGroupStart: false } as Color,

  // group 4: orange
  { name: 'muschel', colorNumber: '560', hex: '#F5E5D8', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'peach', colorNumber: '650', hex: '#F3D8CE', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'quarz', colorNumber: '425', hex: '#F7B4A1', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'mango', colorNumber: '370', hex: '#F68E5A', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'orange', colorNumber: '460', hex: '#F88520', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'neonorange', colorNumber: '775', hex: '#FE7139', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'mandarine-3k', colorNumber: '3016', hex: '#F8792A', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'apfelsine-3k', colorNumber: '3019', hex: '#F15F42', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'cognac', colorNumber: '240', hex: '#D76728', textColor: 'light', hueGroupStart: false } as Color,

  // group 5: yellow
  { name: 'vanille', colorNumber: '215', hex: '#FBF0D1', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'jalousie', colorNumber: '605', hex: '#FFEC80', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'gold', colorNumber: '255', hex: '#F9DF6F', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'neongelb', colorNumber: '755', hex: '#F8FB46', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'kiwi', colorNumber: '750', hex: '#DFE12E', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'sonne', colorNumber: '725', hex: '#FBD640', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'wüste-3k', colorNumber: '3179', hex: '#D8B961', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'karotte-3k', colorNumber: '3010', hex: '#FBBC46', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'limette', colorNumber: '690', hex: '#DFCE0D', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'kurkuma', colorNumber: '675', hex: '#F0B625', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'curry', colorNumber: '455', hex: '#D0871B', textColor: 'light', hueGroupStart: false } as Color,

  // group 6: green
  { name: 'erbse', colorNumber: '260', hex: '#E1EEE2', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'l-green-toe', colorNumber: '1001', hex: '#D8ECD3', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'ölbaum-3k', colorNumber: '3218', hex: '#C1CFC5', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'hemlock-toe', colorNumber: '1014', hex: '#A9DCC2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'gurke-3k', colorNumber: '3136', hex: '#98E6B1', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'grasgrün-toe', colorNumber: '1010', hex: '#88DDB0', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'blattgrün', colorNumber: '265', hex: '#C9DA70', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'pistazie-toe', colorNumber: '1004', hex: '#BBC36E', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'apfel', colorNumber: '515', hex: '#77D15C', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'froschgrün', colorNumber: '390', hex: '#66AC4A', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'farn', colorNumber: '465', hex: '#5D9727', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'waldmeister', colorNumber: '785', hex: '#009856', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'absinth', colorNumber: '380', hex: '#009160', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'billard-3k', colorNumber: '3165', hex: '#26713C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'dunkelgrün-toe', colorNumber: '1006', hex: '#50573C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'khaki2-toe', colorNumber: '1008', hex: '#4D4C37', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'tannengrün', colorNumber: '580', hex: '#274439', textColor: 'light', hueGroupStart: false } as Color,

  // group 7: cyan
  { name: 'libelle', colorNumber: '025', hex: '#C2E4EB', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'pistazie', colorNumber: '550', hex: '#BDE7D9', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'meerblau-toe', colorNumber: '1020', hex: '#B7E4EF', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'türkis2-toe', colorNumber: '1013', hex: '#95E1EC', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'jade', colorNumber: '645', hex: '#9CCDC9', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'nymphe-3k', colorNumber: '3123', hex: '#85E1E2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'türkis-toe', colorNumber: '1005', hex: '#57DEEE', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'türkis3-toe', colorNumber: '1023', hex: '#42CFC2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'capri', colorNumber: '035', hex: '#59C2DB', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'riviera', colorNumber: '275', hex: '#35D1DA', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'opal', colorNumber: '640', hex: '#43B8B2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'oceangrün', colorNumber: '280', hex: '#389B8E', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'hellpetrol', colorNumber: '330', hex: '#4C8FA9', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'türkis-3k', colorNumber: '3112', hex: '#00B3C5', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'lagune-3k', colorNumber: '3111', hex: '#00ACB3', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'petrol-toe', colorNumber: '1012', hex: '#2F8586', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'karibik', colorNumber: '780', hex: '#0A99CA', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'smaragd', colorNumber: '670', hex: '#317166', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'dschungel-3k', colorNumber: '3116', hex: '#007784', textColor: 'light', hueGroupStart: false } as Color,

  // group 8: blue
  { name: 'hellblau', colorNumber: '020', hex: '#D6E8F0', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'aqua', colorNumber: '365', hex: '#B5DBF0', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'hellblau-toe', colorNumber: '1018', hex: '#A6C6D7', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'cloud', colorNumber: '710', hex: '#9DBDDD', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'maulwurf-3k', colorNumber: '3225', hex: '#83A4B2', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'blau-toe', colorNumber: '1002', hex: '#65ADE0', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'jeans-mel', colorNumber: '395', hex: '#709AC8', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'taubenblau', colorNumber: '045', hex: '#6C92B2', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'ciel', colorNumber: '575', hex: '#5C99D4', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'ultramarine', colorNumber: '040', hex: '#4B85CC', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'granit', colorNumber: '375', hex: '#526371', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'azur', colorNumber: '635', hex: '#297BCB', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'indigo-mel', colorNumber: '590', hex: '#426088', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'preuss-blau', colorNumber: '570', hex: '#405D7A', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'seablue', colorNumber: '480', hex: '#067CC4', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'denim-mel', colorNumber: '630', hex: '#3F4856', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'lapis', colorNumber: '760', hex: '#364FB3', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'petrol', colorNumber: '335', hex: '#2B4A5C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'midnightblau', colorNumber: '565', hex: '#29426D', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'enzian', colorNumber: '440', hex: '#2344AE', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'atlantik', colorNumber: '050', hex: '#283C70', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'navy-mel', colorNumber: '530', hex: '#2D323C', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'royal', colorNumber: '055', hex: '#262E4D', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'schatten', colorNumber: '060', hex: '#222735', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'marine', colorNumber: '345', hex: '#212429', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'navy', colorNumber: '065', hex: '#1D2026', textColor: 'light', hueGroupStart: false } as Color,

  // group 9: purple
  { name: 'lavendel', colorNumber: '075', hex: '#D7CEE2', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'magic', colorNumber: '800', hex: '#CBC9EB', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'krokus', colorNumber: '705', hex: '#C5C1E3', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'erika', colorNumber: '405', hex: '#D0B9D5', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'flieder-toe', colorNumber: '1007', hex: '#B07FC6', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'violett', colorNumber: '415', hex: '#886782', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'oleander', colorNumber: '660', hex: '#994C94', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'distel', colorNumber: '740', hex: '#7B3987', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'turmalin-3k', colorNumber: '3077', hex: '#523F9F', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'bischof-3k', colorNumber: '3066', hex: '#692D88', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'aubergine', colorNumber: '745', hex: '#4A3A6E', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'ultraviolett', colorNumber: '770', hex: '#403BA4', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'lila', colorNumber: '095', hex: '#3D2D53', textColor: 'light', hueGroupStart: false } as Color,

  // group 10: magenta
  { name: 'pastellrosa', colorNumber: '490', hex: '#FDECF1', textColor: 'dark', hueGroupStart: true } as Color,
  { name: 'babyrosa', colorNumber: '350', hex: '#FCDEE9', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'rose-toe', colorNumber: '1019', hex: '#FAC9DB', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'rosa', colorNumber: '585', hex: '#FBBBD1', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'flieder', colorNumber: '555', hex: '#D7B6C0', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'anemone', colorNumber: '445', hex: '#F2ADC5', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'amethyst', colorNumber: '085', hex: '#D69FC8', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'candy', colorNumber: '420', hex: '#FF9EC3', textColor: 'dark', hueGroupStart: false } as Color,
  { name: 'fuchsia', colorNumber: '210', hex: '#E35AA2', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'aubergine-toe', colorNumber: '1016', hex: '#C05DA4', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'neonpink', colorNumber: '765', hex: '#EE4BBA', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'phlox-3k', colorNumber: '3049', hex: '#C6587E', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'beere-toe', colorNumber: '1017', hex: '#B153A7', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'himbeere', colorNumber: '320', hex: '#C34387', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'beere', colorNumber: '610', hex: '#C73F5B', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'bonbon', colorNumber: '715', hex: '#C93B61', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'hotpink', colorNumber: '720', hex: '#C82F7E', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'brombeere', colorNumber: '655', hex: '#7F2451', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'aubergine2-toe', colorNumber: '1021', hex: '#3F2936', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'vino', colorNumber: '680', hex: '#47203A', textColor: 'light', hueGroupStart: false } as Color,
  { name: 'chianti', colorNumber: '470', hex: '#3C242D', textColor: 'light', hueGroupStart: false } as Color,

  // group 11: remove
  noColor,
];
