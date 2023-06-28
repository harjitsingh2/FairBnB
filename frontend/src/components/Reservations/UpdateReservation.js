import React from 'react';
import { useSelector } from 'react-redux';
import { getListing } from '../../store/listings';
import { getReservation } from '../../store/reservations';
import './ReservationsIndex.css';
import image from '../../image/image.webp'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdateReservation = () => {
    const {reservationId} = useParams();
    const reservation = useSelector(getReservation(reservationId))
    const { startDate, endDate, numGuests, totalPrice, listingId } = reservation;
    const listing = useSelector(getListing(listingId));

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
}

export default UpdateReservation;