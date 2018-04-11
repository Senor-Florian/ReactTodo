import React from 'react';

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
