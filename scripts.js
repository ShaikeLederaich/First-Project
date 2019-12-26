const myForm = document.querySelector('#my-form');
const submit = document.querySelector('submit');
const submitBox = document.querySelector('#submitBox');
const taskBoxes = document.querySelectorAll('.taskBoxes');


let tasks;

let formError = false;

myForm.addEventListener('submit', checkForm);
myForm.addEventListener('submit', saveNewTask);

getItemsFromLocalStorage();
updateTaskBoard();


console.log(tasks);
//FUNC--------------------All Function--------------------------//

function updateTaskBoard() {
  document.querySelector('#taskBoxesArea').innerHTML = '';
  
  for (let i = 0; i < tasks.length; i++) {
    let taskBox = document.createElement('div');
    taskBox.classList.add('taskBoxes');
    taskBox.classList.add('w-25');
    taskBox.classList.add('float-left');

    let taskHeadline = document.createElement('h2');
    taskHeadline.classList.add('taskHeadline');
    taskHeadline.appendChild(document.createTextNode('Task ' + (i + 1)));
    taskBox.appendChild(taskHeadline);

    let taskBody = document.createElement('p');
    taskBody.classList.add('taskP');
    taskBody.appendChild(document.createTextNode(tasks[i].taskContent));
    taskBox.appendChild(taskBody);

    let taskIconDelete = document.createElement('i');
    taskIconDelete.classList.add('delTask', 'fas', 'fa-times', 'm-1');
    taskIconDelete.setAttribute('onclick', `deleteTask(${i})`);
    taskBox.appendChild(taskIconDelete);

    let taskSmallText = document.createElement('small');
    taskSmallText.classList.add('smText');
    taskSmallText.appendChild(
      document.createTextNode('Deadline for the task:')
    );
    taskBox.appendChild(taskSmallText);

    let divForDate = document.createElement('div');
    divForDate.classList.add('taskDate');
    divForDate.appendChild(document.createTextNode(tasks[i].taskDeadlineDate));
    taskBox.appendChild(divForDate);

    let divForTime = document.createElement('div');
    divForTime.classList.add('taskTime');
    divForTime.appendChild(document.createTextNode(tasks[i].taskDeadlineTime));
    taskBox.appendChild(divForTime);
    // return taskBox;
    document.querySelector('#taskBoxesArea').appendChild(taskBox);
  }
}

function createTaskBox() {
  
}
// console.log(localStorage);
function deleteTask(taskIndex) {
  let sum = 1 + taskIndex;
  answer = confirm(`Are you sure you want to remove the task ${sum}?`);
  if (!answer) {
    return;
  }
  tasks.splice(tasks[taskIndex], 1);
  localStorage.removeItem('tasks');
  // console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateTaskBoard();
}
function checkForm(e) {
  let newTaskEntered = document.getElementById('addNewTask').value;
  let dateEntered = document.getElementById('taskDateToEnd').value;
  let timeEntered = document.getElementById('taskTimeToEnd').value;
  let taskDateAndTime = new Date(dateEntered + 'T' + timeEntered);
  let globalTime = new Date().getTime();

  if (newTaskEntered.length < 5) {
    alert('Please Enter Task');
    formError = true;
    return false;
  }
  if (!checkIfLetter(newTaskEntered)) {
    alert('Please Enter Task');
    formError = true;
    return false;
  }
  if (taskDateAndTime.getTime() < globalTime) {
    alert('Invalid date, Please fix it');
    formError = true;
    return false;
  }

  e.preventDefault();

  //* If All OK-----------//
  return true;
}

function checkIfLetter(text) {
  let lettersPattern = /^[A-Za-z\s]+$/;

  if (lettersPattern.test(text)) {
    return true;
  } else {
    return false;
  }
}

function saveNewTask(e) {
  if (formError) {
    return false;
  } else {
    createNewTaskObj();

    e.preventDefault();
  }
}
function createNewTaskObj() {
  let newTaskEntered = document.getElementById('addNewTask').value;
  let dateEntered = document.getElementById('taskDateToEnd').value;
  let timeEntered = document.getElementById('taskTimeToEnd').value;
  let taskDateAndTime = new Date(dateEntered + 'T' + timeEntered);

  console.log(
    addNewTask(
      newTaskEntered,
      getTaskDate(taskDateAndTime),
      getTaskTime(taskDateAndTime)
    )
  );
}

function getTaskDate(var_of_date_include_time) {
  let dayAtMonth = var_of_date_include_time.getDate();
  let month = var_of_date_include_time.getMonth() + 1;
  let year = var_of_date_include_time.getFullYear();

  let taskDate = dayAtMonth + '/' + month + '/' + year;
  return taskDate;
}

function getTaskTime(var_of_date_include_time) {
  let hh = var_of_date_include_time.getHours();
  let mm = var_of_date_include_time.getMinutes();
  if (mm < 10) {
    mm = '0' + mm;
  }

  let taskTime = hh + ':' + mm;
  return taskTime;
}

function addNewTask(taskContent, taskDate, taskTime) {
  let newTask = {
    taskContent: `${taskContent}`,
    taskDeadlineDate: `${taskDate}`,
    taskDeadlineTime: `${taskTime}`
  };

  setItemsToLocalStorage(newTask);

  return newTask;
}

function getItemsFromLocalStorage() {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

function setItemsToLocalStorage(newTask) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  console.log(tasks);
  console.log(localStorage);

  clearFields();
}
function clearFields() {
  document.getElementById('addNewTask').value = '';
  document.getElementById('taskDateToEnd').value = '';
  document.getElementById('taskTimeToEnd').value = '23:59';
}

function newTaskAtBoard() {
  let taskBody = document.createElement('div');
  taskBox.appendChild(taskBody);

  return section;
}
