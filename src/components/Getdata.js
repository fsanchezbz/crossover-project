import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";

export default function Getdata({count}) {
  const [data, setData] = useState();
  
  useEffect(() => {
    load();
  }, []);

  // const load = () => {
  //   fetch("https://travel-server-qhnw.onrender.com/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log(data.data.memes[0].url);
  //       console.log(data);
  //       setData();
  //     })
  //     .catch((error) => console.log(error));
  // };

  const load = async () => {
    try {
      const response = await axios.get(
        "https://travel-server-qhnw.onrender.com"
      );
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div className="card border" style={{ width: "50rem" }}>
          <img className="card-img-top" src={data[count]?.url} alt="memes" />
          <div className="card-body">
            <h2 className="card-title"> {data[count]?.name}</h2>
            <p>Population: {data[count]?.population}</p>
            <p>About: {data[count]?.info}</p>
            <p></p>
            <div className="d-flex justify-content-center flex-column">
              <strong>Popular sights:</strong>
              <div style={{ marginBottom: "20px" }}>
                <p style={{ margin: "0", padding: "0" }}>
                  {data[count]?.sight_1}
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  {data[count]?.sight_2}
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  {data[count]?.sight_3}
                </p>
              </div>
            </div>
            <h3>Budget: {data[count]?.budget}€</h3>
            
          </div>
        </div>
      )}
    </>
  );
}
