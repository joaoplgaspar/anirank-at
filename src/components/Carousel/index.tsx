import { ReactElement } from 'react'
import styles from './Carousel.module.scss'
import { useState } from 'react'
import Seta from './Seta'

interface Props {
    children: ReactElement | null
    nImages: number
    valor?: number
    nImagesInicial?: number
}

export default function Carousel( { children, nImages, valor, nImagesInicial }: Props ) {
  const [posicao, setPosicao] = useState(0)

  return (
    nImages === 0 ? <div className={styles.carousel}> {children} </div>
    :<>
      <div 
        className={styles.carousel} 
        style={{marginLeft: `${posicao}px`}}
      >
        <Seta 
          lado='l' 
          setPosicao={setPosicao} 
          posicao={posicao}
          valor={valor}
          nImagesInicial={nImagesInicial}
        />  
        {children}
        <Seta 
          lado='r' 
          setPosicao={setPosicao} 
          posicao={posicao} 
          numeroDeItens={nImages}
          valor={valor}
          nImagesInicial={nImagesInicial}
        />
      </div>
    </>
  )
}
