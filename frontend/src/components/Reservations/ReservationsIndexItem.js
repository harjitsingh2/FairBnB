
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getListing } from '../../store/listings';
import { deleteReservation } from '../../store/reservations';
import './ReservationsIndex.css';
import image from '../../image/image.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import './ReservationsIndex.css';
import ReviewsModal from '../Reviews/ReviewsModal';
import { fetchReviews, getReviews } from '../../store/reviews';
import { useState } from 'react';

const ReservationsIndexItem = ({ reservation }) => {
    const { startDate, endDate, numGuests, totalPrice, listingId, id: reservationId } = reservation;
    // console.log(reservation);
    const listing = useSelector(getListing(listingId));
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(deleteReservation(reservation.id));
    }

    // today's date converted to YYYY/MM/DD format
    const today = (new Date()).toISOString().split('T')[0];

    // logic for importing and filtering through reviews based on reservation
    // const [reviews, setReviews] = useState();
    const reviews = useSelector(getReviews);
    useEffect(() => {
        dispatch(fetchReviews(listingId));
      }, [dispatch]);
    // useEffect(() => {
    //     dispatch(fetchReviews(listingId)).then(asyncReviews => {
    //         setReviews(asyncReviews);
    //     });
    //   }, [dispatch]);
    // if (!reviews) {
    //     return (
    //         <div>Loading</div>
    //     )
    //     }
    // debugger
    const filteredReviews = reviews.filter((review) => review.reservationId === reservationId);
    // console.log(reviews)
    // debugger
    // console.log(filteredReviews)
    // console.log(reservationId)
    // console.log(reservation.id)

    const singleReview = filteredReviews[0];

    const alreadyReviewed = filteredReviews.some(function(obj) {
        return obj.reservationId > 0;
    });

    

    return (
        <div className="reservation-index-item">
            <div className="reservation-info">
                {listing && (
                <>
                    <h2>{listing.title}</h2>
                    <p className="location">
                    {listing.address}, {listing.city}, {listing.state}
                    </p>
                    <p className="date">
                    <span>Start Date:</span> {startDate}
                    </p>
                    <p className="date">
                    <span>End Date:</span> {endDate}
                    </p>
                    <p>
                    <span>Number of Guests:</span> {numGuests}
                    </p>
                    <p>
                    <span>Total Price:</span> ${totalPrice}
                    </p>
                    {
                    today < startDate ?  
                    <div className='reservation-button-container'>
                    <Link to={`reservations/${reservation.id}#edit`}>
                        <button type="submit" className='reservation-button'>Update Reservation</button>
                    </Link>
                    <button type="submit" className='reservation-button' onClick={handleClick}>Delete Reservation</button>
                    </div>
                    : null
                    }
                    {today > endDate ? <ReviewsModal listingId={listingId} reservationId={reservationId} reviewed={alreadyReviewed} reviewProp={singleReview}/> : null }
                </>
                )}
            </div>
            <div className="index-image-container">
                    {listing && (
                        <Link to={`/listings/${listing.id}`}>
                            <img
                            src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image}
                            // src={image}
                            alt=""
                            className="listing-pic"
                            />
                        </Link>
                    )}
            </div>
        </div>
    );
};
      


export default ReservationsIndexItem;
