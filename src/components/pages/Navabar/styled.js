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
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  /* background-image: linear-gradient(45deg, rgb(20, 222, 124) 0%, rgb(20, 222, 124) 21%,rgb(25, 190, 119) 21%, rgb(25, 190, 119) 37%,rgb(30, 158, 113) 37%, rgb(30, 158, 113) 46%,rgb(35, 126, 108) 46%, rgb(35, 126, 108) 53%,rgb(39, 94, 103) 53%, rgb(39, 94, 103) 59%,rgb(44, 62, 97) 59%, rgb(44, 62, 97) 77%,rgb(49, 30, 92) 77%, rgb(49, 30, 92) 100%); */
  background-image: linear-gradient(304deg, rgb(41,242,144) 0%, rgb(41,242,144) 21%,rgb(25, 190, 119) 21%, rgb(25, 190, 119) 37%,rgb(30, 158, 113) 37%, rgb(30, 158, 113) 46%,rgb(35, 126, 108) 46%, rgb(35, 126, 108) 53%,rgb(39, 94, 103) 53%, rgb(39, 94, 103) 59%,rgb(44, 62, 97) 59%, rgb(44, 62, 97) 77%,rgb(49, 30, 92) 77%, rgb(49, 30, 92) 100%);  
  padding: 0 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  @media screen and (max-width: 950px) {
    height: 250px;
  }
  /* @media screen and (max-width: 605px) {
    /* padding: 0 0; */
  } */

`;

export const UILink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  transition: 0.3s all;
  padding: 0 18px;
  line-height: 40px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: ${({ isSelected }) => (isSelected ? '100%' : '0')};
    height: 3px;
    background: #66fcf1;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    color: #66fcf1;
    transform: scale(1.1);
  }

  @media (max-width: 755px) {
    padding: 0 10px;
  }
  @media (max-width: 675px) {
    padding: 0 2px;
  }
`;

export const Language = styled.div`
  width: 8%;
  display: flex; 
  justify-content: space-around;
`;

export const LangText = styled.p`
  color: white;
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
`;

export const LangIcon = styled.img`
  width: 20px;
  border-radius: 50%;
  height: 20px;
`;

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
  margin-top: 2%;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0;
  color: #fff;
`;
export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  margin-top: 10px;
`;
export const TimeDisplay = styled.div`
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavLinks = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: ${({ isVisible }) => (isVisible ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: ${({ isVisible }) => (isVisible ? " " : "space-around")} !important;
  background-color: ${({ isVisible }) =>
    isVisible ? "rgba(0,0,0, 0.5)" : " "};
  width: 90% ;
  margin-left: ${({ isVisible }) => (isVisible ? " " : "16%")};
  position: ${({ isVisible }) => (isVisible ? "absolute" : " ")};
  /* left: 0; */
  /* top: 13%; */
  z-index: 999;
  align-items: center;
  animation: ${({ isVisible }) => (isVisible ? slideDown : slideUp)} 0.3s
    ease-out;
  overflow: hidden;
  @media screen and (min-width: 610px) {
    display: flex;
    justify-content: center;
    background-color: transparent;
    flex-direction: row;
    position: static;
    animation: none;
    overflow: visible;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  color: white;
  margin: 0 10px;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    color: #66fcf1;
    transform: scale(1.1);
  }
`;
