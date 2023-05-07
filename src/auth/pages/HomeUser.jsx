import React from 'react'

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GridUsers } from '../components/GridUsers'



export const HomeUser = () => {
  return (
    <>

   
    <div>
    <PayPalScriptProvider
									options={{ "client-id": 'AVvlw8FnbXJ8wXKA3MgbkH2OHuzkHv_6OVzX-hlQSNwY6YbVCilshyqB6isfXcybxFKLb--Rv05hU3rv' }}
								>
      <GridUsers/>
      
    </PayPalScriptProvider>

    </div>
  
  
  </>
  )
}
