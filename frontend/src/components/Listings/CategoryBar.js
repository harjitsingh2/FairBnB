import React, {useEffect, useState} from "react";
import beachfront from '../../image/categories/beachfront.png'
import cabin from '../../image/categories/cabin.png';
import camping from '../../image/categories/camping.png'
import city from '../../image/categories/city.png'
import countryside from '../../image/categories/countryside.png'
import mansion from '../../image/categories/mansion.png'
import tinyhome from '../../image/categories/tiny-home.png'
import treehouse from '../../image/categories/treehouse.png'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { receiveFilteredListings } from "../../store/listings";
import { applyCategoryFilter, removeCategoryFilter } from "../../store/listings";
import { useHistory } from "react-router-dom/";

const CategoryBar = () => {
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.listings);
    const { category } = useParams();
    const { filters } = useSelector((state) => state.listings);
    const history = useHistory();

    let filteredListings = listing;

    const handleCategoryClick = (selectedCategory) => {
        // filteredListings = Object.values(listing).filter(
        //   (listing) => listing.category === selectedCategory
        // );
        // dispatch(useParams(filteredListings));
        history.push(`/listings/filter/${selectedCategory}`)
    };
    
    // useEffect(() => {
    // }, [filteredListings])
    
    // const handleCategoryClick = (selectedCategory) => {
    //     const filteredListings = Object.values(listing).filter(
    //       (listing) => listing.category === selectedCategory
    //     );
    //     dispatch(receiveFilteredListings(filteredListings));
    //   };



    return (
        <div className="category-bar">

            <div className="category-icon" id="beachfront" onClick={() => handleCategoryClick('beachfront')}>
                <img src={beachfront} />
                <span className="category-name">Beachfront</span>
            </div>
            <div className="category-icon" id="cabin" onClick={() => handleCategoryClick('cabin')}>
                {/* <a href="https://www.flaticon.com/free-icons/cabin" title="cabin icons"><img src={cabin} /></a> */}
                <img src={cabin} alt=""/>
                <span className="category-name">Cabin</span>
            </div>
            <div className="category-icon" id="camping" onClick={() => handleCategoryClick('camping')}>
                <img src={camping} alt=""/>
                <span className="category-name">Camping</span>
            </div>
            <div className="category-icon" id="city" onClick={() => handleCategoryClick('city')}>
                <img src={city} alt=""/>
                <span className="category-name">City</span>
            </div>
            <div className="category-icon" id="countryside" onClick={() => handleCategoryClick('countryside')}>
                <img src={countryside} alt=""/>
                <span className="category-name">Countryside</span>
            </div>
            <div className="category-icon" id="mansion" onClick={() => handleCategoryClick('mansion')}>
                <img src={mansion} alt=""/>
                <span className="category-name">Mansion</span>
            </div>
            <div className="category-icon" id="tiny home" onClick={() => handleCategoryClick('tiny home')}>
                <img src={tinyhome} alt=""/>
                <span className="category-name">Tiny Home</span>
            </div>
            <div className="category-icon" id="treehouse" onClick={() => handleCategoryClick('treehouse')}>
                <img src={treehouse} alt=""/>
                <span className="category-name">Treehouse</span>
            </div>
            
        </div>
    )
}

export default CategoryBar;