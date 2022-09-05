const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx161b70074d297e61",

  // 微信公众号的appsecret
  APP_SECRET: "a861a605f1e81cc2ecc6ac658a984a4b",

  // 微信公众号的模板ID
  TEMPLATE_ID: "z6eCxzryYPMmI-y0yD0PT0zmIHllFEl4OSVbLvuxrBo",

  // 天行API的key
  TXApiKey: "a6740bc32d75260e46a7d56644c79f34",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "林茂利",
      // 用户列表的`微信号`
      userId: "oslpx6IxdHpo9socr7o0NZB3xoMM",
      // 星座
      star: "金牛座",
      // 生日 - 格式：05-09
      birthday: "05-09",
      // 城市 - 格式：支持省市县区
      city: "仁怀市",
    },
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "雷鹏",
      // 用户列表的`微信号`
      userId: "oslpx6Ls2cQijNqMdUt_Y7cDW6UU",
      // 星座
      star: "白羊座",
      // 生日 - 格式：05-09
      birthday: "04-03",
      // 城市 - 格式：支持省市县区
      city: "兴仁县",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2017-09-01",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: false,
    // 健康小提示
    healthtip: false,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
