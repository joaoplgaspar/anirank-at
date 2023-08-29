import Card from 'components/Card'
import { IAnimes } from 'types/anime'
import styles from './AnimesContainer.module.scss'

interface Props {
    animes: IAnimes[] | []
    backgroundColor: string
}

export default function AnimesContainer({ animes, backgroundColor }: Props) {

  return (
    <section 
        className={styles.container}
        style={{background: backgroundColor}}
    >
        {animes.map( anime => <Card anime={anime} key={anime.id}/>)}
    </section>
  )
}
