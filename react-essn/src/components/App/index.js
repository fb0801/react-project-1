//import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
import { Component } from 'react';
import { render } from 'react-dom';


 class App extends Component {
   state = {
     series:[]
   }
 
componentDidMount() {
  const series = ['vikings', 'GOT'];

  setTimeout(() => {
    this.setState({ series: series })
  }, 2000);
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
       
        
        
      </header>
      
    </div>
  );

  }
 }
export default App;
  