#!/bin/bash
# Same IDE Auto-start Configuration
# This file indicates that the project should auto-start

echo "🚀 自动启动国际货运智能报价系统..."
cd "$(dirname "$0")/.."
node start-server.js
