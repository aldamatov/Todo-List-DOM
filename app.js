const addTodoBtn = document.querySelector('#add-new-todo-btn');
const newTodoInput = document.querySelector('#new-todo-input');
const ulTodoList = document.querySelector('#todo-list');


// const addTodoFn = function addTodoFn () {
//     console.log(newTodoInput.value);
// }


addTodoBtn.addEventListener('click', function(){
    const inputValue = newTodoInput.value;



    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'single-todo');

    //Input checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('class', 'single-todo-check');
    checkBox.addEventListener('click', function (){
        console.log('clicking the checkbox input');


        const classExist = checkBox.nextElementSibling.classList.includes('cross-line');
        if (classExist) {
            checkBox.nextElementSibling.classList.remove('cross-line');
        }
        else {
            checkBox.nextElementSibling.classList.add('cross-line');
        }
        

    })


    //Paragraph
    const todoText = document.createElement('p');
    todoText.innerText = inputValue;
    todoText.setAttribute('class', 'single-todo-text');

    //Delete Btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', function (){
        console.log('clicking the delete btn');

        const listItem = deleteBtn.parentNode;
        const ul = listItem.parentNode;

        ul.removeChild(listItem);
    })

    //Adding to Li
    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    ulTodoList.appendChild(listItem);

    newTodoInput.value = ' ';

})