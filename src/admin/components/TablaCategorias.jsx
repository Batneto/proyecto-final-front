import React from 'react'

export const TablaCategorias = ({nombre}) => {
  return (
    <>
    <a href="">Añadir Categoria</a>
    <tbody className="block md:table-row-group">
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Nombre</span> {nombre} </td>
      
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
       
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded" onClick={()=> getDelete(id_usuarios) } >Delete</button>
      </td>
    </tr>
  </tbody>
  </>
  )
}