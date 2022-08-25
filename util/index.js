/**
 * 获取星期
 * @param {Date} date
 * @returns 星期几
 */
const getWeek = (date) => {
  switch (date.getDay()) {
    case 0:
      return "星期日";
    case 1:
      return "星期一";
    case 2:
      return "星期二";
    case 3:
      return "星期三";
    case 4:
      return "星期四";
    case 5:
      return "星期五";
    case 6:
      return "星期六";
    default:
      return "";
  }
};

/**
 * 获取当天零点的时间戳
 * @param {Date} date
 * @returns
 */
const getZeroTime = (date = new Date().toLocaleDateString()) => {
  return new Date(date).getTime();
};

/**
 * 计算天数
 * @param {*} startDate
 * @param {*} endDate
 */
const calculateDays = (startDate, endDate) => {
  return parseInt((endDate - startDate) / (1000 * 60 * 60 * 24));
};

/**
 * 获取当前时间 年-月-日 星期
 * @returns
 */
const getNowDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 >= 10
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1);
  const day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
  const week = getWeek(date);
  return `${year}-${month}-${day} ${week}`;
};

/**
 * 恋爱天数
 * @param {*} startDate 恋爱开始的时间，格式：yyyy-MM-dd
 */
const togetherDays = (startDate) => {
  startDate = new Date(startDate + " 00:00:00").getTime();

  const nowDate = getZeroTime();

  return calculateDays(startDate, nowDate);
};

/**
 * 生日天数
 * @param {*} birthday 格式：MM-dd
 */
const getBirthday = (birthday) => {
  const nowYear = new Date().getFullYear();
  birthday = nowYear + "-" + birthday + " 00:00:00";

  const birthdayTime = new Date(birthday).getTime();

  const nowTime = getZeroTime();

  if (nowTime <= birthdayTime) {
    return calculateDays(nowTime, birthdayTime);
  }

  let nextBirthday = 365 - calculateDays(birthdayTime, nowTime);

  if (nowYear / 4 == 0) {
    // 闰年366天
    nextBirthday++;
  }
  // 平年365天
  return nextBirthday;
};

/**
 * 旅游天数
 * @param {*} tourism 格式：yyyy-MM-dd
 * @returns
 */
const nextTourismDay = (tourism) => {
  const nowTime = getZeroTime();
  const tourismTime = new Date(tourism + " 00:00:00").getTime();
  if (nowTime > tourismTime) {
    return "旅游已完成，请继续下一次旅游吧";
  }
  return calculateDays(nowTime, tourismTime);
};

/**
 * 随机十六进制颜色
 * @returns
 */
const getColor = () => {
  //十六进制颜色随机
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color =
    "#" +
    (
      Array(6).join(0) +
      (r.toString(16) + g.toString(16) + b.toString(16))
    ).slice(-6);
  return color;
};

/**
 * 导出
 */
module.exports = {
  getNowDate,
  togetherDays,
  getBirthday,
  nextTourismDay,
  getColor,
};
