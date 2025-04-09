import Child2 from "./Child2.jsx"
import Child3 from "./child3.jsx"

function Child1 (props){
    let {name} = props
    return (
        <>
        <h1>My name is {name}</h1>
        <Child2 age="28" />
        <h1> contact {props.contact}</h1>
      
        </>
    )
}

export default Child1