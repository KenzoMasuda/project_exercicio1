import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scan from './Scan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Scanner de Valores
        </p>
        <div>
          <Scan n1 = {1} n2 = {10}></Scan>
        </div>
      </header>
    </div>
  );
}

export default App;
