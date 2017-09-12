export const REMOVE_TODO = 'REMOVE_TODO';
export const UNDO_REMOVETODO = 'UNDO_REMOVETODO';

export const removeTodo = index => {
  return {
    type: REMOVE_TODO,
    index,
  }
};

export const undoTodo = () => {
  return {
    type: UNDO_REMOVETODO
  }
};