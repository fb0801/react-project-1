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
  fetch('https://api.tvmaze.com/search/shows?q=the-simpsons')
  .then((Response)=> Response.json())
  .then(json => this.setState({ series: json }))
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
  