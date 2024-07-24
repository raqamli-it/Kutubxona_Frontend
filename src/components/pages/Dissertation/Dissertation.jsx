import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Container, BooksText, Table, TableHead, TableRow, TableCell, TableBody, ExelButton, SerachInput } from './index';
import Filter from '../../Filter/Filter'

const booksData = [
  { title: 'Book 1', language: 'ENG', letter: 'B' },
  { title: 'Book 2', language: 'RUS', letter: 'A' },
  { title: 'Book 3', language: 'UZB', letter: 'B' },
  { title: 'Book 4', language: 'ENG', letter: 'C' },
  { title: 'Book 5', language: 'RUS', letter: 'B' },
  { title: 'Book 6', language: 'UZB', letter: 'B' },
  { title: 'Book 7', language: 'ESP', letter: 'E' },
  { title: 'Book 8', language: 'FRA', letter: 'B' },
  { title: 'Book 9', language: 'GER', letter: 'B' },
  { title: 'Book 10', language: 'JPN', letter: 'G' },
  { title: 'Book 11', language: 'CHN', letter: 'B' },
  { title: 'Book 12', language: 'KOR', letter: 'B' },
  { title: 'Book 13', language: 'ITA', letter: 'B' },
];

function Dissertation() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter((book) => {
    const languageMatch =
      selectedLanguages.length > 0 ? selectedLanguages.includes(book.language) : true;
    const letterMatch =
      selectedLetters.length > 0 ? selectedLetters.includes(book.letter) : true;
    const searchMatch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.letter.toLowerCase().includes(searchTerm.toLowerCase());
    return languageMatch && letterMatch && searchMatch;
  });

  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredBooks, {
      header: ['title', 'language', 'letter'],
      skipHeader: false,
    });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Books');
    XLSX.writeFile(wb, 'books.xlsx');
  };

  return (
    <Container>
      <Filter
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
      />
      <BooksText>BOOKS</BooksText>
      <SerachInput
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ExelButton onClick={handleExportToExcel}>EXPORT TO EXCEL ></ExelButton>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredBooks.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Dissertation;
