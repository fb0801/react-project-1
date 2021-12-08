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
ComponentDidMount(); {
  const series = ['vikings', 'GOT'];

  setTimeout(() => {
    this.setTimeout({ series: series })
  }, 2000);
}

render(); {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      
    </div>
  );

  }

export default App;
  