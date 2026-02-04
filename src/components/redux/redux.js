import { createSlice } from '@reduxjs/toolkit'

// const takeResult = createSlice({
//     name: 'output',
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         incremented: state => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes
//             state.value += 1
//         },
//         decremented: state => {
//             state.value -= 1
//         }
//     },
//     input: {
//         input: state => {
//             state.value += 1
//         },
//         decremented: state => {
//             state.value -= 1
//         }
//     }
// })


// const initialValue = {
//     "fullName": "",
//     "age": 0,
//     "gender": "",
//     "smoke": "",
//     "cigaretteBrands": []
// }

// const takeInput = createSlice({
//     name: 'user',
//     initialValue,
//     reducers: {
//         reset: () => initialValue
//     }
// })
// export const { reset } = takeInput.actions

// export default takeInput.reducer

// export default takeResult

// export const { incremented, decremented } = takeResult.actions


// decremented: state => {
//             state.value -= 1
//         }




// import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const takeInput = createSlice({
  name: 'user',
  initialState, 
  reducers: {
    updateData: (state, action) => {
        state.push(action.payload);
    },
    reset: () => initialState
  }
});

export const { updateData, reset } = takeInput.actions;
export default takeInput.reducer;



