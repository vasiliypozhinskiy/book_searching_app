import axios from "axios";

const openLibraryApi = axios.create({baseURL: "https://openlibrary.org/"})

export const booksAPI = {
    getBooks(query: string, page = 1, limit=10) {
        return openLibraryApi.get("search.json", {
            params: {
                q: query,
                page,
                limit
            }
        }).then(response => response.data)
    },
}
