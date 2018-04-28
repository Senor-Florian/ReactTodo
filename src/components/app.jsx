import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
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
            <Navbar>
              <Nav>
                <NavItem>
                  <Link bsStyle='pills' id='nav-link' to='/contact'>Contact me</Link>
                </NavItem>
                <NavItem>
                  <Link bsStyle='pills' id='nav-link' to='/'>Todos</Link>
                </NavItem>
              </Nav>
            </Navbar>
            <Route exact path='/' component={TodoIndex} />
            <Route exact path='/contact' component={ContactIndex} />
          </div>
        </BrowserRouter>
        <ModalFooter>Gergely Flórián Papp, 2018.</ModalFooter>
      </div>
    );
  }
}
export default App;
