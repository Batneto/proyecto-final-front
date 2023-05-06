export const init = () => {
    return JSON.parse(localStorage.getItem("usuario")) || [{'users':{'status':'not-authenticated'}}]     
  };


