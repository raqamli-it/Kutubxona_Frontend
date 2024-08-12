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
  Wrapper,
  Searcht
} from "./styled";
import Filter from "../../Filter/BooksFilter";
import useFetchAllData from "../../Hooks/useFetchAllData";

const ITEMS_PER_PAGE = 10;

function Books() {
  const { data: booksData, loading, error } = useFetchAllData("books/");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationStart, setPaginationStart] = useState(0);


  const uniqueLanguages =
    booksData && booksData.length > 0
      ? [
          ...new Set(
            booksData
              .map((book) => book.language_name)
              .filter((language_name) => language_name !== undefined)
          ),
        ]
      : [];
  const uniqueLetters = [
    ...new Set(booksData.map((book) => book.category_name)),
  ];

  const filteredBooks = booksData.filter((book) => {
    const languageMatch =
      selectedLanguages.length > 0
        ? selectedLanguages.includes(book.language_name)
        : true;
    const letterMatch =
      selectedLetters.length > 0
        ? selectedLetters.includes(book.category_name)
        : true;
    const searchMatch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return languageMatch && letterMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleExportToExcel = () => {
    const exportData = filteredBooks.map((book, index) => ({
      '№': (currentPage - 1) * ITEMS_PER_PAGE + index + 1,
      title: book.title,
      Til: book.language_name,
      Qator: book.category_name,
      Nusxalangan: book.scan ? "Skaner qilingan ✅" : "Skaner qilinmagan ❎",
    }));
    
    exportData.push({
      '№': '',
      title: 'Jami Kitoblar soni',
      Til: '',
      Qator: '',
      Nusxalangan: filteredBooks.length
    });
  
    const ws = XLSX.utils.json_to_sheet(exportData, {
      header: ["№", "title", "Nusxalangan", "Til", "Qator"],
      skipHeader: false,
    });
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Books");
    XLSX.writeFile(wb, "books.xlsx");
  };

  const handleNextPagination = () => {
    setPaginationStart((prev) => Math.min(prev + 3, totalPages - 3));
  };

  const handlePrevPagination = () => {
    setPaginationStart((prev) => Math.max(0, prev - 3));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Container>
      <SearchContainer>
        <Searcht>
        <SerachInput
          type="text"
          placeholder="Qidiruv..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
        </Searcht>
        <ExelButton onClick={handleExportToExcel}>Yuklab Olish</ExelButton>
        {/* <button onClick={() => setIsFilterModalVisible(true)}>Open Filter</button> */}
      </SearchContainer>
      <Wrapper>
      <Filter
        allLanguages={uniqueLanguages}
        allLetters={uniqueLetters}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
        filteredBooksCount={filteredBooks.length}
      />
      {/* {isFilterModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsFilterModalVisible(false)}>Close</button>
          </div>
        </div>
      )} */}
      <Table>
        <TableHead>
          <TableRow className="th">
            <TableCell className="thc">№</TableCell>
            <TableCell className="thc">Kitobning Nomi</TableCell>
            <TableCell className="thc">Nusxalangan</TableCell>
            <TableCell className="thc">Til</TableCell>
            <TableCell className="thc">Qator</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedBooks.length > 0 ? (
            paginatedBooks.map((book, index) => (
              <TableRow key={index}>
              <TableCell>
                {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
              </TableCell>
              <TableCell className="title">{book.title}</TableCell>
              <TableCell className="flex">
                {book.scan ? <p className="flex">Skaner qilingan <span>✅</span></p> : <p className="flex">Skaner qilinmagan <span>❌</span></p>}
              </TableCell>
              <TableCell>{book.language_name}</TableCell>
              <TableCell>{book.category_name}</TableCell>
            </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>Hech narsa topilmadi</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      </Wrapper>
      <PaginationContainer>
        {paginationStart > 0 && (
          <PaginationButton onClick={handlePrevPagination}>
            &lt;
          </PaginationButton>
        )}
        {Array.from(
          { length: Math.min(3, totalPages - paginationStart) },
          (_, index) => (
            <PaginationButton
              key={paginationStart + index}
              onClick={() => setCurrentPage(paginationStart + index + 1)}
              active={paginationStart + index + 1 === currentPage}
            >
              {paginationStart + index + 1}
            </PaginationButton>
          )
        )}
        {paginationStart + 3 < totalPages && (
          <PaginationButton onClick={handleNextPagination}>
            &gt;
          </PaginationButton>
        )}
      </PaginationContainer>
    </Container>
  );
}

export default Books;
