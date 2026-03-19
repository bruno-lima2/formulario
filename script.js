function formulario() {
	const selecionar = document.querySelector(".selecionar")
	const adicionar = document.querySelector(".botao_adicionar")
	const containerInputs = document.querySelector(".inputs")
	adicionar.addEventListener("click", () => {
		if (selecionar.value === "email") {
			const campoSelecionado = document.createElement("div")
			campoSelecionado.classList.add("campo_selecionado")
			const campo = document.createElement("input")
			campo.type = "text"
			campo.classList.add("form-control")
			campo.placeholder="Email"
			const remover = document.createElement("button")
			remover.classList.add("btn",  "btn-danger", "botao_remover")
			remover.textContent = "X"
			campoSelecionado.appendChild(campo)
			campoSelecionado.appendChild(remover)
			containerInputs.appendChild(campoSelecionado)
			remover.addEventListener("click", () => {
				campoSelecionado.classList.add("oculto")
			})
		} else if (selecionar.value === "celular") {
			const campoSelecionado = document.createElement("div")
			campoSelecionado.classList.add("campo_selecionado")
			const campo = document.createElement("input")
			campo.type = "text"
			campo.classList.add("form-control")
			campo.placeholder="Celular"
			const remover = document.createElement("button")
			remover.classList.add("btn",  "btn-danger", "botao_remover")
			remover.textContent = "X"
			campoSelecionado.appendChild(campo)
			campoSelecionado.appendChild(remover)
			containerInputs.appendChild(campoSelecionado)
			remover.addEventListener("click", () => {
				campoSelecionado.classList.add("oculto")
			})
		} else if (selecionar.value === "endereco") {
			const campoSelecionado = document.createElement("div")
			campoSelecionado.classList.add("campo_selecionado")
			const campo = document.createElement("textarea")
			campo.classList.add("form-control")
			campo.placeholder="Endereço"
			const remover = document.createElement("button")
			remover.classList.add("btn",  "btn-danger", "botao_remover")
			remover.textContent = "X"
			campoSelecionado.appendChild(campo)
			campoSelecionado.appendChild(remover)
			containerInputs.appendChild(campoSelecionado)
			remover.addEventListener("click", () => {
				campoSelecionado.classList.add("oculto")
			})
		}
	})
}
formulario()
