import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter , Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
    </BrowserRouter>
  
      // <div>
      //   HElooo 
      // </div>
  );
}

export default App;
