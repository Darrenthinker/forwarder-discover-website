# 🚀 多项目开发完整指南

## 📋 项目概览

您现在拥有了一个完整的多项目开发环境，包含3个独立项目和一套管理工具。

### 🎯 项目列表
| 项目 | 端口 | 文件夹 | 功能 | 技术栈 |
|------|------|--------|------|--------|
| 项目1 | 3000 | freight-quote-system/ | 智能货运报价系统 | Next.js + 货运算法 |
| 项目2 | 3001 | payduty-deploy/ | 税金代付专家 | 静态HTML页面 |
| 项目3 | 3002 | project3-new-system/ | 新项目系统 | Next.js 15 + TypeScript |

### 🛠️ 管理工具
| 工具 | 文件 | 功能 |
|------|------|------|
| 端口检查器 | tools/port-checker.js | 检查端口占用情况 |
| 项目管理器 | tools/project-manager.js | 启动/停止/监控项目 |
| 一键启动 | tools/start-all.bat | 批量启动所有项目 |

## 🚀 快速开始

### 方法1: 一键启动所有项目
```bash
# 进入工具目录
cd tools

# 运行一键启动脚本
start-all.bat
```

### 方法2: 使用项目管理器
```bash
cd tools

# 检查端口状态
node port-checker.js

# 启动所有项目
node project-manager.js start-all

# 查看项目状态
node project-manager.js status

# 停止所有项目
node project-manager.js stop-all
```

### 方法3: 单独启动项目
```bash
# 启动项目1 (智能货运报价系统)
cd freight-quote-system
npm run dev

# 启动项目2 (税金代付专家)  
cd payduty-deploy
python -m http.server 3001

# 启动项目3 (新项目系统)
cd project3-new-system
npm run dev
```

## 🔧 开发工作流程

### 1. 日常开发流程
```bash
# 步骤1: 检查端口
cd tools
node port-checker.js

# 步骤2: 启动需要的项目
node project-manager.js start project3-new-system

# 步骤3: 开始开发
# 在浏览器中访问 http://localhost:3002

# 步骤4: 开发完成后停止项目
node project-manager.js stop project3-new-system
```

### 2. 多项目并行开发
```bash
# 启动所有项目
cd tools
node project-manager.js start-all

# 同时访问多个项目:
# http://localhost:3000 - 项目1
# http://localhost:3001 - 项目2  
# http://localhost:3002 - 项目3

# 监控项目状态
node project-manager.js status
```

### 3. 故障排除流程
```bash
# 如果端口被占用
node port-checker.js
# 根据输出的PID终止进程: taskkill /PID [PID] /F

# 如果项目启动失败
node project-manager.js status
# 检查项目状态和错误信息

# 重启特定项目
node project-manager.js stop project3-new-system
node project-manager.js start project3-new-system
```

## 📊 项目隔离机制

### ✅ 已实现的隔离
1. **物理隔离**: 每个项目独立文件夹
2. **端口隔离**: 3000, 3001, 3002 端口分配  
3. **依赖隔离**: 独立的package.json和node_modules
4. **配置隔离**: 独立的配置文件
5. **进程隔离**: 独立的Node.js进程

### ✅ 互不影响保证
- 修改项目1不会影响项目2和项目3
- 项目3的依赖更新不会影响项目1
- 任何一个项目崩溃不会影响其他项目
- 可以同时开发多个项目

## 🔍 管理工具详解

### 端口检查器 (port-checker.js)
```bash
# 检查所有端口占用情况
node port-checker.js

# 输出示例:
# ✅ 端口 3000 可用 - 项目1
# ❌ 端口 3002 被占用 - 项目3
#    占用进程: node.exe (PID: 12345)
#    终止命令: taskkill /PID 12345 /F
```

### 项目管理器 (project-manager.js)
```bash
# 查看帮助
node project-manager.js

# 启动所有项目
node project-manager.js start-all

# 停止所有项目  
node project-manager.js stop-all

# 查看项目状态
node project-manager.js status

# 启动特定项目
node project-manager.js start project3-new-system

# 停止特定项目
node project-manager.js stop project3-new-system

# 检查端口
node project-manager.js check-ports
```

## 🛠️ 开发最佳实践

### 1. 项目启动顺序建议
1. 先启动基础服务项目 (项目1)
2. 再启动依赖服务项目 (项目2)
3. 最后启动新开发项目 (项目3)

### 2. 端口使用规范
- 3000: 主要业务系统 (项目1)
- 3001: 辅助服务系统 (项目2)
- 3002: 新开发项目 (项目3)
- 3003-3004: 预留端口

### 3. 开发环境管理
```bash
# 开发前检查
cd tools && node port-checker.js

# 开发中监控
node project-manager.js status

# 开发后清理
node project-manager.js stop-all
```

### 4. 代码修改隔离
- 在项目3中开发新功能，不影响项目1和项目2
- 每个项目有独立的Git历史
- 可以并行进行不同版本的开发

## 🔧 常见问题解决

### 问题1: 端口被占用
**现象**: 启动时报错 "EADDRINUSE: address already in use"
**解决**: 
```bash
# 检查端口占用
node tools/port-checker.js

# 终止占用进程
taskkill /PID [进程ID] /F

# 重新启动项目
```

### 问题2: 项目3显示项目1内容
**原因**: 在错误的目录启动了服务
**解决**:
```bash
# 确保在正确的项目目录启动
cd project3-new-system
npm run dev

# 或使用项目管理器
cd tools
node project-manager.js start project3-new-system
```

### 问题3: 依赖冲突
**现象**: 模块版本不兼容错误
**解决**:
```bash
# 在对应项目目录下
rm -rf node_modules
npm cache clean --force  
npm install
```

### 问题4: 配置文件冲突
**现象**: 项目配置相互影响
**解决**:
```bash
# 检查每个项目的配置文件
# 确保使用项目内的相对路径
# 避免使用全局配置
```

## 📈 性能监控

### 项目状态监控
```bash
# 实时查看项目状态
node tools/project-manager.js status

# 输出示例:
# ✅ 项目3 - 新项目系统
#    端口: 3002 | 运行时间: 120秒 | PID: 12345
#    访问: http://localhost:3002
```

### 资源使用监控
- 通过任务管理器监控CPU和内存使用
- 监控端口占用情况
- 检查日志文件大小

## 🎯 成功验证清单

- [ ] 可以同时启动3个项目
- [ ] 每个项目使用不同端口
- [ ] 修改一个项目不影响其他项目
- [ ] 端口检查工具正常工作
- [ ] 项目管理工具正常工作
- [ ] 可以独立停止和启动项目
- [ ] 项目3显示正确的内容

## 🔮 未来扩展

### 新项目添加
1. 创建新的项目文件夹
2. 在tools/project-manager.js中添加项目配置
3. 分配新的端口号
4. 更新文档

### 自动化改进
- 添加健康检查
- 实现自动重启
- 添加日志收集
- 实现负载监控

---

**恭喜！** 🎉 您现在拥有了一个完全隔离的多项目开发环境，可以高效地并行开发多个项目而不会相互干扰。 