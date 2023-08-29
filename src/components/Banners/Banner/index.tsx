import Button from 'components/Button'
import { IBanners } from 'pages/Home'
import styles from './Banner.module.scss'

export default function Banner( {titulo, descricao, imagem}: IBanners ) {
  return (
    <div
        style={{backgroundImage: `url("assets/banner/${imagem}")`}}
        className={styles.banner}
    >
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <div className={styles.banner__btnContainer}>
          {/* <Button lista/>
          <Button avaliar/> */}
        </div>
    </div>
  )
}
