import React from 'react';
import {Button} from 'react-bootstrap';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  submit () {
    this.props.submit(this.state.inputValue);
  }
  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }
  render () {
    return (
      <form>
        <input type='text' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <Button type='button' onClick={this.submit.bind(this)}>Add new task</Button>
        <br />
        {this.state.inputValue}
      </form>
    );
  }
}
export default CreateItemForm;
