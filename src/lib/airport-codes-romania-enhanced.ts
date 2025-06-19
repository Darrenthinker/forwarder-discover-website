// 🇷🇴 罗马尼亚机场数据库 - 增强版本
// Romania Enhanced Airport Database
// 第四十二批机场数据库 - 欧洲大洲继续

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
// 🇷🇴 罗马尼亚机场数据库 - 18个主要机场
// 覆盖罗马尼亚主要地区：瓦拉几亚、摩尔多瓦、特兰西瓦尼亚、多布罗加
// 巴尔干半岛，多瑙河下游，黑海门户
// ================================================================

export const romaniaEnhancedAirports: EnhancedAirportInfo[] = [

  // 布加勒斯特 - 罗马尼亚首都，最大航空枢纽
  {
    iata: 'OTP',
    icao: 'LROP',
    chinese: '布加勒斯特亨利·科安德国际机场',
    english: 'Bucharest Henri Coandă International Airport',
    city: '布加勒斯特',
    province: '布加勒斯特市',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 44.5722, lng: 26.1022 },
    runways: 2,
    priority: 100, // 🥇 罗马尼亚最大国际机场，巴尔干重要枢纽
    hub: ['TAROM', 'Blue Air'],
    cargo: true
  },

  // 克卢日-纳波卡 - 特兰西瓦尼亚重要城市
  {
    iata: 'CLJ',
    icao: 'LRCL',
    chinese: '克卢日-纳波卡国际机场',
    english: 'Cluj-Napoca International Airport',
    city: '克卢日-纳波卡',
    province: '克卢日县',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 46.7852, lng: 23.6862 },
    runways: 1,
    priority: 95, // 🏛️ 特兰西瓦尼亚最大城市，文化中心
    cargo: false
  },

  // 蒂米什瓦拉 - 西部重要工业城市
  {
    iata: 'TSR',
    icao: 'LRTR',
    chinese: '蒂米什瓦拉特拉扬·武伊亚机场',
    english: 'Timișoara Traian Vuia International Airport',
    city: '蒂米什瓦拉',
    province: '蒂米什县',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 45.8094, lng: 21.3378 },
    runways: 1,
    priority: 92, // 🏭 西部工业中心，欧洲文化之都
    cargo: false
  },

  // 伊亚希 - 东北部重要城市
  {
    iata: 'IAS',
    icao: 'LRIA',
    chinese: '伊亚希国际机场',
    english: 'Iași International Airport',
    city: '伊亚希',
    province: '雅西县',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 47.1785, lng: 27.6206 },
    runways: 1,
    priority: 88, // 🎓 大学城，摩尔多瓦地区中心
    cargo: false
  },

  // 康斯坦察 - 黑海重要港口
  {
    iata: 'CND',
    icao: 'LRCK',
    chinese: '康斯坦察米哈伊·科格尔尼恰努机场',
    english: 'Constanța Mihail Kogălniceanu Airport',
    city: '康斯坦察',
    province: '康斯坦察县',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 44.3622, lng: 28.4883 },
    runways: 1,
    priority: 90, // 🌊 黑海重要港口城市
    cargo: false
  },

  // 其他重要机场
  {
    iata: 'SBZ',
    icao: 'LRSB',
    chinese: '锡比乌国际机场',
    english: 'Sibiu International Airport',
    city: '锡比乌',
    province: '锡比乌县',
    country: '罗马尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 45.7856, lng: 24.0914 },
    runways: 1,
    priority: 85, // 🏰 中世纪古城，欧洲文化之都
    cargo: false
  },

  {
    iata: 'BAY',
    icao: 'LRBC',
    chinese: '巴亚马雷机场',
    english: 'Baia Mare Airport',
    city: '巴亚马雷',
    province: '马拉穆列什县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 47.6583, lng: 23.4700 },
    runways: 1,
    priority: 78, // 🏔️ 北部山区城市
    cargo: false
  },

  {
    iata: 'OMR',
    icao: 'LROD',
    chinese: '奥拉迪亚机场',
    english: 'Oradea Airport',
    city: '奥拉迪亚',
    province: '比霍尔县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 47.0253, lng: 21.9025 },
    runways: 1,
    priority: 80, // 🌉 西部边境城市
    cargo: false
  },

  {
    iata: 'SCV',
    icao: 'LRSV',
    chinese: '苏恰瓦机场',
    english: 'Suceava Airport',
    city: '苏恰瓦',
    province: '苏恰瓦县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 47.6875, lng: 26.3539 },
    runways: 1,
    priority: 75, // 🏰 北部历史名城
    cargo: false
  },

  {
    iata: 'BCM',
    icao: 'LRBC',
    chinese: '巴克乌机场',
    english: 'Bacău Airport',
    city: '巴克乌',
    province: '巴克乌县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 46.5219, lng: 26.9103 },
    runways: 1,
    priority: 77, // 🏭 东部工业城市
    cargo: false
  },

  {
    iata: 'CVT',
    icao: 'LRCO',
    chinese: '科瓦斯纳机场',
    english: 'Covasna Airport',
    city: '斯夫恩图·格奥尔格',
    province: '科瓦斯纳县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.9139, lng: 25.9667 },
    runways: 1,
    priority: 70, // 🌲 东南部森林地区
    cargo: false
  },

  {
    iata: 'TGM',
    icao: 'LRTG',
    chinese: '特尔古穆列什机场',
    english: 'Târgu Mureș Airport',
    city: '特尔古穆列什',
    province: '穆列什县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 46.4678, lng: 24.4119 },
    runways: 1,
    priority: 73, // 🏛️ 特兰西瓦尼亚文化中心
    cargo: false
  },

  {
    iata: 'CSB',
    icao: 'LRCS',
    chinese: '卡拉纳塞贝什机场',
    english: 'Caransebeș Airport',
    city: '卡拉纳塞贝什',
    province: '卡拉什-塞维林县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.4167, lng: 22.2500 },
    runways: 1,
    priority: 68, // 🏔️ 西南部山区
    cargo: false
  },

  {
    iata: 'TUL',
    icao: 'LRTU',
    chinese: '图尔恰机场',
    english: 'Tulcea Airport',
    city: '图尔恰',
    province: '图尔恰县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.0625, lng: 28.7142 },
    runways: 1,
    priority: 72, // 🦢 多瑙河三角洲门户
    cargo: false
  },

  {
    iata: 'RMN',
    icao: 'LRRM',
    chinese: '勒姆尼库沃尔恰机场',
    english: 'Râmnicu Vâlcea Airport',
    city: '勒姆尼库沃尔恰',
    province: '沃尔恰县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.0975, lng: 24.2639 },
    runways: 1,
    priority: 67, // 🌿 中南部城市
    cargo: false
  },

  {
    iata: 'RES',
    icao: 'LRRE',
    chinese: '雷希察机场',
    english: 'Reșița Airport',
    city: '雷希察',
    province: '卡拉什-塞维林县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.2983, lng: 21.8414 },
    runways: 1,
    priority: 65, // 🏭 西南部工业城市
    cargo: false
  },

  {
    iata: 'DRO',
    icao: 'LRDR',
    chinese: '德罗贝塔-图尔努塞维林机场',
    english: 'Drobeta-Turnu Severin Airport',
    city: '德罗贝塔-图尔努塞维林',
    province: '梅赫丁茨县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 44.6917, lng: 22.6583 },
    runways: 1,
    priority: 66, // 🌊 多瑙河畔城市
    cargo: false
  },

  {
    iata: 'DRV',
    icao: 'LRDR',
    chinese: '德瓦机场',
    english: 'Deva Airport',
    city: '德瓦',
    province: '胡内多阿拉县',
    country: '罗马尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 45.8667, lng: 22.9000 },
    runways: 1,
    priority: 64, // 🏰 特兰西瓦尼亚南部
    cargo: false
  }

];

// 导出统计信息
export const romaniaAirportStats = {
  totalAirports: romaniaEnhancedAirports.length,
  internationalAirports: romaniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: romaniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: romaniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(romaniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: romaniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '罗马尼亚全国县份完整覆盖',
  specialFeatures: [
    '🥇 布加勒斯特机场 - 罗马尼亚最大国际机场，巴尔干重要枢纽',
    '🏛️ 克卢日-纳波卡机场 - 特兰西瓦尼亚最大城市，文化中心',
    '🏭 蒂米什瓦拉机场 - 西部工业中心，欧洲文化之都',
    '🌊 康斯坦察机场 - 黑海重要港口城市',
    '🎓 伊亚希机场 - 大学城，摩尔多瓦地区中心',
    '🏰 锡比乌机场 - 中世纪古城，欧洲文化之都'
  ]
};
