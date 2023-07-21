import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const Concept = () => {
  return (
    <ContentContainer id="concept">
      <div
        style={{
          maxWidth: "60%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h2>Our Approach</h2>
        <p>
          Acute myeloid leukemia (AML) represents an aggressive form of cancer
          with a poor 5-year overall survival rate, primarily due to relapse and
          primary resistance toward current standard therapeutic regimens. To
          address this challenge, the project will build an interactive
          dashboard for clinicians and patients to use in the course of
          treatment, where patient data instantiates a digital twin (DT) that
          enables prediction on the outcome of possible therapies. The digital
          twin employs machine learning methods based on prior knowledge encoded
          as graphs, patient data, and a set of dynamical models. Both knowledge
          graphs and dynamical models will be updated based on patient outcomes
          and molecular data generated as part of an ongoing multicenter
          clinical trial (VenEx; NCT04267081) in Finland, which in turn will be
          incorporated into the AML digital twin system, making it a continuous
          learning system based on the most recent clinical.
        </p>
      </div>
    </ContentContainer>
  );
};

export default Concept;
