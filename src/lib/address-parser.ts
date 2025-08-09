// 🌍 智能地址解析和机场匹配系统 - V2.0 扩展版
// 支持北美洲、欧洲、亚洲等多个大洲的地址格式

export interface AddressInfo {
  street?: string;
  city: string;
  state?: string;
  province?: string;
  postalCode?: string;
  country: string;
  continent: string;
}

export interface AirportMatch {
  code: string;
  name: string;
  distance: number; // 相对距离权重
  priority: number; // 推荐优先级
}

export interface AddressParseResult {
  success: boolean;
  address?: AddressInfo;
  primaryAirport?: AirportMatch;
  alternativeAirports?: AirportMatch[];
  confidence: number; // 0-100 解析置信度
}

// 🌍 北美洲地址解析器
class NorthAmericaAddressParser {
  // 🇺🇸 美国地址格式和机场映射
  private static US_ADDRESS_PATTERNS = [
    // 完整格式: 241 N Congress Ave, Delray Beach, FL 33445
    /^(\d+.*?(?:Ave|Avenue|Street|St|Road|Rd|Blvd|Boulevard|Drive|Dr|Lane|Ln|Way|Circle|Cir|Court|Ct|Place|Pl))\s*,\s*([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/i,
    // 非标准格式: 5257 Dove Tree St, Orlando, Florida, US zipcode: 32811
    /^(\d+.*?(?:Ave|Avenue|Street|St|Road|Rd|Blvd|Boulevard|Drive|Dr|Lane|Ln|Way|Circle|Cir|Court|Ct|Place|Pl))\s*,\s*([A-Za-z\s]+)\s*,\s*([A-Za-z\s]+)\s*,?\s*(?:US|USA|United States)?\s*(?:zipcode:?)?\s*(\d{5}(?:-\d{4})?)$/i,
    // 简化格式: Delray Beach, FL 33445
    /^([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/i,
    // 城市州格式: Miami, FL 或 Miami, Florida
    /^([A-Za-z\s]+)\s*,\s*((?:[A-Z]{2})|(?:Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming))$/i
  ];

  // 美国州代码到全名映射
  private static US_STATE_MAPPING: { [key: string]: string } = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
  };

  // 美国城市到机场的智能映射 (重要度和距离权重)
  private static US_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    // 🌴 佛罗里达州
    'miami': [{ code: 'MIA', name: '迈阿密国际机场', distance: 1, priority: 1 }],
    'fort lauderdale': [{ code: 'FLL', name: '劳德代尔堡机场', distance: 1, priority: 1 }],
    'delray beach': [{ code: 'MIA', name: '迈阿密国际机场', distance: 2, priority: 1 }],
    'boca raton': [{ code: 'MIA', name: '迈阿密国际机场', distance: 2, priority: 1 }],
    'orlando': [{ code: 'MCO', name: '奥兰多国际机场', distance: 1, priority: 1 }],
    'tampa': [{ code: 'TPA', name: '坦帕国际机场', distance: 1, priority: 1 }],

    // 🌆 纽约州和周边
    'new york': [
      { code: 'JFK', name: '纽约肯尼迪国际机场', distance: 1, priority: 1 },
      { code: 'LGA', name: '纽约拉瓜迪亚机场', distance: 1, priority: 2 },
      { code: 'EWR', name: '纽约纽瓦克机场', distance: 1, priority: 3 }
    ],
    'brooklyn': [{ code: 'JFK', name: '纽约肯尼迪国际机场', distance: 1, priority: 1 }],
    'queens': [{ code: 'LGA', name: '纽约拉瓜迪亚机场', distance: 1, priority: 1 }],
    'manhattan': [{ code: 'LGA', name: '纽约拉瓜迪亚机场', distance: 1, priority: 1 }],

    // 🌉 加利福尼亚州
    'los angeles': [{ code: 'LAX', name: '洛杉矶国际机场', distance: 1, priority: 1 }],
    'san francisco': [{ code: 'SFO', name: '旧金山国际机场', distance: 1, priority: 1 }],
    'san diego': [{ code: 'SAN', name: '圣地亚哥国际机场', distance: 1, priority: 1 }],
    'oakland': [{ code: 'OAK', name: '奥克兰国际机场', distance: 1, priority: 1 }],
    'san jose': [{ code: 'SJC', name: '圣何塞国际机场', distance: 1, priority: 1 }],

    // 🏙️ 伊利诺伊州
    'chicago': [
      { code: 'ORD', name: '芝加哥奥黑尔国际机场', distance: 1, priority: 1 },
      { code: 'MDW', name: '芝加哥中途国际机场', distance: 1, priority: 2 }
    ],

    // 🏛️ 华盛顿特区
    'washington': [
      { code: 'IAD', name: '华盛顿杜勒斯国际机场', distance: 1, priority: 1 },
      { code: 'DCA', name: '华盛顿里根国家机场', distance: 1, priority: 2 },
      { code: 'BWI', name: '巴尔的摩华盛顿国际机场', distance: 2, priority: 3 }
    ],

    // 🎵 田纳西州
    'memphis': [{ code: 'MEM', name: '孟菲斯国际机场', distance: 1, priority: 1 }],
    'nashville': [{ code: 'BNA', name: '纳什维尔国际机场', distance: 1, priority: 1 }],

    // 🌵 德克萨斯州
    'houston': [
      { code: 'IAH', name: '休斯顿洲际机场', distance: 1, priority: 1 },
      { code: 'HOU', name: '休斯顿霍比机场', distance: 1, priority: 2 }
    ],
    'dallas': [{ code: 'DFW', name: '达拉斯沃斯堡国际机场', distance: 1, priority: 1 }],
    'san antonio': [{ code: 'SAT', name: '圣安东尼奥国际机场', distance: 1, priority: 1 }],
    'austin': [{ code: 'AUS', name: '奥斯汀国际机场', distance: 1, priority: 1 }],

    // 其他重要城市按州分组...
    'atlanta': [{ code: 'ATL', name: '亚特兰大国际机场', distance: 1, priority: 1 }],
    'boston': [{ code: 'BOS', name: '波士顿国际机场', distance: 1, priority: 1 }],
    'denver': [{ code: 'DEN', name: '丹佛国际机场', distance: 1, priority: 1 }],
    'phoenix': [{ code: 'PHX', name: '凤凰城国际机场', distance: 1, priority: 1 }],
    'seattle': [{ code: 'SEA', name: '西雅图国际机场', distance: 1, priority: 1 }],
    'las vegas': [{ code: 'LAS', name: '拉斯维加斯国际机场', distance: 1, priority: 1 }],
    'philadelphia': [{ code: 'PHL', name: '费城国际机场', distance: 1, priority: 1 }],
    'detroit': [{ code: 'DTW', name: '底特律国际机场', distance: 1, priority: 1 }],
    'minneapolis': [{ code: 'MSP', name: '明尼阿波利斯国际机场', distance: 1, priority: 1 }],
    'charlotte': [{ code: 'CLT', name: '夏洛特国际机场', distance: 1, priority: 1 }],
    'salt lake city': [{ code: 'SLC', name: '盐湖城国际机场', distance: 1, priority: 1 }]
  };

  // 美国州级备选机场 (当无法精确匹配城市时使用)
  private static US_STATE_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'FL': [{ code: 'MIA', name: '迈阿密国际机场', distance: 3, priority: 1 }],
    'NY': [{ code: 'JFK', name: '纽约肯尼迪国际机场', distance: 3, priority: 1 }],
    'CA': [{ code: 'LAX', name: '洛杉矶国际机场', distance: 3, priority: 1 }],
    'TX': [{ code: 'DFW', name: '达拉斯沃斯堡国际机场', distance: 3, priority: 1 }],
    'IL': [{ code: 'ORD', name: '芝加哥奥黑尔国际机场', distance: 3, priority: 1 }],
    'WA': [{ code: 'SEA', name: '西雅图国际机场', distance: 3, priority: 1 }],
    'GA': [{ code: 'ATL', name: '亚特兰大国际机场', distance: 3, priority: 1 }],
    'CO': [{ code: 'DEN', name: '丹佛国际机场', distance: 3, priority: 1 }],
    'AZ': [{ code: 'PHX', name: '凤凰城国际机场', distance: 3, priority: 1 }],
    'NV': [{ code: 'LAS', name: '拉斯维加斯国际机场', distance: 3, priority: 1 }],
    'MA': [{ code: 'BOS', name: '波士顿国际机场', distance: 3, priority: 1 }],
    'PA': [{ code: 'PHL', name: '费城国际机场', distance: 3, priority: 1 }],
    'MI': [{ code: 'DTW', name: '底特律国际机场', distance: 3, priority: 1 }],
    'MN': [{ code: 'MSP', name: '明尼阿波利斯国际机场', distance: 3, priority: 1 }],
    'NC': [{ code: 'CLT', name: '夏洛特国际机场', distance: 3, priority: 1 }],
    'UT': [{ code: 'SLC', name: '盐湖城国际机场', distance: 3, priority: 1 }],
    'TN': [{ code: 'MEM', name: '孟菲斯国际机场', distance: 3, priority: 1 }],
    'OH': [{ code: 'CVG', name: '辛辛那提国际机场', distance: 3, priority: 1 }],
    'OR': [{ code: 'PDX', name: '波特兰国际机场', distance: 3, priority: 1 }],
    'HI': [{ code: 'HNL', name: '檀香山国际机场', distance: 3, priority: 1 }],
    'AK': [{ code: 'ANC', name: '安克雷奇国际机场', distance: 3, priority: 1 }]
  };

  // 🇨🇦 加拿大地址格式和机场映射
  private static CANADA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Main Street, Toronto, ON M5V 3N8
    /^(.+?),\s*([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+([A-Z]\d[A-Z]\s*\d[A-Z]\d)$/i,
    // 简化格式: Toronto, ON M5V 3N8
    /^([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+([A-Z]\d[A-Z]\s*\d[A-Z]\d)$/i,
    // 城市省格式: Toronto, Ontario 或 Toronto, ON
    /^([A-Za-z\s]+)\s*,\s*((?:[A-Z]{2})|(?:Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon))$/i
  ];

  // 加拿大省代码映射
  private static CANADA_PROVINCE_MAPPING: { [key: string]: string } = {
    'AB': 'Alberta', 'BC': 'British Columbia', 'MB': 'Manitoba', 'NB': 'New Brunswick',
    'NL': 'Newfoundland and Labrador', 'NT': 'Northwest Territories', 'NS': 'Nova Scotia',
    'NU': 'Nunavut', 'ON': 'Ontario', 'PE': 'Prince Edward Island', 'QC': 'Quebec',
    'SK': 'Saskatchewan', 'YT': 'Yukon'
  };

  // 加拿大城市到机场映射
  private static CANADA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'toronto': [{ code: 'YYZ', name: '多伦多皮尔逊国际机场', distance: 1, priority: 1 }],
    'vancouver': [{ code: 'YVR', name: '温哥华国际机场', distance: 1, priority: 1 }],
    'montreal': [{ code: 'YUL', name: '蒙特利尔国际机场', distance: 1, priority: 1 }],
    'calgary': [{ code: 'YYC', name: '卡尔加里国际机场', distance: 1, priority: 1 }],
    'edmonton': [{ code: 'YEG', name: '埃德蒙顿国际机场', distance: 1, priority: 1 }],
    'winnipeg': [{ code: 'YWG', name: '温尼伯国际机场', distance: 1, priority: 1 }],
    'ottawa': [{ code: 'YOW', name: '渥太华国际机场', distance: 1, priority: 1 }],
    'halifax': [{ code: 'YHZ', name: '哈利法克斯国际机场', distance: 1, priority: 1 }],
    'quebec city': [{ code: 'YQB', name: '魁北克城国际机场', distance: 1, priority: 1 }]
  };

  // 🇲🇽 墨西哥地址格式和机场映射
  private static MEXICO_ADDRESS_PATTERNS = [
    // 墨西哥城市格式: Ciudad de México, CDMX 或 Mexico City, Mexico
    /^([A-Za-z\s]+)\s*,\s*(Mexico|México|CDMX|[A-Z]{2,4})$/i,
    // 简化格式: Cancún, Quintana Roo
    /^([A-Za-z\s]+)\s*,\s*([A-Za-z\s]+)$/i
  ];

  // 墨西哥城市到机场映射
  private static MEXICO_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'mexico city': [{ code: 'MEX', name: '墨西哥城国际机场', distance: 1, priority: 1 }],
    'ciudad de méxico': [{ code: 'MEX', name: '墨西哥城国际机场', distance: 1, priority: 1 }],
    'cancun': [{ code: 'CUN', name: '坎昆国际机场', distance: 1, priority: 1 }],
    'cancún': [{ code: 'CUN', name: '坎昆国际机场', distance: 1, priority: 1 }],
    'guadalajara': [{ code: 'GDL', name: '瓜达拉哈拉国际机场', distance: 1, priority: 1 }],
    'monterrey': [{ code: 'MTY', name: '蒙特雷国际机场', distance: 1, priority: 1 }],
    'tijuana': [{ code: 'TIJ', name: '蒂华纳国际机场', distance: 1, priority: 1 }],
    'puerto vallarta': [{ code: 'PVR', name: '巴亚尔塔港国际机场', distance: 1, priority: 1 }],
    'los cabos': [{ code: 'SJD', name: '洛斯卡波斯国际机场', distance: 1, priority: 1 }],
    'mazatlan': [{ code: 'MZT', name: '马萨特兰国际机场', distance: 1, priority: 1 }],
    'mazatlán': [{ code: 'MZT', name: '马萨特兰国际机场', distance: 1, priority: 1 }]
  };

  // 地址预处理和纠错
  private static preprocessAddress(address: string): string {
    let cleaned = address.trim();

    // 常见城市名拼写纠错
    const cityCorrections: { [key: string]: string } = {
      'orlanda': 'orlando',
      'detroite': 'detroit',
      'filadelfia': 'philadelphia',
      'chigago': 'chicago',
      'housten': 'houston',
      'phoneix': 'phoenix'
    };

    // 应用城市名纠错
    Object.entries(cityCorrections).forEach(([wrong, correct]) => {
      const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
      cleaned = cleaned.replace(regex, correct);
    });

    // 清理多余的标识符
    cleaned = cleaned.replace(/,?\s*(?:US|USA|United States)\s*,?\s*/gi, ' ');
    cleaned = cleaned.replace(/\s*zipcode:?\s*/gi, ' ');

    // 清理多余的空格
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    return cleaned;
  }

  // 解析美国地址
  static parseUSAddress(address: string): AddressParseResult {
    const cleanAddress = this.preprocessAddress(address);

    for (const pattern of this.US_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let state: string;
        let postalCode: string | undefined;

        // 根据匹配的模式解析不同字段
        if (match.length === 5) {
          // 完整格式或非标准格式
          [, street, city, state, postalCode] = match;

          // 处理非标准格式中的州名 (如 Florida -> FL)
          if (state && state.trim().length > 2) {
            const stateName = state.trim();
            const stateCode = Object.keys(this.US_STATE_MAPPING).find(key =>
              this.US_STATE_MAPPING[key].toLowerCase() === stateName.toLowerCase());
            if (stateCode) {
              state = stateCode;
            }
          }
        } else if (match.length === 4) {
          // 简化格式: city, state, zip
          [, city, state, postalCode] = match;
        } else {
          // 城市州格式: city, state
          [, city, state] = match;
        }

        // 标准化州代码
        const stateCode = state.length === 2 ? state.toUpperCase() :
                         Object.keys(this.US_STATE_MAPPING).find(key =>
                           this.US_STATE_MAPPING[key].toLowerCase() === state.toLowerCase()) || state;

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          state: stateCode,
          postalCode,
          country: '美国',
          continent: '北美洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        let airports = this.US_CITY_AIRPORT_MAPPING[cityKey];

        // 如果城市没有直接匹配，尝试州级匹配
        if (!airports && stateCode) {
          airports = this.US_STATE_AIRPORT_MAPPING[stateCode];
        }

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 60 // 地址解析成功但无机场匹配
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 解析加拿大地址
  static parseCanadaAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.CANADA_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let province: string;
        let postalCode: string | undefined;

        if (match.length === 5) {
          // 完整格式: street, city, province, postal
          [, street, city, province, postalCode] = match;
        } else if (match.length === 4) {
          // 简化格式: city, province, postal
          [, city, province, postalCode] = match;
        } else {
          // 城市省格式: city, province
          [, city, province] = match;
        }

        // 标准化省代码
        const provinceCode = province.length === 2 ? province.toUpperCase() :
                            Object.keys(this.CANADA_PROVINCE_MAPPING).find(key =>
                              this.CANADA_PROVINCE_MAPPING[key].toLowerCase() === province.toLowerCase()) || province;

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          province: provinceCode,
          postalCode,
          country: '加拿大',
          continent: '北美洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.CANADA_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 60 // 地址解析成功但无机场匹配
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 解析墨西哥地址
  static parseMexicoAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.MEXICO_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        const [, city, stateOrCountry] = match;

        const addressInfo: AddressInfo = {
          city: city.trim(),
          state: stateOrCountry === 'Mexico' || stateOrCountry === 'México' ? undefined : stateOrCountry.trim(),
          country: '墨西哥',
          continent: '北美洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.MEXICO_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: 85
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 60 // 地址解析成功但无机场匹配
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 统一北美洲地址解析入口
  static parseNorthAmericaAddress(address: string): AddressParseResult {
    // 优先尝试美国地址格式
    const usResult = this.parseUSAddress(address);
    if (usResult.success && usResult.confidence >= 80) {
      return usResult;
    }

    // 尝试加拿大地址格式
    const canadaResult = this.parseCanadaAddress(address);
    if (canadaResult.success && canadaResult.confidence >= 80) {
      return canadaResult;
    }

    // 尝试墨西哥地址格式
    const mexicoResult = this.parseMexicoAddress(address);
    if (mexicoResult.success && mexicoResult.confidence >= 80) {
      return mexicoResult;
    }

    // 返回置信度最高的结果
    const results = [usResult, canadaResult, mexicoResult]
      .filter(r => r.success)
      .sort((a, b) => b.confidence - a.confidence);

    return results.length > 0 ? results[0] : { success: false, confidence: 0 };
  }
}

// 🌍 欧洲地址解析器
class EuropeAddressParser {
  // 🇬🇧 英国地址格式和机场映射
  private static UK_ADDRESS_PATTERNS = [
    // 完整格式: 123 Oxford Street, London, W1D 2HX, UK
    /^(.+?),\s*([A-Za-z\s]+),\s*([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}),?\s*(?:UK|United Kingdom)?$/i,
    // 简化格式: London, W1D 2HX, UK
    /^([A-Za-z\s]+),\s*([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}),?\s*(?:UK|United Kingdom)?$/i,
    // 城市格式: London, UK 或 Manchester, England
    /^([A-Za-z\s]+),\s*(?:UK|United Kingdom|England|Scotland|Wales|Northern Ireland)$/i
  ];

  // 英国城市到机场映射
  private static UK_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'london': [
      { code: 'LHR', name: '伦敦希思罗机场', distance: 1, priority: 1 },
      { code: 'LGW', name: '伦敦盖特威克机场', distance: 2, priority: 2 },
      { code: 'STN', name: '伦敦斯坦斯特德机场', distance: 3, priority: 3 }
    ],
    'manchester': [{ code: 'MAN', name: '曼彻斯特机场', distance: 1, priority: 1 }],
    'birmingham': [{ code: 'BHX', name: '伯明翰机场', distance: 1, priority: 1 }],
    'glasgow': [{ code: 'GLA', name: '格拉斯哥机场', distance: 1, priority: 1 }],
    'edinburgh': [{ code: 'EDI', name: '爱丁堡机场', distance: 1, priority: 1 }],
    'newcastle': [{ code: 'NCL', name: '纽卡斯尔机场', distance: 1, priority: 1 }],
    'liverpool': [{ code: 'LPL', name: '利物浦机场', distance: 1, priority: 1 }],
    'belfast': [{ code: 'BFS', name: '贝尔法斯特机场', distance: 1, priority: 1 }]
  };

  // 🇫🇷 法国地址格式和机场映射
  private static FRANCE_ADDRESS_PATTERNS = [
    // 完整格式: 123 Rue de Rivoli, 75001 Paris, France
    /^(.+?),\s*(\d{5})\s+([A-Za-z\s-]+),?\s*(?:France)?$/i,
    // 简化格式: 75001 Paris, France
    /^(\d{5})\s+([A-Za-z\s-]+),?\s*(?:France)?$/i,
    // 城市格式: Paris, France
    /^([A-Za-z\s-]+),\s*(?:France)$/i
  ];

  // 法国城市到机场映射
  private static FRANCE_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'paris': [
      { code: 'CDG', name: '巴黎戴高乐机场', distance: 1, priority: 1 },
      { code: 'ORY', name: '巴黎奥利机场', distance: 2, priority: 2 }
    ],
    'nice': [{ code: 'NCE', name: '尼斯机场', distance: 1, priority: 1 }],
    'lyon': [{ code: 'LYS', name: '里昂机场', distance: 1, priority: 1 }],
    'marseille': [{ code: 'MRS', name: '马赛机场', distance: 1, priority: 1 }],
    'toulouse': [{ code: 'TLS', name: '图卢兹机场', distance: 1, priority: 1 }],
    'bordeaux': [{ code: 'BOD', name: '波尔多机场', distance: 1, priority: 1 }],
    'nantes': [{ code: 'NTE', name: '南特机场', distance: 1, priority: 1 }],
    'lille': [{ code: 'LIL', name: '里尔机场', distance: 1, priority: 1 }],
    'strasbourg': [{ code: 'SXB', name: '斯特拉斯堡机场', distance: 1, priority: 1 }]
  };

  // 🇩🇪 德国地址格式和机场映射
  private static GERMANY_ADDRESS_PATTERNS = [
    // 完整格式: Unter den Linden 1, 10117 Berlin, Germany
    /^(.+?),\s*(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Germany|Deutschland)?$/i,
    // 简化格式: 10117 Berlin, Germany
    /^(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Germany|Deutschland)?$/i,
    // 城市格式: Berlin, Germany
    /^([A-Za-z\s-]+),\s*(?:Germany|Deutschland)$/i
  ];

  // 德国城市到机场映射
  private static GERMANY_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'berlin': [{ code: 'BER', name: '柏林勃兰登堡机场', distance: 1, priority: 1 }],
    'frankfurt': [{ code: 'FRA', name: '法兰克福机场', distance: 1, priority: 1 }],
    'munich': [{ code: 'MUC', name: '慕尼黑机场', distance: 1, priority: 1 }],
    'münchen': [{ code: 'MUC', name: '慕尼黑机场', distance: 1, priority: 1 }],
    'hamburg': [{ code: 'HAM', name: '汉堡机场', distance: 1, priority: 1 }],
    'düsseldorf': [{ code: 'DUS', name: '杜塞尔多夫机场', distance: 1, priority: 1 }],
    'dusseldorf': [{ code: 'DUS', name: '杜塞尔多夫机场', distance: 1, priority: 1 }],
    'cologne': [{ code: 'CGN', name: '科隆机场', distance: 1, priority: 1 }],
    'köln': [{ code: 'CGN', name: '科隆机场', distance: 1, priority: 1 }],
    'stuttgart': [{ code: 'STR', name: '斯图加特机场', distance: 1, priority: 1 }],
    'nuremberg': [{ code: 'NUE', name: '纽伦堡机场', distance: 1, priority: 1 }],
    'nürnberg': [{ code: 'NUE', name: '纽伦堡机场', distance: 1, priority: 1 }],
    'hannover': [{ code: 'HAJ', name: '汉诺威机场', distance: 1, priority: 1 }],
    'leipzig': [{ code: 'LEJ', name: '莱比锡机场', distance: 1, priority: 1 }],
    'dresden': [{ code: 'DRS', name: '德累斯顿机场', distance: 1, priority: 1 }]
  };

  // 🇳🇱 荷兰地址格式
  private static NETHERLANDS_ADDRESS_PATTERNS = [
    // 完整格式: Damrak 1, 1012 LG Amsterdam, Netherlands
    /^(.+?),\s*(\d{4}\s?[A-Z]{2})\s+([A-Za-z\s-]+),?\s*(?:Netherlands|Nederland)?$/i,
    // 简化格式: 1012 LG Amsterdam, Netherlands
    /^(\d{4}\s?[A-Z]{2})\s+([A-Za-z\s-]+),?\s*(?:Netherlands|Nederland)?$/i,
    // 城市格式: Amsterdam, Netherlands
    /^([A-Za-z\s-]+),\s*(?:Netherlands|Nederland)$/i
  ];

  // 荷兰城市到机场映射
  private static NETHERLANDS_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'amsterdam': [{ code: 'AMS', name: '阿姆斯特丹史基浦机场', distance: 1, priority: 1 }]
  };

  // 🇧🇪 比利时地址格式
  private static BELGIUM_ADDRESS_PATTERNS = [
    // 完整格式: Grand Place 1, 1000 Brussels, Belgium
    /^(.+?),\s*(\d{4})\s+([A-Za-z\s-]+),?\s*(?:Belgium|België|Belgique)?$/i,
    // 简化格式: 1000 Brussels, Belgium
    /^(\d{4})\s+([A-Za-z\s-]+),?\s*(?:Belgium|België|Belgique)?$/i,
    // 城市格式: Brussels, Belgium
    /^([A-Za-z\s-]+),\s*(?:Belgium|België|Belgique)$/i
  ];

  // 比利时城市到机场映射
  private static BELGIUM_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'brussels': [{ code: 'BRU', name: '布鲁塞尔机场', distance: 1, priority: 1 }],
    'bruxelles': [{ code: 'BRU', name: '布鲁塞尔机场', distance: 1, priority: 1 }],
    'brussel': [{ code: 'BRU', name: '布鲁塞尔机场', distance: 1, priority: 1 }]
  };

