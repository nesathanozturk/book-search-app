import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  min-height: 55vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto auto;
  text-align: center;
`;

export const Books = styled.div`
  background-color: #2e3030;
  width: 280px;
  display: inline-block;
  margin: 20px;
  padding: 15px 10px;
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
  margin-right: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(220, 220, 220);
  object-fit: contain;
`;

export const BookInfo = styled.div`
  color: #eee;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.6rem;
  padding: 0.1rem 1rem 1rem;
  font-size: 0.8rem;
`;

export const Title = styled.h3`
  margin-top: 10px;
`;

export const Author = styled.h4`
display: inline-block;
margin-top: 0px;
margin-bottom: 5px;
padding: 20px 5px 5px;
font-size: 1rem;
opacity: 0.7;
}
`;

export const Details = styled.button`
  background: #dd3439;
  color: white;
  width: 100px;
  padding: 0.6rem 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
`;

export const WarningDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
