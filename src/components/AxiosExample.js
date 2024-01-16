import React, { useState, useEffect } from "react";
import axios from "axios";

export const AxiosExample = () => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

  return (
    <div>
      {data ? (
        <div>
          {/* {JSON.stringify(data)} */}
          <img src={data.message} alt="dog" />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
