// 🇱🇷 利比里亚机场数据 - 增强版
// Liberia Enhanced Airport Data
// 国家代码: LR | 时区: GMT+0 | 货币: LRD (利比里亚元)

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-10, 数字越大优先级越高
  hub?: boolean;
  cargo?: boolean;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  runways?: number;
  timezone?: string;
}

export const LIBERIA_AIRPORTS: EnhancedAirportInfo[] = [
  // ✈️ 国际机场 (International Airports)
  {
    iata: 'ROB',
    icao: 'GLRB',
    chinese: '罗伯茨国际机场',
    english: 'Roberts International Airport',
    country: '利比里亚',
    type: 'international',
    customs: true,
    priority: 10,
    hub: true,
    cargo: true,
    coordinates: {
      latitude: 6.2339,
      longitude: -10.3623
    },
    runways: 1,
    timezone: 'GMT+0'
  },
  
  // ✈️ 国内/区域机场 (Domestic/Regional Airports)
  {
    iata: 'LRB',
    icao: 'GLMR',
    chinese: '蒙罗维亚斯普里格斯佩恩机场',
    english: 'Monrovia Spriggs Payne Airport',
    country: '利比里亚',
    type: 'domestic',
    customs: false,
    priority: 7,
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 6.2896,
      longitude: -10.7594
    },
    runways: 1,
    timezone: 'GMT+0'
  },
  
  {
    iata: 'THR',
    icao: 'GLHR',
    chinese: '哈珀机场',
    english: 'Harper Airport',
    country: '利比里亚',
    type: 'domestic',
    customs: false,
    priority: 5,
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 4.375,
      longitude: -7.717
    },
    runways: 1,
    timezone: 'GMT+0'
  },
  
  {
    iata: 'VOI',
    icao: 'GLVO',
    chinese: '沃因贾马机场',
    english: 'Voinjama Airport',
    country: '利比里亚',
    type: 'domestic',
    customs: false,
    priority: 4,
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 8.4167,
      longitude: -9.7667
    },
    runways: 1,
    timezone: 'GMT+0'
  },
  
  {
    iata: 'BGW',
    icao: 'GLBW',
    chinese: '巴克杜机场',
    english: 'Bargedou Airport',
    country: '利比里亚',
    type: 'domestic',
    customs: false,
    priority: 3,
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 6.5,
      longitude: -9.5
    },
    runways: 1,
    timezone: 'GMT+0'
  },
  
  {
    iata: 'GBP',
    icao: 'GLGP',
    chinese: '格巴帕机场',
    english: 'Gbangbatok Airport',
    country: '利比里亚',
    type: 'domestic',
    customs: false,
    priority: 3,
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 6.9833,
      longitude: -8.1
    },
    runways: 1,
    timezone: 'GMT+0'
  }
];

// 导出用于地址解析的映射
export const LIBERIA_AIRPORT_ALIASES = {
  // 城市映射
  '蒙罗维亚': ['MLW', 'LRB'],
  'monrovia': ['MLW', 'LRB'],
  '首都': ['MLW', 'LRB'],
  'capital': ['MLW', 'LRB'],
  
  // 机场名称映射
  '罗伯茨': ['MLW'],
  'roberts': ['MLW'],
  '国际机场': ['MLW'],
  'international': ['MLW'],
  
  '斯普里格斯佩恩': ['LRB'],
  'spriggs': ['LRB'],
  'payne': ['LRB'],
  
  '哈珀': ['THR'],
  'harper': ['THR'],
  
  '沃因贾马': ['VOI'],
  'voinjama': ['VOI']
};

export default LIBERIA_AIRPORTS; 