  // 🇮🇹 意大利地址格式
  private static ITALY_ADDRESS_PATTERNS = [
    // 完整格式: Via del Corso 1, 00186 Roma, Italy
    /^(.+?),\s*(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Italy|Italia)?$/i,
    // 简化格式: 00186 Roma, Italy
    /^(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Italy|Italia)?$/i,
    // 城市格式: Roma, Italy
    /^([A-Za-z\s-]+),\s*(?:Italy|Italia)$/i
  ];

  // 意大利城市到机场映射
  private static ITALY_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'rome': [{ code: 'FCO', name: '罗马菲乌米奇诺机场', distance: 1, priority: 1 }],
    'roma': [{ code: 'FCO', name: '罗马菲乌米奇诺机场', distance: 1, priority: 1 }],
    'milan': [{ code: 'MXP', name: '米兰马尔彭萨机场', distance: 1, priority: 1 }],
    'milano': [{ code: 'MXP', name: '米兰马尔彭萨机场', distance: 1, priority: 1 }],
    'venice': [{ code: 'VCE', name: '威尼斯机场', distance: 1, priority: 1 }],
    'venezia': [{ code: 'VCE', name: '威尼斯机场', distance: 1, priority: 1 }],
    'naples': [{ code: 'NAP', name: '那不勒斯机场', distance: 1, priority: 1 }],
    'napoli': [{ code: 'NAP', name: '那不勒斯机场', distance: 1, priority: 1 }],
    'bologna': [{ code: 'BLQ', name: '博洛尼亚机场', distance: 1, priority: 1 }],
    'florence': [{ code: 'FLR', name: '佛罗伦萨机场', distance: 1, priority: 1 }],
    'firenze': [{ code: 'FLR', name: '佛罗伦萨机场', distance: 1, priority: 1 }]
  };

  // 🇪🇸 西班牙地址格式
  private static SPAIN_ADDRESS_PATTERNS = [
    // 完整格式: Gran Vía 1, 28013 Madrid, Spain
    /^(.+?),\s*(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Spain|España)?$/i,
    // 简化格式: 28013 Madrid, Spain
    /^(\d{5})\s+([A-Za-z\s-]+),?\s*(?:Spain|España)?$/i,
    // 城市格式: Madrid, Spain
    /^([A-Za-z\s-]+),\s*(?:Spain|España)$/i
  ];

  // 西班牙城市到机场映射
  private static SPAIN_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'madrid': [{ code: 'MAD', name: '马德里机场', distance: 1, priority: 1 }],
    'barcelona': [{ code: 'BCN', name: '巴塞罗那机场', distance: 1, priority: 1 }],
    'seville': [{ code: 'SVQ', name: '塞维利亚机场', distance: 1, priority: 1 }],
    'sevilla': [{ code: 'SVQ', name: '塞维利亚机场', distance: 1, priority: 1 }],
    'valencia': [{ code: 'VLC', name: '瓦伦西亚机场', distance: 1, priority: 1 }],
    'bilbao': [{ code: 'BIO', name: '毕尔巴鄂机场', distance: 1, priority: 1 }],
    'malaga': [{ code: 'AGP', name: '马拉加机场', distance: 1, priority: 1 }],
    'málaga': [{ code: 'AGP', name: '马拉加机场', distance: 1, priority: 1 }]
  };

  // 解析英国地址
  static parseUKAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.UK_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 4) {
          // 完整格式: street, city, postcode
          [, street, city, postalCode] = match;
        } else if (match.length === 3) {
          // 简化格式: city, postcode
          [, city, postalCode] = match;
        } else {
          // 城市格式: city
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country: '英国',
          continent: '欧洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.UK_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70 // 地址解析成功但无机场匹配
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 解析法国地址
  static parseFranceAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.FRANCE_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 4) {
          // 完整格式: street, postcode, city
          [, street, postalCode, city] = match;
        } else if (match.length === 3) {
          // 简化格式: postcode, city
          [, postalCode, city] = match;
        } else {
          // 城市格式: city
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country: '法国',
          continent: '欧洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.FRANCE_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 解析德国地址
  static parseGermanyAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.GERMANY_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 4) {
          // 完整格式: street, postcode, city
          [, street, postalCode, city] = match;
        } else if (match.length === 3) {
          // 简化格式: postcode, city
          [, postalCode, city] = match;
        } else {
          // 城市格式: city
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country: '德国',
          continent: '欧洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.GERMANY_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 通用欧洲地址解析函数
  static parseCountryAddress(
    address: string,
    patterns: RegExp[],
    cityAirportMapping: { [key: string]: AirportMatch[] },
    country: string
  ): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of patterns) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 4) {
          [, street, postalCode, city] = match;
        } else if (match.length === 3) {
          [, postalCode, city] = match;
        } else {
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country,
          continent: '欧洲'
        };

        const cityKey = city.toLowerCase().trim();
        const airports = cityAirportMapping[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 80)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 统一欧洲地址解析入口
  static parseEuropeAddress(address: string): AddressParseResult {
    console.log(`🌍 尝试欧洲地址解析: "${address}"`);

    // 英国地址解析
    const ukResult = this.parseUKAddress(address);
    if (ukResult.success && ukResult.confidence >= 75) {
      console.log(`🇬🇧 英国地址解析成功:`, ukResult);
      return ukResult;
    }

    // 法国地址解析
    const franceResult = this.parseFranceAddress(address);
    if (franceResult.success && franceResult.confidence >= 75) {
      console.log(`🇫🇷 法国地址解析成功:`, franceResult);
      return franceResult;
    }

    // 德国地址解析
    const germanyResult = this.parseGermanyAddress(address);
    if (germanyResult.success && germanyResult.confidence >= 75) {
      console.log(`🇩🇪 德国地址解析成功:`, germanyResult);
      return germanyResult;
    }

    // 荷兰地址解析
    const netherlandsResult = this.parseCountryAddress(
      address,
      this.NETHERLANDS_ADDRESS_PATTERNS,
      this.NETHERLANDS_CITY_AIRPORT_MAPPING,
      '荷兰'
    );
    if (netherlandsResult.success && netherlandsResult.confidence >= 75) {
      console.log(`🇳🇱 荷兰地址解析成功:`, netherlandsResult);
      return netherlandsResult;
    }

    // 比利时地址解析
    const belgiumResult = this.parseCountryAddress(
      address,
      this.BELGIUM_ADDRESS_PATTERNS,
      this.BELGIUM_CITY_AIRPORT_MAPPING,
      '比利时'
    );
    if (belgiumResult.success && belgiumResult.confidence >= 75) {
      console.log(`🇧🇪 比利时地址解析成功:`, belgiumResult);
      return belgiumResult;
    }

    // 意大利地址解析
    const italyResult = this.parseCountryAddress(
      address,
      this.ITALY_ADDRESS_PATTERNS,
      this.ITALY_CITY_AIRPORT_MAPPING,
      '意大利'
    );
    if (italyResult.success && italyResult.confidence >= 75) {
      console.log(`🇮🇹 意大利地址解析成功:`, italyResult);
      return italyResult;
    }

    // 西班牙地址解析
    const spainResult = this.parseCountryAddress(
      address,
      this.SPAIN_ADDRESS_PATTERNS,
      this.SPAIN_CITY_AIRPORT_MAPPING,
      '西班牙'
    );
    if (spainResult.success && spainResult.confidence >= 75) {
      console.log(`🇪🇸 西班牙地址解析成功:`, spainResult);
      return spainResult;
    }

    // 返回置信度最高的结果
    const allResults = [ukResult, franceResult, germanyResult, netherlandsResult, belgiumResult, italyResult, spainResult]
      .filter(r => r.success)
      .sort((a, b) => b.confidence - a.confidence);

    if (allResults.length > 0) {
      console.log(`⚠️ 使用欧洲最高置信度结果:`, allResults[0]);
      return allResults[0];
    }

    console.log(`❌ 欧洲地址解析失败: "${address}"`);
    return { success: false, confidence: 0 };
  }
}

