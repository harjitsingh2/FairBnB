import React from "react";
import beachfront from '../../image/categories/beachfront.png'
import cabin from '../../image/categories/cabin.png';
import camping from '../../image/categories/camping.png'
import city from '../../image/categories/city.png'
import countryside from '../../image/categories/countryside.png'
import mansion from '../../image/categories/mansion.png'
import tinyhome from '../../image/categories/tiny-home.png'
import treehouse from '../../image/categories/treehouse.png'
import { useHistory } from "react-router-dom/";

const CategoryBar = () => {
    const history = useHistory();

    const handleCategoryClick = (selectedCategory) => {
        history.push(`/listings/filter/${selectedCategory}`)
    };
    
    return (
        <div className="category-bar">

            {/* <div className="category-icon-container"> */}

                <div className="category-icon" id="beachfront" onClick={() => handleCategoryClick('beachfront')}>
                    <img src={beachfront} />
                    <br></br>
                    <span className="category-name">Beachfront</span>
                {/* </div> */}
            </div>
            <div className="category-icon" id="cabin" onClick={() => handleCategoryClick('cabin')}>
                {/* <a href="https://www.flaticon.com/free-icons/cabin" title="cabin icons"><img src={cabin} /></a> */}
                <img src={cabin} alt=""/>
                <br></br>
                <span className="category-name">Cabin</span>
            </div>
            <div className="category-icon" id="camping" onClick={() => handleCategoryClick('camping')}>
                <img src={camping} alt=""/>
                <br></br>
                <span className="category-name">Camping</span>
            </div>
            <div className="category-icon" id="city" onClick={() => handleCategoryClick('city')}>
                <img src={city} alt=""/>
                <br></br>
                <span className="category-name">City</span>
            </div>
            <div className="category-icon" id="countryside" onClick={() => handleCategoryClick('countryside')}>
                <img src={countryside} alt=""/>
                <br></br>
                <span className="category-name">Countryside</span>
            </div>
            <div className="category-icon" id="mansion" onClick={() => handleCategoryClick('mansion')}>
                <img src={mansion} alt=""/>
                <br></br>
                <span className="category-name">Mansion</span>
            </div>
            <div className="category-icon" id="tiny home" onClick={() => handleCategoryClick('tiny home')}>
                <img src={tinyhome} alt=""/>
                <br></br>
                <span className="category-name">Tiny Home</span>
            </div>
            <div className="category-icon" id="treehouse" onClick={() => handleCategoryClick('treehouse')}>
                <img src={treehouse} alt=""/>
                <br></br>
                <span className="category-name">Treehouse</span>
            </div>
            
        </div>
    )
}

export default CategoryBar;