import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  submit () {
    this.props.submit(this.state.inputValue);
    this.setState({inputValue: ''});
  }
  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }
  render () {
    return (
      <form>
        <input id='new-task' type='text' placeholder='Add a new task' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <Button bsStyle='primary' bsSize='large' type='button' onClick={this.submit.bind(this)}>Add</Button>
        <br />
        {this.state.inputValue}
      </form>
    );
  }
}
export default CreateItemForm;
