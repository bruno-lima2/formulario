const selecionar = document.querySelector(".selecionar");
const adicionar = document.querySelector(".adicionar")
const campos = document.querySelector(".campos");
function criarCampo() {
	const campo = document.createElement("div");
	campo.classList.add("campo")
	campos.appendChild(campo)
	if (selecionar.value === "endereco") {
		const campoTextarea = document.createElement("textarea")
		campoTextarea.classList.add("form-control")
		campoTextarea.placeholder = "Endereço"
		campo.appendChild(campoTextarea)
		validarCampos(campoTextarea)
	} else {
		const campoInput = document.createElement("input")
		campoInput.classList.add("form-control")
		if (selecionar.value === "email") {
			campoInput.placeholder = "Email"
		} else {
			campoInput.placeholder = "Celular"
		}
		campo.appendChild(campoInput)
		validarCampos(campoInput)
		//mascara(campoInput)
	}
	botaoRemover(campo)
}
function botaoRemover(campo) {
	const remover = document.createElement("button")
	remover.classList.add("btn", "btn-danger", "remover")
	remover.textContent = "X"
	remover.addEventListener("click", () => {
		campo.remove()
	})
	campo.appendChild(remover)
}
function validarCampos(campo) {
	campo.addEventListener("input", () => {
		if (campo.placeholder === "Celular") {
			campo.value = campo.value.replace(/\D/g, "").slice(0, 11)
		}
	})
	campo.addEventListener("blur", () => {
		if (campo.value === "") {
			campo.classList.add("is-invalid")
		}
		else {
			campo.classList.remove("is-invalid")
		}
		if (campo.placeholder === "Celular") {
			if (campo.value.replace(/\D/g, "").slice(0, 11).length < 11) {
				campo.classList.add("is-invalid")
			}
			else {
				campo.classList.remove("is-invalid")
			}
		}
	})
}
/*function mascara(campo) {
	if (campo.placeholder === "Celular") {
		campo.addEventListener("input", () => {
			let valores = campo.value
			let numeros = valores
			if (valores.length > 0) {
				numeros = "(" + valores.slice(0, 2)
			} if (valores.length > 2) {
				numeros = "(" + valores.slice(0, 2) + ") " + valores.slice(2, 3)
			} if (valores.length > 3) {
				numeros = "(" + valores.slice(0, 2) + ") " + valores.slice(2, 3) + " " + valores.slice(3, 7)
			} if (valores.length > 7) {
				numeros = "(" + valores.slice(0, 2) + ") " + valores.slice(2, 3) + " " + valores.slice(3, 7) + "-" + valores.slice(7, 11)
			}
			campo.value = numeros
		})
	}
}*/
adicionar.addEventListener("click", () => {
	if (selecionar.value) {
		criarCampo()
	}
})
