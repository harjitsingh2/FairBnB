import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../../store/listings';
import ListingsIndexItem from './ListingsIndexItem';
import './ListingsIndex.css'

const ListingsIndexPage = () => {
    const dispatch = useDispatch();
    const listings = useSelector(state => Object.values(state.listings));

    const allListings = listings.map(listing => (
      <ListingsIndexItem key={listing.id} listing={listing} />
    ))
  
    useEffect(() => {
      dispatch(fetchListings());
    }, [dispatch]);
  
    return (
      <div>
        <h1>Listings</h1>
        <p> Check out these listings </p>
        {allListings}
    </div>
    );
  };

export default ListingsIndexPage;