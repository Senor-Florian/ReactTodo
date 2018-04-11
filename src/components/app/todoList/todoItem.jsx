import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isRed: false };
  }
  changeColor () {
    this.setState({ isRed: !this.state.isRed });
  }
  render () {
    return (
      <li
        onClick={this.changeColor.bind(this)}
        style={{color: (this.state.isRed ? 'red' : '')}}
      >{this.props.label}</li>
    );
  }
}
export default TodoItem;
