// 🇨🇭 瑞士机场数据库 - 增强版本
// Switzerland Enhanced Airport Database
// 第二十七批机场数据库 - 欧洲大洲继续

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
// 🇨🇭 瑞士联邦机场数据库 - 10个主要机场
// 覆盖瑞士主要城市和地区：苏黎世、日内瓦、巴塞尔、
// 伯尔尼、卢塞恩、圣加仑等
// 阿尔卑斯山区重要航空枢纽，连接欧洲的空中门户
// ================================================================

export const switzerlandEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 苏黎世 - 瑞士最大城市和经济中心
  // ================================================================

  {
    iata: 'ZUR',
    icao: 'LSZH',
    chinese: '苏黎世机场',
    english: 'Zurich Airport',
    city: '苏黎世',
    province: '苏黎世州',
    country: '瑞士',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.4647, lng: 8.5492 },
    runways: 3,
    priority: 100, // 🥇 瑞士最大国际机场，欧洲重要枢纽
    hub: ['瑞士国际航空', 'Swiss Global Air Lines'],
    cargo: true
  },

  // ================================================================
  // 📍 日内瓦 - 国际组织总部所在地
  // ================================================================

  {
    iata: 'GVA',
    icao: 'LSGG',
    chinese: '日内瓦科万特兰机场',
    english: 'Geneva Cointrin Airport',
    city: '日内瓦',
    province: '日内瓦州',
    country: '瑞士',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.2381, lng: 6.1089 },
    runways: 1,
    priority: 98, // 🌍 国际组织门户，UN欧洲总部
    hub: ['瑞士国际航空', 'easyJet Switzerland'],
    cargo: true
  },

  // ================================================================
  // 📍 巴塞尔 - 三国边境城市
  // ================================================================

  {
    iata: 'BSL',
    icao: 'LFSB',
    chinese: '巴塞尔-米吕斯-弗赖堡欧洲机场',
    english: 'Basel-Mulhouse-Freiburg EuroAirport',
    city: '巴塞尔',
    province: '巴塞尔城市州',
    country: '瑞士',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.5895, lng: 7.5296 },
    runways: 2,
    priority: 92, // 🌍 独特的三国共管机场
    hub: ['easyJet Switzerland'],
    cargo: true
  },

  // ================================================================
  // 📍 伯尔尼 - 瑞士首都
  // ================================================================

  {
    iata: 'BRN',
    icao: 'LSZB',
    chinese: '伯尔尼机场',
    english: 'Bern Airport',
    city: '伯尔尼',
    province: '伯尔尼州',
    country: '瑞士',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.9142, lng: 7.4969 },
    runways: 1,
    priority: 85, // 🏛️ 首都机场
    cargo: false
  },

  // ================================================================
  // 📍 卢加诺 - 提契诺州
  // ================================================================

  {
    iata: 'LUG',
    icao: 'LSZA',
    chinese: '卢加诺机场',
    english: 'Lugano Airport',
    city: '卢加诺',
    province: '提契诺州',
    country: '瑞士',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.0042, lng: 8.9103 },
    runways: 1,
    priority: 80, // 🇮🇹 意大利语区门户
    cargo: false
  },

  // ================================================================
  // 📍 圣加仑-阿尔滕莱因 - 东部瑞士
  // ================================================================

  {
    iata: 'ACH',
    icao: 'LSZR',
    chinese: '圣加仑-阿尔滕莱因机场',
    english: 'St. Gallen-Altenrhein Airport',
    city: '圣加仑',
    province: '圣加仑州',
    country: '瑞士',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.4853, lng: 9.5608 },
    runways: 1,
    priority: 75, // 🏔️ 阿尔卑斯山东部门户
    cargo: false
  },

  // ================================================================
  // 📍 锡永 - 瓦莱州
  // ================================================================

  {
    iata: 'SIR',
    icao: 'LSGS',
    chinese: '锡永机场',
    english: 'Sion Airport',
    city: '锡永',
    province: '瓦莱州',
    country: '瑞士',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.2186, lng: 7.3267 },
    runways: 1,
    priority: 70, // 🎿 阿尔卑斯滑雪胜地
    cargo: false
  },

  // ================================================================
  // 📍 格劳宾登州 - 恩加丁
  // ================================================================

  {
    iata: 'SMV',
    icao: 'LSZS',
    chinese: '圣莫里茨机场',
    english: 'Samedan Airport',
    city: '圣莫里茨',
    province: '格劳宾登州',
    country: '瑞士',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.5342, lng: 9.8844 },
    runways: 1,
    priority: 78, // ⛷️ 世界级滑雪度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 因特拉肯 - 伯尔尼高地
  // ================================================================

  {
    iata: 'ZIN',
    icao: 'LSZI',
    chinese: '因特拉肯机场',
    english: 'Interlaken Airport',
    city: '因特拉肯',
    province: '伯尔尼州',
    country: '瑞士',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.6758, lng: 7.8797 },
    runways: 1,
    priority: 72, // 🏔️ 少女峰地区旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 格林德尔瓦尔德 - 伯尔尼高地
  // ================================================================

  {
    iata: 'ZGF',
    icao: 'LSZG',
    chinese: '格林德尔瓦尔德机场',
    english: 'Grindelwald Airport',
    city: '格林德尔瓦尔德',
    province: '伯尔尼州',
    country: '瑞士',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.6394, lng: 8.0372 },
    runways: 1,
    priority: 68, // 🚡 艾格峰北壁观光
    cargo: false
  }

];

// 导出统计信息
export const switzerlandAirportStats = {
  totalAirports: switzerlandEnhancedAirports.length,
  internationalAirports: switzerlandEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: switzerlandEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: switzerlandEnhancedAirports.filter(apt => apt.cargo).length,
  cantons: [...new Set(switzerlandEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: switzerlandEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '瑞士主要州和地区完整覆盖',
  specialFeatures: [
    '🥇 苏黎世机场 - 瑞士最大国际机场，欧洲重要枢纽',
    '🌍 日内瓦机场 - 联合国欧洲总部门户',
    '🌍 巴塞尔欧洲机场 - 瑞士法国德国三国共管',
    '🏛️ 伯尔尼机场 - 瑞士联邦首都',
    '⛷️ 阿尔卑斯度假机场 - 圣莫里茨、因特拉肯等世界级滑雪胜地',
    '🏔️ 高山机场网络 - 海拔最高的欧洲机场群'
  ]
};
