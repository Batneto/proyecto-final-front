import React from 'react'
import { AdminPage } from '../admin/pages/AdminPage'
import { Route, Routes } from 'react-router-dom'
import AdminNav from '../admin/components/AdminNav'
import { AdminEntries } from '../admin/pages/AdminEntries'
import { AdminCategorias } from '../admin/pages/AdminCategorias'
import { AdminEditar } from '../admin/pages/AdminEditar'

export const AdminRouter = () => {
  return (
    <div>
      
      <AdminNav/>
      <Routes>
                 
                <Route path='/admin' element={<AdminPage/>} />    
                <Route path='/admin/entries' element={<AdminEntries/>} />
                <Route path='/admin/categorias' element={<AdminCategorias/>} />
                <Route path='/editar/:id' element={<AdminEditar/>} />   

        
        </Routes>

    </div>
  )
}
