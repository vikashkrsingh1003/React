import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let sendData = createContext()
let name ="Globle data "

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <sendData.Provider value={name}>
    <App />
    </sendData.Provider>
  </StrictMode>,
)

export {sendData}
