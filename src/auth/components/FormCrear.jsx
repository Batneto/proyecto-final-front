
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import {init} from '../../helpers/getLocal'

export const FormCrear = () => {

    const navigate = useNavigate();

    const local= init()
   
    const {crear}=useAuth()
    
     const { formulario, handleChange } = useForm("");
   
     const onSubmit = (ev) => {
   
       ev.preventDefault();
        
      const formularioUser={

        ...formulario,

        usuario:local[0].users.user.id_usuarios

      }
         
       crear(formularioUser)
       
      navigate ('/users')
   
     };

  return (
    
    <div class="w-full  overflow-scroll  h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white mt-10 py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Crear Entrada
        </div>
        <form onSubmit={onSubmit} >
            <div>
                 <input type="text" name='titulo' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" onChange={handleChange}  placeholder="titulo "/>
            </div>
             <div>
                 <input type="number" name='precio' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" onChange={handleChange} placeholder="precio"/>
            </div>
             <div>
            <input type="text" name='contenido' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="contenido "/>
            </div>
             <div>
            <input type="text" name='imagen_producto' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="Imagen "/>
            </div>

            <select name='id_categorias' className='ml-36'onChange={handleChange} >
                <option value="1">Muñecos</option>
                <option value="2">Juegos</option>
                <option value="3">figuras</option>
            </select>

          
            <div class="flex justify-center my-6">
                <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Crear
                </button>
            </div>
            
           
        </form>
    </div>
</div>
  )
}
