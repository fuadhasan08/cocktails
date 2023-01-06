import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Loadings from './components/Loading'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={loading ? <Loadings /> : <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />}></Route>
        <Route element={<Error />} />
      </Routes>
    </>
  )
}

export default App
