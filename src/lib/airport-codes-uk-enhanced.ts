// 英国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：英国民航局官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇬🇧 英国 UNITED KINGDOM - 25个主要机场（按重要性排序）
// ================================================================

export const ukAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 城市代码：伦敦所有机场共享代码 (Priority: 105)
  // ================================================================

  'LON': {
    chinese: '伦敦',
    english: 'London (All Airports)',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 105 // 城市代码最高优先级
  },

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'LHR': {
    chinese: '伦敦希思罗',
    english: 'London Heathrow',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'LGW': {
    chinese: '伦敦盖特威克',
    english: 'London Gatwick',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'MAN': {
    chinese: '曼彻斯特',
    english: 'Manchester Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 94
  },

  'STN': {
    chinese: '伦敦斯坦斯特德',
    english: 'London Stansted',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 93
  },

  'LTN': {
    chinese: '伦敦卢顿',
    english: 'London Luton',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'EDI': {
    chinese: '爱丁堡',
    english: 'Edinburgh Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 91
  },

  'BHX': {
    chinese: '伯明翰',
    english: 'Birmingham Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 90
  },

  'GLA': {
    chinese: '格拉斯哥',
    english: 'Glasgow International',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 89
  },

  'BRS': {
    chinese: '布里斯托尔',
    english: 'Bristol Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'LBA': {
    chinese: '利兹布拉德福德',
    english: 'Leeds Bradford Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 87
  },

  'LPL': {
    chinese: '利物浦',
    english: 'Liverpool John Lennon Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 86
  },

  'NCL': {
    chinese: '纽卡斯尔',
    english: 'Newcastle Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'LCY': {
    chinese: '伦敦城市',
    english: 'London City Airport',
    country: '英国',
    type: 'domestic',
    customs: false,
    priority: 84
  },

  'ABZ': {
    chinese: '阿伯丁',
    english: 'Aberdeen Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 83
  },

  'BFS': {
    chinese: '贝尔法斯特国际',
    english: 'Belfast International Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'EMA': {
    chinese: '东米德兰兹',
    english: 'East Midlands Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 81
  },

  'CWL': {
    chinese: '卡迪夫',
    english: 'Cardiff Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 80
  },

  'SOU': {
    chinese: '南安普顿',
    english: 'Southampton Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 79
  },

  'NQY': {
    chinese: '纽基康沃尔',
    english: 'Cornwall Airport Newquay',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'EXT': {
    chinese: '埃克塞特',
    english: 'Exeter Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 77
  },

  'INV': {
    chinese: '因弗内斯',
    english: 'Inverness Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 76
  },

  'DSA': {
    chinese: '唐卡斯特谢菲尔德',
    english: 'Doncaster Sheffield Airport',
    country: '英国',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'HUY': {
    chinese: '亨伯赛德',
    english: 'Humberside Airport',
    country: '英国',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'NWI': {
    chinese: '诺里奇',
    english: 'Norwich Airport',
    country: '英国',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'DND': {
    chinese: '邓迪',
    english: 'Dundee Airport',
    country: '英国',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'BEO': {
    chinese: '贝尔法斯特乔治贝斯特城市',
    english: 'Belfast George Best City Airport',
    country: '英国',
    type: 'domestic',
    customs: false,
    priority: 71
  }

};

// 导出机场数量统计
export const UK_AIRPORT_STATS = {
  total: 25,
  international: 20,
  domestic: 5,
  regional: 0,
  withCustoms: 20,
  topTier: 2,       // Priority 95+
  secondTier: 10,   // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 3     // Priority 65-74
};

export default ukAirportsEnhanced;
