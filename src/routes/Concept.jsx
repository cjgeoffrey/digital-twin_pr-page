import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const Concept = () => {
  return (
    <ContentContainer id="concept">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h2>What Is Digital Twin for AML?</h2>
        <p>
          Digital Twin for AML is a tool, which is a mechanistic model that is
          able to make predictions for AML disease progression and therapeutic
          options in a patient specific manner.
        </p>
        <p>
          The tool will act as a dashboard rendering up to date information
          about the disease condition and progonosis to physicians treating
          patients with AML.
        </p>
      </div>
    </ContentContainer>
  );
};

export default Concept;
