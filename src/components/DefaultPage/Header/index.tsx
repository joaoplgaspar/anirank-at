import Link from 'components/Link'
import styles from './Header.module.scss'
import logo from 'assets/images/moon.png'
import { GoSearch } from 'react-icons/go'
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [scrollado, setScrollado] = useState(false)
  const [animePesquisado, setAnimePesquisado] = useState('')
  let navigate = useNavigate()

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      return setScrollado(true)
    } 
    return setScrollado(false)
  });

  function mudancaInput(pesquisa: string) {
    if(!pesquisa) {
      return setAnimePesquisado(pesquisa)
    }

    setAnimePesquisado(pesquisa)
  }

  function pesquisarAnime() {
    if(animePesquisado) {
      navigate(`/search/${animePesquisado}`)
      return setAnimePesquisado('')
    }
  }

  return (
    <header className={classNames({
      [styles.header]: true,
      [styles.scrolled]: scrollado
    })}>
      <div className={styles.header__titulo}>
        <img src={logo} alt="Logo AniRank, lua de sailormoon" />
        <Link to='/'>
          <h1>AniRank</h1>
        </Link>
      </div>
      <nav className={styles.header__nav}>
        <Link to='/explorar'>Explorar</Link>
        <Link to='/minha-lista'>Minha Lista</Link>
        <Link to='/meu-rank'>Meu Rank</Link>
        <div 
          className={styles.header__nav__input}
        >
          <input 
            placeholder='Procure por um anime'
            type="text"
            value={animePesquisado}
            onChange={(event) => mudancaInput(event.target.value)}
            onKeyDown={(event) => event.code === 'Enter' && pesquisarAnime()}
          />
          <GoSearch className={styles.searchIcon} onClick={() => pesquisarAnime()}/>
        </div>
      </nav>
    </header>
  )
}
