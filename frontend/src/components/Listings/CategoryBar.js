import React from "react";
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

const CategoryBar = () => {
    // const listings = useSelector((state) => state.listings);
    // const { category } = useParams();
    const dispatch = useDispatch();
    
    

    return (
        <div className="category-bar">

            <div className="category-icon" id="beachfront" >
                <img src={beachfront} />
                <span className="category-name">Beachfront</span>
            </div>
            <div className="category-icon">
                {/* <a href="https://www.flaticon.com/free-icons/cabin" title="cabin icons"><img src={cabin} /></a> */}
                <img src={cabin} alt=""/>
                <span className="category-name">Cabin</span>
            </div>
            <div className="category-icon">
                <img src={camping} alt=""/>
                <span className="category-name">Camping</span>
            </div>
            <div className="category-icon">
                <img src={city} alt=""/>
                <span className="category-name">City</span>
            </div>
            <div className="category-icon">
                <img src={countryside} alt=""/>
                <span className="category-name">Countryside</span>
            </div>
            <div className="category-icon">
                <img src={mansion} alt=""/>
                <span className="category-name">Mansion</span>
            </div>
            <div className="category-icon">
                <img src={tinyhome} alt=""/>
                <span className="category-name">Tiny Home</span>
            </div>
            <div className="category-icon">
                <img src={treehouse} alt=""/>
                <span className="category-name">Treehouse</span>
            </div>
            
        </div>
    )
}

export default CategoryBar;