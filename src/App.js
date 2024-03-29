import React, {Component} from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import NewMenu from './components/NewMenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Confusion</NavbarBrand>
            </div>
            {/* <Menu/> */}
        </Navbar>
        <NewMenu dishes={this.state.dishes} />
      </div>
    )
  } 

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
   
  }

  
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
