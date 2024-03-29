import { checkSchema } from  'express-validator';

export const productoValidator = checkSchema({
    nombre: {

      errorMessage : "Nombre no valido",
        notEmpty : true,
        isLength : {
          errorMessage : 'El tamaño debe ser minimo 1 maximo 100',
            options: { min: 1 , max: 100
          },
        },
        valor : {
          matches: { options:  /[0-9]/},
            errorMessage : "Nombre no valido"
        }
    }
} ,["query"]);