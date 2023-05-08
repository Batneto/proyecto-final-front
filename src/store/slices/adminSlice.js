import { createSlice } from '@reduxjs/toolkit'


export const adminSlice = createSlice({

    name: 'admin',

    initialState: {
        status:'',
        admin: '',
        
    },
    
    reducers: {

        onDelete: (state, action) => {

            state.status = 'authenticated';
            state.admin = action.payload;
        
        }
    }
})

export const { onDelete} = adminSlice.actions;