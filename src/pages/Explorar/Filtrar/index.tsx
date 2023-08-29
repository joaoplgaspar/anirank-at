import styles from './Filtrar.module.scss'
import genres from 'json/genders.json'
import InputFiltro from './InputFiltro'

interface Props {
    filtro: string[]
    setFiltro: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Filtrar( {filtro, setFiltro}: Props ) {
  return (
    <div className={styles.filtros}>
        <InputFiltro opcoes={genres} filtro={filtro} setFiltro={setFiltro}/>
    </div>
  )
}
