//import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
import { Component } from 'react';
import 'whatwg-fetch';
//import { render } from 'react-dom';


 class App extends Component {
   state = {
     series:[]
   }
 
componentDidMount() {
  const series = ['vikings', 'GOT'];

  setTimeout(() => {
    this.setState({ series: series });
  }, 2000);
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
       
        
        
      </header>
      <Intro message="here you can find the tv shows"/>
      the length of the series array = {this.state.series.length}
    </div>
  );

  }
 }
export default App;
  