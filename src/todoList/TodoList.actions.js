export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = index => {
  return {
    type: REMOVE_TODO,
    index,
  }
};