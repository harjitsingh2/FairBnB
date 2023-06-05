import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListings, fetchListings } from '../../store/listings';
import ListingsIndexItem from './ListingsIndexItem';
import './ListingsIndex.css'

const ListingsIndexPage = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    

    const allListings = listings.map(listing => {
      return <ListingsIndexItem key={listing.id} listing={listing} />
    })
  
    useEffect(() => {
      dispatch(fetchListings());
    }, [dispatch]);
  
    return (
      <div className='listings-index'>
        {allListings}
      </div>
    );
  };



export default ListingsIndexPage;