import React from 'react';
// import {Link} from "react-router-dom";
import image from '../../image/image.webp'
import './ListingsIndex.css';

const ListingsIndexItem = ( props ) => {
    const listing = props.listing


    return (
        <div className="listing-index-item">
          <div><img src={image} className="listing-pic" alt="" /></div>
            <div className='listing-title'>{listing.title}</div>
            <div className="listing-area">{listing.city}, {listing.state}</div>
            <p className="listing-price">${listing.price} / night </p>
        </div>
      )
    
    
}

export default ListingsIndexItem;