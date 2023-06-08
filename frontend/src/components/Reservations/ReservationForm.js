import './ReservationForm.css';

import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getListing } from "../../store/listings";
import { createReservation } from "../../store/reservations";
import moment from 'moment';

function ReservationForm() {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const listing = useSelector(getListing(listingId))
  const currentUser = useSelector(state => state.session.user);

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
    return dispatch(createReservation({ listingId, guestId, numGuests, totalPrice, startDate, endDate }))
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
            <form className="reservation-form" onSubmit={handleSubmit}>
                <ul>
                <div className='reservation-price'>
                    <span>${listing.price}</span> per night 
                </div>
                <br/>
                <div className="dates-container">
                    <div className="checkin">
                        <div>CHECK-IN</div>
                        <label>
                            <input className="start-date" type="date" value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} required 
                            min={("YYYY-MM-DD")}/>
                        </label>
                        </div>
                    </div>
                    <br></br>
                    <div className="checkout">
                        <div>CHECKOUT</div>
                        <label>
                            <input className="end-date" type="date" value={endDate}
                            onChange={(e) => {
                                setEndDate(e.target.value)
                            }} required 
                            min={startDate ? startDate : ("YYYY-MM-DD")}/>
                        </label>
                    </div>
                    <br></br>
                    <div className="guests">
                        <div>GUESTS</div>
                        <label>
                            <input type="number"
                            onChange={(e) => setNumGuests(e.target.value)} required
                            min="1" max={listing.maxGuests}  placeholder='1' />
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
                
                <button className="reservation-button" type="submit">Reserve</button>
                </ul>
                
                
            </form>
        </div> 
    );
  } else {
    return (
        <div className='log-in-reservation'>
            <div className='reservation-price'>
                <span>${listing.price}</span> per night 
            </div>
            <br></br><br></br>
            <div>
                <div>You must be logged in to make a reservation</div>
            </div> 
        </div>

    )
  }

  
}

export default ReservationForm;