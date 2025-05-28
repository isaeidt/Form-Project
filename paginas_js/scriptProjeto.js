const form = document.querySelector('form')
const inputObjetivo = document.querySelector('#objetivo')
const voltar = document.querySelector('#voltar')

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    salvandoLocalStorage()
    prospostaFinalizada()
    localStorage.clear()
})

voltar.addEventListener('click', () =>{
    window.location.assign("http://127.0.0.1:5500/paginas_html/empresa.html")
})


function salvandoLocalStorage(){
    localStorage.setItem('Objetivo', inputObjetivo.value)
}

function prospostaFinalizada(){
    const localNome = localStorage.getItem("Nome")
    const localTelefone = localStorage.getItem("Telefone")
    const localEmail = localStorage.getItem("Email")
    const localEmpresa = localStorage.getItem("Empresa")
    const localFuncionarios = localStorage.getItem("Funcionarios")
    const localSobre = localStorage.getItem("Sobre")
    const localObjetivo = localStorage.getItem("Objetivo")

    console.log(
        `Nome: ${localNome}
         \nTelefone: ${localTelefone} 
         \nEmail: ${localEmail}
         \nEmpresa: ${localEmpresa}
         \nFuncionários: ${localFuncionarios}
         \nSobre: ${localSobre}
         \nObjetivo: ${localObjetivo}`
    )
}