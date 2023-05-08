import React from 'react'
import { useFecth } from '../../hooks/useFetch'

import { TablaEntries } from './TablaEntries';
import { TablaCategorias } from './TablaCategorias';


export const PanelCategorias = () => {

  const {datos,isLoading}= useFecth('/category')

 
  return (
<>
    <div className='mt-8 ml-3'>
    <a href="/crear" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >Añadir Categoria</a>
    </div>
<table class="min-w-full mt-6 border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nombre de la categoria</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
		
			</tr>
	</thead>


    {datos.map((item)=>(
              
           
          <TablaCategorias key={item.id}

                  {...item} 

                  />
          ))}
		
	</table>

</>
  )
}