import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
import { Component } from 'react';
import { render } from 'react-dom';


 class App extends Component {
   state = {
     series:[]
   }
 }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      
    </div>
  );
}

export default App;
