import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #1c2541;
  color: white;
  width: 20%;
  min-height: 81vh;
  margin: 0 auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* top: 20.%; */
  @media screen and (max-width: 545px) {
    display: block;
    position: relative;
    width: 100%;
    
  }
  @media (max-width:1880px){
    margin-top: 1%;
  }
  @media (max-width:1698px){
    margin-top: 1.1%;
  }
  @media (max-width:1537px){
    margin-top: 1.2%;
  }
  @media (max-width:1409px){
    margin-top: 1.3%;
  }
   @media (max-width:1301px){
    margin-top: 1.4%;
  }
  @media (max-width:1208px){
    margin-top: 1.5%;
  }
  @media (max-width:1087px){
    margin-top: 1.6%;
  }
  @media (max-width:1019px){
    margin-top: 1.7%;
  }
  @media (max-width: 910px) {
      top: 21%;
  }
`;
export const Wrapper =styled.div`

`
export const Language = styled.div`
  width: 100%;

`;
export const FilterText = styled.p`
    font-weight: 800;
    text-align: center;
    font-size: 20px;
`
export const Letter = styled.div`
  margin-bottom: 16px;
`;
export const Text =styled.p`
  font-size: 19px;
  font-weight: 600;
  margin-left: 50px;
  
  margin-bottom: 10px;
`
export const LanguageText = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  color: white;
  margin-left: 50px;
`;

export const CheckboxInput = styled.input`
  margin-right: 20px;
  width: 16px;
  height: 16px;
`;
// export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
//   margin-left: 8px;
//   appearance: none;
//   width: 16px;
//   height: 16px;
//   border-radius: 50%;
//   border: 2px solid #ccc;
//   background-color: #fff;
//   cursor: pointer;
//   position: relative;
//   &:before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 12.5px;
//     height: 12.5px;
//     background-color: green;
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//     opacity: ${({ checked }) => (checked ? 1 : 0)};
//   }
// `;
export const MoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 50px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
