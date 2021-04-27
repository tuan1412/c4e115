// Bài 1
/*
let cloths = ['Áo', 'Quần', 'Váy'];

while (true) {
  let command = prompt('Welcome, do you want (C, R, U, D)');
  // người dùng ấn cancel
  console.log(command)
  if (!command) {
    break;
  }
  // cover người dùng nhập vào
  let cmd = command.toLowerCase();
  if (cmd === "r") {
    for (let i = 0; i < cloths.length; i++) {
      console.log(`${i + 1}. ${cloths[i]}`)
    }
  } else if (cmd === "c") {
    let newCloth = prompt("New item: ");
    cloths.push(newCloth);
    alert("Done");
  } else if (cmd === "u") {
    let pos = prompt("Update position: ");
    let newCloth = prompt("Update name: ");
    cloths[pos] = newCloth;
    alert("Done");
  } else if (cmd === "d") {
    let pos = prompt("Update position: ");
    cloths.splice(pos, 1);
    alert("Done");
  } else {
    alert("Command not support")
  }
}
*/
// Bài 2.1 => Đếm số các số dương trong mảng
let arr = [3, 4, 6, -9, 10, -88, 2];

// tạo một biến để cộng dồn
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let number = arr[i];
  if (number > 0) {
    count++;
  }
}
console.log(count);

// bài 2.3
// c1: for (check xem phần tử có tồn tại trong mảng hay ko)
/*
let foundNumber = Number(prompt("Nhập số cần tìm: "));
let foundIndex = -1;
for (let i = 0; i < arr.length; i++) {
  let number = arr[i];
  if (number === foundNumber) {
    alert("Tìm thấy ở " + i);
    foundIndex = i;
    break;
  }
}
if (foundIndex === -1) {
  alert("Không tìm thấy");
}
*/
let nameListStr = prompt("Nhập danh sách: ");
// string => array 
console.log('string', nameListStr)
let names = nameListStr.split(',')
console.log('array',names);

let newNames = [];
for (let i = 0; i < names.length; i++) {
  let upperName = names[i].toUpperCase();
  newNames.push(upperName)
}

alert(newNames.join(', '));