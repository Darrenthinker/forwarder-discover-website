// 🇵🇱 波兰机场数据库 - 增强版本
// Poland Enhanced Airport Database
// 第三十五批机场数据库 - 欧洲大洲继续

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
// 🇵🇱 波兰共和国机场数据库 - 18个主要机场
// 覆盖波兰主要省份：小波兰、马佐夫舍、西里西亚、大波兰等
// 中欧大国，历史名城，维斯瓦河畔
// ================================================================

export const polandEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 华沙 - 波兰首都，最大航空枢纽
  // ================================================================

  {
    iata: 'WAW',
    icao: 'EPWA',
    chinese: '华沙肖邦机场',
    english: 'Warsaw Chopin Airport',
    city: '华沙',
    province: '马佐夫舍省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 52.1657, lng: 20.9671 },
    runways: 2,
    priority: 100, // 🥇 波兰最大国际机场，中欧重要枢纽
    hub: ['LOT波兰航空', 'Ryanair'],
    cargo: true
  },

  // ================================================================
  // 📍 克拉科夫 - 历史文化名城
  // ================================================================

  {
    iata: 'KRK',
    icao: 'EPKR',
    chinese: '克拉科夫约翰·保罗二世机场',
    english: 'Kraków John Paul II International Airport',
    city: '克拉科夫',
    province: '小波兰省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.0777, lng: 19.7848 },
    runways: 1,
    priority: 95, // 🏰 历史古都，世界文化遗产
    cargo: false
  },

  // ================================================================
  // 📍 格但斯克 - 波罗的海门户
  // ================================================================

  {
    iata: 'GDN',
    icao: 'EPGD',
    chinese: '格但斯克列夫·瓦文萨机场',
    english: 'Gdańsk Lech Wałęsa Airport',
    city: '格但斯克',
    province: '滨海省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 54.3776, lng: 18.4662 },
    runways: 1,
    priority: 92, // 🌊 波罗的海重要港口
    cargo: false
  },

  // ================================================================
  // 📍 弗罗茨瓦夫 - 西里西亚重要城市
  // ================================================================

  {
    iata: 'WRO',
    icao: 'EPWR',
    chinese: '弗罗茨瓦夫机场',
    english: 'Wrocław Airport',
    city: '弗罗茨瓦夫',
    province: '下西里西亚省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.1027, lng: 16.8858 },
    runways: 1,
    priority: 88, // 🏛️ 西里西亚文化中心
    cargo: false
  },

  // ================================================================
  // 📍 波兹南 - 大波兰首府
  // ================================================================

  {
    iata: 'POZ',
    icao: 'EPPO',
    chinese: '波兹南机场',
    english: 'Poznań Airport',
    city: '波兹南',
    province: '大波兰省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 52.4214, lng: 16.8262 },
    runways: 1,
    priority: 85, // 🏭 大波兰工业中心
    cargo: false
  },

  // ================================================================
  // 📍 卡托维兹 - 西里西亚工业中心
  // ================================================================

  {
    iata: 'KTW',
    icao: 'EPKT',
    chinese: '卡托维兹机场',
    english: 'Katowice Airport',
    city: '卡托维兹',
    province: '西里西亚省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.4743, lng: 19.0800 },
    runways: 1,
    priority: 90, // 🏭 西里西亚工业重镇
    cargo: true
  },

  // ================================================================
  // 📍 什切青 - 西北部港口
  // ================================================================

  {
    iata: 'SZZ',
    icao: 'EPSC',
    chinese: '什切青机场',
    english: 'Szczecin Airport',
    city: '什切青',
    province: '西滨海省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 53.5847, lng: 14.9022 },
    runways: 1,
    priority: 82, // 🚢 波罗的海重要港口
    cargo: false
  },

  // ================================================================
  // 📍 罗兹 - 中部重要城市
  // ================================================================

  {
    iata: 'LCJ',
    icao: 'EPLL',
    chinese: '罗兹机场',
    english: 'Łódź Airport',
    city: '罗兹',
    province: '罗兹省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.7219, lng: 19.3981 },
    runways: 1,
    priority: 78, // 🏭 纺织工业中心
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'RZE',
    icao: 'EPRZ',
    chinese: '热舒夫机场',
    english: 'Rzeszów Airport',
    city: '热舒夫',
    province: '喀尔巴阡山省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.1100, lng: 22.0190 },
    runways: 1,
    priority: 80, // 🏔️ 东南部山区门户
    cargo: false
  },

  {
    iata: 'LUZ',
    icao: 'EPLB',
    chinese: '卢布林机场',
    english: 'Lublin Airport',
    city: '卢布林',
    province: '卢布林省',
    country: '波兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.2406, lng: 22.7136 },
    runways: 1,
    priority: 75, // 🏛️ 东部历史名城
    cargo: false
  },

  {
    iata: 'BZG',
    icao: 'EPBY',
    chinese: '比得哥什机场',
    english: 'Bydgoszcz Airport',
    city: '比得哥什',
    province: '库亚维-滨海省',
    country: '波兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 53.0968, lng: 17.9777 },
    runways: 1,
    priority: 72, // 🌊 北部重要城市
    cargo: false
  },

  {
    iata: 'IEG',
    icao: 'EPZG',
    chinese: '兹耶洛纳古拉机场',
    english: 'Zielona Góra Airport',
    city: '兹耶洛纳古拉',
    province: '卢布斯卡省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 51.8853, lng: 15.7986 },
    runways: 1,
    priority: 68, // 🍇 西部葡萄酒产区
    cargo: false
  },

  {
    iata: 'OSP',
    icao: 'EPOL',
    chinese: '什切青-索瓦多沃机场',
    english: 'Szczecin-Solidarność Airport',
    city: '什切青',
    province: '西滨海省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 53.3847, lng: 14.6378 },
    runways: 1,
    priority: 70, // 🏭 什切青第二机场
    cargo: false
  },

  {
    iata: 'KIE',
    icao: 'EPKE',
    chinese: '凯尔采机场',
    english: 'Kielce Airport',
    city: '凯尔采',
    province: '圣十字省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.8967, lng: 20.5817 },
    runways: 1,
    priority: 65, // 🏔️ 中南部山区
    cargo: false
  },

  {
    iata: 'OLZ',
    icao: 'EPOL',
    chinese: '奥尔什丁机场',
    english: 'Olsztyn Airport',
    city: '奥尔什丁',
    province: '瓦尔米亚-马祖里省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 53.4817, lng: 20.4183 },
    runways: 1,
    priority: 67, // 🏞️ 千湖地区
    cargo: false
  },

  {
    iata: 'EPO',
    icao: 'EPOP',
    chinese: '奥波莱机场',
    english: 'Opole Airport',
    city: '奥波莱',
    province: '奥波莱省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.4750, lng: 17.8333 },
    runways: 1,
    priority: 63, // 🏛️ 西里西亚小城
    cargo: false
  },

  {
    iata: 'RAD',
    icao: 'EPRA',
    chinese: '拉多姆机场',
    english: 'Radom Airport',
    city: '拉多姆',
    province: '马佐夫舍省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 51.3889, lng: 21.2136 },
    runways: 1,
    priority: 66, // 🏭 中部工业城市
    cargo: false
  },

  {
    iata: 'TAR',
    icao: 'EPTA',
    chinese: '塔尔努夫机场',
    english: 'Tarnów Airport',
    city: '塔尔努夫',
    province: '小波兰省',
    country: '波兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.0139, lng: 20.9856 },
    runways: 1,
    priority: 64, // 🏰 小波兰历史城市
    cargo: false
  }

];

// 导出统计信息
export const polandAirportStats = {
  totalAirports: polandEnhancedAirports.length,
  internationalAirports: polandEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: polandEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: polandEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(polandEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: polandEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '波兰全国省份完整覆盖',
  specialFeatures: [
    '🥇 华沙肖邦机场 - 波兰最大国际机场，中欧重要枢纽',
    '🏰 克拉科夫机场 - 历史古都，世界文化遗产门户',
    '🌊 格但斯克机场 - 波罗的海重要港口城市',
    '🏭 卡托维兹机场 - 西里西亚工业重镇',
    '🏛️ 弗罗茨瓦夫机场 - 西里西亚文化中心',
    '🏭 波兹南机场 - 大波兰工业中心'
  ]
};
