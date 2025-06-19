// 🇹🇱 东帝汶机场数据库 - 增强版本
// East Timor (Timor-Leste) Enhanced Airport Database
// 东南亚岛国 - 完整机场覆盖

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
// 🇹🇱 东帝汶 TIMOR-LESTE - 4个机场
// 东南亚小岛国，位于帝汶岛东部
// ================================================================

export const timorLesteEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 第一等级：国际机场 (Priority: 85-95)
  // ================================================================

  {
    iata: 'DIL',
    icao: 'WPDL',
    chinese: '帝力尼古劳·洛巴托总统国际机场',
    english: 'Presidente Nicolau Lobato International Airport',
    city: '帝力',
    province: '帝力市',
    country: '东帝汶',
    isInternational: true,
    hasCustoms: true,
    timezone: 'Asia/Dili',
    coordinates: { lat: -8.5467, lng: 125.5247 },
    runways: 1,
    priority: 95,
    hub: ['东帝汶航空'],
    cargo: true
  },

  // ================================================================
  // 第二等级：地区机场 (Priority: 65-75)
  // ================================================================

  {
    iata: 'AUT',
    icao: 'WPAT',
    chinese: '阿陶罗机场',
    english: 'Atauro Airport',
    city: '阿陶罗',
    province: '帝力市',
    country: '东帝汶',
    isInternational: false,
    hasCustoms: false,
    timezone: 'Asia/Dili',
    coordinates: { lat: -8.2167, lng: 125.5833 },
    runways: 1,
    priority: 75,
    hub: [],
    cargo: false
  },

  {
    iata: 'BCH',
    icao: 'WPBC',
    chinese: '包考机场',
    english: 'Baucau Airport',
    city: '包考',
    province: '包考县',
    country: '东帝汶',
    isInternational: false,
    hasCustoms: false,
    timezone: 'Asia/Dili',
    coordinates: { lat: -8.4844, lng: 126.3984 },
    runways: 1,
    priority: 70,
    hub: [],
    cargo: false
  },

  {
    iata: 'UNI',
    icao: 'WPML',
    chinese: '马洛玛机场',
    english: 'Maliana Airport',
    city: '马洛玛',
    province: '博博纳罗县',
    country: '东帝汶',
    isInternational: false,
    hasCustoms: false,
    timezone: 'Asia/Dili',
    coordinates: { lat: -8.9917, lng: 125.2158 },
    runways: 1,
    priority: 65,
    hub: [],
    cargo: false
  }

];

// 导出机场数量统计
export const TIMOR_LESTE_AIRPORT_STATS = {
  total: 4,
  international: 1,
  domestic: 3,
  regional: 0,
  withCustoms: 1,
  topTier: 1,       // Priority 85+
  secondTier: 3,    // Priority 65-84
  thirdTier: 0,     // Priority 45-64
  fourthTier: 0     // Priority 25-44
};

export default timorLesteEnhancedAirports;
