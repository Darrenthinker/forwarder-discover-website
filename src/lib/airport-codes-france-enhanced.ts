// 法国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：法国民航总局官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇫🇷 法国 FRANCE - 25个主要机场（按重要性排序）
// ================================================================

export const franceAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'CDG': {
    chinese: '巴黎戴高乐',
    english: 'Paris Charles de Gaulle Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'ORY': {
    chinese: '巴黎奥利',
    english: 'Paris Orly Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 98
  },

  'NCE': {
    chinese: '尼斯蔚蓝海岸',
    english: 'Nice Côte d\'Azur Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'LYS': {
    chinese: '里昂圣埃克絮佩里',
    english: 'Lyon Saint-Exupéry Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 94
  },

  'MRS': {
    chinese: '马赛普罗旺斯',
    english: 'Marseille Provence Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'TLS': {
    chinese: '图卢兹布拉尼亚克',
    english: 'Toulouse Blagnac Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 90
  },

  'BOD': {
    chinese: '波尔多',
    english: 'Bordeaux Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'NTE': {
    chinese: '南特',
    english: 'Nantes Atlantique Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 86
  },

  'SXB': {
    chinese: '斯特拉斯堡',
    english: 'Strasbourg Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'MPL': {
    chinese: '蒙彼利埃',
    english: 'Montpellier Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 84
  },

  'LIL': {
    chinese: '里尔',
    english: 'Lille Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 83
  },

  'BVA': {
    chinese: '巴黎博韦',
    english: 'Paris Beauvais Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'BIA': {
    chinese: '巴斯蒂亚',
    english: 'Bastia Poretta Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 81
  },

  'AJA': {
    chinese: '阿雅克肖',
    english: 'Ajaccio Napoleon Bonaparte Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 80
  },

  'RNS': {
    chinese: '雷恩',
    english: 'Rennes Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 79
  },

  'BZR': {
    chinese: '贝济耶',
    english: 'Béziers Cap d\'Agde Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'CLY': {
    chinese: '卡尔维',
    english: 'Calvi Sainte-Catherine Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 77
  },

  'PGF': {
    chinese: '佩皮尼昂',
    english: 'Perpignan Rivesaltes Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 76
  },

  'AVN': {
    chinese: '阿维尼翁',
    english: 'Avignon Airport',
    country: '法国',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'BES': {
    chinese: '布雷斯特',
    english: 'Brest Bretagne Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'ETZ': {
    chinese: '梅斯',
    english: 'Metz-Nancy-Lorraine Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'CFR': {
    chinese: '卡昂',
    english: 'Caen Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'DIJ': {
    chinese: '第戎',
    english: 'Dijon Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'QXB': {
    chinese: '艾克斯',
    english: 'Aix-les-Bains Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'CMF': {
    chinese: '尚贝里',
    english: 'Chambéry Airport',
    country: '法国',
    type: 'domestic',
    customs: false,
    priority: 69
  }

};

// 导出机场数量统计
export const FRANCE_AIRPORT_STATS = {
  total: 25,
  international: 19,
  domestic: 6,
  regional: 0,
  withCustoms: 19,
  topTier: 3,       // Priority 95+
  secondTier: 6,    // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 6     // Priority 65-74
};

export default franceAirportsEnhanced;
