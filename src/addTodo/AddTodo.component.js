import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  return (
    <div>
      <form>
        <input className='todo-input'/>
        <button type='submit'
                className='todo-submit'
                onClick={submitTodo}>
          Add Todo
        </button>
      </form>
    </div>
  )
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;