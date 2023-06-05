import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListings, fetchListings, filteredListings } from '../../store/listings';
import ListingsIndexItem from './ListingsIndexItem';
import './ListingsIndex.css'
import { useParams } from 'react-router-dom/';

const ListingsIndexPage = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    const {category} = useParams();

    let filteredCategoryListings = null;

    filteredCategoryListings = useSelector(filteredListings(category));
  
    useEffect(() => {
      dispatch(fetchListings());
    }, [dispatch, category]);
  
    return (
      <div className='listings-index'>
        {(category ? filteredCategoryListings : listings).map((listing) => (
        <ListingsIndexItem key={listing.id} listing={listing} />
      ))}
      </div>
    );
  };



export default ListingsIndexPage;