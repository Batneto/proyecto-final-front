import React, { useEffect } from 'react'
import {useAdmin} from '../hooks/useAdmin'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


export const TablaEntries = ({id_entradas,titulo,contenido,fecha,precio,imagen_producto}) => {
 
    const {getDeleteEntrie}= useAdmin()

    const navigate=useNavigate()

    const {status}= useSelector(state => state.admin)

    useEffect(()=>{
      status
    },[])


  return (
    <tbody className="block md:table-row-group">
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Nombre</span> {titulo} </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Apodo</span> {contenido} </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email </span> {fecha} </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Precio</span> {precio} $ </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button  class=" flex  flex-row  mb-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" onClick={()=> navigate(`/editar/${id_entradas}`)} >Edit</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"onClick={()=> getDeleteEntrie(id_entradas)} >Delete</button>
      </td>
    </tr>
  </tbody>
  
  )
}




