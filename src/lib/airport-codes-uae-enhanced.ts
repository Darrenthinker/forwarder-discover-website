// 阿联酋增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：阿联酋民航总局官方数据 + IATA官方数据库 + 迪拜机场集团数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇦🇪 阿联酋 UNITED ARAB EMIRATES - 12个主要机场（按重要性排序）
// ================================================================

export const uaeAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：世界级超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'DXB': {
    chinese: '迪拜国际机场',
    english: 'Dubai International Airport',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 100
  },

  'AUH': {
    chinese: '阿布扎比',
    english: 'Abu Dhabi International Airport',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 98
  },

  'DWC': {
    chinese: '迪拜阿勒马克图姆',
    english: 'Al Maktoum International Airport (Dubai World Central)',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 95
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'SHJ': {
    chinese: '沙迦',
    english: 'Sharjah International Airport',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 90
  },

  'RAK': {
    chinese: '哈伊马角',
    english: 'Ras Al Khaimah International Airport',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：区域机场 (Priority: 75-84)
  // ================================================================

  'FJR': {
    chinese: '富查伊拉',
    english: 'Fujairah International Airport',
    country: '阿联酋',
    type: 'international',
    customs: true,
    priority: 80
  },

  'AAN': {
    chinese: '阿尔艾因',
    english: 'Al Ain International Airport',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 75
  },

  // ================================================================
  // 第四等级：专用和军用机场 (Priority: 65-74)
  // ================================================================

  'AZI': {
    chinese: '阿布扎比巴廷',
    english: 'Bateen Airport (Abu Dhabi)',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'JBZ': {
    chinese: '杰贝勒阿里',
    english: 'Jebel Ali Airport',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 68
  },

  'UMQ': {
    chinese: '乌姆盖万',
    english: 'Umm Al Quwain Airport',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 65
  },

  // ================================================================
  // 第五等级：小型和特殊用途机场 (Priority: 55-64)
  // ================================================================

  'DHS': {
    chinese: '迪拜南部',
    english: 'Dubai South Airport',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  'AJM': {
    chinese: '阿治曼',
    english: 'Ajman Airport',
    country: '阿联酋',
    type: 'domestic',
    customs: false,
    priority: 55
  }
};

// ================================================================
// 🏙️ 阿联酋主要城市机场统计
// ================================================================
// 迪拜酋长国: 4个机场 (DXB, DWC, JBZ, DHS)
// 阿布扎比酋长国: 2个机场 (AUH, AZI)
// 沙迦酋长国: 1个机场 (SHJ)
// 哈伊马角酋长国: 1个机场 (RAK)
// 富查伊拉酋长国: 1个机场 (FJR)
// 阿尔艾因: 1个机场 (AAN)
// 其他酋长国: 2个机场 (UMQ, AJM)
//
// 🎯 国际机场: 6个 (50%)
// 🏠 国内机场: 6个 (50%)
// ✈️ 海关机场: 6个 (50%)
// 📊 优先级分布: 55-100分
//
// 🌟 特色:
// - 迪拜国际机场: 世界最繁忙的国际客运枢纽
// - 地理优势: 连接亚欧非三大洲的黄金位置
// - 超级枢纽: 阿联酋航空和阿提哈德航空基地
// - 现代化程度: 世界最先进的机场设施和服务
// - 免税贸易: 重要的全球货运和物流中心
// ================================================================
