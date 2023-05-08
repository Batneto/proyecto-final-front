import React from 'react'
import { IndexRouter } from './IndexRouter'
import { PrivateRouter } from './PrivateRouter'
import {init} from '../helpers/getLocal'
import { useSelector } from 'react-redux';



export const AppRouter = () => {

  const estado= useSelector(state => state.users)

  
  const local= init()

 // || estado.status==="not-authenticated"

  return (
    <div>
{
          (local[0].users.status === 'authenticated'||local[0].admin.status === 'authenticated' )
              ? (
                  <>
    
                     <PrivateRouter/>
                           

                  </>
                        )
                : (
                    <>
                             
                    <IndexRouter/>

                    </>
                        )
                }

          

    </div>
  )
}
