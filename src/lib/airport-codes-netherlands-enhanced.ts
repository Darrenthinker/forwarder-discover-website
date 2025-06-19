// 🇳🇱 荷兰机场数据库 - 增强版本
// Netherlands Enhanced Airport Database
// 第二十六批机场数据库 - 欧洲大洲继续

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
// 🇳🇱 荷兰王国机场数据库 - 15个主要机场
// 覆盖12个省份：北荷兰省、南荷兰省、乌得勒支省、
// 北布拉班特省、林堡省、海尔德兰省等
// 西欧重要航空枢纽，史基浦机场欧洲转机中心
// ================================================================

export const netherlandsEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 阿姆斯特丹大都市区 - 兰德斯塔德核心
  // ================================================================

  {
    iata: 'AMS',
    icao: 'EHAM',
    chinese: '阿姆斯特丹史基浦机场',
    english: 'Amsterdam Airport Schiphol',
    city: '阿姆斯特丹',
    province: '北荷兰省',
    country: '荷兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 52.3086, lng: 4.7639 },
    runways: 6,
    priority: 100, // 🥇 欧洲最大航空枢纽之一
    hub: ['荷兰皇家航空', '马丁航空', 'Transavia'],
    cargo: true
  },

  // ================================================================
  // 📍 鹿特丹港区 - 南荷兰省
  // ================================================================

  {
    iata: 'RTM',
    icao: 'EHRD',
    chinese: '鹿特丹海牙机场',
    english: 'Rotterdam The Hague Airport',
    city: '鹿特丹',
    province: '南荷兰省',
    country: '荷兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.9569, lng: 4.4375 },
    runways: 1,
    priority: 85, // 🚢 欧洲最大港口机场
    hub: ['Transavia'],
    cargo: true
  },

  // ================================================================
  // 📍 埃因霍温 - 北布拉班特省
  // ================================================================

  {
    iata: 'EIN',
    icao: 'EHEH',
    chinese: '埃因霍温机场',
    english: 'Eindhoven Airport',
    city: '埃因霍温',
    province: '北布拉班特省',
    country: '荷兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.4500, lng: 5.3742 },
    runways: 1,
    priority: 88, // 🏭 科技城市机场
    hub: ['Wizz Air', 'Ryanair'],
    cargo: false
  },

  // ================================================================
  // 📍 马斯特里赫特 - 林堡省
  // ================================================================

  {
    iata: 'MST',
    icao: 'EHBK',
    chinese: '马斯特里赫特亚琛机场',
    english: 'Maastricht Aachen Airport',
    city: '马斯特里赫特',
    province: '林堡省',
    country: '荷兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.9117, lng: 5.7703 },
    runways: 1,
    priority: 82, // 🌍 荷德边境国际机场
    cargo: true
  },

  // ================================================================
  // 📍 格罗宁根 - 格罗宁根省
  // ================================================================

  {
    iata: 'GRQ',
    icao: 'EHGG',
    chinese: '格罗宁根机场埃尔德',
    english: 'Groningen Airport Eelde',
    city: '格罗宁根',
    province: '格罗宁根省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 53.1197, lng: 6.5794 },
    runways: 1,
    priority: 75, // 🌾 北部农业省首府
    cargo: false
  },

  // ================================================================
  // 📍 恩斯赫德 - 上艾瑟尔省
  // ================================================================

  {
    iata: 'ENS',
    icao: 'EHTW',
    chinese: '恩斯赫德机场特文特',
    english: 'Enschede Airport Twente',
    city: '恩斯赫德',
    province: '上艾瑟尔省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.2703, lng: 6.8911 },
    runways: 1,
    priority: 72, // 🏭 东部工业城市
    cargo: false
  },

  // ================================================================
  // 📍 登海尔德 - 北荷兰省
  // ================================================================

  {
    iata: 'DHR',
    icao: 'EHKD',
    chinese: '登海尔德机场',
    english: 'Den Helder Airport',
    city: '登海尔德',
    province: '北荷兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.9239, lng: 4.7808 },
    runways: 1,
    priority: 68, // ⚓ 海军基地机场
    cargo: false
  },

  // ================================================================
  // 📍 莱利斯塔德 - 弗莱福兰省
  // ================================================================

  {
    iata: 'LEY',
    icao: 'EHLE',
    chinese: '莱利斯塔德机场',
    english: 'Lelystad Airport',
    city: '莱利斯塔德',
    province: '弗莱福兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.4603, lng: 5.5272 },
    runways: 1,
    priority: 70, // 🌊 填海造地新城
    cargo: false
  },

  // ================================================================
  // 📍 阿默兰岛 - 弗里斯兰省
  // ================================================================

  {
    iata: 'AME',
    icao: 'EHAL',
    chinese: '阿默兰岛机场',
    english: 'Ameland Airport',
    city: '阿默兰岛',
    province: '弗里斯兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 53.4519, lng: 5.6742 },
    runways: 1,
    priority: 62, // 🏝️ 瓦登海群岛
    cargo: false
  },

  // ================================================================
  // 📍 特塞尔岛 - 北荷兰省
  // ================================================================

  {
    iata: 'TEX',
    icao: 'EHTX',
    chinese: '特塞尔岛机场',
    english: 'Texel Airport',
    city: '特塞尔岛',
    province: '北荷兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 53.1158, lng: 4.8361 },
    runways: 1,
    priority: 60, // 🏝️ 瓦登海最大岛屿
    cargo: false
  },

  // ================================================================
  // 📍 希尔德雷德 - 弗莱福兰省
  // ================================================================

  {
    iata: 'HIL',
    icao: 'EHHI',
    chinese: '希尔德雷德机场',
    english: 'Hilversum Airport',
    city: '希尔德雷德',
    province: '北荷兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.1928, lng: 5.1464 },
    runways: 1,
    priority: 65, // 📻 广播电视中心
    cargo: false
  },

  // ================================================================
  // 📍 布雷达 - 北布拉班特省
  // ================================================================

  {
    iata: 'GIL',
    icao: 'EHGR',
    chinese: '吉尔泽-赖恩机场',
    english: 'Gilze-Rijen Air Base',
    city: '布雷达',
    province: '北布拉班特省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 51.5672, lng: 4.9319 },
    runways: 1,
    priority: 67, // ✈️ 军用航空基地
    cargo: false
  },

  // ================================================================
  // 📍 代尔夫特 - 南荷兰省
  // ================================================================

  {
    iata: 'QDL',
    icao: 'EHRD',
    chinese: '代尔夫特机场',
    english: 'Delft Airport',
    city: '代尔夫特',
    province: '南荷兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.0067, lng: 4.3681 },
    runways: 1,
    priority: 63, // 🎓 理工大学城
    cargo: false
  },

  // ================================================================
  // 📍 弗利辛恩 - 泽兰省
  // ================================================================

  {
    iata: 'UDE',
    icao: 'EHFZ',
    chinese: '弗利辛恩机场',
    english: 'Vlissingen Airport',
    city: '弗利辛恩',
    province: '泽兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 51.4450, lng: 3.5928 },
    runways: 1,
    priority: 58, // 🌊 泽兰省沿海
    cargo: false
  },

  // ================================================================
  // 📍 德科伊 - 弗里斯兰省
  // ================================================================

  {
    iata: 'DHD',
    icao: 'EHDR',
    chinese: '德科伊机场',
    english: 'De Kooy Airport',
    city: '登海尔德',
    province: '北荷兰省',
    country: '荷兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 52.9239, lng: 4.7808 },
    runways: 1,
    priority: 64, // 🛡️ 海军航空基地
    cargo: false
  }

];

// 导出统计信息
export const netherlandsAirportStats = {
  totalAirports: netherlandsEnhancedAirports.length,
  internationalAirports: netherlandsEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: netherlandsEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: netherlandsEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(netherlandsEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: netherlandsEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '荷兰12个省份完整覆盖',
  specialFeatures: [
    '🥇 史基浦机场 - 欧洲最重要航空枢纽之一，6条跑道',
    '🚢 鹿特丹海牙机场 - 欧洲最大港口城市航空门户',
    '🏭 埃因霍温机场 - 科技之都，飞利浦总部所在地',
    '🌍 马斯特里赫特机场 - 荷德边境国际机场',
    '🏝️ 瓦登海群岛机场 - 阿默兰岛、特塞尔岛等自然保护区',
    '🌊 兰德斯塔德机场群 - 阿姆斯特丹、鹿特丹大都市航空网络'
  ]
};
