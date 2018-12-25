const renderData = function (data, type) {
  let str = '\<tr\>';
  for (let i = 0; i < data.length; i++) {
    str += '\<' + type + '\>' + data[i] + '\<\/' + type + '\>';
  }
  str += '\<\/tr\>';
  console.log('render str: ', str);
  return str;
}

/**
 * 初始化表格，以及更新表格
 * @param {Array} data 表格数据类型 [{title: 'th', data: []}]
 * @param {String} id 表格id
 */
const tableConstructor = function (data, id) {
  const tableDom = document.getElementsByClassName(id)[0];
  let str = '\<table cellspacing=\"0\" class=\".' + id + '\"\>';
  for (let i = 0; i < data.length; i++) {
    str += renderData(data[i].data, data[i].title);
  }
  str +='\<\/table\>';
  tableDom.innerHTML = str;
  console.log('str: ', str);
}

document.getElementsByClassName('add-drug-button')[0].addEventListener('click', function () {
  window.location = 'index.html';
});