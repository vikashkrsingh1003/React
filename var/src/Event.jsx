

const  Event =() => {

function fun(){
    alert(" button working")
}

    return(

        <>
        
        <button onClick={fun}> Click</button> <br /><br />     
        <button onDoubleClick={fun}> Double Click</button><br /><br />
        <button onMouseEnter={fun}> mouse enter Click</button><br /><br />
        <button onMouseLeave={fun}> leave Click</button><br /><br />
        <button onMouseMove={fun}> Move Click</button>
        <button onMouseOut={fun}>Out click</button>
    
        </>
    )
} 
export default Event