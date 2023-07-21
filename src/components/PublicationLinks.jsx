import React from "react";

const PublicationLinks = ({ title, link, linkDetail }) => {
  return (
    <>
      <li>
        {title}{" "}
        <a href={link} target="_blank">
          {linkDetail}
        </a>
      </li>
    </>
  );
};

export default PublicationLinks;
