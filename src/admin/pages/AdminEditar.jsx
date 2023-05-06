import React from 'react'
import { EditEntriesAdmin } from '../components/EditarEntradasAdmin'
import { useParams } from 'react-router-dom';

export const AdminEditar = () => {

    const { id } = useParams();
  return (
    <div>

        <EditEntriesAdmin id = {id}/>
    </div>
  )
}
