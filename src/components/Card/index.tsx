import { formatarTexto } from 'common/animes'
import Button from 'components/Button'
import PopupRank from 'components/PopupRank'
import Title from 'components/Title'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { IAnimes } from 'types/anime'
import styles from './Card.module.scss'

interface Props {
  anime: IAnimes
  setMinhaLista?: React.Dispatch<React.SetStateAction<IAnimes[] | []>>
  minhaLista?: IAnimes[] | []
}

export default function Card({ anime, setMinhaLista, minhaLista }: Props) {
  const { coverImage, title, description } = anime

  return (
    <div
      className={styles.card}
    >
      <div className={styles.card__imgContainer}>
        <img src={coverImage.large} alt="Imagem do card" />
      </div>
      <div className={styles.card__inner}>
        <div>
          <Title>
            <Link to={`/anime/${anime.id}`} className={styles.link}>
              <span>{title.romaji}</span>
            </Link>
          </Title>
          <p style={{ margin: 0 }}>
            {description && formatarTexto(description, 170)}
          </p>
        </div>
        <div className={styles.card__btnContainer}>
          <Button lista small setMinhaLista={setMinhaLista} anime={anime} minhaLista={minhaLista} />
          <Button avaliar small anime={anime}/>
        </div>
      </div>
    </div>
  )
}
