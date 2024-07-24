import styled from "styled-components";
import {
  Table as MuiTable,
  TableHead as MuiTableHead,
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from "@mui/material";
export const Container = styled.div`
  border: 1px solid red;
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
  
`;

export const TableHead = styled(MuiTableHead)`
  background-color: #f5f5f5;
  
`;

export const TableRow = styled(MuiTableRow)`

  &:nth-of-type(odd) {
    background-color: #f9f9f9;
    
  }
`;

export const TableCell = styled(MuiTableCell)`
  padding: 8px;
  text-align: left;

`;

export const BookTable = styled.div`
  max-width: 80% !important;
  overflow-x: auto;
  border: 1px solid black;
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
`;
export { MuiTableBody as TableBody };
export const SerachInput = styled.input`
  padding: 14px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 13.6vw;
  width: 15%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 1s ease-in, border-color 1s ease-in, box-shadow 1s ease-in;
  &:focus {
    border-color: #007bff;
    outline: none;
    width: 40%;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  }
`;
