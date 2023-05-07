import React from 'react'
import { useFecth } from '../../hooks/useFetch'

import { CardsHomeUsers } from './CardsHomeUsers'

export const GridUsers = () => {

    const {datos,isLoading}= useFecth('/entries/all')
    
    let cargando = false

    setTimeout(()=>{
      cargando==false
    },4000)

    console.log(cargando);

  return (

    <>   
        
     {   (cargando===true)
            ? (
                <h3>Cargando....</h3> 
                      )
              : (



                    <div className='grid   grid-cols-2  gap-10 mt-6 '>

                        {datos.map((item)=>(
                          
                          
                            <CardsHomeUsers key={item.id}

                                {...item} 
                                />
                        ))}
                    </div>
                )}


    </>
  )
}
