const addTodoBtn = document.querySelector('#add-new-todo-btn')
const newTodoInput = document.querySelector('#new-todo-input')
const ulTodoList = document.querySelector('#todo-list')

// function addTodoFn () {
//   console.log(newTodoInput.value)
// }

// const addTodoFn = function () {
//   console.log(newTodoInput.value)
// }

// addTodoBtn.onclick = function () {
//   console.log(newTodoInput.value)
// }

addTodoBtn.addEventListener('click', function () {
  // console.log(newTodoInput.value)
  const inputValue = newTodoInput.value;

  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'single-todo');
  // listItem.className = 'single-todo';
  // listItem.classList.add('single-todo');

  // input checkbox
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.setAttribute('class', 'single-todo-check');
  checkBox.addEventListener('click', function () {
    const classExist = checkBox.nextElementSibling.className.includes('cross-line')
    if (classExist) {
      checkBox.nextElementSibling.classList.remove('cross-line')
    } else {
      checkBox.nextElementSibling.classList.add('cross-line')
    }
  })
  
  // paragraph
  const todoText = document.createElement('p')
  todoText.innerText = inputValue;
  todoText.setAttribute('class', 'single-todo-text');
  
  // delete btn
  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'delete');
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener('click', function () {
    console.log('clicking the delete btn');
    const listItem = deleteBtn.parentNode;
    const ul = listItem.parentNode;

    ul.removeChild(listItem);
  })

  listItem.appendChild(checkBox)
  listItem.appendChild(todoText)
  listItem.appendChild(deleteBtn)

  ulTodoList.appendChild(listItem)

  newTodoInput.value = '';
})