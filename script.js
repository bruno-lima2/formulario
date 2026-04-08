const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
function campoEmail() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  const label = document.createElement("label");
  label.classList.add("label");
  label.textContent = "Email";
  const container = document.createElement("div");
  container.classList.add("container");
  const campoEmail = document.createElement("input");
  campoEmail.classList.add("form-control");
  campoEmail.placeholder = "nome@dominio.com";
  campos.appendChild(campo);
  campo.appendChild(label);
  campo.appendChild(container);
  container.appendChild(campoEmail);
  botaoRemover(campo, container);
  feedbackEmail(campoEmail, campo);
}
function botaoRemover(campo, container) {
  const remover = document.createElement("button");
  remover.classList.add("remover");
  remover.textContent = "X";
  remover.classList.add("btn", "btn-danger", "remover");
  container.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
function feedbackEmail(campoEmail, campo) {
  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback", "feedback");
  feedback.textContent = "O email é inválido";
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  campoEmail.addEventListener("blur", () => {
    if (!regexEmail.test(campoEmail.value)) {
      campo.appendChild(feedback);
      campoEmail.classList.add("is-invalid");
    } else {
      feedback.remove();
      campoEmail.classList.remove("is-invalid");
    }
  });
}
function campoCelular() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  const label = document.createElement("label");
  label.classList.add("label");
  label.textContent = "Celular";
  const container = document.createElement("div");
  container.classList.add("container");
  const campoCelular = document.createElement("input");
  campoCelular.classList.add("form-control");
  campoCelular.placeholder = "(00) 0 0000-0000";
  campos.appendChild(campo);
  campo.appendChild(label);
  campo.appendChild(container);
  container.appendChild(campoCelular);
  botaoRemover(campo, container);
  feedbackCelular(campoCelular, campo);
  validacaoCelular(campoCelular);
}
function feedbackCelular(campoCelular, campo) {
  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback", "feedback");
  feedback.textContent = "O número de celular é inválido";
  campoCelular.addEventListener("blur", () => {
    if (campoCelular.value.replace(/\D/g, "").length !== 11) {
      campo.appendChild(feedback);
      campoCelular.classList.add("is-invalid");
    } else {
      feedback.remove();
      campoCelular.classList.remove("is-invalid");
    }
  });
}
function validacaoCelular(campoCelular) {
  campoCelular.addEventListener("input", () => {
    let valor = campoCelular.value.replace(/\D/g, "");
    let numeros = valor;
    if (valor.length > 0) {
      numeros = `(${valor.slice(0, 2)}`;
    }
    if (valor.length > 2) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)}`;
    }
    if (valor.length > 3) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`;
    }
    if (valor.length > 7) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7, 11)}`;
    }
    campoCelular.value = numeros;
  });
}
function campoCEP() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  const label = document.createElement("label");
  label.classList.add("label");
  label.textContent = "CEP";
  const container = document.createElement("div");
  container.classList.add("container");
  const campoCEP = document.createElement("input");
  campoCEP.classList.add("form-control");
  campoCEP.placeholder = "00000-000";
  campos.appendChild(campo);
  campo.appendChild(label);
  campo.appendChild(container);
  container.appendChild(campoCEP);
  botaoRemover(campo, container);
  feedbackCEP(campoCEP, campo);
  validacaoCEP(campoCEP);
}
function feedbackCEP(campoCEP, campo) {
  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback", "feedback");
  feedback.textContent = "O CEP é inválido";
  campoCEP.addEventListener("blur", () => {
    if (campoCEP.value.replace(/\D/g, "").length !== 8) {
      campo.appendChild(feedback);
      campoCEP.classList.add("is-invalid");
    } else {
      feedback.remove();
      campoCEP.classList.remove("is-invalid");
    }
  });
}
function validacaoCEP(campoCEP) {
  campoCEP.addEventListener("input", () => {
    let valor = campoCEP.value.replace(/\D/g, "");
    let numeros = valor;
    if (valor.length > 5) {
      numeros = `${valor.slice(0, 5)}-`;
    } if (valor.length > 5) {
      numeros = `${valor.slice(0, 5)}-${valor.slice(5, 8)}`;
    }
    campoCEP.value = numeros;
  });
}
adicionar.addEventListener("click", () => {
  if (selecionar.value === "email") {
    campoEmail();
  } else if (selecionar.value === "celular") {
    campoCelular();
  } else if (selecionar.value === "cep") {
    campoCEP();
  }
});
