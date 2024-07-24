import React, { useState, useEffect, useRef } from 'react';
import { UILink, Container, Logos, LogoContainer, Title, NavLinks, SocialIcons, IconLink, TimeDisplay, BurgerLinks } from './styled';
import { navbar } from '../../utils';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isNavLinksVisible, setIsNavLinksVisible] = useState(false);
  const navigate = useNavigate();
  const navLinksRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setIsNavLinksVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  const toggleNavLinks = () => {
    setIsNavLinksVisible(!isNavLinksVisible);
  };

  return (
    <Container>
      <BurgerLinks onClick={toggleNavLinks} />
      <LogoContainer onClick={handleLogoClick}>
        <Logos />
        <Title>LIBRARY</Title>
        <TimeDisplay>{time}</TimeDisplay>
      </LogoContainer>
      <NavLinks ref={navLinksRef} isVisible={isNavLinksVisible}>
        {navbar.map(({ id, title, path }) => (
          <UILink key={id} to={path} onClick={() => setIsNavLinksVisible(false)}>{title}</UILink>
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
 