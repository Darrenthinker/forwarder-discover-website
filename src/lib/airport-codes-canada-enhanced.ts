// 加拿大增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：加拿大运输部官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇨🇦 加拿大 CANADA - 25个主要机场（按重要性排序）
// ================================================================

export const canadaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'YYZ': {
    chinese: '多伦多皮尔逊',
    english: 'Toronto Pearson International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 100
  },

  'YVR': {
    chinese: '温哥华国际',
    english: 'Vancouver International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 98
  },

  'YUL': {
    chinese: '蒙特利尔特鲁多',
    english: 'Montreal Pierre Elliott Trudeau International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'YYC': {
    chinese: '卡尔加里国际',
    english: 'Calgary International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 94
  },

  'YOW': {
    chinese: '渥太华国际',
    english: 'Ottawa Macdonald-Cartier International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 92
  },

  'YEG': {
    chinese: '埃德蒙顿国际',
    english: 'Edmonton International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 90
  },

  'YHZ': {
    chinese: '哈利法克斯国际',
    english: 'Halifax Stanfield International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 88
  },

  'YWG': {
    chinese: '温尼伯国际',
    english: 'Winnipeg Richardson International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 86
  },

  'YYJ': {
    chinese: '维多利亚国际',
    english: 'Victoria International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'YQB': {
    chinese: '魁北克城国际',
    english: 'Quebec City Jean Lesage International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 84
  },

  'YXU': {
    chinese: '伦敦',
    english: 'London Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 83
  },

  'YHM': {
    chinese: '汉密尔顿',
    english: 'Hamilton John C. Munro International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 82
  },

  'YFC': {
    chinese: '弗雷德里克顿',
    english: 'Fredericton Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 81
  },

  'YQR': {
    chinese: '里贾纳',
    english: 'Regina Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 80
  },

  'YXE': {
    chinese: '萨斯卡通',
    english: 'Saskatoon John G. Diefenbaker International',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 79
  },

  'YYT': {
    chinese: '圣约翰斯',
    english: 'St. John\'s Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 78
  },

  'YKA': {
    chinese: '甘露市',
    english: 'Kamloops Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 77
  },

  'YXS': {
    chinese: '阿伯茨福德',
    english: 'Abbotsford Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 76
  },

  'YQT': {
    chinese: '桑德贝',
    english: 'Thunder Bay Airport',
    country: '加拿大',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'YTZ': {
    chinese: '多伦多岛',
    english: 'Toronto City Centre Airport',
    country: '加拿大',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'YOO': {
    chinese: '奥沙瓦',
    english: 'Oshawa Airport',
    country: '加拿大',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'YBG': {
    chinese: '巴格奥特维尔',
    english: 'Bagotville Airport',
    country: '加拿大',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'YPR': {
    chinese: '阿尔伯特王子',
    english: 'Prince Albert Airport',
    country: '加拿大',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'YQG': {
    chinese: '温莎',
    english: 'Windsor Airport',
    country: '加拿大',
    type: 'domestic',
    customs: false,
    priority: 70
  }

};

// 导出机场数量统计
export const CANADA_AIRPORT_STATS = {
  total: 25,
  international: 20,
  domestic: 5,
  regional: 0,
  withCustoms: 20,
  topTier: 3,       // Priority 95+
  secondTier: 6,    // Priority 85-94
  thirdTier: 11,    // Priority 75-84
  fourthTier: 5     // Priority 65-74
};

export default canadaAirportsEnhanced;
