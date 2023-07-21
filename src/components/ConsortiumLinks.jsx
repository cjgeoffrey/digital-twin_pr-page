import React from "react";

const ConsortiumLinks = ({ name, link, linkDetail }) => {
  return (
    <>
      <li>
        {name}{" "}
        <a href={link} target="_blank">
          {linkDetail}
        </a>
      </li>
    </>
  );
};

export default ConsortiumLinks;
