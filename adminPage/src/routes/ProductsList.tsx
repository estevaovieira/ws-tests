import { useState, useEffect } from 'react';
import { makeStyles, styled } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import stylesComponents from '../styles/stylesComponents';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface ListItem {
  product: string;
  value: string;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

//general styles
const useStyles = makeStyles({
  titleProducts: stylesComponents.titlesBoddy,
});

const ProductsList = () => {
  const classes = useStyles();

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Create products in LocalStorage
  const [product, setProduct] = useState('');
  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

  const handleAdd = () => {
    if (product && value) {
      const newObj = { product, value };
      const newList = [...list, newObj];
      setList(newList);
      localStorage.setItem('productsList', JSON.stringify(newList));
      setProduct('');
      setValue('');
      setOpen(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  //Edit the product
  const handleEdit = (index: number) => {
    const newProduct = prompt('Enter the new product name:') || '';
    const newValue = prompt('Enter the new value:') || '';

    if (newProduct && newValue) {
      const newList = [...list];
      newList[index] = { product: newProduct, value: newValue };
      setList(newList);
      localStorage.setItem('productsList', JSON.stringify(newList));
    } else {
      alert('Please fill in all fields.');
    }
  };

  //Delete the product
  const handleDelete = (index: number) => {
    const newList = list.filter((item, idx) => idx !== index);
    setList(newList);
    localStorage.setItem('productsList', JSON.stringify(newList));
  };


  useEffect(() => {
    const storedList = localStorage.getItem('productsList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);


  return (
    <>
      <h2 className={classes.titleProducts}>List of products</h2>
      <Button variant="contained" onClick={handleOpen}>+ New</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Product
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <TextField id="standard-basic" label="Product" variant="standard" value={product} onChange={e => setProduct(e.target.value)} />
          </Typography>
          <Typography gutterBottom>
            <TextField id="standard-basic" label="Value" variant="standard" value={value} onChange={e => setValue(e.target.value)} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAdd}>To add</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell align="right">VALUE</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.product}
                </TableCell>
                <TableCell align="right">{item.value}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" onClick={() => handleEdit(index)}>EDIT</Button>
                  <Button variant="contained" style={{marginLeft: '5px'}} onClick={() => handleDelete(index)}><DeleteIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ProductsList
