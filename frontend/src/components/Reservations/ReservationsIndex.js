import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from '../../store/reservations';
import ReservationsIndexItem from './ReservationsIndexItem';



const ReservationsIndex = () => {
    // debugger 
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations)
    // debugger

    useEffect(() => {
        dispatch(fetchReservations())
    }, [dispatch])

    const reservationItems = reservations.map((reservation) => (
        <ReservationsIndexItem key={reservation.id} reservation={reservation}/>

    ))


    return (
        <div className='reservations-index'>
            <h1>Reservations</h1>
            <div>
                {reservationItems}
                {/* <ReservationsIndexItem /> */}
                <p>hello</p>
            </div>

        </div>
    )
}


export default ReservationsIndex