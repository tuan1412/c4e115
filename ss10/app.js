// async function getUsers() {
//   const response = await fetch('https://reqres.in/api/users');
//   const jsonResponse = await response.json();

//   console.log(jsonResponse);
// }

// getUsers();

async function getUsers() {
  const response = await fetch('https://reqres.in/api/users');
  const jsonResponse = await response.json();

  console.log('vao 1', jsonResponse);
}

getUsers();

// console.log('HI one');
function lending() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let success = Math.floor(Math.random() * 2) // 0, 1
      if (success) {
        resolve(true)
      } else {
        reject(false)
      }
    }, 3000)
  })
}

// lending()
//   .then(() => { console.log('trả 2 triệu')})
//   .catch(() => { console.log('trả 1 triệu')})

async function handleLending() {
  try {
    const data = await lending();
    console.log('data', data);
    console.log('trả 2 triệu')
  } catch (err) {
    console.log(err);
    console.log('trả 1 triệu')
  }
}

handleLending();

// Promise
// t vay bạn 1 tr trong 1 năm, 
// làm ăn được thì trả 2 tr, ko làm dc thì trả 1 tr 
// pending (khoảng thời gian lúc vay 1-365)
// fulfilled(xử lý thành công) => trả 2 triệu
// rejected(xử lý lỗi) => trả 1 triệu
// setTimeout => tác vụ bất đồng bộ

// setTimeout(function() {
//   console.log('HI two');
// }, 1000)

// console.log('HI three');


async function createUser() {
  let data = {
    name: "morpheus",
    job: "leader"
  }
  const response = await fetch("https://reqres.in/api/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
}

createUser();
