import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

import PublicationLinks from "../components/PublicationLinks";

const Publications = () => {
  const publicationsList = [
    {
      title:
        "Digital twins for predictive oncology will be a paradigm shift for precision cancer care",
      link: "https://pubmed.ncbi.nlm.nih.gov/34824458/",
      linkDetail: "To Page",
    },
    {
      title:
        "What Is a Digital Twin? Experimental Design for a Data-Centric Machine Learning Perspective in Health",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9653941/",
      linkDetail: "To Page",
    },
  ];

  const listOfPublications = publicationsList.map((publication, index) => {
    return (
      <div key={index}>
        <PublicationLinks
          title={publication.title}
          link={publication.link}
          linkDetail={publication.linkDetail}
        />
      </div>
    );
  });
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
        <h2>Publications</h2>

        <ol style={{ padding: "0 1rem" }}>
          {listOfPublications}

          {/* <PublicationLinks
            title={
              "What Is a Digital Twin? Experimental Design for a Data-Centric Machine Learning Perspective in Health"
            }
            link={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9653941/"}
            linkDetail={"To Page"}
          />
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9653941/"
            target="_blank">
            Link
          </a> */}
        </ol>
      </div>
    </ContentContainer>
  );
};

export default Publications;
