// 🌏 亚洲其他重要国家机场数据库 - 增强版本
// Asia Other Important Countries Enhanced Airport Database
// 第八十一批机场数据库 - 亚洲航空网络完善

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
// 🌏 亚洲其他重要国家机场数据库 - 25个主要机场
// 覆盖蒙古、阿富汗、也门、叙利亚
// 亚洲航空网络完善，连接中亚、西亚、阿拉伯半岛的重要航空走廊
// ================================================================

export const asiaOtherEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 蒙古 - 草原之国
  // ================================================================

  {
    iata: 'ULN',
    icao: 'ZMUB',
    chinese: '乌兰巴托成吉思汗国际机场',
    english: 'Ulaanbaatar Chinggis Khaan International Airport',
    city: '乌兰巴托',
    province: '乌兰巴托',
    country: '蒙古',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ULAT',
    coordinates: { lat: 47.8431, lng: 106.7664 },
    runways: 2,
    priority: 100, // 🥇 蒙古首都，草原之国门户
    hub: ['MIAT Mongolian Airlines'],
    cargo: true
  },

  {
    iata: 'ULO',
    icao: 'ZMUL',
    chinese: '乌兰巴托布彦特·乌哈机场',
    english: 'Ulaanbaatar Buyant-Ukhaa Airport',
    city: '乌兰巴托',
    province: '乌兰巴托',
    country: '蒙古',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ULAT',
    coordinates: { lat: 47.8653, lng: 106.7675 },
    runways: 1,
    priority: 85, // ✈️ 乌兰巴托老机场，国内航空
    cargo: false
  },

  {
    iata: 'MXV',
    icao: 'ZMMU',
    chinese: '木伦机场',
    english: 'Murun Airport',
    city: '木伦',
    province: '库苏古尔',
    country: '蒙古',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ULAT',
    coordinates: { lat: 49.6633, lng: 100.0997 },
    runways: 1,
    priority: 78, // 🌊 库苏古尔湖门户，蓝色明珠
    cargo: false
  },

  {
    iata: 'COQ',
    icao: 'ZMCO',
    chinese: '乔巴山机场',
    english: 'Choibalsan Airport',
    city: '乔巴山',
    province: '东方',
    country: '蒙古',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ULAT',
    coordinates: { lat: 48.1356, lng: 114.6456 },
    runways: 1,
    priority: 75, // 🌾 东部草原重镇
    cargo: false
  },

  {
    iata: 'UGA',
    icao: 'ZMUG',
    chinese: '乌拉盖机场',
    english: 'Ulaangom Airport',
    city: '乌拉盖',
    province: '乌布苏',
    country: '蒙古',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ULAT',
    coordinates: { lat: 49.9733, lng: 92.0828 },
    runways: 1,
    priority: 72, // 🏔️ 西部山区重镇
    cargo: false
  },

  {
    iata: 'HVD',
    icao: 'ZMKD',
    chinese: '科布多机场',
    english: 'Khovd Airport',
    city: '科布多',
    province: '科布多',
    country: '蒙古',
    isInternational: false,
    hasCustoms: true,
    timezone: 'HOVT',
    coordinates: { lat: 47.9541, lng: 91.6281 },
    runways: 1,
    priority: 74, // 🏔️ 阿尔泰山门户
    cargo: false
  },

  // ================================================================
  // 📍 阿富汗 - 山国门户
  // ================================================================

  {
    iata: 'KBL',
    icao: 'OAKB',
    chinese: '喀布尔哈米德·卡尔扎伊国际机场',
    english: 'Kabul Hamid Karzai International Airport',
    city: '喀布尔',
    province: '喀布尔',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 34.5656, lng: 69.2123 },
    runways: 2,
    priority: 98, // 🏛️ 阿富汗首都，山国门户
    hub: ['Ariana Afghan Airlines'],
    cargo: true
  },

  {
    iata: 'MZR',
    icao: 'OAMS',
    chinese: '马扎里沙里夫机场',
    english: 'Mazar-i-Sharif Airport',
    city: '马扎里沙里夫',
    province: '巴尔赫',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 36.7069, lng: 67.2097 },
    runways: 1,
    priority: 88, // 🕌 北部重要城市，古丝绸之路
    cargo: true
  },

  {
    iata: 'HEA',
    icao: 'OAHR',
    chinese: '赫拉特机场',
    english: 'Herat Airport',
    city: '赫拉特',
    province: '赫拉特',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 34.2100, lng: 62.2283 },
    runways: 1,
    priority: 85, // 🏺 西部重镇，古代文明中心
    cargo: false
  },

  {
    iata: 'KDH',
    icao: 'OAKN',
    chinese: '坎大哈机场',
    english: 'Kandahar Airport',
    city: '坎大哈',
    province: '坎大哈',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 31.5058, lng: 65.8478 },
    runways: 2,
    priority: 82, // 🏜️ 南部重要城市
    cargo: true
  },

  {
    iata: 'JAA',
    icao: 'OAJL',
    chinese: '贾拉拉巴德机场',
    english: 'Jalalabad Airport',
    city: '贾拉拉巴德',
    province: '楠格哈尔',
    country: '阿富汗',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 34.3994, lng: 70.4986 },
    runways: 1,
    priority: 76, // 🏔️ 东部山区重镇
    cargo: false
  },

  {
    iata: 'BST',
    icao: 'OABT',
    chinese: '巴斯特机场',
    english: 'Bost Airport',
    city: '拉什卡尔加',
    province: '赫尔曼德',
    country: '阿富汗',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: { lat: 31.5597, lng: 64.3650 },
    runways: 1,
    priority: 73, // 🌾 南部农业重镇
    cargo: false
  },

  // ================================================================
  // 📍 也门 - 阿拉伯半岛南端
  // ================================================================

  {
    iata: 'SAH',
    icao: 'OYSN',
    chinese: '萨那国际机场',
    english: 'Sana\'a International Airport',
    city: '萨那',
    province: '萨那',
    country: '也门',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 15.4762, lng: 44.2197 },
    runways: 1,
    priority: 96, // 🏛️ 也门首都，阿拉伯半岛南端
    hub: ['Yemenia'],
    cargo: true
  },

  {
    iata: 'ADE',
    icao: 'OYAA',
    chinese: '亚丁国际机场',
    english: 'Aden International Airport',
    city: '亚丁',
    province: '亚丁',
    country: '也门',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 12.8297, lng: 45.0289 },
    runways: 1,
    priority: 90, // 🌊 亚丁湾重要港口，红海门户
    cargo: true
  },

  {
    iata: 'HOD',
    icao: 'OYHD',
    chinese: '荷台达机场',
    english: 'Hodeidah Airport',
    city: '荷台达',
    province: '荷台达',
    country: '也门',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 14.7531, lng: 42.9764 },
    runways: 1,
    priority: 83, // 🌊 红海重要港口
    cargo: true
  },

  {
    iata: 'TAI',
    icao: 'OYTZ',
    chinese: '塔伊兹机场',
    english: 'Taiz Airport',
    city: '塔伊兹',
    province: '塔伊兹',
    country: '也门',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 13.6856, lng: 44.1394 },
    runways: 1,
    priority: 78, // 🏔️ 高原重要城市
    cargo: false
  },

  {
    iata: 'MYN',
    icao: 'OYMN',
    chinese: '马里卜机场',
    english: 'Marib Airport',
    city: '马里卜',
    province: '马里卜',
    country: '也门',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 15.4697, lng: 45.3269 },
    runways: 1,
    priority: 75, // 🏺 古示巴王国遗址
    cargo: false
  },

  {
    iata: 'SCT',
    icao: 'OYSO',
    chinese: '索科特拉机场',
    english: 'Socotra Airport',
    city: '哈迪布',
    province: '索科特拉',
    country: '也门',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 12.6306, lng: 53.9050 },
    runways: 1,
    priority: 80, // 🌴 索科特拉岛，加拉帕戈斯群岛
    cargo: false
  },

  // ================================================================
  // 📍 叙利亚 - 古代文明摇篮
  // ================================================================

  {
    iata: 'DAM',
    icao: 'OSDI',
    chinese: '大马士革国际机场',
    english: 'Damascus International Airport',
    city: '大马士革',
    province: '大马士革农村',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 33.4114, lng: 36.5156 },
    runways: 2,
    priority: 94, // 🏛️ 叙利亚首都，古代文明摇篮
    hub: ['Syrian Arab Airlines'],
    cargo: true
  },

  {
    iata: 'ALP',
    icao: 'OSAP',
    chinese: '阿勒颇国际机场',
    english: 'Aleppo International Airport',
    city: '阿勒颇',
    province: '阿勒颇',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.1806, lng: 37.2244 },
    runways: 1,
    priority: 87, // 🏺 古代商业重镇，丝绸之路
    cargo: true
  },

  {
    iata: 'LTK',
    icao: 'OSLK',
    chinese: '拉塔基亚机场',
    english: 'Latakia Airport',
    city: '拉塔基亚',
    province: '拉塔基亚',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.4011, lng: 35.9486 },
    runways: 1,
    priority: 81, // 🌊 地中海重要港口
    cargo: false
  },

  {
    iata: 'KAC',
    icao: 'OSKL',
    chinese: '卡米什利机场',
    english: 'Qamishli Airport',
    city: '卡米什利',
    province: '哈塞克',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.0206, lng: 41.1914 },
    runways: 1,
    priority: 76, // 🌾 东北部农业重镇
    cargo: false
  },

  {
    iata: 'DEZ',
    icao: 'OSDZ',
    chinese: '代尔祖尔机场',
    english: 'Deir ez-Zor Airport',
    city: '代尔祖尔',
    province: '代尔祖尔',
    country: '叙利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.2853, lng: 40.1761 },
    runways: 1,
    priority: 74, // 🌊 幼发拉底河重要城市
    cargo: false
  },

  {
    iata: 'PMS',
    icao: 'OSPR',
    chinese: '帕尔米拉机场',
    english: 'Palmyra Airport',
    city: '帕尔米拉',
    province: '霍姆斯',
    country: '叙利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 34.5575, lng: 38.3169 },
    runways: 1,
    priority: 78, // 🏺 帕尔米拉古城，世界遗产
    cargo: false
  }

];

