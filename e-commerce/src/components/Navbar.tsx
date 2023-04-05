import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export function Navbar() {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <ul className={styles.items}>
        <Link href='/healty-care'><li>- Healty & Care</li></Link>
        <Link href='/food'><li>- Food</li></Link>
        <Link href='/pet'><li>- Pet</li></Link>
        <Link href='/hardware'><li>- Hardware</li></Link>
        <Link href='/flowers'><li>- Flowers</li></Link>
        <Link href='/gardens'><li>- Garden's</li></Link>
        <Link href='/beauty-hair'><li>- Beauty & Hair</li></Link>
      </ul>
    </div>
  )
};