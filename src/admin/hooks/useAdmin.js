import { useDispatch } from "react-redux"
import {onDelete} from '../../store/slices/adminSlice'

import {consulta} from '../../api/fecth'


export const    useAdmin = () => {

    const dispatch=useDispatch()
  

    /**
     * 
     * @param {Number} id
     * recibe el id del usuario para poder eliminarlo 
     */
    const getDeleteUser= async(id)=>{

        try {
           
            const respuesta  = await consulta(`/user/delete/${id}`,'delete')      

        } catch (error) {
            console.log('error en la eliminician');
        }
    }

    /**
     * 
     * @param {Number} id 
     * Recive el id de la entrada para poder eliminarla
     */
    const getDeleteEntrie= async(id)=>{

        try {

            const respuesta  = await consulta(`/entries/delete/${id}`,'delete')   
            
            dispatch(onDelete('entrada borrado'))
            

        } catch (error) {
            console.log('error en la eliminician');
        }
    }

    /**
     * 
     * @param {Object} form 
     * recibe el formulario de crear para introducir la nueva categoria 
     */
    const crearCategory= async(form)=>{

        try {
           
            const respuesta  = await consulta(`/category`,'post',form)      

        } catch (error) {
            console.log('error en la eliminician');
        }
    }


    
return {
    getDeleteUser,
    getDeleteEntrie,
    crearCategory
        
        }
}