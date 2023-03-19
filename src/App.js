import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import User from './Components/User';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import ProductDetail from './Components/ProductDetail'

import Nav from './Components/Nav';
function App() {

  return (
    <div className="App">
    
   
        <Routes>
        <Route path ="/" element={<CreateAccount/>}></Route>
          <Route path ="/Login" element={<Login/>}></Route>
        <Route path="Nav" element={<Nav/>} > </Route>
        <Route path="Home" element={<Home/>} >  </Route>
        <Route path="Product" element={<Product/>} > </Route>
        <Route path="User" element={<User/>} > </Route>
        <Route path="ContactUs" element={<ContactUs/>} > </Route>
        <Route path="ProductDetail" element={<ProductDetail/>}></Route>
      
     </Routes>

    
    
    
   
    </div>
  );
}

export default App;
