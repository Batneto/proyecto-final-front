import { useDispatch } from "react-redux"
import {onLogin,onLogout} from '../../store/slices/userSlice'
import {setLocal} from '../../helpers/setLocal'

import {consulta} from '../../api/fecth'


export const useAuth =  () => {

    const dispatch=useDispatch()
  
    /**
     * 
     * @param {Object} form 
     * recibe los parametros introducidos por el formulario de login para mandarlos a la base de datos y comprobar si los datos son correctos
     */


    const startLogin= async(form)=>{ 

        try {

            const respuesta  = await consulta('/user/login','post',form)      

            const {data} = await respuesta.json()

            const user=data.user

            const token=data.token

            setLocal([user,token] )
 
            dispatch(onLogin(user))


            
        } catch (error) {
            dispatch(onLogout('Usuario o Contraseña incorrectas'))
        }
    }


    const logOut=()=>{

        dispatch(onLogout(''))
    }

    
    /**
     * 
     * @param {Object} form 
     * recibe los valores del formurario para mandarlos a la base de datos y registrar el usuario
     */
    const registrer= async(form)=>{

        const fakeLog={
            nombre:form.nombre,
            email:form.email,
            pass:form.pass
        }
    
        try {

            const creado  = await consulta('/user/nuevo','post',form)      

            const respuesta  = await consulta('/user/login','post',fakeLog)      

            const {data} = await respuesta.json()

            const user=data.user

            const token=data.token

            setLocal([user,token] )

 
            dispatch(onLogin(user))


            
        } catch (error) {
            dispatch(onLogout('Error al crear el usuario'))
        }
    }



    const crear=async(form)=>{

        const creado  = await consulta('/entries','post',form) 
    }

    /**
     * 
     * @param {Object} form 
     * @param {Number} id 
     * recive el objeto del formulario y el id del usiario para poder relacionarlo con la entrada  
     */

    const editar=async(form,id)=>{

        const editar  = await consulta(`/entries/actualizar/${id}`,'put',form) 
    }

     /**
     * 
     * @param {Object} form 
     * @param {Number} id 
     * recive el objeto del formulario y el id del usiario para que solo el usuario pueda editar sus datos
     */
    const editarUsuario=async(form,id)=>{

        const editar  = await consulta(`/user/actualizar/${id}`,'put',form) 
    }




   
return {
        startLogin,
        logOut,
        registrer,
        crear,
        editar,
        editarUsuario
        }
}