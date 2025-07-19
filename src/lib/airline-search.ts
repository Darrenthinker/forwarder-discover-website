// 航空公司搜索库
export interface Airline {
  code: string;         // 二字代码 (JL, NH)
  prefix: string;       // 提单号前缀 (131, 205)
  icao?: string;        // ICAO代码 (JAL, ANA)
  name: {
    chinese: string;    // 中文名称
    english: string;    // 英文名称
  };
  country: string;      // 国家名称
  countryCode: string;  // 国家代码
  type: 'FSC' | 'LCC' | 'Regional' | 'Cargo' | 'Charter'; // 航空公司类型
  alliance?: 'Star Alliance' | 'Oneworld' | 'SkyTeam';    // 航空联盟
  hub?: string[];       // 主要枢纽机场
  fleetSize?: number;   // 机队规模
  active: boolean;      // 是否仍在运营
  isIata?: boolean;     // 是否为IATA成员
}

// 🌍 导入智能国家搜索功能
import { searchCompleteCountries } from './complete-countries';
import { COUNTRY_ALIASES } from './country-aliases';

// 航空公司数据库 - 按地区分类，按机队规模排序
const AIRLINES: Airline[] = [
  // 🇯🇵 日本航空公司 (按机队规模排序) - 已更新IATA官方数据
  {
    code: 'NH',
    prefix: '205',
    icao: 'ANA',
    name: { chinese: '全日空', english: 'All Nippon Airways' },
    country: '日本',
    countryCode: 'JP',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['NRT', 'HND'],
    fleetSize: 272,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'JL',
    prefix: '131',
    icao: 'JAL',
    name: { chinese: '日本航空', english: 'Japan Airlines' },
    country: '日本',
    countryCode: 'JP',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['NRT', 'HND'],
    fleetSize: 236,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'BC',
    prefix: '440',
    icao: 'SKY',
    name: { chinese: '天马航空', english: 'Skymark Airlines' },
    country: '日本',
    countryCode: 'JP',
    type: 'LCC',
    hub: ['HND'],
    fleetSize: 30,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'MM',
    prefix: '434',
    icao: 'APJ',
    name: { chinese: '乐桃航空', english: 'Peach Aviation' },
    country: '日本',
    countryCode: 'JP',
    type: 'LCC',
    hub: ['KIX', 'NRT'],
    fleetSize: 27,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'NU',
    prefix: '353',
    icao: 'JTA',
    name: { chinese: '日本越洋航空', english: 'Japan Transocean Air' },
    country: '日本',
    countryCode: 'JP',
    type: 'Regional',
    hub: ['OKA'],
    fleetSize: 18,
    active: true,
    isIata: true  // ✅ IATA成员 - 修正前缀908→353
  },
  {
    code: 'KZ',
    prefix: '933',
    icao: 'NCA',
    name: { chinese: '日本货运航空', english: 'Nippon Cargo Airlines' },
    country: '日本',
    countryCode: 'JP',
    type: 'Cargo',
    hub: ['NRT', 'KIX'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员 - 新增货运航司
  },
  {
    code: 'JW',
    prefix: '824',
    icao: 'VNL',
    name: { chinese: '香草航空', english: 'Vanilla Air' },
    country: '日本',
    countryCode: 'JP',
    type: 'LCC',
    hub: ['NRT'],
    fleetSize: 0,
    active: false,
    isIata: false  // ❌ 非IATA成员，已停运
  },

  // 🇨🇳 中国大陆航空公司 (按机队规模排序)
  {
    code: 'CZ',
    prefix: '784',
    icao: 'CSN',
    name: { chinese: '中国南方航空', english: 'China Southern Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['CAN', 'PKX'],
    fleetSize: 880,
    active: true,
    isIata: true
  },
  {
    code: 'MU',
    prefix: '781',
    icao: 'CES',
    name: { chinese: '中国东方航空', english: 'China Eastern Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['PVG', 'KMG'],
    fleetSize: 720,
    active: true,
    isIata: true
  },
  {
    code: 'CA',
    prefix: '999',
    icao: 'CCA',
    name: { chinese: '中国国际航空', english: 'Air China' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['PEK', 'PKX'],
    fleetSize: 460,
    active: true,
    isIata: true
  },
  {
    code: 'HU',
    prefix: '880',
    icao: 'CHH',
    name: { chinese: '海南航空', english: 'Hainan Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['HAK', 'PEK'],
    fleetSize: 350,
    active: true,
    isIata: true
  },
  {
    code: 'MF',
    prefix: '731',
    icao: 'CXA',
    name: { chinese: '厦门航空', english: 'Xiamen Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['XMN', 'PEK'],
    fleetSize: 210,
    active: true,
    isIata: true
  },
  {
    code: '3U',
    prefix: '876',
    icao: 'CSC',
    name: { chinese: '四川航空', english: 'Sichuan Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['CTU', 'CKG'],
    fleetSize: 180,
    active: true,
    isIata: true
  },
  {
    code: 'SC',
    prefix: '324',
    icao: 'CDG',
    name: { chinese: '山东航空', english: 'Shandong Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['JNA', 'TSN'],
    fleetSize: 120,
    active: true,
    isIata: true
  },
  {
    code: '9C',
    prefix: '089',
    icao: 'CQH',
    name: { chinese: '春秋航空', english: 'Spring Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['PVG'],
    fleetSize: 110,
    active: true,
    isIata: false  // ❌ 春秋航空不是IATA成员
  },
  {
    code: 'KN',
    prefix: '822',
    icao: 'CUA',
    name: { chinese: '中国联合航空', english: 'China United Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['PKX'],
    fleetSize: 85,
    active: true,
    isIata: true
  },
  {
    code: 'EU',
    prefix: '889',
    icao: 'UEA',
    name: { chinese: '成都航空', english: 'Chengdu Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Regional',
    hub: ['CTU'],
    fleetSize: 65,
    active: true,
    isIata: false  // ❌ 成都航空不是IATA成员
  },
  {
    code: 'O3',
    prefix: '921',
    icao: 'CSS',
    name: { chinese: '顺丰航空', english: 'SF Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['SZX'],
    fleetSize: 78,
    active: true,
    isIata: true
  },
  {
    code: 'JG',
    prefix: '619',
    icao: 'JDL',
    name: { chinese: '京东航空', english: 'JD Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['NKG', 'SHA'],
    fleetSize: 12,
    active: true,
    isIata: true
  },

  // 🇭🇰 中国香港航空公司 (按机队规模排序)
  {
    code: 'CX',
    prefix: '160',
    icao: 'CPA',
    name: { chinese: '国泰航空', english: 'Cathay Pacific' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['HKG'],
    fleetSize: 200,
    active: true,
    isIata: true
  },
  {
    code: 'HX',
    prefix: '851',
    icao: 'CRK',
    name: { chinese: '香港航空', english: 'Hong Kong Airlines' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'FSC',
    hub: ['HKG'],
    fleetSize: 38,
    active: true,
    isIata: true
  },
  {
    code: 'UO',
    prefix: '128',
    icao: 'HKE',
    name: { chinese: '香港快运航空', english: 'Hong Kong Express Airways' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'LCC',
    hub: ['HKG'],
    fleetSize: 28,
    active: true,
    isIata: true
  },
  {
    code: 'LD',
    prefix: '288',
    icao: 'AHK',
    name: { chinese: '香港华民航空', english: 'Air Hong Kong' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'Cargo',
    hub: ['HKG'],
    fleetSize: 14,
    active: true,
    isIata: true
  },
  {
    code: 'RH',
    prefix: '828',
    icao: 'HKC',
    name: { chinese: '香港货运航空', english: 'Hong Kong Air Cargo' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'Cargo',
    hub: ['HKG'],
    fleetSize: 8,
    active: true,
    isIata: true
  },
  {
    code: 'HB',
    prefix: '283',
    icao: 'HGB',
    name: { chinese: '大湾区航空', english: 'Greater Bay Airlines' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'FSC',
    hub: ['HKG'],
    fleetSize: 5,
    active: true,
    isIata: true
  },
  {
    code: 'KA',
    prefix: '043',
    icao: 'CRK',
    name: { chinese: '国泰港龙航空', english: 'Cathay Dragon' },
    country: '中国香港',
    countryCode: 'HK',
    type: 'FSC',
    hub: ['HKG'],
    fleetSize: 48,
    active: true,
    isIata: false
  },

  // 🇲🇴 中国澳门航空公司
  {
    code: 'NX',
    prefix: '675',
    icao: 'AMU',
    name: { chinese: '澳门航空', english: 'Air Macau' },
    country: '中国澳门',
    countryCode: 'MO',
    type: 'FSC',
    hub: ['MFM'],
    fleetSize: 21,
    active: true,
    isIata: true
  },

  // 🇹🇼 中国台湾航空公司 (按机队规模排序)
  {
    code: 'CI',
    prefix: '297',
    icao: 'CAL',
    name: { chinese: '中华航空', english: 'China Airlines' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['TPE'],
    fleetSize: 104,
    active: true,
    isIata: true
  },
  {
    code: 'BR',
    prefix: '695',
    icao: 'EVA',
    name: { chinese: '长荣航空', english: 'EVA Air' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['TPE'],
    fleetSize: 82,
    active: true,
    isIata: true
  },
  {
    code: 'JX',
    prefix: '189',
    icao: 'SJX',
    name: { chinese: '星宇航空', english: 'STARLUX Airlines' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'FSC',
    hub: ['TPE'],
    fleetSize: 28,
    active: true,
    isIata: true
  },
  {
    code: 'B7',
    prefix: '525',
    icao: 'UIA',
    name: { chinese: '立荣航空', english: 'UNI AIR' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'Regional',
    hub: ['TPE', 'KHH'],
    fleetSize: 36,
    active: true,
    isIata: true
  },
  {
    code: 'AE',
    prefix: '803',
    icao: 'MDA',
    name: { chinese: '华信航空', english: 'Mandarin Airlines' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'Regional',
    hub: ['TSA', 'TPE'],
    fleetSize: 12,
    active: true,
    isIata: true
  },
  {
    code: 'IT',
    prefix: '538',
    icao: 'TGW',
    name: { chinese: '台湾虎航', english: 'Tigerair Taiwan' },
    country: '中国台湾',
    countryCode: 'TW',
    type: 'LCC',
    hub: ['TPE'],
    fleetSize: 21,
    active: true,
    isIata: false
  },

  // 🇰🇷 韩国航空公司 (按机队规模排序)
  {
    code: 'KE',
    prefix: '180',
    icao: 'KAL',
    name: { chinese: '大韩航空', english: 'Korean Air' },
    country: '韩国',
    countryCode: 'KR',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['ICN'],
    fleetSize: 169,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'YP',
    prefix: '350',
    icao: 'APZ',
    name: { chinese: 'Air Premia', english: 'Air Premia' },
    country: '韩国',
    countryCode: 'KR',
    type: 'FSC',
    hub: ['ICN'],
    fleetSize: 9,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'OZ',
    prefix: '988',
    icao: 'AAR',
    name: { chinese: '韩亚航空', english: 'Asiana Airlines' },
    country: '韩国',
    countryCode: 'KR',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['ICN'],
    fleetSize: 93,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '7C',
    prefix: '806',
    icao: 'JJA',
    name: { chinese: '济州航空', english: 'Jeju Air' },
    country: '韩国',
    countryCode: 'KR',
    type: 'LCC',
    hub: ['ICN', 'CJU'],
    fleetSize: 45,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'LJ',
    prefix: '718',
    icao: 'JNA',
    name: { chinese: '真航空', english: 'Jin Air' },
    country: '韩国',
    countryCode: 'KR',
    type: 'LCC',
    hub: ['ICN'],
    fleetSize: 42,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'RS',
    prefix: '266',
    icao: 'ABL',
    name: { chinese: '首尔航空', english: 'Air Seoul' },
    country: '韩国',
    countryCode: 'KR',
    type: 'LCC',
    hub: ['ICN'],
    fleetSize: 14,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇮🇳 印度航空公司 (按机队规模排序)
  {
    code: '6E',
    prefix: '312',
    icao: 'IGO',
    name: { chinese: '靛蓝航空', english: 'IndiGo' },
    country: '印度',
    countryCode: 'IN',
    type: 'LCC',
    hub: ['DEL', 'BOM'],
    fleetSize: 285,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'AI',
    prefix: '098',
    icao: 'AIC',
    name: { chinese: '印度航空', english: 'Air India' },
    country: '印度',
    countryCode: 'IN',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['DEL', 'BOM'],
    fleetSize: 138,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'SG',
    prefix: '775',
    icao: 'SEJ',
    name: { chinese: '香料航空', english: 'SpiceJet' },
    country: '印度',
    countryCode: 'IN',
    type: 'LCC',
    hub: ['DEL', 'BOM'],
    fleetSize: 116,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'G8',
    prefix: '807',
    icao: 'GOW',
    name: { chinese: 'Go航空', english: 'Go Air' },
    country: '印度',
    countryCode: 'IN',
    type: 'LCC',
    hub: ['BOM', 'DEL'],
    fleetSize: 56,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'UK',
    prefix: '996',
    icao: 'VTI',
    name: { chinese: '维斯塔拉航空', english: 'Vistara' },
    country: '印度',
    countryCode: 'IN',
    type: 'FSC',
    hub: ['DEL'],
    fleetSize: 53,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'IX',
    prefix: '194',
    icao: 'AXB',
    name: { chinese: '印度快运航空', english: 'Air India Express' },
    country: '印度',
    countryCode: 'IN',
    type: 'LCC',
    hub: ['COK', 'BOM'],
    fleetSize: 25,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇹🇭 泰国航空公司 (按机队规模排序)
  {
    code: 'TG',
    prefix: '217',
    icao: 'THA',
    name: { chinese: '泰国国际航空', english: 'Thai Airways International' },
    country: '泰国',
    countryCode: 'TH',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['BKK'],
    fleetSize: 103,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'FD',
    prefix: '693',
    icao: 'AIQ',
    name: { chinese: '泰国亚洲航空', english: 'Thai AirAsia' },
    country: '泰国',
    countryCode: 'TH',
    type: 'LCC',
    hub: ['DMK', 'BKK'],
    fleetSize: 66,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'SL',
    prefix: '310',
    icao: 'TLM',
    name: { chinese: '泰国狮子航空', english: 'Thai Lion Air' },
    country: '泰国',
    countryCode: 'TH',
    type: 'LCC',
    hub: ['DMK'],
    fleetSize: 48,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'PG',
    prefix: '829',
    icao: 'BKP',
    name: { chinese: '曼谷航空', english: 'Bangkok Airways' },
    country: '泰国',
    countryCode: 'TH',
    type: 'FSC',
    hub: ['BKK', 'USM'],
    fleetSize: 43,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'DD',
    prefix: '596',
    icao: 'NOK',
    name: { chinese: '泰国鸟航', english: 'Nok Air' },
    country: '泰国',
    countryCode: 'TH',
    type: 'LCC',
    hub: ['DMK'],
    fleetSize: 28,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇲🇾 马来西亚航空公司 (按机队规模排序)
  {
    code: 'AK',
    prefix: '975',
    icao: 'AXM',
    name: { chinese: '亚洲航空', english: 'AirAsia' },
    country: '马来西亚',
    countryCode: 'MY',
    type: 'LCC',
    hub: ['KUL'],
    fleetSize: 174,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'MH',
    prefix: '232',
    icao: 'MAS',
    name: { chinese: '马来西亚航空', english: 'Malaysia Airlines' },
    country: '马来西亚',
    countryCode: 'MY',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['KUL'],
    fleetSize: 88,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'OD',
    prefix: '816',
    icao: 'MXD',
    name: { chinese: '马来西亚巴泽航空', english: 'Batik Air Malaysia' },
    country: '马来西亚',
    countryCode: 'MY',
    type: 'FSC',
    hub: ['KUL'],
    fleetSize: 55,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'D7',
    prefix: '955',
    icao: 'XAX',
    name: { chinese: '亚洲航空X', english: 'AirAsia X' },
    country: '马来西亚',
    countryCode: 'MY',
    type: 'LCC',
    hub: ['KUL'],
    fleetSize: 32,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'FY',
    prefix: '320',
    icao: 'FFM',
    name: { chinese: '飞萤航空', english: 'Firefly' },
    country: '马来西亚',
    countryCode: 'MY',
    type: 'Regional',
    hub: ['KUL', 'JHB'],
    fleetSize: 21,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇮🇩 印尼航空公司 (按机队规模排序) - 修正数据
  {
    code: 'GA',
    prefix: '126',
    icao: 'GIA',
    name: { chinese: '印尼鹰航', english: 'Garuda Indonesia' },
    country: '印尼',
    countryCode: 'ID',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['CGK'],
    fleetSize: 142,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'JT',
    prefix: '990',
    icao: 'LNI',
    name: { chinese: '狮子航空', english: 'Lion Air' },
    country: '印尼',
    countryCode: 'ID',
    type: 'LCC',
    hub: ['CGK'],
    fleetSize: 115,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'QG',
    prefix: '614',
    icao: 'CTV',
    name: { chinese: '花雕航空', english: 'Citilink' },
    country: '印尼',
    countryCode: 'ID',
    type: 'LCC',
    hub: ['CGK'],
    fleetSize: 71,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'ID',
    prefix: '938',
    icao: 'BTK',
    name: { chinese: '巴泽航空', english: 'Batik Air' },
    country: '印尼',
    countryCode: 'ID',
    type: 'FSC',
    hub: ['CGK'],
    fleetSize: 68,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'IN',
    prefix: '106',
    icao: 'NAM',
    name: { chinese: '南木航空', english: 'NAM Air' },
    country: '印尼',
    countryCode: 'ID',
    type: 'LCC',
    hub: ['CGK'],
    fleetSize: 16,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },



  // 🇮🇩 印尼航空公司补充 - 根据IATA官网核实
  {
    code: 'SJ',
    prefix: '570',
    icao: 'SJY',
    name: { chinese: '三佛齐航空', english: 'Sriwijaya Air' },
    country: '印尼',
    countryCode: 'ID',
    type: 'LCC',
    hub: ['CGK'],
    fleetSize: 21,
    active: true
  },
 
  {
    code: 'IW',
    prefix: '895',  // 修正：Wings Air的正确前缀
    icao: 'WON',
    name: { chinese: '连城航空', english: 'Wings Air' },
    country: '印尼',
    countryCode: 'ID',
    type: 'LCC',
    hub: ['CGK'],
    fleetSize: 75,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇦🇪 阿联酋航空公司 (按机队规模排序)
  {
    code: 'EK',
    prefix: '176',
    icao: 'UAE',
    name: { chinese: '阿联酋航空', english: 'Emirates' },
    country: '阿联酋',
    countryCode: 'AE',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['DXB'],
    fleetSize: 271,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'EY',
    prefix: '607',
    icao: 'ETD',
    name: { chinese: '阿提哈德航空', english: 'Etihad Airways' },
    country: '阿联酋',
    countryCode: 'AE',
    type: 'FSC',
    hub: ['AUH'],
    fleetSize: 96,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'FZ',
    prefix: '141',
    icao: 'FDB',
    name: { chinese: '迪拜航空', english: 'flydubai' },
    country: '阿联酋',
    countryCode: 'AE',
    type: 'LCC',
    hub: ['DXB'],
    fleetSize: 76,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'G9',
    prefix: '514',
    icao: 'ABY',
    name: { chinese: '阿拉伯航空', english: 'Air Arabia' },
    country: '阿联酋',
    countryCode: 'AE',
    type: 'LCC',
    hub: ['SHJ'],
    fleetSize: 58,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇻🇳 越南航空公司 (按机队规模排序)
  {
    code: 'VJ',
    prefix: '978',
    icao: 'VJC',
    name: { chinese: '越捷航空', english: 'Vietjet' },
    country: '越南',
    countryCode: 'VN',
    type: 'LCC',
    hub: ['SGN', 'HAN'],
    fleetSize: 102,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'VN',
    prefix: '738',
    icao: 'HVN',
    name: { chinese: '越南航空', english: 'Vietnam Airlines' },
    country: '越南',
    countryCode: 'VN',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['SGN', 'HAN'],
    fleetSize: 98,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'QH',
    prefix: '926',
    icao: 'BAV',
    name: { chinese: '竹子航空', english: 'Bamboo Airways' },
    country: '越南',
    countryCode: 'VN',
    type: 'FSC',
    hub: ['SGN', 'HAN'],
    fleetSize: 28,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'BL',
    prefix: '584',
    icao: 'JEC',
    name: { chinese: '捷星太平洋航空', english: 'Jetstar Pacific' },
    country: '越南',
    countryCode: 'VN',
    type: 'LCC',
    hub: ['SGN', 'HAN'],
    fleetSize: 23,
    active: true
  },

  // 🇨🇳 中国货运航空公司补充
  {
    code: 'CK',
    prefix: '112',
    icao: 'CKK',
    name: { chinese: '中货航', english: 'China Cargo Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['PVG'],
    fleetSize: 18,
    active: true,
    isIata: true
  },
  {
    code: 'Y8',
    prefix: '871',
    icao: 'YZR',
    name: { chinese: '金鹏航空', english: 'Suparna Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['NKG'],
    fleetSize: 22,
    active: true,
    isIata: true
  },

  // 🇨🇳 中国大陆新增IATA航司
  {
    code: 'FM',
    prefix: '774',
    icao: 'CSH',
    name: { chinese: '上海航空', english: 'Shanghai Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['PVG', 'SHA'],
    fleetSize: 45,
    active: true,
    isIata: true
  },
  {
    code: 'ZH',
    prefix: '479',
    icao: 'CSZ',
    name: { chinese: '深圳航空', english: 'Shenzhen Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['SZX'],
    fleetSize: 220,
    active: true,
    isIata: true
  },
  {
    code: 'HO',
    prefix: '018',
    icao: 'DKH',
    name: { chinese: '吉祥航空', english: 'Juneyao Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['PVG'],
    fleetSize: 95,
    active: true,
    isIata: true
  },
  {
    code: '8L',
    prefix: '859',
    icao: 'LKE',
    name: { chinese: '祥鹏航空', english: 'Lucky Air' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['KMG'],
    fleetSize: 48,
    active: true,
    isIata: true
  },
  {
    code: 'GS',
    prefix: '826',
    icao: 'GCR',
    name: { chinese: '天津航空', english: 'Tianjin Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['TSN'],
    fleetSize: 42,
    active: true,
    isIata: true
  },
  {
    code: 'PN',
    prefix: '847',
    icao: 'CHB',
    name: { chinese: '西部航空', english: 'West Air' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['CKG'],
    fleetSize: 35,
    active: true,
    isIata: true
  },
  {
    code: 'KY',
    prefix: '833',
    icao: 'KNA',
    name: { chinese: '昆明航空', english: 'Kunming Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['KMG'],
    fleetSize: 32,
    active: true,
    isIata: true
  },
  {
    code: 'TV',
    prefix: '088',
    icao: 'TBA',
    name: { chinese: '西藏航空', english: 'Tibet Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['LXA'],
    fleetSize: 28,
    active: true,
    isIata: true
  },
  {
    code: 'FU',
    prefix: '666',
    icao: 'FZA',
    name: { chinese: '福州航空', english: 'Fuzhou Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['FOC'],
    fleetSize: 26,
    active: true,
    isIata: true
  },
  {
    code: 'JD',
    prefix: '898',
    icao: 'CBJ',
    name: { chinese: '首都航空', english: 'Capital Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['PEK', 'HGH'],
    fleetSize: 24,
    active: true,
    isIata: true
  },
  {
    code: 'QW',
    prefix: '912',
    icao: 'QDA',
    name: { chinese: '青岛航空', english: 'Qingdao Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['TAO'],
    fleetSize: 22,
    active: true,
    isIata: true
  },
  {
    code: 'GJ',
    prefix: '891',
    icao: 'CDC',
    name: { chinese: '龙江航空', english: 'Loong Air' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['HRB'],
    fleetSize: 18,
    active: true,
    isIata: true
  },
  {
    code: 'NS',
    prefix: '836',
    icao: 'HBH',
    name: { chinese: '河北航空', english: 'Hebei Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['SJW'],
    fleetSize: 16,
    active: true,
    isIata: true
  },
  {
    code: '9H',
    prefix: '856',
    icao: 'CGN',
    name: { chinese: '长安航空', english: 'Air Changan' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['XIY'],
    fleetSize: 14,
    active: true,
    isIata: true
  },
  {
    code: 'DR',
    prefix: '299',
    icao: 'RLH',
    name: { chinese: '瑞丽航空', english: 'Ruili Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'LCC',
    hub: ['KMG'],
    fleetSize: 12,
    active: true,
    isIata: true
  },
  {
    code: 'G5',
    prefix: '987',
    icao: 'HXA',
    name: { chinese: '中华快递航空', english: 'China Express Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'FSC',
    hub: ['CKG'],
    fleetSize: 10,
    active: true,
    isIata: true
  },
  {
    code: 'CF',
    prefix: '804',
    icao: 'CYZ',
    name: { chinese: '中国邮政航空', english: 'China Postal Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['NKG'],
    fleetSize: 8,
    active: true,
    isIata: true
  },

  // 🇸🇦 沙特阿拉伯航空公司 (按机队规模排序)
  {
    code: 'SV',
    prefix: '065',
    icao: 'SVA',
    name: { chinese: '沙特阿拉伯航空', english: 'Saudi Arabian Airlines' },
    country: '沙特阿拉伯',
    countryCode: 'SA',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['RUH', 'JED'],
    fleetSize: 144,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'XY',
    prefix: '593',
    icao: 'KNE',  // 修正：正确的ICAO代码
    name: { chinese: '纳斯航空', english: 'Flynas' },
    country: '沙特阿拉伯',
    countryCode: 'SA',
    type: 'LCC',
    hub: ['RUH'],
    fleetSize: 38,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'F3',
    prefix: '560',
    icao: 'FAD',
    name: { chinese: 'flyadeal', english: 'flyadeal' },
    country: '沙特阿拉伯',
    countryCode: 'SA',
    type: 'LCC',
    hub: ['RUH', 'JED'],
    fleetSize: 18,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇶🇦 卡塔尔航空公司
  {
    code: 'QR',
    prefix: '157',
    icao: 'QTR',
    name: { chinese: '卡塔尔航空', english: 'Qatar Airways' },
    country: '卡塔尔',
    countryCode: 'QA',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['DOH'],
    fleetSize: 256,
    active: true
  },

  // 🇰🇼 科威特航空公司 (按机队规模排序)
  {
    code: 'KU',
    prefix: '229',
    icao: 'KAC',
    name: { chinese: '科威特航空', english: 'Kuwait Airways' },
    country: '科威特',
    countryCode: 'KW',
    type: 'FSC',
    hub: ['KWI'],
    fleetSize: 31,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'J9',
    prefix: '486',
    icao: 'JZR',
    name: { chinese: '贾兹拉航空', english: 'Jazeera Airways' },
    country: '科威特',
    countryCode: 'KW',
    type: 'LCC',
    hub: ['KWI'],
    fleetSize: 17,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇧🇭 巴林航空公司
  {
    code: 'GF',
    prefix: '072',
    icao: 'GFA',
    name: { chinese: '海湾航空', english: 'Gulf Air' },
    country: '巴林',
    countryCode: 'BH',
    type: 'FSC',
    hub: ['BAH'],
    fleetSize: 39,
    active: true
  },

  // 🇴🇲 阿曼航空公司
  {
    code: 'WY',
    prefix: '910',
    icao: 'OMA',
    name: { chinese: '阿曼航空', english: 'Oman Air' },
    country: '阿曼',
    countryCode: 'OM',
    type: 'FSC',
    hub: ['MCT'],
    fleetSize: 50,
    active: true
  },
  {
    code: 'OV',
    prefix: '289',
    icao: 'SLM',
    name: { chinese: '萨拉姆航空', english: 'SalamAir' },
    country: '阿曼',
    countryCode: 'OM',
    type: 'LCC',
    hub: ['MCT'],
    fleetSize: 12,
    active: true
  },

  // 🇯🇴 约旦航空公司 (按机队规模排序)
  {
    code: 'RJ',
    prefix: '512',
    icao: 'RJA',
    name: { chinese: '约旦皇家航空', english: 'Royal Jordanian' },
    country: '约旦',
    countryCode: 'JO',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['AMM'],
    fleetSize: 26,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'R5',
    prefix: '151',
    icao: 'JAV',
    name: { chinese: '约旦航空', english: 'Jordan Aviation' },
    country: '约旦',
    countryCode: 'JO',
    type: 'Charter',
    hub: ['AMM'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇱🇧 黎巴嫩航空公司
  {
    code: 'ME',
    prefix: '076',
    icao: 'MEA',
    name: { chinese: '中东航空', english: 'Middle East Airlines' },
    country: '黎巴嫩',
    countryCode: 'LB',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['BEY'],
    fleetSize: 20,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇮🇶 伊拉克航空公司
  {
    code: 'IF',
    prefix: '017',
    icao: 'FBA',
    name: { chinese: '巴格达飞行', english: 'Fly Baghdad' },
    country: '伊拉克',
    countryCode: 'IQ',
    type: 'FSC',
    hub: ['BGW'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇮🇷 伊朗航空公司 (按机队规模排序)
  {
    code: 'W5',
    prefix: '537',
    icao: 'MRM',
    name: { chinese: '马汉航空', english: 'Mahan Air' },
    country: '伊朗',
    countryCode: 'IR',
    type: 'FSC',
    hub: ['IKA'],
    fleetSize: 65,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },
  {
    code: 'IR',
    prefix: '096',
    icao: 'IRA',
    name: { chinese: '伊朗航空', english: 'Iran Air' },
    country: '伊朗',
    countryCode: 'IR',
    type: 'FSC',
    hub: ['IKA'],
    fleetSize: 43,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'EP',
    prefix: '815',
    icao: 'IRC',
    name: { chinese: '伊朗阿塞曼航空', english: 'Iran Aseman Airlines' },
    country: '伊朗',
    countryCode: 'IR',
    type: 'FSC',
    hub: ['IKA', 'MHD'],
    fleetSize: 35,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'B9',
    prefix: '491',
    icao: 'IRB',
    name: { chinese: '伊朗旅游航空', english: 'Iran Airtour Airline' },
    country: '伊朗',
    countryCode: 'IR',
    type: 'Charter',
    hub: ['IKA'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇦🇲 亚美尼亚航空公司
  {
    code: 'U8',
    prefix: '111',
    icao: 'AMC',
    name: { chinese: '亚美尼亚航空', english: 'Armavia' },
    country: '亚美尼亚',
    countryCode: 'AM',
    type: 'FSC',
    hub: ['EVN'],
    fleetSize: 0,
    active: false
  },

  // 🇦🇿 阿塞拜疆航空公司
  {
    code: 'J2',
    prefix: '771',
    icao: 'AHY',
    name: { chinese: '阿塞拜疆航空', english: 'Azerbaijan Airlines' },
    country: '阿塞拜疆',
    countryCode: 'AZ',
    type: 'FSC',
    hub: ['GYD'],
    fleetSize: 30,
    active: true
  },

  // 🇬🇪 格鲁吉亚航空公司
  {
    code: 'A9',
    prefix: '606', // IATA官网权威数据
    icao: 'GEO',
    name: { chinese: '格鲁吉亚航空', english: 'Georgian Airways' },
    country: '格鲁吉亚',
    countryCode: 'GE',
    type: 'FSC',
    hub: ['TBS'],
    fleetSize: 9,
    active: true
  },
  {
    code: 'GE',
    prefix: '580',
    icao: 'GEL',
    name: { chinese: '格鲁吉亚联合航空', english: 'Georgian International Airlines' },
    country: '格鲁吉亚',
    countryCode: 'GE',
    type: 'Charter',
    hub: ['TBS'],
    fleetSize: 4,
    active: true
  },

  // 🇺🇿 乌兹别克斯坦航空公司
  {
    code: 'HY',
    prefix: '250',
    icao: 'UZB',
    name: { chinese: '乌兹别克斯坦航空', english: 'Uzbekistan Airways' },
    country: '乌兹别克斯坦',
    countryCode: 'UZ',
    type: 'FSC',
    hub: ['TAS'],
    fleetSize: 32,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇰🇿 哈萨克斯坦航空公司 (按机队规模排序)
  {
    code: 'DV',
    prefix: '655',
    icao: 'VSV',
    name: { chinese: 'SCAT航空', english: 'SCAT Airlines' },
    country: '哈萨克斯坦',
    countryCode: 'KZ',
    type: 'FSC',
    hub: ['CIT', 'ALA'],
    fleetSize: 32,
    active: true,
    isIata: true  // ✅ IATA成员 (2018年加入)
  },
  {
    code: 'KC',
    prefix: '465',
    icao: 'KZR',
    name: { chinese: '阿斯塔纳航空', english: 'Air Astana' },
    country: '哈萨克斯坦',
    countryCode: 'KZ',
    type: 'FSC',
    hub: ['ALA', 'NQZ'],
    fleetSize: 60,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'IQ',
    prefix: '',  // 没有3位数字前缀
    icao: 'QAZ',
    name: { chinese: '哈萨克航空', english: 'Qazaq Air' },
    country: '哈萨克斯坦',
    countryCode: 'KZ',
    type: 'LCC',
    hub: ['NQZ'],
    fleetSize: 5,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇰🇬 吉尔吉斯斯坦航空公司
  {
    code: 'QH',
    prefix: '438',
    icao: 'KGA',
    name: { chinese: '吉尔吉斯航空', english: 'Air Kyrgyzstan' },
    country: '吉尔吉斯斯坦',
    countryCode: 'KG',
    type: 'FSC',
    hub: ['FRU'],
    fleetSize: 6,
    active: true
  },

  // 🇹🇯 塔吉克斯坦航空公司 (按机队规模排序)
  {
    code: 'SZ',
    prefix: '413',
    icao: 'SMR',
    name: { chinese: '索蒙航空', english: 'Somon Air' },
    country: '塔吉克斯坦',
    countryCode: 'TJ',
    type: 'FSC',
    hub: ['DYU'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '7J',
    prefix: '762',
    icao: 'TJK',
    name: { chinese: '塔吉克斯坦航空', english: 'Tajik Air' },
    country: '塔吉克斯坦',
    countryCode: 'TJ',
    type: 'FSC',
    hub: ['DYU'],
    fleetSize: 8,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇲🇳 蒙古IATA航空公司
  {
    code: 'OM',
    prefix: '289',
    icao: 'MGL',
    name: { chinese: '蒙古民用航空', english: 'MIAT Mongolian Airlines' },
    country: '蒙古',
    countryCode: 'MN',
    type: 'FSC',
    hub: ['ULN'],
    fleetSize: 11,
    active: true,
    isIata: true
  },
  {
    code: 'MG',
    prefix: '116',
    icao: 'EZA',
    name: { chinese: '埃兹尼斯航空', english: 'Eznis Airways' },
    country: '蒙古',
    countryCode: 'MN',
    type: 'FSC',
    hub: ['ULN'],
    fleetSize: 4,
    active: true,
    isIata: true
  },

  // 🇦🇫 阿富汗航空公司
  {
    code: 'FG',
    prefix: '255',
    icao: 'AFG',
    name: { chinese: '阿里亚纳阿富汗航空', english: 'Ariana Afghan Airlines' },
    country: '阿富汗',
    countryCode: 'AF',
    type: 'FSC',
    hub: ['KBL'],
    fleetSize: 10,
    active: true
  },

  // 🇵🇰 巴基斯坦航空公司
  {
    code: 'PK',
    prefix: '214',
    icao: 'PIA',
    name: { chinese: '巴基斯坦国际航空', english: 'Pakistan International Airlines' },
    country: '巴基斯坦',
    countryCode: 'PK',
    type: 'FSC',
    hub: ['KHI', 'LHE'],
    fleetSize: 32,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'PA',
    prefix: '420',
    icao: 'SER',
    name: { chinese: '塞雷恩航空', english: 'Serene Air' },
    country: '巴基斯坦',
    countryCode: 'PK',
    type: 'LCC',
    hub: ['KHI', 'ISB'],
    fleetSize: 7,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇧🇩 孟加拉国航空公司 (按机队规模排序)
  {
    code: 'BG',
    prefix: '997',
    icao: 'BBC',
    name: { chinese: '孟加拉国航空', english: 'Biman Bangladesh Airlines' },
    country: '孟加拉国',
    countryCode: 'BD',
    type: 'FSC',
    hub: ['DAC'],
    fleetSize: 21,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'BS',
    prefix: '779',
    icao: 'UBG',
    name: { chinese: '美孟航空', english: 'US-Bangla Airlines' },
    country: '孟加拉国',
    countryCode: 'BD',
    type: 'FSC',
    hub: ['DAC'],
    fleetSize: 20,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '2A',
    prefix: '610',
    icao: 'AWA',
    name: { chinese: '阿斯特拉航空', english: 'Air Astra' },
    country: '孟加拉国',
    countryCode: 'BD',
    type: 'LCC',
    hub: ['DAC'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇱🇰 斯里兰卡航空公司
  {
    code: 'UL',
    prefix: '603',
    icao: 'ALK',
    name: { chinese: '斯里兰卡航空', english: 'SriLankan Airlines' },
    country: '斯里兰卡',
    countryCode: 'LK',
    type: 'FSC',
    hub: ['CMB'],
    fleetSize: 27,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇳🇵 尼泊尔航空公司
  {
    code: 'H9',
    prefix: '769',
    icao: 'HIM',
    name: { chinese: '喜马拉雅航空', english: 'Himalaya Airlines' },
    country: '尼泊尔',
    countryCode: 'NP',
    type: 'FSC',
    hub: ['KTM'],
    fleetSize: 4,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇲🇻 马尔代夫航空公司
  {
    code: 'Q2',
    prefix: '854',
    icao: 'MDV',
    name: { chinese: '马尔代夫航空', english: 'Maldivian' },
    country: '马尔代夫',
    countryCode: 'MV',
    type: 'FSC',
    hub: ['MLE'],
    fleetSize: 22,
    active: true
  },

  // 🇧🇹 不丹航空公司
  {
    code: 'KB',
    prefix: '-',  // 不丹航空没有3位数字前缀
    icao: 'DRK',  // 修正：正确的ICAO代码是DRK
    name: { chinese: '不丹航空', english: 'Drukair' },
    country: '不丹',
    countryCode: 'BT',
    type: 'FSC',
    hub: ['PBH'],
    fleetSize: 5,  // 更新机队规模
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇲🇲 缅甸航空公司
  {
    code: 'UB',
    prefix: '665',
    icao: 'UBA',
    name: { chinese: '缅甸国家航空', english: 'Myanmar National Airlines' },
    country: '缅甸',
    countryCode: 'MM',
    type: 'FSC',
    hub: ['RGN'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '8M',
    prefix: '599',
    icao: 'MMA',
    name: { chinese: '缅甸国际航空', english: 'Myanmar Airways International' },
    country: '缅甸',
    countryCode: 'MM',
    type: 'FSC',
    hub: ['RGN'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'K7',
    prefix: '126',
    icao: 'AIK',
    name: { chinese: '亚洲之翼', english: 'Air KBZ' },
    country: '缅甸',
    countryCode: 'MM',
    type: 'LCC',
    hub: ['RGN'],
    fleetSize: 16,
    active: true,
    isIata: false  // ❌ 非IATA成员
  },

  // 🇰🇭 柬埔寨航空公司
  {
    code: 'K6',
    prefix: '188',
    icao: 'KHV',
    name: { chinese: '柬埔寨航空', english: 'Air Cambodia' },
    country: '柬埔寨',
    countryCode: 'KH',
    type: 'FSC',
    hub: ['PNH'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇱🇦 老挝航空公司
  {
    code: 'QV',
    prefix: '627',
    icao: 'LAO',
    name: { chinese: '老挝航空', english: 'Lao Airlines' },
    country: '老挝',
    countryCode: 'LA',
    type: 'FSC',
    hub: ['VTE'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇸🇬 新加坡航空公司
  {
    code: 'SQ',
    prefix: '618',
    icao: 'SIA',
    name: { chinese: '新加坡航空', english: 'Singapore Airlines' },
    country: '新加坡',
    countryCode: 'SG',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['SIN'],
    fleetSize: 138,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'TR',
    prefix: '668',
    icao: 'TGW',
    name: { chinese: '酷航', english: 'Scoot' },
    country: '新加坡',
    countryCode: 'SG',
    type: 'LCC',
    hub: ['SIN'],
    fleetSize: 64,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇧🇳 文莱航空公司
  {
    code: 'BI',
    prefix: '672',
    icao: 'RBA',
    name: { chinese: '文莱皇家航空', english: 'Royal Brunei' },
    country: '文莱',
    countryCode: 'BN',
    type: 'FSC',
    hub: ['BWN'],
    fleetSize: 14,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇹🇷 土耳其航空公司 (按机队规模排序)
  {
    code: 'TK',
    prefix: '235',
    icao: 'THY',
    name: { chinese: '土耳其航空', english: 'Turkish Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['IST'],
    fleetSize: 389,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'PC',
    prefix: '624',
    icao: 'PGT',
    name: { chinese: '飞马航空', english: 'Pegasus Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['SAW'],
    fleetSize: 97,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'XQ',
    prefix: '564',
    icao: 'SXS',
    name: { chinese: '太阳快运', english: 'SunExpress' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['ADB', 'AYT'],
    fleetSize: 69,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'TI',
    prefix: '768',
    icao: 'TWI',
    name: { chinese: '顺风航空', english: 'Tailwind Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['AYT'],
    fleetSize: 22,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '4M',
    prefix: '734',
    icao: 'MGH',
    name: { chinese: '蓝天航空', english: 'Mavi Gök Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['IST'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'XC',
    prefix: '395',
    icao: 'CAI',
    name: { chinese: '科伦敦航空', english: 'Corendon Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['AYT'],
    fleetSize: 10,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'FH',
    prefix: '',
    icao: 'FHY',
    name: { chinese: '自由鸟航空', english: 'Freebird Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['AYT'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'GO',
    prefix: '444',
    icao: 'KZU',
    name: { chinese: 'ULS货运航空', english: 'ULS Airlines Cargo' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'Cargo',
    hub: ['IST'],
    fleetSize: 6,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'MB',
    prefix: '716',
    icao: 'MNB',
    name: { chinese: 'MNG航空', english: 'MNG Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'Cargo',
    hub: ['IST'],
    fleetSize: 5,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '2S',
    prefix: '263',
    icao: 'STW',
    name: { chinese: '南风航空', english: 'Southwind Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['AYT'],
    fleetSize: 4,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'B5',
    prefix: '386',
    icao: 'BBT',
    name: { chinese: 'BBN航空', english: 'BBN Airlines' },
    country: '土耳其',
    countryCode: 'TR',
    type: 'LCC',
    hub: ['IST'],
    fleetSize: 3,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇨🇾 塞浦路斯航空公司
  {
    code: 'CY',
    prefix: '048',
    icao: 'CYP',
    name: { chinese: '塞浦路斯航空', english: 'Cyprus Airways' },
    country: '塞浦路斯',
    countryCode: 'CY',
    type: 'FSC',
    hub: ['LCA'],
    fleetSize: 11,
    active: true
  },

  // 🇮🇱 以色列航空公司 (按机队规模排序)
  {
    code: 'LY',
    prefix: '114',
    icao: 'ELY',
    name: { chinese: '以色列航空', english: 'EL AL' },
    country: '以色列',
    countryCode: 'IL',
    type: 'FSC',
    hub: ['TLV'],
    fleetSize: 48,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'IZ',
    prefix: '238',
    icao: 'AIZ',
    name: { chinese: '阿基亚航空', english: 'Arkia Israeli Airlines' },
    country: '以色列',
    countryCode: 'IL',
    type: 'Charter',
    hub: ['TLV'],
    fleetSize: 16,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '6H',
    prefix: '818',
    icao: 'ISR',
    name: { chinese: '以色列航空', english: 'Israir' },
    country: '以色列',
    countryCode: 'IL',
    type: 'Charter',
    hub: ['TLV'],
    fleetSize: 14,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '5C',
    prefix: '700',
    icao: 'ICL',
    name: { chinese: '挑战航空', english: 'Challenge Airlines (IL)' },
    country: '以色列',
    countryCode: 'IL',
    type: 'Charter',
    hub: ['TLV'],
    fleetSize: 4,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇪🇬 埃及航空公司补充
  {
    code: 'MS',
    prefix: '077',
    icao: 'MSR',
    name: { chinese: '埃及航空', english: 'EgyptAir' },
    country: '埃及',
    countryCode: 'EG',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['CAI'],
    fleetSize: 75,
    active: true
  },
  {
    code: 'SM',
    prefix: '854',
    icao: 'EGY',
    name: { chinese: '埃及快递', english: 'EgyptAir Express' },
    country: '埃及',
    countryCode: 'EG',
    type: 'Regional',
    hub: ['CAI'],
    fleetSize: 12,
    active: true
  },

  // 🇲🇦 摩洛哥航空公司
  {
    code: 'AT',
    prefix: '147',
    icao: 'RAM',
    name: { chinese: '摩洛哥皇家航空', english: 'Royal Air Maroc' },
    country: '摩洛哥',
    countryCode: 'MA',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['CMN'],
    fleetSize: 59,
    active: true
  },

  // 🇹🇳 突尼斯航空公司
  {
    code: 'TU',
    prefix: '199',
    icao: 'TAR',
    name: { chinese: '突尼斯航空', english: 'Tunisair' },
    country: '突尼斯',
    countryCode: 'TN',
    type: 'FSC',
    hub: ['TUN'],
    fleetSize: 28,
    active: true
  },

  // 🇩🇿 阿尔及利亚航空公司
  {
    code: 'AH',
    prefix: '124',
    icao: 'DAH',
    name: { chinese: '阿尔及利亚航空', english: 'Air Algérie' },
    country: '阿尔及利亚',
    countryCode: 'DZ',
    type: 'FSC',
    hub: ['ALG'],
    fleetSize: 56,
    active: true
  },

  // 🇱🇾 利比亚航空公司
  {
    code: 'LN',
    prefix: '148',
    icao: 'LAA',
    name: { chinese: '利比亚航空', english: 'Libyan Airlines' },
    country: '利比亚',
    countryCode: 'LY',
    type: 'FSC',
    hub: ['TIP'],
    fleetSize: 18,
    active: true
  },

  // 🇸🇩 苏丹航空公司
  {
    code: 'SD',
    prefix: '200',
    icao: 'SUD',
    name: { chinese: '苏丹航空', english: 'Sudan Airways' },
    country: '苏丹',
    countryCode: 'SD',
    type: 'FSC',
    hub: ['KRT'],
    fleetSize: 12,
    active: true
  },

  // 🇪🇹 埃塞俄比亚航空公司
  {
    code: 'ET',
    prefix: '071',
    icao: 'ETH',
    name: { chinese: '埃塞俄比亚航空', english: 'Ethiopian Airlines' },
    country: '埃塞俄比亚',
    countryCode: 'ET',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['ADD'],
    fleetSize: 140,
    active: true
  },

  // 🇪🇷 厄立特里亚航空公司
  {
    code: 'B8',
    prefix: '505',
    icao: 'ERT',
    name: { chinese: '厄立特里亚航空', english: 'Eritrean Airlines' },
    country: '厄立特里亚',
    countryCode: 'ER',
    type: 'FSC',
    hub: ['ASM'],
    fleetSize: 4,
    active: true
  },

  // 🇩🇯 吉布提航空公司
  {
    code: 'D8',
    prefix: '515',
    icao: 'DJI',
    name: { chinese: '吉布提航空', english: 'Djibouti Airlines' },
    country: '吉布提',
    countryCode: 'DJ',
    type: 'FSC',
    hub: ['JIB'],
    fleetSize: 2,
    active: true
  },

  // 🇸🇴 索马里航空公司
  {
    code: '4D',
    prefix: '637',
    icao: 'SOM',
    name: { chinese: '索马里航空', english: 'Somali Airlines' },
    country: '索马里',
    countryCode: 'SO',
    type: 'FSC',
    hub: ['MGQ'],
    fleetSize: 2,
    active: true
  },

  // 🇿🇦 南非航空公司补充
  {
    code: 'SA',
    prefix: '083',
    icao: 'SAA',
    name: { chinese: '南非航空', english: 'South African Airways' },
    country: '南非',
    countryCode: 'ZA',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['JNB', 'CPT'],
    fleetSize: 47,
    active: true
  },
  {
    code: 'MN',
    prefix: '203',
    icao: 'KUL',
    name: { chinese: '芒果航空', english: 'Mango Airlines' },
    country: '南非',
    countryCode: 'ZA',
    type: 'LCC',
    hub: ['JNB'],
    fleetSize: 11,
    active: true
  },

  // 🇧🇼 博茨瓦纳航空补充
  {
    code: 'BP',
    prefix: '636',
    icao: 'BOT',
    name: { chinese: '博茨瓦纳航空', english: 'Air Botswana' },
    country: '博茨瓦纳',
    countryCode: 'BW',
    type: 'FSC',
    hub: ['GBE'],
    fleetSize: 5,
    active: true
  },

  // 🇫🇮 芬兰航空公司
  {
    code: 'AY',
    prefix: '105',
    icao: 'FIN',
    name: { chinese: '芬兰航空', english: 'Finnair' },
    country: '芬兰',
    countryCode: 'FI',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['HEL'],
    fleetSize: 81,
    active: true
  },

  // 🇳🇴 挪威航空公司
  {
    code: 'DY',
    prefix: '173',
    icao: 'NAX',
    name: { chinese: '挪威航空', english: 'Norwegian Air Shuttle' },
    country: '挪威',
    countryCode: 'NO',
    type: 'LCC',
    hub: ['OSL', 'BGO'],
    fleetSize: 51,
    active: true
  },
  {
    code: 'SK',
    prefix: '117',
    icao: 'SAS',
    name: { chinese: '北欧航空', english: 'Scandinavian Airlines' },
    country: '挪威',
    countryCode: 'NO',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['OSL', 'CPH', 'ARN'],
    fleetSize: 124,
    active: true
  },

  // 🇸🇪 瑞典航空公司
  {
    code: 'BV',
    prefix: '662',
    icao: 'BLX',
    name: { chinese: '蓝1号', english: 'Blue1' },
    country: '瑞典',
    countryCode: 'SE',
    type: 'Regional',
    hub: ['ARN'],
    fleetSize: 0,
    active: false
  },

  // 🇮🇸 冰岛航空公司
  {
    code: 'FI',
    prefix: '108',
    icao: 'ICE',
    name: { chinese: '冰岛航空', english: 'Icelandair' },
    country: '冰岛',
    countryCode: 'IS',
    type: 'FSC',
    hub: ['KEF'],
    fleetSize: 38,
    active: true
  },
  {
    code: 'NY',
    prefix: '795',
    icao: 'ICL',
    name: { chinese: '冰岛廉航', english: 'Iceland Express' },
    country: '冰岛',
    countryCode: 'IS',
    type: 'LCC',
    hub: ['KEF'],
    fleetSize: 0,
    active: false
  },

  // 🇵🇹 葡萄牙航空公司 (按机队规模排序)
  {
    code: 'TP',
    prefix: '047',
    icao: 'TAP',
    name: { chinese: '葡萄牙航空', english: 'TAP Air Portugal' },
    country: '葡萄牙',
    countryCode: 'PT',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['LIS'],
    fleetSize: 104,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'YU',
    prefix: '551',
    icao: 'MMZ',
    name: { chinese: '欧洲大西洋航空', english: 'EuroAtlantic Airways' },
    country: '葡萄牙',
    countryCode: 'PT',
    type: 'Charter',
    hub: ['LIS'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇬🇷 希腊航空公司
  {
    code: 'A3',
    prefix: '390',
    icao: 'AEE',
    name: { chinese: '爱琴海航空', english: 'Aegean Airlines' },
    country: '希腊',
    countryCode: 'GR',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['ATH'],
    fleetSize: 65,
    active: true
  },
  {
    code: 'OA',
    prefix: '050',
    icao: 'OAL',
    name: { chinese: '奥林匹克航空', english: 'Olympic Air' },
    country: '希腊',
    countryCode: 'GR',
    type: 'FSC',
    hub: ['ATH'],
    fleetSize: 34,
    active: true
  },
  {
    code: 'GQ',
    prefix: '143',
    icao: 'SEH',
    name: { chinese: '天空快线', english: 'Sky Express' },
    country: '希腊',
    countryCode: 'GR',
    type: 'Regional',
    hub: ['ATH', 'HER'],
    fleetSize: 12,
    active: true
  },

  // 🇲🇹 马耳他航空公司
  {
    code: 'KM',
    prefix: '643',
    icao: 'AMC',
    name: { chinese: '马耳他航空', english: 'Air Malta' },
    country: '马耳他',
    countryCode: 'MT',
    type: 'FSC',
    hub: ['MLA'],
    fleetSize: 10,
    active: true
  },

  // 🇲🇽 墨西哥航空公司补充
  {
    code: 'AM',
    prefix: '139',
    icao: 'AMX',
    name: { chinese: '墨西哥航空', english: 'Aeromexico' },
    country: '墨西哥',
    countryCode: 'MX',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['MEX'],
    fleetSize: 133,
    active: true
  },
  {
    code: '4O',
    prefix: '951',
    icao: 'ABC',
    name: { chinese: '洲际航空', english: 'Interjet' },
    country: '墨西哥',
    countryCode: 'MX',
    type: 'LCC',
    hub: ['MEX'],
    fleetSize: 22,
    active: true
  },
  {
    code: 'Y4',
    prefix: '615',
    icao: 'VLI',
    name: { chinese: '沃拉里斯', english: 'Volaris' },
    country: '墨西哥',
    countryCode: 'MX',
    type: 'LCC',
    hub: ['MEX', 'GDL'],
    fleetSize: 114,
    active: true
  },

  // 🇬🇹 危地马拉航空公司
  {
    code: 'GU',
    prefix: '240',
    icao: 'GUA',
    name: { chinese: '危地马拉航空', english: 'Avianca Guatemala' },
    country: '危地马拉',
    countryCode: 'GT',
    type: 'FSC',
    hub: ['GUA'],
    fleetSize: 6,
    active: true
  },

  // 🇨🇷 哥斯达黎加航空公司
  {
    code: 'LR',
    prefix: '901',
    icao: 'LRC',
    name: { chinese: '哥斯达黎加航空', english: 'LACSA' },
    country: '哥斯达黎加',
    countryCode: 'CR',
    type: 'FSC',
    hub: ['SJO'],
    fleetSize: 12,
    active: true
  },

  // 🇵🇦 巴拿马航空公司
  {
    code: 'CM',
    prefix: '230',
    icao: 'CMP',
    name: { chinese: '巴拿马航空', english: 'Copa Airlines' },
    country: '巴拿马',
    countryCode: 'PA',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['PTY'],
    fleetSize: 106,
    active: true
  },

  // 🇯🇲 牙买加航空公司
  {
    code: 'JM',
    prefix: '201',
    icao: 'JAI',
    name: { chinese: '牙买加航空', english: 'Caribbean Airlines' },
    country: '牙买加',
    countryCode: 'JM',
    type: 'FSC',
    hub: ['KIN', 'POS'],
    fleetSize: 23,
    active: true
  },

  // 🇹🇹 特立尼达和多巴哥航空公司
  {
    code: 'BW',
    prefix: '106',
    icao: 'BWA',
    name: { chinese: '加勒比海航空', english: 'Caribbean Airlines' },
    country: '特立尼达和多巴哥',
    countryCode: 'TT',
    type: 'FSC',
    hub: ['POS'],
    fleetSize: 19,
    active: true
  },

  // 🇧🇧 巴巴多斯航空公司
  {
    code: 'REI',
    prefix: '724',
    icao: 'REI',
    name: { chinese: 'REDjet', english: 'REDjet' },
    country: '巴巴多斯',
    countryCode: 'BB',
    type: 'LCC',
    hub: ['BGI'],
    fleetSize: 0,
    active: false
  },

  // 🇨🇺 古巴航空公司
  {
    code: 'CU',
    prefix: '136',
    icao: 'CUB',
    name: { chinese: '古巴航空', english: 'Cubana' },
    country: '古巴',
    countryCode: 'CU',
    type: 'FSC',
    hub: ['HAV'],
    fleetSize: 16,
    active: true
  },

  // 🇩🇴 多米尼加航空公司
  {
    code: 'JD',
    prefix: '123',
    icao: 'JDA',
    name: { chinese: '多米尼加航空', english: 'Dominicana' },
    country: '多米尼加',
    countryCode: 'DO',
    type: 'FSC',
    hub: ['SDQ'],
    fleetSize: 8,
    active: true
  },

  // 🇭🇹 海地航空公司
  {
    code: 'H6',
    prefix: '509',
    icao: 'HTI',
    name: { chinese: '海地航空', english: 'Tortug Air' },
    country: '海地',
    countryCode: 'HT',
    type: 'Regional',
    hub: ['PAP'],
    fleetSize: 3,
    active: true
  },

  // 🇸🇷 苏里南航空公司
  {
    code: 'PY',
    prefix: '192',
    icao: 'SLM',
    name: { chinese: '苏里南航空', english: 'Surinam Airways' },
    country: '苏里南',
    countryCode: 'SR',
    type: 'FSC',
    hub: ['PBM'],
    fleetSize: 6,
    active: true
  },

  // 🇬🇫 法属圭亚那航空
  {
    code: 'GF',
    prefix: '594',
    icao: 'GUF',
    name: { chinese: '圭亚那航空', english: 'Air Guyane' },
    country: '法属圭亚那',
    countryCode: 'GF',
    type: 'Regional',
    hub: ['CAY'],
    fleetSize: 4,
    active: true
  },

  // 🇬🇾 圭亚那航空公司
  {
    code: 'GY',
    prefix: '592',
    icao: 'GUY',
    name: { chinese: '圭亚那航空', english: 'Trans Guyana Airways' },
    country: '圭亚那',
    countryCode: 'GY',
    type: 'Regional',
    hub: ['GEO'],
    fleetSize: 2,
    active: true
  },

  // 🇫🇯 斐济航空公司
  {
    code: 'FJ',
    prefix: '260',
    icao: 'FJI',
    name: { chinese: '斐济航空', english: 'Fiji Airways' },
    country: '斐济',
    countryCode: 'FJ',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['NAN'],
    fleetSize: 21,
    active: true
  },

  // 🇹🇴 汤加航空公司
  {
    code: 'WP',
    prefix: '676',
    icao: 'TON',
    name: { chinese: '汤加皇家航空', english: 'Real Tonga' },
    country: '汤加',
    countryCode: 'TO',
    type: 'Regional',
    hub: ['TBU'],
    fleetSize: 2,
    active: true
  },

  // 🇻🇺 瓦努阿图航空公司
  {
    code: 'NF',
    prefix: '678',
    icao: 'VAN',
    name: { chinese: '瓦努阿图航空', english: 'Air Vanuatu' },
    country: '瓦努阿图',
    countryCode: 'VU',
    type: 'FSC',
    hub: ['VLI'],
    fleetSize: 8,
    active: true
  },

  // 🇳🇷 瑙鲁航空公司
  {
    code: 'ON',
    prefix: '674',
    icao: 'RON',
    name: { chinese: '瑙鲁航空', english: 'Our Airline' },
    country: '瑙鲁',
    countryCode: 'NR',
    type: 'Regional',
    hub: ['INU'],
    fleetSize: 1,
    active: true
  },

  // 🇼🇸 萨摩亚航空公司
  {
    code: 'OL',
    prefix: '685',
    icao: 'SAM',
    name: { chinese: '萨摩亚航空', english: 'Samoa Airways' },
    country: '萨摩亚',
    countryCode: 'WS',
    type: 'FSC',
    hub: ['APW'],
    fleetSize: 4,
    active: true
  },

  // 🇸🇧 所罗门群岛航空公司
  {
    code: 'IE',
    prefix: '677',
    icao: 'SOL',
    name: { chinese: '所罗门航空', english: 'Solomon Airlines' },
    country: '所罗门群岛',
    countryCode: 'SB',
    type: 'FSC',
    hub: ['HIR'],
    fleetSize: 6,
    active: true
  },

  // 🇨🇰 库克群岛航空公司
  {
    code: 'E5',
    prefix: '682',
    icao: 'RAR',
    name: { chinese: '库克群岛航空', english: 'Air Rarotonga' },
    country: '库克群岛',
    countryCode: 'CK',
    type: 'Regional',
    hub: ['RAR'],
    fleetSize: 8,
    active: true
  },

  // 🇳🇺 纽埃航空公司
  {
    code: 'NU',
    prefix: '683',
    icao: 'NIU',
    name: { chinese: '纽埃航空', english: 'Air Niue' },
    country: '纽埃',
    countryCode: 'NU',
    type: 'Regional',
    hub: ['IUE'],
    fleetSize: 1,
    active: true
  },

  // 🇹🇻 图瓦卢航空公司
  {
    code: 'TV',
    prefix: '688',
    icao: 'TUV',
    name: { chinese: '图瓦卢航空', english: 'Air Tuvalu' },
    country: '图瓦卢',
    countryCode: 'TV',
    type: 'Regional',
    hub: ['FUN'],
    fleetSize: 1,
    active: true
  },

  // 🇰🇮 基里巴斯航空公司
  {
    code: 'KI',
    prefix: '686',
    icao: 'KIR',
    name: { chinese: '基里巴斯航空', english: 'Air Kiribati' },
    country: '基里巴斯',
    countryCode: 'KI',
    type: 'Regional',
    hub: ['TRW'],
    fleetSize: 2,
    active: true
  },

  // 🇵🇼 帕劳航空公司
  {
    code: 'PW',
    prefix: '680',
    icao: 'BLR',
    name: { chinese: '帕劳航空', english: 'Belau Air' },
    country: '帕劳',
    countryCode: 'PW',
    type: 'Regional',
    hub: ['ROR'],
    fleetSize: 3,
    active: true
  },

  // 🇫🇲 密克罗尼西亚航空公司
  {
    code: 'FM',
    prefix: '691',
    icao: 'FSM',
    name: { chinese: '密克罗尼西亚航空', english: 'Caroline Islands Air' },
    country: '密克罗尼西亚',
    countryCode: 'FM',
    type: 'Regional',
    hub: ['PNI'],
    fleetSize: 2,
    active: true
  },

  // 🇲🇭 马绍尔群岛航空公司
  {
    code: 'MH',
    prefix: '692',
    icao: 'AIR',
    name: { chinese: '马绍尔群岛航空', english: 'Air Marshall Islands' },
    country: '马绍尔群岛',
    countryCode: 'MH',
    type: 'Regional',
    hub: ['MAJ'],
    fleetSize: 5,
    active: true
  },

  // 🇳🇨 新喀里多尼亚航空补充
  {
    code: 'GH',
    prefix: '687',
    icao: 'NCA',
    name: { chinese: '新喀里多尼亚国际', english: 'Aircalin' },
    country: '新喀里多尼亚',
    countryCode: 'NC',
    type: 'FSC',
    hub: ['NOU'],
    fleetSize: 7,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇵🇫 法属波利尼西亚航空公司
  {
    code: 'VT',
    prefix: '135',
    icao: 'VTA',
    name: { chinese: '大溪地航空', english: 'Air Tahiti' },
    country: '法属波利尼西亚',
    countryCode: 'PF',
    type: 'Regional',
    hub: ['PPT'],
    fleetSize: 12,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇻🇪 委内瑞拉航空补充
  {
    code: 'VE',
    prefix: '334',
    icao: 'VNE',
    name: { chinese: '委内瑞拉航空', english: 'Venezolana' },
    country: '委内瑞拉',
    countryCode: 'VE',
    type: 'FSC',
    hub: ['CCS'],
    fleetSize: 8,
    active: true
  },

  // 🇳🇮 尼加拉瓜航空公司
  {
    code: 'NI',
    prefix: '505',
    icao: 'NIC',
    name: { chinese: '尼加拉瓜航空', english: 'Nicaraguense de Aviacion' },
    country: '尼加拉瓜',
    countryCode: 'NI',
    type: 'FSC',
    hub: ['MGA'],
    fleetSize: 4,
    active: true
  },

  // 🇭🇳 洪都拉斯航空公司
  {
    code: 'HN',
    prefix: '504',
    icao: 'HND',
    name: { chinese: '洪都拉斯航空', english: 'TAN Airlines' },
    country: '洪都拉斯',
    countryCode: 'HN',
    type: 'FSC',
    hub: ['TGU'],
    fleetSize: 6,
    active: true
  },

  // 🇧🇿 伯利兹航空公司
  {
    code: 'BZ',
    prefix: '501',
    icao: 'BLZ',
    name: { chinese: '伯利兹航空', english: 'Maya Island Air' },
    country: '伯利兹',
    countryCode: 'BZ',
    type: 'Regional',
    hub: ['BZE'],
    fleetSize: 12,
    active: true
  },

  // 🇪🇸 西班牙航空补充
  {
    code: 'UX',
    prefix: '996',
    icao: 'AEA',
    name: { chinese: '欧罗巴航空', english: 'Air Europa' },
    country: '西班牙',
    countryCode: 'ES',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['MAD'],
    fleetSize: 56,
    active: true
  },
  {
    code: 'IB',
    prefix: '075',
    icao: 'IBE',
    name: { chinese: '伊比利亚航空', english: 'Iberia' },
    country: '西班牙',
    countryCode: 'ES',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['MAD'],
    fleetSize: 135,
    active: true
  },

  // 🇳🇱 荷兰航空补充
  {
    code: 'KL',
    prefix: '074',
    icao: 'KLM',
    name: { chinese: '荷兰皇家航空', english: 'KLM Royal Dutch Airlines' },
    country: '荷兰',
    countryCode: 'NL',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['AMS'],
    fleetSize: 110,
    active: true
  },
  {
    code: 'HV',
    prefix: '164',
    icao: 'TRA',
    name: { chinese: '荷兰泛航', english: 'Transavia Netherlands' },
    country: '荷兰',
    countryCode: 'NL',
    type: 'LCC',
    hub: ['AMS'],
    fleetSize: 46,
    active: true
  },

  // 🇨🇭 瑞士航空补充
  {
    code: 'LX',
    prefix: '724',
    icao: 'SWR',
    name: { chinese: '瑞士国际航空', english: 'Swiss International Air Lines' },
    country: '瑞士',
    countryCode: 'CH',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['ZUR', 'GVA'],
    fleetSize: 91,
    active: true
  },
  {
    code: 'WK',
    prefix: '845',
    icao: 'EZS',
    name: { chinese: '易捷瑞士', english: 'easyJet Switzerland' },
    country: '瑞士',
    countryCode: 'CH',
    type: 'LCC',
    hub: ['GVA', 'BSL'],
    fleetSize: 36,
    active: true
  },

  // 🇦🇹 奥地利航空补充
  {
    code: 'OS',
    prefix: '257',
    icao: 'AUA',
    name: { chinese: '奥地利航空', english: 'Austrian Airlines' },
    country: '奥地利',
    countryCode: 'AT',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['VIE'],
    fleetSize: 80,
    active: true
  },

  // 🇧🇪 比利时航空补充
  {
    code: 'SN',
    prefix: '082',
    icao: 'BEL',
    name: { chinese: '布鲁塞尔航空', english: 'Brussels Airlines' },
    country: '比利时',
    countryCode: 'BE',
    type: 'FSC',
    alliance: 'Star Alliance',
    hub: ['BRU'],
    fleetSize: 54,
    active: true
  },

  // 🇩🇰 丹麦航空补充
  {
    code: 'DM',
    prefix: '743',
    icao: 'DAN',
    name: { chinese: '丹麦航空', english: 'Maersk Air' },
    country: '丹麦',
    countryCode: 'DK',
    type: 'FSC',
    hub: ['CPH'],
    fleetSize: 0,
    active: false
  },

  // 🇷🇺 俄罗斯航空补充
  {
    code: 'SU',
    prefix: '555',
    icao: 'AFL',
    name: { chinese: '俄罗斯航空', english: 'Aeroflot' },
    country: '俄罗斯',
    countryCode: 'RU',
    type: 'FSC',
    alliance: 'SkyTeam',
    hub: ['SVO'],
    fleetSize: 229,
    active: true
  },
  {
    code: 'S7',
    prefix: '421',
    icao: 'SBI',
    name: { chinese: '西伯利亚航空', english: 'S7 Airlines' },
    country: '俄罗斯',
    countryCode: 'RU',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['SVO', 'OVB'],
    fleetSize: 96,
    active: true
  },
  {
    code: 'UT',
    prefix: '870',
    icao: 'UTA',
    name: { chinese: 'UTair航空', english: 'UTair Aviation' },
    country: '俄罗斯',
    countryCode: 'RU',
    type: 'FSC',
    hub: ['SVO', 'KJA'],
    fleetSize: 47,
    active: true
  },

  // 🇺🇦 乌克兰航空公司
  {
    code: 'PS',
    prefix: '566',
    icao: 'AUI',
    name: { chinese: '乌克兰国际航空', english: 'Ukraine International Airlines' },
    country: '乌克兰',
    countryCode: 'UA',
    type: 'FSC',
    hub: ['KBP'],
    fleetSize: 42,
    active: true
  },
  {
    code: '7W',
    prefix: '968',
    icao: 'WRC',
    name: { chinese: '风玫瑰航空', english: 'Windrose Airlines' },
    country: '乌克兰',
    countryCode: 'UA',
    type: 'Charter',
    hub: ['KBP'],
    fleetSize: 12,
    active: true
  },

  // 🇧🇾 白俄罗斯航空公司
  {
    code: 'B2',
    prefix: '1834',
    icao: 'BRU',
    name: { chinese: '白俄罗斯航空', english: 'Belavia' },
    country: '白俄罗斯',
    countryCode: 'BY',
    type: 'FSC',
    hub: ['MSQ'],
    fleetSize: 30,
    active: true
  },

  // 🇲🇩 摩尔多瓦航空公司
  {
    code: '9U',
    prefix: '572',
    icao: 'MDV',
    name: { chinese: '摩尔多瓦航空', english: 'Air Moldova' },
    country: '摩尔多瓦',
    countryCode: 'MD',
    type: 'FSC',
    hub: ['KIV'],
    fleetSize: 7,
    active: true
  },

  // 🇲🇰 北马其顿航空补充
  {
    code: 'IN',
    prefix: '128',
    icao: 'MAK',
    name: { chinese: '马其顿航空', english: 'MAT Macedonian Airlines' },
    country: '北马其顿',
    countryCode: 'MK',
    type: 'FSC',
    hub: ['SKP'],
    fleetSize: 0,
    active: false
  },

  // 🇲🇪 黑山航空补充
  {
    code: 'YM',
    prefix: '129',
    icao: 'MON',
    name: { chinese: '黑山航空', english: 'Montenegro Airlines' },
    country: '黑山',
    countryCode: 'ME',
    type: 'FSC',
    hub: ['TGD'],
    fleetSize: 0,
    active: false
  },

  // 🇲🇦 摩洛哥航空补充
  {
    code: '3O',
    prefix: '295',
    icao: 'AIE',
    name: { chinese: '摩洛哥快运', english: 'Air Arabia Maroc' },
    country: '摩洛哥',
    countryCode: 'MA',
    type: 'LCC',
    hub: ['CMN'],
    fleetSize: 15,
    active: true
  },

  // 🇰🇲 科摩罗航空公司
  {
    code: 'KM',
    prefix: '269',
    icao: 'COM',
    name: { chinese: '科摩罗航空', english: 'Air Comores' },
    country: '科摩罗',
    countryCode: 'KM',
    type: 'Regional',
    hub: ['HAH'],
    fleetSize: 2,
    active: true
  },

  // 🇸🇨 塞舌尔航空公司
  {
    code: 'HM',
    prefix: '061',
    icao: 'SEY',
    name: { chinese: '塞舌尔航空', english: 'Air Seychelles' },
    country: '塞舌尔',
    countryCode: 'SC',
    type: 'FSC',
    hub: ['SEZ'],
    fleetSize: 7,
    active: true
  },

  // 🇨🇻 佛得角航空公司
  {
    code: 'VR',
    prefix: '086',
    icao: 'TCV',
    name: { chinese: '佛得角航空', english: 'Cabo Verde Airlines' },
    country: '佛得角',
    countryCode: 'CV',
    type: 'FSC',
    hub: ['RAI'],
    fleetSize: 6,
    active: true
  },

  // 🇸🇹 圣多美和普林西比航空
  {
    code: 'ST',
    prefix: '239',
    icao: 'STP',
    name: { chinese: '圣多美航空', english: 'STP Airways' },
    country: '圣多美和普林西比',
    countryCode: 'ST',
    type: 'Regional',
    hub: ['TMS'],
    fleetSize: 1,
    active: true
  },

  // 🇬🇶 赤道几内亚航空公司
  {
    code: 'GQ',
    prefix: '240',
    icao: 'GEA',
    name: { chinese: '赤道几内亚航空', english: 'EGA Ecuatoguineana' },
    country: '赤道几内亚',
    countryCode: 'GQ',
    type: 'Regional',
    hub: ['SSG'],
    fleetSize: 2,
    active: true
  },

  // 🇬🇧 英国航空公司 (按机队规模排序)
  {
    code: 'VS',
    prefix: '932',
    icao: 'VIR',
    name: { chinese: '维珍航空', english: 'Virgin Atlantic' },
    country: '英国',
    countryCode: 'GB',
    type: 'FSC',
    hub: ['LHR', 'LGW', 'MAN'],
    fleetSize: 45,
    active: true,
    isIata: true
  },
  {
    code: 'BA',
    prefix: '125',
    icao: 'BAW',
    name: { chinese: '英国航空', english: 'British Airways' },
    country: '英国',
    countryCode: 'GB',
    type: 'FSC',
    alliance: 'Oneworld',
    hub: ['LHR', 'LGW'],
    fleetSize: 273,
    active: true,
    isIata: true
  },
  {
    code: 'D0',
    prefix: '936',
    icao: 'DHK',
    name: { chinese: 'DHL航空', english: 'DHL Air' },
    country: '英国',
    countryCode: 'GB',
    type: 'Cargo',
    hub: ['EMA', 'CVT'],
    fleetSize: 35,
    active: true,
    isIata: true
  },
  {
    code: 'T3',
    prefix: '467',
    icao: 'EZE',
    name: { chinese: '东方航空公司', english: 'Eastern Airways' },
    country: '英国',
    countryCode: 'GB',
    type: 'Regional',
    hub: ['HUY', 'ABZ'],
    fleetSize: 28,
    active: true,
    isIata: true
  },
  {
    code: 'LM',
    prefix: '682',
    icao: 'LOG',
    name: { chinese: '洛根航空', english: 'Loganair' },
    country: '英国',
    countryCode: 'GB',
    type: 'Regional',
    hub: ['GLA', 'EDI'],
    fleetSize: 43,
    active: true,
    isIata: true
  },
  {
    code: 'YG',
    prefix: '860',
    icao: 'HYT',
    name: { chinese: '圆通航空', english: 'YTO Cargo Airlines' },
    country: '中国',
    countryCode: 'CN',
    type: 'Cargo',
    hub: ['HGH', 'TSN'],
    fleetSize: 18,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'TW',
    prefix: '722',
    icao: 'TWB',
    name: { chinese: 'T\'way航空', english: 'T\'way Air' },
    country: '韩国',
    countryCode: 'KR',
    type: 'LCC',
    hub: ['ICN'],
    fleetSize: 34,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: 'KJ',
    prefix: '994',
    icao: 'AIH',
    name: { chinese: '仁川航空', english: 'Air Incheon' },
    country: '韩国',
    countryCode: 'KR',
    type: 'Cargo',
    hub: ['ICN'],
    fleetSize: 8,
    active: true,
    isIata: true  // ✅ IATA成员 - 新增
  },

  // 🇰🇵 朝鲜航空公司
  {
    code: 'JS',
    prefix: '120',
    icao: 'KOR',
    name: { chinese: '高丽航空', english: 'Air Koryo' },
    country: '朝鲜',
    countryCode: 'KP',
    type: 'FSC',
    hub: ['FNJ'],
    fleetSize: 15,
    active: true,
    isIata: true  // ✅ IATA成员 - 新增
  },

  // 🇵🇭 菲律宾航空公司
  {
    code: 'PR',
    prefix: '079',
    icao: 'PAL',
    name: { chinese: '菲律宾航空', english: 'Philippine Airlines' },
    country: '菲律宾',
    countryCode: 'PH',
    type: 'FSC',
    hub: ['MNL'],
    fleetSize: 82,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '5J',
    prefix: '203',
    icao: 'CEB',
    name: { chinese: '宿务太平洋航空', english: 'Cebu Pacific' },
    country: '菲律宾',
    countryCode: 'PH',
    type: 'LCC',
    hub: ['MNL', 'CEB'],
    fleetSize: 78,
    active: true,
    isIata: true  // ✅ IATA成员
  },
  {
    code: '2P',
    prefix: '211',
    icao: 'GAP',
    name: { chinese: 'PAL快运', english: 'PAL Express' },
    country: '菲律宾',
    countryCode: 'PH',
    type: 'Regional',
    hub: ['MNL'],
    fleetSize: 25,
    active: true,
    isIata: true  // ✅ IATA成员
  },

  // 🇨🇦 加拿大航空公司
  {
    code: 'WS',
    prefix: '838',
    icao: 'WJA',
    name: { chinese: '西捷航空', english: 'WestJet' },
    country: '加拿大',
    countryCode: 'CA',
    type: 'LCC',
    hub: ['YYC'],
    fleetSize: 180,
    active: true,
    isIata: true  // ✅ IATA成员
  },
];

// 搜索函数 - 支持提单号、航司代码、中英文名称搜索
export function searchAirlines(query: string): Airline[] {
  if (!query || query.length < 1) return [];

  const normalizedQuery = query.toLowerCase().trim();

  // 🌍 新增：智能国家名搜索 - 支持中文、英文、代码搜索
  const matchedCountries = searchCompleteCountries(query);
  
  if (matchedCountries.length > 0) {
    // 特殊处理：如果是2字符查询且可能是国家代码，优先精确匹配
    const isPossibleCountryCode = normalizedQuery.length === 2 && /^[a-z]+$/.test(normalizedQuery);
    
    let relevantCountries = matchedCountries;
    if (isPossibleCountryCode) {
      // 对于可能的国家代码，优先选择精确匹配的国家
      const exactCodeMatches = matchedCountries.filter((country: any) => 
        country.code.toLowerCase() === normalizedQuery
      );
      
      if (exactCodeMatches.length > 0) {
        relevantCountries = exactCodeMatches;
      }
    }
    
    // 如果找到匹配的国家，搜索所有属于这些国家的航司
    const countrySearchResults = AIRLINES.filter(airline => {
      // 检查是否匹配任何找到的国家
      return relevantCountries.some((country: any) => 
        airline.country.includes(country.chinese) || 
        airline.country.toLowerCase().includes(country.english.toLowerCase()) ||
        airline.countryCode.toLowerCase() === country.code.toLowerCase()
      );
    });
    
    if (countrySearchResults.length > 0) {
      // 如果是纯国家搜索，优先返回国家搜索结果（包括别名匹配）
      const isCountryOnlySearch = relevantCountries.some((country: any) => {
        // 精确匹配
        if (country.chinese === query.trim() || 
            country.english.toLowerCase() === normalizedQuery ||
            country.code.toLowerCase() === normalizedQuery) {
          return true;
        }
        
                 // 🔥 新增：别名匹配检查
         const countryAlias = COUNTRY_ALIASES.find(alias => alias.standard === country.chinese);
         if (countryAlias) {
           return countryAlias.aliases.some((alias: string) => 
             alias.toLowerCase() === normalizedQuery || 
             normalizedQuery === alias.toLowerCase()
           );
         }
        
        return false;
      });
      
      if (isCountryOnlySearch) {
        return countrySearchResults.sort((a, b) => {
          // IATA成员优先排序
          const aIsIata = a.isIata !== false;
          const bIsIata = b.isIata !== false;
          if (aIsIata && !bIsIata) return -1;
          if (!aIsIata && bIsIata) return 1;
          // 按机队规模排序
          return (b.fleetSize || 0) - (a.fleetSize || 0);
        });
      }
    }
  }

  return AIRLINES.filter(airline => {
    // 如果是短查询（国家代码等），优先精确匹配
    if (normalizedQuery.length <= 2) {
      return (
        // 国家代码精确匹配 - 最高优先级 (如: CN, JP, US, TL)
        airline.countryCode.toLowerCase() === normalizedQuery ||
        // 航司代码匹配 (如: MU, CZ, CA)
        airline.code.toLowerCase().includes(normalizedQuery) ||
        // 提单号前缀匹配 (如: 781, 784, 999)
        airline.prefix.includes(normalizedQuery) ||
        // 中文名称匹配 (如: 中国东方航空, 东方航空)
        airline.name.chinese.includes(normalizedQuery) ||
        // 国家名称匹配 (如: 中国, 日本)
        airline.country.includes(normalizedQuery) ||
        // ICAO代码匹配 - 降低优先级，只有在没有国家代码匹配时才考虑
        (airline.icao?.toLowerCase().includes(normalizedQuery) && 
         // 确保没有其他航司的国家代码匹配这个查询
         !AIRLINES.some(a => a.countryCode.toLowerCase() === normalizedQuery))
      );
    }

    // 长查询支持完整匹配
    return (
      // 航司代码匹配 (如: MU, CZ, CA)
      airline.code.toLowerCase().includes(normalizedQuery) ||
      // ICAO代码匹配 (如: CES, CSN, CCA)
      airline.icao?.toLowerCase().includes(normalizedQuery) ||
      // 提单号前缀匹配 (如: 781, 784, 999)
      airline.prefix.includes(normalizedQuery) ||
      // 中文名称匹配 (如: 中国东方航空, 东方航空)
      airline.name.chinese.includes(normalizedQuery) ||
      // 英文名称匹配 (如: China Eastern Airlines, Eastern) - 只对长查询开放
      airline.name.english.toLowerCase().includes(normalizedQuery) ||
      // 国家名称匹配 (如: 中国, 日本)
      airline.country.includes(normalizedQuery) ||
      // 国家代码匹配 (如: CN, JP, US)
      airline.countryCode.toLowerCase().includes(normalizedQuery)
    );
  }).sort((a, b) => {
    // 🥇 1. IATA成员最优先排序 - 所有IATA成员排在非IATA成员前面
    const aIsIata = a.isIata !== false; // 默认为true，只有明确设置为false才是非IATA
    const bIsIata = b.isIata !== false;
    if (aIsIata && !bIsIata) return -1;
    if (!aIsIata && bIsIata) return 1;

    // 2. 在相同IATA状态下，优先显示完全匹配航司代码的结果
    const aCodeExactMatch = a.code.toLowerCase() === normalizedQuery;
    const bCodeExactMatch = b.code.toLowerCase() === normalizedQuery;
    if (aCodeExactMatch && !bCodeExactMatch) return -1;
    if (!aCodeExactMatch && bCodeExactMatch) return 1;

    // 3. 优先显示完全匹配提单号的结果
    const aPrefixExactMatch = a.prefix === normalizedQuery;
    const bPrefixExactMatch = b.prefix === normalizedQuery;
    if (aPrefixExactMatch && !bPrefixExactMatch) return -1;
    if (!aPrefixExactMatch && bPrefixExactMatch) return 1;

    // 4. 优先显示航司代码开头匹配的结果
    const aCodeStartsWith = a.code.toLowerCase().startsWith(normalizedQuery);
    const bCodeStartsWith = b.code.toLowerCase().startsWith(normalizedQuery);
    if (aCodeStartsWith && !bCodeStartsWith) return -1;
    if (!aCodeStartsWith && bCodeStartsWith) return 1;

    // 5. 最后按机队规模排序
    return (b.fleetSize || 0) - (a.fleetSize || 0);
  });
}

// 按国家查找航空公司 - 支持中国统一搜索
export function findAirlinesByCountry(country: string): Airline[] {
  if (!country) return [];

  const normalizedCountry = country.toLowerCase().trim();

  let airlines = AIRLINES.filter(airline => {
    // 常规匹配
    const basicMatch = airline.country.toLowerCase().includes(normalizedCountry) ||
                       airline.countryCode.toLowerCase() === normalizedCountry;
    
    // 特殊处理：搜索"中国"时包含港澳台地区
    if (normalizedCountry === '中国' || normalizedCountry === 'china' || normalizedCountry === 'cn') {
      const isChinaRelated = airline.country === '中国' ||
                            airline.country === '中国香港' ||
                            airline.country === '中国澳门' ||
                            airline.country === '中国台湾';
      return basicMatch || isChinaRelated;
    }
    
    return basicMatch;
  });

  // 为港澳台航司添加地区标识
  airlines = airlines.map(airline => {
    if (normalizedCountry === '中国' || normalizedCountry === 'china' || normalizedCountry === 'cn') {
      if (airline.country === '中国香港' || airline.country === '中国澳门' || airline.country === '中国台湾') {
        return {
          ...airline,
          displayCountry: airline.country // 保持原有的地区标识
        };
      }
    }
    return airline;
  });

  return airlines.sort((a, b) => {
    // 1. 中国大陆航司优先显示
    if (normalizedCountry === '中国' || normalizedCountry === 'china' || normalizedCountry === 'cn') {
      const aIsMainland = a.country === '中国';
      const bIsMainland = b.country === '中国';
      if (aIsMainland && !bIsMainland) return -1;
      if (!aIsMainland && bIsMainland) return 1;
      
      // 港澳台内部排序：香港 > 台湾 > 澳门
      if (!aIsMainland && !bIsMainland) {
        const regionOrder = { '中国香港': 1, '中国台湾': 2, '中国澳门': 3 };
        const aOrder = regionOrder[a.country as keyof typeof regionOrder] || 4;
        const bOrder = regionOrder[b.country as keyof typeof regionOrder] || 4;
        if (aOrder !== bOrder) return aOrder - bOrder;
      }
    }

    // 2. IATA成员优先排序
    const aIsIata = a.isIata !== false;
    const bIsIata = b.isIata !== false;
    if (aIsIata && !bIsIata) return -1;
    if (!aIsIata && bIsIata) return 1;

    // 3. 按机队规模排序
    return (b.fleetSize || 0) - (a.fleetSize || 0);
  });
}

// 按代码查找航空公司
export function findAirlineByCode(code: string): Airline | undefined {
  if (!code) return undefined;

  const normalizedCode = code.toUpperCase().trim();

  return AIRLINES.find(airline =>
    airline.code === normalizedCode || airline.icao === normalizedCode
  );
}

// 获取所有航空公司国家列表
export function getAllAirlineCountries(): string[] {
  const countries = [...new Set(AIRLINES.map(airline => airline.country))];
  return countries.sort();
}

// 获取航空公司统计信息
export function getAirlineStatistics() {
  const totalAirlines = AIRLINES.length;
  const activeAirlines = AIRLINES.filter(airline => airline.active).length;
  const inactiveAirlines = totalAirlines - activeAirlines;

  const typeStats = AIRLINES.reduce((acc, airline) => {
    acc[airline.type] = (acc[airline.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const allianceStats = AIRLINES.reduce((acc, airline) => {
    if (airline.alliance) {
      acc[airline.alliance] = (acc[airline.alliance] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const countryStats = AIRLINES.reduce((acc, airline) => {
    acc[airline.country] = (acc[airline.country] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: totalAirlines,
    active: activeAirlines,
    inactive: inactiveAirlines,
    byType: typeStats,
    byAlliance: allianceStats,
    byCountry: countryStats
  };
}

// 按国家获取航空公司数量
export function getAirlineCountByCountry(country: string): number {
  if (!country) return 0;

  const normalizedCountry = country.toLowerCase().trim();

  return AIRLINES.filter(airline =>
    airline.country.toLowerCase().includes(normalizedCountry) ||
    airline.countryCode.toLowerCase() === normalizedCountry
  ).length;
}

// UI 颜色映射
export const AIRLINE_COLORS: Record<string, string> = {
  'FSC': 'bg-blue-100 text-blue-800',
  'LCC': 'bg-green-100 text-green-800',
  'Regional': 'bg-yellow-100 text-yellow-800',
  'Cargo': 'bg-purple-100 text-purple-800',
  'Charter': 'bg-gray-100 text-gray-800'
};

// 航空公司类型标签
export const AIRLINE_TYPE_LABELS: Record<string, string> = {
  'FSC': '全服务航空',
  'LCC': '低成本航空',
  'Regional': '区域航空',
  'Cargo': '货运航空',
  'Charter': '包机航空'
};

// 联盟颜色映射
export const ALLIANCE_COLORS: Record<string, string> = {
  'Star Alliance': 'bg-indigo-100 text-indigo-800',
  'Oneworld': 'bg-red-100 text-red-800',
  'SkyTeam': 'bg-cyan-100 text-cyan-800'
};
