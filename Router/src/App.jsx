import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from "./About"
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'



function App() {
 

  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/home" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/Contact" element={<Contact/>}/>

</Routes>
    </>
  )
}

export default App