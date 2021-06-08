// DOM Get Element (R)
let headingEl = document.getElementById("heading-1");

console.log(headingEl);
console.dir(headingEl);

let headingClassEls = document.getElementsByClassName("heading");

console.dir(headingClassEls);

console.dir(document.getElementsByTagName('h1'));

console.log(document.querySelector(".heading"));

console.log(document.querySelectorAll("h1"));

// CRUD
// Update
headingEl.innerHTML = "C4E 115JS";
headingEl.style = "color:red;font-size:14px";
headingEl.setAttribute("data-index", 1);
headingEl.removeAttribute("data-index");
// đổi heading-1 thành heading-2
// headingEl.id = "heading-2";
// headingEl.setAttribute("id", "heading-3");
// thêm class bordered vào headingEl
// headingEl.classList.add("bordered");

let oldClass = headingEl.getAttribute("class");
console.log(oldClass);
headingEl.setAttribute("class", oldClass + " bordered");
headingEl.classList.remove("bordered");

// Create
let bodyEl = document.body;
console.log(bodyEl.innerHTML);
// bodyEl.innerHTML += '<h2>Element thêm</h2>';

// Delete
// console.log(headingEl);
// document.getElementById('heading-1').remove();

let colors = ['red', 'blue', 'yellow'];

function randomColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  return colors[randIndex]
}

let colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
  console.log("chạy hàm");
  headingEl.style.color = randomColor();
})

document.getElementById('nameInput')
  .addEventListener("keyup", function() {
    console.log("Nhấn phím");
})


