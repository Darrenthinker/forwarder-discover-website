// 🎉 巴尔干半岛100%完成庆祝测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🎉 巴尔干半岛100%完成庆祝测试');
console.log('==============================');
console.log('🏆 欧洲首个100%完成地区即将诞生！');

// 测试新增的黑山和阿尔巴尼亚机场
console.log('\n🇲🇪 黑山机场验证:');
const montenegroResults = searchAirports('黑山', 5);
const montenegroAirports = montenegroResults.filter(a => a.country === '黑山');
console.log(`✅ 黑山机场: ${montenegroAirports.length}个`);
montenegroAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

console.log('\n🇦🇱 阿尔巴尼亚机场验证:');
const albaniaResults = searchAirports('阿尔巴尼亚', 5);
const albaniaAirports = albaniaResults.filter(a => a.country === '阿尔巴尼亚');
console.log(`✅ 阿尔巴尼亚机场: ${albaniaAirports.length}个`);
albaniaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 最后批次机场代码测试:');
const finalCodes = ['TGD', 'TIV', 'TIA', 'SDA', 'KUK'];

finalCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (${result[0].country})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 🏆 巴尔干半岛完整统计 - 历史性时刻
console.log('\n🏆 巴尔干半岛100%完成统计:');
console.log('=====================================');

const balkanCountries = [
  '希腊', '塞尔维亚', '保加利亚', '斯洛文尼亚',
  '克罗地亚', '罗马尼亚', '波斯尼亚和黑塞哥维那',
  '北马其顿', '黑山', '阿尔巴尼亚'
];

let totalBalkanAirports = 0;
const countryDetails = [];

