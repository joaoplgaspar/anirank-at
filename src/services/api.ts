import axios from "axios";
import { IParametros } from "types/anime";
import { querySimp, queryTotal } from "./querys";

export default async function getAnime({setter, search, id, genre, pageInfo, pageAPI = 1, queryT = false, id_in, ordenar = 'POPULARITY_DESC'}: IParametros) {

    const query = queryT ? queryTotal : querySimp

    let variables = {
        'search': search,
        'id': id,
        'id_in': id_in,
        'genre': genre,
        'perPage': 30,
        'pageAPI': pageAPI,
        'ordenar': ordenar,
        'genre_not': ['Hentai']
    }

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    const result = await axios.post("https://graphql.anilist.co", {
        query,
        variables,
        headers
    })
    .catch((err) => console.log(err.message));

    if(pageInfo) {
      pageInfo (result?.data.data.Page.pageInfo)
    }

    setter && setter(result?.data.data.Page.media) 

    return result?.data.data.Page.media
}    