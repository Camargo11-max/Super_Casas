

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{1,14}$/, // 7 a 14 numeros.
        codigo: /^\d{6,8}$/, // 7 a 14 numeros.
        ciudad: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
        municipio: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
      }

      const campos ={

        nombre:false,
        apellido:false,
        correo:false,
        telefono:false,
        codigo:false,
        ciudad:false,
        municipio:false
      }

      const  validarformulario = (e) =>{
        switch(e.target.name){
            case "nombre":
            validarcampo (expresiones.nombre, e.target, 'nombre');
            break;

            case "apellido":
              validarcampo (expresiones.apellido, e.target, 'apellido')
                break;

                case "correo":
                  validarcampo (expresiones.correo, e.target, 'correo');
                    break;

                    case "telefono":
                        validarcampo (expresiones.telefono, e.target, 'telefono')
                        break;

                        case "codigo":
                            validarcampo (expresiones.codigo, e.target, 'codigo')
                            break;

                            case "ciudad":
                              validarcampo (expresiones.ciudad, e.target, 'ciudad')
                              break;

                              case "municipio":
                              validarcampo (expresiones.municipio, e.target, 'municipio')
                              break;
        }
        
      }

      const validarcampo = (expresion, input, campo) => {
          if (expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
            document.querySelector(`#grupo__${campo} i`).classList.add('bi-check2-all');
            document.querySelector(`#grupo__${campo} i`).classList.remove('bi-exclamation-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
           } else {
              document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
              document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
              document.querySelector(`#grupo__${campo} i`).classList.add('bi-exclamation-circle');
              document.querySelector(`#grupo__${campo} i`).classList.remove('bi-check2-all');
              document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
              campos[campo] = false;
           }
        }
      

      inputs.forEach((input) =>{
        input.addEventListener('keyup', validarformulario);
        input.addEventListener('blur', validarformulario);
      });
  
       /* Validar los campos y reiniciar los campos, con la funcion tipo flecha, parametro e que es el evento= (e)*/
      formulario.addEventListener('submit', (e) => {
        e.preventDefault ();

        const terminos = document.getElementById('terminos');

        if (campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.codigo &&  campos.ciudad && campos.municipio && terminos.checked){
          formulario.reset();

          document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

          setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
          }, 5000);

          document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('formulario__grupo-correcto');
          });

        }else {
          document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

          setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
          }, 5000);
        }
    });

   