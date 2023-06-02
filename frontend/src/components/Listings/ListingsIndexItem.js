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
    
    // return (
    //         <div className="listing-index-item">
    //             <Link className='show-listing' to={`/listings/${listing.id}`}>
    //                 <div id='listing-item'>
    //                     <img className="listing-index-image" src={image} alt="" />
    //                 </div>
    //                 <div className='listing-info'>
    //                     <div id='title'>{listing.title}</div>
    //                     <div id='title'>{listing.city}, {listing.country}</div>
    //                 </div>
                    
    //                 <div id='price'><div id='price-number'>${listing.price}</div>/Price</div>
    //             </Link>
    //         </div>
    //     )
    
}

export default ListingsIndexItem;