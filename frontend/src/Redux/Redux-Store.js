import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './reducers/ToDo-reducer'


const rootReducer = () => ({
    todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


window.store = store

export default store