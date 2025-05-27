const form = document.querySelector('form');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');
const inputEmail = document.querySelector('#email');
const enviar = document.querySelector('#enviar');

form.onsubmit = function (event) {
    event.preventDefault();

    if (validandoNome(true) && validandoTelefone(true) && validandoEmail(true)) {
        validandoNome.nome.classList.remove('disable'); 
        salvandoLocalStorage();
    }else{
        event.preventDefault();
    }
    
    
};

function salvandoLocalStorage() {
    localStorage.setItem('Nome', inputNome.value);
    localStorage.setItem('Telefone', inputTelefone.value);
    localStorage.setItem('Email', inputEmail.value);
}

function validandoNome() {
    const valorNome = inputNome.value;
    const nome = document.querySelector('.input_nome')
    if (valorNome.length < 3) {
        nome.classList.add('disable'); 
        return false;
    }else{
        nome.classList.remove('disable'); 
    }
    return true;
}

function validandoTelefone() {
    const valorTelefone = inputTelefone.value;
    const telefone = document.querySelector('.input_telefone')
    if (valorTelefone.length < 8) {
        telefone.classList.add('disable'); 
        return false;
    }else{
        telefone.classList.remove('disable'); 
    }
    
    return true;
}

function validandoEmail() {
    const valorEmail = inputEmail.value;
    const email =  document.querySelector('.input_email')
    if (!valorEmail.includes("@")) {
        email.classList.add('disable'); 
        return false;
    }else{
        email.classList.remove('disable');
    } 
    return true;
}

