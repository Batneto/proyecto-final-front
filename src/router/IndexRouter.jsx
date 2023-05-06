import React from 'react'
import  Header  from '../components/Header'

import { HomePage } from '../pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegistrerPage } from '../auth/pages/RegistrerPage'







export const IndexRouter = () => {
  return (

    <div>

    
        <Header/>
      

        <Routes>
                
                <Route path='/login' element={<LoginPage/>} />   
                <Route path='/registrer' element={<RegistrerPage/>} />
                
                <Route path='/*' element={<HomePage/>} />
        
        </Routes>

        
        



    </div>
  )
}
