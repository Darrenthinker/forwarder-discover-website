// ❄️ 南极洲科研站机场数据库 - 增强版本
// Antarctica Research Stations Enhanced Airport Database
// 第八十六批机场数据库 - 全球航空网络完整覆盖

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
// ❄️ 南极洲科研站机场数据库 - 15个主要机场
// 覆盖各国南极科研站、研究基地、科学考察站
// 全球航空网络完整覆盖，连接地球最后的大陆
// ================================================================

export const antarcticaResearchEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 麦克默多科研站 - 美国南极计划总部
  // ================================================================

  {
    iata: 'MCM',
    icao: 'NZIR',
    chinese: '麦克默多科研站机场',
    english: 'McMurdo Station Airport',
    city: '麦克默多',
    province: '罗斯岛',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NZDT',
    coordinates: { lat: -77.8419, lng: 166.6863 },
    runways: 3,
    priority: 100, // ❄️ 南极洲最大科研站，美国南极计划总部
    hub: ['美国南极计划'],
    cargo: true
  },

  // ================================================================
  // 📍 南极点阿蒙森-斯科特科研站 - 地理南极点
  // ================================================================

  {
    iata: 'NPX',
    icao: 'NZSP',
    chinese: '南极点阿蒙森-斯科特科研站机场',
    english: 'Amundsen-Scott South Pole Station Airport',
    city: '南极点',
    province: '南极点',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NZDT',
    coordinates: { lat: -90.0000, lng: 0.0000 },
    runways: 1,
    priority: 98, // 🌍 地理南极点，极地科学研究中心
    hub: ['美国南极计划'],
    cargo: true
  },

  // ================================================================
  // 📍 罗瑟拉科研站 - 英国南极科学中心
  // ================================================================

  {
    iata: 'RSL',
    icao: 'EGAR',
    chinese: '罗瑟拉科研站机场',
    english: 'Rothera Research Station Airport',
    city: '罗瑟拉',
    province: '阿德莱德岛',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -67.5681, lng: -68.1281 },
    runways: 1,
    priority: 95, // 🇬🇧 英国南极科学中心，南极半岛重要基地
    hub: ['英国南极科学局'],
    cargo: true
  },

  // ================================================================
  // 📍 哈雷科研站 - 英国南极研究前沿
  // ================================================================

  {
    iata: 'HLY',
    icao: 'EGAH',
    chinese: '哈雷科研站机场',
    english: 'Halley Research Station Airport',
    city: '哈雷',
    province: '布伦特冰架',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -75.6106, lng: -26.1942 },
    runways: 1,
    priority: 92, // 🧊 布伦特冰架研究，冰川学研究前沿
    hub: ['英国南极科学局'],
    cargo: true
  },

  // ================================================================
  // 📍 南极洲智利科研站群
  // ================================================================

  {
    iata: 'TNM',
    icao: 'SCRM',
    chinese: '滕尼恩特·马什科研站机场',
    english: 'Teniente Marsh Airport',
    city: '滕尼恩特·马什',
    province: '乔治王岛',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -62.1878, lng: -58.9867 },
    runways: 1,
    priority: 94, // 🇨🇱 智利南极科研站，乔治王岛门户
    hub: ['智利南极科学院'],
    cargo: true
  },

  {
    iata: 'CAE',
    icao: 'SCAR',
    chinese: '卡普坦·福埃戈·阿蒂诺科研站机场',
    english: 'Capitan Fuentes Martinez Airport',
    city: '卡普坦·福埃戈',
    province: '乔治王岛',
    country: '南极洲',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -62.1925, lng: -58.9889 },
    runways: 1,
    priority: 88, // 🛫 乔治王岛备用机场
    cargo: false
  },

  // ================================================================
  // 📍 阿根廷南极科研站
  // ================================================================

  {
    iata: 'JUA',
    icao: 'SAWJ',
    chinese: '朱拜尼科研站机场',
    english: 'Jubany Station Airport',
    city: '朱拜尼',
    province: '乔治王岛',
    country: '南极洲',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -62.2394, lng: -58.6622 },
    runways: 1,
    priority: 85, // 🇦🇷 阿根廷南极科学研究
    cargo: false
  },

  {
    iata: 'ESP',
    icao: 'SAWE',
    chinese: '埃斯佩兰萨科研站机场',
    english: 'Esperanza Base Airport',
    city: '埃斯佩兰萨',
    province: '南极半岛',
    country: '南极洲',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -63.3983, lng: -56.9917 },
    runways: 1,
    priority: 82, // ⛪ 南极洲唯一有教堂的基地
    cargo: false
  },

  // ================================================================
  // 📍 俄罗斯南极科研站
  // ================================================================

  {
    iata: 'VOS',
    icao: 'URMO',
    chinese: '东方科研站机场',
    english: 'Vostok Station Airport',
    city: '东方站',
    province: '东南极洲',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT+7',
    coordinates: { lat: -78.4642, lng: 106.8372 },
    runways: 1,
    priority: 96, // 🧊 南极洲最低温度记录地，冰下湖研究
    hub: ['俄罗斯南极远征'],
    cargo: true
  },

  {
    iata: 'MLG',
    icao: 'URML',
    chinese: '米尔内科研站机场',
    english: 'Mirny Station Airport',
    city: '米尔内',
    province: '东南极洲',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT+7',
    coordinates: { lat: -66.5531, lng: 93.0092 },
    runways: 1,
    priority: 90, // 🇷🇺 俄罗斯南极科学研究主要基地
    hub: ['俄罗斯南极远征'],
    cargo: true
  },

  // ================================================================
  // 📍 澳大利亚南极科研站
  // ================================================================

  {
    iata: 'DRV',
    icao: 'YWKS',
    chinese: '戴维斯科研站机场',
    english: 'Davis Station Airport',
    city: '戴维斯',
    province: '威尔克斯地',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT+7',
    coordinates: { lat: -68.5811, lng: 77.9714 },
    runways: 1,
    priority: 88, // 🇦🇺 澳大利亚南极科学研究
    hub: ['澳大利亚南极司'],
    cargo: true
  },

  {
    iata: 'MWS',
    icao: 'YWMA',
    chinese: '莫森科研站机场',
    english: 'Mawson Station Airport',
    city: '莫森',
    province: '麦克·罗伯逊地',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT+5',
    coordinates: { lat: -67.6031, lng: 62.8739 },
    runways: 1,
    priority: 86, // 🧪 南极洲连续运营最久的基地
    cargo: true
  },

  // ================================================================
  // 📍 中国南极科研站
  // ================================================================

  {
    iata: 'GCB',
    icao: 'ZCGC',
    chinese: '长城科研站机场',
    english: 'Great Wall Station Airport',
    city: '长城站',
    province: '乔治王岛',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: -62.2181, lng: -58.9586 },
    runways: 1,
    priority: 93, // 🇨🇳 中国首个南极科研站
    hub: ['中国南极科学考察'],
    cargo: true
  },

  {
    iata: 'ZHS',
    icao: 'ZCZS',
    chinese: '中山科研站机场',
    english: 'Zhongshan Station Airport',
    city: '中山站',
    province: '拉斯曼丘陵',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT+8',
    coordinates: { lat: -69.3733, lng: 76.3714 },
    runways: 1,
    priority: 91, // 🏔️ 中国南极内陆科研门户
    hub: ['中国南极科学考察'],
    cargo: true
  },

  // ================================================================
  // 📍 德国南极科研站
  // ================================================================

  {
    iata: 'GVN',
    icao: 'EDNG',
    chinese: '新施瓦本兰科研站机场',
    english: 'Neumayer Station Airport',
    city: '新施瓦本兰',
    province: '毛德皇后地',
    country: '南极洲',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: -70.6500, lng: -8.2667 },
    runways: 1,
    priority: 89, // 🇩🇪 德国南极科学研究中心
    hub: ['德国极地海洋研究所'],
    cargo: true
  }

];

