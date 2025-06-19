// 日本增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：日本国土交通省官方数据 + IATA官方数据库 + Skytrax机场排名

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇯🇵 日本 JAPAN - 30个主要机场（按重要性排序）
// ================================================================

export const japanAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'HND': {
    chinese: '东京羽田',
    english: 'Tokyo Haneda Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 98  // 降低羽田优先级，客运为主
  },

  'NRT': {
    chinese: '东京成田',
    english: 'Narita International Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 100  // 成田优先级最高，主要国际货运枢纽
  },

  'KIX': {
    chinese: '大阪关西',
    english: 'Kansai International Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 98
  },

  'NGO': {
    chinese: '名古屋中部',
    english: 'Chubu Centrair International Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'CTS': {
    chinese: '札幌新千岁',
    english: 'New Chitose Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 94
  },

  'FUK': {
    chinese: '福冈',
    english: 'Fukuoka Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 92
  },

  'OKA': {
    chinese: '冲绳那霸',
    english: 'Naha Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 90
  },

  'ITM': {
    chinese: '大阪伊丹',
    english: 'Osaka International Airport (Itami)',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 88
  },

  'SDJ': {
    chinese: '仙台',
    english: 'Sendai Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 86
  },

  'KOJ': {
    chinese: '鹿儿岛',
    english: 'Kagoshima Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'HIJ': {
    chinese: '广岛',
    english: 'Hiroshima Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 84
  },

  'KMJ': {
    chinese: '熊本',
    english: 'Kumamoto Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 83
  },

  'NGS': {
    chinese: '长崎',
    english: 'Nagasaki Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 82
  },

  'UKB': {
    chinese: '神户',
    english: 'Kobe Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 81
  },

  'TAK': {
    chinese: '高松',
    english: 'Takamatsu Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 80
  },

  'MYJ': {
    chinese: '松山',
    english: 'Matsuyama Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 79
  },

  'KMI': {
    chinese: '宫崎',
    english: 'Miyazaki Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 78
  },

  'OIT': {
    chinese: '大分',
    english: 'Oita Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 77
  },

  'TKS': {
    chinese: '德岛',
    english: 'Tokushima Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 76
  },

  'KCZ': {
    chinese: '高知',
    english: 'Kochi Airport',
    country: '日本',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'KMQ': {
    chinese: '小松',
    english: 'Komatsu Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'AXT': {
    chinese: '秋田',
    english: 'Akita Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'AOJ': {
    chinese: '青森',
    english: 'Aomori Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'HNA': {
    chinese: '花卷',
    english: 'Hanamaki Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'GAJ': {
    chinese: '山形',
    english: 'Yamagata Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'TOY': {
    chinese: '富山',
    english: 'Toyama Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 69
  },

  'KIJ': {
    chinese: '新潟',
    english: 'Niigata Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'MMJ': {
    chinese: '松本',
    english: 'Matsumoto Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 67
  },

  'FSZ': {
    chinese: '静冈',
    english: 'Mt. Fuji Shizuoka Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  'HKD': {
    chinese: '函馆',
    english: 'Hakodate Airport',
    country: '日本',
    type: 'domestic',
    customs: false,
    priority: 65
  }

};

// 导出机场数量统计
export const JAPAN_AIRPORT_STATS = {
  total: 30,
  international: 20,
  domestic: 10,
  regional: 0,
  withCustoms: 20,
  topTier: 4,       // Priority 95+
  secondTier: 6,    // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 10    // Priority 65-74
};

export default japanAirportsEnhanced;
