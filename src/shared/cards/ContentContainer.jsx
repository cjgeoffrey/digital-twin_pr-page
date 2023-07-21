import React from "react";

const ContentContainer = ({ id, children }) => {
  return (
    <section
      id={id}
      style={{
        width: "98%",
        minHeight: "90vh",
        minHeight: "90svh",
        backgroundColor: "rgba(34, 51, 170, 0.4)",
        // opacity: "60%",
        margin: " 0.5rem auto",
        padding: "0.5rem 0.5rem",
        borderRadius: "10px",
        lineHeight: "2rem",
      }}>
      {children}
    </section>
  );
};

export default ContentContainer;
