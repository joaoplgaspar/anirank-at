import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from './Seta.module.scss'

interface Props {
    lado: 'r' | 'l'
    setPosicao: React.Dispatch<React.SetStateAction<number>>
    posicao: number
    numeroDeItens?: number
    valor?: number
    nImagesInicial?: number
}

export default function Seta({ lado, posicao, setPosicao, numeroDeItens, valor = 100, nImagesInicial = 1 }: Props) {
    const [imagemAtual, setImagemAtual] = useState(nImagesInicial)
    useEffect( () => {
        setImagemAtual(nImagesInicial)
    }, [nImagesInicial])

    function mudarPosicao(valor: number) {
        if(imagemAtual === numeroDeItens) {
            setImagemAtual(nImagesInicial)
            return setPosicao(0)
        }
        setImagemAtual(imagemAtual+1)
        setPosicao(posicao + valor)
    }

    return (
        lado === 'r' ? (
            <MdOutlineArrowForwardIos
                className={classNames({
                    [styles.seta]: true,
                    [styles.seta__r]: true,
                })}
                onClick={() => mudarPosicao(-valor)}
            />
        ) : (
            <MdOutlineArrowBackIos
                className={classNames({
                    [styles.seta]: true,
                    [styles.seta__l]: true,
                    [styles.seta__disabled]: posicao === 0
                })}
                onClick={() => mudarPosicao(valor)}
            />
        )
    )
}
