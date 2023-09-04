export default {
  title: 'AI Ultra', //站点标题
  cleanUrls: true,
  description: '人工智能服务平台', //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    lang: "zh-CN",
    siteTitle: "AI Ultra",
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "使用教程", link: "/guide/hello", activeMatch: "/guide/" },
      {
        text: "更多服务",
        items: [
          { text: 'GPT学术优化', link: 'https://aiutra.com/guide/academic-home'},
          { text: '集成开发平台', link: 'https://api.aiutra.com' },
          { text: 'AI Ultra 杂货铺', link: 'https://pay.aiutra.com' },
        ]
      },
      {
        text: "联系我们",
        items: [
          { text: '技术支持', link: '/jszc' },
          { text: '售后服务', link: '/shfw' },
          { text: '官方QQ群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=qHrlWP7Okj4oW3TrT9lE6FlUbQvoQGTS&jump_from=webapi&authKey=KZGx1EDgckH5IriGMdNyppPnawFGLSKQfdunBV8n1pv0akfX+yXDptMORGf9YIaT' },
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Kadxy/AI-Chat-Ultra" },
    ],

    footer: {
      copyright: "© 2023 AI Ultra."
    },
    
// vitepress 内置 search
    search: {
    provider: 'local'
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    
    // 定义仅在进入了guide专题后才显示侧边栏
      // collapsed设置默认是否收缩，true为默认收缩
     sidebar: {
      "/guide/": [
        {
          text: "快速开始",
          collapsed: false,  
          items: [
            { text: "欢迎使用", link: "/guide/hello" },
            { text: "功能介绍", link: "/guide/introduce" },
            { text: "下载App", link: "/guide/app" },
            { text: "套餐定价", link: "/guide/price" },
          ],
        },
        {
          text: "进阶教程",
          collapsed: false,
          items: [
             { text: "提示词库", link: "/guide/prompts" },
             { text: "绘图教程", link: "/guide/midjourney" },
             { text: "常见报错", link: "/guide/bugs" },
          ],
        },
        {
          text: "接口文档",
          collapsed: true,
          items: [
            { text: "注册登录", link: "/guide/api-a" },
            { text: "功能介绍", link: "/guide/api-b" },
            { text: "调用接口", link: "/guide/api-c" },
            { text: "问题排查", link: "/guide/api-d" },
            { text: "统一定价", link: "/guide/api-e" },
          ],
        },
        {
          text: "AI Ultra学术版",
          collapsed: true,
          items: [
            { text: "基本介绍", link: "/guide/academic-introduce" },
            { text: "开始使用", link: "/guide/academic-start" },
            { text: "进阶教程", link: "/guide/academic-advance" },
          ],
        },
        
      ],
    },
  }
}
