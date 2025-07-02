// 全球机场搜索功能模块
import { oceaniaAirports } from './airport-codes-oceania';
import { asiaAirports } from './airport-codes-asia';
import { northAmericaAirports } from './airport-codes-north-america';
import { southAmericaAirports } from './airport-codes-south-america';
import { europeAirports } from './airport-codes-europe';
import { africaAirports } from './airport-codes-africa';
import { usaAirportsEnhanced } from './airport-codes-usa-enhanced';
import { chinaAirportsEnhanced } from './airport-codes-china-enhanced';
import { ukAirportsEnhanced } from './airport-codes-uk-enhanced';
import { germanyAirportsEnhanced } from './airport-codes-germany-enhanced';
import { canadaAirportsEnhanced } from './airport-codes-canada-enhanced';
import { mexicoAirportsEnhanced } from './airport-codes-mexico-enhanced';
import { franceAirportsEnhanced } from './airport-codes-france-enhanced';
import { italyAirportsEnhanced } from './airport-codes-italy-enhanced';
import { spainAirportsEnhanced } from './airport-codes-spain-enhanced';
import { japanAirportsEnhanced } from './airport-codes-japan-enhanced';
import { koreaAirportsEnhanced } from './airport-codes-korea-enhanced';
import { singaporeAirportsEnhanced } from './airport-codes-singapore-enhanced';
import { thailandAirportsEnhanced } from './airport-codes-thailand-enhanced';
import { malaysiaAirportsEnhanced } from './airport-codes-malaysia-enhanced';
import { indonesiaAirportsEnhanced } from './airport-codes-indonesia-enhanced';
import { uaeAirportsEnhanced } from './airport-codes-uae-enhanced';
import { indiaAirportsEnhanced } from './airport-codes-india-enhanced';
import { australiaAirportsEnhanced } from './airport-codes-australia-enhanced';
import { newZealandAirportsEnhanced } from './airport-codes-newzealand-enhanced';
import { southAfricaEnhancedAirports } from './airport-codes-southafrica-enhanced';
import { brazilEnhancedAirports } from './airport-codes-brazil-enhanced';
import { egyptEnhancedAirports } from './airport-codes-egypt-enhanced';
import { argentinaEnhancedAirports } from './airport-codes-argentina-enhanced';
import { russiaEnhancedAirports } from './airport-codes-russia-enhanced';
import { turkeyEnhancedAirports } from './airport-codes-turkey-enhanced';
import { netherlandsEnhancedAirports } from './airport-codes-netherlands-enhanced';
import { switzerlandEnhancedAirports } from './airport-codes-switzerland-enhanced';
import { austriaEnhancedAirports } from './airport-codes-austria-enhanced';
import { belgiumEnhancedAirports } from './airport-codes-belgium-enhanced';
import { denmarkEnhancedAirports } from './airport-codes-denmark-enhanced';
import { swedenEnhancedAirports } from './airport-codes-sweden-enhanced';
import { norwayEnhancedAirports } from './airport-codes-norway-enhanced';
import { finlandEnhancedAirports } from './airport-codes-finland-enhanced';
import { czechEnhancedAirports } from './airport-codes-czech-enhanced';
import { polandEnhancedAirports } from './airport-codes-poland-enhanced';
import { slovakiaEnhancedAirports } from './airport-codes-slovakia-enhanced';
import { hungaryEnhancedAirports } from './airport-codes-hungary-enhanced';
import { estoniaEnhancedAirports } from './airport-codes-estonia-enhanced';
import { latviaEnhancedAirports } from './airport-codes-latvia-enhanced';
import { lithuaniaEnhancedAirports } from './airport-codes-lithuania-enhanced';
import { croatiaEnhancedAirports } from './airport-codes-croatia-enhanced';
import { romaniaEnhancedAirports } from './airport-codes-romania-enhanced';
import { greeceEnhancedAirports } from './airport-codes-greece-enhanced';
import { serbiaEnhancedAirports } from './airport-codes-serbia-enhanced';
import { bulgariaEnhancedAirports } from './airport-codes-bulgaria-enhanced';
import { sloveniaEnhancedAirports } from './airport-codes-slovenia-enhanced';
import { bosniaEnhancedAirports } from './airport-codes-bosnia-enhanced';
import { macedoniaEnhancedAirports } from './airport-codes-macedonia-enhanced';
import { montenegroEnhancedAirports } from './airport-codes-montenegro-enhanced';
import { albaniaEnhancedAirports } from './airport-codes-albania-enhanced';
import { kosovoEnhancedAirports } from './airport-codes-kosovo-enhanced';
import { irelandEnhancedAirports } from './airport-codes-ireland-enhanced';
import { scotlandEnhancedAirports } from './airport-codes-scotland-enhanced';
import { italySouthEnhancedAirports } from './airport-codes-italy-south-enhanced';
import { franceSouthEnhancedAirports } from './airport-codes-france-south-enhanced';
import { spainBalearicEnhancedAirports } from './airport-codes-spain-balearic-enhanced';
import { greeceAegeanEnhancedAirports } from './airport-codes-greece-aegean-enhanced';
import { arcticNetworkEnhancedAirports } from './airport-codes-arctic-network-enhanced';
import { russiaSiberiaEnhancedAirports } from './airport-codes-russia-siberia-enhanced';
import { centralAsiaEnhancedAirports } from './airport-codes-central-asia-enhanced';
import { southAsiaEnhancedAirports } from './airport-codes-south-asia-enhanced';
import { southeastAsiaEnhancedAirports } from './airport-codes-southeast-asia-enhanced';
import { northAmericaArcticEnhancedAirports } from './airport-codes-north-america-arctic-enhanced';
import { eastAfricaEnhancedAirports } from './airport-codes-east-africa-enhanced';
import { southAmericaAndesEnhancedAirports } from './airport-codes-south-america-andes-enhanced';
import { westAsiaMiddleEastEnhancedAirports } from './airport-codes-west-asia-middle-east-enhanced';
import { westAfricaEnhancedAirports } from './airport-codes-west-africa-enhanced';
import { pacificIslandsEnhancedAirports } from './airport-codes-pacific-islands-enhanced';
import { northAfricaEnhancedAirports } from './airport-codes-north-africa-enhanced';
import { caucasusEnhancedAirports } from './airport-codes-caucasus-enhanced';
import { caribbeanIslandsEnhancedAirports } from './airport-codes-caribbean-islands-enhanced';
import { subSaharanAfricaEnhancedAirports } from './airport-codes-sub-saharan-africa-enhanced';
import { southAmericaOtherEnhancedAirports } from './airport-codes-south-america-other-enhanced';
import { asiaOtherEnhancedAirports } from './airport-codes-asia-other-enhanced';
import { europeOtherEnhancedAirports } from './airport-codes-europe-other-enhanced';
import { oceaniaOtherEnhancedAirports } from './airport-codes-oceania-other-enhanced';
import { centralAfricaEnhancedAirports } from './airport-codes-central-africa-enhanced';
import { southAmericaOverseasEnhancedAirports } from './airport-codes-south-america-overseas-enhanced';
import { antarcticaResearchEnhancedAirports } from './airport-codes-antarctica-research-enhanced';
import { timorLesteEnhancedAirports } from './airport-codes-timor-leste-enhanced';
import { nigerEnhancedAirports } from './airport-codes-niger-enhanced';
import { getCityPriority, extractCityName } from './city-priority';
import { formatCountryDisplay, getCountryInfoByCode, isCountryCode, searchCountries } from './country-codes';

