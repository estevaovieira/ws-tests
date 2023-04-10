import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  loadingPage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const CompanyProfile = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <Box sx={{ display: 'flex' }} className={classes.loadingPage}>
      <CircularProgress />
    </Box>    
  )
};

export default CompanyProfile