// 🌏 亚洲地址解析器
class AsiaAddressParser {
  // 🇯🇵 日本地址格式和机场映射
  private static JAPAN_ADDRESS_PATTERNS = [
    // 完整格式: 1-1-1 Ginza, Chuo City, Tokyo 104-0061, Japan
    /^(.+?),\s*([A-Za-z\s-]+(?:City|Ward|Town|Village)),\s*([A-Za-z\s-]+)\s+(\d{3}-\d{4}),?\s*(?:Japan)?$/i,
    // 简化格式: Tokyo 104-0061, Japan 或 Tokyo, Japan
    /^([A-Za-z\s-]+)(?:\s+(\d{3}-\d{4}))?,?\s*(?:Japan)?$/i,
    // 日文格式: 東京都中央区銀座1-1-1
    /^([^\s]+(?:都|府|県))([^\s]+(?:市|区|町|村))(.+)$/
  ];

  // 日本城市到机场映射
  private static JAPAN_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'tokyo': [
      { code: 'NRT', name: '成田国际机场', distance: 1, priority: 1 },
      { code: 'HND', name: '羽田机场', distance: 1, priority: 2 }
    ],
    'osaka': [{ code: 'KIX', name: '关西国际机场', distance: 1, priority: 1 }],
    'nagoya': [{ code: 'NGO', name: '中部国际机场', distance: 1, priority: 1 }],
    'fukuoka': [{ code: 'FUK', name: '福冈机场', distance: 1, priority: 1 }],
    'sapporo': [{ code: 'CTS', name: '新千岁机场', distance: 1, priority: 1 }],
    'sendai': [{ code: 'SDJ', name: '仙台机场', distance: 1, priority: 1 }],
    'hiroshima': [{ code: 'HIJ', name: '广岛机场', distance: 1, priority: 1 }],
    'kagoshima': [{ code: 'KOJ', name: '鹿儿岛机场', distance: 1, priority: 1 }],
    'okinawa': [{ code: 'OKA', name: '那霸机场', distance: 1, priority: 1 }],
    'naha': [{ code: 'OKA', name: '那霸机场', distance: 1, priority: 1 }]
  };

  // 🇰🇷 韩国地址格式和机场映射
  private static KOREA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Gangnam-daero, Gangnam-gu, Seoul 06236, South Korea
    /^(.+?),\s*([A-Za-z\s-]+(?:-gu|-si|-gun)),\s*([A-Za-z\s-]+)\s+(\d{5}),?\s*(?:South Korea|Korea)?$/i,
    // 简化格式: Seoul 06236, South Korea 或 Seoul, Korea
    /^([A-Za-z\s-]+)(?:\s+(\d{5}))?,?\s*(?:South Korea|Korea)?$/i,
    // 韩文格式: 서울특별시 강남구 강남대로123
    /^([^\s]+(?:특별시|광역시|도))([^\s]+(?:구|시|군))(.+)$/
  ];

  // 韩国城市到机场映射
  private static KOREA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'seoul': [{ code: 'ICN', name: '仁川国际机场', distance: 1, priority: 1 }],
    'busan': [{ code: 'PUS', name: '金海国际机场', distance: 1, priority: 1 }],
    'jeju': [{ code: 'CJU', name: '济州国际机场', distance: 1, priority: 1 }],
    'daegu': [{ code: 'TAE', name: '大邱国际机场', distance: 1, priority: 1 }],
    'gwangju': [{ code: 'KWJ', name: '光州机场', distance: 1, priority: 1 }]
  };

  // 🇸🇬 新加坡地址格式和机场映射
  private static SINGAPORE_ADDRESS_PATTERNS = [
    // 完整格式: 123 Orchard Road, Singapore 238858
    /^(.+?),\s*Singapore\s+(\d{6})$/i,
    // 简化格式: Singapore 238858 或 Singapore
    /^Singapore(?:\s+(\d{6}))?$/i
  ];

  // 新加坡机场映射
  private static SINGAPORE_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'singapore': [{ code: 'SIN', name: '樟宜机场', distance: 1, priority: 1 }]
  };

  // 🇭🇰 香港地址格式和机场映射
  private static HONGKONG_ADDRESS_PATTERNS = [
    // 完整格式: Room 123, 456 Nathan Road, Tsim Sha Tsui, Kowloon, Hong Kong
    /^(.+?),\s*([A-Za-z\s]+),\s*([A-Za-z\s]+),\s*(?:Hong Kong|HK)$/i,
    // 简化格式: Tsim Sha Tsui, Hong Kong 或 Hong Kong
    /^(?:(.+?),\s*)?(?:Hong Kong|HK)$/i
  ];

  // 香港机场映射
  private static HONGKONG_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'hong kong': [{ code: 'HKG', name: '香港国际机场', distance: 1, priority: 1 }],
    'hongkong': [{ code: 'HKG', name: '香港国际机场', distance: 1, priority: 1 }]
  };

  // 🇹🇭 泰国地址格式和机场映射
  private static THAILAND_ADDRESS_PATTERNS = [
    // 完整格式: 123 Sukhumvit Road, Bangkok 10110, Thailand
    /^(.+?),\s*([A-Za-z\s]+)\s+(\d{5}),?\s*(?:Thailand)?$/i,
    // 简化格式: Bangkok, Thailand 或 Bangkok
    /^([A-Za-z\s]+),?\s*(?:Thailand)?$/i
  ];

  // 泰国城市到机场映射
  private static THAILAND_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'bangkok': [
      { code: 'BKK', name: '素万那普机场', distance: 1, priority: 1 },
      { code: 'DMK', name: '廊曼机场', distance: 2, priority: 2 }
    ],
    'phuket': [{ code: 'HKT', name: '普吉机场', distance: 1, priority: 1 }],
    'chiang mai': [{ code: 'CNX', name: '清迈机场', distance: 1, priority: 1 }],
    'pattaya': [{ code: 'UTP', name: '乌塔堡机场', distance: 1, priority: 1 }],
    'koh samui': [{ code: 'USM', name: '苏梅岛机场', distance: 1, priority: 1 }]
  };

  // 🇲🇾 马来西亚地址格式和机场映射
  private static MALAYSIA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia
    /^(.+?),\s*(\d{5})\s+([A-Za-z\s]+),?\s*(?:Malaysia)?$/i,
    // 简化格式: Kuala Lumpur, Malaysia 或 Kuala Lumpur
    /^([A-Za-z\s]+),?\s*(?:Malaysia)?$/i
  ];

  // 马来西亚城市到机场映射
  private static MALAYSIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'kuala lumpur': [{ code: 'KUL', name: '吉隆坡国际机场', distance: 1, priority: 1 }],
    'penang': [{ code: 'PEN', name: '槟城国际机场', distance: 1, priority: 1 }],
    'johor bahru': [{ code: 'JHB', name: '柔佛机场', distance: 1, priority: 1 }],
    'kota kinabalu': [{ code: 'BKI', name: '亚庇机场', distance: 1, priority: 1 }],
    'kuching': [{ code: 'KCH', name: '古晋机场', distance: 1, priority: 1 }]
  };

  // 🇮🇳 印度地址格式和机场映射
  private static INDIA_ADDRESS_PATTERNS = [
    // 完整格式: 123 MG Road, Mumbai 400001, Maharashtra, India
    /^(.+?),\s*([A-Za-z\s]+)\s+(\d{6}),\s*([A-Za-z\s]+),?\s*(?:India)?$/i,
    // 简化格式: Mumbai, Maharashtra, India 或 Mumbai, India
    /^([A-Za-z\s]+)(?:,\s*([A-Za-z\s]+))?,?\s*(?:India)?$/i
  ];

  // 印度城市到机场映射
  private static INDIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'mumbai': [{ code: 'BOM', name: '孟买国际机场', distance: 1, priority: 1 }],
    'delhi': [{ code: 'DEL', name: '德里国际机场', distance: 1, priority: 1 }],
    'new delhi': [{ code: 'DEL', name: '德里国际机场', distance: 1, priority: 1 }],
    'bangalore': [{ code: 'BLR', name: '班加罗尔国际机场', distance: 1, priority: 1 }],
    'chennai': [{ code: 'MAA', name: '金奈国际机场', distance: 1, priority: 1 }],
    'hyderabad': [{ code: 'HYD', name: '海得拉巴国际机场', distance: 1, priority: 1 }],
    'kolkata': [{ code: 'CCU', name: '加尔各答国际机场', distance: 1, priority: 1 }],
    'pune': [{ code: 'PNQ', name: '浦那机场', distance: 1, priority: 1 }],
    'ahmedabad': [{ code: 'AMD', name: '艾哈迈达巴德机场', distance: 1, priority: 1 }],
    'kochi': [{ code: 'COK', name: '科钦国际机场', distance: 1, priority: 1 }]
  };

  // 🇦🇪 阿联酋地址格式和机场映射
  private static UAE_ADDRESS_PATTERNS = [
    // 完整格式: 123 Sheikh Zayed Road, Dubai, UAE
    /^(.+?),\s*([A-Za-z\s]+),?\s*(?:UAE|United Arab Emirates)?$/i,
    // 简化格式: Dubai, UAE 或 Dubai
    /^([A-Za-z\s]+),?\s*(?:UAE|United Arab Emirates)?$/i
  ];

  // 阿联酋城市到机场映射
  private static UAE_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'dubai': [{ code: 'DXB', name: '迪拜国际机场', distance: 1, priority: 1 }],
    'abu dhabi': [{ code: 'AUH', name: '阿布扎比国际机场', distance: 1, priority: 1 }],
    'sharjah': [{ code: 'SHJ', name: '沙迦机场', distance: 1, priority: 1 }]
  };

  // 🇶🇦 卡塔尔地址格式和机场映射
  private static QATAR_ADDRESS_PATTERNS = [
    // 完整格式: 123 Corniche Road, Doha, Qatar
    /^(.+?),\s*([A-Za-z\s]+),?\s*(?:Qatar)?$/i,
    // 简化格式: Doha, Qatar 或 Doha
    /^([A-Za-z\s]+),?\s*(?:Qatar)?$/i
  ];

  // 卡塔尔机场映射
  private static QATAR_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'doha': [{ code: 'DOH', name: '多哈哈马德国际机场', distance: 1, priority: 1 }],
    'al udeid': [{ code: 'XJD', name: '乌代德空军基地', distance: 1, priority: 2 }],
    'udeid': [{ code: 'XJD', name: '乌代德空军基地', distance: 1, priority: 2 }],
    'ras laffan': [{ code: 'XQP', name: '拉斯拉凡机场', distance: 1, priority: 3 }],
    'laffan': [{ code: 'XQP', name: '拉斯拉凡机场', distance: 1, priority: 3 }]
  };

  // 巴林机场映射
  private static BAHRAIN_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'manama': [{ code: 'BAH', name: '巴林国际机场', distance: 1, priority: 1 }],
    'muharraq': [{ code: 'BAH', name: '巴林国际机场', distance: 1, priority: 1 }],
    'riffa': [{ code: 'SHK', name: '谢赫伊萨空军基地', distance: 1, priority: 2 }],
    'sheikh isa': [{ code: 'SHK', name: '谢赫伊萨空军基地', distance: 1, priority: 2 }],
    'isa': [{ code: 'SHK', name: '谢赫伊萨空军基地', distance: 1, priority: 2 }]
  };

  // 阿曼机场映射
  private static OMAN_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'muscat': [{ code: 'MCT', name: '马斯喀特国际机场', distance: 1, priority: 1 }],
    'salalah': [{ code: 'SLL', name: '塞拉莱机场', distance: 1, priority: 2 }],
    'sohar': [{ code: 'OHS', name: '苏哈尔机场', distance: 1, priority: 3 }],
    'duqm': [{ code: 'DQM', name: '杜古姆机场', distance: 1, priority: 4 }],
    'masirah': [{ code: 'MSH', name: '马西拉空军基地', distance: 1, priority: 5 }],
    'khasab': [{ code: 'KHS', name: '哈西卜机场', distance: 1, priority: 6 }]
  };

  // 阿富汗机场映射
  private static AFGHANISTAN_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'kabul': [{ code: 'KBL', name: '喀布尔哈米德·卡尔扎伊国际机场', distance: 1, priority: 1 }],
    'herat': [{ code: 'HEA', name: '赫拉特机场', distance: 1, priority: 2 }],
    'mazar-i-sharif': [{ code: 'MZR', name: '马扎里沙里夫机场', distance: 1, priority: 3 }],
    'mazar': [{ code: 'MZR', name: '马扎里沙里夫机场', distance: 1, priority: 3 }],
    'kandahar': [{ code: 'KDH', name: '坎大哈机场', distance: 1, priority: 4 }],
    'bamyan': [{ code: 'BIN', name: '巴米扬机场', distance: 1, priority: 5 }],
    'bagram': [{ code: 'OAI', name: '巴格拉姆空军基地', distance: 1, priority: 6 }]
  };

  // 🇮🇩 印尼地址格式和机场映射
  private static INDONESIA_ADDRESS_PATTERNS = [
    // 完整格式: Jl. Sudirman No. 123, Jakarta 12190, Indonesia
    /^(.+?),\s*([A-Za-z\s]+)\s+(\d{5}),?\s*(?:Indonesia)?$/i,
    // 简化格式: Jakarta, Indonesia 或 Jakarta
    /^([A-Za-z\s]+),?\s*(?:Indonesia)?$/i
  ];

  // 印尼城市到机场映射
  private static INDONESIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'jakarta': [{ code: 'CGK', name: '苏加诺-哈达国际机场', distance: 1, priority: 1 }],
    'bali': [{ code: 'DPS', name: '巴厘岛国际机场', distance: 1, priority: 1 }],
    'denpasar': [{ code: 'DPS', name: '巴厘岛国际机场', distance: 1, priority: 1 }],
    'surabaya': [{ code: 'SUB', name: '朱安达国际机场', distance: 1, priority: 1 }],
    'medan': [{ code: 'MDN', name: '库阿拉纳穆国际机场', distance: 1, priority: 1 }],
    'makassar': [{ code: 'UPG', name: '哈桑努丁机场', distance: 1, priority: 1 }]
  };

  // 🇵🇭 菲律宾地址格式和机场映射
  private static PHILIPPINES_ADDRESS_PATTERNS = [
    // 完整格式: 123 Ayala Avenue, Makati City, Metro Manila 1226, Philippines
    /^(.+?),\s*([A-Za-z\s]+(?:City)),\s*([A-Za-z\s]+)\s+(\d{4}),?\s*(?:Philippines)?$/i,
    // 简化格式: Manila, Philippines 或 Manila
    /^([A-Za-z\s]+),?\s*(?:Philippines)?$/i
  ];

  // 菲律宾城市到机场映射
  private static PHILIPPINES_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'manila': [{ code: 'MNL', name: '尼诺·阿基诺国际机场', distance: 1, priority: 1 }],
    'cebu': [{ code: 'CEB', name: '麦克坦-宿务国际机场', distance: 1, priority: 1 }],
    'davao': [{ code: 'DVO', name: '达沃机场', distance: 1, priority: 1 }],
    'iloilo': [{ code: 'ILO', name: '伊洛伊洛机场', distance: 1, priority: 1 }]
  };

  // 🇻🇳 越南地址格式和机场映射
  private static VIETNAM_ADDRESS_PATTERNS = [
    // 完整格式: 123 Dong Khoi Street, District 1, Ho Chi Minh City, Vietnam
    /^(.+?),\s*([A-Za-z\s0-9]+(?:District)),\s*([A-Za-z\s]+(?:City)),?\s*(?:Vietnam)?$/i,
    // 简化格式: Ho Chi Minh City, Vietnam 或 Hanoi, Vietnam
    /^([A-Za-z\s]+(?:City)?),?\s*(?:Vietnam)?$/i
  ];

  // 越南城市到机场映射
  private static VIETNAM_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'ho chi minh city': [{ code: 'SGN', name: '新山一国际机场', distance: 1, priority: 1 }],
    'hanoi': [{ code: 'HAN', name: '内排国际机场', distance: 1, priority: 1 }],
    'da nang': [{ code: 'DAD', name: '岘港国际机场', distance: 1, priority: 1 }],
    'nha trang': [{ code: 'CXR', name: '金兰国际机场', distance: 1, priority: 1 }]
  };

  // 解析日本地址
  static parseJapanAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.JAPAN_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 5) {
          // 完整格式: street, district, city, postal
          [, street, , city, postalCode] = match;
        } else if (match.length === 3) {
          // 简化格式: city, postal (可选)
          [, city, postalCode] = match;
        } else {
          // 日文格式或其他
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country: '日本',
          continent: '亚洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.JAPAN_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 85)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 解析韩国地址
  static parseKoreaAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of this.KOREA_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length === 5) {
          // 完整格式: street, district, city, postal
          [, street, , city, postalCode] = match;
        } else if (match.length === 3) {
          // 简化格式: city, postal (可选)
          [, city, postalCode] = match;
        } else {
          // 其他格式
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          postalCode,
          country: '韩国',
          continent: '亚洲'
        };

        const cityKey = city.toLowerCase().trim();
        const airports = this.KOREA_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 85)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 通用亚洲地址解析函数
  static parseCountryAddress(
    address: string,
    patterns: RegExp[],
    cityAirportMapping: { [key: string]: AirportMatch[] },
    country: string
  ): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of patterns) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let postalCode: string | undefined;

        if (match.length >= 4) {
          [, street, city, postalCode] = match;
        } else if (match.length === 3) {
          [, city, postalCode] = match;
        } else {
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city?.trim() || address.trim(),
          postalCode,
          country,
          continent: '亚洲'
        };

        const cityKey = (city || address).toLowerCase().trim();
        const airports = cityAirportMapping[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 85)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 统一亚洲地址解析入口
  static parseAsiaAddress(address: string): AddressParseResult {
    console.log(`🌏 尝试亚洲地址解析: "${address}"`);

    // 日本地址解析
    const japanResult = this.parseJapanAddress(address);
    if (japanResult.success && japanResult.confidence >= 75) {
      console.log(`🇯🇵 日本地址解析成功:`, japanResult);
      return japanResult;
    }

    // 韩国地址解析
    const koreaResult = this.parseKoreaAddress(address);
    if (koreaResult.success && koreaResult.confidence >= 75) {
      console.log(`🇰🇷 韩国地址解析成功:`, koreaResult);
      return koreaResult;
    }

    // 新加坡地址解析
    const singaporeResult = this.parseCountryAddress(
      address,
      this.SINGAPORE_ADDRESS_PATTERNS,
      this.SINGAPORE_CITY_AIRPORT_MAPPING,
      '新加坡'
    );
    if (singaporeResult.success && singaporeResult.confidence >= 75) {
      console.log(`🇸🇬 新加坡地址解析成功:`, singaporeResult);
      return singaporeResult;
    }

    // 香港地址解析
    const hongkongResult = this.parseCountryAddress(
      address,
      this.HONGKONG_ADDRESS_PATTERNS,
      this.HONGKONG_CITY_AIRPORT_MAPPING,
      '香港'
    );
    if (hongkongResult.success && hongkongResult.confidence >= 75) {
      console.log(`🇭🇰 香港地址解析成功:`, hongkongResult);
      return hongkongResult;
    }

    // 泰国地址解析
    const thailandResult = this.parseCountryAddress(
      address,
      this.THAILAND_ADDRESS_PATTERNS,
      this.THAILAND_CITY_AIRPORT_MAPPING,
      '泰国'
    );
    if (thailandResult.success && thailandResult.confidence >= 75) {
      console.log(`🇹🇭 泰国地址解析成功:`, thailandResult);
      return thailandResult;
    }

    // 马来西亚地址解析
    const malaysiaResult = this.parseCountryAddress(
      address,
      this.MALAYSIA_ADDRESS_PATTERNS,
      this.MALAYSIA_CITY_AIRPORT_MAPPING,
      '马来西亚'
    );
    if (malaysiaResult.success && malaysiaResult.confidence >= 75) {
      console.log(`🇲🇾 马来西亚地址解析成功:`, malaysiaResult);
      return malaysiaResult;
    }

    // 印度地址解析
    const indiaResult = this.parseCountryAddress(
      address,
      this.INDIA_ADDRESS_PATTERNS,
      this.INDIA_CITY_AIRPORT_MAPPING,
      '印度'
    );
    if (indiaResult.success && indiaResult.confidence >= 75) {
      console.log(`🇮🇳 印度地址解析成功:`, indiaResult);
      return indiaResult;
    }

    // 阿联酋地址解析
    const uaeResult = this.parseCountryAddress(
      address,
      this.UAE_ADDRESS_PATTERNS,
      this.UAE_CITY_AIRPORT_MAPPING,
      '阿联酋'
    );
    if (uaeResult.success && uaeResult.confidence >= 75) {
      console.log(`🇦🇪 阿联酋地址解析成功:`, uaeResult);
      return uaeResult;
    }

    // 卡塔尔地址解析
    const qatarResult = this.parseCountryAddress(
      address,
      this.QATAR_ADDRESS_PATTERNS,
      this.QATAR_CITY_AIRPORT_MAPPING,
      '卡塔尔'
    );
    if (qatarResult.success && qatarResult.confidence >= 75) {
      console.log(`🇶🇦 卡塔尔地址解析成功:`, qatarResult);
      return qatarResult;
    }

    // 印尼地址解析
    const indonesiaResult = this.parseCountryAddress(
      address,
      this.INDONESIA_ADDRESS_PATTERNS,
      this.INDONESIA_CITY_AIRPORT_MAPPING,
      '印尼'
    );
    if (indonesiaResult.success && indonesiaResult.confidence >= 75) {
      console.log(`🇮🇩 印尼地址解析成功:`, indonesiaResult);
      return indonesiaResult;
    }

    // 菲律宾地址解析
    const philippinesResult = this.parseCountryAddress(
      address,
      this.PHILIPPINES_ADDRESS_PATTERNS,
      this.PHILIPPINES_CITY_AIRPORT_MAPPING,
      '菲律宾'
    );
    if (philippinesResult.success && philippinesResult.confidence >= 75) {
      console.log(`🇵🇭 菲律宾地址解析成功:`, philippinesResult);
      return philippinesResult;
    }

    // 越南地址解析
    const vietnamResult = this.parseCountryAddress(
      address,
      this.VIETNAM_ADDRESS_PATTERNS,
      this.VIETNAM_CITY_AIRPORT_MAPPING,
      '越南'
    );
    if (vietnamResult.success && vietnamResult.confidence >= 75) {
      console.log(`🇻🇳 越南地址解析成功:`, vietnamResult);
      return vietnamResult;
    }

    // 返回置信度最高的结果
    const allResults = [
      japanResult, koreaResult, singaporeResult, hongkongResult,
      thailandResult, malaysiaResult, indiaResult, uaeResult,
      qatarResult, indonesiaResult, philippinesResult, vietnamResult
    ]
      .filter(r => r.success)
      .sort((a, b) => b.confidence - a.confidence);

    if (allResults.length > 0) {
      console.log(`⚠️ 使用亚洲最高置信度结果:`, allResults[0]);
      return allResults[0];
    }

    console.log(`❌ 亚洲地址解析失败: "${address}"`);
    return { success: false, confidence: 0 };
  }
}

