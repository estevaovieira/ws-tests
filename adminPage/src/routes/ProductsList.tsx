import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import styles from '../styles/titles.module.css'

function createData(
  name: string,
  calories: number,
  fat: number
) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, ),
  createData('Ice cream sandwich', 237, 9.0, ),
  createData('Eclair', 262, 16.0, ),
  createData('Cupcake', 305, 3.7, ),
  createData('Gingerbread', 356, 16.0, ),
];

const ProductsList = () => {
  return (
    <>
      <h2 className={styles.listProducts}>List of products</h2>
      <Button variant="contained">+ New</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUTO</TableCell>
              <TableCell align="right">VALOR</TableCell>
              <TableCell align="right">AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ProductsList