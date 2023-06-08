import { configureStore } from "@reduxjs/toolkit";

// import hutReducer from './hutSlice'
import userReducer from './hutSlice'

// export const store = configureStore({
//     reducer: {
//         hutData: hutReducer
//     }
// })

export const store = configureStore({
    reducer: {
        loggedIn: userReducer
    }
})