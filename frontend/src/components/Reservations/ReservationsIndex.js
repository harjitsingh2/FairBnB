import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from '../../store/reservations';
import ReservationsIndexItem from './ReservationsIndexItem';
import './ReservationsIndex.css';
import { fetchListings} from '../../store/listings';



const ReservationsIndex = () => {
    // debugger 
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations)
    // debugger

    useEffect(() => {
        dispatch(fetchReservations())
        dispatch(fetchListings())
        
    }, [dispatch])
    // debugger;

    // Sort and filter reservations
    const today = (new Date()).toISOString().split('T')[0];
    
    const sortedReservations = [...reservations].sort((b, a) => {
        return (new Date(a.startDate) - new Date(b.startDate));
    });

    const newReservations = sortedReservations.filter(
        (reservation) => reservation.startDate > today
    )

    const oldReservations = sortedReservations.filter(
        (reservation) => reservation.startDate < today
    )   

    const upcomingTrips = newReservations.map((reservation) => (
        <ReservationsIndexItem key={reservation.id} reservation={reservation}/>

    ))

    const pastTrips = oldReservations.map((reservation) => (
        <ReservationsIndexItem key={reservation.id} reservation={reservation}/>

    ))

    return (
        <div className='reservations-index'>
            <div className='upcoming-trips'>
                <h1 id='reservation-header'>View Your Upcoming Trips</h1>
                <div>
                    {upcomingTrips}
                </div>
            </div>
            <div className='past-trips'>
                <h1 id='reservation-header'>View Your Past Trips</h1>
                <div>
                    {pastTrips}
                </div>
            </div>

        </div>
    )
}


export default ReservationsIndex