import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const Publications = () => {
  return (
    <ContentContainer id="publications">
      {" "}
      <div
        style={{
          maxWidth: "60%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h3>Publications</h3>
        <p>
          1. The concept of Digital Twin:{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9653941/"
            target="_blank">
            Link
          </a>
        </p>
      </div>
    </ContentContainer>
  );
};

export default Publications;