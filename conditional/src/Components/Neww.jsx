import { useState } from "react"

function Neww(){

    let [st,setSt] = useState(true)
    return(
        <>
       
        {st ?  <h1> Welcome </h1> : " " }

        <button onClick={()=> setSt(false)}>Hide</button>
        <button onClick={()=> setSt(true)}>Show</button>
        </>
    )
}
export default Neww