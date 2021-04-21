let message = 'Coding is great';

console.log(message);

let lowerMessage = message.toLowerCase();

console.log(lowerMessage);

let studentCount = 22;

console.log(studentCount);

// studentCount = studentCount + 1;
studentCount += 2;
// studentCount++;
// studentCount = studentCount + 2;

console.log(studentCount);

let widthStr = prompt('Chiều rộng là: ');
let heightStr = prompt('Chiều dài là: ');

let width = Number(widthStr);
let height = Number(heightStr);

let area = width * height;
alert(`Hình chữ nhật có diện tích là: ${area}`);
