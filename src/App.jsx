import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './component/Common/Header'
import Footer from './component/Common/Footer'
import Bag from './Pages/Bag'
import PageNotFound from './component/Error/PageNotFound'
import ScrollToTop from './component/cards/ScrollTop'
import Bannertwo from './component/HotDeals/Bannertwo'
import Contact from './Pages/Contact'
import NikeAirMax from './Pages/NikeAirMax'
import Cart from './Pages/Cart'



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bags' element={<Bag/>} />
        <Route path='/Error' element={<PageNotFound/>}/>
        <Route path='/hotdeal' element={<Bannertwo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/NikeAirMax' element={<NikeAirMax info={"RELATED PRODUCTS"}/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
