import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      input: ''
    }

  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitTodo(this.state.input);
    this.setState({input: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='todo-input'
                 value={this.state.input}
                 onChange={this.handleInputChange} />
          <button type='submit'
                  className='todo-submit'>
            Add Todo
          </button>
        </form>
      </div>
    )
  }

}

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;