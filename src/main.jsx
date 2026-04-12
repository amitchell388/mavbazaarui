import { UserProvider } from "./UserContext";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx'
import NewPostModal from './pages/newpostmodal.jsx'
<<<<<<< HEAD
import NewUser from "./pages/newuser.jsx";
=======
import ListingPage from './pages/listingpage.jsx'
>>>>>>> 8163c19ec5009a62dad8dd4c80e6b83173fe4505


createRoot(document.getElementById('root')).render(
  <UserProvider>
      <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/listings' element={<ListingPage />} />
        <Route path='/newpost' element={<NewPostModal isOpen={true} onClose={() => {}} />} /> 
        <Route path='/newuser' element={<NewUser />} />
      </Routes>  
      </BrowserRouter> 
    </StrictMode>
  </UserProvider>

)
