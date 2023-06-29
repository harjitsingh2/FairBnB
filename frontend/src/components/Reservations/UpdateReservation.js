
import './UpdateReservationForm.css';

import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getListing } from "../../store/listings";
import { updateReservation, getReservation } from "../../store/reservations";
import moment from 'moment';
import image from '../../image/image.webp';
import './ReservationForm.css';

function UpdateReservation() {
//   const { listingId } = useParams();
  const { reservationId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const reservation = useSelector(getReservation(reservationId))
  const currentUser = useSelector(state => state.session.user);
  const listingId = reservation.listingId;
  const listing = useSelector(getListing(listingId));
  

  let guestId
  
  if (currentUser !== null) {
    guestId = currentUser.id
  }

  let price = listing.price
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [numNights, setNumNights] = useState(1);
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);

    if (isPastDate(startDate) || isPastDate(endDate)) {
        setErrors(["Please select future dates."]);
        return;
    }

    history.push('/user/reservations')
    let totalPrice = numNights * listing.price;
    return dispatch(updateReservation({ id: reservationId, listingId, guestId, numGuests, totalPrice, startDate, endDate }))
      .catch(async (response) => {
        let data;
        try {
          data = await response.clone().json();
        } catch {
          data = await response.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([response.statusText]);
      });
  };

  const currentDate = new Date()

  const isPastDate = (date) => {
    const selectedDate = new Date(date);
    return selectedDate < currentDate;
  };
  
  useEffect(() => {
    const totalNights = moment(endDate).diff(startDate, 'days')
    setNumNights(totalNights)
  })


  if (currentUser) {
    return ( 
        <div>           
            <h1 id='edit-reservation-header'>Update your Reservation</h1>
            <form className="reservation-update-form" onSubmit={handleSubmit}>
                <div className='reservation-info'>
                    <ul>

                    <div className="dates-container">
                        <div className="checkin">
                            <div>Current Check-in: {reservation.startDate}</div>
                            <br></br>
                            <div>NEW CHECK-IN</div>
                            <label>
                                <input className="start-date" type="date" value={startDate}
                                onChange={(e) => setStartDate(e.target.value)} required 
                                min={("YYYY-MM-DD")}
                                placeholder={reservation.startDate}/>
                            </label>
                            </div>
                        </div>
                        <br></br>
                        <div className="checkout">
                            <div>Current Check-out: {reservation.endDate}</div>
                            <br></br>
                            <div>NEW CHECKOUT</div>
                            <label>
                                <input className="end-date" type="date" value={endDate}
                                onChange={(e) => {
                                    setEndDate(e.target.value)
                                }} required 
                                min={startDate ? startDate : ("YYYY-MM-DD")}
                                placeholder={reservation.endDate}/>
                            </label>
                        </div>
                        <br></br>
                        <div className="guests">
                            <div>GUESTS</div>
                            <label>
                                <input type="number"
                                onChange={(e) => setNumGuests(e.target.value)} required
                                min="1" max={listing.maxGuests}  placeholder={reservation.numGuests} />
                            </label>
                        </div>
            
                    <br/>
                    <ul className="reservation-price">
                        <div>
                        ${listing.price} x {numNights} nights
                        </div>
                        <br></br>
                        <div className='total-cost'>
                        Total Cost: ${listing.price * numNights}
                        </div>
                    </ul>

                    <br/>
                    <ul className="form-errors">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <br/>
                    
                    <button className="reservation-button" type="submit">Update Reservation</button>
                    </ul>
                </div>
                
                <div className="listing-info-container">
                    <div className="listing-area">{listing.city}, {listing.state}</div>
                    <div className='listing-title'>{listing.title}</div>
                    <div className='reservation-price'>
                        <span>${listing.price}</span> per night 
                    </div>
                    <br/>
                    {listing && (
                        <img
                        // src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image}
                        src={image}
                        alt=""
                        className="listing-pic"
                    />
                    )}
                </div>
            </form>
            
        </div> 
    );
  } 

  
}

export default UpdateReservation;


