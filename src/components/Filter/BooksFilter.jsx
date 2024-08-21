import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Language,
  CheckboxInput,
  LanguageText,
  MoreButton,
  Letter,
  FilterText,
  Text,
  Wrapper,
} from "./styled";
import Checkbox from "./chekbox/chekbox";
import useFetch from "../Hooks/useFetchAllData";

function Filter({
  selectedLanguages,
  setSelectedLanguages,
  selectedLetters,
  setSelectedLetters,
  filteredBooksCount, // Receiving filteredBooksCount
}) {
  const [allLanguages, setAllLanguages] = useState([]);
  const [allLetters, setAllLetters] = useState([]);
  const [visibleLanguagesCount, setVisibleLanguagesCount] = useState(3);
  const [visibleLettersCount, setVisibleLettersCount] = useState(3);

  const { data: booksData, loading, error } = useFetch("books/");
  const navigate = useNavigate(); // useNavigate hookini chaqirish

  useEffect(() => {
    if (booksData) {
      const languages = [...new Set(booksData.map((book) => book.language_name))];
      const letters = [...new Set(booksData.map((book) => book.category_name))];

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

  const handleLogout = () => {
    navigate('/login'); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <Container>
      <Wrapper>
        <FilterText>SARALASH</FilterText>
        <Language>
          <Text>Tillar</Text>
          {allLanguages.slice(0, visibleLanguagesCount).map((lang) => (
            <LanguageText key={lang}>
              {lang}
              <Checkbox
                id={`checkbox-${lang}`}
                value={lang}
                checked={selectedLanguages.includes(lang)}
                onChange={handleLanguageCheckboxChange}
              />
            </LanguageText>
          ))}
          {visibleLanguagesCount < allLanguages.length && (
            <MoreButton onClick={handleMoreLanguages}>Boshqa Tillar</MoreButton>
          )}
        </Language>
        <Letter>
          <Text>Qatorlar</Text>
          {allLetters.slice(0, visibleLettersCount).map((letter) => (
            <LanguageText key={letter}>
              {letter}
              <Checkbox
                id={`checkbox-${letter}`}
                value={letter}
                checked={selectedLetters.includes(letter)}
                onChange={handleLetterCheckboxChange}
              />
            </LanguageText>
          ))}
          {visibleLettersCount < allLetters.length && (
            <MoreButton onClick={handleMoreLetters}>Boshqa Qatorlar</MoreButton>
          )}
        </Letter>
        <Text>Umumiy Kitoblar soni: {filteredBooksCount}</Text>
        <MoreButton onClick={handleLogout}>Chiqish</MoreButton> {/* Chiqish tugmasi */}
      </Wrapper>
    </Container>
  );
}

export default Filter;
