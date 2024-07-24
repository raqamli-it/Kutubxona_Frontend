import React, { useState } from 'react';
import { Container, Language, CheckboxInput, LanguageText, MoreButton, Letter,FilterText } from './styled';

const allLanguages = ['ENG', 'RUS', 'UZB', 'ESP', 'FRA', 'GER', 'JPN', 'CHN', 'KOR', 'ITA'];
const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function Filter({ selectedLanguages, setSelectedLanguages, selectedLetters, setSelectedLetters }) {
  const [visibleLanguagesCount, setVisibleLanguagesCount] = useState(3);
  const [visibleLettersCount, setVisibleLettersCount] = useState(3);

  const handleLanguageCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLanguages((prev) => [...prev, value]);
    } else {
      setSelectedLanguages((prev) => prev.filter((lang) => lang !== value));
    }
  };

  const handleLetterCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLetters((prev) => [...prev, value]);
    } else {
      setSelectedLetters((prev) => prev.filter((letter) => letter !== value));
    }
  };

  const handleMoreLanguages = () => {
    setVisibleLanguagesCount((prev) => prev + 3);
  };

  const handleMoreLetters = () => {
    setVisibleLettersCount((prev) => prev + 3);
  };

  return (
    <Container>
      <FilterText>FILTER</FilterText>
      <Language>
        {allLanguages.slice(0, visibleLanguagesCount).map((lang) => (
          <LanguageText key={lang}>
            {lang}
            <CheckboxInput
              type="checkbox"
              value={lang}
              onChange={handleLanguageCheckboxChange}
              checked={selectedLanguages.includes(lang)}
            />
          </LanguageText>
        ))}
        {visibleLanguagesCount < allLanguages.length && (
          <MoreButton onClick={handleMoreLanguages}>Boshqa Tillar</MoreButton>
        )}
      </Language>
      <Letter>
        {allLetters.slice(0, visibleLettersCount).map((letter) => (
          <LanguageText key={letter}>
            {letter}
            <CheckboxInput
              type="checkbox"
              value={letter}
              onChange={handleLetterCheckboxChange}
              checked={selectedLetters.includes(letter)}
            />
          </LanguageText>
        ))}
        {visibleLettersCount < allLetters.length && (
          <MoreButton onClick={handleMoreLetters}>Boshqa Harflar</MoreButton>
        )}
      </Letter>
    </Container>
  );
}

export default Filter;
