import React, { useState, useEffect, useRef } from 'react';
import { UILink, Container, Logos, LogoContainer, Title, NavLinks, SocialIcons, IconLink, TimeDisplay, BurgerLinks, Language, LangText, LangIcon } from './styled';
import { navbar } from '../../utils';
import Logo  from "../../../assets/img/logo (1).png";
import { Outlet, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isNavLinksVisible, setIsNavLinksVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('UZB');
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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // add additional logic here to change the app's language
  };

  return (
    <Container>
      <LogoContainer onClick={handleLogoClick}>
        <Logos src={Logo} />
        <Title>Fanlar akademiyasi Tarix institutining kutubxonasi</Title>
      </LogoContainer>
      <Language>
        <LangText onClick={() => handleLanguageChange('UZB')} isSelected={selectedLanguage === 'UZB'}>
          <LangIcon src='https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'></LangIcon> UZB
        </LangText>
        <LangText onClick={() => handleLanguageChange('RUS')} isSelected={selectedLanguage === 'RUS'}>
          <LangIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/640px-Flag_of_Russia.png'></LangIcon> RUS
        </LangText>
      </Language>
      <SocialIcons>
        <IconLink href="https://telegram.org" target="_blank"><FaTelegramPlane /></IconLink>
        <IconLink href="https://instagram.com" target="_blank"><FaInstagram /></IconLink>
        <IconLink href="https://facebook.com" target="_blank"><FaFacebookF /></IconLink>
      </SocialIcons>
      <BurgerLinks onClick={toggleNavLinks} />
      <NavLinks ref={navLinksRef} isVisible={isNavLinksVisible}>
        {navbar.map(({ id, title, path }) => (
          <UILink key={id} to={path} onClick={() => setIsNavLinksVisible(false)}>{title}</UILink>
        ))}
        <TimeDisplay>{time}</TimeDisplay>
      </NavLinks>
      <Outlet />
    </Container>
  );
}

export default Navbar;
