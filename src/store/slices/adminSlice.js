import { createSlice } from '@reduxjs/toolkit'


export const adminSlice = createSlice({

    name: 'admin',

    initialState: {
        user: {},

    },
    
    reducers: {

        onDelete: (state, action) => {
            
            state.user = action.payload;
        
        }
    }
})

export const { onDelete} = adminSlice.actions;