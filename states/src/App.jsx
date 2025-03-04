import { useState } from "react"


function App() {
  
  let [name , Setname] = useState("Vikash Singh")
  let [age, Setage] = useState(22)
  let [contact , Setcontact] = useState(8789841693)
  let [email, Setemail] = useState("vksingh10620034@gmail.com")
 
  function fun(){
    Setname("neha Singh")
   
   
  }

  return (
    <>
   
    <h1>my name is  {name}</h1>
    <h1>age : {age}</h1>
    <h1>contact : {contact}</h1>
    <h1>email : {email}</h1>
  
    <button onClick={fun}>Change name </button>
    <button onClick={() => Setage(25)}>Change age </button>
    <button onClick={() => Setcontact(620799)}>Change contact </button>
    <button onClick={() => Setemail("vikash@12334")}>Change email </button>
    </>
  )
}

export default App
