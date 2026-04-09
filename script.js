const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
function criarCampo() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const label = document.createElement("label");
  label.classList.add("label");
  campo.appendChild(label);
  const container = document.createElement("div");
  container.classList.add("container");
  campo.appendChild(container);
  const campoEntrada = document.createElement("input");
  campoEntrada.classList.add("form-control");
  container.appendChild(campoEntrada);
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  container.appendChild(remover);
  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback", "feedback");
  if (selecionar.value === "email") {
    campoEmail(label, campoEntrada, feedback);
    validacaoEmail(campoEntrada, campo, feedback);
  } else if (selecionar.value === "celular") {
    campoCelular(label, campoEntrada, feedback);
    validacaoCelular(campoEntrada, campo, feedback);
    mascaraCelular(campoEntrada);
  } else if (selecionar.value === "cep") {
    campoCEP(label, campoEntrada, feedback);
    validacaoCEP(campoEntrada, campo, feedback);
    mascaraCEP(campoEntrada);
  }
  botaoRemover(remover, campo);
}
function campoEmail(label, campoEntrada, feedback) {
  label.textContent = "Email";
  campoEntrada.placeholder = "nome@dominio.com";
  feedback.textContent = "O email é inválido";
}
function campoCelular(label, campoEntrada, feedback) {
  label.textContent = "Celular";
  campoEntrada.placeholder = "(00) 0 0000-0000";
  feedback.textContent = "O número de celular é inválido";
}
function campoCEP(label, campoEntrada, feedback) {
  label.textContent = "CEP";
  campoEntrada.placeholder = "00000-000";
  feedback.textContent = "O CEP é inválido";
}
function botaoRemover(remover, campo) {
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
function validacaoEmail(campoEntrada, campo, feedback) {
  campoEntrada.addEventListener("blur", () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(campoEntrada.value)) {
      campo.appendChild(feedback);
    } else if (regexEmail.test(campoEntrada.value)) {
      feedback.remove();
    }
  });
}
function validacaoCelular(campoEntrada, campo, feedback) {
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.value.replace(/\D/g, "").length !== 11) {
      campo.appendChild(feedback);
    } else if (campoEntrada.value.replace(/\D/g, "").length === 11) {
      feedback.remove();
    }
  });
}
function validacaoCEP(campoEntrada, campo, feedback) {
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.value.replace(/\D/g, "").length !== 8) {
      campo.appendChild(feedback);
    } else if (campoEntrada.value.replace(/\D/g, "").length === 8) {
      feedback.remove();
    }
  });
}
function mascaraCelular(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    let valor = campoEntrada.value.replace(/\D/g, "");
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
function mascaraCEP(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    let valor = campoEntrada.value.replace(/\D/g, "");
    let numeros = valor;
    if (valor.length > 5) {
      numeros = `${valor.slice(0, 5)}-${valor.slice(5, 8)}`;
    }
    campoEntrada.value = numeros;
  });
}
adicionar.addEventListener("click", () => {
  if (selecionar.value) {
    criarCampo();
  }
});
