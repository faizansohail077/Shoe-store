import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Product from './Components/Product';
import Error from './Error';
import ProductIndex from './Components/ProductIndex';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='products' element={<Product />}>
          <Route path='/' element={<ProductIndex />}></Route>
          <Route path=':id' element={<ProductDetails />}></Route>
        </Route>
      </Routes>




    </div>
  );
}

export default App;
