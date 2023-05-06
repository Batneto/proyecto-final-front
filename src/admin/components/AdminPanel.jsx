import React from 'react'
import { useFecth } from '../../hooks/useFetch'
import { TablaUsers } from './TablaUser';


export const AdminPanel = () => {

  const {datos,isLoading}= useFecth('/user/all')

 
  return (
    <>



<table class="min-w-full mt-6 border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
	</thead>


    {datos.map((item)=>(
              
           
          <TablaUsers key={item.id}

                  {...item} 

                  />
          ))}
		
	</table>

</>
  )
}