// 🌏 大洋洲地址解析器
class OceaniaAddressParser {
  // 🇦🇺 澳大利亚地址格式和机场映射
  private static AUSTRALIA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Collins Street, Melbourne VIC 3000, Australia
    /^(.+?),\s*([A-Za-z\s]+)\s+([A-Z]{2,3})\s+(\d{4}),?\s*(?:Australia)?$/i,
    // 简化格式: Melbourne VIC 3000, Australia 或 Melbourne, Australia
    /^([A-Za-z\s]+)(?:\s+([A-Z]{2,3})\s+(\d{4}))?,?\s*(?:Australia)?$/i
  ];

  // 澳大利亚城市到机场映射
  private static AUSTRALIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'sydney': [{ code: 'SYD', name: '悉尼国际机场', distance: 1, priority: 1 }],
    'melbourne': [{ code: 'MEL', name: '墨尔本国际机场', distance: 1, priority: 1 }],
    'brisbane': [{ code: 'BNE', name: '布里斯班机场', distance: 1, priority: 1 }],
    'perth': [{ code: 'PER', name: '珀斯机场', distance: 1, priority: 1 }],
    'adelaide': [{ code: 'ADL', name: '阿德莱德机场', distance: 1, priority: 1 }],
    'darwin': [{ code: 'DRW', name: '达尔文机场', distance: 1, priority: 1 }],
    'cairns': [{ code: 'CNS', name: '凯恩斯机场', distance: 1, priority: 1 }],
    'gold coast': [{ code: 'OOL', name: '黄金海岸机场', distance: 1, priority: 1 }],
    'hobart': [{ code: 'HBA', name: '霍巴特机场', distance: 1, priority: 1 }],
    'canberra': [{ code: 'CBR', name: '堪培拉机场', distance: 1, priority: 1 }]
  };

  // 🇳🇿 新西兰地址格式和机场映射
  private static NEWZEALAND_ADDRESS_PATTERNS = [
    // 完整格式: 123 Queen Street, Auckland 1010, New Zealand
    /^(.+?),\s*([A-Za-z\s]+)\s+(\d{4}),?\s*(?:New Zealand)?$/i,
    // 简化格式: Auckland, New Zealand 或 Auckland
    /^([A-Za-z\s]+),?\s*(?:New Zealand)?$/i
  ];

  // 新西兰城市到机场映射
  private static NEWZEALAND_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'auckland': [{ code: 'AKL', name: '奥克兰机场', distance: 1, priority: 1 }],
    'christchurch': [{ code: 'CHC', name: '基督城机场', distance: 1, priority: 1 }],
    'wellington': [{ code: 'WLG', name: '惠灵顿机场', distance: 1, priority: 1 }],
    'queenstown': [{ code: 'ZQN', name: '皇后镇机场', distance: 1, priority: 1 }],
    'dunedin': [{ code: 'DUD', name: '但尼丁机场', distance: 1, priority: 1 }],
    'hamilton': [{ code: 'HLZ', name: '汉密尔顿机场', distance: 1, priority: 1 }]
  };

  // 🇫🇯 斐济地址格式和机场映射
  private static FIJI_ADDRESS_PATTERNS = [
    // 完整格式: Suva, Fiji 或 Nadi, Fiji
    /^([A-Za-z\s]+),?\s*(?:Fiji)?$/i
  ];

  // 斐济机场映射
  private static FIJI_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'nadi': [{ code: 'NAN', name: '楠迪国际机场', distance: 1, priority: 1 }],
    'suva': [{ code: 'SUV', name: '苏瓦机场', distance: 1, priority: 1 }]
  };

  // 通用大洋洲地址解析函数
  static parseCountryAddress(
    address: string,
    patterns: RegExp[],
    cityAirportMapping: { [key: string]: AirportMatch[] },
    country: string
  ): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of patterns) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let state: string | undefined;
        let postalCode: string | undefined;

        if (match.length === 5) {
          [, street, city, state, postalCode] = match;
        } else if (match.length === 4) {
          [, city, state, postalCode] = match;
        } else if (match.length === 3) {
          [, city, postalCode] = match;
        } else {
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          state,
          postalCode,
          country,
          continent: '大洋洲'
        };

        const cityKey = city.toLowerCase().trim();
        const airports = cityAirportMapping[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 85)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 统一大洋洲地址解析入口
  static parseOceaniaAddress(address: string): AddressParseResult {
    console.log(`🌏 尝试大洋洲地址解析: "${address}"`);

    // 澳大利亚地址解析
    const australiaResult = this.parseCountryAddress(
      address,
      this.AUSTRALIA_ADDRESS_PATTERNS,
      this.AUSTRALIA_CITY_AIRPORT_MAPPING,
      '澳大利亚'
    );
    if (australiaResult.success && australiaResult.confidence >= 75) {
      console.log(`🇦🇺 澳大利亚地址解析成功:`, australiaResult);
      return australiaResult;
    }

    // 新西兰地址解析
    const newzealandResult = this.parseCountryAddress(
      address,
      this.NEWZEALAND_ADDRESS_PATTERNS,
      this.NEWZEALAND_CITY_AIRPORT_MAPPING,
      '新西兰'
    );
    if (newzealandResult.success && newzealandResult.confidence >= 75) {
      console.log(`🇳🇿 新西兰地址解析成功:`, newzealandResult);
      return newzealandResult;
    }

    // 斐济地址解析
    const fijiResult = this.parseCountryAddress(
      address,
      this.FIJI_ADDRESS_PATTERNS,
      this.FIJI_CITY_AIRPORT_MAPPING,
      '斐济'
    );
    if (fijiResult.success && fijiResult.confidence >= 75) {
      console.log(`🇫🇯 斐济地址解析成功:`, fijiResult);
      return fijiResult;
    }

    // 返回置信度最高的结果
    const allResults = [australiaResult, newzealandResult, fijiResult]
      .filter(r => r.success)
      .sort((a, b) => b.confidence - a.confidence);

    if (allResults.length > 0) {
      console.log(`⚠️ 使用大洋洲最高置信度结果:`, allResults[0]);
      return allResults[0];
    }

    console.log(`❌ 大洋洲地址解析失败: "${address}"`);
    return { success: false, confidence: 0 };
  }
}

