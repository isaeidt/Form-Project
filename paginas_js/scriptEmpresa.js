import { validarFormulario, toggleErro } from './validacoes.js';

const form = document.querySelector('form');
const inputEmpresa = document.querySelector('#nomeEmpresa');
const inputFuncionarios = document.querySelector('#funcionarios');
const inputSobre = document.querySelector('#seuNegocio');
const voltar = document.querySelector('#voltar');

const STORAGE_KEY = 'contatoForm';

const empresaSchema = {
  empresa: { required: true },
  funcionarios: { required: false },
  sobre: { required: false }
};


document.addEventListener('DOMContentLoaded', () => {
    const data = loadForm();
    if (inputEmpresa && data.empresa) inputEmpresa.value = data.empresa;
    if (inputFuncionarios && data.funcionarios) inputFuncionarios.value = data.funcionarios;
    if (inputSobre && data.sobre) inputSobre.value = data.sobre;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      empresa: inputEmpresa.value.trim(),
      funcionarios: inputFuncionarios.value.trim(),
      sobre: inputSobre.value.trim()
    };
    const errors = validarFormulario(data, empresaSchema);
    exibirErrosNaTela(errors);
    if (Object.keys(errors).length) return;
    saveForm(data);
    window.location.assign("http://127.0.0.1:5500/paginas_html/projeto.html");
});

voltar.addEventListener('click', () => {
    saveForm({
        empresa: inputEmpresa.value.trim(),
        funcionarios: inputFuncionarios.value.trim(),
        sobre: inputSobre.value.trim()
    });
    window.location.assign("http://127.0.0.1:5500/paginas_html/contato.html");
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
  toggleErro(inputEmpresa, errors.empresa);
  toggleErro(inputFuncionarios, errors.funcionarios);
  toggleErro(inputSobre, errors.sobre);
}