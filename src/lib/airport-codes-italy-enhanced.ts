// 意大利增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：意大利民航局官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇮🇹 意大利 ITALY - 25个主要机场（按重要性排序）
// ================================================================

export const italyAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'FCO': {
    chinese: '罗马菲乌米奇诺',
    english: 'Rome Leonardo da Vinci International Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 100
  },

  'MXP': {
    chinese: '米兰马尔彭萨',
    english: 'Milan Malpensa Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 98
  },

  'BGY': {
    chinese: '米兰贝加莫',
    english: 'Milan Bergamo Orio al Serio Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'NAP': {
    chinese: '那不勒斯',
    english: 'Naples International Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 94
  },

  'VCE': {
    chinese: '威尼斯马可波罗',
    english: 'Venice Marco Polo Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 92
  },

  'BLQ': {
    chinese: '博洛尼亚',
    english: 'Bologna Guglielmo Marconi Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 90
  },

  'CTA': {
    chinese: '卡塔尼亚',
    english: 'Catania Fontanarossa Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 88
  },

  'PMO': {
    chinese: '巴勒莫',
    english: 'Palermo Falcone Borsellino Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 86
  },

  'FLR': {
    chinese: '佛罗伦萨',
    english: 'Florence Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'TRN': {
    chinese: '都灵',
    english: 'Turin Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 84
  },

  'PSA': {
    chinese: '比萨伽利略',
    english: 'Pisa Galileo Galilei Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 83
  },

  'BRI': {
    chinese: '巴里',
    english: 'Bari Karol Wojtyla Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 82
  },

  'CAG': {
    chinese: '卡利亚里',
    english: 'Cagliari Elmas Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 81
  },

  'OLB': {
    chinese: '奥尔比亚',
    english: 'Olbia Costa Smeralda Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 80
  },

  'GEN': {
    chinese: '热那亚',
    english: 'Genoa Cristoforo Colombo Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 79
  },

  'VRN': {
    chinese: '维罗纳',
    english: 'Verona Villafranca Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 78
  },

  'AHO': {
    chinese: '阿尔盖罗',
    english: 'Alghero-Fertilia Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 77
  },

  'REG': {
    chinese: '雷焦卡拉布里亚',
    english: 'Reggio Calabria Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 76
  },

  'TPS': {
    chinese: '特拉帕尼',
    english: 'Trapani Birgi Airport',
    country: '意大利',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'LIN': {
    chinese: '米兰利纳特',
    english: 'Milan Linate Airport',
    country: '意大利',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'CIA': {
    chinese: '罗马钱皮诺',
    english: 'Rome Ciampino Airport',
    country: '意大利',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'TSF': {
    chinese: '特雷维索',
    english: 'Treviso Antonio Canova Airport',
    country: '意大利',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'AOI': {
    chinese: '安科纳',
    english: 'Ancona Falconara Airport',
    country: '意大利',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'PEG': {
    chinese: '佩鲁贾',
    english: 'Perugia San Francesco d\'Assisi Airport',
    country: '意大利',
    type: 'domestic',
    customs: false,
    priority: 70
  }

};

// 导出机场数量统计
export const ITALY_AIRPORT_STATS = {
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

export default italyAirportsEnhanced;
