#!/bin/bash
# 智能服务器启动脚本

echo "🚀 启动国际货运智能报价系统..."

# 清理可能存在的进程
pkill -f "next dev" 2>/dev/null || true
pkill -f "bunx next" 2>/dev/null || true

# 等待进程清理
sleep 2

# 检查依赖
if ! command -v bun &> /dev/null; then
    echo "❌ Bun 未安装，尝试使用 npm..."
    if command -v npm &> /dev/null; then
        npx next dev -H 0.0.0.0 -p 3000
    else
        echo "❌ 无可用的包管理器"
        exit 1
    fi
else
    echo "✅ 使用 Bun 启动服务器..."
    cd /home/project
    bun run dev
fi
