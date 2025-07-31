// 🇧🇭 巴林王国机场数据库 - 增强版本
// Kingdom of Bahrain Enhanced Airport Database
// 第九十九批机场数据库 - 海湾地区航空枢纽

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
// 🇧🇭 巴林王国机场数据库 - 3个主要机场
// 覆盖巴林全境：麦纳麦、穆哈拉格、里法
// 海湾地区重要航空枢纽，Gulf Air总部
// ================================================================

export const bahrainEnhancedAirports: EnhancedAirportInfo[] = [

  // =================================
  // 主要国际机场 (1个)
  // =================================
  {
    iata: 'BAH',
    icao: 'OBBI',
    chinese: '巴林国际机场',
    english: 'Bahrain International Airport',
    city: '麦纳麦',
    municipality: '穆哈拉格',
    country: '巴林',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: {
      lat: 26.2708,
      lng: 50.6336
    },
    runways: 2,
    priority: 95,
    hub: ['Gulf Air', 'DHL Aviation'],
    cargo: true,
    type: 'international'
  },

  // =================================
  // 军用机场 (1个)
  // =================================
  {
    iata: 'SHK',
    icao: 'OBSK',
    chinese: '谢赫伊萨空军基地',
    english: 'Sheikh Isa Air Base',
    city: '里法',
    municipality: '南部省',
    country: '巴林',
    isInternational: false,
    hasCustoms: false,
    timezone: 'AST',
    coordinates: {
      lat: 25.9186,
      lng: 50.5906
    },
    runways: 1,
    priority: 70,
    cargo: false,
    type: 'military'
  },

  // =================================
  // 私人机场 (1个)
  // =================================
  {
    iata: 'BAM',
    icao: 'OBAM',
    chinese: '巴林商务航空中心',
    english: 'Bahrain Business Aviation Center',
    city: '麦纳麦',
    municipality: '穆哈拉格',
    country: '巴林',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: {
      lat: 26.2750,
      lng: 50.6400
    },
    runways: 1,
    priority: 60,
    cargo: false,
    type: 'private'
  }

];

// ================================================================
// 巴林机场统计数据
// ================================================================
export const bahrainAirportStats = {
  totalAirports: bahrainEnhancedAirports.length,
  internationalAirports: bahrainEnhancedAirports.filter(a => a.isInternational).length,
  customsAirports: bahrainEnhancedAirports.filter(a => a.hasCustoms).length,
  cargoAirports: bahrainEnhancedAirports.filter(a => a.cargo).length,
  cities: [...new Set(bahrainEnhancedAirports.map(a => a.city))].length,
  hubAirports: bahrainEnhancedAirports.filter(a => a.hub && a.hub.length > 0).length,
  runwayCount: bahrainEnhancedAirports.reduce((sum, a) => sum + a.runways, 0)
};

// ================================================================
// 快速查找函数
// ================================================================
export function findBahrainAirportByIATA(iata: string): EnhancedAirportInfo | undefined {
  return bahrainEnhancedAirports.find(airport => airport.iata === iata.toUpperCase());
}

export function findBahrainAirportsByCity(city: string): EnhancedAirportInfo[] {
  return bahrainEnhancedAirports.filter(airport => 
    airport.city.toLowerCase().includes(city.toLowerCase()) ||
    airport.municipality.toLowerCase().includes(city.toLowerCase())
  );
}

export function getBahrainInternationalAirports(): EnhancedAirportInfo[] {
  return bahrainEnhancedAirports.filter(airport => airport.isInternational);
}

export function getBahrainCargoAirports(): EnhancedAirportInfo[] {
  return bahrainEnhancedAirports.filter(airport => airport.cargo);
} 