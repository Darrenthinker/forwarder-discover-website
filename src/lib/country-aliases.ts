// 国家别名映射系统
// 解决搜索时的国家名称混淆和简称问题

export interface CountryAlias {
  standard: string;        // 标准名称
  aliases: string[];       // 别名列表
  excludes?: string[];     // 排除的模糊匹配词
}

// 国家别名映射表
export const COUNTRY_ALIASES: CountryAlias[] = [
  // 亚洲国家
  {
    standard: '中国',
    aliases: ['中华人民共和国', 'china', 'prc', '大陆', '内地'],
    excludes: []
  },
  {
    standard: '印度',
    aliases: ['india', '印度共和国', '印度国'],
    excludes: ['印度尼西亚', 'indonesia', '印尼'] // 明确排除印度尼西亚
  },
  {
    standard: '印度尼西亚',
    aliases: ['印尼', 'indonesia', '印度尼西亚共和国', '印度尼西亚国'],
    excludes: ['印度', 'india'] // 明确排除印度
  },
  {
    standard: '日本',
    aliases: ['japan', '日本国', '东瀛'],
    excludes: []
  },
  {
    standard: '韩国',
    aliases: ['南韩', 'korea', 'south korea', '大韩民国'],
    excludes: ['朝鲜', 'north korea']
  },
  {
    standard: '泰国',
    aliases: ['thailand', '泰王国', '暹罗'],
    excludes: []
  },
  {
    standard: '新加坡',
    aliases: ['singapore', '新加坡共和国', '狮城'],
    excludes: []
  },
  {
    standard: '马来西亚',
    aliases: ['malaysia', '马来', '大马'],
    excludes: []
  },
  {
    standard: '越南',
    aliases: ['vietnam', '越南社会主义共和国'],
    excludes: []
  },
  {
    standard: '菲律宾',
    aliases: ['philippines', '菲律宾共和国', '菲国'],
    excludes: []
  },
  {
    standard: '伊拉克',
    aliases: ['iraq', '伊拉克共和国'],
    excludes: ['伊拉克利翁'] // 排除希腊的伊拉克利翁
  },

  // 欧洲国家
  {
    standard: '英国',
    aliases: ['uk', 'britain', 'england', '大不列颠', '联合王国'],
    excludes: []
  },
  {
    standard: '德国',
    aliases: ['germany', '德意志', '德意志联邦共和国'],
    excludes: []
  },
  {
    standard: '法国',
    aliases: ['france', '法兰西', '法兰西共和国'],
    excludes: []
  },
  {
    standard: '意大利',
    aliases: ['italy', '意大利共和国', '意国'],
    excludes: []
  },
  {
    standard: '西班牙',
    aliases: ['spain', '西班牙王国', '伊比利亚'],
    excludes: []
  },
  {
    standard: '俄罗斯',
    aliases: ['russia', '俄国', '俄罗斯联邦', '苏俄'],
    excludes: []
  },

  // 北美洲国家
  {
    standard: '美国',
    aliases: ['usa', 'america', 'us', '美利坚', '美利坚合众国'],
    excludes: []
  },
  {
    standard: '加拿大',
    aliases: ['canada', '枫叶国'],
    excludes: []
  },
  {
    standard: '墨西哥',
    aliases: ['mexico', '墨西哥合众国'],
    excludes: []
  },

  // 大洋洲国家
  {
    standard: '澳大利亚',
    aliases: ['australia', '澳洲', '澳大利亚联邦'],
    excludes: []
  },
  {
    standard: '新西兰',
    aliases: ['new zealand', '纽西兰', '新西兰国'],
    excludes: []
  },

  // 南美洲国家
  {
    standard: '巴西',
    aliases: ['brazil', '巴西联邦共和国'],
    excludes: []
  },
  {
    standard: '阿根廷',
    aliases: ['argentina', '阿根廷共和国'],
    excludes: []
  },

  // 非洲国家
  {
    standard: '南非',
    aliases: ['south africa', '南非共和国'],
    excludes: []
  },
  {
    standard: '埃及',
    aliases: ['egypt', '阿拉伯埃及共和国'],
    excludes: []
  },

  // 中东国家
  {
    standard: '阿联酋',
    aliases: ['uae', 'united arab emirates', '阿拉伯联合酋长国', '迪拜', '阿布扎比'],
    excludes: []
  },
  {
    standard: '沙特阿拉伯',
    aliases: ['saudi arabia', '沙特', '沙特王国'],
    excludes: []
  },
  {
    standard: '卡塔尔',
    aliases: ['qatar', '卡塔尔国', '卡塔尔王国'],
    excludes: []
  },
  {
    standard: '巴勒斯坦',
    aliases: ['palestine', '巴勒斯坦国', '巴勒斯坦地区'],
    excludes: []
  },
  {
    standard: '阿曼',
    aliases: ['oman', '阿曼苏丹国'],
    excludes: ['阿曼·卡鲁梅', '阿曼多·托拉'] // 排除包含这些词的机场名
  },

  // 特殊地区
  {
    standard: '台湾',
    aliases: ['taiwan', 'tw', 'chinese taipei', 'taipei', '中国台湾', '台湾地区', '中华台北'],
    excludes: []
  },
  {
    standard: '波多黎各',
    aliases: ['puerto rico', 'pr', 'puerto-rico', 'puertorico', 'Puerto Rico'],
    excludes: []
  }
];

