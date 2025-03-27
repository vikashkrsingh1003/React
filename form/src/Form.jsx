import { useState } from 'react';
import React from 'react'


const Form = () => {

     let [data, setdata] = useState({
        fname: "", lname: "", age: "", contact: "", add: "",
         });
    
      function setvalue(e) {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    
      }

      function finalform(e) {
        e.preventDefault()
        console.log(data);
    
      }
    

  return (
    <>
    <h1> Practice from </h1>

<form action="" onSubmit={finalform}>

<label htmlFor="" > fname </label>
<input type="text" name='fname'  onChange={setvalue} > </input>

<label htmlFor="" > lname </label>
<input type="text" name='lname' onChange={setvalue}  > </input>

<label htmlFor="" > Age </label>
<input type="text" name='age' onChange={setvalue}  > </input>

<label htmlFor="" > COntact </label>
<input type="number" name='contact'onChange={setvalue}  > </input>

<label htmlFor="" > Add </label>
<input type="text" name='add' onChange={setvalue}  > </input>

<input type='submit' value="Submit" />



</form>

    
    
    
    
    
    
    </>
  )
}

export default Form
