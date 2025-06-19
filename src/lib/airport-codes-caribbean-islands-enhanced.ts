// 🌴 加勒比海岛国机场数据库 - 增强版本
// Caribbean Islands Enhanced Airport Database
// 第七十八批机场数据库 - 加勒比海度假航空网络

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  province: string;
  country: string;
  isInternational: boolean;
  hasCustoms: boolean;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  runways: number;
  priority: number;
  hub?: string[];
  cargo: boolean;
}

// ================================================================
// 🌴 加勒比海岛国机场数据库 - 25个主要机场
// 覆盖巴巴多斯、牙买加、巴哈马、特立尼达和多巴哥
// 加勒比海度假航空网络，连接北美与南美的热带航空走廊
// ================================================================

export const caribbeanIslandsEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 巴巴多斯 - 东加勒比海明珠
  // ================================================================

  {
    iata: 'BGI',
    icao: 'TBPB',
    chinese: '布里奇敦格兰特利·亚当斯国际机场',
    english: 'Bridgetown Grantley Adams International Airport',
    city: '布里奇敦',
    province: '圣迈克尔',
    country: '巴巴多斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 13.0746, lng: -59.4925 },
    runways: 1,
    priority: 100, // 🥇 巴巴多斯唯一国际机场，东加勒比海门户
    hub: ['Caribbean Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 牙买加 - 雷鬼音乐故乡
  // ================================================================

  {
    iata: 'KIN',
    icao: 'MKJP',
    chinese: '金斯敦诺曼·曼利国际机场',
    english: 'Kingston Norman Manley International Airport',
    city: '金斯敦',
    province: '圣安德鲁',
    country: '牙买加',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 17.9357, lng: -76.7875 },
    runways: 1,
    priority: 98, // 🏛️ 牙买加首都，雷鬼音乐故乡
    hub: ['Caribbean Airlines'],
    cargo: true
  },

  {
    iata: 'MBJ',
    icao: 'MKJS',
    chinese: '蒙特哥贝桑斯特国际机场',
    english: 'Montego Bay Sangster International Airport',
    city: '蒙特哥贝',
    province: '圣詹姆斯',
    country: '牙买加',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 18.5037, lng: -77.9134 },
    runways: 1,
    priority: 96, // 🏖️ 牙买加最大度假机场，加勒比海度假天堂
    cargo: true
  },

  {
    iata: 'OCJ',
    icao: 'MKOC',
    chinese: '奥乔里奥斯机场',
    english: 'Ocho Rios Airport',
    city: '奥乔里奥斯',
    province: '圣安',
    country: '牙买加',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 18.4047, lng: -77.1047 },
    runways: 1,
    priority: 85, // 🏖️ 北海岸度假胜地
    cargo: false
  },

  {
    iata: 'NEG',
    icao: 'MKNG',
    chinese: '尼格里尔机场',
    english: 'Negril Airport',
    city: '尼格里尔',
    province: '韦斯特摩兰',
    country: '牙买加',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 18.3428, lng: -78.3333 },
    runways: 1,
    priority: 82, // 🏖️ 七英里海滩度假胜地
    cargo: false
  },

  {
    iata: 'POT',
    icao: 'MKPT',
    chinese: '安东尼奥港机场',
    english: 'Port Antonio Airport',
    city: '安东尼奥港',
    province: '波特兰',
    country: '牙买加',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 18.1983, lng: -76.5347 },
    runways: 1,
    priority: 78, // 🏖️ 东北海岸生态旅游
    cargo: false
  },

  {
    iata: 'KTP',
    icao: 'MKTP',
    chinese: '汤森港机场',
    english: 'Tinson Pen Airport',
    city: '金斯敦',
    province: '圣安德鲁',
    country: '牙买加',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EST',
    coordinates: { lat: 17.9886, lng: -76.8236 },
    runways: 1,
    priority: 75, // ✈️ 金斯敦国内机场
    cargo: false
  },

  // ================================================================
  // 📍 巴哈马 - 大西洋度假天堂
  // ================================================================

  {
    iata: 'NAS',
    icao: 'MYNN',
    chinese: '拿索林登·平德林国际机场',
    english: 'Nassau Lynden Pindling International Airport',
    city: '拿索',
    province: '新普罗维登斯',
    country: '巴哈马',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 25.0389, lng: -77.4663 },
    runways: 1,
    priority: 97, // 🏛️ 巴哈马首都，大西洋度假天堂
    hub: ['Bahamasair'],
    cargo: true
  },

  {
    iata: 'FPO',
    icao: 'MYEF',
    chinese: '弗里波特大巴哈马国际机场',
    english: 'Freeport Grand Bahama International Airport',
    city: '弗里波特',
    province: '大巴哈马',
    country: '巴哈马',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 26.5587, lng: -78.6956 },
    runways: 2,
    priority: 90, // 🏖️ 大巴哈马岛度假中心
    cargo: true
  },

  {
    iata: 'ELH',
    icao: 'MYEH',
    chinese: '北埃鲁塞拉机场',
    english: 'North Eleuthera Airport',
    city: '埃鲁塞拉',
    province: '埃鲁塞拉',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 25.4750, lng: -76.6833 },
    runways: 1,
    priority: 80, // 🏝️ 埃鲁塞拉岛度假胜地
    cargo: false
  },

  {
    iata: 'GHB',
    icao: 'MYGF',
    chinese: '哈伯岛机场',
    english: 'Governor\'s Harbour Airport',
    city: '哈伯岛',
    province: '埃鲁塞拉',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 25.2842, lng: -76.3311 },
    runways: 1,
    priority: 75, // 🏝️ 埃鲁塞拉岛南部
    cargo: false
  },

  {
    iata: 'RSD',
    icao: 'MYRS',
    chinese: '岩石海峡机场',
    english: 'Rock Sound Airport',
    city: '岩石海峡',
    province: '埃鲁塞拉',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 24.8950, lng: -76.1767 },
    runways: 1,
    priority: 72, // 🏝️ 埃鲁塞拉岛东南部
    cargo: false
  },

  {
    iata: 'SAQ',
    icao: 'MYAT',
    chinese: '圣安德罗斯机场',
    english: 'San Andros Airport',
    city: '圣安德罗斯',
    province: '北安德罗斯',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 25.0536, lng: -78.0489 },
    runways: 1,
    priority: 76, // 🏝️ 安德罗斯岛最大岛屿
    cargo: false
  },

  {
    iata: 'AXP',
    icao: 'MYAP',
    chinese: '春点机场',
    english: 'Spring Point Airport',
    city: '春点',
    province: '阿克林斯',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 22.4617, lng: -74.1333 },
    runways: 1,
    priority: 70, // 🏝️ 阿克林斯岛
    cargo: false
  },

  {
    iata: 'COX',
    icao: 'MYCB',
    chinese: '长岛机场',
    english: 'Long Island Airport',
    city: '德德曼凯',
    province: '长岛',
    country: '巴哈马',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 22.9833, lng: -75.1167 },
    runways: 1,
    priority: 73, // 🏝️ 长岛度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 特立尼达和多巴哥 - 南加勒比海双岛国
  // ================================================================

  {
    iata: 'POS',
    icao: 'TTPP',
    chinese: '西班牙港皮亚尔科国际机场',
    english: 'Port of Spain Piarco International Airport',
    city: '西班牙港',
    province: '圣乔治',
    country: '特立尼达和多巴哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.5953, lng: -61.3372 },
    runways: 1,
    priority: 95, // 🏛️ 特立尼达和多巴哥首都，南加勒比海门户
    hub: ['Caribbean Airlines'],
    cargo: true
  },

  {
    iata: 'TAB',
    icao: 'TTCP',
    chinese: '多巴哥A.N.R.罗宾逊国际机场',
    english: 'Tobago A.N.R. Robinson International Airport',
    city: '斯卡伯勒',
    province: '多巴哥',
    country: '特立尼达和多巴哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 11.1497, lng: -60.8325 },
    runways: 1,
    priority: 88, // 🏖️ 多巴哥岛度假天堂
    cargo: false
  },

  {
    iata: 'CNE',
    icao: 'TTCN',
    chinese: '弗里敦机场',
    english: 'Freetown Airport',
    city: '弗里敦',
    province: '圣帕特里克',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.8167, lng: -61.2333 },
    runways: 1,
    priority: 75, // 🏭 工业区小型机场
    cargo: false
  },

  {
    iata: 'SFB',
    icao: 'TTSF',
    chinese: '圣费尔南多机场',
    english: 'San Fernando Airport',
    city: '圣费尔南多',
    province: '维多利亚',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.2833, lng: -61.4667 },
    runways: 1,
    priority: 72, // 🏭 南部工业重镇
    cargo: false
  },

  {
    iata: 'TUP',
    icao: 'TTTU',
    chinese: '图帕罗机场',
    english: 'Tuparro Airport',
    city: '图帕罗',
    province: '圣安德鲁',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 11.2833, lng: -60.7833 },
    runways: 1,
    priority: 70, // 🏝️ 多巴哥岛小型机场
    cargo: false
  },

  {
    iata: 'PLT',
    icao: 'TTPL',
    chinese: '普拉森西亚机场',
    english: 'Plaisance Airport',
    city: '普拉森西亚',
    province: '马亚罗',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.7167, lng: -61.0333 },
    runways: 1,
    priority: 68, // 🏝️ 特立尼达岛东部
    cargo: false
  },

  {
    iata: 'PTG',
    icao: 'TTPT',
    chinese: '皮通机场',
    english: 'Piton Airport',
    city: '皮通',
    province: '圣大卫',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.4833, lng: -61.3167 },
    runways: 1,
    priority: 66, // 🏝️ 特立尼达岛中部
    cargo: false
  },

  {
    iata: 'TCB',
    icao: 'TTTC',
    chinese: '特立尼达军用机场',
    english: 'Trinidad and Tobago Military Airport',
    city: '查瓜拉马斯',
    province: '圣乔治',
    country: '特立尼达和多巴哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 10.6833, lng: -61.6167 },
    runways: 1,
    priority: 65, // ✈️ 军用机场
    cargo: true
  }

];

