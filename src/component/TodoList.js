import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos, addTodo } from "../actions"; // Ensure `addTodo` is correctly imported
import { connect } from "react-redux";
import TodoForm from "./TodoForm"; // Importing the correct component

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;

    console.log('Todos:', todos);

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

const mapStateToProps = (state) => ({
  todos: state.data || [],
});

export default connect(
  mapStateToProps,
  {
    fetchTodos,
    addTodo, // Ensure the correct action is passed here
  }
)(TodoList);
