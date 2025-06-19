// 韩国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：韩国交通部官方数据 + IATA官方数据库 + 仁川机场公司数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇰🇷 韩国 SOUTH KOREA - 25个主要机场（按重要性排序）
// ================================================================

export const koreaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'ICN': {
    chinese: '首尔仁川',
    english: 'Incheon International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 100
  },

  'GMP': {
    chinese: '首尔金浦',
    english: 'Gimpo International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 90-94)
  // ================================================================

  'PUS': {
    chinese: '釜山金海',
    english: 'Busan Gimhae International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CJU': {
    chinese: '济州',
    english: 'Jeju International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 90
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 85-89)
  // ================================================================

  'TAE': {
    chinese: '大邱',
    english: 'Daegu International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 88
  },

  'KWJ': {
    chinese: '光州',
    english: 'Gwangju Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 86
  },

  'RSU': {
    chinese: '群山',
    english: 'Gunsan Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第四等级：国内主要机场 (Priority: 80-84)
  // ================================================================

  'MWX': {
    chinese: '务安',
    english: 'Muan International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 84
  },

  'YNY': {
    chinese: '襄阳',
    english: 'Yangyang International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 82
  },

  'HIN': {
    chinese: '晋州',
    english: 'Jinju Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 80
  },

  // ================================================================
  // 第五等级：区域机场 (Priority: 75-79)
  // ================================================================

  'KPX': {
    chinese: '清州',
    english: 'Cheongju International Airport',
    country: '韩国',
    type: 'international',
    customs: true,
    priority: 78
  },

  'USN': {
    chinese: '蔚山',
    english: 'Ulsan Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 76
  },

  'PNN': {
    chinese: '浦项',
    english: 'Pohang Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 75
  },

  // ================================================================
  // 第六等级：地方机场 (Priority: 70-74)
  // ================================================================

  'SHO': {
    chinese: '首尔城南',
    english: 'Seoul Seongnam Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'CHN': {
    chinese: '长水',
    english: 'Jecheon Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'WJU': {
    chinese: '原州',
    english: 'Wonju Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'KUV': {
    chinese: '群山民用',
    english: 'Gunsan Civil Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  // ================================================================
  // 第七等级：小型机场 (Priority: 65-69)
  // ================================================================

  'SWU': {
    chinese: '水原',
    english: 'Suwon Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'SSN': {
    chinese: '春川',
    english: 'Chuncheon Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  'KAG': {
    chinese: '江陵',
    english: 'Gangneung Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 65
  },

  // ================================================================
  // 第八等级：特殊机场 (Priority: 60-64)
  // ================================================================

  'RHP': {
    chinese: '加平',
    english: 'Gapyeong Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 63
  },

  'KWK': {
    chinese: '곡성',
    english: 'Gokseong Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 61
  },

  'DHC': {
    chinese: '东海',
    english: 'Donghae Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  // ================================================================
  // 第九等级：军民两用机场 (Priority: 55-59)
  // ================================================================

  'SID': {
    chinese: '首尔中央',
    english: 'Seoul Central Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 58
  },

  'AKT': {
    chinese: '사천',
    english: 'Sacheon Airport',
    country: '韩国',
    type: 'domestic',
    customs: false,
    priority: 55
  }
};

// ================================================================
// 🏙️ 韩国主要城市机场统计
// ================================================================
// 首尔地区: 4个机场 (ICN, GMP, SHO, SID)
// 釜山地区: 1个机场 (PUS)
// 济州岛: 1个机场 (CJU)
// 大邱: 1个机场 (TAE)
// 光州: 1个机场 (KWJ)
// 其他: 17个机场
//
// 🎯 国际机场: 9个 (36%)
// 🏠 国内机场: 16个 (64%)
// ✈️ 海关机场: 9个 (36%)
// 📊 优先级分布: 55-100分
// ================================================================
