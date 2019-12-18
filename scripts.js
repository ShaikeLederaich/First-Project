
const myForm = document.querySelector('#my-form');
const submit = document.querySelector('submit');

const formError = false;
myForm.addEventListener('submit', checkForm);
//FUNC--------------------All Function---------------------------//
function checkForm(e) {

  let newTaskEntered = document.getElementById('addNewTask').value;
  let dateEntered = document.getElementById('taskDateToEnd').value;
  let timeEntered = document.getElementById('taskTimeToEnd').value;
  let taskDate = new Date(dateEntered +'T'+timeEntered);
  let globalTime = new Date().getTime();

  if (newTaskEntered.length < 5) {
    alert('Please Enter Task');
    formError = true;
    return false;
  }
  if (!checkIfLetter(newTaskEntered)) {
    formError = true;
    alert('Please Enter Task');
    return false;
  }
  if ( taskDate.getTime() < globalTime) {
    formError = true;
    alert('Invalid date, Please fix it');
    return false;
  }

  // let dateAndTime = new Date ()
  console.log(taskDate.getTime());
  console.log(taskDate);
  
  e.preventDefault();

//* If All OK-----------//
  return true;
}

/* function setTaskToLocalStorage() {


  if(!formError) {

  }
} */

function checkIfLetter(text) {

  let lettersPattern = /^[A-Za-z\s]+$/;

  if (lettersPattern.test(text)) {
    return true;
  }else {
    return false;
  }
}


// newTaskAtBoard()

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



//* Date Testing---///

today = new Date();
dayAtMonth = today.getDate();
dayAtWeek = today.getDay() + 1;
hour = today.getHours();
minutes = today.getMinutes();
seconds = today.getSeconds();

timeNow = hour +':'+ minutes +':'+ seconds;

month = today.getMonth();
year = today.getFullYear();

dateNow = dayAtMonth + '/' + month + '/' + year;

dateAndTimeNow = dateNow + ' ' + timeNow;
// console.log(dateAndTimeNow);

