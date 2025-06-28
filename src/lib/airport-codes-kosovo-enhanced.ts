// ================================================================
// 🇽🇰 科索沃共和国机场数据库
// Kosovo Enhanced Airport Database
// ================================================================

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
// 🇽🇰 科索沃共和国机场数据库 - 1个国际机场
// 覆盖科索沃主要地区：普里什蒂纳
// 巴尔干半岛新兴国家，2008年宣布独立
// ================================================================

export const kosovoEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 普里什蒂纳 - 科索沃首都，唯一国际机场
  // ================================================================

  {
    iata: 'PRN',
    icao: 'BKPR',
    chinese: '普里什蒂纳阿德姆·雅沙里国际机场',
    english: 'Pristina Adem Jashari International Airport',
    city: '普里什蒂纳',
    province: '普里什蒂纳',
    country: '科索沃',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.5728, lng: 21.0358 },
    runways: 1,
    priority: 100, // 🥇 科索沃唯一国际机场，首都重要门户
    hub: ['Kosovo Airlines'],
    cargo: true
  }

];

// ================================================================
// 📊 科索沃机场统计信息
// ================================================================

export const kosovoAirportStats = {
  totalAirports: kosovoEnhancedAirports.length,
  internationalAirports: kosovoEnhancedAirports.filter(a => a.isInternational).length,
  domesticAirports: kosovoEnhancedAirports.filter(a => !a.isInternational).length,
  cargoAirports: kosovoEnhancedAirports.filter(a => a.cargo).length,
  hubAirports: kosovoEnhancedAirports.filter(a => a.hub && a.hub.length > 0).length
}; 