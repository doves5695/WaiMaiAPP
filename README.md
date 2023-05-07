# WaiMaiApp
vue外卖项目开发文档
## 1
    使用脚手架vue-cli搭建项目
    根据项目的需求分析,来在src目录下的page,components,common,mock,store,router下设置相应的文件和文件夹
    安装所需依赖
    准备项目当中的图片和图标(iconfont) // 并在index.html当中引入link
    引入stylus写样式
    将vue项目的功能组件化,分出几个大组件例如: home,search,order,profile
    引入vue-router,实现页面之间的相互跳转
    抽取组件,FooterGuide实现导航栏效果,抽取头部组件使用slot来实现组件通信标签结构
    启动后台服务,使用postman测试接口
    前后台交互使用ajax请求库,axios
    ajax请求函数的封装使用:axios + promise

## 2 
    完成登录注册界面,该功能可以切换登录方式
    手机号检查,和短信验证码使用容联云
    倒计时效果
    切换显示或者隐藏密码
    前台验证提示
    封装ajax请求函数封装每个接口对应的请求函数
    解决ajax的跨域问题
    引入vuex创建相应的模块
    设计state: 从后台读取数据
    实现actions, 流程发ajax获取数据,commit给mutaion
    实现mutations:给状态赋值
    实现index: 创建store对象
    main.js配置store
    在组件的mounted()通过$store.dispatch('actionName')来异步的获取后台数据到state中
    mapState(['xxx'])读取state中数据到组件中
    在模版中显示xxx的数据
    data: 自身的数据, props: 外部传入的数据, computed: 根据data/props
    前后台交互的相关问题,在vuex当中检查是否有数据
