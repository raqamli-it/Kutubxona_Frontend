import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #311E5C;
  color: white;
  width: 20%;
  min-height: 80vh;
  /* margin: 0 auto; */
  /* position: sticky;  */
  /* display: flex; */
  /* top: -5%; */
  /* top: 10%; */
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 545px) {
    display: block;
    position: relative;
    width: 100%;
  }
  @media (max-width: 950px) {
    display: none;
    position: absolute;
    & .show{
      display: block;
    }
  }
`;
export const Wrapper =styled.div`
  /* margin-top: 85%; */
  position: sticky;
  top: 28%;
  /* @media (max-width: 1800px) {
    margin-top: 95%;
  }
  @media (max-width: 1700px) {
    margin-top: 100%;
  }
  @media (max-width: 1600px) {
    margin-top: 105%;
  }
  @media (max-width: 1500px) {
    margin-top: 110%;
  }
  @media (max-width: 1400px) {
    margin-top: 120%;
  }
  @media (max-width: 1300px) {
    margin-top: 130%;
  }
  @media (max-width: 1200px) {
    margin-top: 140%;
  }
  @media (max-width: 1100px) {
    margin-top: 160%;
  }
  @media (max-width: 1000px) {
    margin-top: 180%;
  } */
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
  position: fixed;
  z-index: 999;
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
  margin-bottom: 25px;
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
