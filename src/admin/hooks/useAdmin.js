import { useDispatch } from "react-redux"
import {onDelete} from '../../store/slices/adminSlice'
import {setLocal} from '../../helpers/setLocal'

import {consulta} from '../../api/fecth'


export const useAdmin = () => {

    const dispatch=useDispatch()
  
    const getDeleteUser= async(id)=>{

        try {

            const respuesta  = await consulta(`/user/delete/${id}`,'delete')      

        } catch (error) {
            console.log('error en la eliminician');
        }
    }
    const getDeleteEntrie= async(id)=>{

        try {

            const respuesta  = await consulta(`/entries/delete/${id}`,'delete')      

        } catch (error) {
            console.log('error en la eliminician');
        }
    }






   
return {
    getDeleteUser,
    getDeleteEntrie
        
        }
}