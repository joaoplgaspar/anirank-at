import Title from 'components/Title'
import styles from './Pesquisa.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getAnime from 'services/api'
import AnimesContainer from 'components/AnimesContainer'
import background from 'assets/images/background.svg'
import { IAnimes } from 'types/anime'

export default function Pesquisa() {
    const animeProcurado = useParams()
    const [animesAchados, setAnimesAchados] = useState<IAnimes[] | []>([])
    
    useEffect(() => {

        getAnime({setter: setAnimesAchados, search: animeProcurado.nomeanime})
    }, [animeProcurado])

    return (
        <main className={styles.searchResult} style={{backgroundImage: `url(${background})`}}>
            <Title>
                <h2>Resultados para "{animeProcurado.nomeanime}":</h2>
            </Title>
            <AnimesContainer 
                animes={animesAchados}
                backgroundColor='transparent'
            />
        </main>
    )
}
