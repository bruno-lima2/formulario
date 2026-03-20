function formulario() {
	const selecionar = document.querySelector(".selecionar")
	const adicionar = document.querySelector(".adicionar")
	const campos = document.querySelector(".campos")
	adicionar.addEventListener("click", () => {
		if (selecionar.value) {
			const campo = document.createElement("div")
			campo.classList.add("campo")
			let campoInput
			if (selecionar.value === "endereco") {
				campoInput = document.createElement("textarea")
			} else {
				campoInput = document.createElement("input")
				campoInput.type = "text"
			}
			campoInput.classList.add("form-control")
			const placeholders = {
				email: "Email",
				celular: "Celular",
				endereco: "Endereço"
			}
			campoInput.placeholder = placeholders[selecionar.value]
			const remover = document.createElement("button")
			remover.classList.add("btn", "btn-danger", "remover")
			remover.textContent = "X"
			campo.appendChild(campoInput)
			campo.appendChild(remover)
			remover.addEventListener("click", () => {
				campo.remove()
			})
			campos.appendChild(campo)
		}
	})
}
formulario()
