import React, { useState, useEffect } from "react";

export const GooglePlaces = () => {
  const geolocationAPI = navigator.geolocation;
  
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);


  const getUserCoordinates = (() => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  })();

  useEffect(() => {
    if (latitude && longitude) {
      const sg = new window.google.maps.LatLng(latitude, longitude);
  
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: sg,
        zoom: 15,
      });
  
      const request = {
        location: sg,
        radius: 500,
        type: "restaurant",
        openNow: true
      };
  
      const service = new window.google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          results
        ) {
          console.log("Places:", results);
          // Create an array of restaurant names
          const restaurantNames = results.map((place) => place.name);
          // Update the state by appending new restaurants to the existing list
          setRestaurants((prevRestaurants) => [
            ...prevRestaurants,
            ...restaurantNames,
          ]);
          console.log("Nearby Restaurants:", restaurantNames);
        }
      });
    }
  }, [latitude, longitude]); // The empty array ensures this effect only runs once after the initial render

  return (
    <div>
      <div id="map" style={{ height: "0" }}></div> {/* The map element */}
      {/* Render restaurant data as needed */}
      <pre>{JSON.stringify(restaurants, null, 2)}</pre>
    </div>
  );
};
