import Title from 'components/Title'
import { IAnimes } from 'types/anime'
import styles from './Anime.module.scss'
import backgroundSvg from 'assets/images/background.svg'
import { formatarTexto } from 'common/animes'

export default function Anime({ title, bannerImage, coverImage, description, genres, id, averageScore, endDate, popularity, season, startDate, status, type }: IAnimes) {
  return (
    <main className={styles.anime} style={{ backgroundImage: `url(${backgroundSvg})` }}>
      <div className={styles.anime__inner}>
        <div className={styles.anime__inner__header}>
          <div className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }} />
          <div className={styles.anime__inner__header__content}>
            <img src={coverImage.large} alt={`Poster do anime ${title.romaji}`} />
            <div className={styles.anime__inner__header__content__info}>
              <Title>
                <h2>{title.romaji}</h2>
              </Title>
              <ul>
                {genres.map(genero => <li key={genero}>{genero}</li>)}
              </ul>
              <p>{formatarTexto(description, description.length)}</p>
            </div>
          </div>
        </div>

        <div className={styles.anime__inner__info}>
          <ul>
            <li>ID: {id}</li>
            <li>Nota média: {averageScore}</li>
            <li>Popularidade: {popularity}</li>
            <li>Temporada: {season}</li>
          </ul>
          <table>
            <tr>
              <td>startDate</td>
              <td>{`${startDate?.day}/${startDate?.month}/${startDate?.year}`}</td>
            </tr>
            <tr>
              <td>endDate</td>
              <td>{`${endDate?.day}/${endDate?.month}/${endDate?.year}`}</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  )
}
