import { useState } from "react"

function About() {

    let [ar, setAr] = useState({
        name:"viaksh Singh ", contact: 878984
    })

    let [arr, setarr] = useState([1,2,3,4,5])

    let [color, Setcolor] = useState(" ")
    let [hbd, Sethbd] = useState("HAppy birthday")

    return (
        <>



            <h1> About {ar.name} {ar.contact} </h1>
            <h1> arr value := {arr[0]}, {arr[1]}, {arr[2]}, {arr[3]}, {arr[4]}</h1>

            <button onClick={() => setAr({name:"billo", contact:1234})}>Change object </button> <br /><br />

            <button onClick={() => setarr([arr[0]=2, arr[1]=99])}>Change arr</button>

            <br /> <br /> <hr />
  <div style={{height:"100vh", backgroundColor:color}}>

            <button onClick={() => Setcolor('black') }> black</button><br /><br />
            <button onClick={() => Setcolor('white') }> white </button><br /><br />

            
            <button onClick={() =>Sethbd("") }> hide</button>
            <button onClick={() =>Sethbd("HAPPY birthday") }> show</button>

            </div>
        </>
    )
}
export default About