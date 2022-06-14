import React from 'react'
import Footer from './components/statics/footer/Footer'
import NavBar from './components/statics/navbar/NavBar'

import Home from './paginas/home/Home'
import Produtos from './paginas/produtos/Produtos'


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
    <Produtos></Produtos>

      <Footer></Footer>
    </div>
  )
}

export default App
