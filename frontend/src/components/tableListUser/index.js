import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import axios from 'axios'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const TableUserRegister = () =>{

    const urlApi = "http://localhost:3002/users"

    const [resultUsers,setResultUsers] = useState([])
    
    useEffect(()=>{
        axios.get(urlApi)
            .then((result)=>{
                setResultUsers(result.data);
            })
    },[])

    return(
            <>
                <TableContainer component={Paper} sx={{ overflow: "auto", position:"relative", bottom:"100px"}} >
                <Table  aria-label="customized table" columns={{ xs: 4, sm: 8, md: 12 }}>
                    <TableHead>
                    <TableRow columns={{ xs: 4, sm: 1, md: 1 }}> 
                        <StyledTableCell align="right">ID</StyledTableCell>
                        <StyledTableCell >NOME</StyledTableCell>
                        <StyledTableCell align="right">USERNAME</StyledTableCell>
                        <StyledTableCell align="right">EMAIL</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>     
                        {resultUsers?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.username}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                           
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </>
    )
}

export default TableUserRegister;