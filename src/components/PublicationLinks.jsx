import React from "react";

const PublicationLinks = ({ title, link, linkDetail, citation }) => {
  return (
    <>
      <li>
        {title}{" "}
        <a href={link} target="_blank">
          {citation}
        </a>
      </li>
    </>
  );
};

export default PublicationLinks;
