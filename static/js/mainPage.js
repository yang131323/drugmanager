const mainButton = document.querySelectorAll('.hospital-menu>li');

let recordState = {
  index: 6,
  color: '#00FFFF'
};

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
      mainButton[i].style.border = '3px solid' + recordState.color;
      recordState.index = i;
      window.location = allFun[i];
    });
  }
  mainButton[recordState.index].style.border = '3px solid' + recordState.color;
};

function delOperate (item, url) {
  const dom = item.previousElementSibling.previousElementSibling;
  console.log('del', dom.innerText);
  window.location = url + '?' + 'id=' + dom.innerText;
};

function editOperate (item, url) {
  const dom = item.previousElementSibling;
  console.log('edit', dom.innerText);
  window.location = url + '?' + 'id=' + dom.innerText;
}

addListen();
