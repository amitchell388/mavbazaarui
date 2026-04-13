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
    
    const [sortBy, setSortBy] = useState('newest');
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
            const response = await fetch('https://insy-project.onrender.com/fetch_listings/0');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setListings(data.Listings);
        } catch (error) {
            console.error('Error fetching listings:', error);
            setError('Failed to load listings. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const navigate = useNavigate();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    function getSortedListings() {
        const sorted = [...listings];
        
        switch(sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
            case 'price-high':
                return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
            case 'category':
                return sorted.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
            case 'newest':
            default:
                return sorted;
        }
    }


    return (
        <div>
        <header className='header'>
            <div className='big-words'>
  
                    <span style={{ color: '#1173d4' }} >
                        MAV
                    </span>
                    <span style={{ color: '#f97a1f' }} >
                        BAZZAR
                    </span>
                    {user?.email === 'acm7363@mavs.uta.edu' && (
                        <span>
                            <button className='notification-button' onClick={() => alert('No new notifications.')}>
                                Notifications
                            </button>
                        </span>
                    )}
            </div>


            <div>
                    
                <span>
                    
                    <span >
                        <button className='myListing-button' onClick={() => navigate('/listings')}>My Listings</button>
                    </span>
                    <span> 
                        <button className='newpost-button' onClick={() => setIsModalOpen(true)}>
                            + List Item
                        </button> 
                    </span>
                    
                </span>
            </div>
                

                
                <button className='logout_but' onClick={() => navigate("/") }>
                    {"->"}
                </button>

        </header>

            <header className='sub-header'>
                <h1 style={{color: 'black'}}>What are you looking for?</h1>
                <input className='search_bar' type="text" placeholder='Search for textbooks, electronics, and more...'/>

            </header>

            <div className='sort-container'>
                <div className='sort-label'>Sort by:</div>
                <button 
                    onClick={() => setSortBy('newest')}
                    className={`sort-button ${sortBy === 'newest' ? 'active' : ''}`}
                >
                    Newest
                </button>
                <button onClick={() => setSortBy('price-low')} className={`sort-button ${sortBy === 'price-low' ? 'active' : ''}`}>Price: Low to High
                </button>
                <button onClick={() => setSortBy('price-high')} className={`sort-button ${sortBy === 'price-high' ? 'active' : ''}`}>Price: High to Low
                </button>
                <button onClick={() => setSortBy('category')} className={`sort-button ${sortBy === 'category' ? 'active' : ''}`}>Category
                </button>
            </div>

            <div className='main_body_sec'>
                {loading && <p>Loading listings...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                {getSortedListings().map((listing, index) => (
                    <ListingObj
                        key={index}
                        price={listing.price}
                        title={listing.title}
                        category={listing.category}
                        img_url={listing.img}
                        description={listing.desc || listing.description || listing.details || listing.text || listing.body || ''}
                        seller={listing.username || ''}
                        id={listing.id || listing._id || listing.listing_id}
                    />
                ))}
                
            </div>


            
            <NewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}

export default Homepage;




