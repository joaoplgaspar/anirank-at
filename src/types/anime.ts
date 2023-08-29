export interface IAnimes {
    bannerImage: string
    coverImage: {large: string}
    description: string
    genres: string[]
    id: number
    title: {romaji: string, english: string}
    popularity: number
    averageScore: number

    startDate?: {year: number, month: number, day: number}
    endDate?: {year: number, month: number, day: number}
    meanScore?: number
    season?: string
    status?: string
    type?: string
}

export interface IParametros {
    setter?: React.Dispatch<React.SetStateAction<[] | IAnimes[]>>
    search?: string 
    id?: number | string
    genre?: string[]
    pageInfo?: React.Dispatch<React.SetStateAction<{}>>
    pageAPI?: number
    queryT?: boolean
    id_in?: number[]
    ordenar?: string
}

export interface IStorage {
    id: number,
    nota?: number,
    descricao?: string
}