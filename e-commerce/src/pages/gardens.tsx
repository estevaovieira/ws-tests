import Head from 'next/head';
import styles from '../styles/global.module.css'
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

export default function Gardens() {
  const classes = useStyles()
  const title = "Garden's";

  return (
    <>
      <Head>
          <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <Box sx={{ display: 'flex' }} className={classes.loadingPage}>
          <CircularProgress />
        </Box>
      </div>
    </>
  )
}