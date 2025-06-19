# 🚀 自动启动配置

## 快速启动方法

### 方法1: 使用Node.js脚本 (推荐)
```bash
node start.js
```

### 方法2: 使用Bun脚本
```bash
bun auto-start.js
```

### 方法3: 使用Shell脚本
```bash
./.same/start.sh
```

### 方法4: 传统方式
```bash
bun run dev
```

## 配置文件说明

- `.same/config.json` - Same IDE配置
- `.same/auto-start.json` - 自动启动配置
- `start.js` - Node.js启动脚本
- `auto-start.js` - Bun启动脚本
- `.same/start.sh` - Shell启动脚本

## 期望效果

点开项目后，系统应该能自动识别配置并启动开发服务器，无需手动执行命令。

## 技术说明

项目使用Next.js + Bun + TypeScript，服务器运行在3000端口。配置了多种自动启动方案以确保兼容性。
