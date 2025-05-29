
const form = document.querySelector('form')
const inputEmpresa = document.querySelector('#nomeEmpresa')
const inputFuncionarios = document.querySelector('#funcionarios')
const inputSobre = document.querySelector('#seuNegocio')
const voltar = document.querySelector('#voltar')

document.addEventListener('DOMContentLoaded', () => {
    verificandoLocalStorage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validandoEmpresa()){
        salvandoLocalStorage()
        window.location.assign("http://127.0.0.1:5500/paginas_html/projeto.html")
    }
})

voltar.addEventListener('click', () => {
    if (validandoEmpresa()){
        salvandoLocalStorage()
        window.location.assign("http://127.0.0.1:5500/paginas_html/contato.html")
    }
})


function salvandoLocalStorage(){
    localStorage.setItem('Empresa', inputEmpresa.value)
    localStorage.setItem('Funcionarios', inputFuncionarios.value)
    localStorage.setItem('Sobre', inputSobre.value)
}

function verificandoLocalStorage() {
    const localEmpresa = localStorage.getItem("Empresa")
    const localFuncionarios = localStorage.getItem("Funcionarios")
    const localSobre = localStorage.getItem("Sobre")

    if (localEmpresa !== null) {
        inputEmpresa.value = localEmpresa
    }
    if (localFuncionarios !== null) {
        inputFuncionarios.value = localFuncionarios
    }
    if (localSobre !== null) {
        inputSobre.value = localSobre
    }
}

function validandoEmpresa(){
    const valorEmpresa = inputEmpresa.value
    const empresa = document.querySelector('.input_nomeEmpresa')
    if(valorEmpresa == ""){
        empresa.classList.add('disable') 
        return false
    }else{
        empresa.classList.remove('disable') 
    }
    
    return true
}