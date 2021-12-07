import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';


function App() {
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
      <Intro message="here you can find the series you want"></Intro>
    </div>
  );
}

export default App;
