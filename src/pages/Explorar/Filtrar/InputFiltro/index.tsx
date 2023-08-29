import Title from 'components/Title'
import styles from './InputFiltro.module.scss'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  opcoes: string[]
  filtro: string[]
  setFiltro: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InputFiltro({ opcoes, filtro, setFiltro }: Props) {
  const [navAtivo, setNavAtivo] = useState(false)

  function mudarFiltro(opcao: string) {
    if(opcao === 'Nenhum') {
      return setFiltro([])
    } 

    const filtroExiste = filtro.find(filtroS => filtroS === opcao)

    if(filtroExiste) {
      const novoFiltro = filtro.filter(filtroS => filtroExiste !== filtroS)
      return setFiltro(novoFiltro)
    }

    setFiltro([...filtro, opcao])
  }

  return (
    <div className={styles.filtro}>
      <div className={styles.title__genres}>
        <Title>
          <p>Generos: </p>
        </Title>
        <div className={styles.filtrosAtivos}>
          {filtro && filtro.map(ativado => <span key={ativado}>{ativado}</span>)}
        </div>
      </div>
      <div 
        className={styles.inputContainer} 
      >
        <input 
          type="text" 
          onFocus={() => setNavAtivo(true)} 
        />
        <AiFillCaretDown 
          size={16} 
          onClick={() => navAtivo ? setNavAtivo(false) : setNavAtivo(true)}
        />
      </div>
      <ul 
      className={classNames({
        [styles.opcoes]: true,
        [styles["opcoes--ativo"]]: navAtivo
      })}>
        {opcoes.map(opcao => (
          <li 
            key={opcao} 
            onClick={() => mudarFiltro(opcao)}
            className={filtro.find(filtroS => filtroS === opcao) ?  styles.filtroAtivado : ''}
          >
            {opcao}
          </li>
        ))}
      </ul>
    </div>
  )
}
