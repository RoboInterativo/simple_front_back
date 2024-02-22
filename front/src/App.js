import React, { useState,useEffect }  from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//useEffect
function App () {



  //const auth=true;
  const [data,setData]= useState('');
  useEffect ( () =>  {
    axios.post('/api')
        .then(response => {
          console.log(response);
          setData(response.data)

        })
        .catch(error => {
           console.error('There was an error!', error);
        });

  },[])

  return (
    <div>
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customes</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Last</TableCell>
                <TableCell align="right">Salary</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              { data &&data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.salary}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
)}
export default App;
