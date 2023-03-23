import logo from './logo.svg';
import './App.css';

import Example21 from './examples/Example21Complete.js';
import Example22 from './examples/Example22Complete.js';
import Example23 from './examples/Example22Complete.js';

function App() {
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
        <Example21></Example21>
        <Example22></Example22>
        <Example23></Example23>
      </header>
    </div>
  );
}

export default App;
