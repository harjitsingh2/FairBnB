import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";
import image from '../../image/image.webp';
import Amenities from "./amenities";
import './ListingsShow.css';

const ListingsShowPage = ( ) => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const [errors, setErrors] = useState([]);

    const listing = useSelector((state) => state.listings[listingId]);
    

    useEffect(() => {
        // debugger 
        dispatch(fetchListing(listingId)).catch(async (response) => {
            let data;
            try {
                data = await response.clone().json();
            } catch {
                data = await response.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([response.statusText]);

            // console.log(listing.id)
            return data;
        })
    }, [dispatch])

    const host = useSelector((state) => Object.values(state.host).find((host) => host.id === listing.hostId));

    if (!listing || !host) {
        return (
            <div>Page does not exist</div>
        )
    }

    
    return (
        <div className="listings-show">
            <div className="show-heading-container">
                <h1 className="listing-title-show">{listing.title}</h1>
                <p>{listing.city}, {listing.state}</p>
            </div>
            <div className="show-pic-container">
                <div><img src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image } className="show-main-pic" alt="" /></div>
            </div>
            <div className="show-body-container">
                <div className="show-body-info">
                    <div className="host-information">
                        <h2>Hosted by {host.firstName}</h2>
                    </div>
                    <div className="main-features">
                        <span>{listing.maxGuests} guests | </span>
                        <span>{listing.numBedrooms} bedrooms | </span>
                        <span>{listing.numBeds} beds | </span>
                        <span>{listing.numBathrooms} baths</span>
                    </div>
                    <div className="description">{listing.description}</div>
                    <div className="amenities">
                        <h2>What this place offers</h2>
                        <Amenities />
                    </div>
                    <p>Calendar</p>
                </div>
                <div className="show-body-reservation">
                    <p>Reservation Component</p>
                </div>
            </div>
            <div className="show-reviews-container">
                <p>Reviews Component</p>
            </div>
            <div className="show-map-container">
                <p>Map</p>
            </div>
        </div>
    )
}

export default ListingsShowPage;