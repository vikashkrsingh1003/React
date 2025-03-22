import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let sendData = createContext()
let ob ={
     name:"vikash singh",
     age: 20 , 
     contact : 8789
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <sendData.Provider value={ob}>
    <App />
    </sendData.Provider>
  </StrictMode>,
)

export {sendData}