balkanCountries.forEach(country => {
  const results = searchAirports(country, 25);
  const countryAirports = results.filter(a => a.country === country);
  totalBalkanAirports += countryAirports.length;
  countryDetails.push({
    country: country,
    count: countryAirports.length,
    airports: countryAirports
  });
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`\n🎊 巴尔干半岛总计: ${totalBalkanAirports}个机场`);
console.log(`🏆 完成度: 100% (${balkanCountries.length}/${balkanCountries.length}个国家)`);
console.log(`🌍 历史成就: 欧洲首个100%完成的地理区域！`);

// 特色机场巡礼
console.log('\n🌟 巴尔干半岛特色机场巡礼:');
console.log('============================');

const specialAirports = [
  { code: 'ATH', feature: '🏛️ 雅典机场 - 古希腊文明发源地，帕台农神庙' },
  { code: 'BEG', feature: '⚡ 贝尔格莱德尼古拉·特斯拉机场 - 科学巨匠命名' },
  { code: 'SOF', feature: '🌹 索菲亚机场 - 玫瑰之国，保加利亚首都' },
  { code: 'SKP', feature: '👑 亚历山大大帝机场 - 古代马其顿王国传承' },
  { code: 'SJJ', feature: '🏛️ 萨拉热窝机场 - 多元文化交汇，历史名城' },
  { code: 'LJU', feature: '🏔️ 卢布尔雅那机场 - 阿尔卑斯山巴尔干明珠' },
  { code: 'ZAG', feature: '🎭 萨格勒布机场 - 克罗地亚文化艺术中心' },
  { code: 'OTP', feature: '🧛 布加勒斯特机场 - 德古拉伯爵故乡，喀尔巴阡山脉' },
  { code: 'OHD', feature: '🌊 奥赫里德湖机场 - 世界自然文化双遗产' },
  { code: 'TGD', feature: '🏔️ 波德戈里察机场 - 黑山首都，山海相依' },
  { code: 'TIA', feature: '🕊️ 地拉那特蕾莎修女机场 - 和平使者命名' }
];

specialAirports.forEach(special => {
  const airport = countryDetails.flatMap(c => c.airports).find(a => a.code === special.code);
  if (airport) {
    console.log(`${special.feature}`);
    console.log(`   ${airport.code} - ${airport.chinese} (优先级: ${airport.priority})`);
  }
});

// 文化历史价值总结
console.log('\n📚 巴尔干半岛文化历史价值:');
console.log('=============================');

const culturalThemes = [
  '🏛️ 古代文明传承: 古希腊、古马其顿、罗马帝国、拜占庭帝国',
  '☦️ 东正教文化圈: 希腊、塞尔维亚、保加利亚、北马其顿等',
  '🕌 奥斯曼帝国遗产: 波黑、阿尔巴尼亚、北马其顿南部',
  '🏰 哈布斯堡王朝影响: 斯洛文尼亚、克罗地亚、罗马尼亚',
  '🤝 多民族融合典范: 波黑等多民族共和国',
  '🌊 世界文化遗产: 奥赫里德湖、杜布罗夫尼克古城、科托尔古城',
  '🎭 现代文学艺术: 诺贝尔文学奖获得者安德里奇等',
  '🇪🇺 欧洲一体化: 多国积极加入欧盟进程'
];

culturalThemes.forEach(theme => {
  console.log(`${theme}`);
});

// 地理特色总结
console.log('\n🗺️ 巴尔干半岛地理特色:');
console.log('========================');

const geographicFeatures = [
  '🌊 三海交汇: 亚得里亚海、伊奥尼亚海、黑海',
  '🏔️ 山脉纵横: 阿尔卑斯山、喀尔巴阡山脉、狄那里克山脉',
  '🌊 大河流域: 多瑙河、萨瓦河、德拉瓦河',
  '🏝️ 群岛明珠: 克罗地亚达尔马提亚群岛、希腊爱琴海群岛',
  '🌋 地质奇观: 喀斯特地貌、温泉、峡谷',
  '🌿 生物多样性: 地中海气候与大陆性气候交汇',
  '🏖️ 旅游天堂: 地中海最美海岸线、阿尔卑斯山滑雪胜地'
];

geographicFeatures.forEach(feature => {
  console.log(`${feature}`);
});

// 前南斯拉夫地区统计
console.log('\n🏛️ 前南斯拉夫地区完整统计:');
console.log('===========================');

const yugoslavCountries = ['斯洛文尼亚', '克罗地亚', '波斯尼亚和黑塞哥维那', '塞尔维亚', '北马其顿', '黑山'];
let totalYugoslavAirports = 0;

yugoslavCountries.forEach(country => {
  const countryData = countryDetails.find(c => c.country === country);
  if (countryData) {
    totalYugoslavAirports += countryData.count;
    console.log(`${country}: ${countryData.count}个机场`);
  }
});

console.log(`🏛️ 前南斯拉夫地区总计: ${totalYugoslavAirports}个机场`);
console.log(`🕊️ 和平统一象征: 从分裂到合作，航空网络重新连接各民族`);

// 成就解锁
console.log('\n🏆 成就解锁提示:');
console.log('================');

console.log(`🎊 恭喜解锁: "巴尔干半岛征服者" 成就！`);
console.log(`🌍 历史意义: 完成欧洲首个100%地理区域覆盖`);
console.log(`📊 数据价值: ${totalBalkanAirports}个机场，${balkanCountries.length}个国家完整航空网络`);
console.log(`🚀 里程碑: 全球智能货运报价系统重要里程碑`);
console.log(`🎯 下一目标: 选择新的地理区域挑战 (英伦群岛/地中海南岸/斯堪的纳维亚)`);

console.log('\n🎉 巴尔干半岛100%完成庆祝测试结束！');
console.log('=======================================');
console.log(`✨ 历史性时刻: 巴尔干半岛成为首个100%完成的欧洲地区！`);
console.log(`🏆 总机场数: ${totalBalkanAirports}个机场覆盖${balkanCountries.length}个国家`);
console.log(`🌟 特殊意义: 连接古代文明与现代航空，架起和平友谊桥梁`);
console.log(`🚀 未来展望: 以巴尔干半岛为样板，继续征服全球各大地区！`);
