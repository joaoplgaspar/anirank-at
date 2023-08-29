import classNames from 'classnames'
import { useEffect, useState } from 'react'
import {MdOutlineAddCircleOutline, MdOutlineDownloadDone} from 'react-icons/md'
import { IAnimes, IStorage } from 'types/anime'
import styles from './BtnLista.module.scss'
import { pegarStorage, salvarLocalStorage } from 'common/localStorage'

interface Props {
  small?: boolean
  setMinhaLista?: React.Dispatch<React.SetStateAction<IAnimes[] | []>>
  minhaLista?: IAnimes[] | []
  anime: IAnimes
}

export default function BtnLista( {small, setMinhaLista, anime, minhaLista}: Props ) {

  const [btn, setBtn] = useState({
    botao: <MdOutlineDownloadDone />, 
    adicionar: true
  })

  useEffect( () => {
    const storage = pegarStorage('lista')
    const item = storage?.findIndex(animeVerificar => animeVerificar.id === anime.id ? animeVerificar : null)

    setBtn({
      botao: item !== -1 ?  <MdOutlineDownloadDone /> : <MdOutlineAddCircleOutline />, 
      adicionar: item !== -1 ? false : true
    })
  }, [minhaLista])

  function adicionarNaLista(animeClicado: IAnimes) {
    const anime:IStorage = {
      id: animeClicado.id
    }
    
    salvarLocalStorage('lista', anime)

    if(btn.adicionar) {
      const novo = {botao: <MdOutlineDownloadDone />, adicionar: false}
      setMinhaLista && setMinhaLista( minhaLista ? [...minhaLista, animeClicado] : [animeClicado])
      return setBtn(novo)
    }

    setMinhaLista && minhaLista && setMinhaLista(minhaLista?.filter(animes => animes.id !== animeClicado.id))
    return setBtn({botao: <MdOutlineAddCircleOutline/>, adicionar: true})
  }

  return (
    <div className={classNames({
      [styles.btnMinhaLista]: true,
      [styles.btnMinhaLista__small]: small
    })}>
      <button onClick={() => adicionarNaLista(anime)}>
        {btn.botao}
      </button>
      <span>Minha Lista</span>
    </div> 
  )
}
