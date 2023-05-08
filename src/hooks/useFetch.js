import { useEffect, useState } from "react"
import {consulta} from '../api/fecth'

/**
 * 
 * @param {String} url 
 * @param {String} method 
 * @param {Object} body 
 * @returns 
 */

export const useFecth = (url,method,body) => {

    const [datos, setDatos] = useState([])
  
    const [isLoading, setIsLoading] = useState(true)
    
    
    const getData= async()=>{
        
            
       try {    
            
            const respuesta= await consulta(url,method,body)
                
                console.log(respuesta);
                const {data} = await respuesta.json()

               

                setDatos(data)

                setIsLoading(false)   



       } catch (error) {
            console.log(error);
       }
    
    }
   

    useEffect(()=>{
        getData()
    },[])

  

return{
    datos,
    isLoading
}

  
}