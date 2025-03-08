import { Link } from "react-router-dom"


 
function Navbar(){

    return(
        <>
        <nav>

  <h1>LOGO </h1> 
  <ul>
    <li> <Link to="/home"> HOme</LInk></li>
    <li> <Link to="/About"> About</LInk></li>

    <li>Services</li> 
  </ul>
        </nav>
        
        
        
        </>
    )
}
export default Navbar

