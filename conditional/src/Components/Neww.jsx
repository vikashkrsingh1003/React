import { useState } from "react"

function Neww(){

    let [st,setSt] = useState(true)
  
    let [Count, setCount] = useState(0)
   
    function Dec(){

        if(Count !=0){
            setCount(Count-1)
        }
    }
    return(
        <>
       
        {st ?  <h1> Welcome </h1> : " " }

        <button onClick={()=> setSt(false)}>Hide</button>
        <button onClick={()=> setSt(true)}>Show</button> <br /><br />

        {!st ?   <button onClick={()=> setSt(!st)}> show </button>:   <button onClick={()=> setSt(!st)}> hide </button> }

       
  <br /><br />

     <h1>Count : {Count}</h1>
      <button onClick={() => setCount(Count+1)}> + </button>
      <button onClick={() => setCount(Dec)}> - </button>


        </>
    )
}
export default Neww