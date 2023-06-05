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
                    <span>Kitchen</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.wifi && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={wifi} alt="" />
                    <span>Wifi</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.tv && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={tv} alt="" />
                    <span>TV</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.washer_dryer && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={washer} alt="" />
                    <span>Washer Dryer</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.parking && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={parking} alt="" />
                    <span>Parking</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.air_conditioning && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={ac} alt="" />
                    <span>Air Conditioning</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.heating && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={heating} alt="" />
                    <span>Heating</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.pool && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={pool} alt="" />
                    <span>Pool</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.hot_tub && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={tub} alt="" />
                    <span>Hot Tub</span>
                    </div>
                </div>
                )}
            </div>    
            <div className="amenities-list">
                {listing.fire_pit && (
                <div className="amenity-column">
                    <div className='amenity-item'>
                    <img src={firepit} alt="" />
                    <span>Fire Pit</span>
                    </div>
                </div>
                )}
            </div>    
        </div>
    )
}

export default Amenities;