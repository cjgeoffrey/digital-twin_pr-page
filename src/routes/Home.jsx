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
        // onScroll={executeScroll}
        id="home"
        style={{
          display: "flex",
          width: "95%",
          height: "90vh",
          margin: "0 auto",
          padding: "0",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <h1>Digital Twin For AML</h1>
        <button
          style={{ color: "#fff", width: "10%" }}
          onClick={contactButtonHandler}>
          Contact us
        </button>
      </div>
    </>
  );
};

export default Home;
