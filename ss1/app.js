// console.log('Hello c4e'); 
// hiện thị trên dev tool (chuot phai + inspect)
// dev tool là một giao diện hiện thị khác của javascript
// alert('Hello world'); // alert hien thi la dong nay

/*
  comment nay
  dc nhieu dong
*/
// Biến
/*
let greeting = 'Hello X';
const temp = 20;
var name = 'Tuan'; // ít dùng

console.log(greeting);
console.log(temp)
console.log(name);

let age;
age = 20;
age = 22;
age = 'Hello'
// temp = 22; => Sai vi ko gan lai const
console.log('Tuổi:', age);
*/
// Kiểu dữ liệu
// string
/*
let fullName = 'Tuan';
let firstName = "Nguyen";
let code = 'C4E';
let count = 22;
let courseName = `Lớp học ${code} có sĩ số ${count}`;

let lastName = 'Tuan';
let fName = firstName + ' ' + lastName + '.';
console.log(fullName, firstName);
console.log(courseName);
console.log(fName);
*/
// Number
/*
let count = 22;
let mark = 9.5;
let temp = -20;
let x = 5;

console.log(count, mark, temp);
let sum = count + mark;
let diff = count - mark;
let div = count / mark;
let mul = count * mark;
let mod = count % x; // chia lấy dư
console.log(sum, diff, div, mul);
console.log(mod);

console.log(count + '3')

alert(count + 3);
*/
/*
let age = prompt('Tuổi của bạn là bao nhiêu?');

// alert(`Bạn có ${age} xuân xanh`)
alert('Bạn có ' + age + ' xuân xanh')
*/
let birthYearStr = prompt('Năm sinh của bạn?'); // prompt trả kiểu dữ liệu chuỗi
console.log(typeof birthYearStr); // typeof check kiểu dữ liệu
let birthYear = Number(birthYearStr); // chuyển kiểu dữ liệu từ chuỗi sang số
console.log(typeof birthYear);

let age = 2021 - birthYearStr;

alert(`Bạn có ${age} xuân xanh`)

