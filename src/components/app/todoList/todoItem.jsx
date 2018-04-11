import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isDone: false };
  }
  changeDone () {
    this.setState({ isDone: !this.state.isDone });
  }
  render () {
    return (
      <li
        onClick={this.changeDone.bind(this)}
        style={{color: (this.state.isDone ? 'red' : '')}}
      >{this.props.label}</li>
    );
  }
}
export default TodoItem;
