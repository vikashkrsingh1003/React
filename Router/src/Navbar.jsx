import { Link } from "react-router-dom"


 
function Navbar(){

    return(
        <>
        <nav>

  <h1>LOGO </h1> 
  <ul>
    <li> <Link to="/"> HOme</Link></li>
    <li> <Link to="/About"> About</Link></li>

    <li> <Link to= "/Services"> Services</Link></li> 
    <li> <Link to= "/Contact">Contact</Link></li> 
  </ul>
        </nav>
        
        
        
        </>
    )
}
export default Navbar

