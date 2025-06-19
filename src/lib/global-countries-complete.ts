// 🌍 全球国家和地区完整列表
// Global Countries and Territories Complete Database
// 覆盖联合国193个成员国 + 观察员国家 + 特殊地区

import { shouldExcludeCountry } from './country-aliases';

export interface CountryInfo {
  code: string; // ISO 3166-1 alpha-2 code
  chinese: string;
  english: string;
  continent: string;
  hasAirports: boolean;
  airportCount: number;
  internationalAirports: number;
  status: 'completed' | 'in-progress' | 'planned' | 'no-airports';
  capital: string;
  notes?: string;
}

// ================================================================
// 🌍 按大洲分类的全球国家和地区列表
// 总计：193个联合国成员国 + 特殊地区
// ================================================================

export const globalCountriesDatabase: CountryInfo[] = [

  // ================================================================
  // 🌏 亚洲 (49个国家和地区)
  // ================================================================

  // 东亚
  { code: 'CN', chinese: '中国', english: 'China', continent: '亚洲', hasAirports: true, airportCount: 50, internationalAirports: 38, status: 'completed', capital: '北京' },
  { code: 'JP', chinese: '日本', english: 'Japan', continent: '亚洲', hasAirports: true, airportCount: 30, internationalAirports: 20, status: 'completed', capital: '东京' },
  { code: 'KR', chinese: '韩国', english: 'South Korea', continent: '亚洲', hasAirports: true, airportCount: 25, internationalAirports: 10, status: 'completed', capital: '首尔' },
  { code: 'KP', chinese: '朝鲜', english: 'North Korea', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '平壤' },
  { code: 'MN', chinese: '蒙古', english: 'Mongolia', continent: '亚洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '乌兰巴托' },

  // 东南亚
  { code: 'SG', chinese: '新加坡', english: 'Singapore', continent: '亚洲', hasAirports: true, airportCount: 15, internationalAirports: 1, status: 'completed', capital: '新加坡' },
  { code: 'TH', chinese: '泰国', english: 'Thailand', continent: '亚洲', hasAirports: true, airportCount: 20, internationalAirports: 11, status: 'completed', capital: '曼谷' },
  { code: 'MY', chinese: '马来西亚', english: 'Malaysia', continent: '亚洲', hasAirports: true, airportCount: 18, internationalAirports: 8, status: 'completed', capital: '吉隆坡' },
  { code: 'ID', chinese: '印度尼西亚', english: 'Indonesia', continent: '亚洲', hasAirports: true, airportCount: 22, internationalAirports: 12, status: 'completed', capital: '雅加达' },
  { code: 'PH', chinese: '菲律宾', english: 'Philippines', continent: '亚洲', hasAirports: true, airportCount: 15, internationalAirports: 8, status: 'planned', capital: '马尼拉' },
  { code: 'VN', chinese: '越南', english: 'Vietnam', continent: '亚洲', hasAirports: true, airportCount: 12, internationalAirports: 6, status: 'planned', capital: '河内' },
  { code: 'LA', chinese: '老挝', english: 'Laos', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '万象' },
  { code: 'KH', chinese: '柬埔寨', english: 'Cambodia', continent: '亚洲', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '金边' },
  { code: 'MM', chinese: '缅甸', english: 'Myanmar', continent: '亚洲', hasAirports: true, airportCount: 8, internationalAirports: 3, status: 'planned', capital: '内比都' },
  { code: 'BN', chinese: '文莱', english: 'Brunei', continent: '亚洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '斯里巴加湾市' },
  { code: 'TL', chinese: '东帝汶', english: 'East Timor', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'completed', capital: '帝力' },

  // 南亚
  { code: 'IN', chinese: '印度', english: 'India', continent: '亚洲', hasAirports: true, airportCount: 30, internationalAirports: 16, status: 'completed', capital: '新德里' },
  { code: 'PK', chinese: '巴基斯坦', english: 'Pakistan', continent: '亚洲', hasAirports: true, airportCount: 12, internationalAirports: 5, status: 'planned', capital: '伊斯兰堡' },
  { code: 'BD', chinese: '孟加拉国', english: 'Bangladesh', continent: '亚洲', hasAirports: true, airportCount: 8, internationalAirports: 3, status: 'planned', capital: '达卡' },
  { code: 'LK', chinese: '斯里兰卡', english: 'Sri Lanka', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'planned', capital: '科伦坡' },
  { code: 'NP', chinese: '尼泊尔', english: 'Nepal', continent: '亚洲', hasAirports: true, airportCount: 5, internationalAirports: 1, status: 'planned', capital: '加德满都' },
  { code: 'BT', chinese: '不丹', english: 'Bhutan', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '廷布' },
  { code: 'MV', chinese: '马尔代夫', english: 'Maldives', continent: '亚洲', hasAirports: true, airportCount: 6, internationalAirports: 1, status: 'planned', capital: '马累' },

  // 西亚/中东
  { code: 'AE', chinese: '阿联酋', english: 'United Arab Emirates', continent: '亚洲', hasAirports: true, airportCount: 12, internationalAirports: 6, status: 'completed', capital: '阿布扎比' },
  { code: 'SA', chinese: '沙特阿拉伯', english: 'Saudi Arabia', continent: '亚洲', hasAirports: true, airportCount: 15, internationalAirports: 8, status: 'planned', capital: '利雅得' },
  { code: 'IR', chinese: '伊朗', english: 'Iran', continent: '亚洲', hasAirports: true, airportCount: 18, internationalAirports: 10, status: 'planned', capital: '德黑兰' },
  { code: 'IQ', chinese: '伊拉克', english: 'Iraq', continent: '亚洲', hasAirports: true, airportCount: 8, internationalAirports: 3, status: 'planned', capital: '巴格达' },
  { code: 'KW', chinese: '科威特', english: 'Kuwait', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '科威特城' },
  { code: 'QA', chinese: '卡塔尔', english: 'Qatar', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '多哈' },
  { code: 'BH', chinese: '巴林', english: 'Bahrain', continent: '亚洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '麦纳麦' },
  { code: 'OM', chinese: '阿曼', english: 'Oman', continent: '亚洲', hasAirports: true, airportCount: 6, internationalAirports: 2, status: 'planned', capital: '马斯喀特' },
  { code: 'YE', chinese: '也门', english: 'Yemen', continent: '亚洲', hasAirports: true, airportCount: 5, internationalAirports: 2, status: 'planned', capital: '萨那' },
  { code: 'JO', chinese: '约旦', english: 'Jordan', continent: '亚洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '安曼' },
  { code: 'SY', chinese: '叙利亚', english: 'Syria', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '大马士革' },
  { code: 'LB', chinese: '黎巴嫩', english: 'Lebanon', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '贝鲁特' },
  { code: 'IL', chinese: '以色列', english: 'Israel', continent: '亚洲', hasAirports: true, airportCount: 5, internationalAirports: 1, status: 'planned', capital: '耶路撒冷' },
  { code: 'PS', chinese: '巴勒斯坦', english: 'Palestine', continent: '亚洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '拉马拉' },

  // 中亚
  { code: 'KZ', chinese: '哈萨克斯坦', english: 'Kazakhstan', continent: '亚洲', hasAirports: true, airportCount: 12, internationalAirports: 5, status: 'planned', capital: '努尔苏丹' },
  { code: 'UZ', chinese: '乌兹别克斯坦', english: 'Uzbekistan', continent: '亚洲', hasAirports: true, airportCount: 8, internationalAirports: 3, status: 'planned', capital: '塔什干' },
  { code: 'TM', chinese: '土库曼斯坦', english: 'Turkmenistan', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'planned', capital: '阿什哈巴德' },
  { code: 'KG', chinese: '吉尔吉斯斯坦', english: 'Kyrgyzstan', continent: '亚洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '比什凯克' },
  { code: 'TJ', chinese: '塔吉克斯坦', english: 'Tajikistan', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '杜尚别' },
  { code: 'AF', chinese: '阿富汗', english: 'Afghanistan', continent: '亚洲', hasAirports: true, airportCount: 6, internationalAirports: 2, status: 'planned', capital: '喀布尔' },

  // 高加索
  { code: 'GE', chinese: '格鲁吉亚', english: 'Georgia', continent: '亚洲', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '第比利斯' },
  { code: 'AM', chinese: '亚美尼亚', english: 'Armenia', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '埃里温' },
  { code: 'AZ', chinese: '阿塞拜疆', english: 'Azerbaijan', continent: '亚洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '巴库' },

  // 土耳其 (跨欧亚)
  { code: 'TR', chinese: '土耳其', english: 'Turkey', continent: '欧洲', hasAirports: true, airportCount: 20, internationalAirports: 14, status: 'completed', capital: '安卡拉' },
  { code: 'CY', chinese: '塞浦路斯', english: 'Cyprus', continent: '亚洲', hasAirports: true, airportCount: 2, internationalAirports: 2, status: 'planned', capital: '尼科西亚' },

  // ================================================================
  // 🌍 欧洲 (50个国家和地区)
  // ================================================================

  // 西欧
  { code: 'GB', chinese: '英国', english: 'United Kingdom', continent: '欧洲', hasAirports: true, airportCount: 25, internationalAirports: 20, status: 'completed', capital: '伦敦' },
  { code: 'FR', chinese: '法国', english: 'France', continent: '欧洲', hasAirports: true, airportCount: 25, internationalAirports: 19, status: 'completed', capital: '巴黎' },
  { code: 'DE', chinese: '德国', english: 'Germany', continent: '欧洲', hasAirports: true, airportCount: 25, internationalAirports: 20, status: 'completed', capital: '柏林' },
  { code: 'NL', chinese: '荷兰', english: 'Netherlands', continent: '欧洲', hasAirports: true, airportCount: 15, internationalAirports: 4, status: 'completed', capital: '阿姆斯特丹' },
  { code: 'BE', chinese: '比利时', english: 'Belgium', continent: '欧洲', hasAirports: true, airportCount: 6, internationalAirports: 5, status: 'in-progress', capital: '布鲁塞尔' },
  { code: 'LU', chinese: '卢森堡', english: 'Luxembourg', continent: '欧洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '卢森堡市' },
  { code: 'CH', chinese: '瑞士', english: 'Switzerland', continent: '欧洲', hasAirports: true, airportCount: 10, internationalAirports: 5, status: 'completed', capital: '伯尔尼' },
  { code: 'AT', chinese: '奥地利', english: 'Austria', continent: '欧洲', hasAirports: true, airportCount: 8, internationalAirports: 6, status: 'completed', capital: '维也纳' },
  { code: 'IE', chinese: '爱尔兰', english: 'Ireland', continent: '欧洲', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '都柏林' },

  // 南欧
  { code: 'ES', chinese: '西班牙', english: 'Spain', continent: '欧洲', hasAirports: true, airportCount: 25, internationalAirports: 19, status: 'completed', capital: '马德里' },
  { code: 'IT', chinese: '意大利', english: 'Italy', continent: '欧洲', hasAirports: true, airportCount: 25, internationalAirports: 20, status: 'completed', capital: '罗马' },
  { code: 'PT', chinese: '葡萄牙', english: 'Portugal', continent: '欧洲', hasAirports: true, airportCount: 8, internationalAirports: 5, status: 'planned', capital: '里斯本' },
  { code: 'GR', chinese: '希腊', english: 'Greece', continent: '欧洲', hasAirports: true, airportCount: 15, internationalAirports: 10, status: 'planned', capital: '雅典' },
  { code: 'MT', chinese: '马耳他', english: 'Malta', continent: '欧洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '瓦莱塔' },
  { code: 'SM', chinese: '圣马力诺', english: 'San Marino', continent: '欧洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '圣马力诺' },
  { code: 'VA', chinese: '梵蒂冈', english: 'Vatican City', continent: '欧洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '梵蒂冈城' },
  { code: 'AD', chinese: '安道尔', english: 'Andorra', continent: '欧洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '安道尔城' },
  { code: 'MC', chinese: '摩纳哥', english: 'Monaco', continent: '欧洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '摩纳哥' },

  // 北欧
  { code: 'SE', chinese: '瑞典', english: 'Sweden', continent: '欧洲', hasAirports: true, airportCount: 12, internationalAirports: 8, status: 'planned', capital: '斯德哥尔摩' },
  { code: 'NO', chinese: '挪威', english: 'Norway', continent: '欧洲', hasAirports: true, airportCount: 15, internationalAirports: 6, status: 'planned', capital: '奥斯陆' },
  { code: 'DK', chinese: '丹麦', english: 'Denmark', continent: '欧洲', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '哥本哈根' },
  { code: 'FI', chinese: '芬兰', english: 'Finland', continent: '欧洲', hasAirports: true, airportCount: 10, internationalAirports: 5, status: 'planned', capital: '赫尔辛基' },
  { code: 'IS', chinese: '冰岛', english: 'Iceland', continent: '欧洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'planned', capital: '雷克雅未克' },

  // 中欧
  { code: 'PL', chinese: '波兰', english: 'Poland', continent: '欧洲', hasAirports: true, airportCount: 12, internationalAirports: 8, status: 'planned', capital: '华沙' },
  { code: 'CZ', chinese: '捷克', english: 'Czech Republic', continent: '欧洲', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '布拉格' },
  { code: 'SK', chinese: '斯洛伐克', english: 'Slovakia', continent: '欧洲', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '布拉迪斯拉发' },
  { code: 'HU', chinese: '匈牙利', english: 'Hungary', continent: '欧洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '布达佩斯' },
  { code: 'SI', chinese: '斯洛文尼亚', english: 'Slovenia', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '卢布尔雅那' },
  { code: 'HR', chinese: '克罗地亚', english: 'Croatia', continent: '欧洲', hasAirports: true, airportCount: 6, internationalAirports: 4, status: 'planned', capital: '萨格勒布' },
  { code: 'LI', chinese: '列支敦士登', english: 'Liechtenstein', continent: '欧洲', hasAirports: false, airportCount: 0, internationalAirports: 0, status: 'no-airports', capital: '瓦杜兹' },

  // 东欧
  { code: 'RU', chinese: '俄罗斯', english: 'Russia', continent: '欧洲', hasAirports: true, airportCount: 42, internationalAirports: 23, status: 'completed', capital: '莫斯科' },
  { code: 'UA', chinese: '乌克兰', english: 'Ukraine', continent: '欧洲', hasAirports: true, airportCount: 10, internationalAirports: 5, status: 'planned', capital: '基辅' },
  { code: 'BY', chinese: '白俄罗斯', english: 'Belarus', continent: '欧洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '明斯克' },
  { code: 'LT', chinese: '立陶宛', english: 'Lithuania', continent: '欧洲', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '维尔纽斯' },
  { code: 'LV', chinese: '拉脱维亚', english: 'Latvia', continent: '欧洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '里加' },
  { code: 'EE', chinese: '爱沙尼亚', english: 'Estonia', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '塔林' },
  { code: 'MD', chinese: '摩尔多瓦', english: 'Moldova', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '基希讷乌' },

  // 巴尔干半岛
  { code: 'RS', chinese: '塞尔维亚', english: 'Serbia', continent: '欧洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '贝尔格莱德' },
  { code: 'BA', chinese: '波黑', english: 'Bosnia and Herzegovina', continent: '欧洲', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '萨拉热窝' },
  { code: 'ME', chinese: '黑山', english: 'Montenegro', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 2, status: 'planned', capital: '波德戈里察' },
  { code: 'MK', chinese: '北马其顿', english: 'North Macedonia', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '斯科普里' },
  { code: 'AL', chinese: '阿尔巴尼亚', english: 'Albania', continent: '欧洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '地拉那' },
  { code: 'BG', chinese: '保加利亚', english: 'Bulgaria', continent: '欧洲', hasAirports: true, airportCount: 4, internationalAirports: 3, status: 'planned', capital: '索非亚' },
  { code: 'RO', chinese: '罗马尼亚', english: 'Romania', continent: '欧洲', hasAirports: true, airportCount: 8, internationalAirports: 5, status: 'planned', capital: '布加勒斯特' },
  { code: 'XK', chinese: '科索沃', english: 'Kosovo', continent: '欧洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '普里什蒂纳' },

  // ================================================================
  // 🌎 北美洲 (23个国家和地区)
  // ================================================================

  { code: 'US', chinese: '美国', english: 'United States', continent: '北美', hasAirports: true, airportCount: 30, internationalAirports: 26, status: 'completed', capital: '华盛顿' },
  { code: 'CA', chinese: '加拿大', english: 'Canada', continent: '北美', hasAirports: true, airportCount: 25, internationalAirports: 20, status: 'completed', capital: '渥太华' },
  { code: 'MX', chinese: '墨西哥', english: 'Mexico', continent: '北美', hasAirports: true, airportCount: 20, internationalAirports: 19, status: 'completed', capital: '墨西哥城' },

  // 中美洲
  { code: 'GT', chinese: '危地马拉', english: 'Guatemala', continent: '北美', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '危地马拉城' },
  { code: 'BZ', chinese: '伯利兹', english: 'Belize', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '贝尔莫潘' },
  { code: 'SV', chinese: '萨尔瓦多', english: 'El Salvador', continent: '北美', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '圣萨尔瓦多' },
  { code: 'HN', chinese: '洪都拉斯', english: 'Honduras', continent: '北美', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '特古西加尔巴' },
  { code: 'NI', chinese: '尼加拉瓜', english: 'Nicaragua', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '马那瓜' },
  { code: 'CR', chinese: '哥斯达黎加', english: 'Costa Rica', continent: '北美', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '圣何塞' },
  { code: 'PA', chinese: '巴拿马', english: 'Panama', continent: '北美', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '巴拿马城' },

  // 加勒比海
  { code: 'CU', chinese: '古巴', english: 'Cuba', continent: '北美', hasAirports: true, airportCount: 8, internationalAirports: 5, status: 'planned', capital: '哈瓦那' },
  { code: 'DO', chinese: '多米尼加', english: 'Dominican Republic', continent: '北美', hasAirports: true, airportCount: 6, internationalAirports: 4, status: 'planned', capital: '圣多明各' },
  { code: 'HT', chinese: '海地', english: 'Haiti', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '太子港' },
  { code: 'JM', chinese: '牙买加', english: 'Jamaica', continent: '北美', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '金斯敦' },
  { code: 'TT', chinese: '特立尼达和多巴哥', english: 'Trinidad and Tobago', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '西班牙港' },
  { code: 'BB', chinese: '巴巴多斯', english: 'Barbados', continent: '北美', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '布里奇敦' },
  { code: 'BS', chinese: '巴哈马', english: 'Bahamas', continent: '北美', hasAirports: true, airportCount: 5, internationalAirports: 2, status: 'planned', capital: '拿索' },
  { code: 'AG', chinese: '安提瓜和巴布达', english: 'Antigua and Barbuda', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '圣约翰' },
  { code: 'DM', chinese: '多米尼克', english: 'Dominica', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '罗索' },
  { code: 'GD', chinese: '格林纳达', english: 'Grenada', continent: '北美', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '圣乔治' },
  { code: 'KN', chinese: '圣基茨和尼维斯', english: 'Saint Kitts and Nevis', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '巴斯特尔' },
  { code: 'LC', chinese: '圣卢西亚', english: 'Saint Lucia', continent: '北美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '卡斯特里' },
  { code: 'VC', chinese: '圣文森特和格林纳丁斯', english: 'Saint Vincent and the Grenadines', continent: '北美', hasAirports: true, airportCount: 5, internationalAirports: 1, status: 'planned', capital: '金斯敦' },

  // ================================================================
  // 🌎 南美洲 (12个国家和地区)
  // ================================================================

  { code: 'BR', chinese: '巴西', english: 'Brazil', continent: '南美', hasAirports: true, airportCount: 30, internationalAirports: 21, status: 'completed', capital: '巴西利亚' },
  { code: 'AR', chinese: '阿根廷', english: 'Argentina', continent: '南美', hasAirports: true, airportCount: 25, internationalAirports: 11, status: 'completed', capital: '布宜诺斯艾利斯' },
  { code: 'CO', chinese: '哥伦比亚', english: 'Colombia', continent: '南美', hasAirports: true, airportCount: 12, internationalAirports: 6, status: 'planned', capital: '波哥大' },
  { code: 'PE', chinese: '秘鲁', english: 'Peru', continent: '南美', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '利马' },
  { code: 'VE', chinese: '委内瑞拉', english: 'Venezuela', continent: '南美', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '加拉加斯' },
  { code: 'CL', chinese: '智利', english: 'Chile', continent: '南美', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '圣地亚哥' },
  { code: 'EC', chinese: '厄瓜多尔', english: 'Ecuador', continent: '南美', hasAirports: true, airportCount: 5, internationalAirports: 2, status: 'planned', capital: '基多' },
  { code: 'BO', chinese: '玻利维亚', english: 'Bolivia', continent: '南美', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '苏克雷' },
  { code: 'UY', chinese: '乌拉圭', english: 'Uruguay', continent: '南美', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '蒙得维的亚' },
  { code: 'PY', chinese: '巴拉圭', english: 'Paraguay', continent: '南美', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '亚松森' },
  { code: 'GY', chinese: '圭亚那', english: 'Guyana', continent: '南美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '乔治敦' },
  { code: 'SR', chinese: '苏里南', english: 'Suriname', continent: '南美', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '帕拉马里博' },

  // ================================================================
  // 🌍 非洲 (54个国家和地区)
  // ================================================================

  // 北非
  { code: 'EG', chinese: '埃及', english: 'Egypt', continent: '非洲', hasAirports: true, airportCount: 15, internationalAirports: 10, status: 'completed', capital: '开罗' },
  { code: 'LY', chinese: '利比亚', english: 'Libya', continent: '非洲', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '的黎波里' },
  { code: 'TN', chinese: '突尼斯', english: 'Tunisia', continent: '非洲', hasAirports: true, airportCount: 5, internationalAirports: 3, status: 'planned', capital: '突尼斯' },
  { code: 'DZ', chinese: '阿尔及利亚', english: 'Algeria', continent: '非洲', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '阿尔及尔' },
  { code: 'MA', chinese: '摩洛哥', english: 'Morocco', continent: '非洲', hasAirports: true, airportCount: 8, internationalAirports: 5, status: 'planned', capital: '拉巴特' },
  { code: 'SD', chinese: '苏丹', english: 'Sudan', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '喀土穆' },

  // 西非
  { code: 'NG', chinese: '尼日利亚', english: 'Nigeria', continent: '非洲', hasAirports: true, airportCount: 12, internationalAirports: 6, status: 'planned', capital: '阿布贾' },
  { code: 'GH', chinese: '加纳', english: 'Ghana', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '阿克拉' },
  { code: 'SN', chinese: '塞内加尔', english: 'Senegal', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '达喀尔' },
  { code: 'CI', chinese: '科特迪瓦', english: 'Ivory Coast', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '亚穆苏克罗' },
  { code: 'ML', chinese: '马里', english: 'Mali', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '巴马科' },
  { code: 'BF', chinese: '布基纳法索', english: 'Burkina Faso', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '瓦加杜古' },
  { code: 'NE', chinese: '尼日尔', english: 'Niger', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '尼亚美' },
  { code: 'GN', chinese: '几内亚', english: 'Guinea', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '科纳克里' },
  { code: 'SL', chinese: '塞拉利昂', english: 'Sierra Leone', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '弗里敦' },
  { code: 'LR', chinese: '利比里亚', english: 'Liberia', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '蒙罗维亚' },
  { code: 'TG', chinese: '多哥', english: 'Togo', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '洛美' },
  { code: 'BJ', chinese: '贝宁', english: 'Benin', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '波多诺伏' },
  { code: 'GW', chinese: '几内亚比绍', english: 'Guinea-Bissau', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '比绍' },
  { code: 'GM', chinese: '冈比亚', english: 'Gambia', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '班珠尔' },
  { code: 'CV', chinese: '佛得角', english: 'Cape Verde', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '普拉亚' },

  // 中非
  { code: 'CD', chinese: '刚果民主共和国', english: 'Democratic Republic of the Congo', continent: '非洲', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '金沙萨' },
  { code: 'CG', chinese: '刚果共和国', english: 'Republic of the Congo', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '布拉柴维尔' },
  { code: 'CM', chinese: '喀麦隆', english: 'Cameroon', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '雅温得' },
  { code: 'CF', chinese: '中非共和国', english: 'Central African Republic', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '班吉' },
  { code: 'TD', chinese: '乍得', english: 'Chad', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '恩贾梅纳' },
  { code: 'GA', chinese: '加蓬', english: 'Gabon', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '利伯维尔' },
  { code: 'GQ', chinese: '赤道几内亚', english: 'Equatorial Guinea', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '马拉博' },
  { code: 'ST', chinese: '圣多美和普林西比', english: 'São Tomé and Príncipe', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '圣多美' },

  // 东非
  { code: 'ET', chinese: '埃塞俄比亚', english: 'Ethiopia', continent: '非洲', hasAirports: true, airportCount: 8, internationalAirports: 4, status: 'planned', capital: '亚的斯亚贝巴' },
  { code: 'KE', chinese: '肯尼亚', english: 'Kenya', continent: '非洲', hasAirports: true, airportCount: 6, internationalAirports: 3, status: 'planned', capital: '内罗毕' },
  { code: 'UG', chinese: '乌干达', english: 'Uganda', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '坎帕拉' },
  { code: 'TZ', chinese: '坦桑尼亚', english: 'Tanzania', continent: '非洲', hasAirports: true, airportCount: 5, internationalAirports: 3, status: 'planned', capital: '多多马' },
  { code: 'RW', chinese: '卢旺达', english: 'Rwanda', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '基加利' },
  { code: 'BI', chinese: '布隆迪', english: 'Burundi', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '布琼布拉' },
  { code: 'SO', chinese: '索马里', english: 'Somalia', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '摩加迪沙' },
  { code: 'DJ', chinese: '吉布提', english: 'Djibouti', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '吉布提市' },
  { code: 'ER', chinese: '厄立特里亚', english: 'Eritrea', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '阿斯马拉' },
  { code: 'SS', chinese: '南苏丹', english: 'South Sudan', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '朱巴' },

  // 南部非洲
  { code: 'ZA', chinese: '南非', english: 'South Africa', continent: '非洲', hasAirports: true, airportCount: 20, internationalAirports: 6, status: 'completed', capital: '开普敦' },
  { code: 'ZW', chinese: '津巴布韦', english: 'Zimbabwe', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '哈拉雷' },
  { code: 'ZM', chinese: '赞比亚', english: 'Zambia', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 2, status: 'planned', capital: '卢萨卡' },
  { code: 'MW', chinese: '马拉维', english: 'Malawi', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '利隆圭' },
  { code: 'MZ', chinese: '莫桑比克', english: 'Mozambique', continent: '非洲', hasAirports: true, airportCount: 4, internationalAirports: 2, status: 'planned', capital: '马普托' },
  { code: 'BW', chinese: '博茨瓦纳', english: 'Botswana', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '哈博罗内' },
  { code: 'NA', chinese: '纳米比亚', english: 'Namibia', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '温得和克' },
  { code: 'SZ', chinese: '斯威士兰', english: 'Eswatini', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '姆巴巴纳' },
  { code: 'LS', chinese: '莱索托', english: 'Lesotho', continent: '非洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '马塞卢' },

  // 印度洋岛国
  { code: 'MG', chinese: '马达加斯加', english: 'Madagascar', continent: '非洲', hasAirports: true, airportCount: 5, internationalAirports: 2, status: 'planned', capital: '安塔那那利佛' },
  { code: 'MU', chinese: '毛里求斯', english: 'Mauritius', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '路易港' },
  { code: 'SC', chinese: '塞舌尔', english: 'Seychelles', continent: '非洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '维多利亚' },
  { code: 'KM', chinese: '科摩罗', english: 'Comoros', continent: '非洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '莫罗尼' },

  // ================================================================
  // 🌏 大洋洲 (16个国家和地区)
  // ================================================================

  { code: 'AU', chinese: '澳大利亚', english: 'Australia', continent: '大洋洲', hasAirports: true, airportCount: 25, internationalAirports: 10, status: 'completed', capital: '堪培拉' },
  { code: 'NZ', chinese: '新西兰', english: 'New Zealand', continent: '大洋洲', hasAirports: true, airportCount: 12, internationalAirports: 4, status: 'completed', capital: '惠灵顿' },
  { code: 'PG', chinese: '巴布亚新几内亚', english: 'Papua New Guinea', continent: '大洋洲', hasAirports: true, airportCount: 8, internationalAirports: 3, status: 'planned', capital: '莫尔兹比港' },
  { code: 'FJ', chinese: '斐济', english: 'Fiji', continent: '大洋洲', hasAirports: true, airportCount: 5, internationalAirports: 1, status: 'planned', capital: '苏瓦' },
  { code: 'NC', chinese: '新喀里多尼亚', english: 'New Caledonia', continent: '大洋洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '努美阿' },
  { code: 'PF', chinese: '法属波利尼西亚', english: 'French Polynesia', continent: '大洋洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'planned', capital: '帕皮提' },
  { code: 'SB', chinese: '所罗门群岛', english: 'Solomon Islands', continent: '大洋洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '霍尼亚拉' },
  { code: 'VU', chinese: '瓦努阿图', english: 'Vanuatu', continent: '大洋洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '维拉港' },
  { code: 'WS', chinese: '萨摩亚', english: 'Samoa', continent: '大洋洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '阿皮亚' },
  { code: 'TO', chinese: '汤加', english: 'Tonga', continent: '大洋洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '努库阿洛法' },
  { code: 'KI', chinese: '基里巴斯', english: 'Kiribati', continent: '大洋洲', hasAirports: true, airportCount: 3, internationalAirports: 1, status: 'planned', capital: '塔拉瓦' },
  { code: 'TV', chinese: '图瓦卢', english: 'Tuvalu', continent: '大洋洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '富纳富提' },
  { code: 'NR', chinese: '瑙鲁', english: 'Nauru', continent: '大洋洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '亚伦' },
  { code: 'PW', chinese: '帕劳', english: 'Palau', continent: '大洋洲', hasAirports: true, airportCount: 1, internationalAirports: 1, status: 'planned', capital: '恩吉鲁穆德' },
  { code: 'FM', chinese: '密克罗尼西亚', english: 'Micronesia', continent: '大洋洲', hasAirports: true, airportCount: 4, internationalAirports: 1, status: 'planned', capital: '帕利基尔' },
  { code: 'MH', chinese: '马绍尔群岛', english: 'Marshall Islands', continent: '大洋洲', hasAirports: true, airportCount: 2, internationalAirports: 1, status: 'planned', capital: '马朱罗' }

];

// ================================================================
// 🚀 全球统计信息
// ================================================================

export const globalStats = {
  totalCountries: globalCountriesDatabase.length,
  totalAirports: globalCountriesDatabase.reduce((sum, country) => sum + country.airportCount, 0),
  totalInternationalAirports: globalCountriesDatabase.reduce((sum, country) => sum + country.internationalAirports, 0),
  completedCountries: globalCountriesDatabase.filter(c => c.status === 'completed').length,
  countriesWithoutAirports: globalCountriesDatabase.filter(c => !c.hasAirports).length,
  continentStats: {
    '亚洲': globalCountriesDatabase.filter(c => c.continent === '亚洲').length,
    '欧洲': globalCountriesDatabase.filter(c => c.continent === '欧洲').length,
    '北美': globalCountriesDatabase.filter(c => c.continent === '北美').length,
    '南美': globalCountriesDatabase.filter(c => c.continent === '南美').length,
    '非洲': globalCountriesDatabase.filter(c => c.continent === '非洲').length,
    '大洋洲': globalCountriesDatabase.filter(c => c.continent === '大洋洲').length
  }
};

// ================================================================
// 🎯 辅助函数
// ================================================================

export function getCountriesByContinent(continent: string): CountryInfo[] {
  return globalCountriesDatabase.filter(country => country.continent === continent);
}

export function getCountriesByStatus(status: string): CountryInfo[] {
  return globalCountriesDatabase.filter(country => country.status === status);
}

export function getCountryByCode(code: string): CountryInfo | undefined {
  return globalCountriesDatabase.find(country => country.code === code);
}

export function searchCountries(query: string): CountryInfo[] {
  const searchTerm = query.toLowerCase();

  const results = globalCountriesDatabase.filter(country => {
    const chineseMatch = country.chinese.toLowerCase().includes(searchTerm);
    const englishMatch = country.english.toLowerCase().includes(searchTerm);
    const codeMatch = country.code.toLowerCase().includes(searchTerm);
    const capitalMatch = country.capital.toLowerCase().includes(searchTerm);

    // 如果有匹配但应该被排除，则跳过 (防止印度/印尼混淆)
    if ((chineseMatch || englishMatch) && shouldExcludeCountry(query.trim(), country.chinese)) {
      return false;
    }

    return chineseMatch || englishMatch || codeMatch || capitalMatch;
  });

  // 按匹配优先级排序：精确匹配 > 开头匹配 > 包含匹配
  return results.sort((a, b) => {
    const aChineseLower = a.chinese.toLowerCase();
    const bChineseLower = b.chinese.toLowerCase();
    const aEnglishLower = a.english.toLowerCase();
    const bEnglishLower = b.english.toLowerCase();

    // 精确匹配优先级最高
    const aExactMatch = aChineseLower === searchTerm || aEnglishLower === searchTerm;
    const bExactMatch = bChineseLower === searchTerm || bEnglishLower === searchTerm;

    if (aExactMatch && !bExactMatch) return -1;
    if (!aExactMatch && bExactMatch) return 1;

    // 开头匹配优先级次之
    const aStartsMatch = aChineseLower.startsWith(searchTerm) || aEnglishLower.startsWith(searchTerm);
    const bStartsMatch = bChineseLower.startsWith(searchTerm) || bEnglishLower.startsWith(searchTerm);

    if (aStartsMatch && !bStartsMatch) return -1;
    if (!aStartsMatch && bStartsMatch) return 1;

    // 最后按字母顺序
    return a.chinese.localeCompare(b.chinese);
  });
}
