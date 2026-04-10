import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import { useUser } from "../UserContext.jsx";

import '../css/homepage.css'
import NewPostModal from './newpostmodal'





function Homepage(){
    const { user } = useUser(); // use this to access user data in this component


    const navigate = useNavigate();
    


    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
        <header className='header'>
            <div>
                <span className='big-words'>
                    <span style={{ color: '#1173d4' }} >
                        MAV
                    </span>
                    <span style={{ color: '#f97a1f' }} >
                        BAZZAR
                    </span>
                </span>
            </div>
            <input className='search_bar' type="text" placeholder='Search for textbooks, electronics, and more...'/>


            <div>

                <span>
                    <span >
                        <button className='myListing-button' onClick={() => navigate('/my-listings')}>My Listings</button>
                    </span>
                    <span> 
                        <button className='newpost-button' onClick={() => setIsModalOpen(true)}>
                            + List Item
                        </button> 
                    </span>
                </span>
            </div>
            

            
           
            <button onClick={() => navigate("/") }>
                Logout
            </button>

        </header>
        <header className='sub-header'>
            <h1 style={{color: 'black'}}>What are you looking for?</h1>
        </header>

        <body>
            <div id='body_div'> 

                {/* show signed-in user info */}
                {user && (
                    <div className='user-info'>
                        <p style={{ margin: 0, fontWeight: 600 }}>Hello, {user.name}</p>
                        <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
                    </div>
                )}

                {/* this is just a placeholder for the listing component, will be mapped over with the listing data from the backend */}
                <div className='listing'>
                    <div className='listing-image'>
                        <img src='' alt='listing image'/>  
                    </div>
                    <div className='listing-header'>
                        <h2>Category</h2> 
                    </div>
                    <div className='listing-title'>
                        <p>Item Name</p>
                    </div>
                    <div className='listing-description'>
                        <p>item description</p>
                    </div>
                    <div className='listing-price'>
                        <p>item price</p> 
                    </div> 
                </div>


            </div>
        </body>

        
        <NewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    )
}

export default Homepage;