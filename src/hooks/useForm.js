import { useState } from "react";


/**
 * 
 * @param {String} estadoInicial 
 * @returns 
 */

export const useForm = (estadoInicial = "") => {
  
  const [formulario, setFormulario] = useState({  estadoInicial });
  

  const handleChange = (ev) => {

    const { name, value } = ev.target;
    

    setFormulario({
      ...formulario,
      [name]: value,
    });

  };

  

  return { formulario, handleChange,setFormulario };
};





























// import { useState } from "react";

// export const useForm = (estadoInicial ) => {

//   const [formulario, setFormulario] = useState({ nombre: estadoInicial });


//   const handleChange = (ev) => {

//     const { name, value } = ev.target;


//     setFormulario({
//       ...formulario,
//       [name]: value,
//     });

//   };



//   return { formulario, handleChange };
// };