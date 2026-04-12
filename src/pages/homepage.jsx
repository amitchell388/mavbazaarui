import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';  

import { useUser } from "../UserContext.jsx";

import '../css/homepage.css';
import NewPostModal from './newpostmodal';
import ListingObj from '../objects/listing_obj.jsx';







function Homepage(){
    const { user } = useUser(); 
    
    const [listings, setListings] = useState([
    ]);
    
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        if (user) {
            fetch_listings();
        }
    }, [user]);  

    async function fetch_listings() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://insy-project.onrender.com/fetch_listings/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setListings(prevListings => [...prevListings, ...data.Listings]);
        } catch (error) {
            console.error('Error fetching listings:', error);
            setError('Failed to load listings. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const navigate = useNavigate();
    


    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <div>
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
                        <button className='myListing-button' /*onClick={() => navigate('/my-listings')}*/>My Listings</button>
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

            <div className='main_body_sec'>
                {loading && <p>Loading listings...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                {listings.map((listing, index) => (
                    <ListingObj
                        key={index}
                        price={listing.price}
                        title={listing.title}
                        category={listing.category}
                        img_url={listing.img}
                    />
                ))}
            </div>


            
            <NewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}

export default Homepage;




