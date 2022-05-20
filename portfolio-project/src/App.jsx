import  React from 'react'
import  GlobalStyle from './globalStyles'
import { Navbar, Footer } from './components'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
// import { useState } from 'react'




function App() {

  return ( 
    
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element = {<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
      <Routes> 
      <Route path='/' element = {<Footer/>}/>
      </Routes> 
    </BrowserRouter>

  // {/* <>
  // <GlobalStyle/>
  // <h1>   eai </h1>
  // {/* <Route path='/' element = {<Navbar/>}> */}
  // {/* </>
  //    */} */}

  
   
    
  

  
    
 
    

  )
}

export default App
