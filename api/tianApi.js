/**
 * 天行API接口
 */
const { CONFIG } = require("../config/index");
const axios = require("axios");

// 创建axios实例
const request = axios.create({
  baseURL: "http://api.tianapi.com/",
  params: {
    key: CONFIG.TXApiKey,
  },
});

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.newslist[0];
    }
    return "接口错误";
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

/**
 * 天气预报
 * @returns {Object}
 */
const getWeather = async (city) => {
  const params = {
    city,
  };
  const url = "tianqi/index";
  return await request.get(url, { params });
};

/**
 * 星座运势
 * @returns {Object}
 */
const getStar = async (astro) => {
  const url = "http://api.tianapi.com/star/index";
  const params = {
    key: CONFIG.TXApiKey,
    astro,
  };

  const { data } = await axios.get(url, { params });

  if (data.code === 200) {
    return data.newslist;
  }
  if (data.code === 250) {
    return "请检查星座星座信息是否正确";
  }
  return "接口错误";
};

/**
 * 土味情话
 * @returns {Object}
 */
const getSaylove = async () => {
  const url = "saylove/index";
  return await request.get(url);
};

/**
 * 健康小提示
 * @returns {Object}
 */
const getHealthtip = async () => {
  const url = "healthtip/index";
  return await request.get(url);
};

/**
 * 毒鸡汤
 * @returns {Object}
 */
const getDuJiTang = async () => {
  const url = "dujitang/index";
  return await request.get(url);
};

/**
 * 早安心语
 * @returns {Object}
 */
const getZaoAn = async () => {
  const url = "zaoan/index";
  return await request.get(url);
};

/**
 * 晚安心语
 * @returns {Object}
 */
const getWanAn = async () => {
  const url = "wanan/index";
  return await request.get(url);
};

/**
 * 彩虹屁
 * @returns {Object}
 */
const getCaiHongPi = async () => {
  const url = "caihongpi/index";
  return await request.get(url);
};

module.exports = {
  getWeather,
  getStar,
  getSaylove,
  getHealthtip,
  getDuJiTang,
  getZaoAn,
  getWanAn,
  getCaiHongPi,
};
