import { createContext } from "react"

import child1 from "./Child1"

let appdata = createContext()
  let name = "vikash Singh"

function App() {
 
  
  return (
    <>
   
     <h1> Hello </h1>

     <appdata.Provider value={name}>

      <child1/>
     </appdata.Provider>


    </>
  )
}

export default App
export {appdata}
