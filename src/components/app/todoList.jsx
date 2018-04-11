import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  render () {
    return (
      <ul className="todo-list">
        <TodoItem label='Witness me, brothers!' />
        <TodoItem label='I witness you, brother!' />
        <TodoItem label='Mediocre!' />
      </ul>);
  }
}
export default TodoList;
