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

function createData(team, score, movement) {
  return { team, score, movement };
}

const rows = [
  createData('Dru & Sarah', 60, 0),
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
                <TableCell align="right">Total score</TableCell>
                <TableCell align="right">Movement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.team}>
                  <TableCell component="th" scope="row">
                    {row.team}
                  </TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                  <TableCell align="right">{row.movement}</TableCell>
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
