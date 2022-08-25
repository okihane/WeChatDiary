const axios = require("axios");
const { CONFIG } = require("../config/index");

/**
 * 获取token
 */
const getToken = async () => {
  const params = {
    grant_type: "client_credential",
    appid: CONFIG.APP_ID,
    secret: CONFIG.APP_SECRET,
  };

  const url = "https://api.weixin.qq.com/cgi-bin/token";

  return await axios.get(url, { params });
};

/**
 * 发送消息
 * @param {Object} content
 * @returns
 */
const sendMsg = async (content, userId) => {
  const token = (await getToken()).data.access_token;

  const data = {
    touser: userId,
    template_id: CONFIG.TEMPLATE_ID,
    data: content,
  };

  const url =
    "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" +
    token;
  await axios.post(url, data);
};

module.exports = {
  sendMsg,
};
