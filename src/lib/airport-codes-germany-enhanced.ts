// 德国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：德国航空运输协会数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇩🇪 德国 GERMANY - 25个主要机场（按重要性排序）
// ================================================================

export const germanyAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'FRA': {
    chinese: '法兰克福',
    english: 'Frankfurt am Main Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'MUC': {
    chinese: '慕尼黑',
    english: 'Munich Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 98
  },

  'BER': {
    chinese: '柏林勃兰登堡',
    english: 'Berlin Brandenburg Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'DUS': {
    chinese: '杜塞尔多夫',
    english: 'Düsseldorf Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 94
  },

  'HAM': {
    chinese: '汉堡',
    english: 'Hamburg Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CGN': {
    chinese: '科隆波恩',
    english: 'Cologne Bonn Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 90
  },

  'STR': {
    chinese: '斯图加特',
    english: 'Stuttgart Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'HAJ': {
    chinese: '汉诺威',
    english: 'Hannover Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 87
  },

  'NUE': {
    chinese: '纽伦堡',
    english: 'Nuremberg Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 86
  },

  'LEJ': {
    chinese: '莱比锡哈雷',
    english: 'Leipzig/Halle Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'BRE': {
    chinese: '不来梅',
    english: 'Bremen Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 84
  },

  'DRS': {
    chinese: '德雷斯顿',
    english: 'Dresden Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 83
  },

  'DTM': {
    chinese: '多特蒙德',
    english: 'Dortmund Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'FKB': {
    chinese: '卡尔斯鲁厄巴登',
    english: 'Karlsruhe/Baden-Baden Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 81
  },

  'FMO': {
    chinese: '明斯特奥斯纳布吕克',
    english: 'Münster Osnabrück Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 80
  },

  'HHN': {
    chinese: '法兰克福哈恩',
    english: 'Frankfurt-Hahn Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 79
  },

  'KSF': {
    chinese: '卡塞尔',
    english: 'Kassel-Calden Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'NRN': {
    chinese: '下莱茵',
    english: 'Niederrhein Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 77
  },

  'PAD': {
    chinese: '帕德博恩',
    english: 'Paderborn-Lippstadt Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 76
  },

  'SXB': {
    chinese: '斯特拉斯堡',
    english: 'Strasbourg Airport',
    country: '德国',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'ERF': {
    chinese: '埃尔福特',
    english: 'Erfurt Airport',
    country: '德国',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'FDH': {
    chinese: '腓特烈港',
    english: 'Friedrichshafen Airport',
    country: '德国',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'HDF': {
    chinese: '霍伊耶斯韦达',
    english: 'Heringsdorf Airport',
    country: '德国',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'ZQW': {
    chinese: '茨魏布吕肯',
    english: 'Zweibrücken Airport',
    country: '德国',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'SCN': {
    chinese: '萨尔布吕肯',
    english: 'Saarbrücken Airport',
    country: '德国',
    type: 'domestic',
    customs: false,
    priority: 70
  }

};

// 导出机场数量统计
export const GERMANY_AIRPORT_STATS = {
  total: 25,
  international: 20,
  domestic: 5,
  regional: 0,
  withCustoms: 20,
  topTier: 3,       // Priority 95+
  secondTier: 7,    // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 5     // Priority 65-74
};

export default germanyAirportsEnhanced;
