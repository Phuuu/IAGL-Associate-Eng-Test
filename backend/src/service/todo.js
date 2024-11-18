const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    // added a function to use repository.addTodo for adding new items
    addTodo: async () => {
      return await repository.addTodo(task)
    }
  };
};

module.exports = todoService;