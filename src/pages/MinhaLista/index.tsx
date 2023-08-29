import { pegarStorage } from 'common/localStorage'
import AnimesContainer from 'components/AnimesContainer'
import React, { useEffect, useState } from 'react'
import getAnime from 'services/api'
import { IAnimes } from 'types/anime'
import styles from './MinhaLista.module.scss'
import backgroundSvg from 'assets/images/background.svg'
import Title from 'components/Title'

export default function MinhaLista() {
  const [minhaLista, setMinhaLista] = useState<IAnimes[]>([])
  const [localStorage, setLocalStorage] = useState(pegarStorage('lista'))
  let listaIdsLista:number[] = []

  localStorage.forEach(animeId => listaIdsLista.push(animeId.id))
  useEffect(() => {
    getAnime({setter: setMinhaLista, id_in: listaIdsLista})
  }, [])

  return (
    <main className={styles.minhaLista} style={{backgroundImage: `url(${backgroundSvg})`}}>
      <Title> 
        <h2>Minha Lista</h2>
      </Title>
      <AnimesContainer animes={minhaLista} backgroundColor='transparent' />
    </main>
  )
}
