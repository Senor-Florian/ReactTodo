import React from 'react';

class CreateItemForm extends React.Component {
  render () {
    return (
      <form>
        <input type='text' placeholder='Write something here.' />
        <button type='button'>Click me, baby.</button>
      </form>
    );
  }
}
export default CreateItemForm;
