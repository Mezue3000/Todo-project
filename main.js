const Array1 = [];

function addTodo () {
    const inputElement = document.querySelector('.js-todo')
    const name = inputElement.value;
    Array1.push(name);
    console.log(Array1)
}