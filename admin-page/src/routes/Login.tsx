import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const check = () => {
    if (user && password) {
      navigate('/')
    } return

  }

  return (
    <div className={styles.divStyle}>
      <img src="../wslogo.png" className={styles.image} />
      <TextField
        id="outlined-error-helper-text"
        label="User"
        defaultValue=""
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ width: '350px', marginBottom: '20px', marginTop: '110px' }}
      />
      <TextField
        id="outlined-error-helper-text"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '350px' }}
      />
      <FormControlLabel control={<Checkbox />} label="Remember me" style={{ marginRight: '210px', marginTop: '10px' }} />
      <Button
        variant="contained"
        onClick={check}
        style={{ display: 'block', width: '250px', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px' }}
      >
        Login
      </Button>
    </div>
  )
}

export default Login