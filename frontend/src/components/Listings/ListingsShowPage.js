import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";
import image from '../../image/image.webp';
import Amenities from "./amenities";
import './ListingsShow.css';

const ListingsShowPage = ( ) => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const [errors, setErrors] = useState([]);

    const listing = useSelector((state) => state.listings[listingId]);
    

    useEffect(() => {
        // debugger 
        dispatch(fetchListing(listingId)).catch(async (response) => {
            let data;
            try {
                data = await response.clone().json();
            } catch {
                data = await response.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([response.statusText]);

            // console.log(listing.id)
            return data;
        })
    }, [dispatch])

    const host = useSelector((state) => Object.values(state.host).find((host) => host.id === listing.hostId));

    if (!listing || !host) {
        return (
            <div>Page does not exist</div>
        )
    }

    
    return (
        <div className="listings-show">
            <div className="show-heading-container">
                <h1 className="listing-title-show">{listing.title}</h1>
                <p>{listing.city}, {listing.state}</p>
            </div>
            <div className="show-pic-container">
                <div className="show-main-pic">
                    <img src={listing.photoUrls.length > 0 ? listing.photoUrls[0] : image } className="show-main-pic" alt="" />
                    {/* <img src={"https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_1.webp"} className="show-main-pic" alt="" /> */}
                </div>
                <div className="show-side-pics">
                    {/* <img src={image} alt="" /> */}
                    <img src={listing.photoUrls.length > 0 ? listing.photoUrls[1] : image } alt="" />
                    {/* <img src={ "https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_2.webp" } alt="" /> */}
                    {/* <img src={"https://fairbnb1-dev.s3.amazonaws.com/vjyhxttt6mph69s5ga76l3vn7bvs?response-content-disposition=attachment%3B%20filename%3D%22listing1_3.webp%22%3B%20filename%2A%3DUTF-8%27%27listing1_3.webp&response-content-type=image%2Fwebp&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYCX53W5JQIZJEMME%2F20230606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230606T181916Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a951e2951cb750ab3234479723335e5c2951a3e1095be87423dba40ecf1844a4" } alt="" /> */}
                    {/* <img src={image} alt="" /> */}
                    {/* <img src={image} alt="" className="image4" />
                    <img src={image} alt="" className="image5" /> */}
                </div>
            </div>
            <div className="show-body-container">
                <div className="show-body-info">
                    <div className="host-information">
                        <h2>Hosted by {host.firstName}</h2>
                    </div>
                    <div className="main-features">
                        <span>{listing.maxGuests} guests | </span>
                        <span>{listing.numBedrooms} bedrooms | </span>
                        <span>{listing.numBeds} beds | </span>
                        <span>{listing.numBathrooms} baths</span>
                    </div>
                    <div className="description">{listing.description}</div>
                    <div className="amenities">
                        <h2>What this place offers</h2>
                        <Amenities />
                    </div>
                    <p>Calendar</p>
                </div>
                <div className="show-body-reservation">
                    <p>Reservation Component</p>
                </div>
            </div>
            <div className="show-reviews-container">
                <p>Reviews Component</p>
            </div>
            <div className="show-map-container">
                <p>Map</p>
            </div>
        </div>
    )
}

export default ListingsShowPage;