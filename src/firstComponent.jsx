import React from 'react';
import TodoItem from './todoItem';

class App extends React.Component {
  render () {
    return (
      <ul>
        <TodoItem label='Witness me, brothers!' />
        <TodoItem label='I witness you, brother!' />
        <TodoItem label='Mediocre!' />
      </ul>);
  }
}
export default App;
