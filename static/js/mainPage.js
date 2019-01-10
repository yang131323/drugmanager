const mainButton = document.querySelectorAll('.hospital-menu>li');

let recordState = {
  index: 6,
  color: '#00FFFF'
};

const allPageIndex = {
  reserve: ['name', 'vender', 'specification', 'edate', 'reserve', 'price', 'linkman', 'address', 'phone', 'usag', 'id', 'edit', 'del'],
  output: ['name', 'vender', 'specification', 'odate', 'quantity', 'id', 'edit', 'del'],
  store: ['name', 'vender', 'specification', 'sdate', 'quantity', 'id', 'edit', 'del'],
  purchase: ['name', 'vender', 'specification', 'pdate', 'linkman', 'address', 'phone', 'quantity', 'id', 'edit', 'del'],
  expired: ['name', 'vender', 'specification', 'odate', 'quantity', 'id', 'edit', 'del']
}

const addListen = function () {
  const allFun = {
    0: 'login',
    1: 'addDrug',
    2: 'storage',
    3: 'output',
    4: 'purchase',
    5: 'expired',
    6: 'reserve'
  };
  for (let i = 0; i < mainButton.length; i++) {
    mainButton[i].addEventListener('click', () => {
      if (recordState.index === i) { return; }
      if (recordState.index) { mainButton[recordState.index].style.color = '#fff'; }
      mainButton[i].style.color = recordState.color;
      recordState.index = i;
      window.location = allFun[i];
    });
  }
  if(mainButton[recordState.index]) { mainButton[recordState.index].style.color = recordState.color; }
};

function delOperate (item, url, type = true) {
  let dom = null;
  if (type) {
    dom = item.previousElementSibling.previousElementSibling
  } else {
    dom = item.previousElementSibling;
  }
  console.log('del', dom.innerText);
  window.location = url + '?' + 'id=' + dom.innerText;
}

function editOperate (item, page, num, url) {
  const idDom = item.parentElement.children;
  const text = item.innerText;
  let content = '';
  for (let i = 0; i < idDom.length; i++) {
    if (idDom[i].innerText === text) {
      content = allPageIndex[page][i];
    }
  }
  console.log(content, text);
  console.log('edit', idDom[num].innerText);
  window.location = url + '?' + 'id=' + idDom[num].innerText + '&' + content + '=' + text;
}

function saleDrug (item, url) {
  const dom = item.previousElementSibling;
  window.location = url + '?' + 'id=' + dom.innerText;
}

function exportExcel(url, type = 'export') {
  window.location = url + '?type=' + type;
}

function exportClient (tableId, tableName) {
  const dom = document.getElementById(tableId);
  const excelTemplate = `<html><head><meta charset="utf-8"></head><body>${dom.outerHTML}</body></html>`;
  const bolb = new Blob([excelTemplate], {type: 'application/vnd.ms-excel'});
  const exportURL = document.getElementById('export-button-excel');
  exportURL.href = URL.createObjectURL(bolb);
  exportURL.download = tableName + '.xls';
}

function searchResult (event, Dom, url) {
  console.log('进来了');
  if (event.charCode !== 13) { return; }
  const value = Dom.value;
  window.location = url + '?id=' + value;
}

addListen();