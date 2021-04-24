// init mảng
let menu = ["thịt", "cá", "trứng", "rau", "cơm"];
console.log(menu);
let i = 3;
console.log(i);
// khai báo mảng rỗng
let emptyMenu;
emptyMenu = [""];
console.log(emptyMenu);
// độ dài của mảng
let lengthOfMenu = menu.length;
console.log('Độ dài của mảng', lengthOfMenu);
//             0             1          2
let films = ["Săn tiền", "Tiêu điểm", "Titanic"];
console.log(films, films.length);

console.log("trước khi push", menu);

let newDish = "bún đậu";
menu.push(newDish);
console.log("sau khi push", menu);
console.log(menu.length);

/*
let newFilm = prompt("Bộ phim bạn yêu thích: ");
// làm lập trình là làm việc với biến
films.push(newFilm);
console.log(films);
*/

let firstDish = menu[0];
console.log(firstDish);


// let idx = prompt("Nhập thứ tự phim: ");
// console.log(films);
// console.log(films[idx]);

// thao tác đọc hết phần tử của mảng => là một thao tác có lặp
// console.log(films[0]);
// console.log(films[1]);
// console.log(films[2]);

// console.log(films);
// for (let i = 0; i < films.length; i++) {
//   console.log(films[i]);
// }

// let x = 3;
// x = 5;

console.log(menu);
console.log('\n');
menu[0] = "thịt gà";
console.log(menu);

menu[1] = "cá chép";
console.log(menu);

// let filmName = prompt("Tên phim: ");
// let index = prompt("Chỉ số: ");

// console.log(films);

// films[index] = filmName;

// console.log(films);

// CRUD
console.log('trước khi xoá', menu);
menu.splice(0, 2);
console.log('sau khi xoá', menu);





