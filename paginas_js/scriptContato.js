import { validarFormulario, toggleErro } from './validacoes.js';

const form = document.querySelector('form');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');
const inputEmail = document.querySelector('#email');
const enviar = document.querySelector('#enviar');

const STORAGE_KEY = 'contatoForm';

const contatoSchema = {
  nome:      { required: true, min: 3 },
  telefone:  { required: true, min: 8 },
  email:     { required: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
};


document.addEventListener('DOMContentLoaded', () => {
    const data = loadForm();
    if (inputNome && data.nome) inputNome.value = data.nome;
    if (inputTelefone && data.telefone) inputTelefone.value = data.telefone;
    if (inputEmail && data.email) inputEmail.value = data.email;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      nome: inputNome.value.trim(),
      telefone: inputTelefone.value.trim(),
      email: inputEmail.value.trim()
    };
    const errors = validarFormulario(data, contatoSchema);
    exibirErrosNaTela(errors);
    if (Object.keys(errors).length) return;
    saveForm(data);
    window.location.assign("http://127.0.0.1:5500/paginas_html/empresa.html");
});


function loadForm() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function saveForm(patch) {
    const current = loadForm();
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...current, ...patch })
    );
}

function exibirErrosNaTela(errors) {
  toggleErro(inputNome, errors.nome);
  toggleErro(inputTelefone, errors.telefone);
  toggleErro(inputEmail, errors.email);
}

