
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
          test("comprobar el metodo put", async () => {
            // Configuración de prueba
            const url = "http://localhost:3000/api/user/actualizar/7";
            const method = "put";
            const body = {
            
                nombre: "cindy",
                imagen_perfil: "https://i.pinimg.com/736x/2e/07/35/2e07353a659ea7d5bc19bdaa6bcc36e8.jpg",
                email: "cindy@correo.es",
                pass: "123",
                apodo: " la nena"
            };
        
            // Ejecución de prueba
            const response = await consulta(url, method, body);
        
            // Verificación de resultados
            expect(response.ok).toBe(false);
          });
          
       
    });