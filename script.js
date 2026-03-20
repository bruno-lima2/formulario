function formulario() {
	const selecionar = document.querySelector(".selecionar")
	const adicionar = document.querySelector(".adicionar")
	const campos = document.querySelector(".campos")
	adicionar.addEventListener("click", () => {
		const campoSelecionado = selecionar.value
		if (campoSelecionado === "email") {
			const campo = document.createElement("div")
			campo.classList.add("campo")
			const campoInput = document.createElement("input")
			campoInput.type = "text"
			campoInput.classList.add("form-control")
			campoInput.placeholder = "Email"
			const remover = document.createElement("button")
			remover.classList.add("btn", "btn-danger", "remover")
			remover.textContent = "X"
			campo.appendChild(campoInput)
			campo.appendChild(remover)
			campos.appendChild(campo)
			remover.addEventListener("click", () => {
				campo.remove()
			})
		} else if (campoSelecionado === "celular") {
			const campo = document.createElement("div")
			campo.classList.add("campo")
			const campoInput = document.createElement("input")
			campoInput.type = "text"
			campoInput.classList.add("form-control")
			campoInput.placeholder = "Celular"
			const remover = document.createElement("button")
			remover.classList.add("btn", "btn-danger", "remover")
			remover.textContent = "X"
			campo.appendChild(campoInput)
			campo.appendChild(remover)
			campos.appendChild(campo)
			remover.addEventListener("click", () => {
				campo.remove()
			})			
		} else if (campoSelecionado === "endereco") {
			const campo = document.createElement("div")
			campo.classList.add("campo")
			const campoTextarea = document.createElement("textarea")
			campoTextarea.classList.add("form-control")
			campoTextarea.placeholder = "Endereço"
			const remover = document.createElement("button")
			remover.classList.add("btn", "btn-danger", "remover")
			remover.textContent = "X"
			campo.appendChild(campoTextarea)
			campo.appendChild(remover)
			campos.appendChild(campo)	
			remover.addEventListener("click", () => {
				campo.remove()
			})		
		}
	})
}
formulario()
