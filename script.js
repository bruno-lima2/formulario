function formulario() {
	const selecao = document.querySelector(".formulario_selecao")
	const adicionar = document.querySelector(".botao_adicionar")
	const containerInputs = document.querySelector(".container_inputs")
	const botoesRemover = document.querySelectorAll(".botao_remover")
	adicionar.addEventListener("click", () => {
		const inputs = document.querySelectorAll(".container_" + selecao.value)
		inputs.forEach(input => {
			if (input.classList.contains("oculto")) {
				input.classList.remove("oculto")
				containerInputs.appendChild(input)
			}
		})
	})
	botoesRemover.forEach(remover => {
	remover.addEventListener("click", () => {
		const container = remover.parentElement
		container.classList.add("oculto")
	})
})
}
formulario()
