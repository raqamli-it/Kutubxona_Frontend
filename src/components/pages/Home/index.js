import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LibraryImg = styled.img`
  width: 100%;
  height: 90vh;
  margin-top: 1%;
`;
export const Button = styled.button`
  width: 8%;
  height: auto;
  padding: 8px;
  position: absolute;
  bottom: 10%;
  border-radius: 15px;
  background-color: #4D73FF;
  border: none;
  color: white;
  font-size: 15px;
  transition: .3s ease-in-out;
  &:hover{
    transition: .3s ease-in-out;
    transform: scale(1.3);
    
  }
  @media screen and (max-width: 686px){
    width: 20%;
  }
`;