// 🌎 南美洲地址解析器
class SouthAmericaAddressParser {
  // 🇧🇷 巴西地址格式和机场映射
  private static BRAZIL_ADDRESS_PATTERNS = [
    // 完整格式: Av. Paulista, 1000, São Paulo, SP 01310-100, Brazil
    /^(.+?),\s*([A-Za-z\s]+),\s*([A-Z]{2})\s+(\d{5}-\d{3}),?\s*(?:Brazil|Brasil)?$/i,
    // 简化格式: São Paulo, SP, Brazil 或 São Paulo, Brazil
    /^([A-Za-z\s]+)(?:,\s*([A-Z]{2}))?,?\s*(?:Brazil|Brasil)?$/i
  ];

  // 巴西城市到机场映射
  private static BRAZIL_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'são paulo': [{ code: 'GRU', name: '圣保罗国际机场', distance: 1, priority: 1 }],
    'sao paulo': [{ code: 'GRU', name: '圣保罗国际机场', distance: 1, priority: 1 }],
    'rio de janeiro': [{ code: 'GIG', name: '里约热内卢国际机场', distance: 1, priority: 1 }],
    'brasília': [{ code: 'BSB', name: '巴西利亚机场', distance: 1, priority: 1 }],
    'brasilia': [{ code: 'BSB', name: '巴西利亚机场', distance: 1, priority: 1 }],
    'salvador': [{ code: 'SSA', name: '萨尔瓦多机场', distance: 1, priority: 1 }],
    'fortaleza': [{ code: 'FOR', name: '福塔雷萨机场', distance: 1, priority: 1 }],
    'recife': [{ code: 'REC', name: '累西腓机场', distance: 1, priority: 1 }],
    'belo horizonte': [{ code: 'CNF', name: '贝洛奥里藏特机场', distance: 1, priority: 1 }],
    'manaus': [{ code: 'MAO', name: '马瑙斯机场', distance: 1, priority: 1 }]
  };

  // 🇦🇷 阿根廷地址格式和机场映射
  private static ARGENTINA_ADDRESS_PATTERNS = [
    // 完整格式: Av. Corrientes 1000, Buenos Aires C1043AAZ, Argentina
    /^(.+?),\s*([A-Za-z\s]+)\s+([A-Z]\d{4}[A-Z]{3}),?\s*(?:Argentina)?$/i,
    // 简化格式: Buenos Aires, Argentina
    /^([A-Za-z\s]+),?\s*(?:Argentina)?$/i
  ];

  // 阿根廷城市到机场映射
  private static ARGENTINA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'buenos aires': [{ code: 'EZE', name: '布宜诺斯艾利斯国际机场', distance: 1, priority: 1 }],
    'córdoba': [{ code: 'COR', name: '科尔多瓦机场', distance: 1, priority: 1 }],
    'cordoba': [{ code: 'COR', name: '科尔多瓦机场', distance: 1, priority: 1 }],
    'mendoza': [{ code: 'MDZ', name: '门多萨机场', distance: 1, priority: 1 }],
    'rosario': [{ code: 'ROS', name: '罗萨里奥机场', distance: 1, priority: 1 }],
    'salta': [{ code: 'SLA', name: '萨尔塔机场', distance: 1, priority: 1 }]
  };

  // 🇨🇱 智利地址格式和机场映射
  private static CHILE_ADDRESS_PATTERNS = [
    // 完整格式: Av. Libertador Bernardo O'Higgins 1000, Santiago, Chile
    /^(.+?),\s*([A-Za-z\s]+),?\s*(?:Chile)?$/i,
    // 简化格式: Santiago, Chile
    /^([A-Za-z\s]+),?\s*(?:Chile)?$/i
  ];

  // 智利城市到机场映射
  private static CHILE_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'santiago': [{ code: 'SCL', name: '圣地亚哥国际机场', distance: 1, priority: 1 }],
    'valparaíso': [{ code: 'VAP', name: '瓦尔帕莱索机场', distance: 1, priority: 1 }],
    'valparaiso': [{ code: 'VAP', name: '瓦尔帕莱索机场', distance: 1, priority: 1 }],
    'concepción': [{ code: 'CCP', name: '康塞普西翁机场', distance: 1, priority: 1 }],
    'concepcion': [{ code: 'CCP', name: '康塞普西翁机场', distance: 1, priority: 1 }]
  };

  // 🇨🇴 哥伦比亚地址格式和机场映射
  private static COLOMBIA_ADDRESS_PATTERNS = [
    // 完整格式: Carrera 7 #32-16, Bogotá, Colombia
    /^(.+?),\s*([A-Za-z\s]+),?\s*(?:Colombia)?$/i,
    // 简化格式: Bogotá, Colombia
    /^([A-Za-z\s]+),?\s*(?:Colombia)?$/i
  ];

  // 哥伦比亚城市到机场映射
  private static COLOMBIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'bogotá': [{ code: 'BOG', name: '波哥大国际机场', distance: 1, priority: 1 }],
    'bogota': [{ code: 'BOG', name: '波哥大国际机场', distance: 1, priority: 1 }],
    'medellín': [{ code: 'MDE', name: '麦德林机场', distance: 1, priority: 1 }],
    'medellin': [{ code: 'MDE', name: '麦德林机场', distance: 1, priority: 1 }],
    'cartagena': [{ code: 'CTG', name: '卡塔赫纳机场', distance: 1, priority: 1 }],
    'cali': [{ code: 'CLO', name: '卡利机场', distance: 1, priority: 1 }],
    'barranquilla': [{ code: 'BAQ', name: '巴兰基亚机场', distance: 1, priority: 1 }]
  };

  // 🇵🇪 秘鲁地址格式和机场映射
  private static PERU_ADDRESS_PATTERNS = [
    // 完整格式: Av. Javier Prado Este 1000, Lima, Peru
    /^(.+?),\s*([A-Za-z\s]+),?\s*(?:Peru|Perú)?$/i,
    // 简化格式: Lima, Peru
    /^([A-Za-z\s]+),?\s*(?:Peru|Perú)?$/i
  ];

  // 秘鲁城市到机场映射
  private static PERU_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'lima': [{ code: 'LIM', name: '利马国际机场', distance: 1, priority: 1 }],
    'cusco': [{ code: 'CUZ', name: '库斯科机场', distance: 1, priority: 1 }],
    'arequipa': [{ code: 'AQP', name: '阿雷基帕机场', distance: 1, priority: 1 }],
    'trujillo': [{ code: 'TRU', name: '特鲁希略机场', distance: 1, priority: 1 }],
    'iquitos': [{ code: 'IQT', name: '伊基托斯机场', distance: 1, priority: 1 }]
  };

  // 通用南美洲地址解析函数
  static parseCountryAddress(
    address: string,
    patterns: RegExp[],
    cityAirportMapping: { [key: string]: AirportMatch[] },
    country: string
  ): AddressParseResult {
    const cleanAddress = address.trim();

    for (const pattern of patterns) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let street: string | undefined;
        let city: string;
        let state: string | undefined;
        let postalCode: string | undefined;

        if (match.length === 5) {
          [, street, city, state, postalCode] = match;
        } else if (match.length === 4) {
          [, city, state, postalCode] = match;
        } else if (match.length === 3) {
          [, city, state] = match;
        } else {
          [, city] = match;
        }

        const addressInfo: AddressInfo = {
          street,
          city: city.trim(),
          state,
          postalCode,
          country,
          continent: '南美洲'
        };

        const cityKey = city.toLowerCase().trim();
        const airports = cityAirportMapping[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: street ? 95 : (postalCode ? 90 : 85)
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 70
        };
      }
    }

    return { success: false, confidence: 0 };
  }

  // 统一南美洲地址解析入口
  static parseSouthAmericaAddress(address: string): AddressParseResult {
    console.log(`🌎 尝试南美洲地址解析: "${address}"`);

    // 巴西地址解析
    const brazilResult = this.parseCountryAddress(
      address,
      this.BRAZIL_ADDRESS_PATTERNS,
      this.BRAZIL_CITY_AIRPORT_MAPPING,
      '巴西'
    );
    if (brazilResult.success && brazilResult.confidence >= 75) {
      console.log(`🇧🇷 巴西地址解析成功:`, brazilResult);
      return brazilResult;
    }

    // 阿根廷地址解析
    const argentinaResult = this.parseCountryAddress(
      address,
      this.ARGENTINA_ADDRESS_PATTERNS,
      this.ARGENTINA_CITY_AIRPORT_MAPPING,
      '阿根廷'
    );
    if (argentinaResult.success && argentinaResult.confidence >= 75) {
      console.log(`🇦🇷 阿根廷地址解析成功:`, argentinaResult);
      return argentinaResult;
    }

    // 智利地址解析
    const chileResult = this.parseCountryAddress(
      address,
      this.CHILE_ADDRESS_PATTERNS,
      this.CHILE_CITY_AIRPORT_MAPPING,
      '智利'
    );
    if (chileResult.success && chileResult.confidence >= 75) {
      console.log(`🇨🇱 智利地址解析成功:`, chileResult);
      return chileResult;
    }

    // 哥伦比亚地址解析
    const colombiaResult = this.parseCountryAddress(
      address,
      this.COLOMBIA_ADDRESS_PATTERNS,
      this.COLOMBIA_CITY_AIRPORT_MAPPING,
      '哥伦比亚'
    );
    if (colombiaResult.success && colombiaResult.confidence >= 75) {
      console.log(`🇨🇴 哥伦比亚地址解析成功:`, colombiaResult);
      return colombiaResult;
    }

    // 秘鲁地址解析
    const peruResult = this.parseCountryAddress(
      address,
      this.PERU_ADDRESS_PATTERNS,
      this.PERU_CITY_AIRPORT_MAPPING,
      '秘鲁'
    );
    if (peruResult.success && peruResult.confidence >= 75) {
      console.log(`🇵🇪 秘鲁地址解析成功:`, peruResult);
      return peruResult;
    }

    // 返回置信度最高的结果
    const allResults = [brazilResult, argentinaResult, chileResult, colombiaResult, peruResult]
      .filter(r => r.success)
      .sort((a, b) => b.confidence - a.confidence);

    if (allResults.length > 0) {
      console.log(`⚠️ 使用南美洲最高置信度结果:`, allResults[0]);
      return allResults[0];
    }

    console.log(`❌ 南美洲地址解析失败: "${address}"`);
    return { success: false, confidence: 0 };
  }
}

