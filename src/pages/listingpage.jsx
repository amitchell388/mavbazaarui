import { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import ListingObj from '../objects/listing_obj.jsx';
import '../css/homepage.css';

import { useUser } from "../UserContext.jsx";

function ListingPage() {

    const { user } = useUser();


    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchListings();
    }, []);

    async function fetchListings() {
        setLoading(true);
        setError(null);
        try {

            const response = await fetch(`https://insy-project.onrender.com/fetch_listings/${user.id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API Response:', data);
            
            // couldnt get it to work without each version idk why
            const listingsArray = data.Listings || data.listings || data || [];
            setListings(listingsArray);
        } catch (error) {
            console.error('Error fetching listings:', error);
            setError('Failed to load listings. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <header className='header'>
                <div>
                    <span className='big-words'>
                        <span style={{ color: '#1173d4' }}>MAV</span>
                        <span style={{ color: '#f97a1f' }}>BAZZAR</span>
                    </span>
                </div>
                <button onClick={() => navigate('/home')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Back to Home
                </button>
            </header>

            <div className='sub-header'>
                <h1 style={{ color: 'black' }}>Your Listings</h1>
            </div>

            <div className='main_body_sec'>
                {loading && <p>Loading listings...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {listings.length === 0 && !loading && <p>No listings found.</p>}
                
                {listings.map((listing, index) => (
                    <ListingObj
                        key={index}
                        price={listing.price}
                        title={listing.title}
                        category={listing.category}
                        img_url={listing.img}
                        id={listing.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListingPage;
