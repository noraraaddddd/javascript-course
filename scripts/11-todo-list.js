// in the last version, we turn the array of strings into array of objects to
const todoList = [{
    name: 'make dinner',
    dueDate: '2025-02-12'
}, {
    name: 'wash dishes',
    dueDate: '2025-02-13'
}];


// Here we generate html code instead of writing it by hand
function renderTodoList() {
    //variable that stores result
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        let name = todoObject.name;
        let dueDate = todoObject.dueDate;
        // we use div instead of p so that each element is considered as one and can be set up in the grid
        todoListHtml += `<div>${name}</div> <div>${dueDate} </div>
        <button onclick="deleteTodo(${i},1)" class="delete-button">Delete</button>
    `;
    }

    document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const dateElement = document.querySelector(".js-due-date-input");
    const name = inputElement.value;
    const dueDate = dateElement.value;
    console.log(name);
    inputElement.value = "";

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    console.log(todoList);
    renderTodoList();

}


function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}


/*
// while loops in JS

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// for loops in JS
for (let j = 1; j < 10; j++) {
    console.log(j);

}

// in this example we have a non standard loop so its best to use a while loop
let randomNumber = 0;
while (randomNumber < 0.5) {
    randomNumber = Math.random();
    console.log(randomNumber);
}


// looping through an array
const todo = [
    'make dinner',
    'do dishes',
    'wash clothes'

];

for (let index = 0; index < todo.length; index++) {
    console.log(todo[index])
}

//accumulator pattern(create  avariable to store result and update that variable in each loop)
const nums = [1, 2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < nums.length; i++) {

    const num = nums[i];
    total = total + num;
    console.log(total);
}

*/

