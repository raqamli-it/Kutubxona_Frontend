import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/svg/Library Logo.svg';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(47cd,79,79,1);
  padding: 0 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UILink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  transition: 0.2s all;
  padding: 0 18px;
  line-height: 50px;
  &:hover {
    color: #66fcf1;
    transform: scale(1.1);
    border-bottom: 3px solid #66fcf1;
    border-radius: 8px;
    
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
  display: flex;
  align-items: center;
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
