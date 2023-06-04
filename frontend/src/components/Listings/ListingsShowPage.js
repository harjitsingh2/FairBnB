import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";

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

            console.log(listing.id)
            return data;
        })
    }, [dispatch])

    if (!listing) {
        return (
            <div>Page does not exist</div>
        )
    }
    
    return (
        <div className="listings-show">
            <p>show page</p>
            <h1 className="listing-title-show">{listing.title}</h1>
        </div>
    )
}

export default ListingsShowPage;