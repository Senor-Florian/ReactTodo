import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';
import {Jumbotron, PageHeader, FormGroup, ModalFooter} from 'react-bootstrap';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { label: 'First task' },
        { label: 'Second task' },
        { label: 'Third task' },
        { label: 'Fourth task' },
        { label: 'Fifth task' }
      ]
    };
  }
  delete (label) {
    let todos = this.state.todos;
    let i = 0;
    while (i < todos.length && todos[i].label !== label) {
      i++;
    }
    if (i < todos.length) {
      todos.splice(i, 1);
      this.setState({ todos: todos });
    }
  }
  submit (inputValue) {
    let todos = this.state.todos;
    todos.push({ label: inputValue });
    this.setState({ todos: todos });
  }

  render () {
    return (
      <div id='wrapper' className='todoListWrapper'>
        <PageHeader id='pageHeader'>GARY's PIMPED TODOs</PageHeader>
        <Jumbotron id='jumbotron'>
          <FormGroup>
            <TodoList todos={this.state.todos} delete={this.delete.bind(this)} />
            <CreateItem submit={this.submit.bind(this)} />
          </FormGroup>
        </Jumbotron>
        <ModalFooter>Gergely Flórián Papp, 2018.</ModalFooter>
      </div>
    );
  }
}
export default App;
