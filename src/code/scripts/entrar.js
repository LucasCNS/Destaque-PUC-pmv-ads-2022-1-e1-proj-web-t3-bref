function Pg() {
	/* Mostrar senhas */
	const Btn = document.querySelector("#primeiroOlho")
	const BtnConfirm = document.querySelector("#verConfirmarSenha")
	const BtnSenhaCadastro = document.querySelector("#verSenha")
	/* Inputs */
	const InputSenha = document.querySelector("#senha")
	const InputEmail = document.querySelector("#email")
	const InputNome = document.querySelector("#nomeCadastro")
	const InputData = document.querySelector("#dataCadastro")
	const InputEmailCadastro = document.querySelector("#emailCadastro")
	const InputSenhaCadastro = document.querySelector("#senhaCadastro")
	const InputConfirmarSenha = document.querySelector("#confirmarSenhaCadastro")
	/* Validações */
	var validNome = false
	var validData = false
	var validEmail = false
	var validSenhaCadastro = false
	var validConfirmarSenha = false
	var contaValid = {
		nome: '',
		email: '',
		senha: '',
	}
	/* Labels */
	const LabelNome	= document.querySelector("#labelNome")
	const LabelData	= document.querySelector("#labelData")
	const LabelEmail	= document.querySelector("#labelEmail")
	const LabelSenhaCadastro	= document.querySelector("#labelSenhaCadastro")
	const LabelConfirmarSenha	= document.querySelector("#labelConfirmarSenha")
	/* Mensagens */
	const msgEntrar = document.querySelector("#msgEntrar")		
	const msgCadastro = document.querySelector("#msgCadastro")
	

	function NavegacaoAbas() {
    
    const html = {
			links: [...document.querySelector('.links-abas').children],
			contents: [...document.querySelector('.conteudo-abas').children],
			openTab: document.querySelector('[data-open]')
    }

    function esconderTodoConteudoAbas (){
			html.contents.forEach(section => {
					section.style.display = "none"
			})
    }

    function mostrarAbaAtual(id){

			const conteudoAba	 = document.querySelector('#' + id);
			
			conteudoAba.style.display = "block"
    }

    function selecionarAba(event) {

        esconderTodoConteudoAbas()

        const target = event.currentTarget
        mostrarAbaAtual(target.dataset.id)
    }

    function observarMudancas(){
        html.links.forEach(tab => {
            tab.addEventListener('click', selecionarAba)
        })
    }

    function iniciar(){
        esconderTodoConteudoAbas()
        observarMudancas()

        html.openTab.click()
    }

    return {
        iniciar
    }
	}

	function MostrarSenhas() {

		function mostrarSenhaEntrar() {
			
				Btn.addEventListener("click", ()=>{
					
					if(InputSenha.getAttribute("type") == "password"){
							InputSenha.setAttribute("type" , "type")
						} else {
							InputSenha.setAttribute("type", "password")
						}
				}) 
		}

		function mostrarSenhaCadastro() {
			
			BtnSenhaCadastro.addEventListener("click", ()=>{

				if(InputSenhaCadastro.getAttribute("type") == "password"){
						InputSenhaCadastro.setAttribute("type" , "type")
				} else {
						InputSenhaCadastro.setAttribute("type", "password")
				}
			})
		}

		function mostrarConfirmarSenhaCadastro() {

				BtnConfirm.addEventListener("click", ()=>{

					if(InputConfirmarSenha.getAttribute("type") == "password"){
							InputConfirmarSenha.setAttribute("type" , "type")
					} else {
							InputConfirmarSenha.setAttribute("type", "password")
					}
				})
		}

		function iniciar(){
			mostrarSenhaEntrar()
			mostrarSenhaCadastro()
			mostrarConfirmarSenhaCadastro()
		}

		return {
				iniciar
		}
	}

	function CompararSenhas() {

		function compararSenhaComConfirmar(){
			InputSenhaCadastro.addEventListener("keyup", () => {

				if(InputSenhaCadastro.value != InputConfirmarSenha.value) {
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
					LabelConfirmarSenha.textContent = "Confirmar a senha* Deve ser igual a senha."
					validSenhaCadastro = false
				} else {
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					LabelConfirmarSenha.textContent = "Confirmar a senha"
					validSenhaCadastro = true
				}
			})
		}

		function compararConfirmarComSenha() {
			InputConfirmarSenha.addEventListener("keyup", () => {

				if(InputConfirmarSenha.value != InputSenhaCadastro.value){
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
					LabelConfirmarSenha.textContent = "Confirmar a senha* Deve ser igual a senha."
					validConfirmarSenha = false
				} else {
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					LabelConfirmarSenha.textContent = "Confirmar a senha"
					validConfirmarSenha = true
				}
			})
		}

		/* InputConfirmarSenha.addEventListener("keyup", () => {
			
			if(InputConfirmarSenha.value.length <= 5){
				InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
				LabelConfirmarSenha.textContent = "Confirmar a senha* lalalala."
			} 
		}) */

		function iniciar(){
			compararSenhaComConfirmar()
			compararConfirmarComSenha()
		}

		return {
			iniciar
		}
	}

	function ValidacaoInputs() {
		
		function validarEmail() {
			if(!InputEmailCadastro.checkValidity()){
			}
		}

		/* Validação Nome */
		InputNome.addEventListener("keyup", ()=>{

			if(InputNome.value.length <= 7){
				LabelNome.textContent = "Nome * Insira seu nome e sobrenome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				InputNome.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				validNome = false
			} else {
				LabelNome.textContent = "Nome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputNome.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
				validNome = true
			}

			if(InputNome.value.length > 30){
				LabelNome.textContent = "Nome * Apenas o nome e sobrenome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				validNome = false
			} 
		})

		/* Validação Email */
		InputEmailCadastro.addEventListener("keyup", ()=>{

			if(!InputEmailCadastro.checkValidity()){
				LabelEmail.textContent = "Email * Este email não é válido"
				LabelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				InputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				validEmail = false
			} else {
				LabelEmail.textContent = "Email"
				LabelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
				validEmail = true
			}

		})

		/* Validação Senha */
		InputSenhaCadastro.addEventListener("keyup", ()=>{

			if(InputSenhaCadastro.value.length <= 5){
				LabelSenhaCadastro.textContent = "Senha * Insira no mínimo 6 dígitos"
				LabelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				validSenhaCadastro = false
			} else {
				LabelSenhaCadastro.textContent = "Senha"
				LabelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
				validSenhaCadastro = true 

			}
		})

		/* Validação Confirmar Senha */

		function validaData(){
			var data = document.getElementById("dataCadastro").value; // pega o valor do input
			data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
			var data_array = data.split("-"); // quebra a data em array
			
			// para o IE onde será inserido no formato dd/MM/yyyy
			if(data_array[0].length != 4){
				 data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
			}
			
			// comparo as datas e calculo a idade
			var hoje = new Date();
			var nasc  = new Date(data);
			var idade = hoje.getFullYear() - nasc.getFullYear();
			var m = hoje.getMonth() - nasc.getMonth();
			if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
			
			if(idade < 18){
				 alert("Pessoas menores de 18 não podem se cadastrar.");
				 validData = false
				 return false;
			}

			// se for maior que 60 não vai acontecer nada!
			validData = true
			return false;

		}
			InputData.addEventListener("change", () =>{
				validadata();
			})

		function iniciar(){
			validarEmail()
			validaData()
		}

		return {
			iniciar
		}
	}

	function entrar() {
		
		listaUser = JSON.parse(localStorage.getItem("listaUser"))
		listaUser.forEach ((item) => {
			if(email.value == item.emailCad && senha.value == item.senhaCad){
				contaValid = {
					nome: item.nomeCad,
					email: item.emailCad,
					senha: item.senhaCad,
				}

			}
		})
			if (email.value == contaValid.email && senha.value == contaValid.senha){
				InputEmail.setAttribute ("style", "box-shadow: 0px 0px 3px green; border-color: green")
				InputSenha.setAttribute ("style", "box-shadow: 0px 0px 3px green; border-color: green")
				msgEntrar.setAttribute ("style", "display: block; text-shadow: 0px 0px 1px green; color: green")
				msgEntrar.textContent = "Login efetuado com sucesso, redirecionando..."
				
				setTimeout(()=>{
					window.location.href = "../html/reserva.html"
				}, 5000)

			}else {
				InputEmail.setAttribute ("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				InputSenha.setAttribute ("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				msgEntrar.setAttribute ("style", "display: block; text-shadow: 0px 0px 1px crimson; color: crimson")
				msgEntrar.textContent = "Email ou senha incorretos."
				InputEmail.focus()
			}
		}
		document.getElementById("btnEntrar").addEventListener("click", entrar);

	function cadastrar() {
		if(validNome && validData && validEmail && validSenhaCadastro && validConfirmarSenha){
			let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

			listaUser.push(
				{
					nomeCad: nomeCadastro.value,
					dataCad: dataCadastro.value,
					emailCad: emailCadastro.value,
					senhaCad: senhaCadastro.value
				}
			)

			localStorage.setItem("listaUser", JSON.stringify(listaUser))
			
			msgCadastro.textContent = "Cadastrando conta, aguarde..."
			msgCadastro.setAttribute("style" , "display: block; text-shadow: 0px 0px 1px green; color: green")
				
				setTimeout(()=>{
					window.location.href = "../html/entrar.html"
				}, 5000)

		} else {
			msgCadastro.textContent = "Preencha todos os campos para cadastrar"
			msgCadastro.setAttribute("style" , "display: block; text-shadow: 0px 0px 1px crimson; color: crimson")
		}
	}
	document.getElementById("btnCadastrar").addEventListener("click", cadastrar);
	
	function iniciar() {

		const navegacaoAbas = NavegacaoAbas()
		navegacaoAbas.iniciar();

		const mostrarSenhas = MostrarSenhas()
		mostrarSenhas.iniciar();

		const compararSenhas = CompararSenhas()
		compararSenhas.iniciar();

		const validacaoInputs = ValidacaoInputs()
		validacaoInputs.iniciar();

	}
	
	return {
		iniciar
	}

	/* Máscaras */

}	

window.addEventListener('load', () => {
	const pg = Pg()
	pg.iniciar()
})