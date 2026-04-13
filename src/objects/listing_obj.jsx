import '../css/listingobj.css';
import { useNavigate } from 'react-router-dom';

function ListingObj({ price, title, category, img_url, description, seller, id }){
    const navigate = useNavigate();
    
    function handleClick() {
        navigate(`/listing/${id}`);
    }

    // Function to truncate description if too long
    function truncateDescription(text, maxLength = 100) {
        if (!text) return 'No description available.';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }

    function getSellerInitial(name) {
        if (!name || typeof name !== 'string') return 'UTA';
        const trimmed = name.trim();
        if (!trimmed) return 'UTA';

        const firstWord = trimmed.split(' ')[0];
        const initial = firstWord.charAt(0).toUpperCase();
        return initial || 'UTA';
    }
    
    return(
        <div className="listing_card" onClick={handleClick}>
            <div className="listing_img_wrap">
                {img_url ? (
                    <img src={img_url} alt='listing image' className='listing_img'/>
                ) : (
                    <div className='listing_img_placeholder'>No image</div>
                )}
            </div>

            <div className='listing_bod'>
                <div className='listing_category'>{category || 'Other'}</div>
                <h3 className='listing_title'>{title || 'Untitled item'}</h3>
                <p className='listing_description'>{truncateDescription(description)}</p>
                <div className='listing_footer'>
                    <span className='listing_price'>${price || '0'}</span>
                    <span className='listing_seller'>{getSellerInitial(seller)}</span>
                </div>
            </div>
        </div>
    )
}

export default ListingObj;