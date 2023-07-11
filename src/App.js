import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-6xl font-bold underline">This is big big header</h1>
      <p>This is only a paragraph</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
