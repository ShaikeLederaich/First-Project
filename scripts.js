const tasks = [];


const myForm = document.querySelector('#my-form');
const submit = document.querySelector('submit');
const submitBox = document.querySelector('#submitBox');

let formError = false;

/* myForm.addEventListener('submit', updateBoardTask);
submitBox.addEventListener('click', checkForm); */

myForm.addEventListener('submit', checkForm);
myForm.addEventListener('submit', updateBoardTask);
//FUNC--------------------All Function---------------------------//

function checkForm(e) {

  let newTaskEntered = document.getElementById('addNewTask').value;
  let dateEntered = document.getElementById('taskDateToEnd').value;
  let timeEntered = document.getElementById('taskTimeToEnd').value;
  let taskDateAndTime = new Date(dateEntered +'T'+timeEntered);
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
  if ( taskDateAndTime.getTime() < globalTime) {
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
  }else {
    return false;
  }
}

function updateBoardTask(e) {

  if (formError) {
    return false;
  }else {
    let newTaskEntered = document.getElementById('addNewTask').value;
    let dateEntered = document.getElementById('taskDateToEnd').value;
    let timeEntered = document.getElementById('taskTimeToEnd').value;
    let taskDateAndTime = new Date(dateEntered +'T'+timeEntered);
  
    console.log(newTaskEntered);
    console.log(taskDateAndTime);
  
    getTaskDateAndTime(newTaskEntered, taskDateAndTime);

    e.preventDefault();
  }
}

function getTaskDateAndTime(newTaskValue, var_of_date_include_time) {

  let dayAtMonth = var_of_date_include_time.getDate();
  let month = var_of_date_include_time.getMonth() + 1;
  let year = var_of_date_include_time.getFullYear();

  let taskDate = dayAtMonth + '/' + month + '/' + year;
  console.log(taskDate);

  let hh = var_of_date_include_time.getHours();
  let mm = var_of_date_include_time.getMinutes();
  if (mm < 10) {
    mm = '0'+ mm;
  }
  
  let taskTime = hh + ':' + mm;
  console.log(taskTime);

  addNewTask(newTaskValue, taskDate, taskTime);
}

function addNewTask(taskContent, taskDate, taskTime) {

  let newTask = {
    taskContent: `${taskContent}`,
    taskDeadlineDate: `${taskDate}`,
    taskDeadlineTime: `${taskTime}`
  }

  console.log(newTask);
  // setItemsToLocalStorage(newTask);

  // e.preventDefault();
}

/* function setItemsToLocalStorage(newTask) {

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parce(localStorage.getItem('tasks'));
  }

  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task Saved');
  

} */





function newTaskAtBoard () {

  let taskBox = document.createElement('div');
  taskBox.classList.add('taskBoxes');
  taskBox.classList.add('w-25');
  
  let taskBody = document.createElement('div');
  // let task = localStorage.getItem(task);
  // taskBody.appendChild(task);
  taskBox.appendChild(taskBody);
  
  section = document.querySelector('section').appendChild(taskBox);
  return section;
}

