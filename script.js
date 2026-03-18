function formulario() {
	const selecionar = document.querySelector(".formulario_selecionar")
	const adicionar = document.querySelector(".botao_adicionar")
	const container = document.querySelector(".inputs_container")
	adicionar.addEventListener("click", () => {
		const inputs = document.querySelectorAll(".input_" + selecionar.value)
		inputs.forEach(input => {
			if (input.classList.contains("oculto")) {
				input.classList.remove("oculto")
				container.appendChild(input)
			}
		})
	})
	const botoesRemover = document.querySelectorAll(".botao_remover")
	botoesRemover.forEach(remover => {
		remover.addEventListener("click", () => {
			remover.parentElement.classList.add("oculto")
		})
	})
}
formulario()
