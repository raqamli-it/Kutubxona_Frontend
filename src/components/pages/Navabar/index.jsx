import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment-hijri';
import 'moment/locale/uz-latn';
import 'moment/locale/uz';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Container, Logos, LogoContainer, Title, NavLinks, UILink, TimeDisplay, BurgerLinks, CalendarWrapper } from './styled';
import Logo from '../../../assets/img/logo (1).png';
import Calendar from 'react-calendar';
import { navbar } from '../../utils';
import 'react-calendar/dist/Calendar.css';

function Navbar() {
  const getFormattedDate = (date) => {
    // Replace this with your Cyrillic formatted date
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isNavLinksVisible, setIsNavLinksVisible] = useState(false);
  const [gregorianDate, setGregorianDate] = useState(getFormattedDate(new Date()));
  const [hijriDate, setHijriDate] = useState(moment().format('iYYYY-yyyy iD iMMMM'));
  const [date, setDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    setGregorianDate(getFormattedDate(date));
    setHijriDate(moment(date).format('iYYYY-yyyy iD iMMMM'));
  }, [date]);

  const handleLogoClick = () => {
    navigate('/login'); // LogIN sahifasiga o'tish
  };

  const toggleNavLinks = () => {
    setIsNavLinksVisible(!isNavLinksVisible);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const onDateChange = (newDate) => {
    setDate(newDate);
    setCalendarOpen(false);
  };

  return (
    <Container>
      <LogoContainer onClick={handleLogoClick}>
        <Logos src={Logo} />
        <Title>Fanlar Akademiyasi Tarix institutining <br /> kutubxonasi</Title>
      </LogoContainer>
      <TimeDisplay>
        {time}
      </TimeDisplay>
      <TimeDisplay className='Aug' onClick={toggleCalendar}>
        <i className="fa fa-calendar" aria-hidden="true"></i> <p>{gregorianDate} | {hijriDate}</p>
      {calendarOpen && (
        <CalendarWrapper>
          <Calendar onChange={onDateChange} value={date} />
        </CalendarWrapper>
      )}
      </TimeDisplay>
      {/* <TimeDisplay>
        <WeatherSide />
      </TimeDisplay> */}
      <NavLinks ref={navLinksRef} isVisible={isNavLinksVisible}>
        {navbar.filter(link => !link.hidden).map(({ id, title, path }) => (
          <UILink
            key={id}
            to={path}
            onClick={() => setIsNavLinksVisible(false)}
            isSelected={location.pathname === path}
          >
            {title}
          </UILink>
        ))}
      </NavLinks>
      <BurgerLinks onClick={toggleNavLinks} />
      <Outlet />
    </Container>
  );
}

export default Navbar;
