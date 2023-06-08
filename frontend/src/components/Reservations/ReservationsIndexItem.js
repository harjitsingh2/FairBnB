import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
// import './Reservation.css'
import { useState } from 'react';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { fetchReservations } from '../../store/reservations';
import { getListing } from '../../store/listings';


const ReservationsIndexItem = (props) => {
    // debugger
    const params = useParams();
    // const {reservationId} = useParams();
    const dispatch = useDispatch();

    const reservation = props.reservation
    // const listing = reservation.listing
    // const reservations = useSelector((state) => state.reservations)
    // const reservation = useSelector((state) => state.reservation[reservationId])
    // debugger
    // const listing = useSelector((state) => Object.values(state.listing).find((listing) => listing.id === reservation.listingId));

    // useEffect(() => {
    //     // debugger 
    //     dispatch(fetchReservations()).catch(async (response) => {
    //         let data;
    //         try {
    //             data = await response.clone().json();
    //         } catch {
    //             data = await response.text();
    //         }
    //         return data;
    //     })
    // }, [dispatch])


    return (
        // <div className="reservation-index-item" key={reservation.id}>
        //     <div className='reservation-info'>
        //         <p>Total guests:{reservation.numGuests}</p>
        //         <p>{listing.title}</p>
        //         <p>can I see this?</p>
        //     </div>
        // </div>
        <div>
            This should appear
            {/* <div>{reservation.numGuests}</div> */}
        </div>
    )
  
}


export default ReservationsIndexItem;