import React from 'react'
import { useFecth } from '../hooks/useFetch'
import { Card } from './Card'

export const GridGallery = () => {

    const {datos,isLoading}= useFecth('/entries/all')

  return (

    <div>   
        
        <div className='grid   grid-cols-1  gap-10 mt-6   md:grid-cols-2 '>

            {datos.map((item)=>(
              
              
                <Card key={item.id}

                    {...item} 
                    />
            ))}
        </div>



    </div>
  )
}
