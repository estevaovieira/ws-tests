import styles from '../styles/HeaderTitle.module.css'
import { useLocation } from 'react-router-dom'

interface MyObject {
  "/": string;
  "/company-profile": string;
  [key: string]: string;
};

const HeaderTitle = () => {

  const {pathname} = useLocation();

  const headers: MyObject = {
    "/": "My products admin",
    "/company-profile": "Company profile"
  }

  return (
    <h1 className={styles.title}>{headers[pathname]}</h1>
  )
};

export default HeaderTitle