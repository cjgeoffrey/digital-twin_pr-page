import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const contactButtonHandler = () => {
    navigate("/contact");
  };
  return (
    <>
      <div
        id="home"
        style={{
          display: "flex",
          maxWidth: "80%",
          height: "90vh",
          margin: "0 auto",
          padding: "0",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}>
        <h1>A Prototype System for AML Digital Twins (PS-AML-DT)</h1>
        <button
          style={{ color: "#fff", width: "10rem" }}
          onClick={contactButtonHandler}>
          Contact us
        </button>
      </div>
    </>
  );
};

export default Home;
