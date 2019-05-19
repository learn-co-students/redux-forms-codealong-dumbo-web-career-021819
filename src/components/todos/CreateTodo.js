import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newToDo = this.state;
    this.props.addTodo(newToDo);
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <br />
            <br />
            <input type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        <br />
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
};

export default connect(null, mapDispatchToProps)(CreateTodo);
