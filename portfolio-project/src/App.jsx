import  React from 'react'
import  GlobalStyle from './globalStyles'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollTop';







function App() {

  return ( 
    
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop/>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/sign-up' element = {<SignUp/>}/>
      </Routes>
      <Footer/> 
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
