

const  Event =() => {

function fun(){
    alert("working")
}

    return(

        <>
        
        <button onClick={fun}> Click</button> <br /><br />
     
        <button onDoubleClick={fun}> Double Click</button><br /><br />
        <button onMouseEnter={fun}> mouse enter Click</button><br /><br />
        <button onMouseLeave={fun}> leave Click</button><br /><br />
        <button onMouseMove={fun}> Move Click</button>
    
        </>
    )
} 
export default Event