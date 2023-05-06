
    
import {useAdmin} from '../hooks/useAdmin'

export const TablaUsers = ({ id_usuarios, nombre,apodo,email,imagen_perfil}) => {
  
 const {getDeleteUser}= useAdmin()

  return (

    <tbody className="block md:table-row-group">
      <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Nombre</span> {nombre} </td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Apodo</span> {apodo} </td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email </span> {email} </td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Imagen</span> {imagen_perfil} </td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
         
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded" onClick={()=> getDeleteUser(id_usuarios) } >Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

  

