import '../css/listingobj.css';
import { useNavigate } from 'react-router-dom';

function ListingObj({ price, title, category, img_url, id }){
    const navigate = useNavigate();
    
    function handleClick() {
        navigate(`/listing/${id}`);
    }
    return(
        <>
            <div className="listing_card" onClick={handleClick}>

                <img  src={img_url} alt='listing image' className='listing_img'/>

                <div className='listing_bod'>
                    <p>${price}</p>
                    <p>{title}</p>
                    <p>Category: {category}</p>
                    <p className='hidden'>id: {id}</p>
                </div>
            </div>
        </>
    )
}

export default ListingObj;