import Title from 'components/Title'
import styles from './NaoEncontrada.module.scss'
import image from './gatoPaginaNaoEncontrada.png'

export default function NaoEncontrada() {
  return (
    <main className={styles.container}>
      <Title>
        <h2>Página não encontrada!</h2>
      </Title>
      <img src={image} alt="Imagem gato erro 404, página não encontrada!" />
    </main>
  )
}
