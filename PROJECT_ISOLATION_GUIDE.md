# 🚀 项目隔离完整指南

## 🎯 当前问题分析

### ❌ 现状问题
1. **文件混杂**: 主目录包含多个项目的文件
2. **端口冲突**: 不同项目可能使用相同端口
3. **依赖冲突**: 共享node_modules导致版本冲突
4. **配置混合**: 配置文件相互影响

### ✅ 理想结构
```
workspace/
├── project1-freight-quote/     # 项目1: 智能货运报价系统
│   ├── package.json           # 独立依赖
│   ├── next.config.js         # 独立配置
│   ├── src/                   # 独立源码
│   └── node_modules/          # 独立依赖包
├── project2-payduty/          # 项目2: 税金代付专家
│   ├── package.json
│   ├── index.html
│   └── assets/
├── project3-new-system/       # 项目3: 新项目系统
│   ├── package.json
│   ├── src/
│   └── node_modules/
└── tools/                     # 共享工具和脚本
    ├── start-all.bat
    ├── project-manager.js
    └── port-checker.js
```

## 🔧 完整隔离方案

### 1. 端口分配策略
- **项目1**: 端口 3000 (智能货运报价系统)
- **项目2**: 端口 3001 (税金代付专家)
- **项目3**: 端口 3002 (新项目系统)
- **项目4**: 端口 3003 (预留)
- **项目5**: 端口 3004 (预留)

### 2. 文件夹命名规范
- `project[N]-[功能描述]/` 格式
- 例如: `project1-freight-quote/`
- 避免使用中文和特殊字符

### 3. 依赖管理策略
- 每个项目独立的 `package.json`
- 每个项目独立的 `node_modules`
- 避免全局依赖冲突

### 4. 配置文件隔离
- 每个项目独立的配置文件
- 使用项目前缀命名: `project1.config.js`
- 环境变量文件独立: `.env.project1`

## 🚀 实施步骤

### 步骤1: 创建新的项目结构
```bash
# 创建项目目录
mkdir projects
cd projects

# 创建各个项目文件夹
mkdir project1-freight-quote
mkdir project2-payduty  
mkdir project3-new-system
mkdir tools
```

### 步骤2: 迁移现有项目
```bash
# 迁移项目1 (货运报价系统)
mv freight-quote-system/* project1-freight-quote/

# 迁移项目2 (税金代付)
mv payduty-deploy/* project2-payduty/

# 项目3已经在 project3-new-system/
```

### 步骤3: 配置独立启动脚本
每个项目都有自己的启动脚本:
- `project1-freight-quote/start.bat`
- `project2-payduty/start.bat`  
- `project3-new-system/start.bat`

### 步骤4: 创建项目管理工具
- 端口检查工具
- 批量启动工具
- 项目状态监控

## 📋 开发工作流程

### 单项目开发
```bash
# 开发项目1
cd project1-freight-quote
npm install
npm run dev

# 开发项目2  
cd project2-payduty
python -m http.server 3001

# 开发项目3
cd project3-new-system
npm run dev
```

### 多项目并行开发
```bash
# 使用项目管理工具
cd tools
node project-manager.js start-all
```

## 🔍 端口管理

### 端口检查脚本
```javascript
// tools/port-checker.js
const net = require('net');

const ports = [3000, 3001, 3002, 3003, 3004];

ports.forEach(port => {
  const server = net.createServer();
  server.listen(port, (err) => {
    if (err) {
      console.log(`❌ 端口 ${port} 被占用`);
    } else {
      console.log(`✅ 端口 ${port} 可用`);
      server.close();
    }
  });
});
```

### 端口冲突解决
```bash
# 查看端口占用
netstat -ano | findstr :3000

# 终止占用进程
taskkill /PID [进程ID] /F
```

## 🛠️ 开发最佳实践

### 1. 项目启动顺序
1. 先检查端口是否可用
2. 启动基础服务项目
3. 启动依赖其他服务的项目

### 2. 代码管理
- 每个项目独立的Git分支
- 或者使用Git子模块
- 独立的版本控制

### 3. 环境变量管理
```bash
# 项目1环境变量
.env.project1

# 项目2环境变量  
.env.project2

# 项目3环境变量
.env.project3
```

### 4. 日志管理
- 每个项目独立的日志文件
- 统一的日志格式
- 日志轮转策略

## 🔧 故障排除

### 常见问题1: 端口冲突
**现象**: 启动时报错 "EADDRINUSE"
**解决**: 
1. 检查端口占用: `netstat -ano | findstr :端口号`
2. 终止占用进程: `taskkill /PID 进程ID /F`
3. 重新启动项目

### 常见问题2: 依赖冲突
**现象**: 模块版本不兼容
**解决**:
1. 删除node_modules: `rm -rf node_modules`
2. 清除缓存: `npm cache clean --force`
3. 重新安装: `npm install`

### 常见问题3: 配置文件冲突
**现象**: 项目配置相互影响
**解决**:
1. 检查配置文件路径
2. 确保每个项目使用独立配置
3. 使用绝对路径引用

## 📊 项目监控

### 项目状态检查
```javascript
// tools/project-status.js
const projects = [
  { name: '项目1', port: 3000, path: 'project1-freight-quote' },
  { name: '项目2', port: 3001, path: 'project2-payduty' },
  { name: '项目3', port: 3002, path: 'project3-new-system' }
];

projects.forEach(project => {
  // 检查项目状态
  checkProjectStatus(project);
});
```

### 性能监控
- CPU使用率
- 内存使用量
- 响应时间
- 错误率

## 🎯 成功指标

- ✅ 每个项目独立启动
- ✅ 端口无冲突
- ✅ 依赖无冲突  
- ✅ 配置无相互影响
- ✅ 可以并行开发
- ✅ 修改一个项目不影响其他项目

## 🔮 未来扩展

### 自动化部署
- Docker容器化
- CI/CD流水线
- 自动化测试

### 微服务架构
- API网关
- 服务发现
- 负载均衡

---

**记住**: 项目隔离的核心是**物理分离 + 逻辑独立**，确保每个项目都是完全自包含的单元。 