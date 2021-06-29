const posts = [
  {
    title: 'Vẻ đẹp Hồ Gươm',
    location: 'Hà Nội'
  },
  {
    title: 'Bãi biển Sầm Sơn',
    location: 'Thanh Hoá'
  },
  {
    title: 'Dinh Độc lập',
    location: 'TP Hồ Chí Minh'
  }
]

document.querySelector('button').addEventListener('click', () => {
  posts.push({
    title: 'A',
    location: 'B'
  })

  // lưu du lieu
  // chuyen object thanh string
  localStorage.setItem('posts', JSON.stringify(posts))
})

// string number array object null symbol underfined
function getPosts() {
  let postStr = localStorage.getItem('posts');
  // bieen string thanh array minh su dung
  let posts = JSON.parse(postStr);
  console.log(posts);
  console.log(typeof posts)
}

function removePosts() {
  localStorage.removeItem('posts');
}

function logout() {
  let postStr = localStorage.getItem('posts');
  let posts = JSON.parse(postStr);

  posts.splice(1, 1);
  localStorage.setItem('posts', JSON.stringify(posts));

}
function checkLogin() {
  const user = localStorage.getItem('user');
  if (!user) {
    return false;
  }
  return true;
}

localStorage.setItem('user', JSON.stringify({ username: 'Tuan', password: '123456' }));

// users
// user

// locations = []
// api => get thoi tiet