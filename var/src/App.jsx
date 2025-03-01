
 import Event  from "./Event"
function App() {
  let name = " vilash Singh"
  // let age = prompt("enter your age ")

  let ob = {
    empno: 567,
    empname:"Rohit",
    dep : "manager",
    sal : 20000000

  }
  let arr = [12 , "vk" ,   387, "true", 813]

  return (
    <>
      
      {/* <h1> Welcome {name}</h1>
      <h1> age {age}</h1> */}

      <h1> Employee number : {ob.empno}</h1>
      <h1> Employee name : {ob.empname}</h1>
      <h1> Employee department : {ob.dep}</h1>
      <h1> Employee Salary : {ob.sal}</h1>
 <hr /><hr />
      <h1> first index is : {arr[0]}</h1>
      <h1> Second index is : {arr[1]}</h1>
      <h1> THird index is : {arr[2]}</h1>
      <h1> four index is : {arr[3]}</h1>
      <h1> five index is : {arr[4]}</h1>

      <Event/>
    </>
  )
}

export default App
