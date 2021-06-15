
let quotes = [
  {
    content: 'Không làm mà đòi có ăn thì chỉ có...',
    author: 'Huấn rose'
  },
  {
    content: 'Đời như xe buýt, ghế ngồi thì ít, mông đít thì nhiều.',
    author: 'Ngọc Đạt'
  },
  {
    content: 'Lorem',
    author: 'Anh Kiên'
  }
]

let contentEl = document.getElementById('content');
let authorEl = document.getElementById('author');
let reloadBtnEl = document.getElementById('reloadBtn');

function randomQuote() {
  // cài đặt thêm logic để random ngẫu nhiên mà vẫn ko trùng câu cũ
  const rand = Math.floor(Math.random() * quotes.length);
  const randQuote = quotes[rand];

  contentEl.innerHTML = randQuote.content;
  authorEl.innerHTML = randQuote.author;
}

randomQuote();

reloadBtnEl.addEventListener('click', randomQuote);

// xac dinh su kien
// click reload
// load trang hien thi
// mặc định là khi để script nằm ở cuối body => load xong html => load file script
// load xong script => tương đương với việc script sẽ phải chạy
