import React from 'react'
import { useUser } from "../UserContext.jsx";
import '../css/listings.css'


function ListingCard({listing}){
    return (
        <article className="listing-card">
            <div className="card-media">
                {listing.image ? (
                    <img src={listing.image} alt={listing.title || 'listing image'} />
                ) : (
                    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af'}}>No image</div>
                )}
            </div>
            <div className="card-body">
                <div className="meta">{listing.category || 'Category'}</div>
                <h3 className="title">{listing.title || 'Untitled'}</h3>
                <p className="description">{listing.description || 'No description'}</p>
                <div className="price-row">
                    <div className="price">{listing.price ? `$${listing.price}` : 'Free'}</div>
                </div>
            </div>
        </article>
    )
}

function ListingPage(){
    const userCtx = useUser();
    const user = userCtx?.user;

    const listings = Array.isArray(user?.listings) ? user.listings : [];

    return (
        <div className="listings-container">
            <h1 style={{ color: '#111827' }}>Your Listings</h1>

            {listings.length === 0 ? (
                <div className="empty-message">You haven't posted any listings yet.</div>
            ) : (
                <div className="listings-grid">
                    {listings.map((l, i) => (
                        <ListingCard key={l.id ?? i} listing={l} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ListingPage

