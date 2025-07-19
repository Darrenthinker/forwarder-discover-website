// 机场三字代码映射表
export interface AirportInfo {
  code: string;
  name: string;
  city: string;
  country: string;
  continent: string;
  type: "international" | "domestic" | "regional";
}

export const airportCodes: AirportInfo[] = [
  {
    code: "ABQ",
    name: "Albuquerque International Sunport",
    city: "Albuquerque",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "AUS",
    name: "Austin-Bergstrom International Airport",
    city: "Austin",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "BWI",
    name: "Baltimore/Washington International Thurgood Marshall Airport",
    city: "Baltimore",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "BOS",
    name: "Boston Logan International Airport",
    city: "Boston",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "CLT",
    name: "Charlotte Douglas International Airport",
    city: "Charlotte",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "MDW",
    name: "Chicago Midway International Airport",
    city: "Chicago",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "ORD",
    name: "Chicago O'Hare International Airport",
    city: "Chicago",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "CVG",
    name: "Cincinnati/Northern Kentucky International Airport",
    city: "Cincinnati",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "CLE",
    name: "Cleveland Hopkins International Airport",
    city: "Cleveland",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "DFW",
    name: "Dallas/Fort Worth International Airport",
    city: "Dallas",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "DEN",
    name: "Denver International Airport",
    city: "Denver",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "DTW",
    name: "Detroit Metropolitan Wayne County Airport",
    city: "Detroit",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "FLL",
    name: "Fort Lauderdale-Hollywood International Airport",
    city: "Fort Lauderdale",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "IAH",
    name: "George Bush Intercontinental Airport",
    city: "Houston",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "IND",
    name: "Indianapolis International Airport",
    city: "Indianapolis",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "JAX",
    name: "Jacksonville International Airport",
    city: "Jacksonville",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "LAS",
    name: "McCarran International Airport",
    city: "Las Vegas",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "MCI",
    name: "Kansas City International Airport",
    city: "Kansas City",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "MSP",
    name: "Minneapolis-Saint Paul International Airport",
    city: "Minneapolis",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "BNA",
    name: "Nashville International Airport",
    city: "Nashville",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    city: "Newark",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    city: "New York",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "MCO",
    name: "Orlando International Airport",
    city: "Orlando",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "PHL",
    name: "Philadelphia International Airport",
    city: "Philadelphia",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "PIT",
    name: "Pittsburgh International Airport",
    city: "Pittsburgh",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "PDX",
    name: "Portland International Airport",
    city: "Portland",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "RDU",
    name: "Raleigh-Durham International Airport",
    city: "Raleigh",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "SAT",
    name: "San Antonio International Airport",
    city: "San Antonio",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "SAN",
    name: "San Diego International Airport",
    city: "San Diego",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "SJC",
    name: "Norman Y. Mineta San José International Airport",
    city: "San Jose",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "SEA",
    name: "Seattle-Tacoma International Airport",
    city: "Seattle",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "STL",
    name: "St. Louis Lambert International Airport",
    city: "St. Louis",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "TPA",
    name: "Tampa International Airport",
    city: "Tampa",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "IAD",
    name: "Washington Dulles International Airport",
    city: "Washington",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "DCA",
    name: "Ronald Reagan Washington National Airport",
    city: "Washington",
    country: "United States",
    continent: "North America",
    type: "international"
  },
  {
    code: "CKY",
    name: "Conakry International Airport",
    city: "Conakry",
    country: "Guinea",
    continent: "Africa",
    type: "international"
  }
];

export function findAirportByCode(code: string): AirportInfo | undefined {
  return airportCodes.find(airport => airport.code === code.toUpperCase());
}

export function findAirportsByCity(city: string): AirportInfo[] {
  return airportCodes.filter(airport => 
    airport.city.toLowerCase().includes(city.toLowerCase())
  );
}

export function findAirportsByCountry(country: string): AirportInfo[] {
  return airportCodes.filter(airport => 
    airport.country.toLowerCase().includes(country.toLowerCase())
  );
}

export function getAllAirports(): AirportInfo[] {
  return airportCodes;
}

// 根据机场代码获取城市名称
export function getAirportCity(code: string): string | null {
  const upperCode = code.toUpperCase();
  const airport = findAirportByCode(upperCode);
  return airport ? airport.city : null;
}

// 根据机场代码获取完整信息
export function getAirportInfo(code: string): AirportInfo | null {
  const upperCode = code.toUpperCase();
  return findAirportByCode(upperCode) || null;
}

// 格式化机场显示 - 返回与搜索一致的格式 "WAW - 华沙 | Warsaw Chopin | 波兰 PL · 欧洲"
export function formatAirportDisplay(code: string): string {
  const upperCode = code.toUpperCase();
  const airport = findAirportByCode(upperCode);
  if (airport) {
    // 使用与搜索结果一致的格式
    return `${upperCode} - ${airport.city} | ${airport.name} | ${airport.country} · ${airport.continent}`;
  }
  return upperCode;
}
