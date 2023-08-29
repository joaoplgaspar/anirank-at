import Banners from 'components/Banners'
import Carousel from 'components/Carousel'
import styles from './Home.module.scss'
import imagesBanners from 'json/banners.json'
import Title from 'components/Title'
import Row from 'components/Row'
import { useEffect, useState } from 'react'
import getAnime from 'services/api'
import { IAnimes } from 'types/anime'
import { pegarStorage } from 'common/localStorage'
import AnimesContainer from 'components/AnimesContainer'
import PopupRank from 'components/PopupRank'

export type IBanners = typeof imagesBanners[0]

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth)

  const [animesPopulares, setAnimePopulares] = useState<IAnimes[] | []>([])
  const [minhaLista, setMinhaLista] = useState<IAnimes[] | [] >([])
  const [animesExplorar, setAnimesExplorar] = useState<IAnimes[] | []>([])

  const [localStorage, setLocalStorage] = useState(pegarStorage('lista'))
  const listaIdsLista:number[] = []

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  localStorage.forEach(animeId => listaIdsLista.push(animeId.id))
  useEffect(() => {
    getAnime({setter: setMinhaLista, id_in: listaIdsLista})
  }, [])

  useEffect(() => {
    getAnime({setter: setAnimePopulares, ordenar: 'TRENDING_DESC'})
    getAnime({setter: setAnimesExplorar})
  }, [])

  return (
    <main>
      <Carousel nImages={imagesBanners.length} valor={width}>
        <Banners imageBanners={imagesBanners} />
      </Carousel>
      <div className={styles.mainContent}>
        <Title>
          <h3>Animes Trending</h3>
        </Title>
        <Row
          animes={animesPopulares}
          minhaLista={minhaLista}
          setMinhaLista={setMinhaLista}
        />

        <Title>
          <h3>Minha Lista</h3>
        </Title>
        <Row
          animes={minhaLista}
          minhaLista={minhaLista}
          setMinhaLista={setMinhaLista}
          lista
        />

        <Title>
          <h3>Outros Animes</h3>
        </Title>
        <AnimesContainer animes={animesExplorar} backgroundColor='#000'/>
      </div>
    </main>
  )
}
