import React, { useState, useEffect } from 'react';
import { UILink, Container, Logos, LogoContainer, Title, NavLinks, SocialIcons, IconLink, TimeDisplay } from './styled';
import { navbar } from '../../utils';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <Container>
      <LogoContainer onClick={handleLogoClick}>
        <Logos />
        <Title>LIBRARY</Title>
        <TimeDisplay>{time}</TimeDisplay>
      </LogoContainer>
      <NavLinks>
        {navbar.map(({ id, title, path }) => (
          <UILink key={id} to={path}>{title}</UILink>
        ))}
      </NavLinks>
      <SocialIcons>
        <IconLink href="https://telegram.org" target="_blank"><FaTelegramPlane /></IconLink>
        <IconLink href="https://instagram.com" target="_blank"><FaInstagram /></IconLink>
        <IconLink href="https://facebook.com" target="_blank"><FaFacebookF /></IconLink>
      </SocialIcons>
      <Outlet />
    </Container>
  );
}

export default Navbar;
