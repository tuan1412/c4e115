// Bài 1.5
// Chú ý prompt là giá trị là string
// Phép cộng 2 string khác cộng 2 số
// let n = Number(prompt('Nhập n: '));
// let c = Number(prompt('Nhập c: '));
// let s = Number(prompt('Nhập s: '));

// for (let i = c; i < n; i = i + s) {
//   console.log(i);
// }

// Bài 4 => Lưu ý giá trị true false javascript
// let n = Number(prompt('Nhập số: '));

// if (n % 2 === 1) {
//   alert('Số lẻ');
// } else {
//   alert('Số chẵn');
// }

// Bài 5 => Đăng nhập
// let username = '';
// let password = '';

// while (username !== 'mindx' || password !== 'codethechange') {
//   username = prompt('Nhập username: ');
//   password = prompt('Nhập password: ');
//   // if (username === 'mindx' && password='codethechange')
//   if (username !== 'mindx') {
//     alert('Username sai');
//   } else if (password !== 'codethechange') {
//     alert('Password sai');
//   } else {
//     alert('Đăng nhập thành công');
//   }
// }

// c2
// let username = '';
// let password = '';

// while (true) {
//   username = prompt('Nhập username: ');
//   password = prompt('Nhập password: ');
//   // if (username === 'mindx' && password='codethechange')
//   if (username !== 'mindx') {
//     alert('Username sai');
//   } else if (password !== 'codethechange') {
//     alert('Password sai');
//   } else {
//     alert('Đăng nhập thành công');
//     break;
//   }
// }

// console.log('ngoài vòng lặp');

// Scope (Phạm vi của biến)
let n = 10;
// let n = 20;
{
  // block 1;
  let n = 30;
  console.log('1', n);
}
console.log('ngoài block', n);
if (n > 2) {
  // console.log('1', n);

  n = 20;
  console.log('2', n);
}

let username = 'Tuan';
for (let i = 0; i < 5; i++) {
  console.log(i);
  // let username = 'Tuan';
  console.log(username);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  // let username = 'Tuan';
  console.log(username);
}


// console.log('Ngoài block for', i);