import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './Components/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Welcome from "./Pages/Welcome"

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
{/*               <div className="App"> */}
{/*                 <Routes> */}
{/*                   <Route path="/" element={<PageLayout />}> */}
{/*                     <Route index element={<Home />} /> */}
{/*                     <Route path="/post" element={<Post />} /> */}
{/*                   </Route> */}
{/*                 </Routes> */}
{/*               </div> */}

              <header>
                      <nav class="flex justify-between items-center flex-wrap">
                              <h1 class="text-lg font-bold text-purple-800"><Header /></h1>
                              <h2 class="text-lg font-bold text-purple-800">MavBazaar </h2>

                          <p>Your trusted marketplace for buying, selling, and trading with fellow
                              Mavericks. Verified UTA students, real deals.
                          </p>
                      </nav>
              </header>


          <button onClick={() => setCount((count) => count - 1)}>
                     Verify Email
          </button>
{/*         <a href="https://vite.dev" target="_blank"> */}
{/*           <img src={viteLogo} className="logo" alt="Vite logo" /> */}
{/*         </a> */}
{/*         <a href="https://react.dev" target="_blank"> */}
{/*           <img src={reactLogo} className="logo react" alt="React logo" /> */}
{/*         </a> */}



{/*       <footer> */}
{/*       <ul class="flex space-x-4 text-purple-800 font-semibold flex-wrap"> */}
{/*           <li><a href="/FAQ">FAQ?</a></li> */}
{/*           </ul> */}
{/*         </footer> */}



{/*       <p>Your trusted marketplace for buying, selling, and trading with fellow */}
{/*           Mavericks. Verified UTA students, real deals.</p> */}
{/*       <div className="card"> */}
{/*         <button onClick={() => setCount((count) => count - 1)}> */}
{/*           count is {count} */}
{/*         </button> */}
{/*       </div> */}
{/*       <p className="read-the-docs"> */}
{/*         Click on the Vite and React logos to learn more */}
{/*       </p> */}

    </>
  )
}

export default App
