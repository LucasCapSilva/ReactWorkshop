import React from 'react'
import Footer from './components/statics/footer/Footer'
import NavBar from './components/statics/navbar/NavBar'

import Home from './paginas/home/Home'


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>

      <Footer></Footer>
    </div>
  )
}

export default App