// 重新导出国家代码相关函数，方便外部使用
export { getCountryInfoByCode, isCountryCode, searchCountries } from './country-codes';
import { findStandardCountryName, shouldExcludeCountry, shouldExcludeAirportByName } from './country-aliases';
import { completeCountriesDatabase, CountryInfo, searchCompleteCountries } from './complete-countries';

// 🚀 新增：搜索性能优化系统
const searchCache = new Map<string, AirportSearchResult[]>();
const CACHE_SIZE_LIMIT = 100; // 限制缓存大小防止内存泄漏

// 🚀 新增：预处理搜索索引
interface SearchIndex {
  codeIndex: Map<string, AirportSearchResult[]>;
  nameIndex: Map<string, AirportSearchResult[]>;
  countryIndex: Map<string, AirportSearchResult[]>;
}

let searchIndex: SearchIndex | null = null;

// 🚀 构建搜索索引 - 提高搜索性能
function buildSearchIndex(): SearchIndex {
  if (searchIndex) return searchIndex;

  const codeIndex = new Map<string, AirportSearchResult[]>();
  const nameIndex = new Map<string, AirportSearchResult[]>();
  const countryIndex = new Map<string, AirportSearchResult[]>();

  Object.entries(globalAirports).forEach(([code, info]) => {
    const airport = formatAirportResult(code, info);

    // 按代码索引
    const codeKey = code.toLowerCase();
    if (!codeIndex.has(codeKey)) codeIndex.set(codeKey, []);
    codeIndex.get(codeKey)!.push(airport);

    // 按名称索引（分词）
    const nameWords = [
      ...info.chinese.toLowerCase().split(''),
      ...info.english.toLowerCase().split(/\s+|[^a-zA-Z]/g).filter(w => w.length > 0)
    ];
    for (const word of nameWords) {
      if (word.length > 0) {
        if (!nameIndex.has(word)) nameIndex.set(word, []);
        nameIndex.get(word)!.push(airport);
      }
    }

    // 按国家索引
    const countryKey = info.country.toLowerCase();
    if (!countryIndex.has(countryKey)) countryIndex.set(countryKey, []);
    countryIndex.get(countryKey)!.push(airport);
  });

  searchIndex = { codeIndex, nameIndex, countryIndex };
  return searchIndex;
}

// 🚀 清理缓存 - 防止内存泄漏
function cleanupCache() {
  if (searchCache.size > CACHE_SIZE_LIMIT) {
    const keysToDelete = Array.from(searchCache.keys()).slice(0, Math.floor(CACHE_SIZE_LIMIT / 2));
    for (const key of keysToDelete) {
      searchCache.delete(key);
    }
  }
}

// 全球机场数据类型
export type GlobalAirports = Record<string, AirportInfo>;

// 基础机场信息接口
export interface BaseAirportInfo {
  chinese: string;
  english: string;
  country: string;
}

// 增强机场信息接口
export interface EnhancedAirportInfo {
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number;
}

// 通用机场信息接口
export type AirportInfo = BaseAirportInfo & Partial<EnhancedAirportInfo>;

// 搜索结果接口
export interface AirportSearchResult extends Required<AirportInfo> {
  code: string;
  continent: string;
  countryWithCode: string;
  displayColor: string;
}

// 机场类型颜色配置
export const AIRPORT_COLORS = {
  international: '#10b981', // 绿色 - 国际机场
  domestic: '#6b7280',      // 灰色 - 国内机场
  regional: '#f59e0b'       // 橙色 - 地区机场
};

// 机场类型显示文本
export const AIRPORT_TYPE_LABELS = {
  international: '国际',
  domestic: '国内',
  regional: '地区'
};

// 无机场国家的配置信息
export interface NoAirportCountryInfo {
  chinese: string;
  english: string;
  code: string;
  reason: string; // 无机场的原因说明
  capital: string;
  continent: string;
  alternatives?: string[]; // 推荐的替代机场
}

// 无机场国家数据库
export const NO_AIRPORT_COUNTRIES: NoAirportCountryInfo[] = [
  {
    chinese: '巴勒斯坦',
    english: 'Palestine',
    code: 'PS',
    reason: '联合国观察员国，目前无国际机场',
    capital: '拉马拉',
    continent: '亚洲',
    alternatives: ['可考虑使用约旦安曼机场(AMM)或以色列特拉维夫机场(TLV)']
  },
  {
    chinese: '梵蒂冈',
    english: 'Vatican City',
    code: 'VA',
    reason: '世界最小国家，使用罗马机场',
    capital: '梵蒂冈',
    continent: '欧洲',
    alternatives: ['使用意大利罗马菲乌米奇诺机场(FCO)']
  },
  {
    chinese: '圣马力诺',
    english: 'San Marino',
    code: 'SM',
    reason: '国土面积小，使用邻国机场',
    capital: '圣马力诺',
    continent: '欧洲',
    alternatives: ['使用意大利里米尼机场或博洛尼亚机场(BLQ)']
  },
  {
    chinese: '摩纳哥',
    english: 'Monaco',
    code: 'MC',
    reason: '国土面积小，使用邻国机场',
    capital: '摩纳哥',
    continent: '欧洲',
    alternatives: ['使用法国尼斯机场(NCE)']
  },
  {
    chinese: '安道尔',
    english: 'Andorra',
    code: 'AD',
    reason: '山地小国，使用邻国机场',
    capital: '安道尔城',
    continent: '欧洲',
    alternatives: ['使用西班牙巴塞罗那机场(BCN)或法国图卢兹机场(TLS)']
  },
  {
    chinese: '列支敦士登',
    english: 'Liechtenstein',
    code: 'LI',
    reason: '国土面积小，使用邻国机场',
    capital: '瓦杜兹',
    continent: '欧洲',
    alternatives: ['使用瑞士苏黎世机场(ZUR)']
  }
];

// 增强机场数据接口
export interface EnhancedAirportData {
  iata: string;
  chinese: string;
  english: string;
  country: string;
  isInternational?: boolean;
  hasCustoms?: boolean;
  priority?: number;
}

