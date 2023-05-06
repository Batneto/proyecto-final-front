
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

export const RegistrerForm = () => {

    const navigate = useNavigate();

    const {registrer}=useAuth()
    
     const { formulario, handleChange } = useForm("");
   
     const onSubmit = (ev) => {
   
       ev.preventDefault();
         
       registrer(formulario)
       
      navigate ('/users')
   
     };
  return (
    
    <div class="w-full  overflow-scroll  h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white mt-10 py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Formulario de Registro
        </div>
        <form onSubmit={onSubmit} >
            <div>
                 <input type="text" name='nombre' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" onChange={handleChange}  placeholder="Nombre "/>
            </div>
             <div>
                 <input type="email" name='email' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" onChange={handleChange} placeholder="Email"/>
            </div>
             <div>
            <input type="text" name='apodo' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="Apodo "/>
            </div>
             <div>
            <input type="text" name='image-perfil' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="Imagen "/>
            </div>
            <div class="">
                <input type="password" name='pass' class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="Contraseña" />
            </div>
            <div class="flex">
                <input type="checkbox" class="border-sky-400 " value="" />
                <div class="px-3 text-gray-500">
                    I accept terms & conditions 
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Registrarte
                </button>
            </div>
            <div class="flex justify-center ">
                <p class="text-gray-500">Already have an acount? </p>
                <a href="/login" class="text-sky-600 pl-2"> Sign In</a>
            </div>
        </form>
    </div>
</div>
  )
}
