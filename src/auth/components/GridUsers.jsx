import React from 'react'
import { useFecth } from '../../hooks/useFetch'

import { CardsHomeUsers } from './CardsHomeUsers'

export const GridUsers = () => {

    const {datos,isLoading}= useFecth('/entries/all')

  
    
  return (

    <>   

                    <div className='grid   grid-cols-1  gap-10 mt-6   md:grid-cols-2  '>

                        {datos.map((item)=>(
                          
                          
                            <CardsHomeUsers key={item.id}

                                {...item} 
                                />
                        ))}
                    </div>
                


    </>
  )
}
