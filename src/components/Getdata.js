import React, { useState, useEffect } from "react";
import axios from "axios";
//import Loading from "/components/Loading.js";

export default function Getdata(props) {
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
      console.log(data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!data ? (
        "Loading..."
      ) : (
        <div>
          <img src={data} alt="memes" />
        </div>
      )}
    </>
  );
}
