import { createSlice } from '@reduxjs/toolkit'


export const adminSlice = createSlice({

    name: 'admin',

    initialState: {
        status:'',
        admin: false,
        
    },
    
    reducers: {

        onDelete: (state, action) => {

            state.status = 'authenticated';
            state.admin = true;
        
        }
    }
})

export const { onDelete} = adminSlice.actions;