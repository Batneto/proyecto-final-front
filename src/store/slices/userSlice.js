import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name: 'user',

    initialState: {
        user: {},
        admin:false,
        status: 'not-authenticated',
        errorMessage: undefined
    },
    
    reducers: {

        onLogin: (state, action) => {
            
            state.user = action.payload;
            state.status = 'authenticated';
            state.errorMessage = undefined;

            
            
        },

        onLogout: (state, action) => {

            state.user = {};
            state.admin=false,
            state.status = 'not-authenticated';
            state.errorMessage = action.payload;
        },

        errors: (state, action) => {

            state.errorMessage = action.payload;

        }
    }
})

export const { onLogin, onLogout,errors } = userSlice.actions;