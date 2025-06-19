// 美国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：IATA官方数据库 + 5688.com.cn + 官方机场信息

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇺🇸 美国 USA - 第一批30个主要机场（按重要性排序）
// ================================================================

export const usaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'JFK': {
    chinese: '纽约肯尼迪',
    english: 'New York John F. Kennedy International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'LAX': {
    chinese: '洛杉矶',
    english: 'Los Angeles International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 99
  },

  'ORD': {
    chinese: '芝加哥奥黑尔',
    english: 'Chicago O\'Hare International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 98
  },

  'ATL': {
    chinese: '亚特兰大',
    english: 'Hartsfield-Jackson Atlanta International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 97
  },

  'DFW': {
    chinese: '达拉斯沃思堡',
    english: 'Dallas/Fort Worth International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 96
  },

  'SFO': {
    chinese: '旧金山',
    english: 'San Francisco International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'MIA': {
    chinese: '迈阿密',
    english: 'Miami International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 94
  },

  'SEA': {
    chinese: '西雅图塔科马',
    english: 'Seattle-Tacoma International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 93
  },

  'BOS': {
    chinese: '波士顿洛根',
    english: 'Boston Logan International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'LGA': {
    chinese: '纽约拉瓜迪亚',
    english: 'New York LaGuardia',
    country: '美国',
    type: 'domestic',
    customs: false,
    priority: 91
  },

  'EWR': {
    chinese: '纽约纽瓦克',
    english: 'Newark Liberty International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 90
  },

  'DEN': {
    chinese: '丹佛',
    english: 'Denver International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 89
  },

  'PHX': {
    chinese: '凤凰城天港',
    english: 'Phoenix Sky Harbor International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'IAH': {
    chinese: '休斯顿布什',
    english: 'Houston George Bush Intercontinental',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 87
  },

  'LAS': {
    chinese: '拉斯维加斯麦卡伦',
    english: 'Las Vegas McCarran International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 86
  },

  'MCO': {
    chinese: '奥兰多',
    english: 'Orlando International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'DTW': {
    chinese: '底特律',
    english: 'Detroit Metropolitan Wayne County',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 84
  },

  'MSP': {
    chinese: '明尼阿波利斯圣保罗',
    english: 'Minneapolis-St. Paul International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 83
  },

  'FLL': {
    chinese: '劳德代尔堡好莱坞',
    english: 'Fort Lauderdale-Hollywood International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'BWI': {
    chinese: '巴尔的摩华盛顿',
    english: 'Baltimore/Washington International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 81
  },

  'DCA': {
    chinese: '华盛顿里根',
    english: 'Ronald Reagan Washington National',
    country: '美国',
    type: 'domestic',
    customs: false,
    priority: 80
  },

  'IAD': {
    chinese: '华盛顿杜勒斯',
    english: 'Washington Dulles International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 79
  },

  'CLE': {
    chinese: '克利夫兰霍普金斯',
    english: 'Cleveland Hopkins International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'MEM': {
    chinese: '孟菲斯',
    english: 'Memphis International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 77
  },

  'SAN': {
    chinese: '圣迭戈',
    english: 'San Diego International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 76
  },

  'TPA': {
    chinese: '坦帕',
    english: 'Tampa International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性国际机场 (Priority: 65-74)
  // ================================================================

  'OAK': {
    chinese: '奥克兰',
    english: 'Oakland International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 74
  },

  'SJC': {
    chinese: '圣何塞',
    english: 'Norman Y. Mineta San José International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 73
  },

  'PDX': {
    chinese: '波特兰',
    english: 'Portland International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 72
  },

  'HOU': {
    chinese: '休斯顿霍比',
    english: 'Houston William P. Hobby',
    country: '美国',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  // ================================================================
  // 新增重要国际机场（修复机场类型错误）
  // ================================================================

  'CVG': {
    chinese: '辛辛那提北肯塔基',
    english: 'Cincinnati/Northern Kentucky International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 76
  },

  'PHL': {
    chinese: '费城',
    english: 'Philadelphia International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 85
  },

  'IND': {
    chinese: '印第安纳波利斯',
    english: 'Indianapolis International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 74
  },

  'PIT': {
    chinese: '匹兹堡',
    english: 'Pittsburgh International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 75
  },

  'CMH': {
    chinese: '哥伦布',
    english: 'Port Columbus International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 73
  },

  'TPA': {
    chinese: '坦帕',
    english: 'Tampa International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'MSY': {
    chinese: '新奥尔良',
    english: 'Louis Armstrong New Orleans International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 77
  },

  'RDU': {
    chinese: '罗利达勒姆',
    english: 'Raleigh-Durham International',
    country: '美国',
    type: 'international',
    customs: true,
    priority: 78
  }

};

// 导出机场数量统计
export const USA_AIRPORT_STATS = {
  total: 38,
  international: 34,
  domestic: 4,
  regional: 0,
  withCustoms: 34,
  topTier: 6,    // Priority 95+
  secondTier: 12, // Priority 85-94 (新增PHL, TPA)
  thirdTier: 16, // Priority 75-84 (新增CVG, PIT, IND, MSY, RDU)
  fourthTier: 4  // Priority 65-74 (新增CMH)
};

export default usaAirportsEnhanced;
