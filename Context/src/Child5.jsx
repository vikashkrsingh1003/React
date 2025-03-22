import React from 'react'
import { newdata } from './Child3'

const Child5 = () => {
  return (
   <>
   <h1> This is a child5</h1>

   <newdata.Consumer>
    
    {
        (data) => {return  <h1>{data}</h1>}
    }


   </newdata.Consumer>
   
   </>
  )
}

export default Child5
