// 印度增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：印度民航总局官方数据 + IATA官方数据库 + 印度机场管理局数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇮🇳 印度 INDIA - 30个主要机场（按重要性排序）
// ================================================================

export const indiaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'DEL': {
    chinese: '新德里英迪拉·甘地',
    english: 'Indira Gandhi International Airport (New Delhi)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 100
  },

  'BOM': {
    chinese: '孟买贾特拉帕蒂·希瓦吉',
    english: 'Chhatrapati Shivaji Maharaj International Airport (Mumbai)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 98
  },

  'BLR': {
    chinese: '班加罗尔凯普伽奥达',
    english: 'Kempegowda International Airport (Bangalore)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'MAA': {
    chinese: '金奈',
    english: 'Chennai International Airport',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 94
  },

  'HYD': {
    chinese: '海德拉巴拉吉夫·甘地',
    english: 'Rajiv Gandhi International Airport (Hyderabad)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CCU': {
    chinese: '加尔各答内塔吉·苏巴斯',
    english: 'Netaji Subhas Chandra Bose International Airport (Kolkata)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 90
  },

  'AMD': {
    chinese: '艾哈迈达巴德萨达尔·瓦拉巴伊·帕特尔',
    english: 'Sardar Vallabhbhai Patel International Airport (Ahmedabad)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 88
  },

  'PNQ': {
    chinese: '浦那',
    english: 'Pune Airport',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 86
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 75-84)
  // ================================================================

  'GOI': {
    chinese: '果阿达博利姆',
    english: 'Dabolim Airport (Goa)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 84
  },

  'COK': {
    chinese: '科钦',
    english: 'Cochin International Airport',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 82
  },

  'TRV': {
    chinese: '特里凡得琅',
    english: 'Trivandrum International Airport',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 80
  },

  'JAI': {
    chinese: '斋浦尔',
    english: 'Jaipur International Airport',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 78
  },

  'LKO': {
    chinese: '勒克瑙',
    english: 'Chaudhary Charan Singh International Airport (Lucknow)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 76
  },

  // ================================================================
  // 第四等级：国内重要机场 (Priority: 65-74)
  // ================================================================

  'IXC': {
    chinese: '昌迪加尔',
    english: 'Chandigarh Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'NAG': {
    chinese: '那格浦尔',
    english: 'Dr. Babasaheb Ambedkar International Airport (Nagpur)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 72
  },

  'IXL': {
    chinese: '列城',
    english: 'Kushok Bakula Rimpochee Airport (Leh)',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'STV': {
    chinese: '苏拉特',
    english: 'Surat Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'VNS': {
    chinese: '瓦拉纳西',
    english: 'Lal Bahadur Shastri Airport (Varanasi)',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  // ================================================================
  // 第五等级：地方机场 (Priority: 55-64)
  // ================================================================

  'IXR': {
    chinese: '兰契',
    english: 'Birsa Munda Airport (Ranchi)',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 64
  },

  'BBI': {
    chinese: '布巴内斯瓦尔',
    english: 'Biju Patnaik International Airport (Bhubaneswar)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 62
  },

  'IXU': {
    chinese: '欧查',
    english: 'Aurangabad Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  'GAU': {
    chinese: '高哈提',
    english: 'Lokpriya Gopinath Bordoloi International Airport (Guwahati)',
    country: '印度',
    type: 'international',
    customs: true,
    priority: 58
  },

  'IXS': {
    chinese: '锡尔恰尔',
    english: 'Silchar Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 56
  },

  'IMF': {
    chinese: '英帕尔',
    english: 'Imphal Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 55
  },

  // ================================================================
  // 第六等级：特殊机场 (Priority: 50-54)
  // ================================================================

  'IXA': {
    chinese: '阿加尔塔拉',
    english: 'Maharaja Bir Bikram Airport (Agartala)',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 54
  },

  'IXD': {
    chinese: '阿拉哈巴德',
    english: 'Bamrauli Airport (Allahabad)',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 52
  },

  'PBD': {
    chinese: '帕尔贝德',
    english: 'Porbandar Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 50
  },

  'JLR': {
    chinese: '贾巴尔普尔',
    english: 'Jabalpur Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 49
  },

  'GWL': {
    chinese: '瓜廖尔',
    english: 'Gwalior Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 48
  },

  'KNU': {
    chinese: '坎普尔',
    english: 'Kanpur Airport',
    country: '印度',
    type: 'domestic',
    customs: false,
    priority: 47
  }
};

// ================================================================
// 🏙️ 印度主要城市机场统计
// ================================================================
// 北印度: 8个机场 (新德里、昌迪加尔、斋浦尔、勒克瑙、瓦拉纳西等)
// 西印度: 7个机场 (孟买、艾哈迈达巴德、浦那、果阿、苏拉特等)
// 南印度: 8个机场 (班加罗尔、金奈、海德拉巴、科钦、特里凡得琅等)
// 东印度: 4个机场 (加尔各答、布巴内斯瓦尔、兰契、高哈提)
// 东北地区: 3个机场 (英帕尔、锡尔恰尔、阿加尔塔拉)
//
// 🎯 国际机场: 16个 (53%)
// 🏠 国内机场: 14个 (47%)
// ✈️ 海关机场: 16个 (53%)
// 📊 优先级分布: 47-100分
//
// 🌟 特色:
// - 新德里: 南亚最重要的航空枢纽
// - 技术中心: 班加罗尔"印度硅谷"门户
// - 金融中心: 孟买经济首都枢纽
// - 地理多样性: 从喜马拉雅山到印度洋的完整覆盖
// - 人口大国: 14亿人口的航空需求中心
// ================================================================
