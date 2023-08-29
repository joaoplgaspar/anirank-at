import styles from './Footer.module.scss'
import logo from 'assets/images/moon.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={logo} alt="logo Anirank" />
        <p>Desenvolvido por João Pedro Lima Gaspar para fins didáticos.</p>
        <p>API fornecida por ANILIST</p>
    </footer>
  )
}
