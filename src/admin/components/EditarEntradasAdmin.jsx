import React from 'react'
import {useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import { useFecth } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../auth/hooks/useAuth'

export const EditEntriesAdmin = ({id}) => {

    const {editar}=useAuth()
    const navigate = useNavigate();

    const {datos,isLoading}= useFecth(`/entries/one/${id}`)  
    
    const { formulario, handleChange, setFormulario } = useForm();

    
    useEffect(() => {

        if (!isLoading && datos[0]) {

          setFormulario(datos[0]);
        }
        
      }, [isLoading, datos, setFormulario]);
    

    const onSubmit = (ev) => {
   
        ev.preventDefault();

        editar(formulario,id)

        navigate ('/admin/entries')  
    
      };
 
      

  return (
    <>
   {
        (isLoading===true)
            ? (
                <h3>Cargando....</h3> 
                      )
              : (
                <div class="w-full  overflow-scroll  h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
                <div class="bg-white mt-10 py-6 px-10 sm:max-w-md w-full ">
                    <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                        Editar
                    </div>
                    <form onSubmit={onSubmit} >
                        <div>
                             <input type="text" name='titulo' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" 
                             onChange={handleChange} value={formulario.titulo || ''} placeholder='titulo'/>
                        </div>
                         <div>
                             <input type="number" name='precio' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                              onChange={handleChange} value={formulario.precio || ''}   placeholder="precio"/>
                        </div>
                         <div>
                        <input type="text" name='contenido' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" 
                        onChange={handleChange} value={formulario.contenido || ''}  placeholder="contenido "/>
                        </div>
                         <div>
                        <input type="text" name='imagen_producto' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                         onChange={handleChange} value={formulario.imagen_producto || ''} placeholder="Imagen "/>
                        </div>
            
                       
            
                       
                        <div class="flex justify-center my-6">
                            <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                                Editar
                            </button>
                        </div>
                        
                       
                    </form>
                </div>
            </div>
                      )
              }
   
</>
  )
}
