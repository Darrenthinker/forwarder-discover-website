// 🇸🇰 斯洛伐克机场数据库 - 增强版本
// Slovakia Enhanced Airport Database
// 第三十六批机场数据库 - 欧洲大洲继续

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
// 🇸🇰 斯洛伐克共和国机场数据库 - 10个主要机场
// 覆盖斯洛伐克主要地区：布拉迪斯拉发、科希策、日利纳、普列索夫
// 中欧内陆国，多瑙河畔，塔特拉山脉
// ================================================================

export const slovakiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 布拉迪斯拉发 - 斯洛伐克首都，多瑙河畔
  // ================================================================

  {
    iata: 'BTS',
    icao: 'LZIB',
    chinese: '布拉迪斯拉发机场',
    english: 'Bratislava Airport',
    city: '布拉迪斯拉发',
    province: '布拉迪斯拉发州',
    country: '斯洛伐克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 48.1702, lng: 17.2127 },
    runways: 1,
    priority: 100, // 🥇 斯洛伐克最大国际机场，多瑙河畔首都
    hub: ['Ryanair'],
    cargo: true
  },

  // ================================================================
  // 📍 科希策 - 东斯洛伐克重要城市
  // ================================================================

  {
    iata: 'KSC',
    icao: 'LZKZ',
    chinese: '科希策机场',
    english: 'Košice Airport',
    city: '科希策',
    province: '科希策州',
    country: '斯洛伐克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 48.6631, lng: 21.2411 },
    runways: 1,
    priority: 88, // 🏛️ 东斯洛伐克最大城市
    cargo: false
  },

  // ================================================================
  // 📍 波普拉德-塔特拉 - 高塔特拉山脉门户
  // ================================================================

  {
    iata: 'TAT',
    icao: 'LZTT',
    chinese: '波普拉德-塔特拉机场',
    english: 'Poprad-Tatry Airport',
    city: '波普拉德',
    province: '普列索夫州',
    country: '斯洛伐克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 49.0736, lng: 20.2411 },
    runways: 1,
    priority: 85, // 🏔️ 高塔特拉山脉旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 日利纳 - 中北部重要城市
  // ================================================================

  {
    iata: 'ILZ',
    icao: 'LZZI',
    chinese: '日利纳机场',
    english: 'Žilina Airport',
    city: '日利纳',
    province: '日利纳州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 49.2319, lng: 18.6139 },
    runways: 1,
    priority: 78, // 🏭 中北部工业中心
    cargo: false
  },

  // ================================================================
  // 📍 普列索夫 - 东北部重要城市
  // ================================================================

  {
    iata: 'PRV',
    icao: 'LZPV',
    chinese: '普列索夫机场',
    english: 'Prešov Airport',
    city: '普列索夫',
    province: '普列索夫州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 49.0194, lng: 21.2403 },
    runways: 1,
    priority: 75, // 🏛️ 东北部文化中心
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'NIT',
    icao: 'LZNI',
    chinese: '尼特拉机场',
    english: 'Nitra Airport',
    city: '尼特拉',
    province: '尼特拉州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.3139, lng: 18.0967 },
    runways: 1,
    priority: 72, // 🌾 农业地区中心
    cargo: false
  },

  {
    iata: 'BBV',
    icao: 'LZBB',
    chinese: '班斯卡比斯特里察机场',
    english: 'Banská Bystrica Airport',
    city: '班斯卡比斯特里察',
    province: '班斯卡比斯特里察州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.6394, lng: 19.1342 },
    runways: 1,
    priority: 70, // 🏔️ 中部山区城市
    cargo: false
  },

  {
    iata: 'TRN',
    icao: 'LZTN',
    chinese: '特尔纳瓦机场',
    english: 'Trnava Airport',
    city: '特尔纳瓦',
    province: '特尔纳瓦州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.3703, lng: 17.5881 },
    runways: 1,
    priority: 68, // 🏛️ 历史城市
    cargo: false
  },

  {
    iata: 'LUC',
    icao: 'LZLU',
    chinese: '卢切内茨机场',
    english: 'Lučenec Airport',
    city: '卢切内茨',
    province: '班斯卡比斯特里察州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.3281, lng: 19.6764 },
    runways: 1,
    priority: 65, // 🌾 南部边境城市
    cargo: false
  },

  {
    iata: 'SLD',
    icao: 'LZSL',
    chinese: '斯利亚奇机场',
    english: 'Sliač Airport',
    city: '斯利亚奇',
    province: '班斯卡比斯特里察州',
    country: '斯洛伐克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.6378, lng: 19.1342 },
    runways: 1,
    priority: 67, // ✈️ 军民两用机场
    cargo: false
  }

];

// 导出统计信息
export const slovakiaAirportStats = {
  totalAirports: slovakiaEnhancedAirports.length,
  internationalAirports: slovakiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: slovakiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: slovakiaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(slovakiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: slovakiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '斯洛伐克全国州份完整覆盖',
  specialFeatures: [
    '🥇 布拉迪斯拉发机场 - 斯洛伐克最大国际机场，多瑙河畔首都',
    '🏛️ 科希策机场 - 东斯洛伐克最大城市',
    '🏔️ 波普拉德-塔特拉机场 - 高塔特拉山脉旅游门户',
    '🏭 日利纳机场 - 中北部工业中心',
    '🏛️ 普列索夫机场 - 东北部文化中心',
    '✈️ 斯利亚奇机场 - 军民两用机场'
  ]
};
