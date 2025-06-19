console.log('=== 测试台湾机场国际机场优先排序功能 ===');
console.log('');

// 模拟导入机场搜索功能
async function testTaiwanAirportSearch() {
  try {
    // 导入机场搜索模块
    const { searchAirports } = await import('./src/lib/airport-search.ts');

    console.log('🔍 测试搜索词: "台湾"');
    const results = searchAirports('台湾', 10);

    console.log(`📊 搜索结果总数: ${results.length}`);
    console.log('');

    console.log('🎯 详细搜索结果排序:');
    results.forEach((airport, index) => {
      const typeIcon = airport.type === 'international' ? '🟢' : '🔴';
      const priority = airport.priority || 50;

      console.log(`${index + 1}. ${typeIcon} ${airport.code} - ${airport.chinese} (${airport.english})`);
      console.log(`   类型: ${airport.type || '未定义'} | 优先级: ${priority} | 洲际: ${airport.continent}`);
      console.log(`   国家: ${airport.country} | 颜色: ${airport.displayColor}`);
      console.log('');
    });

    // 验证排序逻辑
    console.log('✅ 排序验证:');

    // 检查TPE是否排在前面
    const tpeIndex = results.findIndex(r => r.code === 'TPE');
    const tsaIndex = results.findIndex(r => r.code === 'TSA');

    if (tpeIndex !== -1 && tsaIndex !== -1) {
      if (tpeIndex < tsaIndex) {
        console.log('✅ TPE (台北桃园) 正确排在 TSA (台北松山) 前面');
      } else {
        console.log('❌ TPE 应该排在 TSA 前面，但实际排序不正确');
      }
    }

    // 检查国际机场是否都排在前面
    let internationalAirports = 0;
    let domesticAirports = 0;
    let lastInternationalIndex = -1;
    let firstDomesticIndex = -1;

    results.forEach((airport, index) => {
      if (airport.type === 'international') {
        internationalAirports++;
        lastInternationalIndex = index;
      } else {
        domesticAirports++;
        if (firstDomesticIndex === -1) {
          firstDomesticIndex = index;
        }
      }
    });

    console.log(`🟢 国际机场数量: ${internationalAirports}`);
    console.log(`🔴 国内/其他机场数量: ${domesticAirports}`);

    if (firstDomesticIndex === -1 || lastInternationalIndex < firstDomesticIndex) {
      console.log('✅ 国际机场正确排在国内机场前面');
    } else {
      console.log('❌ 排序错误：发现国内机场排在国际机场前面');
    }

    // 特别检查主要台湾机场的排序
    const majorTaiwanAirports = ['TPE', 'KHH', 'RMQ', 'TSA', 'TNN'];
    console.log('');
    console.log('🌏 主要台湾机场排序检查:');

    majorTaiwanAirports.forEach(code => {
      const airport = results.find(r => r.code === code);
      if (airport) {
        const index = results.findIndex(r => r.code === code) + 1;
        const typeIcon = airport.type === 'international' ? '🟢' : '🔴';
        console.log(`${index}. ${typeIcon} ${code} - ${airport.chinese} (${airport.type || '未定义'})`);
      }
    });

  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  }
}

// 运行测试
testTaiwanAirportSearch();