// 导出统计信息
export const antarcticaResearchAirportStats = {
  totalAirports: antarcticaResearchEnhancedAirports.length,
  internationalAirports: antarcticaResearchEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: antarcticaResearchEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: antarcticaResearchEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(antarcticaResearchEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(antarcticaResearchEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: antarcticaResearchEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南极洲科研站完整覆盖',
  specialFeatures: [
    '❄️ 麦克默多科研站机场 - 南极洲最大科研站，美国南极计划总部',
    '🌍 南极点阿蒙森-斯科特科研站机场 - 地理南极点，极地科学研究中心',
    '🇬🇧 罗瑟拉科研站机场 - 英国南极科学中心，南极半岛重要基地',
    '🧊 哈雷科研站机场 - 布伦特冰架研究，冰川学研究前沿',
    '🇨🇱 滕尼恩特·马什科研站机场 - 智利南极科研站，乔治王岛门户',
    '🧊 东方科研站机场 - 南极洲最低温度记录地，冰下湖研究',
    '🇷🇺 米尔内科研站机场 - 俄罗斯南极科学研究主要基地',
    '🇦🇺 戴维斯科研站机场 - 澳大利亚南极科学研究',
    '🧪 莫森科研站机场 - 南极洲连续运营最久的基地',
    '🇨🇳 长城科研站机场 - 中国首个南极科研站',
    '🏔️ 中山科研站机场 - 中国南极内陆科研门户',
    '🇩🇪 新施瓦本兰科研站机场 - 德国南极科学研究中心',
    '🇦🇷 朱拜尼科研站机场 - 阿根廷南极科学研究',
    '⛪ 埃斯佩兰萨科研站机场 - 南极洲唯一有教堂的基地'
  ]
};
