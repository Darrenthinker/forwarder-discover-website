// 新西兰增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：新西兰民航局官方数据 + IATA官方数据库 + 新西兰机场公司数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇳🇿 新西兰 NEW ZEALAND - 12个主要机场（按重要性排序）
// ================================================================

export const newZealandAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'AKL': {
    chinese: '奥克兰',
    english: 'Auckland Airport',
    country: '新西兰',
    type: 'international',
    customs: true,
    priority: 100
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'WLG': {
    chinese: '惠灵顿',
    english: 'Wellington International Airport',
    country: '新西兰',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CHC': {
    chinese: '基督城',
    english: 'Christchurch International Airport',
    country: '新西兰',
    type: 'international',
    customs: true,
    priority: 90
  },

  'ZQN': {
    chinese: '皇后镇',
    english: 'Queenstown Airport',
    country: '新西兰',
    type: 'international',
    customs: true,
    priority: 88
  },

  // ================================================================
  // 第三等级：区域机场 (Priority: 75-84)
  // ================================================================

  'DUD': {
    chinese: '丹尼丁',
    english: 'Dunedin Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 82
  },

  'HLZ': {
    chinese: '汉密尔顿',
    english: 'Hamilton Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 80
  },

  'ROT': {
    chinese: '罗托鲁瓦',
    english: 'Rotorua Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 78
  },

  'NPE': {
    chinese: '内皮尔霍克斯湾',
    english: 'Hawke\'s Bay Airport (Napier)',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 76
  },

  // ================================================================
  // 第四等级：地方机场 (Priority: 65-74)
  // ================================================================

  'IVC': {
    chinese: '因弗卡吉尔',
    english: 'Invercargill Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'NSN': {
    chinese: '尼尔森',
    english: 'Nelson Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'PMR': {
    chinese: '帕默斯顿北',
    english: 'Palmerston North Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'TUO': {
    chinese: '陶波',
    english: 'Taupo Airport',
    country: '新西兰',
    type: 'domestic',
    customs: false,
    priority: 68
  }
};

// ================================================================
// 🏙️ 新西兰主要城市机场统计
// ================================================================
// 北岛: 8个机场 (奥克兰、惠灵顿、汉密尔顿、罗托鲁瓦、内皮尔、帕默斯顿北、陶波等)
// 南岛: 4个机场 (基督城、皇后镇、丹尼丁、因弗卡吉尔、尼尔森)
//
// 🎯 国际机场: 4个 (33%)
// 🏠 国内机场: 8个 (67%)
// ✈️ 海关机场: 4个 (33%)
// 📊 优先级分布: 68-100分
//
// 🌟 特色:
// - 奥克兰机场: 新西兰最重要的国际门户
// - 地理特色: 覆盖北岛、南岛两大主要岛屿
// - 旅游胜地: 皇后镇世界知名冒险旅游中心
// - 英联邦发达国家: 现代化机场设施
// - 农牧业出口: 重要的农产品和畜牧业货运基地
// ================================================================
