import { useNavigate } from "react-router-dom"




function About(){
    let navigator = useNavigate()
  function servicee(){
       navigator('/Services')
  }
    return(
        <>
        <h1>About page </h1>
        <ul>
        <button onClick={servicee}>Service</button>
        </ul>
        </>
    )
}

export default About