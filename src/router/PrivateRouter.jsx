import React from 'react'

import {init} from '../helpers/getLocal'
import { AdminRouter } from './AdminRouter'
import { AuthRouter } from './AuthRouter'

export const PrivateRouter = () => {

  const local= init()
  
  return (
    <>
      
       
       {
          (local[0].users.user.id_rol === 1)
          
              ? (
                  <>   
    
                   <AdminRouter/>
                            

                  </>
                        )
                : (
                    <>
                      
                      <AuthRouter/>
                        

                    </>
                        )
                }

    </>
  )
}
