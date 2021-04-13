import axios from "axios";

const openLibraryApi = axios.create({baseURL: "https://openlibrary.org/developers/api"})

export const getBooks = (query : string, page=1) => openLibraryApi.get("/search.json", {
    params: {
        q: query,
        page
    }
})
