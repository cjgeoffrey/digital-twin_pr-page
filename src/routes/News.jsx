import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const News = () => {
  return (
    <ContentContainer id="news">
      <div className="body-text">
        <h2>News</h2>
        <ul style={{ padding: "0 1rem" }}>
          <li>Start of the project at the 1st January 2023.</li>
          <li>
            Press release of Tampere University{" "}
            <a
              style={{ color: "#fff", textDecoration: "underline" }}
              href="https://www.tuni.fi/en/news/supporting-personalised-and-preventive-medicine-first-acute-myeloid-leukaemia-digital-twin"
              target="_blank">
              TUNI article
            </a>
          </li>
        </ul>
      </div>
    </ContentContainer>
  );
};

export default News;
