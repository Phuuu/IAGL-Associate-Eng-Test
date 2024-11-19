import { FETCH_TODOS } from "../actions/types";

const initialState = {
  // Empty array for todos to store the items
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      // Store the fetched todos in data
      return { data: action.payload.todos };
    default:
      return state;
  }
}