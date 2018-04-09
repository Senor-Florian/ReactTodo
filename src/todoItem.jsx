import React from 'react';

class TodoItem extends React.Component {
  render () {
    return (
      <li>{this.props.label}</li>
    );
  }
}
export default TodoItem;
