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

module.exports = { exportTable }