const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
function criarCampos() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  campo.appendChild(wrapper);
  let campoEntrada;
  campoEntrada = document.createElement("input");
  campoEntrada.classList.add("form-control");
  if (selecionar.value === "cep") {
    campoEntrada.placeholder = "CEP";
    campoEntrada.dataset.tipo = "cep";
  } else if (selecionar.value === "celular") {
    campoEntrada.placeholder = "Celular";
    campoEntrada.dataset.tipo = "celular";
    validacaoCelular(campoEntrada);
  } else if (selecionar.value === "email") {
    campoEntrada.placeholder = "Email";
    campoEntrada.dataset.tipo = "email";
  }
  wrapper.appendChild(campoEntrada);
  criarBotaoRemover(campo);
  feedbackErro(campoEntrada, wrapper);
}
function criarBotaoRemover(campo) {
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
function feedbackErro(campoEntrada, wrapper) {
  const feedback = document.createElement("div");
  feedback.classList.add("invalid-feedback");
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.dataset.tipo === "cep") {
      if (campoEntrada.value === "") {
        feedback.textContent = "O CEP é inválido";
        campoEntrada.classList.add("is-invalid");
        wrapper.appendChild(feedback);
      } else {
        feedback.remove();
        campoEntrada.classList.remove("is-invalid");
      }
    } else if (campoEntrada.dataset.tipo === "celular") {
      if (campoEntrada.value.replace(/\D/g, "").length < 11) {
        feedback.textContent = "O número de celular é inválido";
        campoEntrada.classList.add("is-invalid");
        wrapper.appendChild(feedback);
      } else {
        feedback.remove();
        campoEntrada.classList.remove("is-invalid");
      }
    } else if (campoEntrada.dataset.tipo === "email") {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(campoEntrada.value)) {
        feedback.textContent = "O email é inválido";
        campoEntrada.classList.add("is-invalid");
        wrapper.appendChild(feedback);
      } else {
        feedback.remove();
        campoEntrada.classList.remove("is-invalid");
      }
    }
  });
}
function validacaoCelular(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    campoEntrada.value = campoEntrada.value.replace(/\D/g, "").slice(0, 11);
    let valor = campoEntrada.value;
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
adicionar.addEventListener("click", () => {
  if (selecionar.value) {
    criarCampos();
  }
});