// 🇨🇳 中国地址解析器
class ChinaAddressParser {
  // 中国主要城市到机场映射
  private static CHINA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    '北京': [{ code: 'PEK', name: '北京首都国际机场', distance: 1, priority: 1 }],
    'beijing': [{ code: 'PEK', name: '北京首都国际机场', distance: 1, priority: 1 }],
    '上海': [{ code: 'PVG', name: '上海浦东国际机场', distance: 1, priority: 1 }],
    'shanghai': [{ code: 'PVG', name: '上海浦东国际机场', distance: 1, priority: 1 }],
    '广州': [{ code: 'CAN', name: '广州白云国际机场', distance: 1, priority: 1 }],
    'guangzhou': [{ code: 'CAN', name: '广州白云国际机场', distance: 1, priority: 1 }],
    '深圳': [{ code: 'SZX', name: '深圳宝安国际机场', distance: 1, priority: 1 }],
    'shenzhen': [{ code: 'SZX', name: '深圳宝安国际机场', distance: 1, priority: 1 }],
    '成都': [{ code: 'CTU', name: '成都双流国际机场', distance: 1, priority: 1 }],
    'chengdu': [{ code: 'CTU', name: '成都双流国际机场', distance: 1, priority: 1 }],
    '杭州': [{ code: 'HGH', name: '杭州萧山国际机场', distance: 1, priority: 1 }],
    'hangzhou': [{ code: 'HGH', name: '杭州萧山国际机场', distance: 1, priority: 1 }],
    '西安': [{ code: 'XIY', name: '西安咸阳国际机场', distance: 1, priority: 1 }],
    "xi'an": [{ code: 'XIY', name: '西安咸阳国际机场', distance: 1, priority: 1 }],
    'xian': [{ code: 'XIY', name: '西安咸阳国际机场', distance: 1, priority: 1 }],
    '厦门': [{ code: 'XMN', name: '厦门高崎国际机场', distance: 1, priority: 1 }],
    'xiamen': [{ code: 'XMN', name: '厦门高崎国际机场', distance: 1, priority: 1 }],
    '青岛': [{ code: 'TAO', name: '青岛流亭国际机场', distance: 1, priority: 1 }],
    'qingdao': [{ code: 'TAO', name: '青岛流亭国际机场', distance: 1, priority: 1 }],
    '武汉': [{ code: 'WUH', name: '武汉天河国际机场', distance: 1, priority: 1 }],
    'wuhan': [{ code: 'WUH', name: '武汉天河国际机场', distance: 1, priority: 1 }],
    '鄂州': [{ code: 'EHU', name: '鄂州花湖国际机场', distance: 1, priority: 1 }],
    'ezhou': [{ code: 'EHU', name: '鄂州花湖国际机场', distance: 1, priority: 1 }]
  };

  // 中国地址格式
  private static CHINA_ADDRESS_PATTERNS = [
    // 中文地址格式: 广东省深圳市南山区...
    /^(.*?(?:省|市|自治区|特别行政区))(.*?(?:市|区|县|镇))(.*)/,
    // 简化格式: 深圳市南山区...
    /^(.*?(?:市|区|县))(.*)/,
    // 城市名匹配
    /^.*(北京|上海|广州|深圳|成都|杭州|西安|厦门|青岛|天津|重庆|南京|武汉|苏州|无锡|宁波|东莞|佛山|合肥|福州|昆明|南昌|济南|大连|沈阳|长春|哈尔滨|郑州|长沙|南宁|海口|贵阳|兰州|银川|西宁|乌鲁木齐|拉萨).*/
  ];

  static parseChinaAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    // 检查是否包含中国城市名
    for (const [cityName, airports] of Object.entries(this.CHINA_CITY_AIRPORT_MAPPING)) {
      if (cleanAddress.includes(cityName)) {
        const addressInfo: AddressInfo = {
          city: cityName,
          country: '中国',
          continent: '亚洲'
        };

        return {
          success: true,
          address: addressInfo,
          primaryAirport: airports[0],
          alternativeAirports: airports.slice(1),
          confidence: 85
        };
      }
    }

    return { success: false, confidence: 0 };
  }
}

