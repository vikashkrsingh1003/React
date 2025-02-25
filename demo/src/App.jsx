 import myimg from './thailand.jpg'
 import  './App.css'
 import About from './About.jsx'

function App() {
  
let name = "chhava"
let age = 18

  let st = {
    color: "yellow",
    backgroundColor:" black",
    padding:"20px"
  }
  return (
    <>
    <h1> hello everyone </h1>
    <h1> welcome to react class</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero?</p>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eius cumque eveniet ut aperiam magni deserunt, distinctio animi nulla blanditiis minus ipsum dolores quas neque eaque, enim, repellat quisquam numquam. Similique ea vitae sunt enim tempora. Quam ad sint nesciunt possimus labore consequatur velit asperiores nobis maiores aliquid. Non, nisi.</p>
   {/* <img src="thailand.jpg" alt="" height="500px" />   */}

        <img src={myimg} alt="" height="500px"/>

        <h1 style={{backgroundColor:"red ", color:"white" }}>my name is {name}</h1>
        <h1 style={st}>my Age  {age}</h1>


        <h1 className='excss'> use external css</h1> 

        <nav className='navbar'>
      <h1>logo</h1>
      <h1> contact</h1>
      <h1> blog</h1>
      <h1> about</h1>
        </nav>

        <About/>
   </>
    )
}

export default App
