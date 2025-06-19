// 🇸🇮 斯洛文尼亚机场数据库 - 增强版本
// Slovenia Enhanced Airport Database
// 第五十一批机场数据库 - 欧洲大洲继续

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
// 🇸🇮 斯洛文尼亚共和国机场数据库 - 6个主要机场
// 覆盖斯洛文尼亚主要地区：中央斯洛文尼亚、沿海地区、萨瓦地区
// 阿尔卑斯山巴尔干国家，前南斯拉夫最发达地区，欧盟成员国
// ================================================================

export const sloveniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 卢布尔雅那 - 斯洛文尼亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'LJU',
    icao: 'LJLJ',
    chinese: '卢布尔雅那约热·普奇尼克机场',
    english: 'Ljubljana Jože Pučnik Airport',
    city: '卢布尔雅那',
    province: '中央斯洛文尼亚',
    country: '斯洛文尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.2237, lng: 14.4576 },
    runways: 1,
    priority: 100, // 🥇 斯洛文尼亚最大国际机场，中欧重要枢纽
    hub: ['Adria Airways', 'Slovenian Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 马里博尔 - 斯洛文尼亚第二大城市
  // ================================================================

  {
    iata: 'MBX',
    icao: 'LJMB',
    chinese: '马里博尔埃德瓦德·鲁斯扬机场',
    english: 'Maribor Edvard Rusjan Airport',
    city: '马里博尔',
    province: '波德拉夫斯卡',
    country: '斯洛文尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.4798, lng: 15.6863 },
    runways: 1,
    priority: 88, // 🏛️ 斯洛文尼亚第二大城市，德拉瓦河畔
    cargo: false
  },

  // ================================================================
  // 📍 波尔托罗 - 亚得里亚海沿岸
  // ================================================================

  {
    iata: 'POW',
    icao: 'LJPZ',
    chinese: '波尔托罗机场',
    english: 'Portorož Airport',
    city: '波尔托罗',
    province: '沿海-喀斯特',
    country: '斯洛文尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.4736, lng: 13.6150 },
    runways: 1,
    priority: 85, // 🌊 亚得里亚海重要度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'CEJ',
    icao: 'LJCE',
    chinese: '采列机场',
    english: 'Celje Airport',
    city: '采列',
    province: '萨维尼斯卡',
    country: '斯洛文尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.2625, lng: 15.2533 },
    runways: 1,
    priority: 78, // 🏭 工业城市，萨瓦河流域
    cargo: false
  },

  {
    iata: 'LCE',
    icao: 'LJLC',
    chinese: '洛卡机场',
    english: 'Lesce-Bled Airport',
    city: '莱斯采-布莱德',
    province: '戈雷尼斯卡',
    country: '斯洛文尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.3586, lng: 14.1458 },
    runways: 1,
    priority: 82, // 🏔️ 阿尔卑斯山旅游胜地，布莱德湖
    cargo: false
  },

  {
    iata: 'NOV',
    icao: 'LJNM',
    chinese: '新梅斯托机场',
    english: 'Novo Mesto Airport',
    city: '新梅斯托',
    province: '东南斯洛文尼亚',
    country: '斯洛文尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 45.8069, lng: 15.1769 },
    runways: 1,
    priority: 75, // 🌲 东南部森林地区
    cargo: false
  }

];

// 导出统计信息
export const sloveniaAirportStats = {
  totalAirports: sloveniaEnhancedAirports.length,
  internationalAirports: sloveniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: sloveniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: sloveniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(sloveniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: sloveniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '斯洛文尼亚全国地区完整覆盖',
  specialFeatures: [
    '🥇 卢布尔雅那机场 - 斯洛文尼亚最大国际机场，中欧重要枢纽',
    '🏛️ 马里博尔机场 - 斯洛文尼亚第二大城市，德拉瓦河畔',
    '🌊 波尔托罗机场 - 亚得里亚海重要度假胜地',
    '🏔️ 莱斯采-布莱德机场 - 阿尔卑斯山旅游胜地，布莱德湖',
    '🏭 采列机场 - 工业城市，萨瓦河流域',
    '🌲 新梅斯托机场 - 东南部森林地区'
  ]
};
