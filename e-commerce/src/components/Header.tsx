import styles from '../styles/Header.module.css'

interface propsType {
  title: string
}

export function Header({ title } : propsType) {

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  )
};