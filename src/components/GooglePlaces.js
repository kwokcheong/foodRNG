import React, { useState, useEffect } from "react";

export const GooglePlaces = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const sg = new window.google.maps.LatLng(1.4376655, 103.8439034);

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: sg,
      zoom: 15,
    });

    const request = {
      location: sg,
      radius: 500,
      type: "restaurant",
    };

    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
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
  }, []); // The empty array ensures this effect only runs once after the initial render

  return (
    <div>
      <div id="map" style={{ height: "0" }}></div> {/* The map element */}
      {/* Render restaurant data as needed */}
      <pre>{JSON.stringify(restaurants, null, 2)}</pre>
    </div>
  );
};
