const form = document.querySelector('form')
const inputEmpresa = document.querySelector('#nomeEmpresa')
const inputFuncionarios = document.querySelector('#funcionarios')
const inputSobre = document.querySelector('#seuNegocio')

form.onsubmit = function(event){
    event.preventDefault()
    salvandoLocalStorage()
}


function salvandoLocalStorage(){
    localStorage.setItem('Empresa', inputEmpresa.value)
    localStorage.setItem('Funcionarios', inputFuncionarios.value)
    localStorage.setItem('Sobre', inputSobre.value)
}