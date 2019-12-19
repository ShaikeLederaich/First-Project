
const myForm = document.querySelector('#my-form');
const submit = document.querySelector('submit');


// let formError = false;

myForm.addEventListener('submit', checkForm);

//FUNC--------------------All Function---------------------------//

function checkForm(e) {

  let newTaskEntered = document.getElementById('addNewTask').value;
  let dateEntered = document.getElementById('taskDateToEnd').value;
  let timeEntered = document.getElementById('taskTimeToEnd').value;
  let taskDateAndTime = new Date(dateEntered +'T'+timeEntered);
  let globalTime = new Date().getTime();

  if (newTaskEntered.length < 5) {
    alert('Please Enter Task');
    // formError = true;
    return false;
  }
  if (!checkIfLetter(newTaskEntered)) {
    // formError = true;
    alert('Please Enter Task');
    return false;
  }
  if ( taskDateAndTime.getTime() < globalTime) {
    // formError = true;
    alert('Invalid date, Please fix it');
    return false;
  }

  getTaskDateAndTime(taskDateAndTime);

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


function getTaskDateAndTime(var_of_date_include_time) {

  let dayAtMonth = var_of_date_include_time.getDate();
  let month = var_of_date_include_time.getMonth() + 1;
  let year = var_of_date_include_time.getFullYear();

  let taskDate = dayAtMonth + '/' + month + '/' + year;
  // console.log(taskDate);

  let hh = var_of_date_include_time.getHours();
  let mm = var_of_date_include_time.getMinutes();
  if (mm < 10) {
    mm = '0'+ mm;
  }
  // console.log(mm);
  let taskTime = hh + ':' + mm;
  
  // console.log(taskTime);
  
}

function addNewTask(taskContent, taskDate, taskTime) {

  let newTask = {
    taskContent: `${taskContent}`,
    taskDeadlineDate: `${taskDate}`,
    taskDeadlineTime: `${taskTime}`
  }

  console.log(newTask);

  e.preventDefault();
}







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