// 导出统计信息
export const asiaOtherAirportStats = {
  totalAirports: asiaOtherEnhancedAirports.length,
  internationalAirports: asiaOtherEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: asiaOtherEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: asiaOtherEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(asiaOtherEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(asiaOtherEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: asiaOtherEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '亚洲其他重要四国完整覆盖',
  specialFeatures: [
    '🥇 乌兰巴托成吉思汗机场 - 蒙古首都，草原之国门户',
    '🏛️ 喀布尔哈米德·卡尔扎伊机场 - 阿富汗首都，山国门户',
    '🏛️ 萨那国际机场 - 也门首都，阿拉伯半岛南端',
    '🏛️ 大马士革国际机场 - 叙利亚首都，古代文明摇篮',
    '🌊 库苏古尔湖机场 - 蒙古蓝色明珠，亚洲瑞士',
    '🕌 马扎里沙里夫机场 - 古丝绸之路重镇，蓝色清真寺',
    '🌊 亚丁国际机场 - 亚丁湾重要港口，红海门户',
    '🏺 帕尔米拉机场 - 帕尔米拉古城，沙漠新娘',
    '🌴 索科特拉机场 - 阿拉伯海加拉帕戈斯，世界遗产',
    '🏺 阿勒颇机场 - 古代商业重镇，东西方文明交汇'
  ]
};
