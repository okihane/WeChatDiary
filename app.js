const WxApi = require("./api/wxApi");
const Util = require("./util");
const BuildMsg = require("./util/buildMsg");
const { CONFIG } = require("./config/index");
const TianApi = require("./api/tianApi");

// 主执行函数
(() => {
  CONFIG.user.forEach(async (item) => {
    // 封装发送数据
    const data = {
      // 用户名/昵称/网名
      username: {
        value: item.userName,
        color: Util.getColor(),
      },
      // 现在时间 格式：yyyy-mm-dd 星期
      nowDate: {
        value: Util.getNowDate(),
        color: Util.getColor(),
      },
      // 城市
      city: {
        value: item.city,
        color: Util.getColor(),
      },
      // 恋爱天数
      togetherDays: {
        value: Util.togetherDays(CONFIG.loveDay) + "天",
        color: Util.getColor(),
      },
      // 生日天数
      birthday: {
        value: Util.getBirthday(item.birthday) + "天",
        color: Util.getColor(),
      },
      // 旅游天数
      tourism: {
        value: Util.nextTourismDay(CONFIG.tourism) + "天",
        color: Util.getColor(),
      },
    };
    await BuildMsg.build(data, item.city, item.star);
    WxApi.sendMsg(data, item.userId);
  });
})();
