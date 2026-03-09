import { UserProvider } from "./UserContext";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx'


createRoot(document.getElementById('root')).render(
  <UserProvider>
      <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<Homepage />} />
      </Routes>  
      </BrowserRouter> 
    </StrictMode>,
  </UserProvider>

)
