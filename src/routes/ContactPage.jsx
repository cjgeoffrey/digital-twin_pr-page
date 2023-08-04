import React from "react";
import ContentContainer from "../shared/cards/ContentContainer";

const ContactPage = () => {
  return (
    <ContentContainer id="contact">
      <div className="body-text">
        <h3>Contact Us</h3>
        <address>
          Tampere University,
          <br /> Hervanta Campus, <br /> 33720 Tampere, <br /> Finland
        </address>
      </div>
    </ContentContainer>
  );
};

export default ContactPage;
