import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import uiSlice from './uiSlice'

const store = configureStore({
    reducer: { cart: cartReducer, ui: uiSlice }
})

export default store