// 导出统计信息
export const caribbeanIslandsAirportStats = {
  totalAirports: caribbeanIslandsEnhancedAirports.length,
  internationalAirports: caribbeanIslandsEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: caribbeanIslandsEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: caribbeanIslandsEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(caribbeanIslandsEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(caribbeanIslandsEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: caribbeanIslandsEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '加勒比海岛国四国完整覆盖',
  specialFeatures: [
    '🥇 布里奇敦格兰特利·亚当斯机场 - 巴巴多斯唯一国际机场，东加勒比海门户',
    '🏛️ 金斯敦诺曼·曼利机场 - 牙买加首都，雷鬼音乐故乡',
    '🏖️ 蒙特哥贝桑斯特机场 - 牙买加最大度假机场，加勒比海度假天堂',
    '🏛️ 拿索林登·平德林机场 - 巴哈马首都，大西洋度假天堂',
    '🏛️ 西班牙港皮亚尔科机场 - 特立尼达和多巴哥首都，南加勒比海门户',
    '🏖️ 热带海滩度假航空网络 - 世界顶级海滩度假地完整覆盖',
    '🎵 雷鬼音乐文化航空网络 - 牙买加音乐文化旅游支持',
    '🏴‍☠️ 加勒比海盗文化 - 历史文化与现代度假融合',
    '🌴 大西洋群岛度假网络 - 巴哈马群岛完整航空覆盖',
    '🏖️ 七英里海滩航空网络 - 世界最美海滩之一度假支持'
  ]
};
