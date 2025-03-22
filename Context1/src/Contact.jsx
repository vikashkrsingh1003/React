import React, { useContext } from 'react'
import { sendData } from './main'

const Contact = () => {
    let acceptData = useContext(sendData)
  return (
  <>
  
  <h1> Contact page {acceptData.name} and my age {acceptData.age} </h1>

{/* 
  <sendData.Consumer>

  {
    (name) => {return <h1> {name}</h1>}
  }

  </sendData.Consumer>
   */}
  </>
  )
}

export default Contact
