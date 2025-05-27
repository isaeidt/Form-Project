const form = document.querySelector('form')
const inputObjetivo = document.querySelector('#objetivo')


form.onsubmit = function(event){
    event.preventDefault()
    salvandoLocalStorage()
}


function salvandoLocalStorage(){
    localStorage.setItem('Objetivo', inputObjetivo.value)
}