// It should have a place to store todos
let todos = ['item-1', 'item-2', 'item-3'];

// It should have a way do display todos 
console.log(todos); 
 
// It should have a way to add new todods
todos.push('item-4'); 
todos.push('item-5'); 
console.log(todos); 

// It should have a way to change a todo
todos[0] = 'item-1 updated'; 
console.log(todos); 

// It should have a way to delete a todo
todos.splice(0, 1); 
console.log(todos); 