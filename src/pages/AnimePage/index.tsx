import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getAnime from 'services/api'
import { IAnimes } from 'types/anime'
import Anime from './Anime'
import styles from './AnimePage.module.scss'
import NaoEncontrada from 'pages/NaoEncontrada'

export default function AnimePage() {
  const parametro = useParams()
  const [anime, setAnime] = useState<IAnimes[] | []>([])

  useEffect( () => {
    getAnime({setter: setAnime, id: parametro.id, queryT: true})
    
  }, [parametro.id])

  return (
    anime[0] ? 
      <Anime 
        {...anime[0]}
      />
    : <NaoEncontrada />
  )
}