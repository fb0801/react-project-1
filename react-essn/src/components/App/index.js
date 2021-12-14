//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'whatwg-fetch';
//import { render } from 'react-dom';
import Main from '../Main';

 class App extends Component {
  

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
        
      </header>
      <Main />
    </div>
  );

  }
 }
export default App;
  