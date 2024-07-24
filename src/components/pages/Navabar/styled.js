import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svg/Library Logo.svg";
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
  height: 70px;
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
`;

export const BurgerLinks = styled(FaBars)`
  color: #fff;
  display: none;
  font-size: 23px;
  @media screen and (max-width: 605px) {
    display: block;
  }
`;

export const Logos = styled(Logo)`
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
  width: 35%;
  margin-left: 50px;
  color: #fff;
`;

export const NavLinks = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: ${({ isVisible }) => (isVisible ? "column" : "row")};
  background-color: ${({ isVisible }) =>
    isVisible ? "rgba(0,0,0, 0.5)" : " "};
  position: ${({ isVisible }) => (isVisible ? "absolute" : " ")};
  width: 50%;
  left: 0;
  top: 4.7%;
  z-index: 999;
  align-items: center;
  animation: ${({ isVisible }) => (isVisible ? slideDown : slideUp)} 0.3s
    ease-out;
  overflow: hidden;
  @media screen and (min-width: 606px) {
    display: flex;
    width: auto;
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
