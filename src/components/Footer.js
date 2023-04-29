import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          backgroundColor: "#FFD699",
          paddingTop: "1rem",
          marginTop: "4rem",
        }}
      >
        <div class="d-flex col-12 justify-content-center align-items-center">
          <GrInstagram style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
          <FaFacebookSquare
            style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
          />
          <BsLinkedin style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
          <BsGithub style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center">
          <p className="text-black">FJB - Rocket Team Work GmbH © Copyright</p>
        </div>
      </div>
    </div>
  );
}