/**
 * 根据搜索词查找标准国家名称
 * @param searchTerm 搜索词
 * @returns 标准国家名称，如果未找到返回null
 */
export function findStandardCountryName(searchTerm: string): string | null {
  const term = searchTerm.toLowerCase().trim();

  // 首先尝试精确匹配标准名称
  for (const country of COUNTRY_ALIASES) {
    if (country.standard.toLowerCase() === term) {
      return country.standard;
    }
  }

  // 然后尝试匹配别名
  for (const country of COUNTRY_ALIASES) {
    for (const alias of country.aliases) {
      if (alias.toLowerCase() === term) {
        return country.standard;
      }
    }
  }

  return null;
}

/**
 * 检查搜索词是否应该排除某个国家
 * @param searchTerm 搜索词
 * @param countryName 国家名称
 * @returns true表示应该排除，false表示不排除
 */
export function shouldExcludeCountry(searchTerm: string, countryName: string): boolean {
  const term = searchTerm.toLowerCase().trim();

  for (const country of COUNTRY_ALIASES) {
    if (country.standard === countryName && country.excludes) {
      // 检查搜索词是否在排除列表中
      for (const exclude of country.excludes) {
        if (term === exclude.toLowerCase()) {
          return true;
        }
      }

      // 检查搜索词是否精确匹配当前国家
      if (country.standard.toLowerCase() === term ||
          country.aliases.some(alias => alias.toLowerCase() === term)) {
        return false; // 精确匹配时不排除
      }

      // 检查是否是被排除的模糊匹配
      if (country.excludes.some(exclude =>
        exclude.toLowerCase().includes(term) || term.includes(exclude.toLowerCase())
      )) {
        return true;
      }
    }
  }

  return false;
}

/**
 * 检查机场名称是否应该在特定国家搜索中被排除
 * @param searchTerm 搜索词
 * @param airportName 机场名称
 * @param airportCountry 机场所属国家
 * @returns true表示应该排除，false表示不排除
 */
export function shouldExcludeAirportByName(searchTerm: string, airportName: string, airportCountry: string): boolean {
  const term = searchTerm.toLowerCase().trim();

  for (const country of COUNTRY_ALIASES) {
    // 如果搜索词匹配某个国家
    if (country.standard.toLowerCase() === term ||
        country.aliases.some(alias => alias.toLowerCase() === term)) {

      // 但机场不属于这个国家，且机场名称包含应排除的词汇
      if (airportCountry !== country.standard && country.excludes) {
        for (const exclude of country.excludes) {
          if (airportName.toLowerCase().includes(exclude.toLowerCase())) {
            return true; // 应该排除
          }
        }
      }
    }
  }

  return false;
}

/**
 * 获取所有可能的国家搜索词
 * @param countryName 标准国家名称
 * @returns 所有可能的搜索词列表
 */
export function getCountrySearchTerms(countryName: string): string[] {
  const country = COUNTRY_ALIASES.find(c => c.standard === countryName);
  if (!country) return [countryName];

  return [country.standard, ...country.aliases];
}

export default COUNTRY_ALIASES;
