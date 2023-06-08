// // Hut Data
// import { firstName, lastName, type, description } from '../helper'
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const APIKey = 'oBMRQylpLI6uL1Nzmh1190LXyFNXSnKmhoxo3PJhEkG6V400lABqnFVs';

import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     hutList: JSON.parse(localStorage.getItem('hutList')) || [],
//     isLoading: true,
//     isError: false,
//     errorMessage: null,
// }

const initialState = {
    loggedIn: false,
}


// export const getHuts = createAsyncThunk(
//     'getHuts',
//     async() => {
//         const res = await fetch(`https://api.pexels.com/v1/search?query=hut%20house&per_page=30`, {
//             headers: {
//                 Accept: "application/json",
//                 Authorization: APIKey,     //use the apikey you have generated
//             }
//         })
        
//         if(!res.ok) {
//          throw {
//             message: 'Failed to load data!',
//             statusText: res.statusText,
//             status: res.status
//          }       
//          return res.status
//         }

//         let data = await res.json();  
//         let images = data.photos //convert the response to json 

//         const random = array => array[Math.floor(Math.random() * array.length)];

//         let database = [];
//         images.forEach(img => {
//             database.push(
//                 { 
//                     id: img.id,
//                     title: `${random(firstName)} ${random(lastName)}`,
//                     src: img.src.medium,
//                     description: random(description),
//                     category: random(type) ,
//                     price: Math.floor(Math.random() * 18) + 42,
//                     hostID: Math.floor(Math.random() * 6) + 1
//                 } 
//             )
//         });

//         return database
//     }
// )

const userSlice = createSlice({
    name: 'loggedIn',
    initialState
})

// const hutSlice = createSlice({
//     name: 'hutList',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(
//             getHuts.pending,
//             (state, action) => {
//                 state.isLoading = true;
//             }
//         )
//         builder.addCase(
//             getHuts.fulfilled,
//             (state, action ) => {
//                 if(state.hutList.length <= 0){
//                     state.isLoading = false;
//                     state.hutList = action.payload
//                     localStorage.setItem('hutList', JSON.stringify(state.hutList))
//                 } else {
//                     state.isLoading = false;
//                 }
//             }
//         )
//         builder.addCase(
//             getHuts.rejected,
//             (state, action) => {
//                 state.isError = true;
//                 state.errorMessage = action.type
//             }
//         )
//     }
// })

// export default hutSlice.reducer
export default userSlice.reducer