import { SUBMIT_TODO } from "../addTodo/AddTodo.actions";
import {REMOVE_TODO, UNDO_REMOVETODO} from "../todoList/TodoList.actions";

export const initialState = {
  todos: [],
  lastDeleted: null
};

export const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
          },
        ],
      };
    case REMOVE_TODO:
      let updatedTodos = state.todos.slice();
      updatedTodos.splice(action.index, 1);
      return {
        ...state,
        todos: updatedTodos
      };
    case UNDO_REMOVETODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: state.lastDeleted
          }
        ],
        lastDeleted: null,
      };
    default:
      return state;
  }
};