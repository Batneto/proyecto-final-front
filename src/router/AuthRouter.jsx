import React from 'react'
import NavBar from '../auth/components/NavBarUser'

import { HomeUser } from '../auth/pages/HomeUser'
import { Route, Routes } from 'react-router-dom'
import { CrearEntrada } from '../auth/pages/CrearEntrada'
import { MisEntradas } from '../auth/pages/MisEntradas'
import { FormEditar } from '../auth/pages/FormEditar'



export const AuthRouter = () => {
  return (
    <>

  <NavBar/>
    <div>
        <Routes>
                
                <Route path='/crear' element={<CrearEntrada/>} />   
                <Route path='/entradasPropias' element={<MisEntradas/>} /> 
                <Route path='/editar/:id' element={<FormEditar/>} /> 
                
                
                <Route path='/users' element={<HomeUser/>}/>

                <Route path='/*' element={<HomeUser/>} />
        
        </Routes> 



     
    </div>
  
  
  </>
  )
}
