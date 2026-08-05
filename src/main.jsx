import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/reset.css'
import './css/global.css'
import App from './App.jsx'
import Ars from './Ars.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ars />
  </StrictMode>,
)
