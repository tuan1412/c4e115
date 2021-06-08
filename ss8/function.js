// Khai báo hàm
// function tenHam() { tác vụ };
function renderLorem() {
  console.log("lorem ipsum");
  console.log("Xin chào");
}

// Gọi hàm
// renderLorem();
// renderLorem();
// renderLorem();
// renderLorem();

console.log("hello");
renderLorem();
console.log("how are you today");
renderLorem();
console.log("Have a good day");

let message = "lorem ipsum";
console.log(message[0].toUpperCase() + message.slice(1))

let otherMessage = "coding is great"
console.log(otherMessage[0].toUpperCase() + otherMessage.slice(1))

console.log("Gọi hàm");

function upperCaseFirstLetter(str) {
  console.log(str[0].toUpperCase() + str.slice(1))
}

upperCaseFirstLetter("lorem ipsum");
upperCaseFirstLetter("coding is great");

let extra = 3;

function printSumVi(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
  console.log("Tổng 2 số", firstNumber + secondNumber + extra);
}

console.log(printSumVi(1, 2));

let firstNumber = 100;

function printSumEn(firstNumber, secondNumber) {
  console.log("Sum of numbers", firstNumber + secondNumber + extra);
}

console.log(firstNumber);
console.log(printSumEn(1, 2));

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("Tổng 2 số", sum(1,2));
console.log("Sum of two numbers", sum(1,2));

let arr = [3, 2, 7, 9, 10];
let filterArr = []; // toàn số lẻ

// c1
function isEven(number) {
  return number % 2 === 1;
}

// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     filterArr.push(arr[i]);
//   }
// }

// console.log(filterArr);

// c2
filterArr = arr.filter(function (number) {
  return number % 2 === 1
})

doubleArr = arr.map(function (number) {
  return number * 2;
})


console.log(filterArr)
console.log(doubleArr)

console.log(arr.findIndex(function(number) {
  return number % 7 == 0
}))


console.log(arr.findIndex(function(number) {
  return number % 2 == 0
}))

// callback => chính là function
// gọi lại => function sẽ được gọi khi hoàn thành một tác vụ nào đó

setTimeout(function showDone() {
  console.log("Done");
}, 3000)

// một số tác vụ bất đồng bộ (mất một khoảng thời gian để chạy mới xong)















