// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux'; 

// const store = configureStore({
//   reducer: {
//     result: takeResult.reducer, // Connect the counter slice to the store
//   },
//   reducer: {
//     result: takeInput.reducer, // Connect the counter slice to the store
//   },
//     reducer: {
//         result: takeInput.reducer,
//     },
// });

const store = configureStore({
  reducer: {
    // 'result' adalah nama key yang akan dipanggil di useSelector
    result: userReducer, 
  },
});

// console.log(store)

export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice'; // Import file slice yang kamu buat tadi

// export const store = configureStore({
//   reducer: {
//     user: userReducer, // 'user' akan menjadi nama key di state global
//   },
// });