import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
