import Child3 from "./child3"

function Child2 (props){
    return (
        <>
       <h1>my age {props.age}</h1>
        <Child3  town="haji pur" />
        </>
    )
}

export  default Child2