// 转换增强数据为基础格式
function convertEnhancedToBasic(enhanced: EnhancedAirportData[]): Record<string, AirportInfo> {
  if (!Array.isArray(enhanced)) {
    return {}; // If not an array, return empty object to prevent crash
  }
  return enhanced.reduce((acc, airport) => {
    acc[airport.iata] = {
      chinese: airport.chinese,
      english: airport.english,
      country: airport.country,
      type: airport.isInternational ? 'international' : 'domestic',
      customs: airport.hasCustoms || false,
      priority: airport.priority || 0
    };
    return acc;
  }, {} as Record<string, AirportInfo>);
}

// 转换南非增强数据为基础格式
const southAfricaBasicAirports = convertEnhancedToBasic(southAfricaEnhancedAirports);

// 转换巴西增强数据为基础格式
const brazilBasicAirports = convertEnhancedToBasic(brazilEnhancedAirports);

// 转换埃及增强数据为基础格式
const egyptBasicAirports = convertEnhancedToBasic(egyptEnhancedAirports);

// 转换阿根廷增强数据为基础格式
const argentinaBasicAirports = convertEnhancedToBasic(argentinaEnhancedAirports);

// 转换俄罗斯增强数据为基础格式
const russiaBasicAirports = convertEnhancedToBasic(russiaEnhancedAirports);

// 转换土耳其增强数据为基础格式
const turkeyBasicAirports = convertEnhancedToBasic(turkeyEnhancedAirports);

// 转换荷兰增强数据为基础格式
const netherlandsBasicAirports = convertEnhancedToBasic(netherlandsEnhancedAirports);

// 转换瑞士增强数据为基础格式
const switzerlandBasicAirports = convertEnhancedToBasic(switzerlandEnhancedAirports);

// 转换奥地利增强数据为基础格式
const austriaBasicAirports = convertEnhancedToBasic(austriaEnhancedAirports);

// 转换比利时增强数据为基础格式
const belgiumBasicAirports = convertEnhancedToBasic(belgiumEnhancedAirports);

// 转换丹麦增强数据为基础格式
const denmarkBasicAirports = convertEnhancedToBasic(denmarkEnhancedAirports);

// 转换瑞典增强数据为基础格式
const swedenBasicAirports = convertEnhancedToBasic(swedenEnhancedAirports);

// 转换挪威增强数据为基础格式
const norwayBasicAirports = convertEnhancedToBasic(norwayEnhancedAirports);

// 转换芬兰增强数据为基础格式
const finlandBasicAirports = convertEnhancedToBasic(finlandEnhancedAirports);

// 转换捷克增强数据为基础格式
const czechBasicAirports = convertEnhancedToBasic(czechEnhancedAirports);

// 转换波兰增强数据为基础格式
const polandBasicAirports = convertEnhancedToBasic(polandEnhancedAirports);

// 转换斯洛伐克增强数据为基础格式
const slovakiaBasicAirports = convertEnhancedToBasic(slovakiaEnhancedAirports);

// 转换匈牙利增强数据为基础格式
const hungaryBasicAirports = convertEnhancedToBasic(hungaryEnhancedAirports);

// 转换爱沙尼亚增强数据为基础格式
const estoniaBasicAirports = convertEnhancedToBasic(estoniaEnhancedAirports);

// 转换拉脱维亚增强数据为基础格式
const latviaBasicAirports = convertEnhancedToBasic(latviaEnhancedAirports);

// 转换立陶宛增强数据为基础格式
const lithuaniaBasicAirports = convertEnhancedToBasic(lithuaniaEnhancedAirports);

// 转换塞尔维亚增强数据为基础格式
const serbiaBasicAirports = convertEnhancedToBasic(serbiaEnhancedAirports);

// 转换保加利亚增强数据为基础格式
const bulgariaBasicAirports = convertEnhancedToBasic(bulgariaEnhancedAirports);

// 转换斯洛文尼亚增强数据为基础格式
const sloveniaBasicAirports = convertEnhancedToBasic(sloveniaEnhancedAirports);

// 转换波黑增强数据为基础格式
const bosniaBasicAirports = convertEnhancedToBasic(bosniaEnhancedAirports);

// 转换北马其顿增强数据为基础格式
const macedoniaBasicAirports = convertEnhancedToBasic(macedoniaEnhancedAirports);

// 转换黑山增强数据为基础格式
const montenegroBasicAirports = convertEnhancedToBasic(montenegroEnhancedAirports);

// 转换阿尔巴尼亚增强数据为基础格式
const albaniaBasicAirports = convertEnhancedToBasic(albaniaEnhancedAirports);

// 转换科索沃增强数据为基础格式
const kosovoBasicAirports = convertEnhancedToBasic(kosovoEnhancedAirports);

// 转换爱尔兰增强数据为基础格式
const irelandBasicAirports = convertEnhancedToBasic(irelandEnhancedAirports);

// 转换苏格兰增强数据为基础格式
const scotlandBasicAirports = convertEnhancedToBasic(scotlandEnhancedAirports);

// 转换意大利南部增强数据为基础格式
const italySouthBasicAirports = convertEnhancedToBasic(italySouthEnhancedAirports);

// 转换法国南部增强数据为基础格式
const franceSouthBasicAirports = convertEnhancedToBasic(franceSouthEnhancedAirports);

// 转换西班牙巴利阿里群岛增强数据为基础格式
const spainBalearicBasicAirports = convertEnhancedToBasic(spainBalearicEnhancedAirports);

// 转换希腊爱琴海群岛增强数据为基础格式
const greeceAegeanBasicAirports = convertEnhancedToBasic(greeceAegeanEnhancedAirports);

// 转换北极圈航空网络增强数据为基础格式
const arcticNetworkBasicAirports = convertEnhancedToBasic(arcticNetworkEnhancedAirports);

// 转换俄罗斯西伯利亚扩展增强数据为基础格式
const russiaSiberiaBasicAirports = convertEnhancedToBasic(russiaSiberiaEnhancedAirports);

// 转换克罗地亚增强数据为基础格式
const croatiaBasicAirports = convertEnhancedToBasic(croatiaEnhancedAirports);

// 转换罗马尼亚增强数据为基础格式
const romaniaBasicAirports = convertEnhancedToBasic(romaniaEnhancedAirports);

// 转换希腊增强数据为基础格式
const greeceBasicAirports = convertEnhancedToBasic(greeceEnhancedAirports);

// 转换中亚五国增强数据为基础格式
const centralAsiaBasicAirports = convertEnhancedToBasic(centralAsiaEnhancedAirports);

// 转换南亚次大陆增强数据为基础格式
const southAsiaBasicAirports = convertEnhancedToBasic(southAsiaEnhancedAirports);

