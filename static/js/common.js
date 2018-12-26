/**
 * 判断所需返回的时间格式
 * @param {String} oneFormat 日期格式
 * @param {String} twoFormat 时间格式
 * @returns {String} 返回时间格式模板
 */
let judgeFormat = function (oneFormat, twoFormat) {
  let yearFormat = oneFormat.trim().toUpperCase()
  let timeFormat = twoFormat.trim().toLowerCase()
  let allYearFormat = ['Y', 'M', 'D']
  let allTimeFormat = ['h', 'm', 's']
  let format = ''
  for (let i = 0; i < allYearFormat.length; i++) {
    if (yearFormat.indexOf(allYearFormat[i]) >= 0) {
      format = format ? `${format}-${allYearFormat[i]}` : allYearFormat[i]
    } else { break }
  }
  for (let i = 0; i < allTimeFormat.length; i++) {
    if (timeFormat.indexOf(allTimeFormat[i]) >= 0) {
      format = `${format}-${allTimeFormat[i]}`
    } else { break }
  }
  return format
}

let judgeNumber = function (num) {
  return num > 9 ? `${num}` : `0${num}`
}

/**
 * 进行Date格式化，默认返回年月日，2018-09-23两种格式的日期
 * 暂时未支持选择格式化方式，按需求返回相应格式化的日期
 * @param {Date} time 时间对象
 * @param {String = ''} oneFormat 所需日期格式
 * @param {String = ''} twoFormat 所需时间格式
 * @returns {Object} 返回两种时间格式类型
 */
const convert = function (time, oneFormat = '', twoFormat = '') {
  let format = judgeFormat(oneFormat, twoFormat)
  let t = new Date(time)
  let normalTime = t.getFullYear() + '年' + (t.getMonth() + 1) + '月'
  let globalTime = t.getFullYear() + '-' + judgeNumber(t.getMonth() + 1)
  switch (format) {
    case 'Y-M':
      return {
        _normal: normalTime,
        _global: globalTime
      }
    case 'Y-M-D':
      normalTime = normalTime + t.getDate() + '日'
      globalTime = globalTime + '-' + judgeNumber(t.getDate())
      break
    case 'Y-M-D-h':
      normalTime = normalTime + t.getDate() + '日 ' + t.getHours() + '时'
      globalTime = globalTime + '-' + judgeNumber(t.getDate()) + ' ' + judgeNumber(t.getHours())
      break
    case 'Y-M-D-h-m':
      normalTime = normalTime + t.getDate() + '日 ' + t.getHours() + '时' + t.getMinutes() + '分'
      globalTime = globalTime + '-' + judgeNumber(t.getDate()) + ' ' + judgeNumber(t.getHours()) + ':' + judgeNumber(t.getMinutes())
      break
    case 'Y-M-D-h-m-s':
      normalTime = normalTime + t.getDate() + '日 ' + t.getHours() + '时' + t.getMinutes() + '分' + t.getSeconds() + '秒'
      globalTime = globalTime + '-' + judgeNumber(t.getDate()) + ' ' + judgeNumber(t.getHours()) + ':' + judgeNumber(t.getMinutes()) + ':' + judgeNumber(t.getSeconds())
      break
    default:
      normalTime = normalTime + t.getDate() + '日 '
      globalTime = globalTime + '-' + judgeNumber(t.getDate())
      break
  }
  return {
    _normal: normalTime,
    _global: globalTime
  }
}

(function () {
  window._dateConvrt = convert;
})()

module.exports = { convert }
