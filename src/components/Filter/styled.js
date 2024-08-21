import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  background-color: #311e5c;
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
    & .show {
      display: block;
    }
  }
`;
export const Wrapper = styled.div`
  /* margin-top: 85%; */
  position: fixed;
  width: 18%;
  top: 30%;

  @media (max-width: 1900px) {
    position: fixed;
    top: 34%;
  }

  @media (max-width: 1500px) {
    position: fixed;
    top: 34%;
  }
  @media (max-height: 850px) {
    top: 34%;
  }
  @media (max-height: 680px) {
    top: 39%;
  }

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
`;
export const Language = styled.div`
  width: 100%;
  @media (max-height: 680px) {
    max-height: 170px;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 0;  /* Chrome, Safari va Opera uchun */
    background: transparent;
  }
  -ms-overflow-style: none;  /* IE va Edge uchun */
  scrollbar-width: none;  /* Firefox uchun */
  }
`;
export const FilterText = styled.p`
  font-weight: 800;
  text-align: center;
  font-size: 20px;
  @media (max-height: 650px) {
    font-size: 15px;
  }
`;
export const Letter = styled.div`
  margin-bottom: 16px;
  @media (max-height: 680px) {
    max-height:170px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 8px;
    ::-webkit-scrollbar {
    width: 0;  /* Chrome, Safari va Opera uchun */
    background: transparent;
  }
  -ms-overflow-style: none;  /* IE va Edge uchun */
  scrollbar-width: none;  /* Firefox uchun */
  }
`;
export const Text = styled.p`
  font-size: 19px;
  font-weight: 600;
  margin-left: 50px;

  margin-bottom: 10px;
  @media (max-height: 730px) {
    font-size: 15px;
    margin-bottom: 1px;
  }
  @media (max-height: 680px) {
    font-size: 13px;
    
  }
  /* @media (max-height: 850px) {
    font-size: 16px;
  } */

`;
export const LanguageText = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  color: white;
  margin-left: 50px;
  @media (max-height: 650px) {
    font-size: 12px;
    width: 75%;
  }
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
  @media (max-height: 730px) {
    margin-bottom: 14px;
  }
  @media (max-height: 680px) {
    margin-bottom: 5px;
    padding: 3px 10px;
  }
  /* @media (max-height: 850px) {
    margin-bottom: 5px;
  } */
`;
