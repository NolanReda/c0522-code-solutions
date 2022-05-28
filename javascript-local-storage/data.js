/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  todos.push(JSON.parse(previousTodosJSON));
}

// console.log(todos);
