// 🇲🇪 黑山机场数据库 - 增强版本
// Montenegro Enhanced Airport Database
// 第五十四批机场数据库 - 欧洲大洲继续

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
// 🇲🇪 黑山共和国机场数据库 - 2个主要机场
// 覆盖黑山主要地区：波德戈里察、蒂瓦特
// 巴尔干半岛亚得里亚海明珠，山海相依的美丽国度
// ================================================================

export const montenegroEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 波德戈里察 - 黑山首都，最大航空枢纽
  // ================================================================

  {
    iata: 'TGD',
    icao: 'LYPG',
    chinese: '波德戈里察戈尔科·科维奇机场',
    english: 'Podgorica Golubovci Airport',
    city: '波德戈里察',
    province: '波德戈里察首都区',
    country: '黑山',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.3594, lng: 19.2519 },
    runways: 1,
    priority: 100, // 🥇 黑山最大国际机场，首都重要门户
    hub: ['Montenegro Airlines', 'Air Montenegro'],
    cargo: true
  },

  // ================================================================
  // 📍 蒂瓦特 - 亚得里亚海海岸重要旅游城市
  // ================================================================

  {
    iata: 'TIV',
    icao: 'LYTV',
    chinese: '蒂瓦特机场',
    english: 'Tivat Airport',
    city: '蒂瓦特',
    province: '海岸区',
    country: '黑山',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.4047, lng: 18.7233 },
    runways: 1,
    priority: 92, // 🌊 亚得里亚海重要旅游门户，豪华游艇港
    cargo: false
  }

];

// 导出统计信息
export const montenegroAirportStats = {
  totalAirports: montenegroEnhancedAirports.length,
  internationalAirports: montenegroEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: montenegroEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: montenegroEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(montenegroEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: montenegroEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '黑山全国地区完整覆盖',
  specialFeatures: [
    '🥇 波德戈里察机场 - 黑山最大国际机场，首都重要门户',
    '🌊 蒂瓦特机场 - 亚得里亚海重要旅游门户，豪华游艇港',
    '🏔️ 山海相依 - 独特地理位置，连接杜尔米托尔山脉与亚得里亚海',
    '🎭 文化瑰宝 - 科托尔古城等世界文化遗产',
    '🌟 欧洲隐藏宝石 - 新兴高端旅游目的地',
    '🇪🇺 欧盟候选国 - 积极融入欧洲一体化进程'
  ]
};
