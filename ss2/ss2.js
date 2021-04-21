// let lastName = prompt('Họ của bạn: ');
// let firstName = prompt('Tên của bạn: ');
// alert(`Xin chào ${lastName} ${firstName}`);

// let lastName1 = prompt('Họ của bạn: ');
// let firstName1 = prompt('Tên của bạn: ');
// alert(`Xin chào ${lastName1} ${firstName1}`);

// let lastName2 = prompt('Họ của bạn: ');
// let firstName2 = prompt('Tên của bạn: ');
// alert(`Xin chào ${lastName2} ${firstName2}`);

// for (let i = 1; i <= 3; i = i + 1) {
  // let lastName = prompt('Họ của bạn: ');
  // let firstName = prompt('Tên của bạn: ');
  // alert(`Xin chào ${lastName} ${firstName}`);
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(101 - i);
// }

// for (let i = 100; i >= 1; i = i - 1) {
//   console.log(i);
// }

// for (let i = 10; i <= 50; i = i + 2) {
//   console.log(i);
// }

// let i = 10;
// while (i <= 50) {
//   console.log(i);
//   i = i + 2;
// }

// let answer = '';
// while (answer !== 'Có') {
//   answer = prompt('Bạn có yêu mình không?');
//   console.log(answer);
// }

let weight = prompt('Cân nặng: ');
let height = prompt('Chiều cao: ');

let BMI = weight / (height * height);

if (BMI < 18.5) {
  alert('Gầy');
} else if (BMI < 25) {
  alert('Bình thường')
} else if (BMI < 30) {
  alert('Hơi bếu');
} else if (BMI < 35) {
  alert('Béo 1');
} else if (BMI < 40) {
  alert('Béo 2');
} else {
  alert('Béo 3');
}