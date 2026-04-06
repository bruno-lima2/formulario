const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
function criarCampos() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  let label = document.createElement("label");
  const container = document.createElement("div");
  container.classList.add("container");
  campo.appendChild(label);
  campo.appendChild(container);
  let campoEntrada = document.createElement("input");
  campoEntrada.classList.add("form-control");
  if (selecionar.value === "email") {
    label.textContent = "Email";
    campoEntrada.placeholder = "exemplo@dominio.com";
    container.appendChild(campoEntrada);
    botaoRemover(container, campo);
    feedbackEmail(campoEntrada, campo);
  } else if (selecionar.value === "celular") {
    label.textContent = "Celular";
    campoEntrada.placeholder = "(00) 0 0000-0000";
    container.appendChild(campoEntrada);
    botaoRemover(container, campo);
    validacaoCelular(campoEntrada);
    feedbackCelular(campoEntrada, campo);
  } else if (selecionar.value === "cep") {
    label.textContent = "CEP";
    campoEntrada.placeholder = "00000-000";
    container.appendChild(campoEntrada);
    botaoRemover(container, campo);
    validacaoCEP(campoEntrada);
    feedbackCEP(campoEntrada, campo);
  }
}
function botaoRemover(container, campo) {
  const remover = document.createElement("button");
  remover.textContent = "X";
  remover.classList.add("btn", "btn-danger", "remover");
  remover.addEventListener("click", () => {
    campo.remove();
  });
  container.appendChild(remover);
}
function validacaoCEP(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    let valor = campoEntrada.value.replace(/\D/g, "").slice(0, 8);
    let numeros = valor;
    if (valor.length > 5) {
      numeros = `${valor.slice(0, 5)}-${valor.slice(5, 8)}`;
    }
    campoEntrada.value = numeros;
  });
}
function feedbackCEP(campoEntrada, campo) {
  const feedback = document.createElement("div");
  feedback.textContent = "O CEP é inválido";
  feedback.classList.add("invalid-feedback", "feedback");
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.value.replace(/\D/g, "").slice(0, 8).length < 8) {
      campoEntrada.classList.add("is-invalid");
      campo.appendChild(feedback);
    } else {
      campoEntrada.classList.remove("is-invalid");
      feedback.remove();
    }
  });
}
function validacaoCelular(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    let valor = campoEntrada.value.replace(/\D/g, "").slice(0, 11);
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
    campoEntrada.value = numeros;
  });
}
function feedbackCelular(campoEntrada, container) {
  const feedback = document.createElement("div");
  feedback.textContent = "O número de celular é inválido";
  feedback.classList.add("invalid-feedback", "feedback");
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.value.replace(/\D/g, "").slice(0, 11).length < 11) {
      campoEntrada.classList.add("is-invalid");
      container.appendChild(feedback);
    } else {
      campoEntrada.classList.remove("is-invalid");
      feedback.remove();
    }
  });
}
function feedbackEmail(campoEntrada, container) {
  const feedback = document.createElement("div");
  feedback.textContent = "O email é inválido";
  feedback.classList.add("invalid-feedback", "feedback");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  campoEntrada.addEventListener("blur", () => {
    if (!regexEmail.test(campoEntrada.value)) {
      campoEntrada.classList.add("is-invalid");
      container.appendChild(feedback);
    } else {
      campoEntrada.classList.remove("is-invalid");
      feedback.remove();
    }
  });
}
adicionar.addEventListener("click", () => {
  if (selecionar.value) {
    criarCampos();
  }
});
