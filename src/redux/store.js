import { configureStore } from "@reduxjs/toolkit";

import hutReducer from './hutSlice'

export const store = configureStore({
    reducer: {
        hutData: hutReducer
    }
})