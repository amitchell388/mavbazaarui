
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from "../UserContext.jsx";
import '../css/onelisting.css';

function OneListing() {
    const { id } = useParams();
    const { user } = useUser();
    const [listingData, setListingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchListingData();
    }, [id]);

    async function fetchListingData() {
        setLoading(true);
        setError(null);
        try {
            console.log('Fetching listing with ID:', id);
            const response = await fetch(`https://insy-project.onrender.com/fetch_one_listings/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Try different possible response structures
            let listing = null;
            if (data.Listings && Array.isArray(data.Listings) && data.Listings.length > 0) {
                listing = data.Listings[0];
            } else if (data.listing) {
                listing = data.listing;
            } else if (Array.isArray(data) && data.length > 0) {
                listing = data[0];
            } else {
                console.log('Data structure:', data);
                listing = data;
            }
            

            const responsetwo = await fetch(`https://insy-project.onrender.com/fetch_user_again/${+listing.user}`);
            const userData = await responsetwo.json();
    
            const selleremail = userData.email;


            if (listing && typeof listing === 'object') {
                setListingData({
                    price: listing.price,
                    title: listing.title,
                    category: listing.category,
                    img_url: listing.img || listing.img_url,
                    description: listing.desc || 'No description available.',
                    seller_name: listing.name || 'Unknown',
                    seller_email: selleremail
                });
            } else {
                throw new Error('Invalid listing data structure');
            }
        } catch (error) {
            console.error('Error fetching listing:', error);
            setError('Failed to load listing. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    function clickBuyNow() {
        if (!user) {
            alert('Please log in to purchase items.');
            return;
        }

        
        const currentNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const newNotification = {
            title: listingData.title,
            sellerEmail: listingData.seller_email,
            
        };
        currentNotifications.push(newNotification);
        localStorage.setItem('notifications', JSON.stringify(currentNotifications));

       
        alert(`Sent for "${listingData.title}"! The seller will be notified.`);
    }



    return(
        <>
        <div className='header_listing'>
            <button className='head_button' onClick={() => window.history.back()}> {"<-"} Back to Market</button>

        </div>

        <div className='main_listing_body'>
            {loading && <p>Loading listing...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {listingData && (
                <>
                    <div className='left_sec'>
                        <div className='image_lsting'>
                            {listingData.img_url && <img src={listingData.img_url} alt="Listing" />}
                        </div>
                    </div>

                    <div className='right_sec'>
                            <h1>{listingData.title}</h1>
                            <hr className='bruh'></hr>
                            <div className='desc_body'>
                                <p>Description: {listingData.description}</p>
                            </div>
                            

                            <hr className='bruh'></hr>

                            <div className='cond_bod'>
                                <div className='cond_body_words'>
                                    <p>Price: ${listingData.price}</p>
                                    <p>Condition: {listingData.condition || 'N/A'}</p>
                                </div>
                                <div className='cond_body_words'>
                                    <p>Category: {listingData.category}</p>
                                    <p>Seller: {listingData.seller_email || 'Unknown'}</p>

                                </div>

                            </div>
                            <hr className='bruh'></hr>

                            <div className='buttons'>
                                <button className='act_button' onClick={clickBuyNow}>Buy Now</button>
                                <button className='act_button'>Message Seller</button>
                            </div>
                            
                    </div>
                </>
            )}
        </div>
        </>
    )

}


export default OneListing;