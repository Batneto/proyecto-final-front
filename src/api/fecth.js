const urlBase='https://bazara-back2.onrender.com/api'

/**
 * 
 * @param {String} url 
 * @param {String} method 
 * @param {Object} body 
 * @returns 
 */

export const consulta = async(url,method,body) => {
 
    let options={}

     const data={...body};
    
    if(method=='post' || method=='put'){
       
       
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='delete'){
        options={
            method: method, 
        }
    }
    if(method=='get'){
        options={
            method: method,
            
        }
    }
               
      return await fetch(`${urlBase}${url}`,options);
}


