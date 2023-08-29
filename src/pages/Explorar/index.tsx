import AnimesContainer from 'components/AnimesContainer'
import Title from 'components/Title'
import { useEffect, useState } from 'react'
import getAnime from 'services/api'
import styles from './Explorar.module.scss'
import Filtrar from './Filtrar'
import backgroundSvg from 'assets/images/background.svg'
import MudarPagina from './MudarPagina'
import { IAnimes, IParametros } from 'types/anime'

export default function Explorar() {
    const [animes, setAnimes] = useState<IAnimes[] | []>([])
    const [pageInfo, setPageInfo] = useState({})
    const [filtro, setFiltro] = useState<string[] | []>([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        const request:IParametros = {
            setter: setAnimes,
            genre: filtro.length === 0 ? undefined : filtro,
            pageInfo: setPageInfo,
            pageAPI: pagina
        }
        getAnime(request)
    }, [filtro, pagina])

    return (
        <main className={styles.container} style={{ backgroundImage: `url(${backgroundSvg})` }}>
            <div className={styles.container__head}>
                <Title>
                    <h2>Explorar</h2>
                </Title>
                <Filtrar filtro={filtro} setFiltro={setFiltro} />
            </div>
            <AnimesContainer
                animes={animes}
                backgroundColor={'transparent'}
            />
            <MudarPagina 
                pageInfo={pageInfo}
                setPagina={setPagina}
                pagina={pagina}
            />
        </main>
    )
}
