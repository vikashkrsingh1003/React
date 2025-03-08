import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from "./About"
import Navbar from './navbar'


function App() {
 

  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/home" element={<Home />}/>
  <Route path="/about" element={<About />}/>
</Routes>
    </>
  )
}

export default App