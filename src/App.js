import './App.css';
import Navbar from './components/Navbar';
import Flavours from './components/Flavours';
import Toppings from './components/Toppings';
import Shops from './components/Shops';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App" id="home">
      <Navbar sticky="top" />
      <header>
        <h1>Welcome to the Little Cone Sunshine React Site! &#128523;</h1>
      </header>
      <Gallery />
      <Flavours />
      <Toppings />
      <Shops />
    </div>
  );
}

export default App;
