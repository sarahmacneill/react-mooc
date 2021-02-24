import './App.css';
import Navbar from './components/Navbar';
import Flavours from './components/Flavours';
import Shops from './components/Shops';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Welcome to my Ice Cream React Site! &#128523;</h1>
      </header>
      <Gallery />
      <Flavours />
      <Shops />
      <Navbar />
    </div>
  );
}

export default App;