// 转换东南亚六国增强数据为基础格式
const southeastAsiaBasicAirports = convertEnhancedToBasic(southeastAsiaEnhancedAirports);

// 转换北美阿拉斯加+育空增强数据为基础格式
const northAmericaArcticBasicAirports = convertEnhancedToBasic(northAmericaArcticEnhancedAirports);

// 转换东非五国增强数据为基础格式
const eastAfricaBasicAirports = convertEnhancedToBasic(eastAfricaEnhancedAirports);

// 转换南美洲安第斯六国增强数据为基础格式
const southAmericaAndesBasicAirports = convertEnhancedToBasic(southAmericaAndesEnhancedAirports);

// 转换西亚中东六国增强数据为基础格式
const westAsiaMiddleEastBasicAirports = convertEnhancedToBasic(westAsiaMiddleEastEnhancedAirports);

// 转换非洲西部五国增强数据为基础格式
const westAfricaBasicAirports = convertEnhancedToBasic(westAfricaEnhancedAirports);

// 转换太平洋岛国增强数据为基础格式
const pacificIslandsBasicAirports = convertEnhancedToBasic(pacificIslandsEnhancedAirports);

// 转换北非三国增强数据为基础格式
const northAfricaBasicAirports = convertEnhancedToBasic(northAfricaEnhancedAirports);

// 转换高加索三国增强数据为基础格式
const caucasusBasicAirports = convertEnhancedToBasic(caucasusEnhancedAirports);

// 转换加勒比海岛国增强数据为基础格式
const caribbeanIslandsBasicAirports = convertEnhancedToBasic(caribbeanIslandsEnhancedAirports);

// 转换撒哈拉以南非洲增强数据为基础格式
const subSaharanAfricaBasicAirports = convertEnhancedToBasic(subSaharanAfricaEnhancedAirports);

// 转换南美洲其他国家增强数据为基础格式
const southAmericaOtherBasicAirports = convertEnhancedToBasic(southAmericaOtherEnhancedAirports);

// 转换亚洲其他重要国家增强数据为基础格式
const asiaOtherBasicAirports = convertEnhancedToBasic(asiaOtherEnhancedAirports);

// 转换欧洲其他重要国家增强数据为基础格式
const europeOtherBasicAirports = convertEnhancedToBasic(europeOtherEnhancedAirports);

// 转换大洋洲其他岛国增强数据为基础格式
const oceaniaOtherBasicAirports = convertEnhancedToBasic(oceaniaOtherEnhancedAirports);

// 转换中非国家增强数据为基础格式
const centralAfricaBasicAirports = convertEnhancedToBasic(centralAfricaEnhancedAirports);

// 转换南美洲海外领土增强数据为基础格式
const southAmericaOverseasBasicAirports = convertEnhancedToBasic(southAmericaOverseasEnhancedAirports);

// 转换南极洲科研站增强数据为基础格式
const antarcticaResearchBasicAirports = convertEnhancedToBasic(antarcticaResearchEnhancedAirports);

// 转换东帝汶增强数据为基础格式
const timorLesteBasicAirports = convertEnhancedToBasic(timorLesteEnhancedAirports);

// 转换尼日尔增强数据为基础格式
const nigerBasicAirports = convertEnhancedToBasic(nigerEnhancedAirports);

