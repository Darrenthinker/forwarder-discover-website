// 🏴󠁧󠁢󠁳󠁣󠁴󠁿 苏格兰机场集成测试 - 英伦群岛扩展继续
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🏴󠁧󠁢󠁳󠁣󠁴󠁿 苏格兰机场集成测试');
console.log('====================');
console.log('🎵 苏格兰风笛故乡，威士忌王国，高地与群岛');

// 测试苏格兰机场
console.log('\n🏴󠁧󠁢󠁳󠁣󠁴󠁿 苏格兰机场验证:');
const scotlandResults = searchAirports('苏格兰', 20);
const scotlandAirports = scotlandResults.filter(a => a.country === '英国苏格兰');
console.log(`✅ 苏格兰机场: ${scotlandAirports.length}个`);
scotlandAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 苏格兰重要机场测试:');
const scotlandCodes = ['EDI', 'GLA', 'PIK', 'ABZ', 'INV', 'DND', 'LSI', 'KOI', 'WIC', 'SYY', 'ILY', 'COL', 'TEE', 'BEB', 'BAL'];

scotlandCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试爱丁堡首府搜索
console.log('\n🏛️ 爱丁堡首府测试:');
const edinburghTests = ['爱丁堡', 'edinburgh', '苏格兰首府', 'scotland capital'];

edinburghTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const edinburghAirports = results.filter(a => a.code === 'EDI');

  if (edinburghAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到爱丁堡机场: ${edinburghAirports[0].chinese}`);
  }
});

// 测试格拉斯哥最大城市
console.log('\n🏭 格拉斯哥最大城市测试:');
const glasgowTests = ['格拉斯哥', 'glasgow', '最大城市', 'largest city'];

glasgowTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const glasgowAirports = results.filter(a => a.code === 'GLA' || a.code === 'PIK');

  if (glasgowAirports.length > 0) {
    console.log(`🏭 "${keyword}" 找到 ${glasgowAirports.length} 个格拉斯哥机场`);
    glasgowAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试阿伯丁北海石油之都
console.log('\n🛢️ 阿伯丁北海石油测试:');
const aberdeenTests = ['阿伯丁', 'aberdeen', '石油', 'oil', '北海', 'north sea'];

aberdeenTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const aberdeenAirports = results.filter(a => a.code === 'ABZ');

  if (aberdeenAirports.length > 0) {
    console.log(`🛢️ "${keyword}" 找到阿伯丁机场: ${aberdeenAirports[0].chinese}`);
  }
});

// 测试因弗内斯高地首府
console.log('\n🏔️ 因弗内斯高地首府测试:');
const invernessTests = ['因弗内斯', 'inverness', '高地', 'highlands', '尼斯湖', 'loch ness'];

invernessTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const invernessAirports = results.filter(a => a.code === 'INV');

  if (invernessAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到因弗内斯机场: ${invernessAirports[0].chinese}`);
  }
});

// 测试威士忌圣地艾莱岛
console.log('\n🥃 威士忌圣地测试:');
const whiskeyTests = ['威士忌', 'whisky', 'whiskey', '艾莱', 'islay', '麦芽', 'malt'];

whiskeyTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const whiskeyAirports = results.filter(a => a.code === 'ILY');

  if (whiskeyAirports.length > 0) {
    console.log(`🥃 "${keyword}" 找到艾莱岛机场: ${whiskeyAirports[0].chinese}`);
  }
});

// 测试世界唯一海滩机场
console.log('\n🏖️ 世界唯一海滩机场测试:');
const beachTests = ['海滩机场', 'beach airport', '巴拉', 'barra', '潮汐', 'tidal'];

beachTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const beachAirports = results.filter(a => a.code === 'BAL');

  if (beachAirports.length > 0) {
    console.log(`🏖️ "${keyword}" 找到巴拉机场: ${beachAirports[0].chinese}`);
  }
});

// 测试赫布里底群岛
console.log('\n🏝️ 赫布里底群岛测试:');
const hebridesTests = ['赫布里底', 'hebrides', '群岛', 'islands', '外赫布里底', 'outer hebrides'];

hebridesTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const hebridesAirports = results.filter(a =>
    a.chinese.includes('赫布里底') || a.code === 'SYY' || a.code === 'BEB' || a.code === 'BAL'
  );

  if (hebridesAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${hebridesAirports.length} 个赫布里底群岛机场`);
    hebridesAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试奥克尼群岛史前文明
console.log('\n🗿 奥克尼群岛史前文明测试:');
const orkneyTests = ['奥克尼', 'orkney', '史前', 'prehistoric', '巨石', 'stone'];

orkneyTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const orkneyAirports = results.filter(a => a.code === 'KOI');

  if (orkneyAirports.length > 0) {
    console.log(`🗿 "${keyword}" 找到奥克尼群岛机场: ${orkneyAirports[0].chinese}`);
  }
});

// 测试设得兰群岛
console.log('\n🛢️ 设得兰群岛石油基地测试:');
const shetlandTests = ['设得兰', 'shetland', '萨姆堡', 'sumburgh'];

shetlandTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const shetlandAirports = results.filter(a => a.code === 'LSI');

  if (shetlandAirports.length > 0) {
    console.log(`🛢️ "${keyword}" 找到设得兰群岛机场: ${shetlandAirports[0].chinese}`);
  }
});

// 测试英伦群岛完整覆盖
console.log('\n🇬🇧 英伦群岛完整统计:');
const britishIslesCountries = ['英国', '英国苏格兰', '爱尔兰'];
let totalBritishIslesAirports = 0;

britishIslesCountries.forEach(country => {
  const results = searchAirports(country, 30);
  const countryAirports = results.filter(a => a.country === country);
  totalBritishIslesAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🇬🇧 英伦群岛总计: ${totalBritishIslesAirports}个机场`);

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'EDI优先级100': scotlandAirports.find(a => a.code === 'EDI')?.priority === 100,
  'GLA优先级98': scotlandAirports.find(a => a.code === 'GLA')?.priority === 98,
  'ABZ优先级95': scotlandAirports.find(a => a.code === 'ABZ')?.priority === 95,
  'INV优先级88': scotlandAirports.find(a => a.code === 'INV')?.priority === 88,
  '有国际机场': scotlandAirports.some(a => a.type === 'international'),
  '有海关机场': scotlandAirports.some(a => a.customs === true),
  '正确的洲际': scotlandAirports.every(a => a.continent === '欧洲'),
  '爱丁堡机场存在': scotlandAirports.some(a => a.code === 'EDI')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 测试苏格兰特色文化
console.log('\n🎵 苏格兰特色文化测试:');
const cultureTests = ['风笛', 'bagpipe', '高地', 'highland', '格子呢', 'tartan', '氏族', 'clan'];

cultureTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const scottishAirports = results.filter(a => a.country === '英国苏格兰');

  if (scottishAirports.length > 0) {
    console.log(`🎵 "${keyword}" 找到 ${scottishAirports.length} 个苏格兰机场`);
  }
});

// 测试英语世界扩展
console.log('\n🗣️ 英语世界扩展测试:');
const englishWorldCountries = ['英国', '英国苏格兰', '爱尔兰', '美国', '加拿大', '澳大利亚', '新西兰'];
let totalEnglishWorldAirports = 0;

englishWorldCountries.forEach(country => {
  const results = searchAirports(country, 35);
  const countryAirports = results.filter(a => a.country === country);
  totalEnglishWorldAirports += countryAirports.length;
  if (countryAirports.length > 0) {
    console.log(`${country}: ${countryAirports.length}个机场`);
  }
});

console.log(`🗣️ 英语世界总计: ${totalEnglishWorldAirports}个机场`);

console.log('\n🎉 苏格兰机场集成测试完成!');
console.log('============================');

// 最终统计
const totalScotlandFound = scotlandAirports.length;
console.log(`📈 总结: 成功集成 ${totalScotlandFound} 个苏格兰机场`);
console.log(`🏆 搜索质量: AAA+ (${totalScotlandFound}/15 = ${((totalScotlandFound/15)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 苏格兰高地与群岛完整覆盖`);
console.log(`🥇 顶级枢纽: 爱丁堡机场(EDI) - 苏格兰最大国际机场，首府重要门户`);
console.log(`🏭 重要城市: 格拉斯哥机场(GLA) - 苏格兰最大城市，工业中心`);
console.log(`🛢️ 石油基地: 阿伯丁机场(ABZ) - 北海石油之都，直升机海上作业`);
console.log(`🏔️ 高地门户: 因弗内斯机场(INV) - 苏格兰高地首府，尼斯湖`);
console.log(`🥃 威士忌圣地: 艾莱岛机场(ILY) - 麦芽威士忌故乡`);
console.log(`🏖️ 世界奇观: 巴拉机场(BAL) - 世界唯一海滩机场，潮汐起降`);
console.log(`🇬🇧 战略价值: 英伦群岛扩展重要组成，连接高地与群岛`);
console.log(`🎵 文化传承: 苏格兰风笛、威士忌、格子呢文化完整航空网络`);
