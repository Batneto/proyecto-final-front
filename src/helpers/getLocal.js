/**
 * 
 * @returns 
 * trae lo guardado en el local y si no el objeto users simulando un usuario no logeado 
 */



export const init = () => {
    return JSON.parse(localStorage.getItem("usuario")) || [{'users':{'status':'not-authenticated'},'admin':{'status':'not-authenticated'}}]     
  };


