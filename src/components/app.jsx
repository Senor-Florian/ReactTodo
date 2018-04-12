import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { todos: [
      {label: 'First objective'},
      {label: 'Second objective'},
      {label: 'Third objective'},
      {label: 'Fourth objective'},
      {label: 'Fifth objective'}
    ] };
  }

  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({label: inputValue});
    this.setState({todos: todos});
  }

  render () {
    console.log(this.state);
    return (
      <div className='todoListWrapper'>
        <TodoList todos={this.state.todos} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default App;
