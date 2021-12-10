//import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
import { Component } from 'react';
import 'whatwg-fetch';
import Series   from '../../containers/Series';
//import { render } from 'react-dom';


 class App extends Component {
  

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">REACT prac</h1>
        
      </header>
      <Intro message="here you can find the tv shows"/>
      <series />
    </div>
  );

  }
 }
export default App;
  