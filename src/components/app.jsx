import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  render () {
    return (
      <div className='todoListWrapper'>
        <TodoList />
        <CreateItem />
      </div>
    );
  }
}
export default App;
