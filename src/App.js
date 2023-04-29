import React, { useState } from "react";
import "./App.css";
import Getdata from "./components/Getdata.js";
import Nav from "./components/Nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.js";

export default function App() {
const [count, setCount] = useState(0);

const random = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    setCount(randomNumber);
  };

  return (
    <div className="App">
      <div className="container-fluid d-flex justify-content-center flex-column">
        <div style={{ height: "100px", background: "#FFD699" }}>
          <Nav />
        </div>
        <div style={{ marginTop: "50px" }}>
          <h1>We are going on holiday!</h1>
          <p>We are helping you with your travel inspirations!</p>
          <button
              type="button"
              class="btn btn-outline-warning"
              style={{
                padding: "10px",
                width: "200px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              onClick={random}
            >
              New Inspiration
            </button>
          <div className="d-flex justify-content-center column-flex" id="card">
            <Getdata count={count}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
