import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Input = styled.input`
  background-color: gray;
  color: #fff;
  margin-top: 0.7rem;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;
