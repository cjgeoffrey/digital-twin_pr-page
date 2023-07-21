import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const News = () => {
  return (
    <ContentContainer id="news">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h3>Visit here for up to date news about our project</h3>
        <p>
          1. A brief article elaborating our research can be found here:{" "}
          <a
            style={{ color: "#fff", textDecoration: "underline" }}
            href="https://www.tuni.fi/en/news/supporting-personalised-and-preventive-medicine-first-acute-myeloid-leukaemia-digital-twin"
            target="_blank">
            TUNI article
          </a>
        </p>
      </div>
    </ContentContainer>
  );
};

export default News;
