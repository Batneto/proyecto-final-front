/**
 * 
 * @returns 
 * envia al local un array con una key usuario
 */



export const setLocal = (array) => {
    localStorage.setItem("usuario", JSON.stringify(array));
  };