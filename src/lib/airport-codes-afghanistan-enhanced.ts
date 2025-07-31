// 🇦🇫 阿富汗伊斯兰酋长国机场数据库 - 增强版本
// Islamic Emirate of Afghanistan Enhanced Airport Database
// 第一〇一批机场数据库 - 山国航空网络

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  municipality: string;
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
  type: 'international' | 'domestic' | 'military' | 'private';
}

// ================================================================
// 🇦🇫 阿富汗伊斯兰酋长国机场数据库 - 6个主要机场
// 覆盖阿富汗全境：喀布尔、赫拉特、马扎里沙里夫、坎大哈
// 山国门户，连接南亚与中亚
// ================================================================

export const afghanistanEnhancedAirports: EnhancedAirportInfo[] = [

  // =================================
  // 主要国际机场 (3个)
  // =================================
  {
    iata: 'KBL',
    icao: 'OAKB',
    chinese: '喀布尔哈米德·卡尔扎伊国际机场',
    english: 'Kabul Hamid Karzai International Airport',
    city: '喀布尔',
    municipality: '喀布尔省',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: {
      lat: 34.5658,
      lng: 69.2125
    },
    runways: 2,
    priority: 85,
    hub: ['Ariana Afghan Airlines', 'Kam Air'],
    cargo: true,
    type: 'international'
  },

  {
    iata: 'HEA',
    icao: 'OAHR',
    chinese: '赫拉特机场',
    english: 'Herat Airport',
    city: '赫拉特',
    municipality: '赫拉特省',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: {
      lat: 34.2100,
      lng: 62.2283
    },
    runways: 1,
    priority: 75,
    hub: ['Ariana Afghan Airlines'],
    cargo: false,
    type: 'international'
  },

  {
    iata: 'MZR',
    icao: 'OAMS',
    chinese: '马扎里沙里夫机场',
    english: 'Mazar-i-Sharif Airport',
    city: '马扎里沙里夫',
    municipality: '巴尔赫省',
    country: '阿富汗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: {
      lat: 36.7069,
      lng: 67.2097
    },
    runways: 1,
    priority: 75,
    hub: ['Ariana Afghan Airlines'],
    cargo: false,
    type: 'international'
  },

  // =================================
  // 国内机场 (2个)
  // =================================
  {
    iata: 'KDH',
    icao: 'OAKN',
    chinese: '坎大哈机场',
    english: 'Kandahar Airport',
    city: '坎大哈',
    municipality: '坎大哈省',
    country: '阿富汗',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AFT',
    coordinates: {
      lat: 31.5058,
      lng: 65.8478
    },
    runways: 2,
    priority: 70,
    cargo: false,
    type: 'domestic'
  },

  {
    iata: 'BIN',
    icao: 'OABN',
    chinese: '巴米扬机场',
    english: 'Bamyan Airport',
    city: '巴米扬',
    municipality: '巴米扬省',
    country: '阿富汗',
    isInternational: false,
    hasCustoms: false,
    timezone: 'AFT',
    coordinates: {
      lat: 34.8169,
      lng: 67.8231
    },
    runways: 1,
    priority: 60,
    cargo: false,
    type: 'domestic'
  },

  // =================================
  // 军用机场 (1个)
  // =================================
  {
    iata: 'OAI',
    icao: 'OAIX',
    chinese: '巴格拉姆空军基地',
    english: 'Bagram Air Base',
    city: '巴格拉姆',
    municipality: '帕尔万省',
    country: '阿富汗',
    isInternational: false,
    hasCustoms: false,
    timezone: 'AFT',
    coordinates: {
      lat: 35.0261,
      lng: 69.2650
    },
    runways: 2,
    priority: 65,
    cargo: true,
    type: 'military'
  }

];

// ================================================================
// 阿富汗机场统计数据
// ================================================================
export const afghanistanAirportStats = {
  totalAirports: afghanistanEnhancedAirports.length,
  internationalAirports: afghanistanEnhancedAirports.filter(a => a.isInternational).length,
  customsAirports: afghanistanEnhancedAirports.filter(a => a.hasCustoms).length,
  cargoAirports: afghanistanEnhancedAirports.filter(a => a.cargo).length,
  cities: [...new Set(afghanistanEnhancedAirports.map(a => a.city))].length,
  hubAirports: afghanistanEnhancedAirports.filter(a => a.hub && a.hub.length > 0).length,
  runwayCount: afghanistanEnhancedAirports.reduce((sum, a) => sum + a.runways, 0)
};

// ================================================================
// 快速查找函数
// ================================================================
export function findAfghanistanAirportByIATA(iata: string): EnhancedAirportInfo | undefined {
  return afghanistanEnhancedAirports.find(airport => airport.iata === iata.toUpperCase());
}

export function findAfghanistanAirportsByCity(city: string): EnhancedAirportInfo[] {
  return afghanistanEnhancedAirports.filter(airport => 
    airport.city.toLowerCase().includes(city.toLowerCase()) ||
    airport.municipality.toLowerCase().includes(city.toLowerCase())
  );
}

export function getAfghanistanInternationalAirports(): EnhancedAirportInfo[] {
  return afghanistanEnhancedAirports.filter(airport => airport.isInternational);
}

export function getAfghanistanCargoAirports(): EnhancedAirportInfo[] {
  return afghanistanEnhancedAirports.filter(airport => airport.cargo);
} 