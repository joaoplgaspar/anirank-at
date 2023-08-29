import Card from 'components/Card'
import Carousel from 'components/Carousel'
import { useEffect, useState } from 'react'
import { IAnimes } from 'types/anime'
import styles from './Row.module.scss'

interface Props {
  animes: IAnimes[]
  setMinhaLista?: React.Dispatch<React.SetStateAction<IAnimes[] | []>>
  minhaLista?: IAnimes[] | []
  lista?: boolean
}

export default function Row({ animes, setMinhaLista, minhaLista, lista }: Props) {
  const [widthRow, setWidthRow] = useState(0)

  useEffect(() => {
    const width = document.getElementById('width')!.clientWidth && document.getElementById('width')!.clientWidth
    setWidthRow((width / 220) - 1)
  }, []);

  window.addEventListener('resize', () => {
    const width = document.getElementById('width')!.clientWidth && document.getElementById('width')!.clientWidth
    setWidthRow((width / 220) - 1)
  })

  return (

    <Carousel nImages={animes.length} valor={220} nImagesInicial={Math.round(widthRow)}>
      <section className={styles.row} id="width">
        {animes.length ? (
          animes.map(anime =>
            <Card
              key={anime.id}
              anime={anime}
              setMinhaLista={setMinhaLista}
              minhaLista={minhaLista}
            />
          )) : (
          <div className={styles.row__empty}>
            {lista ? 'Parece que você ainda não adicionou nenhum anime na sua lista!' : 'Loading'}
          </div>
        )}
      </section>
    </Carousel>
  )
}
