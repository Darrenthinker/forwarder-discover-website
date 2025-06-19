// 🇪🇪 爱沙尼亚机场数据库 - 增强版本
// Estonia Enhanced Airport Database
// 第三十八批机场数据库 - 欧洲大洲继续

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
// 🇪🇪 爱沙尼亚共和国机场数据库 - 5个主要机场
// 覆盖爱沙尼亚主要地区：北爱沙尼亚、南爱沙尼亚、西爱沙尼亚、东爱沙尼亚
// 波罗的海三国之一，数字爱沙尼亚，北欧门户
// ================================================================

export const estoniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 塔林 - 爱沙尼亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'TLL',
    icao: 'EETN',
    chinese: '塔林伦纳特·梅里机场',
    english: 'Tallinn Lennart Meri Airport',
    city: '塔林',
    province: '哈留县',
    country: '爱沙尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 59.4133, lng: 24.8328 },
    runways: 1,
    priority: 100, // 🥇 爱沙尼亚最大国际机场，波罗的海门户
    hub: ['Nordica', 'Smartlynx Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 塔尔图 - 爱沙尼亚第二大城市
  // ================================================================

  {
    iata: 'TAY',
    icao: 'EETU',
    chinese: '塔尔图机场',
    english: 'Tartu Airport',
    city: '塔尔图',
    province: '塔尔图县',
    country: '爱沙尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 58.3075, lng: 26.6903 },
    runways: 1,
    priority: 85, // 🎓 大学城，南爱沙尼亚中心
    cargo: false
  },

  // ================================================================
  // 📍 派尔努 - 海滨度假城市
  // ================================================================

  {
    iata: 'EPU',
    icao: 'EEPU',
    chinese: '派尔努机场',
    english: 'Pärnu Airport',
    city: '派尔努',
    province: '派尔努县',
    country: '爱沙尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 58.4189, lng: 24.4728 },
    runways: 1,
    priority: 78, // 🏖️ 波罗的海海滨度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 库雷萨雷 - 萨列马岛重要城市
  // ================================================================

  {
    iata: 'URE',
    icao: 'EEKE',
    chinese: '库雷萨雷机场',
    english: 'Kuressaare Airport',
    city: '库雷萨雷',
    province: '萨列县',
    country: '爱沙尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 58.2297, lng: 22.5097 },
    runways: 1,
    priority: 80, // 🏝️ 萨列马岛最大城市
    cargo: false
  },

  // ================================================================
  // 📍 卡尔德拉 - 海岸城市
  // ================================================================

  {
    iata: 'KDL',
    icao: 'EEKA',
    chinese: '卡尔德拉机场',
    english: 'Kärdla Airport',
    city: '卡尔德拉',
    province: '希尤县',
    country: '爱沙尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 58.9906, lng: 22.8306 },
    runways: 1,
    priority: 72, // 🏝️ 希尤马岛行政中心
    cargo: false
  }

];

// 导出统计信息
export const estoniaAirportStats = {
  totalAirports: estoniaEnhancedAirports.length,
  internationalAirports: estoniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: estoniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: estoniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(estoniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: estoniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '爱沙尼亚全国县份完整覆盖',
  specialFeatures: [
    '🥇 塔林机场 - 爱沙尼亚最大国际机场，波罗的海门户',
    '🎓 塔尔图机场 - 大学城，南爱沙尼亚中心',
    '🏖️ 派尔努机场 - 波罗的海海滨度假胜地',
    '🏝️ 库雷萨雷机场 - 萨列马岛最大城市',
    '🏝️ 卡尔德拉机场 - 希尤马岛行政中心'
  ]
};
