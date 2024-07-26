import React, { useState, useEffect } from 'react';
import { Container, Language, CheckboxInput, LanguageText, MoreButton, Letter, FilterText } from './styled';
import useFetch from '../Hooks/useFetchAllData'; // `useFetch` hook'ning to'liq yo'li

function Filter({ selectedLanguages, setSelectedLanguages, selectedLetters, setSelectedLetters }) {
  const [allLanguages, setAllLanguages] = useState([]);
  const [allLetters, setAllLetters] = useState([]);
  const [visibleLanguagesCount, setVisibleLanguagesCount] = useState(3);
  const [visibleLettersCount, setVisibleLettersCount] = useState(3);

  const { data: booksData, loading, error } = useFetch("https://library.mebel-zakaz.uz/api/v1/books/");

  useEffect(() => {
    if (booksData) {
      // `language_name` va `category_name` bo'yicha unique qiymatlarni ajratamiz
      const languages = [...new Set(booksData.map(item => item.language_name))];
      const letters = [...new Set(booksData.map(item => item.category_name))];

      setAllLanguages(languages);
      setAllLetters(letters);
    }
  }, [booksData]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

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
