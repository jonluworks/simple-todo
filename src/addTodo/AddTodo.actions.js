export const SUBMIT_TODO = 'SUBMIT_TODO';

export const submitTodo = text => {
  return {
    type: SUBMIT_TODO,
    text,
  }
};