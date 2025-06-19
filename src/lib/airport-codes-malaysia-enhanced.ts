// 马来西亚增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：马来西亚机场集团官方数据 + IATA官方数据库 + 马来西亚民航局数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇲🇾 马来西亚 MALAYSIA - 18个主要机场（按重要性排序）
// ================================================================

export const malaysiaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'KUL': {
    chinese: '吉隆坡国际机场',
    english: 'Kuala Lumpur International Airport (KLIA)',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 100
  },

  'XKL': {
    chinese: '吉隆坡第二国际机场',
    english: 'Kuala Lumpur International Airport 2 (KLIA2)',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'PEN': {
    chinese: '槟城国际机场',
    english: 'Penang International Airport',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 90
  },

  'JHB': {
    chinese: '新山士乃',
    english: 'Sultan Ismail International Airport (Johor Bahru)',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 88
  },

  'BKI': {
    chinese: '亚庇',
    english: 'Kota Kinabalu International Airport',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 86
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 75-84)
  // ================================================================

  'KCH': {
    chinese: '古晋',
    english: 'Kuching International Airport',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 84
  },

  'MIR': {
    chinese: '美里',
    english: 'Miri Airport',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 82
  },

  'LGK': {
    chinese: '兰卡威',
    english: 'Langkawi International Airport',
    country: '马来西亚',
    type: 'international',
    customs: true,
    priority: 80
  },

  'TGG': {
    chinese: '丁加奴',
    english: 'Sultan Mahmud Airport (Kuala Terengganu)',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 78
  },

  'IPH': {
    chinese: '怡保',
    english: 'Sultan Azlan Shah Airport (Ipoh)',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 76
  },

  // ================================================================
  // 第四等级：国内重要机场 (Priority: 65-74)
  // ================================================================

  'AOR': {
    chinese: '亚罗士打',
    english: 'Sultan Abdul Halim Airport (Alor Setar)',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'KBR': {
    chinese: '哥打巴鲁',
    english: 'Sultan Ismail Petra Airport (Kota Bharu)',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'KUA': {
    chinese: '关丹',
    english: 'Sultan Ahmad Shah Airport (Kuantan)',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'TWU': {
    chinese: '山打根',
    english: 'Sandakan Airport',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'LAD': {
    chinese: '拉布安',
    english: 'Labuan Airport',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  // ================================================================
  // 第五等级：地方机场 (Priority: 55-64)
  // ================================================================

  'MKZ': {
    chinese: '马六甲',
    english: 'Malacca Airport',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 64
  },

  'TOD': {
    chinese: '斗湖',
    english: 'Tawau Airport',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 62
  },

  'BWN': {
    chinese: '民都鲁',
    english: 'Bintulu Airport',
    country: '马来西亚',
    type: 'domestic',
    customs: false,
    priority: 60
  }
};

// ================================================================
// 🏙️ 马来西亚主要城市机场统计
// ================================================================
// 吉隆坡地区: 2个机场 (KLIA + KLIA2)
// 马来半岛北部: 4个机场 (槟城、兰卡威、亚罗士打、怡保)
// 马来半岛东部: 3个机场 (丁加奴、哥打巴鲁、关丹)
// 马来半岛南部: 2个机场 (新山、马六甲)
// 沙巴州: 3个机场 (亚庇、山打根、斗湖)
// 砂拉越州: 3个机场 (古晋、美里、民都鲁)
// 联邦直辖区: 1个机场 (拉布安)
//
// 🎯 国际机场: 8个 (44%)
// 🏠 国内机场: 10个 (56%)
// ✈️ 海关机场: 8个 (44%)
// 📊 优先级分布: 60-100分
//
// 🌟 特色:
// - KLIA双机场系统: 世界先进的机场群
// - 地理双重性: 马来半岛 + 婆罗洲岛屿
// - 旅游门户: 兰卡威、槟城等度假胜地
// - 多元文化: 马来、华人、印度文化交融枢纽
// ================================================================
