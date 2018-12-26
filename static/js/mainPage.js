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

addListen();

// setTimeout(() => { tableConstructor([{
//   title: 'th',
//   data: ['学号', '姓名', '班级', '学院']
// }, {
//   title: 'td',
//   data: ['1214242', '欧阳巧巧', '网工16101', '计算机学院']
// }, {
//   title: 'td',
//   data: ['3123424', '范俊', '网工16101', '数计学院']
// }], 'store-table') }, 3000)
