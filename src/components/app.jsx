import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import TodoIndex from './app/todoIndex';
import ContactIndex from './app/contactIndex';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div id='wrapper' className='todoListWrapper'>
        <Jumbotron bsClass='jumbo' >
          <h1 id='header'>GARY's PIMPED TODOs</h1>
        </Jumbotron>
        <BrowserRouter>
          <div>
            <Link to='/contact'>Contact me</Link>
            <Link to='/todos'>Todos</Link>
            <Route path='/todos' component={TodoIndex} />
            <Route path='/contact' component={ContactIndex} />
          </div>
        </BrowserRouter>
        <ModalFooter>Gergely Flórián Papp, 2018.</ModalFooter>
      </div>
    );
  }
}
export default App;