// 合并所有洲际机场数据
export const globalAirports: GlobalAirports = {
  ...oceaniaAirports,
  ...asiaAirports,
  ...northAmericaAirports,
  ...southAmericaAirports,
  ...europeAirports,
  ...africaAirports,
  // 增强的美国机场数据覆盖原有数据
  ...usaAirportsEnhanced,
  // 增强的中国机场数据覆盖原有数据
  ...chinaAirportsEnhanced,
  // 增强的英国机场数据覆盖原有数据
  ...ukAirportsEnhanced,
  // 增强的德国机场数据覆盖原有数据
  ...germanyAirportsEnhanced,
  // 增强的加拿大机场数据覆盖原有数据
  ...canadaAirportsEnhanced,
  // 增强的墨西哥机场数据覆盖原有数据
  ...mexicoAirportsEnhanced,
  // 增强的法国机场数据覆盖原有数据
  ...franceAirportsEnhanced,
  // 增强的意大利机场数据覆盖原有数据
  ...italyAirportsEnhanced,
  // 增强的西班牙机场数据覆盖原有数据
  ...spainAirportsEnhanced,
  // 增强的日本机场数据覆盖原有数据
  ...japanAirportsEnhanced,
  // 增强的韩国机场数据覆盖原有数据
  ...koreaAirportsEnhanced,
  // 增强的新加坡机场数据覆盖原有数据
  ...singaporeAirportsEnhanced,
  // 增强的泰国机场数据覆盖原有数据
  ...thailandAirportsEnhanced,
  // 增强的马来西亚机场数据覆盖原有数据
  ...malaysiaAirportsEnhanced,
  // 增强的印度尼西亚机场数据覆盖原有数据
  ...indonesiaAirportsEnhanced,
  // 增强的阿联酋机场数据覆盖原有数据
  ...uaeAirportsEnhanced,
  // 增强的印度机场数据覆盖原有数据
  ...indiaAirportsEnhanced,
  // 增强的澳大利亚机场数据覆盖原有数据
  ...australiaAirportsEnhanced,
  // 增强的新西兰机场数据覆盖原有数据
  ...newZealandAirportsEnhanced,
  // 增强的南非机场数据覆盖原有数据
  ...southAfricaBasicAirports,
  // 增强的巴西机场数据覆盖原有数据
  ...brazilBasicAirports,
  // 增强的埃及机场数据覆盖原有数据
  ...egyptBasicAirports,
  // 增强的阿根廷机场数据覆盖原有数据
  ...argentinaBasicAirports,
  // 增强的俄罗斯机场数据覆盖原有数据
  ...russiaBasicAirports,
  // 增强的土耳其机场数据覆盖原有数据
  ...turkeyBasicAirports,
  // 增强的荷兰机场数据覆盖原有数据
  ...netherlandsBasicAirports,
  // 增强的瑞士机场数据覆盖原有数据
  ...switzerlandBasicAirports,
  // 增强的奥地利机场数据覆盖原有数据
  ...austriaBasicAirports,
  // 增强的比利时机场数据覆盖原有数据
  ...belgiumBasicAirports,
  // 增强的丹麦机场数据覆盖原有数据
  ...denmarkBasicAirports,
  // 增强的瑞典机场数据覆盖原有数据
  ...swedenBasicAirports,
  // 增强的挪威机场数据覆盖原有数据
  ...norwayBasicAirports,
  // 增强的芬兰机场数据覆盖原有数据
  ...finlandBasicAirports,
  // 增强的捷克机场数据覆盖原有数据
  ...czechBasicAirports,
  // 增强的波兰机场数据覆盖原有数据
  ...polandBasicAirports,
  // 增强的斯洛伐克机场数据覆盖原有数据
  ...slovakiaBasicAirports,
  // 增强的匈牙利机场数据覆盖原有数据
  ...hungaryBasicAirports,
  // 增强的爱沙尼亚机场数据覆盖原有数据
  ...estoniaBasicAirports,
  // 增强的拉脱维亚机场数据覆盖原有数据
  ...latviaBasicAirports,
  // 增强的立陶宛机场数据覆盖原有数据
  ...lithuaniaBasicAirports,
  // 增强的克罗地亚机场数据覆盖原有数据
  ...croatiaBasicAirports,
  // 增强的罗马尼亚机场数据覆盖原有数据
  ...romaniaBasicAirports,
  // 增强的希腊机场数据覆盖原有数据
  ...greeceBasicAirports,
  // 增强的塞尔维亚机场数据覆盖原有数据
  ...serbiaBasicAirports,
  // 增强的保加利亚机场数据覆盖原有数据
  ...bulgariaBasicAirports,
  // 增强的斯洛文尼亚机场数据覆盖原有数据
  ...sloveniaBasicAirports,
  // 增强的波黑机场数据覆盖原有数据
  ...bosniaBasicAirports,
  // 增强的北马其顿机场数据覆盖原有数据
  ...macedoniaBasicAirports,
  // 增强的黑山机场数据覆盖原有数据
  ...montenegroBasicAirports,
  // 增强的阿尔巴尼亚机场数据覆盖原有数据
  ...albaniaBasicAirports,
  // 增强的科索沃机场数据覆盖原有数据
  ...kosovoBasicAirports,
  // 增强的爱尔兰机场数据覆盖原有数据
  ...irelandBasicAirports,
  // 增强的苏格兰机场数据覆盖原有数据
  ...scotlandBasicAirports,
  // 增强的意大利南部机场数据覆盖原有数据
  ...italySouthBasicAirports,
  // 增强的法国南部机场数据覆盖原有数据
  ...franceSouthBasicAirports,
  // 增强的西班牙巴利阿里群岛机场数据覆盖原有数据
  ...spainBalearicBasicAirports,
  // 增强的希腊爱琴海群岛机场数据覆盖原有数据
  ...greeceAegeanBasicAirports,
  // 增强的北极圈航空网络机场数据覆盖原有数据
  ...arcticNetworkBasicAirports,
  // 增强的俄罗斯西伯利亚扩展机场数据覆盖原有数据
  ...russiaSiberiaBasicAirports,
  // 增强的中亚五国机场数据覆盖原有数据
  ...centralAsiaBasicAirports,
  // 增强的南亚次大陆机场数据覆盖原有数据
  ...southAsiaBasicAirports,
  // 增强的东南亚六国机场数据覆盖原有数据
  ...southeastAsiaBasicAirports,
  // 增强的北美阿拉斯加+育空机场数据覆盖原有数据
  ...northAmericaArcticBasicAirports,
  // 增强的东非五国机场数据覆盖原有数据
  ...eastAfricaBasicAirports,
  // 增强的南美洲安第斯六国机场数据覆盖原有数据
  ...southAmericaAndesBasicAirports,
  // 增强的西亚中东六国机场数据覆盖原有数据
  ...westAsiaMiddleEastBasicAirports,
  // 增强的非洲西部五国机场数据覆盖原有数据
  ...westAfricaBasicAirports,
  // 增强的太平洋岛国机场数据覆盖原有数据
  ...pacificIslandsBasicAirports,
  // 增强的北非三国机场数据覆盖原有数据
  ...northAfricaBasicAirports,
  // 增强的高加索三国机场数据覆盖原有数据
  ...caucasusBasicAirports,
  // 增强的加勒比海岛国机场数据覆盖原有数据
  ...caribbeanIslandsBasicAirports,
  // 增强的撒哈拉以南非洲机场数据覆盖原有数据
  ...subSaharanAfricaBasicAirports,
  // 增强的南美洲其他国家机场数据覆盖原有数据
  ...southAmericaOtherBasicAirports,
  // 增强的亚洲其他重要国家机场数据覆盖原有数据
  ...asiaOtherBasicAirports,
  // 增强的欧洲其他重要国家机场数据覆盖原有数据
  ...europeOtherBasicAirports,
  // 增强的大洋洲其他岛国机场数据覆盖原有数据
  ...oceaniaOtherBasicAirports,
  // 增强的中非国家机场数据覆盖原有数据
  ...centralAfricaBasicAirports,
  // 增强的南美洲海外领土机场数据覆盖原有数据
  ...southAmericaOverseasBasicAirports,
  // 增强的南极洲科研站机场数据覆盖原有数据
  ...antarcticaResearchBasicAirports,
  // 增强的东帝汶机场数据覆盖原有数据
  ...timorLesteBasicAirports,
  // 增强的尼日尔机场数据覆盖原有数据
  ...nigerBasicAirports
};

