// create an empty array
const myTodo = [];
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
        // Generating html
        const html =`
            <div>${todoList}</div>
            <div><button class = 'red' onclick='
            myTodo.splice(${i}, 1)
            renderList()
            '>Delete</button></div>
            `
        todoHtml += html  
    }
    // Render on the web page
   document.querySelector('.todo-app').innerHTML = todoHtml

   }