export default {
  base: process.env.NODE_ENV === 'production' ? '/yncc-ui-doc/' : '/',
  themeConfig: {
    siteTitle: "vitepress",
    nav: [
      { text: "指南", link: "/guild/" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/IMMYz/yncc-ui.git" },
    ],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button",
              link: "/components/button/",
            }
          ],
        }
      ]
    },

  },
};
