export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 新项目系统
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            完全独立的项目3 • 端口3002 • 与项目1和项目2完全物理隔离
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 项目信息卡片 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">项目3</h3>
              <p className="text-gray-600 mb-4">全新独立系统</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-700 font-medium">
                  端口: 3002
                </p>
              </div>
            </div>
          </div>

          {/* 独立性说明 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">完全隔离</h3>
              <p className="text-gray-600 mb-4">独立文件夹结构</p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-green-700 font-medium">
                  project3-new-system/
                </p>
              </div>
            </div>
          </div>

          {/* 技术栈 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">技术栈</h3>
              <p className="text-gray-600 mb-4">现代化开发</p>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm text-purple-700 font-medium">
                  Next.js + TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 项目对比表 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-6 bg-gray-50 border-b">
            <h2 className="text-2xl font-bold text-gray-900">项目对比</h2>
            <p className="text-gray-600 mt-2">三个项目完全独立，互不干扰</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    项目
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    端口
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    文件夹
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    功能
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">项目1</div>
                        <div className="text-sm text-gray-500">智能货运报价系统</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      3000
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    freight-quote-system/
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    货运报价计算
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      运行中
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💰</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">项目2</div>
                        <div className="text-sm text-gray-500">税金代付专家</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      3001
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    payduty-deploy/
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    税金代付服务
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      运行中
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">项目3</div>
                        <div className="text-sm text-gray-500">新项目系统</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      3002
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    project3-new-system/
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    待定义功能
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      开发中
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 开发说明 */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 项目3已成功创建！</h2>
            <p className="text-xl mb-6 opacity-90">
              完全独立的文件夹结构，确保与其他项目零冲突
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">✅ 独立端口</h3>
                <p className="text-sm opacity-90">使用端口3002，避免冲突</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">✅ 物理隔离</h3>
                <p className="text-sm opacity-90">独立文件夹project3-new-system/</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">✅ 现代技术栈</h3>
                <p className="text-sm opacity-90">Next.js 15 + TypeScript + Tailwind</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">✅ 零依赖冲突</h3>
                <p className="text-sm opacity-90">独立的package.json和node_modules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 