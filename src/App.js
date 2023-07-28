import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Home from './component/Home'
import { Route,Routes } from 'react-router-dom';
import Cart from './component/Cart';
import ProductDetail from './component/ProductDetail';
import Services from './component/Services';
function App() {
  return (
    <div style={{backgroundColor:"#48dbfb"}} className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/productDetail/:id" element={  <ProductDetail/>}/>
        <Route path="/services" element={  <Services/>}/>

      </Routes>
    
      
      
    </div>
  );
}

export default App;
