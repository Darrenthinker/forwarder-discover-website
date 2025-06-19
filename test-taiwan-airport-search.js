// 测试台湾机场数据和排序逻辑
console.log('=== 测试台湾机场数据和国际机场优先排序 ===');
console.log('');

// 模拟亚洲机场数据（基于实际文件内容）
const asiaAirports = {
  // 台湾机场数据
  'TPE': { chinese: '台北桃园', english: 'Taipei Taoyuan', country: '中国台湾' },
  'TSA': { chinese: '台北松山', english: 'Taipei Songshan', country: '中国台湾' },
  'KHH': { chinese: '高雄', english: 'Kaohsiung', country: '中国台湾' },
  'RMQ': { chinese: '台中', english: 'Taichung', country: '中国台湾' },
  'TNN': { chinese: '台南', english: 'Tainan', country: '中国台湾' },
  'HUN': { chinese: '花莲', english: 'Hualien', country: '中国台湾' },
  'TTT': { chinese: '台东', english: 'Taitung', country: '中国台湾' },
  'KNH': { chinese: '金门', english: 'Kinmen', country: '中国台湾' },
  'LZN': { chinese: '南竿', english: 'Matsu Nangan', country: '中国台湾' },
  'MZG': { chinese: '马公', english: 'Magong', country: '中国台湾' }
};

// 模拟机场类型判断和排序逻辑
function getAirportTypeScore(code, chinese, english) {
  // 全球知名国际机场代码列表
  const knownInternationalCodes = [
    'TPE', 'KHH', 'RMQ', 'TXG', 'TTT', // 台湾主要国际机场
    'PEK', 'PVG', 'CAN', 'ICN', 'NRT', 'SIN' // 其他知名国际机场
  ];

  if (knownInternationalCodes.includes(code)) {
    return { score: 900, type: 'international', reason: '知名国际机场代码' };
  }

  if (chinese.includes('国际') || english.toLowerCase().includes('international')) {
    return { score: 800, type: 'international', reason: '名称包含"国际"' };
  }

  // 主要城市机场判断
  const majorCities = ['台北', '高雄', '台中', 'taipei', 'kaohsiung', 'taichung'];
  if (majorCities.some(city => chinese.includes(city) || english.toLowerCase().includes(city.toLowerCase()))) {
    return { score: 750, type: 'international', reason: '主要城市机场' };
  }

  return { score: 200, type: 'domestic', reason: '其他机场' };
}

// 货运机场排序数据
const cargoAirportRanking = {
  'TPE': 91,  // 台北桃园 - 台海货运枢纽
  'KHH': 85,  // 高雄 - 南台湾货运门户
  'RMQ': 82,  // 台中 - 中台湾货运中心
  'TSA': 78,  // 台北松山 - 低于桃园
  'TNN': 75   // 台南 - 地区货运
};

console.log('🌏 台湾机场详细分析:');
console.log('');

// 分析每个台湾机场
const taiwanAirportAnalysis = [];

Object.entries(asiaAirports).forEach(([code, info]) => {
  const typeInfo = getAirportTypeScore(code, info.chinese, info.english);
  const cargoScore = cargoAirportRanking[code] || 0;

  taiwanAirportAnalysis.push({
    code,
    chinese: info.chinese,
    english: info.english,
    typeScore: typeInfo.score,
    type: typeInfo.type,
    reason: typeInfo.reason,
    cargoScore,
    finalScore: typeInfo.score + cargoScore
  });
});

// 按照最终分数排序
taiwanAirportAnalysis.sort((a, b) => {
  // 首先按机场类型分数排序
  if (a.typeScore !== b.typeScore) {
    return b.typeScore - a.typeScore;
  }
  // 然后按货运分数排序
  return b.cargoScore - a.cargoScore;
});

// 显示分析结果
taiwanAirportAnalysis.forEach((airport, index) => {
  const typeIcon = airport.type === 'international' ? '🟢' : '🔴';

  console.log(`${index + 1}. ${typeIcon} ${airport.code} - ${airport.chinese} (${airport.english})`);
  console.log(`   机场类型: ${airport.type} (分数: ${airport.typeScore})`);
  console.log(`   判断依据: ${airport.reason}`);
  console.log(`   货运分数: ${airport.cargoScore}`);
  console.log(`   最终分数: ${airport.finalScore}`);
  console.log('');
});

console.log('✅ 排序验证结果:');

// 验证国际机场是否排在前面
const internationalAirports = taiwanAirportAnalysis.filter(a => a.type === 'international');
const domesticAirports = taiwanAirportAnalysis.filter(a => a.type === 'domestic');

console.log(`🟢 国际机场数量: ${internationalAirports.length}`);
console.log(`🔴 国内/地区机场数量: ${domesticAirports.length}`);

// 检查排序
let sortingCorrect = true;
let lastInternationalIndex = -1;
let firstDomesticIndex = -1;

taiwanAirportAnalysis.forEach((airport, index) => {
  if (airport.type === 'international') {
    lastInternationalIndex = index;
  } else {
    if (firstDomesticIndex === -1) {
      firstDomesticIndex = index;
    }
  }
});

if (firstDomesticIndex !== -1 && lastInternationalIndex > firstDomesticIndex) {
  sortingCorrect = false;
}

if (sortingCorrect) {
  console.log('✅ 排序正确：国际机场排在国内机场前面');
} else {
  console.log('❌ 排序错误：发现国内机场排在国际机场前面');
}

// 特别检查TPE vs TSA
const tpeIndex = taiwanAirportAnalysis.findIndex(a => a.code === 'TPE');
const tsaIndex = taiwanAirportAnalysis.findIndex(a => a.code === 'TSA');

if (tpeIndex < tsaIndex) {
  console.log('✅ TPE (台北桃园) 正确排在 TSA (台北松山) 前面');
} else {
  console.log('❌ TPE 应该排在 TSA 前面');
}

console.log('');
console.log('🎯 排序逻辑总结:');
console.log('1. 优先按机场类型分数排序 (国际机场 > 国内机场)');
console.log('2. 同类型内按货运重要性排序');
console.log('3. TPE作为知名国际机场代码获得最高优先级');
console.log('4. TSA虽然也是台北机场，但不在国际机场代码列表中');
console.log('');
console.log('🎉 台湾机场国际机场优先排序测试完成！');
