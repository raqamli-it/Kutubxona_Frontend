import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {
  Table as MuiTable,
  TableHead as MuiTableHead,
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from "@mui/material";

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: #311E5C;
`;

export const BooksText = styled.h1`
  display: inline-block;
`;

export const Book = styled.h1`
  margin-left: 20%;
`;
export const Wrapper =styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: start;

`
export const Table = styled(MuiTable)`
  width: 80% !important;


  @media (max-width: 950px) {
    width: 100% !important;
    margin-left: 0;
  }

`;

export const TableHead = styled(MuiTableHead)`
  /* background-color: #495057 ; */
`;
export const FilterButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Modal =styled.button`
  
`
export const TableRow = styled(MuiTableRow)`
  height: 70px;
  width: 100%;
  background-color: white;
  &:nth-of-type(even) {
    /* background-color: #adb5bd; */
    background-color: #2C3E61F2;
    &>td{
      color: white !important;
    }
  }
`;

export const TableCell = styled(MuiTableCell)`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  border: none !important;
  /* height: 150px; */
`;

export const BookTable = styled.div`
  max-width: 80% !important;
  overflow-x: auto;
  @media (max-width: 545px) {
    max-width: 100% !important;
  }
`;

export const ExelButton = styled.button`
  float: right;
  margin-right: 1%;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 545px) {
    float: none;
    display: block;
    margin: 10px auto;
  }
`;

export { MuiTableBody as TableBody };

export const SerachInput = styled.input`
  padding: 14px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 16px;
  width: 16.5%;
  height: 40px;
  margin-left: 65px;
  /* margin-top: 8px; */
  background-color:white;
  color: black;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 0.2s ease-in, border-color 0.2s ease-in, box-shadow 0.2s ease-in;
  &:focus {
    /* border-color: #007bff; */
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  }
  &::placeholder{
    color: black;
  }

  @media (max-width: 545px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background-color: #311E5C;
  position: sticky;
  top: 21.5%;
  /* margin-left: 6.1vw; */
  @media (max-width: 545px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-height: 730px) {
    top: 28%;
  }
  @media (max-height:680px) {
    top: 30%;
  }
`;

export const SearchIcon = styled(FaSearch)`
  /* margin-left: -72.5%; */
  background-color: white;
  padding: 5px;
  height: 40px;
  color: #ccc;
  z-index: 999;
  border: none;
  font-size: 2.2em;
  color: black;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  /* @media (max-width: 948px){
    margin-left: -10%;
  }
  @media (max-width: 1019px){
    display: none;
  }
  @media (max-width: 1300px){
    margin-left: -67%;
  } */

`;
export const Searcht = styled.div`
  width: 90%;  
  align-items: center;
  height: 50px;
  display: flex;
  
`
export const PaginationContainer = styled.div`
  display: flex;
  width: 20%;
  float: right;
  justify-content: right;
  margin-top: 20px;
  margin-right: 30px;
  /* padding: 25px 0; */
  @media (max-width: 545px) {
    justify-content: center;
    margin-right: 0;
  }
`;

export const PaginationButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  border: 1px solid #007bff;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
