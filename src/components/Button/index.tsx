import { useState } from "react"
import { IAnimes } from "types/anime"
import BtnAvaliar from "./BtnAvaliar"
import BtnLista from "./BtnLista"

interface Props {
  lista?: boolean
  small?: boolean
  avaliar?: boolean
  setMinhaLista?: React.Dispatch<React.SetStateAction<IAnimes[] | []>>
  minhaLista?: IAnimes[] | []
  anime: IAnimes
}

export default function Button( { lista, small, avaliar, setMinhaLista, anime, minhaLista }: Props ) {
  return (
    lista ? (
      <BtnLista 
        small={small} 
        setMinhaLista={setMinhaLista} 
        minhaLista={minhaLista} 
        anime={anime}
      />
    ) : (
      <BtnAvaliar 
        small={small} 
        anime={anime}
      />
    )
  )
}
