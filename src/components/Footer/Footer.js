import React from "react";
import { FooterContainer, Ul, Links, Paragraph } from "./footer.style.js";

function Footer() {
  return (
    <FooterContainer>
      <Ul>
        <li>
          <Links href="https://www.linkedin.com/in/nesathanozturk">
            Linkedin
          </Links>
        </li>
        <li>
          <Links href="https://www.github.com/nesathanozturk">Github</Links>
        </li>
        <li>
          <Links href="https://www.instagram.com/nesathanozturk">
            Instagram
          </Links>
        </li>
        <li>
          <Links href="mailto:nesathanozturk061@gmail.com">Email</Links>
        </li>
      </Ul>
      <Paragraph>Made with by ❤️&nbsp; Neşathan Öztürk</Paragraph>
    </FooterContainer>
  );
}

export default Footer;
