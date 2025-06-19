// 澳大利亚增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：澳大利亚民航安全局官方数据 + IATA官方数据库 + 澳大利亚机场协会数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇦🇺 澳大利亚 AUSTRALIA - 25个主要机场（按重要性排序）
// ================================================================

export const australiaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'SYD': {
    chinese: '悉尼金斯福德·史密斯',
    english: 'Sydney Kingsford Smith Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 100
  },

  'MEL': {
    chinese: '墨尔本图拉马林',
    english: 'Melbourne Tullamarine Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 98
  },

  'PER': {
    chinese: '珀斯',
    english: 'Perth Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'BNE': {
    chinese: '布里斯班',
    english: 'Brisbane Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 92
  },

  'ADL': {
    chinese: '阿德莱德',
    english: 'Adelaide Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 90
  },

  'CBR': {
    chinese: '堪培拉',
    english: 'Canberra Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 88
  },

  'DRW': {
    chinese: '达尔文',
    english: 'Darwin Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 86
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 75-84)
  // ================================================================

  'CNS': {
    chinese: '凯恩斯',
    english: 'Cairns Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 84
  },

  'OOL': {
    chinese: '黄金海岸',
    english: 'Gold Coast Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 82
  },

  'HBA': {
    chinese: '霍巴特',
    english: 'Hobart Airport',
    country: '澳大利亚',
    type: 'international',
    customs: true,
    priority: 80
  },

  'TSV': {
    chinese: '汤斯维尔',
    english: 'Townsville Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 78
  },

  'LST': {
    chinese: '朗塞斯顿',
    english: 'Launceston Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 76
  },

  // ================================================================
  // 第四等级：国内重要机场 (Priority: 65-74)
  // ================================================================

  'ROK': {
    chinese: '罗克汉普顿',
    english: 'Rockhampton Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'MCY': {
    chinese: '阳光海岸',
    english: 'Sunshine Coast Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'AVV': {
    chinese: '阿瓦隆',
    english: 'Avalon Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'ABX': {
    chinese: '奥尔伯里',
    english: 'Albury Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'BHQ': {
    chinese: '布罗肯希尔',
    english: 'Broken Hill Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  // ================================================================
  // 第五等级：地方机场 (Priority: 55-64)
  // ================================================================

  'BDB': {
    chinese: '邦达堡',
    english: 'Bundaberg Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 64
  },

  'MKY': {
    chinese: '麦凯',
    english: 'Mackay Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 62
  },

  'HTI': {
    chinese: '汉密尔顿岛',
    english: 'Hamilton Island Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  'PPP': {
    chinese: '普罗瑟派恩',
    english: 'Proserpine Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 58
  },

  'ASP': {
    chinese: '艾丽斯泉',
    english: 'Alice Springs Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 56
  },

  // ================================================================
  // 第六等级：特殊机场 (Priority: 50-54)
  // ================================================================

  'ULU': {
    chinese: '乌鲁鲁',
    english: 'Ayers Rock Airport (Uluru)',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 55
  },

  'KGI': {
    chinese: '袋鼠岛',
    english: 'Kangaroo Island Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 52
  },

  'BRK': {
    chinese: '布鲁姆',
    english: 'Broome Airport',
    country: '澳大利亚',
    type: 'domestic',
    customs: false,
    priority: 50
  }
};

// ================================================================
// 🏙️ 澳大利亚主要城市机场统计
// ================================================================
// 新南威尔士州: 3个机场 (悉尼、奥尔伯里、布罗肯希尔)
// 维多利亚州: 2个机场 (墨尔本、阿瓦隆)
// 昆士兰州: 10个机场 (布里斯班、凯恩斯、黄金海岸、汤斯维尔等)
// 西澳大利亚州: 3个机场 (珀斯、布鲁姆等)
// 南澳大利亚州: 2个机场 (阿德莱德、袋鼠岛)
// 塔斯马尼亚州: 2个机场 (霍巴特、朗塞斯顿)
// 北领地: 2个机场 (达尔文、艾丽斯泉)
// 首都领地: 1个机场 (堪培拉)
//
// 🎯 国际机场: 10个 (40%)
// 🏠 国内机场: 15个 (60%)
// ✈️ 海关机场: 10个 (40%)
// 📊 优先级分布: 50-100分
//
// 🌟 特色:
// - 悉尼机场: 澳大利亚最繁忙的国际门户
// - 地理广阔: 世界第六大国家的完整航空网络
// - 旅游胜地: 大堡礁、乌鲁鲁、黄金海岸等世界景点
// - 资源经济: 铁矿石、煤炭等重要货运出口基地
// - 现代化水平: 发达国家的先进机场设施
// ================================================================
