import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Login from './login';
import Register from './Register';
import Profile from './Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home name="My Store" />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes> 
    </div>
  );
}

export default App;
