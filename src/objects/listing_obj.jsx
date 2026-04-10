import '../css/listingobj.css';


function ListingObj({ price, title, category, img_url }){
    return(
        <>
            <div className="listing_card">

                <img src={img_url} alt='listing image' className='listing_img'/>

                <div className='listing_bod'>
                    <p>${price}</p>
                    <p>{title}</p>
                    <p>Category: {category}</p>
                </div>
            </div>
        </>
    )
}

export default ListingObj;