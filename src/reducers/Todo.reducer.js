import { SUBMIT_TODO } from "../addTodo/AddTodo.actions";

export const initialState = {
  todos: []
};

export const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    default:
      return state;
  }
};