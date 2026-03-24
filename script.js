const adicionar = document.querySelector(".adicionar")
const selecionar = document.querySelector(".selecionar")
const campos = document.querySelector(".campos")
adicionar.addEventListener("click", () => {
	if (selecionar.value) {
		function criarCampo() {
			const campo = document.createElement("div")
			campo.classList.add("campo")
			if (selecionar.value === "endereco") {
				const campoTextarea = document.createElement("textarea")
				campoTextarea.classList.add("form-control")
				campoTextarea.placeholder = "Endereço"
				campo.appendChild(campoTextarea)
			} else {
				const campoInput = document.createElement("input")
				campoInput.type = "text"
				campoInput.classList.add("form-control")
				if (selecionar.value === "email") {
					campoInput.placeholder = "Email"
				} else {
					campoInput.placeholder = "Celular"
					campoInput.addEventListener("blur", () => {
						if (campoInput.value.replace(/\D/g, "").length !== 11) {
							campoInput.value = ""
						}
					})
				}
				campo.appendChild(campoInput)
			}
			campos.appendChild(campo)
			function botaoRemover() {
				const remover = document.createElement("button")
				remover.textContent = "X"
				remover.classList.add("btn", "btn-danger", "remover")
				remover.addEventListener("click", () => {
					campo.remove()
				})
				campo.appendChild(remover)
			}
			botaoRemover()
		}
		criarCampo()
	}
})

/*const adicionar = document.querySelector(".adicionar")
const selecionar = document.querySelector(".selecionar")
const campos = document.querySelector(".campos")
function criarCampo(tipo) {
    const campo = document.createElement("div")
    campo.classList.add("campo")
    let input
    if (tipo === "email" || tipo === "celular") {
        input = document.createElement("input")
        input.placeholder = tipo === "email" ? "Email" : "Celular"
        input.classList.add("form-control")
    } else if (tipo === "endereco") {
        input = document.createElement("textarea")
        input.placeholder = "Endereço"
        input.classList.add("form-control")
    }
    campo.appendChild(input)
    campo.appendChild(criarBotaoRemover(campo))
    campos.appendChild(campo)
    validarCampo(input, tipo)
}
function criarBotaoRemover(campo) {
    const remover = document.createElement("button")
    remover.textContent = "X"
    remover.classList.add("btn", "btn-danger", "remover")
    remover.addEventListener("click", () => {
        campo.remove()
    })
    return remover
}
function validarCampo(input, tipo) {
    if (tipo === "celular") {
        input.addEventListener("blur", () => {
            if (input.value.replace(/\D/g, "").length !== 11) {
                input.value = ""
            }
        })
    }
}
adicionar.addEventListener("click", () => {
    if (selecionar.value) {
        criarCampo(selecionar.value)
    }
})*/
