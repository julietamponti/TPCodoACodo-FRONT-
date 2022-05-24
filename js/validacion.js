const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
});

const validar_inputs = (e) => {
    switch (e.target.name) {
        case "nombre":
            validar_nombre(expresiones.nombre, e.target);
            break;
        case "apellido":
            validar_apellido(expresiones.apellido, e.target);
            break;
        case "edad":
            validar_edad(expresiones.edad, e.target);
            break;
        case "mail":
            validar_mail(expresiones.mail, e.target);
            break;
    }

}

const validar_nombre = (expresion, input_nombre) => {

    if (expresion.test(input_nombre)) {
        document.getElementById(`grupo__nombre`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__nombre`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__nombre i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__nombre i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__nombre .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[nombre] = true;
    } else {
        document.getElementById(`grupo__nombre`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__nombre`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__nombre i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__nombre i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__nombre .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[nombre] = false;
    }
}

const validar_apellido = (expresion, input_apellido) => {

    if (expresion.test(input_apellido)) {
        document.getElementById(`grupo__apellido`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__apellido`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__apellido i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__apellido i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__apellido .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[apellido] = true;
    } else {
        document.getElementById(`grupo__nombre`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__nombre`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__nombre i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__nombre i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__nombre .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[nombre] = false;
    }
}

const validar_edad = (expresiones.edad, e.target) => {

}

const validar_mail = (expresiones.mail, e.target) => {

}

inputs.forEach((input) => {
    input.addEventListener("keyup", validar_inputs);
    input.addEventListener("blur", validar_inputs);
});