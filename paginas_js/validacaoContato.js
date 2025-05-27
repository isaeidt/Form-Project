const form = document.querySelector('form');
const inputNome = document.querySelector('#nome')
const inputTelefone = document.querySelector('#telefone')
const inputEmail = document.querySelector('#email')


form.onsubmit = function(event){
    event.preventDefault()
    validandoNome()
    validandoTelefone()
    validandoEmail()
}


function validandoNome(){
    const valorNome = inputNome.value
     if(valorNome.length < 3 ){
        alert('O nome deve ser maior')
     }
}

function validandoTelefone(){
    const valorTelefone = inputTelefone.value
     if(valorTelefone.length < 8 ){
        alert('O número digitado está incorreto')
     }
}

function validandoEmail(){
    const valorEmail = inputEmail.value
    if(!valorEmail.includes("@")){
        alert('O e-mail digitado está incorreto')
    }
}