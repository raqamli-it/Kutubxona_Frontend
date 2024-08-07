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
`;

export const BooksText = styled.h1`
  display: inline-block;
`;

export const Book = styled.h1`
  margin-left: 20%;
`;

export const Table = styled(MuiTable)`
  width: 80% !important;
  margin-left: 20%;

  @media (max-width: 545px) {
    width: 100% !important;
    margin-left: 0;
  }
`;

export const TableHead = styled(MuiTableHead)`
  background-color: #f5f5f5;
`;

export const TableRow = styled(MuiTableRow)`
  height: 70px;
  &:nth-of-type(odd) {
    background-color: rgba(253,253,253);
  
  }
`;

export const TableCell = styled(MuiTableCell)`
  padding: 8px;
  text-align: left;
  border-color: white !important;
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
  margin-top: 4px;
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
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 17.5%;
  background-color: transparent;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 0.2s ease-in, border-color 0.2s ease-in, box-shadow 0.2s ease-in;
  &:focus {
    border-color: #fff;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  }
  &::placeholder{
    color: white;
  }
  @media (max-width: 545px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchContainer = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 0 0 0 60px;
  background-color: #1c2541;
  justify-content: space-between;
  @media (max-width: 545px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  margin-left: -74%;
  color: #ccc;
  margin-top: 1%;
  font-size: 1.5em;
  @media (max-width: 948px){
    margin-left: -10%;
  }
  @media (max-width: 645px){
    display: none;
  }


`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
  margin-right: 20px;

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
