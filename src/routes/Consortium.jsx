import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";
import ConsortiumLinks from "../components/ConsortiumLinks";

const Consortium = () => {
  const peopleInConsortium = [
    {
      name: "Ilya Shmulevich (PI), Seattle",
      link: "https://shmulevich.isbscience.org/",
      linkDetail: "Lab Home Page",
    },
    {
      name: "Boris Aguilar (Senior Research Scientist), Seattle",
      link: "https://scholar.google.com/citations?user=z4vA4YAAAAAJ&hl=en&oi=ao",
      linkDetail: "Google Scholar",
    },
    {
      name: "David Gibbs (Senior Research Scientist), Seattle",
      link: "https://scholar.google.com/citations?user=lMvBJ3IAAAAJ&hl=en&oi=ao",
      linkDetail: "Google Scholar",
    },
    {
      name: "Bahar Tercan ( Research Scientist), Seattle",
      link: "https://scholar.google.com/citations?hl=en&user=BO5I1T0AAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Vesteinn Thorsson (Principal Scientist), Seattle",
      link: "https://scholar.google.com/citations?hl=en&user=2H_kMKsAAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Guangrong Qin (Senior Research Scientist), Seattle",
      link: "https://scholar.google.com/citations?hl=en&user=nravnEcAAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Caroline Heckman (Co-PI), Helsinki",
      link: "https://scholar.google.com/citations?hl=en&user=JO2HFYEAAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Mika Kontro (Co-PI), Helsinki",
      link: "https://scholar.google.com/citations?user=HMwJ3rYAAAAJ&hl=en&oi=ao",
      linkDetail: "Google Scholar",
    },
    {
      name: "Heikki Kuusanmäki (Postdoctoral Researcher), Helsinki",
      link: "https://scholar.google.com/citations?hl=en&user=iZxajZgAAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Philipp Sergeev (Doctoral Researcher), Helsinki",
      link: "https://scholar.google.com/citations?hl=en&user=iZxajZgAAAAJ",
      linkDetail: "Google Scholar",
    },
    {
      name: "Olli Yli-Harja (Co-PI), Tampere",
      link: "https://scholar.google.com/citations?user=HPcSSpUAAAAJ&hl=en&oi=ao",
      linkDetail: "Google Scholar",
    },
    {
      name: "Frank Emmert-Streib (Co-PI), Tampere",
      link: "http://www.bio-complexity.com/index.html",
      linkDetail: "Lab Home Page",
    },
    {
      name: "Amer Farea (Postdoctoral Researcher), Tampere",
      link: "",
      linkDetail: "",
    },
    {
      name: "Jerome Geoffrey Chandraseelan (Postdoctoral Researcher), Tampere",
      link: "",
      linkDetail: "",
    },
  ];

  const membersOfConsortium = peopleInConsortium.map((person) => {
    return (
      <div key={person.name}>
        <ConsortiumLinks
          name={person.name}
          link={person.link}
          linkDetail={person.linkDetail}
        />
      </div>
    );
  });
  return (
    <ContentContainer id="consortium">
      <div
        style={{
          maxWidth: "60%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
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
            The PS-AML-DT is a part of the AKA-NIH Partnership Programme
            launched in November 2020 and funded by the National Institute of
            Health (NIH, USA) and the Academy of Finland.
          </p>
        </div>
        <div>
          <h2>Team:</h2>
          <ul style={{ padding: "0 1rem" }}>{membersOfConsortium}</ul>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Consortium;
