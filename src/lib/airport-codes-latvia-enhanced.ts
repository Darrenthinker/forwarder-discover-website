// 🇱🇻 拉脱维亚机场数据库 - 增强版本
// Latvia Enhanced Airport Database
// 第三十九批机场数据库 - 欧洲大洲继续

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
// 🇱🇻 拉脱维亚共和国机场数据库 - 6个主要机场
// 覆盖拉脱维亚主要地区：里加地区、库尔泽梅、维德泽梅、拉特加莱
// 波罗的海三国之一，里加湾明珠，新艺术建筑之都
// ================================================================

export const latviaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 里加 - 拉脱维亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'RIX',
    icao: 'EVRA',
    chinese: '里加国际机场',
    english: 'Riga International Airport',
    city: '里加',
    province: '里加市',
    country: '拉脱维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 56.9236, lng: 23.9711 },
    runways: 1,
    priority: 100, // 🥇 拉脱维亚最大国际机场，波罗的海重要枢纽
    hub: ['airBaltic', 'Ryanair'],
    cargo: true
  },

  // ================================================================
  // 📍 陶格夫匹尔斯 - 东南部重要城市
  // ================================================================

  {
    iata: 'DGP',
    icao: 'EVDA',
    chinese: '陶格夫匹尔斯机场',
    english: 'Daugavpils Airport',
    city: '陶格夫匹尔斯',
    province: '陶格夫匹尔斯市',
    country: '拉脱维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 55.9428, lng: 26.6653 },
    runways: 1,
    priority: 85, // 🏛️ 拉脱维亚第二大城市，拉特加莱地区中心
    cargo: false
  },

  // ================================================================
  // 📍 利耶帕亚 - 西海岸重要港口
  // ================================================================

  {
    iata: 'LPX',
    icao: 'EVLA',
    chinese: '利耶帕亚国际机场',
    english: 'Liepāja International Airport',
    city: '利耶帕亚',
    province: '利耶帕亚市',
    country: '拉脱维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 56.5175, lng: 21.0969 },
    runways: 1,
    priority: 88, // 🌊 波罗的海重要港口城市
    cargo: false
  },

  // ================================================================
  // 📍 文茨皮尔斯 - 西北部港口城市
  // ================================================================

  {
    iata: 'VNT',
    icao: 'EVVA',
    chinese: '文茨皮尔斯机场',
    english: 'Ventspils Airport',
    city: '文茨皮尔斯',
    province: '文茨皮尔斯市',
    country: '拉脱维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 57.3578, lng: 21.5442 },
    runways: 1,
    priority: 80, // 🚢 重要港口城市，石油转运中心
    cargo: false
  },

  // ================================================================
  // 📍 雷泽克内 - 东北部文化中心
  // ================================================================

  {
    iata: 'RZE',
    icao: 'EVRA',
    chinese: '雷泽克内机场',
    english: 'Rēzekne Airport',
    city: '雷泽克内',
    province: '雷泽克内市',
    country: '拉脱维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 56.5000, lng: 27.3333 },
    runways: 1,
    priority: 75, // 🏛️ 拉特加莱文化中心
    cargo: false
  },

  // ================================================================
  // 📍 耶尔加瓦 - 中南部重要城市
  // ================================================================

  {
    iata: 'JLG',
    icao: 'EVJA',
    chinese: '耶尔加瓦机场',
    english: 'Jelgava Airport',
    city: '耶尔加瓦',
    province: '耶尔加瓦市',
    country: '拉脱维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 56.6500, lng: 23.7167 },
    runways: 1,
    priority: 72, // 🌾 农业地区中心，历史名城
    cargo: false
  }

];

// 导出统计信息
export const latviaAirportStats = {
  totalAirports: latviaEnhancedAirports.length,
  internationalAirports: latviaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: latviaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: latviaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(latviaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: latviaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '拉脱维亚全国地区完整覆盖',
  specialFeatures: [
    '🥇 里加机场 - 拉脱维亚最大国际机场，波罗的海重要枢纽',
    '🌊 利耶帕亚机场 - 波罗的海重要港口城市',
    '🏛️ 陶格夫匹尔斯机场 - 拉脱维亚第二大城市',
    '🚢 文茨皮尔斯机场 - 重要港口城市，石油转运中心',
    '🏛️ 雷泽克内机场 - 拉特加莱文化中心',
    '🌾 耶尔加瓦机场 - 农业地区中心，历史名城'
  ]
};
