import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
   {
    background-color: #0d131f;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-weight: 600;
  }
`;

function Footer() {
  return <FooterContainer>Made with by ❤️ Neşathan Öztürk</FooterContainer>;
}

export default Footer;
