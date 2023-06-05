import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import kitchen from '../../image/amenities/kitchen.png'
import wifi from '../../image/amenities/wifi.png'
import tv from '../../image/amenities/tv.png'
import washer from '../../image/amenities/washer-dryer.png'
import parking from '../../image/amenities/parking.png'
import ac from '../../image/amenities/air-conditioning.png'
import heating from '../../image/amenities/heating.png'
import pool from '../../image/amenities/pool.png'
import tub from '../../image/amenities/hot-tub.png'
import firepit from '../../image/amenities/fire-pit.png'
import './ListingsShow.css';



const Amenities = () => {
    const { listingId } = useParams();
    const listing = useSelector((state) => state.listings[listingId]);

    return (
        <div className="amenities-container">
            <div className="amenities-list">
                {listing.kitchen && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={kitchen} alt="" />
                    <span className="amenity-name">Kitchen</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.wifi && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={wifi} alt="" />
                    <span className="amenity-name">Wifi</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.tv && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={tv} alt="" />
                    <span className="amenity-name">TV</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.washer_dryer && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={washer} alt="" />
                    <span className="amenity-name">Washer Dryer</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.parking && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={parking} alt="" />
                    <span className="amenity-name">Parking</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.air_conditioning && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={ac} alt="" />
                    <span className="amenity-name">Air Conditioning</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.heating && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={heating} alt="" />
                    <span className="amenity-name">Heating</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.pool && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={pool} alt="" />
                    <span className="amenity-name">Pool</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.hot_tub && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={tub} alt="" />
                    <span className="amenity-name">Hot Tub</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.fire_pit && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={firepit} alt="" />
                    <span className="amenity-name">Fire Pit</span>
                    </div>
                </div>
                )}
            </div>    
        </div>
    )
}

export default Amenities;