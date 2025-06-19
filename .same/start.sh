#!/bin/bash

# 国际货运智能报价系统 - 自动启动脚本
echo "🚀 启动国际货运智能报价系统..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 未找到package.json，请确保在项目根目录运行"
    exit 1
fi

# 检查依赖是否安装
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    bun install
fi

# 启动开发服务器
echo "🌟 启动开发服务器..."
echo "📍 访问地址: http://localhost:3000"
echo "⏰ 等待编译完成..."

bun run dev
