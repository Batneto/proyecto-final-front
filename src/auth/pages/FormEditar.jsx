import React from 'react'
import { EditEntries } from '../components/EditEntries'
import { useParams } from 'react-router-dom';

export const FormEditar = () => {

    const { id } = useParams();


  return (
    <div>
        <EditEntries id = {id} />
    </div>
  )
}
