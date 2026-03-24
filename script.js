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
		validarCampos(campoTextarea)
	} else {
		const campoInput = document.createElement("input")
		campoInput.classList.add("form-control")
		if (selecionar.value === "email") {
			campoInput.placeholder = "Email"
			validarCampos(campoInput)
		} else if (selecionar.value === "celular") {
			campoInput.placeholder = "Celular"
			validarCampos(campoInput)
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
function validarCampos(campo) {
	campo.addEventListener("blur", () => {
		if (!campo.value) {
			campo.classList.add("is-invalid")
		} else if (campo.value) {
			campo.classList.remove("is-invalid")
		}
		if (campo.placeholder === "Celular") {
			if (campo.value.replace(/\D/g, "").length !== 11) {
				campo.classList.add("is-invalid")
			} else if (campo.value.replace(/\D/g, "").length === 11) {
				campo.classList.remove("is-invalid")
			}
		}
	})
}
adicionar.addEventListener("click", () => {
	if (selecionar.value) {
		criarCampo()
	}
})
/*const adicionar = document.querySelector(".adicionar");
const selecionar = document.querySelector(".selecionar");
const campos = document.querySelector(".campos");

function criarCampo() {
    const campo = document.createElement("div");
    campo.classList.add("campo", "mb-2");
    campos.appendChild(campo);

    if (selecionar.value === "endereco") {
        const campoTextarea = document.createElement("textarea");
        campoTextarea.classList.add("form-control");
        campoTextarea.placeholder = "Endereço";
        campo.appendChild(campoTextarea);
        validarCampos(campoTextarea);
    } else {
        const campoInput = document.createElement("input");
        campoInput.classList.add("form-control");

        if (selecionar.value === "email") {
            campoInput.placeholder = "Email";
            validarCampos(campoInput);
        } else if (selecionar.value === "celular") {
            campoInput.placeholder = "Celular";
            validarCampos(campoInput);
            mascaraCelular(campoInput); // aplica a máscara
        }

        campo.appendChild(campoInput);
    }

    criarBotao(campo);
}

function criarBotao(campo) {
    const remover = document.createElement("button");
    remover.textContent = "X";
    remover.classList.add("btn", "btn-danger", "remover", "ms-2");
    remover.addEventListener("click", () => {
        campo.remove();
    });
    campo.appendChild(remover);
}

function validarCampos(campo) {
    campo.addEventListener("blur", () => {
        if (!campo.value) {
            campo.classList.add("is-invalid");
        } else {
            campo.classList.remove("is-invalid");
        }

        if (campo.placeholder === "Celular") {
            const numeros = campo.value.replace(/\D/g, "");
            if (numeros.length !== 11) {
                campo.classList.add("is-invalid");
            } else {
                campo.classList.remove("is-invalid");
            }
        }
    });
}

function mascaraCelular(campo) {
    campo.addEventListener("input", () => {
        let valor = campo.value.replace(/\D/g, ""); // mantém só números
        if (valor.length > 11) valor = valor.slice(0, 11);

        if (valor.length > 7) { 
            // só aplica o traço quando há pelo menos 8 números
            // (DDD + primeiro dígito + 4 números) => total mínimo 8
            valor = `(${valor.slice(0,2)}) ${valor.slice(2,3)} ${valor.slice(3,7)}-${valor.slice(7)}`;
        } else if (valor.length > 3) { 
            // depois do primeiro dígito e alguns números
            valor = `(${valor.slice(0,2)}) ${valor.slice(2,3)} ${valor.slice(3)}`;
        } else if (valor.length > 2) { 
            // logo após digitar o primeiro dígito do número
            valor = `(${valor.slice(0,2)}) ${valor.slice(2)}`;
        } else if (valor.length > 0) { 
            // enquanto só está digitando o DDD
            valor = `(${valor}`;
        }

        campo.value = valor;
    });
}

adicionar.addEventListener("click", () => {
    if (selecionar.value) {
        criarCampo();
    }
});*/
