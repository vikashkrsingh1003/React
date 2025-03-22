import React, { createContext } from 'react'
import Child4 from './Child4'

import { createContext } from 'react'

let newdata = createContext()
 let city = "vk Singh"
const Child3 = () => {
  return (
    <>
    <h1> This is child3 </h1>

     <newdata.Provider value={city}>
    
          <Child4/>
         </newdata.Provider>
    
    </>
  )
}

export default Child3
export {newdata}
