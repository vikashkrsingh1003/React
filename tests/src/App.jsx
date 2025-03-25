


import './App.css'

import Render from './Render.jsx'


function App() {
  return (

    
         <>
  <nav> 
       <div className="header">
       <h1>LOGO</h1>
        
       
            <ul>
                <li> Home </li>
                <li> About </li>

                <li> Contact </li>
                <li> Cart </li>

                <button>Sign in</button>
            </ul>
        </div>
  </nav>


  
<div className="left">
          <ul>
        <h1> Hello Everybody</h1>
       <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia enim rerum vero! Beatae ducimus recusandae iste! Commodi aperiam, repellendus nobis explicabo molestias temporibus quia ad id asperiores eum atque eius.</p>

       <button> Explore now </button>
       </ul>
       <ul>
        <img src="thailand.jpg" alt="" height="500px"/>
        </ul>
    </div> 


    <div> 

      <button className="render "> Product List </button>
    </div>
 
 
    <footer className="ft">
            <ul>
                <li> help </li>
                <li> services </li>
                <li> cutomer support </li>
                <li> others </li>

               
            </ul>
            <ul>
                <li> help </li>
                <li> services </li>
                <li> cutomer support </li>
                <li> others </li>

               
            </ul>
            <ul>
                <li> help </li>
                <li> services </li>
                <li> cutomer support </li>
                <li> others </li>

               
            </ul>
        </footer>
        
        

    </>

  );
}

export default App;