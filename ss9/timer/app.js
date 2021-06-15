// xác định sự kiện
// click start, click stop
let startBtnEl = document.getElementById('startBtn');
let stopBtnEl = document.getElementById('stopBtn');
let inputEl = document.getElementById('countInp');
let statusEl = document.getElementById('status');

// click start
// start disable
// bắt đầu timer (láy giá trị ban đầu)
// đổi giao diện status thành giá trị hiện tại
// timmer < 0 => Time's up, đổi start thành enable
let timer = null;

startBtnEl.addEventListener('click', function() {
  startBtnEl.setAttribute('disabled', true);

  let startTime = +inputEl.value;
  statusEl.innerHTML = startTime;

  stopBtnEl.removeAttribute('disabled');

  timer = setInterval(function() {
    startTime--;
    statusEl.innerHTML = startTime;
    if (startTime < 0) {
      clearInterval(timer);
      statusEl.innerHTML = "Time 's up";
      startBtnEl.removeAttribute('disabled');
      stopBtnEl.setAttribute('disabled', true);
    }
  }, 1000)
})

// dừng timer
// start enable
// stop disable
// input về giá trị ban đầu là 20
stopBtnEl.addEventListener('click', function() {
  if (timer) {
    clearInterval(timer);
  }
  startBtnEl.removeAttribute('disabled');
  stopBtnEl.setAttribute('disabled', true);
  statusEl.innerHTML = 0;
  inputEl.value = 20;
})