// 泰国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：泰国民航局官方数据 + IATA官方数据库 + 泰国机场公司数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇹🇭 泰国 THAILAND - 20个主要机场（按重要性排序）
// ================================================================

export const thailandAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'BKK': {
    chinese: '曼谷素万那普',
    english: 'Bangkok Suvarnabhumi Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'DMK': {
    chinese: '曼谷廊曼',
    english: 'Bangkok Don Mueang International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'HKT': {
    chinese: '普吉',
    english: 'Phuket International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CNX': {
    chinese: '清迈',
    english: 'Chiang Mai International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 90
  },

  'UTP': {
    chinese: '乌塔堡',
    english: 'U-Tapao International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'USM': {
    chinese: '苏梅',
    english: 'Koh Samui Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 86
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 75-84)
  // ================================================================

  'HDY': {
    chinese: '合艾',
    english: 'Hat Yai International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 84
  },

  'UNN': {
    chinese: '乌汶',
    english: 'Ubon Ratchathani Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'CEI': {
    chinese: '清莱',
    english: 'Chiang Rai International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 80
  },

  'KKC': {
    chinese: '孔敬',
    english: 'Khon Kaen Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'PHS': {
    chinese: '披集',
    english: 'Phitsanulok Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 76
  },

  // ================================================================
  // 第四等级：国内重要机场 (Priority: 65-74)
  // ================================================================

  'URT': {
    chinese: '乌隆',
    english: 'Udon Thani International Airport',
    country: '泰国',
    type: 'international',
    customs: true,
    priority: 74
  },

  'TST': {
    chinese: '董里',
    english: 'Trang Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'NST': {
    chinese: '洛坤',
    english: 'Nakhon Si Thammarat Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'ROI': {
    chinese: '黎逸',
    english: 'Roi Et Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'BFV': {
    chinese: '武里南',
    english: 'Buri Ram Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  // ================================================================
  // 第五等级：地方机场 (Priority: 55-64)
  // ================================================================

  'SWL': {
    chinese: '信武里',
    english: 'Sakon Nakhon Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 64
  },

  'LPT': {
    chinese: '南邦',
    english: 'Lampang Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 62
  },

  'PYX': {
    chinese: '披迈',
    english: 'Betong Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  'CXR': {
    chinese: '甘烹碧',
    english: 'Nakhon Ratchasima Airport',
    country: '泰国',
    type: 'domestic',
    customs: false,
    priority: 58
  }
};

// ================================================================
// 🏙️ 泰国主要城市机场统计
// ================================================================
// 曼谷地区: 3个机场 (BKK, DMK, UTP)
// 北部地区: 4个机场 (CNX, CEI, PHS, LPT)
// 南部地区: 6个机场 (HKT, USM, HDY, TST, NST, PYX)
// 东北地区: 5个机场 (UNN, KKC, URT, ROI, BFV)
// 其他地区: 2个机场 (SWL, CXR)
//
// 🎯 国际机场: 11个 (55%)
// 🏠 国内机场: 9个 (45%)
// ✈️ 海关机场: 11个 (55%)
// 📊 优先级分布: 58-100分
//
// 🌟 特色:
// - 素万那普: 东南亚超级枢纽
// - 旅游热点: 普吉、苏梅、清迈等世界知名度假胜地
// - 地理覆盖: 覆盖泰国四大区域77个府
// - 双机场系统: 曼谷素万那普+廊曼双枢纽
// ================================================================
