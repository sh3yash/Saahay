import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Header from './Components/Header'
import Layout from './Components/Layout'
import Home from './Pages/Home/Home'
import Seedsprice from './Pages/Seedsprice/Seedsprice'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element ={<Layout/>}>
            <Route path='/'element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Seedprice' element={<Seedsprice/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App