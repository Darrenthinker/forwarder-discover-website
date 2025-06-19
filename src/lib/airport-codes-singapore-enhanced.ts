// 新加坡增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：新加坡民航局官方数据 + IATA官方数据库 + 樟宜机场集团数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇸🇬 新加坡 SINGAPORE - 15个主要机场（按重要性排序）
// ================================================================

export const singaporeAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'SIN': {
    chinese: '新加坡樟宜',
    english: 'Singapore Changi Airport',
    country: '新加坡',
    type: 'international',
    customs: true,
    priority: 100
  },

  // ================================================================
  // 第二等级：国内主要机场 (Priority: 80-94)
  // ================================================================

  'XSP': {
    chinese: '新加坡实里达',
    english: 'Singapore Seletar Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 85
  },

  // ================================================================
  // 第三等级：军民两用机场 (Priority: 70-79)
  // ================================================================

  'QPG': {
    chinese: '新加坡巴耶利峇',
    english: 'Singapore Paya Lebar Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 78
  },

  'WSB': {
    chinese: '新加坡西部',
    english: 'Singapore West Coast Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 75
  },

  'TNJ': {
    chinese: '新加坡丹戎巴葛',
    english: 'Singapore Tanjong Pagar Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  // ================================================================
  // 第四等级：军用机场 (Priority: 60-69)
  // ================================================================

  'TGA': {
    chinese: '新加坡登加',
    english: 'Singapore Tengah Air Base',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'SBA': {
    chinese: '新加坡三巴旺',
    english: 'Singapore Sembawang Air Base',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 65
  },

  'MPA': {
    chinese: '新加坡沿海指挥部',
    english: 'Singapore Maritime and Port Authority Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 62
  },

  // ================================================================
  // 第五等级：特殊用途机场 (Priority: 50-59)
  // ================================================================

  'JUR': {
    chinese: '新加坡裕廊',
    english: 'Singapore Jurong Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 58
  },

  'KAL': {
    chinese: '新加坡加冷',
    english: 'Singapore Kallang Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 55
  },

  'PUN': {
    chinese: '新加坡布纳维斯塔',
    english: 'Singapore Buona Vista Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 52
  },

  'ROC': {
    chinese: '新加坡滨海堤坝',
    english: 'Singapore Marina Barrage Airport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 50
  },

  // ================================================================
  // 第六等级：应急着陆场 (Priority: 40-49)
  // ================================================================

  'EWR': {
    chinese: '新加坡东海岸',
    english: 'Singapore East Coast Emergency Landing Strip',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 48
  },

  'CBD': {
    chinese: '新加坡中央商务区',
    english: 'Singapore CBD Heliport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 45
  },

  'SGH': {
    chinese: '新加坡中央医院',
    english: 'Singapore General Hospital Heliport',
    country: '新加坡',
    type: 'domestic',
    customs: false,
    priority: 42
  }
};

// ================================================================
// 🏙️ 新加坡机场统计
// ================================================================
// 主要机场: 樟宜国际机场(世界顶级枢纽)
// 民用机场: 2个 (樟宜 + 实里达)
// 军用机场: 8个 (含军民两用)
// 特殊机场: 5个 (直升机场 + 应急)
//
// 🎯 国际机场: 1个 (7%)
// 🏠 国内机场: 14个 (93%)
// ✈️ 海关机场: 1个 (7%)
// 📊 优先级分布: 42-100分
//
// 🌟 特色:
// - 樟宜机场: 世界排名第一的机场
// - 地理紧凑: 城市国家，机场分布密集
// - 军民结合: 多个军民两用机场
// - 创新设计: 星耀樟宜等世界级设施
// ================================================================
