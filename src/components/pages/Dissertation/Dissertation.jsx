import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Container,
  BooksText,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ExelButton,
  SerachInput,
  SearchContainer,
  SearchIcon,
  PaginationContainer,
  PaginationButton,
} from "./index";
import Filter from "../../Filter/Filter";
import { FaSearch } from "react-icons/fa";

const booksData = [
  { title: "Book 1", language: "ENG", letter: "B", isScanned: true },
  { title: "Book 2", language: "RUS", letter: "A", isScanned: false },
  { title: "Book 3", language: "UZB", letter: "B", isScanned: true },
  { title: "Book 4", language: "ENG", letter: "C", isScanned: false },
  { title: "Book 5", language: "RUS", letter: "B", isScanned: true },
  { title: "Book 6", language: "UZB", letter: "B", isScanned: false },
  { title: "Book 7", language: "ESP", letter: "E", isScanned: true },
  { title: "Book 8", language: "FRA", letter: "B", isScanned: false },
  { title: "Book 9", language: "GER", letter: "B", isScanned: true },
  { title: "Book 10", language: "JPN", letter: "G", isScanned: false },
  { title: "Book 11", language: "CHN", letter: "B", isScanned: true },
  { title: "Book 12", language: "KOR", letter: "B", isScanned: false },
  { title: "Book 13", language: "ITA", letter: "B", isScanned: true },
  { title: "Book 14", language: "ENG", letter: "B", isScanned: true },
  { title: "Book 15", language: "RUS", letter: "A", isScanned: false },
  { title: "Book 16", language: "UZB", letter: "B", isScanned: true },
  { title: "Book 17", language: "ENG", letter: "C", isScanned: false },
  { title: "Book 18", language: "RUS", letter: "B", isScanned: true },
  { title: "Book 19", language: "UZB", letter: "B", isScanned: false },
  { title: "Book 20", language: "ESP", letter: "E", isScanned: true },
  { title: "Book 21", language: "FRA", letter: "B", isScanned: false },
  { title: "Book 22", language: "GER", letter: "B", isScanned: true },
  { title: "Book 23", language: "JPN", letter: "G", isScanned: false },
  { title: "Book 24", language: "CHN", letter: "B", isScanned: true },
  { title: "Book 25", language: "KOR", letter: "B", isScanned: false },
  { title: "Book 26", language: "ITA", letter: "B", isScanned: true },
];
const ITEMS_PER_PAGE = 10;

function Dissertation() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationStart, setPaginationStart] = useState(0);

  const filteredBooks = booksData.filter((book) => {
    const languageMatch =
      selectedLanguages.length > 0
        ? selectedLanguages.includes(book.language)
        : true;
    const letterMatch =
      selectedLetters.length > 0 ? selectedLetters.includes(book.letter) : true;
    const searchMatch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    return languageMatch && letterMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleExportToExcel = () => {
    // Export qilish uchun faqat tartib raqam va sarlavhadan iborat ma'lumotlarni tayyorlash
    const exportData = filteredBooks.map((book, index) => ({
      No: (currentPage - 1) * filteredBooks.length + index + 1, // Tartib raqam
      title: book.title, // Sarlavha
    }));
  
    // Excel uchun yangi varaqlarni yaratish
    const ws = XLSX.utils.json_to_sheet(exportData, {
      header: ["No", "title"], // Excel ustunlari
      skipHeader: false, // Ustun nomlarini qo'shish
    });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Books");
  
    // Excel faylini yaratish
    const fileName = `books_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };
  
  const handleNextPagination = () => {
    setPaginationStart((prev) => Math.min(prev + 3, totalPages - 3));
  };

  const handlePrevPagination = () => {
    setPaginationStart((prev) => Math.max(0, prev - 3));
  };

  return (
    <Container>
      <BooksText>DISSERTATSIYA</BooksText>
      <SearchContainer>
        <SerachInput
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
      </SearchContainer>
      <ExelButton onClick={handleExportToExcel}>EXPORT TO EXCEL ></ExelButton>
      <Filter
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedBooks.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationContainer>
        {paginationStart > 0 && (
          <PaginationButton onClick={handlePrevPagination}>
            &lt;
          </PaginationButton>
        )}
        {Array.from({ length: Math.min(3, totalPages - paginationStart) }, (_, index) => (
          <PaginationButton
            key={paginationStart + index}
            onClick={() => setCurrentPage(paginationStart + index + 1)}
            active={paginationStart + index + 1 === currentPage }
          >
            {paginationStart + index + 1}
          </PaginationButton>
        ))}
        {paginationStart + 3 < totalPages && (
          <PaginationButton onClick={handleNextPagination}>
            &gt;
          </PaginationButton>
        )}
      </PaginationContainer>
    </Container>
  );
}

export default Dissertation;
