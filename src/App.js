import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter , Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>

          </Routes>
          <Footer/>
    </BrowserRouter>
  
      // <div>
      //   HElooo 
      // </div>
  );
}

export default App;
