# 🚀 简单项目启动器

现在您有多种简单的方式来打开不同的项目：

## 方法1：直接启动脚本（最简单）

直接双击以下文件：
- `tools/project1.bat` - 打开项目1（智能货运报价系统）
- `tools/project2.bat` - 打开项目2（税金代付专家）  
- `tools/project3.bat` - 打开项目3（新项目系统）

## 方法2：智能启动器（支持多种输入）

在命令行中运行：
```bash
cd tools
smart-launcher.bat 1        # 打开项目1
smart-launcher.bat 项目1     # 打开项目1
smart-launcher.bat 货运      # 打开项目1

smart-launcher.bat 2        # 打开项目2
smart-launcher.bat 税金      # 打开项目2

smart-launcher.bat 3        # 打开项目3
smart-launcher.bat 项目3     # 打开项目3
```

## 方法3：VS Code命令（直接）

在任意位置打开命令行：
```bash
# 项目1
code C:\Users\Administrator\discover-website\freight-quote-system\project1.code-workspace

# 项目2  
code C:\Users\Administrator\discover-website\payduty-deploy\project2.code-workspace

# 项目3
code C:\Users\Administrator\discover-website\project3-new-system\project3.code-workspace
```

## 方法4：通过对话指令

现在您可以直接对我说：
- "打开项目1" 或 "项目1" 或 "货运"
- "打开项目2" 或 "项目2" 或 "税金" 
- "打开项目3" 或 "项目3" 或 "新项目"

我会自动为您执行对应的启动命令！

## 项目端口对应

- **项目1**：http://localhost:3000 （智能货运报价系统）
- **项目2**：http://localhost:3001 （税金代付专家）
- **项目3**：http://localhost:3002 （新项目系统）

## 注意事项

1. 每个项目都有独立的VS Code工作区
2. 文件浏览器只显示对应项目的文件
3. 终端会自动切换到正确的项目目录
4. 每个项目使用不同端口，不会冲突

现在操作就非常简单了！🎉 