// 🌍 非洲地址解析器
class AfricaAddressParser {
  // 🇱🇷 利比里亚地址格式
  private static LIBERIA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Broad Street, Monrovia, Liberia
    /^(.+?),\s*([A-Za-z\s]+),\s*(?:Liberia|LR)$/i,
    // 简化格式: Monrovia, Liberia
    /^([A-Za-z\s]+),\s*(?:Liberia|LR)$/i
  ];

  // 利比里亚城市到机场映射
  private static LIBERIA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'monrovia': [
      { code: 'ROB', name: '罗伯茨国际机场', distance: 1, priority: 1 },
      { code: 'LRB', name: '蒙罗维亚斯普里格斯佩恩机场', distance: 2, priority: 2 }
    ],
    'harper': [{ code: 'THR', name: '哈珀机场', distance: 1, priority: 1 }],
    'voinjama': [{ code: 'VOI', name: '沃因贾马机场', distance: 1, priority: 1 }]
  };

  // 🇱🇾 利比亚地址格式
  private static LIBYA_ADDRESS_PATTERNS = [
    // 完整格式: 123 Omar Al-Mukhtar Street, Tripoli, Libya
    /^(.+?),\s*([A-Za-z\s]+),\s*(?:Libya|LY)$/i,
    // 简化格式: Tripoli, Libya
    /^([A-Za-z\s]+),\s*(?:Libya|LY)$/i
  ];

  // 利比亚城市到机场映射
  private static LIBYA_CITY_AIRPORT_MAPPING: { [key: string]: AirportMatch[] } = {
    'tripoli': [
      { code: 'TIP', name: '的黎波里国际机场', distance: 1, priority: 1 },
      { code: 'MJI', name: '的黎波里米蒂加机场', distance: 2, priority: 2 }
    ],
    'benghazi': [{ code: 'BEN', name: '班加西贝尼纳国际机场', distance: 1, priority: 1 }],
    'misrata': [{ code: 'MRA', name: '米苏拉塔国际机场', distance: 1, priority: 1 }],
    'sabha': [{ code: 'SEB', name: '塞卜哈机场', distance: 1, priority: 1 }]
  };

  // 解析非洲地址
  static parseAfricaAddress(address: string): AddressParseResult {
    const cleanAddress = address.trim();

    // 🇱🇷 利比里亚地址解析
    for (const pattern of this.LIBERIA_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let city: string;
        let street: string | undefined;

        if (match.length === 3) {
          // 简化格式: Monrovia, Liberia
          city = match[1].trim();
        } else if (match.length === 4) {
          // 完整格式: 123 Broad Street, Monrovia, Liberia
          street = match[1].trim();
          city = match[2].trim();
        } else {
          continue;
        }

        const addressInfo: AddressInfo = {
          street,
          city,
          country: '利比里亚',
          continent: '非洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.LIBERIA_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: 85
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 60 // 地址解析成功但无机场匹配
        };
      }
    }

    // 🇱🇾 利比亚地址解析
    for (const pattern of this.LIBYA_ADDRESS_PATTERNS) {
      const match = cleanAddress.match(pattern);
      if (match) {
        let city: string;
        let street: string | undefined;

        if (match.length === 3) {
          // 简化格式: Tripoli, Libya
          city = match[1].trim();
        } else if (match.length === 4) {
          // 完整格式: 123 Omar Al-Mukhtar Street, Tripoli, Libya
          street = match[1].trim();
          city = match[2].trim();
        } else {
          continue;
        }

        const addressInfo: AddressInfo = {
          street,
          city,
          country: '利比亚',
          continent: '非洲'
        };

        // 查找匹配的机场
        const cityKey = city.toLowerCase().trim();
        const airports = this.LIBYA_CITY_AIRPORT_MAPPING[cityKey];

        if (airports && airports.length > 0) {
          return {
            success: true,
            address: addressInfo,
            primaryAirport: airports[0],
            alternativeAirports: airports.slice(1),
            confidence: 85
          };
        }

        return {
          success: true,
          address: addressInfo,
          confidence: 60 // 地址解析成功但无机场匹配
        };
      }
    }

    return { success: false, confidence: 0 };
  }
}

