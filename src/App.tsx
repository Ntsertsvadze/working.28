import React from 'react'
import './App.css'
import Router from './router/Router'
// import Navbar from './components/Navbar'
// import { routes } from './router/routes'

const App:React.FC = () => {
  return (
    <>
      {/* <Navbar routes={routes} isVertical={true}/> */}
      <Router/>
    </>
  )
}

export default App
