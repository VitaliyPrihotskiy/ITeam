
export const GET_CATS_URL = (limit: number, page: number): string =>
`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&has_breeds=true&order=ASC`

export const DEFAULT_PAGE_SIZE = 10;