// 获取机场所属洲际
export function getAirportContinent(code: string): string {
  const airportInfo = globalAirports[code.toUpperCase()];

  // 如果数据中没有，再进行旧的逻辑判断作为备用方案
  // 最优先检查南极洲科研站 (特殊地区优先)
  if (antarcticaResearchEnhancedAirports.some(a => a.iata === code)) return '南极洲';

  // 然后检查原始洲际数据 (基础数据优先)
  if (oceaniaAirports[code]) return '大洋洲';
  if (asiaAirports[code]) return '亚洲';
  if (northAmericaAirports[code]) return '北美';
  if (southAmericaAirports[code]) return '南美';
  if (europeAirports[code]) return '欧洲';
  if (africaAirports[code]) return '非洲';

  // 检查各国增强机场数据 (按洲际分组)

  // 北美洲
  if (usaAirportsEnhanced[code]) return '北美';
  if (canadaAirportsEnhanced[code]) return '北美';
  if (mexicoAirportsEnhanced[code]) return '北美';
  if (northAmericaArcticEnhancedAirports.some(a => a.iata === code)) return '北美';
  if (caribbeanIslandsEnhancedAirports.some(a => a.iata === code)) return '北美';

  // 南美洲
  if (brazilEnhancedAirports.some(a => a.iata === code)) return '南美';
  if (argentinaEnhancedAirports.some(a => a.iata === code)) return '南美';
  if (southAmericaAndesEnhancedAirports.some(a => a.iata === code)) return '南美';
  if (southAmericaOtherEnhancedAirports.some(a => a.iata === code)) return '南美';
  if (southAmericaOverseasEnhancedAirports.some(a => a.iata === code)) return '南美';

  // 欧洲
  if (ukAirportsEnhanced[code]) return '欧洲';
  if (germanyAirportsEnhanced[code]) return '欧洲';
  if (franceAirportsEnhanced[code]) return '欧洲';
  if (italyAirportsEnhanced[code]) return '欧洲';
  if (spainAirportsEnhanced[code]) return '欧洲';
  if (russiaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (turkeyEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (netherlandsEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (switzerlandEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (austriaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (belgiumEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (denmarkEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (swedenEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (norwayEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (finlandEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (czechEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (polandEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (slovakiaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (hungaryEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (estoniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (latviaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (lithuaniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (croatiaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (romaniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (greeceEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (serbiaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (bulgariaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (sloveniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (bosniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (macedoniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (montenegroEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (albaniaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (kosovoEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (irelandEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (scotlandEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (italySouthEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (franceSouthEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (spainBalearicEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (greeceAegeanEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (arcticNetworkEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (russiaSiberiaEnhancedAirports.some(a => a.iata === code)) return '欧洲';
  if (europeOtherEnhancedAirports.some(a => a.iata === code)) return '欧洲';

  // 亚洲
  if (chinaAirportsEnhanced[code]) return '亚洲';
  if (japanAirportsEnhanced[code]) return '亚洲';
  if (koreaAirportsEnhanced[code]) return '亚洲';
  if (singaporeAirportsEnhanced[code]) return '亚洲';
  if (thailandAirportsEnhanced[code]) return '亚洲';
  if (malaysiaAirportsEnhanced[code]) return '亚洲';
  if (indonesiaAirportsEnhanced[code]) return '亚洲';
  if (uaeAirportsEnhanced[code]) return '亚洲';
  if (indiaAirportsEnhanced[code]) return '亚洲';
  if (centralAsiaEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (southAsiaEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (southeastAsiaEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (timorLesteEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (westAsiaMiddleEastEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (caucasusEnhancedAirports.some(a => a.iata === code)) return '亚洲';
  if (asiaOtherEnhancedAirports.some(a => a.iata === code)) return '亚洲';

  // 非洲
  if (southAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (egyptEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (eastAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (westAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (northAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (subSaharanAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (centralAfricaEnhancedAirports.some(a => a.iata === code)) return '非洲';
  if (nigerEnhancedAirports.some(a => a.iata === code)) return '非洲';

  // 大洋洲
  if (australiaAirportsEnhanced[code]) return '大洋洲';
  if (newZealandAirportsEnhanced[code]) return '大洋洲';
  if (pacificIslandsEnhancedAirports.some(a => a.iata === code)) return '大洋洲';
  if (oceaniaOtherEnhancedAirports.some(a => a.iata === code)) return '大洋洲';

  return '未知';
}

// 获取国家代码
function getCountryCodeByName(countryName: string): string {
  const country = completeCountriesDatabase.find((c: CountryInfo) => c.chinese === countryName);
  return country ? country.code : '';
}

// 获取机场类型对应的显示颜色
function getDisplayColorByType(type: 'international' | 'domestic' | 'regional'): string {
  const colors = {
    'international': '#3b82f6', // 蓝色
    'domestic': '#10b981',      // 绿色
    'regional': '#6b7280'       // 灰色
  };
  return colors[type];
}

// 格式化机场搜索结果
function formatAirportResult(code: string, info: AirportInfo): AirportSearchResult {
  const type = info.type || 'domestic';
  const customs = info.customs || false;
  const priority = info.priority !== undefined ? info.priority : 50; // 明确检查undefined，给没有priority的机场默认值50

  return {
    code,
    chinese: info.chinese,
    english: info.english,
    country: info.country,
    type,
    customs,
    priority,
    continent: getAirportContinent(code),
    countryWithCode: `${info.country} ${getCountryCodeByName(info.country)}`,
    displayColor: getDisplayColorByType(type)
  };
}

/**
 * 根据IATA代码精确查找机场
 */
export function findAirportByCode(code: string): AirportSearchResult | null {
  const upperCode = code.toUpperCase();
  const airportInfo = globalAirports[upperCode];

  if (airportInfo) {
    return formatAirportResult(upperCode, airportInfo);
  }

  return null;
}

/**
 * 根据国家查找机场（支持智能排序和数量限制）
 */
export function findAirportsByCountry(
  country: string,
  limit?: number,
  exactMatch = true
): AirportSearchResult[] {
  const results: AirportSearchResult[] = [];

  Object.entries(globalAirports).forEach(([code, info]) => {
    // 安全检查，确保 info 和 info.country 存在
    if (info && info.country) {
    // 根据exactMatch参数决定是精确匹配还是模糊匹配
    const match = exactMatch
      ? info.country.toLowerCase() === country.toLowerCase()
      : info.country.toLowerCase().includes(country.toLowerCase());

    if (match) {
      results.push(formatAirportResult(code, info));
      }
    }
  });

  // 🎯 智能排序：国际机场类型 > 机场优先级 > 城市重要性 > 字母顺序
  results.sort((a, b) => {
    // 🔥 首先按机场类型排序 (国际机场绝对优先)
    const getAirportTypeScore = (airport: AirportSearchResult): number => {
      // 如果有明确类型定义
      if (airport.type === 'international') return 1000;
      if (airport.type === 'regional') return 500;
      if (airport.type === 'domestic') return 100;

      // 如果没有类型定义，进行智能判断
      const code = airport.code;
      const chineseName = airport.chinese.toLowerCase();
      const englishName = airport.english.toLowerCase();

      // 全球知名国际机场代码判断（优先级非常高）
      const knownInternationalCodes = [
        // 台湾主要国际机场
        'TPE', 'KHH', 'RMQ', 'TXG', 'TTT',
        // 中国主要国际机场
        'PEK', 'PVG', 'CAN', 'CTU', 'PKX', 'SZX', 'CGO', 'TSN', 'URC', 'NKG',
        'HGH', 'WUH', 'XMN', 'DLC', 'SHE', 'HRB', 'CKG', 'KMG', 'TAO', 'HAK',
        'BJS', 'SHA', // 北京、上海城市代码
        // 港澳地区
        'HKG', 'MFM',
        // 印度主要国际机场
        'DEL', 'BOM', 'BLR', 'MAA', 'HYD', 'CCU', 'AMD', 'PNQ', 'GOI', 'COK', 'TRV', 'JAI', 'LKO', 'NAG',
        // 其他知名国际机场（移除英国机场，让它们使用明确的type定义）
        'ICN', 'NRT', 'SIN', 'LAX', 'JFK', 'CDG', 'FRA', 'DXB'
      ];

      if (knownInternationalCodes.includes(code)) return 900;

      // 根据名称包含"国际"判断
      if (chineseName.includes('国际') || englishName.includes('international') || englishName.includes('intl')) {
        return 800;
      }

      // 主要城市机场（通常是国际机场）
      const aCityName = extractCityName(airport.chinese);
      const cityPriority = getCityPriority(aCityName, airport.country);
      if (cityPriority <= 1) { // 首都或主要城市
        return 750;
      }

      return 200; // 默认分数
    };

    const typeScoreA = getAirportTypeScore(a);
    const typeScoreB = getAirportTypeScore(b);

    if (typeScoreA !== typeScoreB) {
      return typeScoreB - typeScoreA; // 国际机场优先
    }

    // 🚛 对于同类型机场，按优先级排序 (数字越大优先级越高) - 这是核心排序
    const priorityA = a.priority; // 不使用默认值，保持原始值
    const priorityB = b.priority;
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    // 🏙️ 然后按城市重要性排序 (数字越小优先级越高)
    const aCityName = extractCityName(a.chinese);
    const bCityName = extractCityName(b.chinese);
    const aCityPriority = getCityPriority(aCityName, a.country);
    const bCityPriority = getCityPriority(bCityName, b.country);
    if (aCityPriority !== bCityPriority) {
      return aCityPriority - bCityPriority;
    }

    // 📝 最后按机场代码排序
    return a.code.localeCompare(b.code);
  });

  // 如果指定了限制，则应用限制
  if (limit && limit > 0) {
    return results.slice(0, limit);
  }

  // 如果没有指定限制，使用智能限制
  const stats = getCountryAirportStats(country);
  return results.slice(0, stats.recommendedDisplay);
}

/**
 * 检查是否为特别行政区搜索并返回对应结果
 */
function checkSpecialRegionSearch(query: string, limit: number): AirportSearchResult[] | null {
  const queryLower = query.toLowerCase().trim();

  // 特殊行政区映射 - 直接搜索机场名称而不是国家
  const specialRegions: Record<string, { chinese: string; english: string; code: string; airports: string[] }> = {
    'hk': { chinese: '香港', english: 'Hong Kong', code: 'HK', airports: ['HKG'] },
    'mo': { chinese: '澳门', english: 'Macau', code: 'MO', airports: ['MFM'] },
    'tw': { chinese: '台湾', english: 'Taiwan', code: 'TW', airports: [] }, // 台湾机场通过国家搜索处理
    'pr': { chinese: '波多黎各', english: 'Puerto Rico', code: 'PR', airports: [] }
  };

  // 检查是否为特殊行政区代码或名称
  for (const [code, info] of Object.entries(specialRegions)) {
    // 精确匹配代码
    if (code === queryLower) {
      // 对于香港和澳门，直接返回对应的机场
      if (info.airports.length > 0) {
        const results: AirportSearchResult[] = [];
        for (const airportCode of info.airports) {
          const airport = findAirportByCode(airportCode);
          if (airport) {
            results.push(airport);
          }
        }
        return results;
      } else {
        // 对于其他地区，使用国家搜索
        return findAirportsByCountry(info.chinese, limit);
      }
    }
    
    // 中文名称精确匹配或包含匹配
    if (info.chinese === query || info.chinese.includes(query)) {
      // 对于香港和澳门，直接返回对应的机场
      if (info.airports.length > 0) {
        const results: AirportSearchResult[] = [];
        for (const airportCode of info.airports) {
          const airport = findAirportByCode(airportCode);
          if (airport) {
            results.push(airport);
          }
        }
        return results;
      } else {
        // 对于其他地区，使用国家搜索
        return findAirportsByCountry(info.chinese, limit);
      }
    }
    
         // 英文名称匹配 - 只对长查询（3字符以上）进行部分匹配
     if (query.length >= 3 && info.english.toLowerCase().includes(queryLower)) {
       // 对于香港和澳门，直接返回对应的机场
       if (info.airports.length > 0) {
         const results: AirportSearchResult[] = [];
         for (const airportCode of info.airports) {
           const airport = findAirportByCode(airportCode);
           if (airport) {
             results.push(airport);
           }
         }
         return results;
       } else {
         // 对于其他地区，使用国家搜索
         return findAirportsByCountry(info.chinese, limit);
       }
     }
   }

  return null;
}

/**
 * 检查是否为无机场国家搜索并返回特殊结果
 */
function checkNoAirportCountrySearch(query: string): AirportSearchResult | null {
  const queryLower = query.toLowerCase().trim();

  // 检查是否匹配无机场国家
  for (const country of NO_AIRPORT_COUNTRIES) {
    const chineseMatch = country.chinese.toLowerCase() === queryLower;
    const englishMatch = country.english.toLowerCase() === queryLower;

    // 检查国家别名
    const standardCountryName = findStandardCountryName(query);
    const aliasMatch = standardCountryName === country.chinese;

    if (chineseMatch || englishMatch || aliasMatch) {
      // 创建特殊的搜索结果，显示无机场信息
      return {
        code: 'NO-AIRPORT',
        chinese: `${country.chinese} - 无国际机场`,
        english: `${country.english} - No International Airport`,
        country: country.chinese,
        type: 'domestic' as const,
        customs: false,
        priority: 0,
        continent: country.continent,
        countryWithCode: `${country.chinese} ${country.code}`,
        displayColor: '#ef4444' // 红色表示无机场
      };
    }
  }

  return null;
}

/**
 * 根据特定地区搜索机场（用于特别行政区）
 */
function findAirportsByRegion(regionName: string, limit: number): AirportSearchResult[] {
  const results: AirportSearchResult[] = [];

  Object.entries(globalAirports).forEach(([code, info]) => {
    // 检查机场名称是否匹配指定地区
    if (info.chinese === regionName || info.chinese.includes(regionName)) {
      results.push(formatAirportResult(code, info));
    }
  });

  // 使用与国家搜索相同的排序逻辑
  results.sort((a, b) => {
    const priorityA = a.priority || 50;
    const priorityB = b.priority || 50;
    if (priorityA !== priorityB) {
      return priorityB - priorityA; // 优先级高的排前面
    }
    return a.code.localeCompare(b.code);
  });

  return limit > 0 ? results.slice(0, limit) : results;
}

// 🚀 构建搜索索引 - 提高搜索性能

/**
 * 智能搜索机场（支持多种搜索方式）- 性能优化版本
 */
export function searchAirports(query: string, limit: number = 10): AirportSearchResult[] {
  if (!query) return [];
  
  // 检查是否为特殊行政区搜索
  const specialRegionResults = checkSpecialRegionSearch(query, limit);
  if (specialRegionResults) {
    return specialRegionResults;
  }

  // 检查是否为国家代码搜索
  const countryResults = searchByCountryCode(query, limit);
  if (countryResults && countryResults.length > 0) {
    return countryResults;
  }

  // 🌍 新增：智能国家名搜索 - 支持中文、英文、代码搜索
  const matchedCountries = searchCompleteCountries(query);
  if (matchedCountries.length > 0) {
    // 🔧 修复：直接模拟常规搜索逻辑，而不是调用findAirportsByCountry
    const countrySearchResults: AirportSearchResult[] = [];
    
    for (const [code, info] of Object.entries(globalAirports)) {
      if (shouldExcludeAirportByName(query, info.chinese, info.country) || shouldExcludeCountry(query, info.country)) {
        continue;
      }

      // 检查是否匹配任何找到的国家
      const matchesCountry = matchedCountries.some(country => 
        info.country === country.chinese || 
        info.country.toLowerCase() === country.english.toLowerCase()
      );

      if (matchesCountry) {
        countrySearchResults.push(formatAirportResult(code, info));
      }
    }
    
    if (countrySearchResults.length > 0) {
      // 🔧 使用和常规搜索相同的排序逻辑
      return countrySearchResults
        .sort((a, b) => {
          // 优先级排序
          if (a.priority !== b.priority) {
            return b.priority - a.priority;
          }
          // 国际机场优先
          if (a.type !== b.type) {
            return a.type === 'international' ? -1 : 1;
          }
          // 按代码字母顺序
          return a.code.localeCompare(b.code);
        })
        .slice(0, limit); // 保持和常规搜索相同的limit行为
    }
  }

  // 常规搜索逻辑
  const results: AirportSearchResult[] = [];
  const queryLower = query.toLowerCase().trim();

  for (const [code, info] of Object.entries(globalAirports)) {
    if (shouldExcludeAirportByName(query, info.chinese, info.country) || shouldExcludeCountry(query, info.country)) {
      continue;
    }

    // 精确匹配机场代码
    if (code.toLowerCase() === queryLower) {
      results.push(formatAirportResult(code, info));
      continue;
    }

    // 中文名称匹配
    if (info.chinese.includes(query)) {
      results.push(formatAirportResult(code, info));
      continue;
    }

    // 国家名称匹配（保留原有的中文国家名匹配作为备选）
    if (info.country.includes(query)) {
      results.push(formatAirportResult(code, info));
      continue;
    }

    // 英文名称匹配 - 对于短查询（2字符以下）避免部分匹配
    if (query.length > 2 && info.english.toLowerCase().includes(queryLower)) {
      results.push(formatAirportResult(code, info));
      continue;
    }

    // 对于长查询（3字符以上），允许英文名称的开头匹配
    if (query.length >= 3 && info.english.toLowerCase().startsWith(queryLower)) {
      results.push(formatAirportResult(code, info));
      continue;
    }
  }

  // 按优先级和类型排序
  return results
    .sort((a, b) => {
      // 优先级排序
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }
      // 国际机场优先
      if (a.type !== b.type) {
        return a.type === 'international' ? -1 : 1;
      }
      // 按代码字母顺序
    return a.code.localeCompare(b.code);
    })
    .slice(0, limit);
}

// 🌍 按国家代码搜索
function searchByCountryCode(query: string, limit: number): AirportSearchResult[] | null {
  const countryInfo = getCountryInfoByCode(query.toUpperCase());
  if (countryInfo) {
    return findAirportsByCountry(countryInfo.chineseName, limit);
  }
  return null;
}

/**
 * 获取指定国家的机场数量
 */
export function getAirportCountByCountry(country: string): number {
  return Object.values(globalAirports).filter(
    info => info.country.toLowerCase().includes(country.toLowerCase())
  ).length;
}

/**
 * 获取国家机场详细统计信息
 */
export function getCountryAirportStats(country: string): {
  total: number;
  displayed: number;
  isLimited: boolean;
  recommendedDisplay: number;
} {
  const totalCount = getAirportCountByCountry(country);

  // 美国特殊处理：显示50个机场
  let recommendedDisplay = 15; // 默认显示15个
  if (country.toLowerCase().includes('美国') || country.toLowerCase().includes('usa') ||
      country.toLowerCase().includes('america') || country.toLowerCase().includes('united states')) {
    recommendedDisplay = 50; // 美国显示50个
  } else if (totalCount > 100) {
    recommendedDisplay = 25; // 其他大国显示25个
  } else if (totalCount > 50) {
    recommendedDisplay = 20; // 中等国家显示20个
  } else if (totalCount > 20) {
    recommendedDisplay = 15; // 小国显示15个
  } else {
    recommendedDisplay = totalCount; // 机场很少的国家显示全部
  }

  const displayed = Math.min(recommendedDisplay, totalCount);
  const isLimited = displayed < totalCount;

  return {
    total: totalCount,
    displayed,
    isLimited,
    recommendedDisplay
  };
}

/**
 * 获取所有国家列表
 */
export function getAllCountries(): string[] {
  const countries = new Set<string>();
  Object.values(globalAirports).forEach(info => {
    countries.add(info.country);
  });
  return Array.from(countries).sort();
}

/**
 * 获取指定洲际的所有机场
 */
export function getAirportsByContinent(continent: string): AirportSearchResult[] {
  let airportData: { [key: string]: AirportInfo } = {};

  switch (continent) {
    case '大洋洲':
      airportData = oceaniaAirports;
      break;
    case '亚洲':
      airportData = asiaAirports;
      break;
    case '北美':
      airportData = northAmericaAirports;
      break;
    case '南美':
      airportData = southAmericaAirports;
      break;
    case '欧洲':
      airportData = europeAirports;
      break;
    case '非洲':
      airportData = africaAirports;
      break;
    default:
      return [];
  }

  return Object.entries(airportData).map(([code, info]) =>
    formatAirportResult(code, info)
  ).sort((a, b) => a.code.localeCompare(b.code));
}

/**
 * 获取统计信息（包括国际机场精确数量和按洲际分组的国际机场统计）
 */
export function getAirportStatistics() {
  // 动态统计各洲际机场数量
  const continentCounts: { [key: string]: number } = {};
  const continentInternationalCounts: { [key: string]: number } = {};
  let internationalAirportsCount = 0;

  Object.entries(globalAirports).forEach(([code, info]) => {
    const continent = getAirportContinent(code);
    continentCounts[continent] = (continentCounts[continent] || 0) + 1;

    // 统计国际机场数量
    if (info.type === 'international') {
      internationalAirportsCount++;
      continentInternationalCounts[continent] = (continentInternationalCounts[continent] || 0) + 1;
    }
  });

  const stats = {
    total: Object.keys(globalAirports).length,
    international: internationalAirportsCount,
    byContinent: continentCounts,
    internationalByContinent: continentInternationalCounts,
    countries: getAllCountries().length
  };

  return stats;
}
