// create an empty array
const myTodo = ['cook food', 'wash car'];
renderList()

// create a function for add button
function addTodo () {
    const inputElement = document.querySelector('.js-todo')
    const toDo = inputElement.value
    myTodo.push(toDo)
    inputElement.value = ''
    renderList()

}   
//   loop through the array
   function renderList () {
    todoHtml = ''
    for (i = 0; i < myTodo.length; i++) {
        const todoList = myTodo[i]
        const html = `<p>${todoList}</p>`
        todoHtml += html  
    }
    
   document.querySelector('.todo-app').innerHTML = todoHtml

   }