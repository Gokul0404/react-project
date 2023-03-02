
import React from 'react'
import './App.css';

import Home from './component/home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import{ Routes,Route} from 'react-router-dom';


function App() {
  return (
     <>
     <Routes>
     
      <Route path='/' element={

        
     < Home />}/>
     <Route path='about' element={
     < About />}/>
     <Route path='product' element={
     < Product />}/>
     <Route path='contact' element={
     < Contact />}/>

     </Routes>
   

     </>
       
   
  );
}

export default App;
