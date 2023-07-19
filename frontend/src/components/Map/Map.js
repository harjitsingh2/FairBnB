import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = ({ google, listing }) => {
  const { latitude, longitude } = listing;

  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{ lat: latitude, lng: longitude }}
      style={{ width: '100%', height: '400px' }}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapComponent);

// import React, { useMemo, useState } from "react";
// import { useSelector } from "react-redux";
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// import { useHistory } from "react-router-dom";

// export default function MapComponent({ listing }) {
  
//   const { isLoaded, loadError } = useLoadScript({
//     apiKey: process.env.REACT_APP_MAPS_API_KEY
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   if (loadError) return <div>Error loading maps</div>;

//   return (
//     <div>
//       <Map listing={listing}/>
//     </div>
//   );
// }

// function Map({ listing }) {
//     // const { latitude, longitude } = listing;
//     const latitude = listing.latitude;
//     const longitude = listing.longitude;


//   return (
//     <div className="map-container">
//        <p>Latitude: {latitude}</p> 
//       <GoogleMap zoom={12} initialCenter={{ lat: latitude, lng: longitude }} mapContainerClassName="map-container">
//           <Marker
//             position={{ lat: latitude, lng: longitude }}
//           >
//               {/* <InfoWindow
//                 options={{
//                   disableCloseButton: true,
//                 }}
//               >
//                 <div>Hello</div>
//               </InfoWindow> */}
//           </Marker>
//       </GoogleMap>
//     </div>
//   );
// }
