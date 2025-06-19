// 🇲🇰 北马其顿机场数据库 - 增强版本
// North Macedonia Enhanced Airport Database
// 第五十三批机场数据库 - 欧洲大洲继续

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
// 🇲🇰 北马其顿共和国机场数据库 - 4个主要机场
// 覆盖北马其顿主要地区：斯科普里、奥赫里德、比托拉
// 巴尔干半岛内陆国家，古代马其顿王国发源地，亚历山大大帝故乡
// ================================================================

export const macedoniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 斯科普里 - 北马其顿首都，最大航空枢纽
  // ================================================================

  {
    iata: 'SKP',
    icao: 'LWSK',
    chinese: '斯科普里亚历山大大帝机场',
    english: 'Skopje Alexander the Great Airport',
    city: '斯科普里',
    province: '斯科普里',
    country: '北马其顿',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.9614, lng: 21.6214 },
    runways: 1,
    priority: 100, // 🥇 北马其顿最大国际机场，亚历山大大帝命名
    hub: ['Wizz Air', 'Macedonian Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 奥赫里德 - 世界文化遗产湖泊城市
  // ================================================================

  {
    iata: 'OHD',
    icao: 'LWOH',
    chinese: '奥赫里德圣保罗使徒机场',
    english: 'Ohrid St. Paul the Apostle Airport',
    city: '奥赫里德',
    province: '西南',
    country: '北马其顿',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.1800, lng: 20.7425 },
    runways: 1,
    priority: 88, // 🌊 世界文化遗产奥赫里德湖，重要旅游胜地
    cargo: false
  },

  // ================================================================
  // 📍 比托拉 - 南部重要城市
  // ================================================================

  {
    iata: 'BTL',
    icao: 'LWBT',
    chinese: '比托拉机场',
    english: 'Bitola Airport',
    city: '比托拉',
    province: '佩拉戈尼亚',
    country: '北马其顿',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.0128, lng: 21.3353 },
    runways: 1,
    priority: 82, // 🏛️ 南部重要城市，奥斯曼帝国历史遗迹
    cargo: false
  },

  // ================================================================
  // 📍 什蒂普 - 东部重要城市
  // ================================================================

  {
    iata: 'STP',
    icao: 'LWST',
    chinese: '什蒂普机场',
    english: 'Štip Airport',
    city: '什蒂普',
    province: '东部',
    country: '北马其顿',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 41.7372, lng: 22.1206 },
    runways: 1,
    priority: 75, // 🏭 东部工业城市，矿业中心
    cargo: false
  }

];

// 导出统计信息
export const macedoniaAirportStats = {
  totalAirports: macedoniaEnhancedAirports.length,
  internationalAirports: macedoniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: macedoniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: macedoniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(macedoniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: macedoniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '北马其顿全国地区完整覆盖',
  specialFeatures: [
    '🥇 斯科普里机场 - 北马其顿最大国际机场，亚历山大大帝命名',
    '🌊 奥赫里德机场 - 世界文化遗产奥赫里德湖，重要旅游胜地',
    '🏛️ 比托拉机场 - 南部重要城市，奥斯曼帝国历史遗迹',
    '🏭 什蒂普机场 - 东部工业城市，矿业中心',
    '👑 古代马其顿 - 亚历山大大帝故乡，古代文明发源地',
    '🌊 奥赫里德湖 - 欧洲最古老湖泊之一，世界自然文化双遗产'
  ]
};
