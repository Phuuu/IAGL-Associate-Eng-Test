
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  // added new method addTodo to add new item to todoList array
  addTodo: (task) => {
    todoList.todos.push({ task });
    return Promise.resolve(todoList);
  }
};