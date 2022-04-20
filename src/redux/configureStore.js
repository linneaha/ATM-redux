import { configureStore } from "@reduxjs/toolkit"
import atmSlice from "./atmSlice"

const store = configureStore({
    reducer: {
        atm: atmSlice
    }
})

export default store;