import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

import PublicationLinks from "../components/PublicationLinks";

import { publicationsList } from "../data/publicationList";

const Publications = () => {
  const listOfPublications = publicationsList.map((publication, index) => {
    return (
      <div key={index}>
        <PublicationLinks
          title={publication.title}
          link={publication.link}
          linkDetail={publication.linkDetail}
          citation={publication.citation}
        />
      </div>
    );
  });
  return (
    <ContentContainer id="publications">
      {" "}
      <div className="body-text">
        <h2>Publications</h2>

        <ol style={{ padding: "0 1rem" }}>{listOfPublications}</ol>
      </div>
    </ContentContainer>
  );
};

export default Publications;
