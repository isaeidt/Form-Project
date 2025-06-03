import { validarFormulario, toggleErro } from './validacoes.js';

const form = document.querySelector('form');
const inputObjetivo = document.querySelector('#objetivo');
const voltar = document.querySelector('#voltar');

const STORAGE_KEY = 'contatoForm';

const projetoSchema = {
  objetivo: { required: false }
};

document.addEventListener('DOMContentLoaded', () => {
    const data = loadForm();
    if (inputObjetivo && data.objetivo) inputObjetivo.value = data.objetivo;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      objetivo: inputObjetivo.value.trim()
    };
    const errors = validarFormulario(data, projetoSchema);
    exibirErrosNaTela(errors);
    if (Object.keys(errors).length) return;
    saveForm(data);
    prospostaFinalizada();
    clearForm();
});

voltar.addEventListener('click', () => {
    saveForm({ objetivo: inputObjetivo.value.trim() });
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

function clearForm() {
    localStorage.removeItem(STORAGE_KEY);
}

function exibirErrosNaTela(errors) {
  toggleErro(inputObjetivo, errors.objetivo);
}

function prospostaFinalizada() {
    const data = loadForm();
    console.log(
        `Nome: ${data.nome}\nTelefone: ${data.telefone}\nEmail: ${data.email}\nEmpresa: ${data.empresa}\nFuncionários: ${data.funcionarios}\nSobre: ${data.sobre}\nObjetivo: ${data.objetivo}`
    );
}
