import React from 'react';
import CreateItemForm from './createItem/createItemForm';

class CreateItem extends React.Component {
  render () {
    return (
      <div className='createItemWrapper'>
        <CreateItemForm />
      </div>
    );
  }
}
export default CreateItem;
