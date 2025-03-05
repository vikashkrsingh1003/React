import { useState } from "react"

function About() {

    let [ar, setAr] = useState({
        name:"viaksh Singh ", contact: 878984
    })

    let [arr, setarr] = useState([1,2,3,4,5])
    return (
        <>



            <h1> About {ar.name} {ar.contact} </h1>
            <h1> arr value := {arr[0]}, {arr[1]}, {arr[2]}, {arr[3]}</h1>
        </>
    )
}
export default About