import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul className={styles.items}>
        <Link to={'/'}><li>Products</li></Link>
        <Link to={'company-profile'}><li>Company profile</li></Link>
        <button className={styles.logout} onClick={() => console.log("sad")}>Logout</button>
      </ul>
    </>
  )
}

export default Navbar