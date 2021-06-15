const addBtnEl = document.getElementById('addBtn');
const resultDisplayEl = document.getElementById('resultDisplay');
const subBtnEl = document.getElementById('subBtn');

let curVal = 0;
// lấy giá trị ban đầu của result
// cộng 1
// thay đổi giao diện thành giá trị mới
addBtnEl.addEventListener('click', function() {
  console.log('click add');
  curVal++;
  resultDisplayEl.innerHTML = curVal;
});

// arrow function
// es6
subBtnEl.addEventListener('click', () => {
  console.log('click sub');
  curVal--;
  resultDisplayEl.innerHTML = curVal;
});