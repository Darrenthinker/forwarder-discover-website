// 🇴🇲 阿曼苏丹国机场数据库 - 增强版本
// Sultanate of Oman Enhanced Airport Database
// 第一百批机场数据库 - 阿拉伯半岛航空网络

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
// 🇴🇲 阿曼苏丹国机场数据库 - 6个主要机场
// 覆盖阿曼全境：马斯喀特、塞拉莱、苏哈尔、杜古姆
// 阿拉伯海重要航空门户，连接亚洲与非洲
// ================================================================

export const omanEnhancedAirports: EnhancedAirportInfo[] = [

  // =================================
  // 主要国际机场 (2个)
  // =================================
  {
    iata: 'MCT',
    icao: 'OOMS',
    chinese: '马斯喀特国际机场',
    english: 'Muscat International Airport',
    city: '马斯喀特',
    municipality: '马斯喀特省',
    country: '阿曼',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: {
      lat: 23.5933,
      lng: 58.2844
    },
    runways: 2,
    priority: 90,
    hub: ['Oman Air', 'Salam Air'],
    cargo: true,
    type: 'international'
  },

  {
    iata: 'SLL',
    icao: 'OOSA',
    chinese: '塞拉莱机场',
    english: 'Salalah Airport',
    city: '塞拉莱',
    municipality: '佐法尔省',
    country: '阿曼',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: {
      lat: 17.0387,
      lng: 54.0914
    },
    runways: 1,
    priority: 80,
    hub: ['Oman Air'],
    cargo: true,
    type: 'international'
  },

  // =================================
  // 国内机场 (2个)
  // =================================
  {
    iata: 'OHS',
    icao: 'OOSH',
    chinese: '苏哈尔机场',
    english: 'Sohar Airport',
    city: '苏哈尔',
    municipality: '北巴提奈省',
    country: '阿曼',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: {
      lat: 24.3869,
      lng: 56.6258
    },
    runways: 1,
    priority: 70,
    cargo: false,
    type: 'domestic'
  },

  {
    iata: 'DQM',
    icao: 'OODQ',
    chinese: '杜古姆机场',
    english: 'Duqm Airport',
    city: '杜古姆',
    municipality: '武斯塔省',
    country: '阿曼',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: {
      lat: 19.5017,
      lng: 57.6342
    },
    runways: 1,
    priority: 65,
    cargo: false,
    type: 'domestic'
  },

  // =================================
  // 军用机场 (1个)
  // =================================
  {
    iata: 'MSH',
    icao: 'OOMA',
    chinese: '马西拉空军基地',
    english: 'Masirah Air Base',
    city: '马西拉',
    municipality: '南沙尔基亚省',
    country: '阿曼',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GST',
    coordinates: {
      lat: 20.6758,
      lng: 58.8906
    },
    runways: 1,
    priority: 60,
    cargo: false,
    type: 'military'
  },

  // =================================
  // 私人机场 (1个)
  // =================================
  {
    iata: 'KHS',
    icao: 'OOKH',
    chinese: '哈西卜机场',
    english: 'Khasab Airport',
    city: '哈西卜',
    municipality: '穆桑达姆省',
    country: '阿曼',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: {
      lat: 26.1708,
      lng: 56.2406
    },
    runways: 1,
    priority: 55,
    cargo: false,
    type: 'domestic'
  }

];

// ================================================================
// 阿曼机场统计数据
// ================================================================
export const omanAirportStats = {
  totalAirports: omanEnhancedAirports.length,
  internationalAirports: omanEnhancedAirports.filter(a => a.isInternational).length,
  customsAirports: omanEnhancedAirports.filter(a => a.hasCustoms).length,
  cargoAirports: omanEnhancedAirports.filter(a => a.cargo).length,
  cities: [...new Set(omanEnhancedAirports.map(a => a.city))].length,
  hubAirports: omanEnhancedAirports.filter(a => a.hub && a.hub.length > 0).length,
  runwayCount: omanEnhancedAirports.reduce((sum, a) => sum + a.runways, 0)
};

// ================================================================
// 快速查找函数
// ================================================================
export function findOmanAirportByIATA(iata: string): EnhancedAirportInfo | undefined {
  return omanEnhancedAirports.find(airport => airport.iata === iata.toUpperCase());
}

export function findOmanAirportsByCity(city: string): EnhancedAirportInfo[] {
  return omanEnhancedAirports.filter(airport => 
    airport.city.toLowerCase().includes(city.toLowerCase()) ||
    airport.municipality.toLowerCase().includes(city.toLowerCase())
  );
}

export function getOmanInternationalAirports(): EnhancedAirportInfo[] {
  return omanEnhancedAirports.filter(airport => airport.isInternational);
}

export function getOmanCargoAirports(): EnhancedAirportInfo[] {
  return omanEnhancedAirports.filter(airport => airport.cargo);
} 