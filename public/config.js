// 配置
window.Config = {

  // 显示标题
  SiteName: '混沌分裂者网站状态监控系统',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2234419-d4e44a883f2cc8f9fde948d9',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://zt.ci-wiki.cn/'
    },
    {
      text: '中文站首页',
      url: 'http://ci-cn-wiki.wikidot.com/'
    },
  ],
};
