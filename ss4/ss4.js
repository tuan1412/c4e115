let person = {
  name: 'Quân',
  age: 22,
  location: 'Hà Nội',
  height: 170,
  weight: 50,
  gender: 'Male'
}

let emptyObj = {};

console.log(person);
console.log(emptyObj);

console.log(person.age);
console.log(`Địa chỉ của ${person["name"]} là`, person["location"])

let key = "weight";
console.log(person[key]);
console.log(person.key);

let movie = {
  title: 'End game',
  year: 2020,
  rate: 9
}

// let prop = prompt('Nhập key: ');
// let value = movie[prop];
// if (value === undefined) {
//   alert('Không tồn tại')
// } else {
//   alert(value);
// }
console.log('trước', movie);
movie.rate = 8.7;
console.log('sau', movie);

console.log('trước', movie);
movie.rate = movie.rate + 0.5;
// movie.rate += 0.5
console.log('sau', movie);
