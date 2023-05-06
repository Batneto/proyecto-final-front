
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


   
export const Login = () => {

     const { startLogin } = useAuth();

     const navigate = useNavigate();

     const estado= useSelector(state => state.users)
       
     const { formulario, handleChange } = useForm("");


     
     const onSubmit=(ev)=>{

        ev.preventDefault()

        startLogin(formulario)

        if (estado.status==="not-authenticated") {
            navigate ('/login') 

        }else{
            console.log('entra en el else');
            navigate ('/users')  
        }

       

     }
        
     
         
  return (    

    <div className="w-full  overflow-scroll  h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div className="bg-white py-6 px-10 sm:max-w-md w-full ">

        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Login
        </div>

        <form  onSubmit={onSubmit}>   

            <div>
                 <input type="text" name='nombre' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"  onChange={handleChange}  placeholder="Name "/>
            </div>

             <div>
                 <input type="text" name='email' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" onChange={handleChange}  placeholder="Email  "/>
            </div>
             
             
            <div className="">
                <input type="password" name='pass' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" onChange={handleChange} placeholder="Password " />
            </div>

            <div className="flex">
                <input type="checkbox" className="border-sky-400 " value="" />
                <div className="px-3 text-gray-500">
                    Acepto terminos y condiciones
                </div>
            </div>
            <div className="flex justify-center my-6">
                <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Login
                </button>
            </div>
            
        </form>
    </div>
</div>
  )
}
