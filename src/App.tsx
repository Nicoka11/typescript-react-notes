import logo from './logo.svg';
import AddNote from './components/AddNote'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddNote btn="Add a note"/>
      </header>
    </div>
  );
}

export default App;
