import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios
      .get("http://localhost:9091/api/todo")
      .then(({ data }) => {
        console.log('Fetched Todos:', data); // Add a log here to see the fetched data
        dispatch(setTodos(data)); // Dispatch to update Redux state
      })
      .catch((error) => console.error('Error fetching todos:', error)); // Catch any errors
  };
}

function setTodos(todos) {
  return {
    type: FETCH_TODOS,
    payload: { todos },
  };
}

export function addTodo(newTodo) {
  return function (dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", { task: newTodo })
      .then(({ data }) => {
        dispatch(fetchTodos()); // Fetch updated todos after adding the new one
      })
  };

}