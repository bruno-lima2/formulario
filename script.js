const adicionar = document.querySelector(".adicionar")
const campos = document.querySelector(".campos")
const selecionar = document.querySelector(".selecionar")
adicionar.addEventListener("click", () => {
	if (selecionar.value) {
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
			campo.appendChild(campoInput)
			if (selecionar.value === "email") {
				campoInput.placeholder = "Email"
			} else {
				campoInput.placeholder = "Celular"
			}
		}
		const remover = document.createElement("button")
		remover.classList.add("btn", "btn-danger", "remover")
		remover.textContent = "X"
		campo.appendChild(remover)
		campos.appendChild(campo)
		remover.addEventListener("click", () => {
			campo.remove()
		})
	}
})
