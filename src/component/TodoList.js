import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos, addTodo } from "../actions"; // Ensure `addTodo` is correctly imported
import { connect } from "react-redux";
import TodoForm from "./TodoForm"; // Importing the correct component

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        <TodoForm onAddTodo={this.props.addTodo} />
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${index}`} todo={todo.task} />;
              })
            : "No todos, yay!"}
        </ul>
      </>
    );
  }
}

// Map state to props to access todos from the Redux store
const mapStateToProps = (state) => {
  console.log("Redux state:", state); // Log the entire Redux state to inspect its structure
  return {
    todos: state.todo && state.todo.data ? state.todo.data : [], // Fallback to an empty array if state.todo or state.todo.data is undefined
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTodos,
    addTodo, // Ensure the correct action is passed here
  }
)(TodoList);
