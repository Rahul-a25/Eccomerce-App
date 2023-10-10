import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Home from './component/Home'
import { Route,Routes } from 'react-router-dom';
import Cart from './component/Cart';
import ProductDetail from './component/ProductDetail';
import Services from './component/Services';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { useSelector } from 'react-redux';
function App() {
  const loggedin=useSelector((storeData)=>{
    return storeData.LoggedIn
  })
  return (
    <div className="App">
      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={loggedin ?<Cart/>:<Login/>}/>
        <Route path="/productDetail/:id" element={  <ProductDetail/>}/>
        <Route path="/services" element={  <Services/>}/>
        <Route path="/login" element={  <Login/>}/>
        <Route path="/signup" element={  <SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
