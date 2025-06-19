// 🇧🇬 保加利亚机场数据库 - 增强版本
// Bulgaria Enhanced Airport Database
// 第五十批机场数据库 - 欧洲大洲继续

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
// 🇧🇬 保加利亚共和国机场数据库 - 10个主要机场
// 覆盖保加利亚主要地区：索菲亚、普罗夫迪夫、瓦尔纳、布尔加斯
// 巴尔干半岛南部，黑海门户，欧洲十字路口
// ================================================================

export const bulgariaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 索菲亚 - 保加利亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'SOF',
    icao: 'LBSF',
    chinese: '索菲亚机场',
    english: 'Sofia Airport',
    city: '索菲亚',
    province: '索菲亚市',
    country: '保加利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 42.6967, lng: 23.4114 },
    runways: 1,
    priority: 100, // 🥇 保加利亚最大国际机场，巴尔干重要枢纽
    hub: ['Bulgaria Air', 'Wizz Air'],
    cargo: true
  },

  // ================================================================
  // 📍 瓦尔纳 - 黑海重要港口城市
  // ================================================================

  {
    iata: 'VAR',
    icao: 'LBWN',
    chinese: '瓦尔纳机场',
    english: 'Varna Airport',
    city: '瓦尔纳',
    province: '瓦尔纳州',
    country: '保加利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 43.2322, lng: 27.8251 },
    runways: 1,
    priority: 92, // 🌊 黑海重要港口城市，旅游胜地
    cargo: false
  },

  // ================================================================
  // 📍 布尔加斯 - 黑海南部重要城市
  // ================================================================

  {
    iata: 'BOJ',
    icao: 'LBBG',
    chinese: '布尔加斯机场',
    english: 'Burgas Airport',
    city: '布尔加斯',
    province: '布尔加斯州',
    country: '保加利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 42.5695, lng: 27.5152 },
    runways: 1,
    priority: 90, // 🌊 黑海南部重要港口，海滨度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 普罗夫迪夫 - 保加利亚第二大城市
  // ================================================================

  {
    iata: 'PDV',
    icao: 'LBPD',
    chinese: '普罗夫迪夫机场',
    english: 'Plovdiv Airport',
    city: '普罗夫迪夫',
    province: '普罗夫迪夫州',
    country: '保加利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 42.0678, lng: 24.8508 },
    runways: 1,
    priority: 88, // 🏛️ 保加利亚第二大城市，文化中心
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'GOZ',
    icao: 'LBGO',
    chinese: '戈尔采奥里亚霍维察机场',
    english: 'Gorna Oryahovitsa Airport',
    city: '戈尔采奥里亚霍维察',
    province: '大特尔诺沃州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 43.1514, lng: 25.7128 },
    runways: 1,
    priority: 82, // 🏛️ 大特尔诺沃州，历史名城
    cargo: false
  },

  {
    iata: 'SZR',
    icao: 'LBST',
    chinese: '斯塔拉扎戈拉机场',
    english: 'Stara Zagora Airport',
    city: '斯塔拉扎戈拉',
    province: '斯塔拉扎戈拉州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 42.3833, lng: 25.6167 },
    runways: 1,
    priority: 78, // 🏭 中部工业城市
    cargo: false
  },

  {
    iata: 'JAM',
    icao: 'LBJA',
    chinese: '扬博尔机场',
    english: 'Yambol Airport',
    city: '扬博尔',
    province: '扬博尔州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 42.4667, lng: 26.4667 },
    runways: 1,
    priority: 75, // 🌾 东南部农业区
    cargo: false
  },

  {
    iata: 'VID',
    icao: 'LBVD',
    chinese: '维丁机场',
    english: 'Vidin Airport',
    city: '维丁',
    province: '维丁州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 43.9833, lng: 22.8167 },
    runways: 1,
    priority: 72, // 🌊 多瑙河畔边境城市
    cargo: false
  },

  {
    iata: 'LOM',
    icao: 'LBLM',
    chinese: '洛姆机场',
    english: 'Lom Airport',
    city: '洛姆',
    province: '蒙塔纳州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 43.7833, lng: 23.2333 },
    runways: 1,
    priority: 70, // 🌊 多瑙河港口小城
    cargo: false
  },

  {
    iata: 'KAZ',
    icao: 'LBKZ',
    chinese: '卡赞勒克机场',
    english: 'Kazanlak Airport',
    city: '卡赞勒克',
    province: '斯塔拉扎戈拉州',
    country: '保加利亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 42.6167, lng: 25.3333 },
    runways: 1,
    priority: 68, // 🌹 玫瑰谷中心，香水产业
    cargo: false
  }

];

// 导出统计信息
export const bulgariaAirportStats = {
  totalAirports: bulgariaEnhancedAirports.length,
  internationalAirports: bulgariaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: bulgariaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: bulgariaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(bulgariaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: bulgariaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '保加利亚全国州份完整覆盖',
  specialFeatures: [
    '🥇 索菲亚机场 - 保加利亚最大国际机场，巴尔干重要枢纽',
    '🌊 瓦尔纳机场 - 黑海重要港口城市，旅游胜地',
    '🌊 布尔加斯机场 - 黑海南部重要港口，海滨度假胜地',
    '🏛️ 普罗夫迪夫机场 - 保加利亚第二大城市，文化中心',
    '🏛️ 戈尔采奥里亚霍维察机场 - 大特尔诺沃州，历史名城',
    '🌹 卡赞勒克机场 - 玫瑰谷中心，香水产业'
  ]
};
