import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginpage'

import Homepage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage />
    </>
  )
}

export default App
