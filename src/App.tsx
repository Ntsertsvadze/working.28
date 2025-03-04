import React from 'react'
import './App.css'
import Router from './router/Router'
import { AuthProvider } from './context/authContext'


const App:React.FC = () => {
  return (
    <>
     <AuthProvider>
        <Router/>
     </AuthProvider>
      
    </>
  )
}

export default App
