## Ako酱我的个人网站

### 先给自己定个小目标 我先挣他一个亿 \(｡・`ω´･\) 笑～
 * 开始着手购买服务器与域名把家搬到云上～
 * 继续美化markdown的页面风格,准备美化列表
 * 给网站加一些图标  
 * 添加读取数据时候的loding页面
 * 准备给网站换视觉图和风格
 * 给服务器端换上es6语法
 * 使用react服务器端渲染！
 * 对404.html的改动设想
   1. 变成一本像素书 可以绘画可以翻页小精灵图鉴的那种(很难。。)
   2. 增加转黑白画模式
   3. 增加自己画笔选色 和背景图选色
   4. 增加导出制作的画的代码的按钮


### 更新日志
#### 1.0.0（2016-10-19）
 * 启动了我的个人网站
 * 启动了README.md

#### 1.0.1（2016-10-19）
 * 删掉PC端汉堡菜单 将网站左边侧边栏改为一直显示

#### 1.0.2 (2016-10-20)
 * 连上本地的express服务器和本地mongodb数据库
 * 增加后台系统写文章
 * 完成文章卡片标题下的时间(距离现在多久)
 * 修复了\<\b\r \/\>换行无法在jsx中显示的问题

#### 1.0.3 (2016-10-21)
 * 新增博客更新栏目
 * 开启文章具体页并写好第一篇文章
 * 修复文章具体页边框只在一屏内显示的bug
 * 把原来的item组件正式更名为Article组件

#### 1.0.4 (2016-10-24)
 * 修复文章显示顺序bug,现在可以正常倒序排列了
 * 修复contentmain区域存在两个的滚动条bug
 * 开启后端开发blog板块
 * 在mongoose中由一个model变成两个model并分别导出
 * 优化了react-router的结构
 * 增加了404.html页面，使用Redirect配合Route完成

#### 1.0.5 (2016-10-27)
 * 开始使用sass处理样式～
 * 为侧边栏增加选中效果
 * 改进了404.html把原本的背景图改为了像素画

#### 1.0.6 (2016-10-31)
 * 使用 media queries in Sass 的方法给404.html做断点自适应

#### 1.0.7 (2016-11-1)
 * 修复文章卡片标题下的时间如果跨一个月或一年会不正常显示的bug
 * 增加卡片标题下的时间在闰年时的逻辑

#### 1.0.8 (2016-11-3)
 * 增加了后台管理页面---修改文章页
 * 在后台管理页面上增加文章实时markdown转换
 * 使用loadsh解决marked方法传对象报警告---toString
 * 使用loadsh解决input或material-ui的TextField他们的defaultValue属性只读可以读到的第一个值即使state改变render后也不会再读其他值---isEmpty

#### 1.0.9 (2016-11-10)
 * 避免读取本地数据缓存---使用?${Math.random()}作为请求结尾
 * 使用路由嵌套和动态判断实现多层嵌套情况下触发activeClassName
 * 优化文章卡片标题下的时间
