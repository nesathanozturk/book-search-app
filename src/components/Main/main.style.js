import styled from "styled-components";

export const Container = styled.div`
  min-height: 55vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto auto;
  width: 98%;
  text-align: center;
`;

export const Books = styled.div`
  display: inline-block;
  padding: 15px 10px;
  margin: 20px;
  width: 280px;
  text-align: center;
  background-color: #2e3030;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.51);
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 95%;
  height: 220px;
  margin-left: auto;
  object-fit: contain;
  margin-right: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

export const BookInfo = styled.div`
  color: #eee;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.6rem;
  padding: 0.5rem 1rem 1rem;
  font-size: 0.8rem;
`;

export const Title = styled.h3`
  margin-top: 10px;
`;

export const Author = styled.h4`
display: inline-block;
margin-top: 0px;
margin-bottom: 15px;
padding: 20px 5px 5px;
font-size: 16px;
opacity: 0.7;
}
`;

export const WarningDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
