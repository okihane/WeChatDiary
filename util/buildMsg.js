const Util = require("./index");
const { CONFIG } = require("../config");
const TianApi = require("../api/tianApi");
/**
 * 组装天气数据
 * @param {Object} data
 * @param {String} city
 */
const buildWeatherInfo = async (data, city) => {
  if (CONFIG.plugins.weather) {
    // 接口1
    if (CONFIG.plugins.weatherType === 1) {
      const weatherData = await TianApi.getWeather(city);
      // 天气
      data["weather"] = {
        value: weatherData.weather,
        color: Util.getColor(),
      };
      // 现在温度
      data["real"] = {
        value: weatherData.real,
        color: Util.getColor(),
      };
      // 当天温度
      data["est"] = {
        value: weatherData.lowest + "-" + weatherData.highest,
        color: Util.getColor(),
      };
      // 风
      data["wind"] = {
        value: weatherData.wind + "：" + weatherData.windsc,
        color: Util.getColor(),
      };
      // 降雨概率
      data["pop"] = {
        value: weatherData.pop + "%",
        color: Util.getColor(),
      };
      // 生活指数
      data["tips"] = {
        value: weatherData.tips,
        color: Util.getColor(),
      };
    } else if (CONFIG.plugins.weatherType === 2) {
      // 接口2
      // TODO待开发
    }
  }
};

/**
 * 组装星座运势
 * @param {Object} data
 * @param {String} astro
 */
const buildAstro = async (data, astro) => {
  if (CONFIG.plugins.star) {
    const astroInfo = await TianApi.getStar(astro);
    data["astro"] = {
      value: astroInfo[astroInfo.length - 1].content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装土味情话
 * @param {Object} data
 */
const buildSaylove = async (data) => {
  if (CONFIG.plugins.saylove) {
    const saylove = await TianApi.getSaylove();
    data["saylove"] = {
      value: saylove.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装健康小提示
 * @param {Object} data
 */
const buildHealthtip = async (data) => {
  if (CONFIG.plugins.healthtip) {
    const healthtip = await TianApi.getHealthtip();
    data["healthtip"] = {
      value: healthtip.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装毒鸡汤
 * @param {Object} data
 */
const buildDuJiTang = async (data) => {
  if (CONFIG.plugins.duJiTang) {
    const duJiTang = await TianApi.getDuJiTang();
    data["duJiTang"] = {
      value: duJiTang.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装早安心语
 * @param {Object} data
 */
const buildZaoAn = async (data) => {
  if (CONFIG.plugins.zaoAn) {
    const zaoAn = await TianApi.getZaoAn();
    data["zaoAn"] = {
      value: zaoAn.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装晚安心语
 * @param {Object} data
 */
const buildWanAn = async (data) => {
  if (CONFIG.plugins.wanAn) {
    const wanAn = await TianApi.getWanAn();
    data["wanAn"] = {
      value: wanAn.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装彩虹屁
 * @param {Object} data
 */
const buildCaiHongPi = async (data) => {
  if (CONFIG.plugins.caiHongPi) {
    const caiHongPi = await TianApi.getCaiHongPi();
    data["caiHongPi"] = {
      value: caiHongPi.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 构建数据模板
 * @param {Object} data
 * @param {String} city 城市
 * @param {String} astro 星座
 */
const build = async (data, city, astro) => {
  await buildWeatherInfo(data, city);
  await buildAstro(data, astro);
  await buildSaylove(data);
  await buildHealthtip(data);
  await buildDuJiTang(data);
  await buildZaoAn(data);
  await buildWanAn(data);
  await buildCaiHongPi(data);
};

module.exports = { build };
