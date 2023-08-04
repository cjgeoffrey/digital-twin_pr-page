import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";
import ConsortiumLinks from "../components/ConsortiumLinks";

import { peopleInConsortium } from "../data/peopleInConsortium";

const Consortium = () => {
  const membersOfConsortium = peopleInConsortium.map((person) => {
    return (
      <div key={person.name}>
        <ConsortiumLinks
          name={person.name}
          link={person.link}
          institution={person.institution}
        />
      </div>
    );
  });
  return (
    <ContentContainer id="consortium">
      <div className="body-text">
        <div>
          <h2>Consortium</h2>
          <p style={{ lineHeight: "1.5rem" }}>
            The PS-AML-DT consortium is a project conducted jointly with
            clinician-scientists and computational researchers. The team
            consists of members from the Institute for Molecular Medicine
            Finland at the University of Helsinki (Finland), the Institute for
            Systems Biology in Seattle (USA) and Tampere University (Finland).
          </p>
        </div>
        <div>
          <h2>Funding</h2>
          <p style={{ lineHeight: "1.5rem" }}>
            The PS-AML-DT is a part of the{" "}
            <a href="https://www.aka.fi/en/research-funding/apply-for-funding/calls-for-applications/apply-now2/academy-of-finland--nih-joint-call-thematic-areas-of-the-finnish-research-flagships2/">
              AKA-NIH Partnership Programme
            </a>{" "}
            launched in November 2020 and funded by the National Institute of
            Health (NIH, USA) and the Academy of Finland.
          </p>
        </div>
        <div>
          <h2>Team:</h2>
          <ul>{membersOfConsortium}</ul>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Consortium;
