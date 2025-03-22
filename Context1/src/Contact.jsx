import React from 'react'
import { sendData } from './main'

const Contact = () => {
  return (
  <>
  
  <h1> Contact page </h1>

  <sendData.Consumer>

  {
    (name) => {return <h1> {name}</h1>}
  }

  </sendData.Consumer>
  
  </>
  )
}

export default Contact
