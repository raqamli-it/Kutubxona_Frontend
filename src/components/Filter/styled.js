import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  background-color: #f9f9f9;
  width: 20%;
  margin: 0 auto;
  position: absolute;
  top: 12.8%;
  @media screen and (max-width: 545px) {
    display: block;
    position: relative;
    width: 100%;
    
  }
  @media (max-width: 910px) {
      top: 21%;
  }
`;

export const Language = styled.div`
  margin-bottom: 16px;
  margin-top: 5px;
`;
export const FilterText = styled.p`
    font-weight: bold;
    text-align: center;
`
export const Letter = styled.div`
  margin-bottom: 16px;
`;

export const LanguageText = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

export const CheckboxInput = styled.input`
  margin-left: 8px;

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
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
