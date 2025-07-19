# 🚀 智能货运报价系统

基于 Next.js 15 开发的智能货运报价系统，支持智能识别货物信息、精准计算重量体积、快速生成报价。

## 功能特点

- 🔍 智能识别37+种货运数据格式
- 📊 自动提取重量、体积、尺寸信息
- 🌍 支持全球1000+机场代码识别
- ⚡ 实时运费计算和报价生成
- 🤖 自动化测试和数据修复

## 快速开始

启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看系统。

## 项目结构

```
src/
├── app/          # Next.js 应用页面
├── components/   # React 组件
│   ├── cargo-input.tsx     # 货物信息输入组件
│   ├── quote-results.tsx   # 报价结果显示组件
│   └── ui/                 # 基础UI组件
└── lib/          # 工具库和数据
    ├── airport-codes.ts    # 机场代码数据库
    ├── cargo-parser.ts     # 货物信息解析器
    └── freight-rates.ts    # 运费计算逻辑
```

## 技术栈

- **框架**: Next.js 15 + React 18
- **样式**: Tailwind CSS + shadcn/ui
- **语言**: TypeScript
- **表单**: React Hook Form + Zod
- **构建**: Turbopack
