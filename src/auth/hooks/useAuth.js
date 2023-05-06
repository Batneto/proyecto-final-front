import { useDispatch } from "react-redux"
import {onLogin,onLogout} from '../../store/slices/userSlice'
import {setLocal} from '../../helpers/setLocal'

import {consulta} from '../../api/fecth'


export const useAuth =  () => {

    const dispatch=useDispatch()
  
    const startLogin= async(form)=>{

        try {

            const respuesta  = await consulta('/user/login','post',form)      

            const {data} = await respuesta.json()

            const user=data.user

            const token=data.token

            setLocal([user,token] )
 
            dispatch(onLogin(user))


            
        } catch (error) {
            dispatch(onLogout('usuario no válido'))
        }
    }


    const logOut=()=>{

        dispatch(onLogout(''))
    }

    

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
            dispatch(onLogout('usuario no válido'))
        }
    }



    const crear=async(form)=>{

        const creado  = await consulta('/entries','post',form) 
    }


    const editar=async(form,id)=>{

        const editar  = await consulta(`/entries/actualizar/${id}`,'put',form) 
    }



   
return {
        startLogin,
        logOut,
        registrer,
        crear,
        editar
        }
}