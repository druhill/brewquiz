import React from 'react';
import './App.css';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(team, week1, score) {
  return { team, week1, score };
}

const rows = [
  createData('Nat & Jai', 65, 10),
  createData('Olivia & Toby', 61, 6),
  createData('Dru & Sarah', 60, 5),
  createData('Sarah & Mike', 60, 5),
  createData('Jenni & Dan', 57, 2),
  createData('Guy & Siân', 53, -2),
  createData('Charlie & Lynn', 52, -3),
  createData('Amy & Will', 50, -5),
  createData('Elliott', 50, -5),
  createData('Deb & Warren', 48, -7),
  createData('Elizabeth', 48, -7),

];

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h3" gutterBottom>
          Brew Quiz
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell align="right">Week 1</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.team}>
                  <TableCell component="th" scope="row">
                    {row.team}
                  </TableCell>
                  <TableCell align="right">{row.week1}</TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default App;
