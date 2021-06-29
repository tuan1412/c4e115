onLoad();

async function onLoad() {
  let projects = await getComments();

  async function getComments() {
    const res = await fetch('https://mx-c4e-server.herokuapp.com/projects');
    const projects = await res.json();
    return projects;
  }

  // hiển thị list projects trong thẻ body
  // insert dom
  // insertAdjacentHTML
  // b1: lấy ra vị trị cần insert (dom cần insert)
  // position: afterbegin, html element (string) => projects => html string
  let resultEl = document.getElementById('result');
  let formEl = document.getElementById('project-form');
  let nameProjectEl = document.getElementById('name-project');
  let taskProjectEl = document.getElementById('task-project');
  let timeSpent = document.getElementById('time-project');
  let addBtn = document.getElementById('add-btn');
  let resetBtn = document.getElementById('clear-btn');

  let updateProjectIdx = undefined;
  let updateProjectId = undefined;

  // tìm hiểu jQuery => trỏ DOM ngắn hơn ko gán cũng được
  formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    // ko có thằng nào cần update => form đang ở trạng thái add
    if (typeof updateProjectIdx === 'undefined') {
      addProject();
    } else {
      submitUpdateProject();
    }
  });

  resetBtn.addEventListener('click', function () {
    addBtn.innerHTML = 'Add';
    updateProjectIdx = undefined;
  });

  // vấn đề (form => sử dụng 2 thao tác cả add và update)
  // phân biệt được form đạng ở trạng thái nào

  async function submitUpdateProject() {
    let project = {
      name: nameProjectEl.value,
      task: taskProjectEl.value,
      timeSpent: timeSpent.value
    };

    const res = await fetch('https://mx-c4e-server.herokuapp.com/projects/' + updateProjectId, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })

    const updateProject = await res.json();

    projects[updateProjectIdx] = updateProject; // update
    renderProjects();

    formEl.reset();
    addBtn.innerHTML = 'Add';
    updateProjectIdx = undefined;
  }

  function updateProject(event) {
    let targetBtn = event.target;

    updateProjectIdx = targetBtn.getAttribute('data-row');
    updateProjectId = targetBtn.getAttribute('data-id');
    let updateProject = projects[updateProjectIdx];

    nameProjectEl.value = updateProject.name;
    taskProjectEl.value = updateProject.task;
    timeSpent.value = updateProject.timeSpent;

    addBtn.innerHTML = 'Update';
  }

  async function addProject() {
    // sự kiện mặc định của form submit => load trang mới
    // muốn giữ nguyên trang cũ => xoá sự kiện mặc định của form
    // ấn nút enter ở form => submit rồi => ko cần bắt buộc click button add
    let project = {
      name: nameProjectEl.value,
      task: taskProjectEl.value,
      timeSpent: timeSpent.value
    };
    // gọi lên server để lưu dữ liệu
    const res = await fetch('https://mx-c4e-server.herokuapp.com/projects', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })

    const newProject = await res.json();
    
    projects.push(newProject);
    renderProjects();

    formEl.reset();
  }

  async function deleteProject(event) {
    let targetBtn = event.target;

    let rowDeleteIdx = targetBtn.getAttribute('data-row');
    let projectId = targetBtn.getAttribute('data-id')

    await fetch('https://mx-c4e-server.herokuapp.com/projects/' + projectId, {
      method: 'DELETE', // or 'PUT'
    })

    // xoá project ở vị trị rowDeleteIdx
    projects.splice(rowDeleteIdx, 1);
    renderProjects();
    // gọi hàm render
  }

  // mảng object => mảng string => join(): string
  // lưu trữ dữ liệu bằng thuộc tính
  function renderProjects() {
    resultEl.innerHTML = '';

    let htmlInsertProject = projects
      .map(function (project, idx) {
        return `<tr>
      <td>${project.name}</td>
      <td>${project.task}</td>
      <td>${project.timeSpent}</td>
      <td>
        <button class="btn-delete" data-row=${idx} data-id=${project.id}>x</button>
        <button class="btn-update" data-row=${idx} data-id=${project.id}>u</button>
      </td>
    </tr>`;
      })
      .join('');

    resultEl.insertAdjacentHTML('afterbegin', htmlInsertProject);

    let delButtons = document.querySelectorAll('.btn-delete');

    for (let i = 0; i < delButtons.length; i++) {
      let delBtn = delButtons[i];
      delBtn.addEventListener('click', deleteProject);
    }

    let updateButtons = document.querySelectorAll('.btn-update');

    for (let i = 0; i < updateButtons.length; i++) {
      let updateBtn = updateButtons[i];
      updateBtn.addEventListener('click', updateProject);
    }
  }

  renderProjects();

  // define dữ liệu mảng => CRUD là CRUD mảng => render HTML
}
