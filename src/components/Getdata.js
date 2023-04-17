import React, { useState, useEffect } from "react";
//import Loading from "/components/Loading.js";

export default function Getdata(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, [props.counter]);

  const load = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.data.memes[0].url);
        let urlPicture = data.data.memes[props.counter].url;
        setData(urlPicture);
      })
      .catch((error) => console.log(error));
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