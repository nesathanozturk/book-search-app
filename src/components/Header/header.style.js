import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`;

export const Section = styled.section`
  width: 100%;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Input = styled.input`
  background-color: gray;
  color: #fff;
  width: 30%;
  margin-top: 0.7rem;
  padding: 13px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;
