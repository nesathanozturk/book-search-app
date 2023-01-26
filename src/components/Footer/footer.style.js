import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #002a38;
  line-height: 1.3;
  margin-top: 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: auto;
`;

export const Links = styled.a`
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
  :hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }
`;

export const Paragraph = styled.p`
  margin-top: 2rem;
  text-align: center;
`;
