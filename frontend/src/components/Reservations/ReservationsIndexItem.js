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
import './ReservationsIndex.css';

const ReservationsIndexItem = ({ reservation }) => {
    const { startDate, endDate, numGuests, totalPrice, listingId } = reservation;
    const listing = useSelector(getListing(listingId));
  
    return (
      <div className="reservation-index-item">
        <div className="reservation-info">
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Number of Guests: {numGuests}</p>
          <p>Total Price: {totalPrice}</p>
          {listing && <p>Listing Information: {listing.title}</p>}
          {/* <p>{listing.description}</p> */}
        </div>
      </div>
    );
  };
  

export default ReservationsIndexItem;
