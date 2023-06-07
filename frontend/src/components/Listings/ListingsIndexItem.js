import React from 'react';
import {Link} from "react-router-dom";
import image from '../../image/image.webp'
import './ListingsIndex.css';

const ListingsIndexItem = ( props ) => {
    const listing = props.listing


    return (
        <div className="listing-index-item" key={listing.id}>
            <Link to={`/listings/${listing.id}`}>
                <div className='index-image-container'>
                    {/* <img src={image} className="listing-pic" alt="" /> */}
                    <img src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image } alt="" className='listing-pic' />
                </div>
                <br></br>
                <div className="listing-area">{listing.city}, {listing.state}</div>
                <div className='listing-title'>{listing.title}</div>
                <p className="listing-price-container">
                    <span>${listing.price}</span> per night 
                </p>
            </Link>
        </div>
      )
    
    
}

export default ListingsIndexItem;