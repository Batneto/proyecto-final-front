import React from 'react'
import { useFecth } from '../../hooks/useFetch'

import {init} from '../../helpers/getLocal'
import { CardUser } from './CardUser'

export const EntradasPropias = () => {

    const local=init()
    
   const id=local[0].users.user.id_usuarios

        const {datos,isLoading}=  useFecth(`/entries/${id}`,)

    
  return (

    <div>   
        
        <div className='grid   grid-cols-2  gap-10 mt-6 '>

            {datos.map((item)=>(
              
              
                <CardUser key={item.id}

                    {...item} 
                    />
            ))}
        </div>



    </div>
  )
}