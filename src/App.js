
import React from 'react'


import Home from './component/home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import{ Routes,Route} from 'react-router-dom';
import Carddesign from './component/Carddesign';



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
      <Route path='card' element={
     < Carddesign />}/>

     </Routes>
   

     </>
       
   
  );
}

export default App;
