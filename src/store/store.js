
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { adminSlice } from './slices/adminSlice';
import {setLocal} from '../helpers/setLocal'


export const store = configureStore({
    
    reducer: {

        users: userSlice.reducer,
        admin: adminSlice.reducer
        
        
    },

    
})

store.subscribe(() => console.log(store.getState()));

store.subscribe(() => setLocal([store.getState()]));