import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'
import {useAdmin} from '../hooks/useAdmin'
import {init} from '../../helpers/getLocal'

export const CrearCategoria = () => {

    const navigate = useNavigate();

    const local= init()
   
    const {crearCategory}=useAdmin()
    
     const { formulario, handleChange } = useForm("");
   
     const onSubmit = (ev) => {
   
       ev.preventDefault();
        
      const formularioCrear={
        categoria:formulario.categoria
       }
       

       crearCategory(formularioCrear)
       
      navigate ('/admin')
   
     };

  return (
    
    <div class="w-full  overflow-scroll  h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white mt-10 py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Crear Categoria
        </div>
        <form onSubmit={onSubmit} >
            <div>
                 <input type="text" name='categoria' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" onChange={handleChange}  placeholder="Nombre de la nueva categoria "/>
            </div>
             

          
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
