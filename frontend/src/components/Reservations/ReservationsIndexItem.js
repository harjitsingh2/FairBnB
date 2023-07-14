// import React, {useEffect} from 'react';

// import { useDispatch } from 'react-redux';
// // import './Reservation.css'
// import { useState } from 'react';

// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector } from 'react-redux';
// import { fetchReservations } from '../../store/reservations';
// import { getListing } from '../../store/listings';


// const ReservationsIndexItem = (props) => {
//     // debugger
//     const params = useParams();
//     // const {reservationId} = useParams();
//     const dispatch = useDispatch();

//     const reservation = props.reservation
//     // const listing = reservation.listing
//     // const reservations = useSelector((state) => state.reservations)
//     // const reservation = useSelector((state) => state.reservation[reservationId])
//     // debugger
//     // const listing = useSelector((state) => Object.values(state.listing).find((listing) => listing.id === reservation.listingId));

//     // useEffect(() => {
//     //     // debugger 
//     //     dispatch(fetchReservations()).catch(async (response) => {
//     //         let data;
//     //         try {
//     //             data = await response.clone().json();
//     //         } catch {
//     //             data = await response.text();
//     //         }
//     //         return data;
//     //     })
//     // }, [dispatch])


//     return (
//         // <div className="reservation-index-item" key={reservation.id}>
//         //     <div className='reservation-info'>
//         //         <p>Total guests:{reservation.numGuests}</p>
//         //         <p>{listing.title}</p>
//         //         <p>can I see this?</p>
//         //     </div>
//         // </div>
//         <div>
//             This should appear
//             {/* <div>{reservation.numGuests}</div> */}
//         </div>
//     )
  
// }


// export default ReservationsIndexItem;

import React from 'react';
import { useSelector } from 'react-redux';
import { getListing } from '../../store/listings';
import { deleteReservation } from '../../store/reservations';
import './ReservationsIndex.css';
import image from '../../image/image.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import './ReservationsIndex.css';
import ReviewsModal from '../Reviews/ReviewsModal';

const ReservationsIndexItem = ({ reservation }) => {
    const { startDate, endDate, numGuests, totalPrice, listingId, id: reservationId } = reservation;
    // console.log(reservation);
    const listing = useSelector(getListing(listingId));
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(deleteReservation(reservation.id));
    }

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
                    <Link to={`reservations/${reservation.id}#edit`}>
                        <button type="submit" className='reservation-button'>Update Reservation</button>
                    </Link>
                    <button type="submit" className='reservation-button' onClick={handleClick}>Delete Reservation</button>
                    <ReviewsModal listingId={listingId} reservationId={reservationId}/>
                </>
                )}
            </div>
            <div className="index-image-container">
                    {listing && (
                        <img
                        // src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image}
                        src={image}
                        alt=""
                        className="listing-pic"
                    />
                    )}
            </div>
        </div>
    );
};
      


export default ReservationsIndexItem;
