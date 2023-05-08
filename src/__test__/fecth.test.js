
const {consulta} = require('../api/fecth');

    describe('Respuestas del fecth', () => {


          test("Comprobar el metrodo get ", async () => {
            
            const url = "http://localhost:3000/api/user";

            const method = "get";
        
            const respuesta = await consulta(url, method);
            
            expect(respuesta.ok).toBe(false);

          });


          
          test("Comprobar el metrodo post ", async () => {
            
            const url = "http://localhost:3000/api/category";

            const method = "get";
        
            const body ={

                categoria:"cartas"
            }

            const respuesta = await consulta(url, method,body);
            
            expect(respuesta.ok).toBe(false);

          });



          test("Comprobar el metrodo delete ", async () => {
            
            const url = "ttp://localhost:3000/api/user/delete/14";

            const method = "delete";
        
            const respuesta = await consulta(url, method);
            
            expect(respuesta.ok).toBe(false);

          });
          
       
    });