import React from 'react'
import { useFecth } from '../../hooks/useFetch'

import { TablaEntries } from './TablaEntries';


export const PanelEntries = () => {

  const {datos,isLoading}= useFecth('/entries/all')

 
  return (
    <>



<table class="min-w-full mt-6 border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Titulo</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Descripcion</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Fecha</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Imagen</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
	</thead>


    {datos.map((item)=>(
              
           
          <TablaEntries key={item.id}

                  {...item} 

                  />
          ))}
		
	</table>

</>
  )
}
