const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
function criarCampos() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  let campoEntrada;
  if (selecionar.value === "endereco") {
    campoEntrada = document.createElement("textarea");
    campoEntrada.placeholder = "Endereço";
    campoEntrada.classList.add("form-control");
  } else {
    campoEntrada = document.createElement("input");
    campoEntrada.classList.add("form-control");
    if (selecionar.value === "email") {
      campoEntrada.placeholder = "Email";
    } else {
      campoEntrada.placeholder = "Celular";
      validacaoCelular(campoEntrada);
    }
  }
  campo.appendChild(campoEntrada);
  botaoRemover(campo);
  validacaoGeral(campoEntrada);
}
function botaoRemover(campo) {
  const remover = document.createElement("button");
  remover.classList.add("remover", "btn", "btn-danger");
  remover.textContent = "X";
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
function validacaoGeral(campoEntrada) {
  if (campoEntrada.placeholder !== "Celular") {
    campoEntrada.addEventListener("blur", () => {
      if (campoEntrada.value === "") {
        campoEntrada.classList.add("is-invalid");
      } else {
        campoEntrada.classList.remove("is-invalid");
      }
    });
  }
}
function validacaoCelular(campoEntrada) {
  campoEntrada.addEventListener("input", () => {
    campoEntrada.value = campoEntrada.value.replace(/\D/g, "").slice(0, 11);
    let valor = campoEntrada.value
    let numeros = valor
    if (valor.length > 0) {
      numeros = `(${valor.slice(0, 2)}`
    } if (valor.length > 2) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)}`
    } if (valor.length > 3) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`
    }
    if (valor.length > 7) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7, 11)}`
    }
    campoEntrada.value = numeros
  });
  campoEntrada.addEventListener("blur", () => {
    if (campoEntrada.value.replace(/\D/g, "").length < 11) {
      campoEntrada.classList.add("is-invalid");
    } else {
      campoEntrada.classList.remove("is-invalid");
    }
  });
}
adicionar.addEventListener("click", () => {
  if (selecionar.value) {
    criarCampos();
  }
});