// 🌍 主地址解析函数 - 智能识别地址格式并调用相应解析器
export function parseAddressAndFindAirports(address: string): AddressParseResult {
  const cleanAddress = address.trim();

  console.log(`🌍 开始智能地址解析: "${cleanAddress}"`);

  // 🇨🇳 优先检查中国地址
  const chinaResult = ChinaAddressParser.parseChinaAddress(cleanAddress);
  if (chinaResult.success) {
    console.log(`🇨🇳 中国地址解析成功:`, chinaResult);
    return chinaResult;
  }

  // 🌎 北美洲地址解析 (优先级最高，因为格式最标准化)
  const northAmericaResult = NorthAmericaAddressParser.parseNorthAmericaAddress(cleanAddress);
  if (northAmericaResult.success && northAmericaResult.confidence >= 75) {
    console.log(`✅ 北美洲地址解析成功:`, northAmericaResult);
    return northAmericaResult;
  }

  // 🌍 欧洲地址解析
  const europeResult = EuropeAddressParser.parseEuropeAddress(cleanAddress);
  if (europeResult.success && europeResult.confidence >= 75) {
    console.log(`✅ 欧洲地址解析成功:`, europeResult);
    return europeResult;
  }

  // 🌏 亚洲地址解析
  const asiaResult = AsiaAddressParser.parseAsiaAddress(cleanAddress);
  if (asiaResult.success && asiaResult.confidence >= 75) {
    console.log(`✅ 亚洲地址解析成功:`, asiaResult);
    return asiaResult;
  }

  // 🌏 大洋洲地址解析
  const oceaniaResult = OceaniaAddressParser.parseOceaniaAddress(cleanAddress);
  if (oceaniaResult.success && oceaniaResult.confidence >= 75) {
    console.log(`✅ 大洋洲地址解析成功:`, oceaniaResult);
    return oceaniaResult;
  }

  // 🌎 南美洲地址解析
  const southAmericaResult = SouthAmericaAddressParser.parseSouthAmericaAddress(cleanAddress);
  if (southAmericaResult.success && southAmericaResult.confidence >= 75) {
    console.log(`✅ 南美洲地址解析成功:`, southAmericaResult);
    return southAmericaResult;
  }

  // 🌍 非洲地址解析
  const africaResult = AfricaAddressParser.parseAfricaAddress(cleanAddress);
  if (africaResult.success && africaResult.confidence >= 75) {
    console.log(`✅ 非洲地址解析成功:`, africaResult);
    return africaResult;
  }

  // 返回置信度最高的结果（如果有的话）
  const allResults = [northAmericaResult, europeResult, asiaResult, oceaniaResult, southAmericaResult, africaResult]
    .filter(r => r.success)
    .sort((a, b) => b.confidence - a.confidence);

  if (allResults.length > 0) {
    console.log(`⚠️ 使用置信度最高的解析结果:`, allResults[0]);
    return allResults[0];
  }

  console.log(`❌ 地址解析失败: "${cleanAddress}"`);
  return { success: false, confidence: 0 };
}

// 向后兼容的导出函数
export default parseAddressAndFindAirports;
