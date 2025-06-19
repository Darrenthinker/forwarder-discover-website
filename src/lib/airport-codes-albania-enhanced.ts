// 🇦🇱 阿尔巴尼亚机场数据库 - 增强版本
// Albania Enhanced Airport Database
// 第五十五批机场数据库 - 欧洲大洲继续

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  province: string;
  country: string;
  isInternational: boolean;
  hasCustoms: boolean;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  runways: number;
  priority: number;
  hub?: string[];
  cargo: boolean;
}

// ================================================================
// 🇦🇱 阿尔巴尼亚共和国机场数据库 - 3个主要机场
// 覆盖阿尔巴尼亚主要地区：地拉那、萨兰达、库克斯
// 巴尔干半岛亚得里亚海与伊奥尼亚海明珠，欧洲最后的秘境
// ================================================================

export const albaniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 地拉那 - 阿尔巴尼亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'TIA',
    icao: 'LATI',
    chinese: '地拉那特蕾莎修女国际机场',
    english: 'Tirana Mother Teresa International Airport',
    city: '地拉那',
    province: '地拉那州',
    country: '阿尔巴尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.4147, lng: 19.7206 },
    runways: 1,
    priority: 100, // 🥇 阿尔巴尼亚最大国际机场，特蕾莎修女命名
    hub: ['Air Albania', 'Albanian Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 萨兰达 - 南部重要旅游城市
  // ================================================================

  {
    iata: 'SDA',
    icao: 'LASA',
    chinese: '萨兰达机场',
    english: 'Sarandë Airport',
    city: '萨兰达',
    province: '弗洛勒州',
    country: '阿尔巴尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.8719, lng: 20.0064 },
    runways: 1,
    priority: 88, // 🌊 伊奥尼亚海重要旅游门户，阿尔巴尼亚里维埃拉
    cargo: false
  },

  // ================================================================
  // 📍 库克斯 - 北部重要城市
  // ================================================================

  {
    iata: 'KUK',
    icao: 'LAKU',
    chinese: '库克斯机场',
    english: 'Kukës Airport',
    city: '库克斯',
    province: '库克斯州',
    country: '阿尔巴尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.0778, lng: 20.4192 },
    runways: 1,
    priority: 80, // 🏔️ 北部山区重要城市，德林河流域
    cargo: false
  }

];

// 导出统计信息
export const albaniaAirportStats = {
  totalAirports: albaniaEnhancedAirports.length,
  internationalAirports: albaniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: albaniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: albaniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(albaniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: albaniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '阿尔巴尼亚全国地区完整覆盖',
  specialFeatures: [
    '🥇 地拉那机场 - 阿尔巴尼亚最大国际机场，特蕾莎修女命名',
    '🌊 萨兰达机场 - 伊奥尼亚海重要旅游门户，阿尔巴尼亚里维埃拉',
    '🏔️ 库克斯机场 - 北部山区重要城市，德林河流域',
    '🌟 欧洲最后秘境 - 未被过度开发的自然美景',
    '🏖️ 阿尔巴尼亚里维埃拉 - 地中海最美海岸线之一',
    '🇪🇺 欧盟候选国 - 积极融入欧洲一体化进程'
  ]
};
