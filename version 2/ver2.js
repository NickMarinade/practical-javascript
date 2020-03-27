// It should have a function to display todos
let todos = ['item-1', 'item-2', 'item-3'];
function displayTodos() {
    console.log('My todos:', todos);
}
displayTodos(); 

// It should have a function to add todos
function addTodo(newTodo) {
    todos.push(newTodo);
}
addTodo('some stuff');
displayTodos();

// It should have a function to change todos
function changeTodo(index, newValue) {
    todos[index] = newValue;
}
changeTodo(0, 'newItem1');
displayTodos(); 

// It should have a function to delete todos
function deleteTodos(position) {
    todos.splice(position, 1);
}
deleteTodos(0); 
displayTodos();