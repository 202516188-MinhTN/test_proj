import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './HomePages/home'
import SignUp from './SignUp/signUp'
import Login from './SignUp/login'
import Mail from './HomePages/mail'
import Profile from './Profile'
import {Routes, Route, Link} from "react-router-dom"
import Account from './Search/accounts'
import Products from './create/products'
function App() {
  const [message, setMessage] = useState('')
  
/*  useEffect(() => {
    // Gọi API từ backend (nhờ cấu hình proxy ở trên)
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, []) */

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/mail/:name' element={<Mail />}/>
      <Route path='/search/account' element={<Account />} />
      <Route path='/profile/:slug' element={<Profile />} />
      <Route path='/create/product/:slug' element={<Products />}/>
    </Routes>
  )
}

export default App
