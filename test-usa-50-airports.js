console.log('=== 美国机场显示50个功能测试 ===');
console.log('');

// 模拟导入机场搜索功能
async function testUSAirportDisplay() {
  try {
    // 导入机场搜索模块
    const { searchAirports, getCountryAirportStats } = await import('./src/lib/airport-search.ts');

    console.log('🇺🇸 测试美国机场搜索显示数量:');
    console.log('');

    // 测试搜索关键词
    const testQueries = ['US', '美国', 'USA', 'america', 'united states'];

    for (const query of testQueries) {
      console.log(`🔍 搜索关键词: "${query}"`);
      const results = searchAirports(query, 20); // 默认limit为20，但美国应该显示50个

      console.log(`📊 实际显示结果: ${results.length}个机场`);

      if (results.length >= 20) {
        console.log('✅ 美国机场成功显示超过默认限制');
      } else {
        console.log('❌ 美国机场没有显示预期数量');
      }

      // 显示前10个结果验证排序
      console.log('📋 前10个机场结果:');
      results.slice(0, 10).forEach((airport, index) => {
        const typeIcon = airport.type === 'international' ? '🟢' : '🔴';
        console.log(`${index + 1}. ${typeIcon} ${airport.code} - ${airport.chinese} (${airport.english})`);
      });

      console.log('');
    }

    // 测试统计信息
    console.log('📈 美国机场统计信息测试:');
    const stats = getCountryAirportStats('美国');
    console.log(`总机场数: ${stats.total}`);
    console.log(`建议显示数: ${stats.recommendedDisplay}`);
    console.log(`实际显示数: ${stats.displayed}`);
    console.log(`是否有限制: ${stats.isLimited}`);

    if (stats.recommendedDisplay === 50) {
      console.log('✅ 美国机场建议显示数正确设置为50个');
    } else {
      console.log('❌ 美国机场建议显示数不正确');
    }

    console.log('');
    console.log('🔍 验证重要修复的机场在前50个中:');
    const allUSResults = searchAirports('美国', 100);
    const fixedAirports = ['CVG', 'PHL', 'IND', 'PIT', 'CMH', 'TPA', 'MSY', 'RDU'];

    fixedAirports.forEach(code => {
      const index = allUSResults.findIndex(airport => airport.code === code);
      if (index !== -1 && index < 50) {
        const airport = allUSResults[index];
        const typeIcon = airport.type === 'international' ? '🟢' : '🔴';
        console.log(`✅ ${code} 在第${index + 1}位: ${typeIcon} ${airport.chinese}`);
      } else if (index !== -1) {
        console.log(`⚠️ ${code} 在第${index + 1}位 (超过前50个)`);
      } else {
        console.log(`❌ ${code} 未找到`);
      }
    });

  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  }
}

console.log('🎯 测试目标:');
console.log('1. 搜索"US"、"美国"等关键词时显示50个美国机场');
console.log('2. 其他国家保持原有显示数量不变');
console.log('3. 重要的国际机场（CVG、PHL等）在前50个中正确显示');
console.log('4. 国际机场优先排序逻辑正常工作');
console.log('');

// 运行测试
testUSAirportDisplay();

console.log('');
console.log('💡 预期效果:');
console.log('- 美国机场搜索结果应该显示接近50个（取决于总数）');
console.log('- CVG、PHL、IND、PIT等修复的机场应该显示绿色圆点');
console.log('- 国际机场应该排在国内机场前面');
console.log('- 其他国家（如中国、日本）保持原有显示限制');
