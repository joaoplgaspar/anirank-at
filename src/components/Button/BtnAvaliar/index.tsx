import styles from './BtnAvaliar.module.scss'
import { MdOutlineGrade, MdGrade } from 'react-icons/md'
import classNames from 'classnames'
import { useState } from 'react'
import { IAnimes } from 'types/anime'
import PopupRank from 'components/PopupRank'

interface Props {
  small?: boolean
  anime?: IAnimes
}

export default function BtnAvaliar( {small, anime}: Props ) {
  const [btn, setBtn] = useState({botao: <MdOutlineGrade className={styles.icon}/>, adicionar: true})
  const [popupAberto, setPopupAberto] = useState(false)
 
  function avaliar() {
    if(btn.adicionar) {
      const novo = {botao: <MdGrade className={styles.icon}/>, adicionar: false}
      setPopupAberto(true)
      return setBtn(novo)
    }
    
    return setBtn({botao: <MdOutlineGrade className={styles.icon}/>, adicionar: true})
  }

  return (
    <>
    <div className={classNames({
        [styles.btnAvaliar]: true,
        [styles.btnAvaliar__small]: small
      })}>
      <button onClick={() => {
        avaliar()
      }}>
        <span>Avaliar</span>
        {btn.botao}
      </button>
    </div>

    {popupAberto && anime &&
      <PopupRank 
        setPopupAberto={setPopupAberto}
        title={anime?.title.romaji}
        coverImage={anime?.coverImage.large}
        averageScore={anime?.averageScore}
      />}
    </>
  )
}
