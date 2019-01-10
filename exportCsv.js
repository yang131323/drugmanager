const fs = require('fs');

const basePath = 'E:\\myDevelopment\\hospitalManager\\hospitalFile\\';

let fileURL = basePath + `${Date.now()}.csv`;

const fileResult = fs.createWriteStream(fileURL, {encoding: 'utf8', autoClose: true});

fileResult.on('error', (e) => {
    console.log(e.message);
    throw new Error(e);
});

const exportTable = function (header, datas) {
  try {
    let str = '';
    for (let x in header) {
      if (x === 'edit' || x=== 'del') { continue; }
      str += header[x] + ',';
    }
    str += '\n';
    for (let i = 0; i < datas.length; i++) {
      for (let x in header) {
        if (x === 'edit' || x=== 'del') { continue; }
        str += datas[i][x] + ',';
      }
      str += '\n';
    }
    fileResult.write(str);
    // fileResult.end();
    console.log('file path is :' + fileURL);
    return fileURL;
  } catch (e) {
    console.log('exportCsv:' + e.message);
  }
}

// 客户端导出表格
// let funn = function () {
//   let html = '\<html\>\<head\>\<meta charset=\'utf-8\'\/\>\<head\>\<body\>' + document.getElementsByTagName('table')[0].outerHTML + '\<\/body\>\<\/html>';
//   let blob = new Blob([html], {type: 'application/vnd.ms-excel'});
//   let exportA = document.getElementById('export');
//   exportA.href = URL.createObjectURL(blob);
//   exportA.download='药品表格.xls';
// };
// funn();

module.exports = { exportTable }