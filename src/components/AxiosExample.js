import React, { useState, useEffect } from "react";
import axios from "axios";

export const AxiosExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
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
          {/* {JSON.stringify(data)} */}
          <img src={data.message} alt="dog" />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
