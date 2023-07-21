import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const Consortium = () => {
  return (
    <ContentContainer id="consortium">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h2>Who is involved?</h2>
        <p>
          The research groups participating in this consortium include:
          <ul>
            <li>
              Predictive Society and Data Analytics Lab, Tampere University,
              Finland
            </li>
            <br></br>
            <li>
              Institute for Molecular Medicine Finland, University of Helsinki
              University, Finland
            </li>
            <br></br>
            <li>Institue of Systems Biology (ISB), Seattle USA</li>
          </ul>
        </p>
      </div>
    </ContentContainer>
  );
};

export default Consortium;
