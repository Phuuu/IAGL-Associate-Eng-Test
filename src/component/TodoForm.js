import React, { Component } from "react";

class TodoForm extends Component {
    state = {
        newTodo: "", // Tracks the todo input value
    };

    handleChange = (e) => {
        this.setState({ newTodo: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { newTodo } = this.state;
        if (newTodo.trim()) {
          this.props.onAddTodo(newTodo);
          this.setState({ newTodo: "" }); // Clear the input after submitting
        }
      };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.newTodo}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TodoForm;