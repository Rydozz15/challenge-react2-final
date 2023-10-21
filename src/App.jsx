//Context Provider
import PizzaProvider from './context/PizzaContext'
//Router DOM
import { Routes, Route } from "react-router-dom";
//Navbar
import Navbar from "./components/Navbar"
//Views
import Home from './views/Home'
import Description from './views/Description'
import ShoppingCart from './views/ShoppingCart'
import './App.css'

function App() {
  return (
    <>
    <PizzaProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pizza/:type" element={<Description />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>
    </PizzaProvider>
    </>
  )
}

export default App
