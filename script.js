const adicionar = document.querySelector(".adicionar")
const selecionar = document.querySelector(".selecionar")
const campos = document.querySelector(".campos")
function criarCampo() {
	const campo = document.createElement("div")
	campo.classList.add("campo")
	campos.appendChild(campo)
	if (selecionar.value === "endereco") {
		const campoTextarea = document.createElement("textarea")
		campoTextarea.classList.add("form-control")
		campoTextarea.placeholder = "Endereço"
		campo.appendChild(campoTextarea)
	} else {
		const campoInput = document.createElement("input")
		campoInput.classList.add("form-control")
		if (selecionar.value === "email") {
			campoInput.placeholder = "Email"
		} else if (selecionar.value === "celular") {
			campoInput.placeholder = "Celular"
			validarCelular(campoInput)
		}
		campo.appendChild(campoInput)
	}
	criarBotao(campo)
}
function criarBotao(campo) {
	const remover = document.createElement("button")
	remover.textContent = "X"
	remover.classList.add("btn", "btn-danger", "remover")
	remover.addEventListener("click", () => {
		campo.remove()
	})
	campo.appendChild(remover)
}
function validarCelular(campoInput) {
	campoInput.addEventListener("blur", () => {
		if (campoInput.value.replace(/\D/g, "").length !== 11) {
		campoInput.value = ""
		}
	})
}
adicionar.addEventListener("click", () => {
	if (selecionar.value) {
		criarCampo()
	}
})
