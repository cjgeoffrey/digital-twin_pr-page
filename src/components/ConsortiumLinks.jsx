import React from "react";

const ConsortiumLinks = ({ name, link, institution }) => {
  return (
    <>
      <li>
        <p>
          <a href={link} target="_blank">
            {name}
          </a>
          {", "}
          {institution}
        </p>
      </li>
    </>
  );
};

export default ConsortiumLinks;
