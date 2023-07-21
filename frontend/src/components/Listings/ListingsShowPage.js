import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";
import { getReviews } from '../../store/reviews';
import image from '../../image/image.webp';
import Amenities from "./amenities";
import './ListingsShow.css';
import ReservationForm from "../Reservations/ReservationForm";
import ReviewsIndex from "../Reviews/ReviewsIndex";
import MapComponent from '../Map/Map';
import star from '../../image/star.png';

const ListingsShowPage = ( ) => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const [errors, setErrors] = useState([]);
    const [overallRating, setOverallRating] = useState(0);

    const listing = useSelector((state) => state.listings[listingId]);

    const reviews = useSelector(getReviews);
    const filteredReviews = reviews.filter((review) => review.listingId === listing.id);

   
    const handleOverallRatingChange = (rating) => {
        setOverallRating(rating);
    }

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

    let listingType;
    // if (listing.category === 'beachfront') {
    //     listingType = 'Beachfront House';
    // }   else {
    //     listingType = (listing.category.charAt(0).toUpperCase() + listing.category.slice(1));
    // }

    switch (listing.category) {
        case 'beachfront':
            listingType = 'Beachfront House';
            break;
        case 'city':
            listingType = 'City Apartment';
            break;
        case 'countryside':
            listingType = 'Countryside Home';
            break;
        case 'tiny home':
            listingType = 'Tiny Home';
            break;
        default:
            listingType = (listing.category.charAt(0).toUpperCase() + listing.category.slice(1));
    }

    
    
    return (
        <div className="listings-show">
            <div className="show-heading-container">
                <h1 className="listing-title-show">{listing.title}</h1>
                <p>{listing.city}, {listing.state}</p>
                {/* { overallRating !==0 ? <p id="star-rating"><img src={star} className="star"/> {overallRating}</p>: null } */}
                {overallRating !==0 ? 
                    filteredReviews.length === 1 ? 
                    <div id='rating'><img src={star} className="star"/> {overallRating} · {filteredReviews.length} Review</div> :
                    <div id='rating'><img src={star} className="star"/> {overallRating} · {filteredReviews.length} Reviews</div>
                    : <div>No reviews</div>
                }
                {/* <p>Rating: {overallRating}</p> */}
            </div>
             
            {/* <div className="show-pic-container">
                <div className="show-main-pic">
                    <img src={image} className="show-main-pic" alt="" />
                </div>
                <div className="show-side-pics">
                    <div className="side-pic-container">
                        <img src={image} alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={image} alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={ image } alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={ image } alt="" className="side-pic"/>
                    </div>
                    

                </div>
            </div> */}
            <div className="show-pic-container">
                <div className="show-main-pic">
                    <img src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image } className="show-main-pic" alt="" />
                </div>
                <div className="show-side-pics">
                    <div className="side-pic-container">
                        <img src={listing.photoUrls.length > 0 ? listing.photoUrls[1] : image } alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={listing.photoUrls.length > 0 ? listing.photoUrls[2] : image } alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={listing.photoUrls.length > 0 ? listing.photoUrls[3] : image } alt="" className="side-pic"/>
                    </div>
                    <div className="side-pic-container">
                        <img src={listing.photoUrls.length > 0 ? listing.photoUrls[4] : image } alt="" className="side-pic"/>
                    </div>
                    

                </div>
            </div>
            <div className="show-body-container">
                <div className="show-body-info">
                    <div className="host-information">
                        <h2>{listingType} hosted by {host.firstName}</h2>
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
                    {/* <p>Calendar</p> */}
                </div>
                <div className="show-body-reservation">
                    <ReservationForm />
                </div>
            </div>
            <br></br>
            <div className="show-reviews-container">
                <ReviewsIndex listingId2={listing.id} onOverallRatingChange={handleOverallRatingChange}/>
            </div>
            <div className="show-map-container">
                <h2 id="map-heading">Where you'll be</h2>
                <MapComponent listing={listing} />
            </div>
        </div>
    )
}

export default ListingsShowPage;