type initialStateType = {
    books: Array<object> | null,
    booksCount: number
}

const initialState: initialStateType = {
    books: null,
    booksCount: 0
}

const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default booksReducer
