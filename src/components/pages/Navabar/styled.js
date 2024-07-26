import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const slideDown = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 200px; /* Yoki sizning navlinklaringiz uchun kerakli balandlik */
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    height: 200px; /* Yoki sizning navlinklaringiz uchun kerakli balandlik */
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(29, 37, 46, 1) 0%,
    rgba(47, 79, 79, 1) 120%
  );
  padding: 0 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  @media screen and (max-width: 910px) {
    height: 130px;
  }
  @media screen and (max-width: 605px) {
    height: auto;
  }
  @media screen and (max-width: 390px) {
    padding: 0 0;
  }
`;

export const UILink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  transition: 0.2s all;
  padding: 0 18px;
  line-height: 40px;

  &:hover {
    color: #66fcf1;
    transform: scale(1.1);
    border-bottom: 3px solid #66fcf1;
    border-radius: 8px;

  }
  @media (max-width:755px) {
      padding: 0 10px;
  }
  @media (max-width:675px) {
      padding: 0 2px;
  }
`;
export const Language =styled.div`
  width: 8%;
  display: flex; 
  justify-content: space-around;
`
export const LangText =styled.p`
  color: white;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items:center; 
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    `
    font-weight: bold;
    color: #007BFF; // Tanlangan til uchun rang
  `}
`
export const LangIcon =styled.img`
  width: 20px;
  border-radius: 50%;
  height: 20px;
`
export const BurgerLinks = styled(FaBars)`
  color: #fff;
  display: none;
  font-size: 23px;
  @media screen and (max-width: 609px) {
    display: block;
  }
`;

export const Logos = styled.img`
  width: 40px;
  height: 40px;
  & > path {
    fill: #fff;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0;
  color: #fff;
`;

export const TimeDisplay = styled.div`
  font-size: 18px;
  width: 1%;
  margin-left: -30px;
  color: #fff;
`;

export const NavLinks = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: ${({ isVisible }) => (isVisible ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: ${({ isVisible }) => (isVisible ? " " : "space-around")};
  background-color: ${({ isVisible }) =>
    isVisible ? "rgba(0,0,0, 0.5)" : " "};
  position: ${({ isVisible }) => (isVisible ? "absolute" : " ")};
  width: 100% !important;
  left: 0;
  top: 13%;
  z-index: 999;
  align-items: center;
  animation: ${({ isVisible }) => (isVisible ? slideDown : slideUp)} 0.3s
    ease-out;
  overflow: hidden;
  @media screen and (min-width: 610px) {
    display: flex;
    /* width: 400px !important;/ */
    height: auto !important;
    animation: none;
    background-color: transparent;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  margin-left: 15px;
  color: #66fcf1;
  transition: 0.3s all;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    color: #45a29e;
  }
`;
