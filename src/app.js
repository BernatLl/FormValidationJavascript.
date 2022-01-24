/* eslint-disable */
import "bootstrap";

import "./style.css";
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const password2 = document.querySelector("#pass2");

window.onload = function() {
  form.addEventListener("submit", e => {
    e.preventDefault();
    validarCampos();
  });
  const validarCampos = () => {
    //captura los valores introducidos
    const emailValor = email.value.trim();
    const passwordValor = password.value.trim();
    const password2Valor = password2.value.trim();

    if (!emailValor) {
      ValidError(email, "Campo Vacío");
    } else if (!validaEmail(emailValor)) {
      ValidError(email, "El email no es correcto");
    } else {
      ValidOk(email);
    }
    //const ps = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
    if (!passwordValor) {
      ValidError(password, "Campo Vacío");
    } else if (!validaPassword(passwordValor)) {
      ValidError(
        password,
        "Mínimo 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial "
      );
    } else {
      ValidOk(password);
    }
    if (!password2Valor) {
      ValidError(password2, "Confirme su password");
    } else if (passwordValor !== password2Valor) {
      ValidError(password2, "El password no coincide");
    } else {
      ValidOk(password2);
    }
  };

  const ValidError = (input, msj) => {
    const formControl = input.parentElement;
    const warning = formControl.querySelector("p");
    warning.innerText = msj;
    formControl.className = "form-control error";
  };
  const ValidOk = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };
  const validaEmail = email => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );
  };
  const validaPassword = password => {
    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/i.test(
      password
    );
  };
};
