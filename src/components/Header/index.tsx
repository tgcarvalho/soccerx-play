import styles from './styles.module.scss';

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <h2 className={styles.logo}>SOCCERX</h2>
    </header>
  )
}