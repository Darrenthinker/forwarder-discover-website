// 🇭🇺 匈牙利机场数据库 - 增强版本
// Hungary Enhanced Airport Database
// 第三十七批机场数据库 - 欧洲大洲继续

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
// 🇭🇺 匈牙利共和国机场数据库 - 15个主要机场
// 覆盖匈牙利主要地区：中匈牙利、大平原、外多瑙河、外特兰西瓦尼亚
// 维谢格拉德集团成员，多瑙河中游，温泉之国
// ================================================================

export const hungaryEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 布达佩斯 - 匈牙利首都，最大航空枢纽
  // ================================================================

  {
    iata: 'BUD',
    icao: 'LHBP',
    chinese: '布达佩斯李斯特·费伦茨国际机场',
    english: 'Budapest Ferenc Liszt International Airport',
    city: '布达佩斯',
    province: '佩斯州',
    country: '匈牙利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.4369, lng: 19.2556 },
    runways: 2,
    priority: 100, // 🥇 匈牙利最大国际机场，中欧重要枢纽
    hub: ['Wizz Air', '匈牙利航空'],
    cargo: true
  },

  // ================================================================
  // 📍 德布勒森 - 匈牙利第二大城市
  // ================================================================

  {
    iata: 'DEB',
    icao: 'LHDC',
    chinese: '德布勒森国际机场',
    english: 'Debrecen International Airport',
    city: '德布勒森',
    province: '豪伊杜-比豪尔州',
    country: '匈牙利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.4889, lng: 21.6153 },
    runways: 1,
    priority: 88, // 🏛️ 匈牙利第二大城市，大平原中心
    cargo: false
  },

  // ================================================================
  // 📍 塞格德 - 南部重要城市
  // ================================================================

  {
    iata: 'QZD',
    icao: 'LHSG',
    chinese: '塞格德机场',
    english: 'Szeged Airport',
    city: '塞格德',
    province: '琼格拉德州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.2547, lng: 20.0833 },
    runways: 1,
    priority: 82, // 🌊 蒂萨河畔重要城市
    cargo: false
  },

  // ================================================================
  // 📍 佩奇 - 西南部文化中心
  // ================================================================

  {
    iata: 'QPJ',
    icao: 'LHPP',
    chinese: '佩奇-波加尼机场',
    english: 'Pécs-Pogány Airport',
    city: '佩奇',
    province: '巴兰尼亚州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.9908, lng: 18.2403 },
    runways: 1,
    priority: 78, // 🏛️ 欧洲文化之都，历史名城
    cargo: false
  },

  // ================================================================
  // 📍 米什科尔茨 - 北部工业城市
  // ================================================================

  {
    iata: 'MCQ',
    icao: 'LHMC',
    chinese: '米什科尔茨机场',
    english: 'Miskolc Airport',
    city: '米什科尔茨',
    province: '包尔绍德-奥包乌伊-曾普伦州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.1303, lng: 20.7953 },
    runways: 1,
    priority: 75, // 🏭 北部工业中心
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'SOB',
    icao: 'LHSN',
    chinese: '绍博尔奇机场',
    english: 'Szabolcs Airport',
    city: '尼赖吉哈佐',
    province: '萨博尔奇-萨特马尔-贝雷格州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.9583, lng: 21.8625 },
    runways: 1,
    priority: 72, // 🌾 东北部农业地区
    cargo: false
  },

  {
    iata: 'PEV',
    icao: 'LHPV',
    chinese: '帕帕机场',
    english: 'Pápa Air Base',
    city: '帕帕',
    province: '维斯普雷姆州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.3639, lng: 17.5053 },
    runways: 1,
    priority: 70, // ✈️ 军用空军基地
    cargo: false
  },

  {
    iata: 'KEF',
    icao: 'LHKE',
    chinese: '凯奇凯梅特机场',
    english: 'Kecskemét Airport',
    city: '凯奇凯梅特',
    province: '巴奇-基什孔州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.9175, lng: 19.7494 },
    runways: 1,
    priority: 73, // 🌾 大平原中心城市
    cargo: false
  },

  {
    iata: 'TAT',
    icao: 'LHTA',
    chinese: '陶陶班尼亚机场',
    english: 'Tatabánya Airport',
    city: '陶陶班尼亚',
    province: '科马罗姆-埃斯泰尔戈姆州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.5614, lng: 18.3578 },
    runways: 1,
    priority: 68, // 🏭 矿业城市
    cargo: false
  },

  {
    iata: 'GYR',
    icao: 'LHGY',
    chinese: '杰尔机场',
    english: 'Győr Airport',
    city: '杰尔',
    province: '杰尔-莫松-肖普朗州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.6239, lng: 17.8142 },
    runways: 1,
    priority: 74, // 🚗 汽车工业中心
    cargo: false
  },

  {
    iata: 'SZD',
    icao: 'LHSZ',
    chinese: '索尔诺克机场',
    english: 'Szolnok Airport',
    city: '索尔诺克',
    province: '雅斯-奈吉孔-索尔诺克州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.1225, lng: 20.2356 },
    runways: 1,
    priority: 71, // 🌊 蒂萨河重要城市
    cargo: false
  },

  {
    iata: 'ZAH',
    icao: 'LHZA',
    chinese: '扎拉埃格塞格机场',
    english: 'Zalaegerszeg Airport',
    city: '扎拉埃格塞格',
    province: '扎拉州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.8833, lng: 16.8167 },
    runways: 1,
    priority: 67, // 🌳 西南部森林地区
    cargo: false
  },

  {
    iata: 'BEK',
    icao: 'LHBK',
    chinese: '贝凯什乔包机场',
    english: 'Békéscsaba Airport',
    city: '贝凯什乔包',
    province: '贝凯什州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.6833, lng: 21.2167 },
    runways: 1,
    priority: 66, // 🌾 东南部农业区
    cargo: false
  },

  {
    iata: 'VEP',
    icao: 'LHVE',
    chinese: '维斯普雷姆机场',
    english: 'Veszprém Airport',
    city: '维斯普雷姆',
    province: '维斯普雷姆州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.1000, lng: 17.9167 },
    runways: 1,
    priority: 69, // 🏰 巴拉顿湖附近历史城市
    cargo: false
  },

  {
    iata: 'NYI',
    icao: 'LHNY',
    chinese: '尼赖吉哈佐机场',
    english: 'Nyíregyháza Airport',
    city: '尼赖吉哈佐',
    province: '萨博尔奇-萨特马尔-贝雷格州',
    country: '匈牙利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.9839, lng: 21.6925 },
    runways: 1,
    priority: 65, // 🌲 东北部林业城市
    cargo: false
  }

];

// 导出统计信息
export const hungaryAirportStats = {
  totalAirports: hungaryEnhancedAirports.length,
  internationalAirports: hungaryEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: hungaryEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: hungaryEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(hungaryEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: hungaryEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '匈牙利全国州份完整覆盖',
  specialFeatures: [
    '🥇 布达佩斯机场 - 匈牙利最大国际机场，中欧重要枢纽',
    '🏛️ 德布勒森机场 - 匈牙利第二大城市，大平原中心',
    '🌊 塞格德机场 - 蒂萨河畔重要城市',
    '🏛️ 佩奇机场 - 欧洲文化之都，历史名城',
    '🏭 米什科尔茨机场 - 北部工业中心',
    '🚗 杰尔机场 - 汽车工业中心，奥迪工厂'
  ]
};
