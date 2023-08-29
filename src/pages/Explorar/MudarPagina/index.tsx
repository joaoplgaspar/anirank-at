import classNames from 'classnames'
import React from 'react'
import styles from './MudarPagina.module.scss'

interface Props {
    pageInfo: any
    pagina: number
    setPagina: React.Dispatch<React.SetStateAction<number>>
}

export default function MudarPagina({ pageInfo, pagina, setPagina }: Props) {
    const paginas = [
        pagina !== 1 && pagina - 1,
        pagina,
        pageInfo.hasNextPage && pagina+1,
        pageInfo.lastPage
    ]

    return (
        <div className={styles.pagesContainer}>
            <ul>
                {paginas.map(paginaS => (
                    paginaS && <li 
                        key={paginaS} 
                        className={classNames({
                            [styles.ativado]: paginaS === pagina
                        })}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setPagina(paginaS)
                    }}>
                        {paginaS}
                    </li>))
                }
            </ul>
        </div>
    )
}
