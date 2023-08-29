const querySimp = `
query ($pageAPI: Int, $id: Int, $perPage: Int, $search: String, $ordenar: [MediaSort], $genre: [String], $genre_not: [String], $id_in: [Int]) {
  Page (page: $pageAPI, perPage: $perPage) {
    pageInfo {
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (sort: $ordenar, id: $id, search: $search, type: ANIME, genre_in: $genre, genre_not_in: $genre_not, id_in: $id_in) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      bannerImage
      genres
      description
      averageScore
      popularity
    }
  }
}
`;

const queryTotal = `
query ($pageAPI: Int, $id: Int, $perPage: Int, $search: String, $ordenar: [MediaSort]) {
  Page (page: $pageAPI, perPage: $perPage) {
    pageInfo {
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (sort: $ordenar, id: $id, search: $search, type: ANIME) {
      id
      popularity
      title {
        romaji
        english
        native
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      coverImage {
        large
      }
      bannerImage
      format
      type
      status
      episodes
      chapters
      volumes
      season
      description
      averageScore
      meanScore
      genres
      synonyms
    }
  }
}
`;

export {querySimp, queryTotal}