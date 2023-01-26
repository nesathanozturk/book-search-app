import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalInner = styled.div`
  background: #2e3030;
  width: 700px;
  height: 550px;
  box-sizing: border-box;
  position: relative;
  padding: 1.5rem;
  overflow: hidden;
  font-size: 0.5rem;
  border-radius: 30px;
`;

export const Close = styled.button`
  background: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 17px;
  outline: none;
  border: none;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

export const BookName = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const BookAuthor = styled.h3`
  margin: 10px 0;
  font-size: 1rem;
  color: #ccc;
`;

export const BookTitle = styled.h4`
  font-size: 0.9rem;
  color: #ccc;
`;

export const Preview = styled.button`
  background: #00a2ed;
  color: white;
  width: 100px;
  padding: 0.6rem 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.h4`
  margin-top: 2rem;
  text-align: justify;
  font-size: 14px;
`;
