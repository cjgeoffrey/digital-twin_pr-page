import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const News = () => {
  return (
    <ContentContainer id="news">
      <div
        style={{
          maxWidth: "60%",
          margin: "0 auto",
          paddingTop: "2rem",
          color: "#fff",
        }}>
        <h3>News</h3>
        <p>Start of the project at the 1st January 2023.</p>
        <p>
          Press release of Tampere University{" "}
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
