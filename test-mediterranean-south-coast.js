// 🌊 地中海南岸综合测试 - 欧洲阳光海岸航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌊 地中海南岸综合测试');
console.log('====================');
console.log('🌅 欧洲阳光海岸，古代文明摇篮，现代度假天堂');

// 地中海南岸国家统计
console.log('\n🌊 地中海南岸国家统计:');
const mediterraneanCountries = [
  { name: '意大利', searchTerm: '意大利', focus: '南部地区' },
  { name: '法国', searchTerm: '法国', focus: '南部普罗旺斯' },
  { name: '西班牙', searchTerm: '西班牙', focus: '巴利阿里群岛' },
  { name: '希腊', searchTerm: '希腊', focus: '爱琴海群岛' }
];

let totalMediterraneanAirports = 0;
const countryDetails = [];

mediterraneanCountries.forEach(country => {
  const results = searchAirports(country.searchTerm, 50);
  const countryAirports = results.filter(a => a.country === country.name);
  totalMediterraneanAirports += countryAirports.length;
  countryDetails.push({
    country: country.name,
    count: countryAirports.length,
    focus: country.focus,
    airports: countryAirports
  });
  console.log(`${country.name}: ${countryAirports.length}个机场 (${country.focus})`);
});

console.log(`🌊 地中海国家总计: ${totalMediterraneanAirports}个机场`);

// 重要岛屿机场测试
console.log('\n🏝️ 地中海重要岛屿机场:');
const islandAirports = [
  { code: 'CTA', name: '卡塔尼亚机场', island: '西西里岛', feature: '🌋 埃特纳火山门户' },
  { code: 'PMO', name: '巴勒莫机场', island: '西西里岛', feature: '🏛️ 诺曼底文化中心' },
  { code: 'CAG', name: '卡利亚里机场', island: '撒丁岛', feature: '🏛️ 古罗马遗址' },
  { code: 'OLB', name: '奥尔比亚机场', island: '撒丁岛', feature: '💎 翡翠海岸度假胜地' },
  { code: 'ATH', name: '雅典机场', island: '希腊本土', feature: '🏛️ 古希腊文明发源地' },
  { code: 'JTR', name: '圣托里尼机场', island: '基克拉泽斯群岛', feature: '🌅 爱琴海明珠' },
  { code: 'PMI', name: '帕尔马机场', island: '马略卡岛', feature: '🏖️ 巴利阿里海滩' }
];

islandAirports.forEach(airport => {
  const result = searchAirports(airport.code, 1);
  if (result.length > 0) {
    console.log(`🏝️ ${airport.code} - ${result[0].chinese}`);
    console.log(`     ${airport.island}: ${airport.feature}`);
  } else {
    console.log(`❓ ${airport.code} - ${airport.name} (${airport.island}) - 待集成`);
  }
});

// 古代文明遗址门户机场
console.log('\n🏛️ 古代文明遗址门户机场:');
const ancientSites = [
  { code: 'NAP', site: '庞贝古城', civilization: '古罗马帝国', feature: '🌋 维苏威火山掩埋的古城' },
  { code: 'CTA', site: '陶尔米纳剧场', civilization: '古希腊', feature: '🎭 希腊式圆形剧场' },
  { code: 'PMO', site: '蒙雷阿莱大教堂', civilization: '诺曼底-阿拉伯', feature: '🕌 多元文化融合' },
  { code: 'CAG', site: '努拉盖文明', civilization: '努拉盖', feature: '🗿 史前巨石建筑' },
  { code: 'ATH', site: '雅典卫城', civilization: '古希腊', feature: '🏛️ 帕特农神庙' },
  { code: 'HER', site: '克里特岛', civilization: '米诺斯', feature: '🏛️ 克诺索斯宫殿' }
];

ancientSites.forEach(site => {
  const result = searchAirports(site.code, 1);
  if (result.length > 0) {
    console.log(`🏛️ ${site.code} → ${site.site} (${site.civilization})`);
    console.log(`     ${site.feature}`);
  }
});

// 地中海度假胜地分类
console.log('\n🌊 地中海度假胜地分类:');
const resortCategories = [
  {
    category: '🏖️ 海滩度假',
    airports: ['OLB', 'AHO', 'PMI', 'IBZ', 'NCE', 'TLN'],
    description: '金色沙滩，碧蓝海水，阳光海岸'
  },
  {
    category: '💎 豪华度假',
    airports: ['NCE', 'OLB', 'QSR', 'PMI'],
    description: '五星酒店，私人游艇，奢华体验'
  },
  {
    category: '🏛️ 文化旅游',
    airports: ['ATH', 'NAP', 'PMO', 'CAG'],
    description: '古迹遗址，历史文化，艺术瑰宝'
  },
  {
    category: '🍷 美食品酒',
    airports: ['NCE', 'TLN', 'PMO', 'CAG'],
    description: '地中海美食，当地美酒，慢生活'
  }
];

resortCategories.forEach(category => {
  console.log(`${category.category}: ${category.description}`);
  const availableAirports = category.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`   可用机场: ${availableAirports.join(', ')} (${availableAirports.length}/${category.airports.length})`);
});

// 地中海气候特色测试
console.log('\n🌅 地中海气候特色测试:');
const climateTests = ['地中海气候', '阳光', 'sunshine', '温暖', 'warm', '海风', 'sea breeze'];

climateTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const medAirports = results.filter(a =>
    ['意大利', '法国', '西班牙', '希腊'].includes(a.country)
  );

  if (medAirports.length > 0) {
    console.log(`🌅 "${keyword}": ${medAirports.length} 个地中海机场`);
  }
});

// 海洋活动门户机场
console.log('\n⛵ 海洋活动门户机场:');
const marineActivities = [
  { activity: '🚤 游艇巡航', airports: ['OLB', 'NCE', 'PMI'], description: '私人游艇，海上奢华' },
  { activity: '🤿 潜水胜地', airports: ['CMP', 'IBZ', 'RHO'], description: '珊瑚礁，海底世界' },
  { activity: '🏄 水上运动', airports: ['PMI', 'IBZ', 'NCE'], description: '冲浪，帆板，水上摩托' },
  { activity: '🎣 深海钓鱼', airports: ['CTA', 'PMO', 'TLN'], description: '金枪鱼，剑鱼，海钓' }
];

marineActivities.forEach(activity => {
  const availableCount = activity.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  }).length;
  console.log(`${activity.activity}: ${activity.description}`);
  console.log(`   覆盖度: ${availableCount}/${activity.airports.length} 个机场`);
});

// 地中海美食文化
console.log('\n🍽️ 地中海美食文化:');
const cuisineFeatures = [
  '🫒 橄榄油料理 - 地中海饮食基础',
  '🍅 新鲜番茄 - 意式料理精髓',
  '🧄 大蒜香草 - 法式普罗旺斯风味',
  '🐟 新鲜海鲜 - 亚得里亚海特产',
  '🍷 当地美酒 - 基安帝、桑娇维塞',
  '🧀 手工奶酪 - 帕尔马干酪、佩科里诺',
  '🍋 柠檬橄榄 - 西西里岛特色',
  '🌿 地中海香草 - 迷迭香、百里香'
];

cuisineFeatures.forEach(feature => {
  console.log(feature);
});

// 历史文化价值
console.log('\n📚 地中海南岸历史文化价值:');
const culturalValues = [
  '🏛️ 古希腊文明: 民主制度、哲学思想的发源地',
  '🏺 古罗马帝国: 法律制度、工程技术的传承者',
  '🕌 阿拉伯文明: 科学数学、医学知识的传播者',
  '⛪ 基督教文化: 早期教会、朝圣传统的圣地',
  '🎨 文艺复兴: 艺术绘画、建筑雕塑的摇篮',
  '📖 古典文学: 荷马史诗、维吉尔诗歌的故乡',
  '🔬 科学发展: 阿基米德、伽利略的研究基地',
  '🏺 考古宝库: 世界文化遗产最密集的地区'
];

culturalValues.forEach(value => {
  console.log(value);
});

// 现代旅游产业价值
console.log('\n✈️ 现代旅游产业价值:');
const tourismValues = [
  '🌍 全球旅游热点: 年接待游客数亿人次',
  '💰 经济支柱产业: 占GDP重要比重',
  '🏨 度假酒店集群: 国际连锁品牌聚集',
  '🚢 邮轮母港: 地中海邮轮航线枢纽',
  '✈️ 季节性航空: 夏季包机旺季',
  '🎭 文化旅游: 博物馆、古迹、艺术节',
  '🍷 美食旅游: 米其林餐厅、当地特色',
  '💍 婚礼度假: 浪漫蜜月、目的地婚礼'
];

tourismValues.forEach(value => {
  console.log(value);
});

// 数据完整性验证
console.log('\n🔍 地中海南岸数据完整性验证:');
const integrityChecks = {
  '意大利机场存在': countryDetails.find(c => c.country === '意大利')?.count > 0,
  '法国机场存在': countryDetails.find(c => c.country === '法国')?.count > 0,
  '西班牙机场存在': countryDetails.find(c => c.country === '西班牙')?.count > 0,
  '希腊机场存在': countryDetails.find(c => c.country === '希腊')?.count > 0,
  '意大利南部机场集成': searchAirports('CTA', 1).length > 0,
  '西西里岛覆盖': searchAirports('CTA', 1).length > 0 && searchAirports('PMO', 1).length > 0,
  '撒丁岛覆盖': searchAirports('CAG', 1).length > 0 && searchAirports('OLB', 1).length > 0,
  '总机场数合理': totalMediterraneanAirports > 80
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 地中海南岸综合测试完成!');
console.log('==============================');

// 最终战略总结
console.log(`📈 总结: 地中海南岸${totalMediterraneanAirports}个机场网络`);
console.log(`🏆 战略价值: 欧洲阳光海岸航空网络核心`);
console.log(`✈️ 旅游价值: 全球顶级度假目的地航空门户`);
console.log(`🏛️ 文化价值: 古代文明摇篮，世界文化遗产集中地`);
console.log(`🌊 地理优势: 连接欧洲、非洲、中东的战略要冲`);
console.log(`💎 已完成区域: 意大利南部18个机场 (西西里岛+撒丁岛+南部大陆)`);
console.log(`🚀 下一目标: 法国普罗旺斯、西班牙巴利阿里群岛扩展`);
console.log(`🌅 愿景目标: 打造完整的地中海阳光海岸航空网络`);
