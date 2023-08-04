import React from "react";

const ContentContainer = ({ id, children }) => {
  return (
    <section id={id} className="content-container">
      {children}
    </section>
  );
};

export default ContentContainer;
