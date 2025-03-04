import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import {routes} from '../router/routes'
import PotectedRoute from './PotectedRoute'
import MaterialUI from '../components/navbar/MaterialUI'
import Login  from '../pages/Login'
import Register from '../pages/Register'
import Users from '../pages/Users'


const Router:React.FC = () => {
  return (
   <Routes>
    
    <Route path='/' element={<MaterialUI routes= {routes}/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/users' element={<Users/>}/>
    </Route>

    <Route>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Route>

    <Route element={<PotectedRoute/>}>
      <Route path='/prodacts' element={<PotectedRoute/>}/>
    </Route>
   </Routes>
  )
}

export default Router