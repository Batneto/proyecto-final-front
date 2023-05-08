import React from 'react'
import { EditarPerfil } from '../components/EditarPerfil'
import { useParams } from 'react-router-dom';

export const EditarPerfilPage = () => {

    const { id } = useParams();

  return (
    <div>

        <EditarPerfil id = {id} />
    </div>
  )
}
