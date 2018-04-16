import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isDone: false
    };
  }
  delete () {
    setTimeout(() => {
      this.setState({ isDone: !this.state.isDone });
      this.props.delete(this.props.todo.label);
    }, 1000);
    this.setState({ isDone: !this.state.isDone });
  }
  render () {
    return (
      <li
        style={{opacity: (this.state.isDone ? 0.4 : 1)}}>
        <input id='checkbox' type='checkbox' checked={this.state.isDone} onClick={this.delete.bind(this)} />
        {this.props.todo.label}
      </li>
    );
  }
}
export default TodoItem;
