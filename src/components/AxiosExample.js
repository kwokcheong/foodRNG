import React, { useState, useEffect } from "react";
import axios from "axios";

export const AxiosExample = () => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.4376655,103.8439034&radius=500&type=restaurant&key=XxX"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {JSON.stringify(data)}
          {/* <img src={data.message} alt="dog" /> */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
