import { validarFormulario, toggleErro } from './validacoes.js';

const form = document.querySelector('form');
const inputObjetivo = document.querySelector('#objetivo');
const voltar = document.querySelector('#voltar');

const STORAGE_KEY = 'contatoForm';

const projetoSchema = {
  objetivo: { required: false }
}; /*validações do que é necessário no input */

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
    if (Object.keys(errors).length) return; /*const errors = validarFormulario(data, projetoSchema) - 
    Chama a função de validação passando os dados do formulário (data) e o schema de regras (projetoSchema).
    O resultado é um objeto errors onde cada campo inválido vira uma propriedade com a mensagem de erro. 
    Se não houver erro, o objeto fica vazio. exibirErrosNaTela(errors)- Mostra os erros nos campos do formulário, 
    usando a função que adiciona/remover classes e exibe mensagens de erro. if (Object.keys(errors).length) return -
    Se o objeto errors tem alguma chave (ou seja, existe pelo menos um erro), a função de submit é interrompida aqui (return;),
    impedindo o salvamento e o redirecionamento. Se não houver erros, o código continua e o formulário é salvo normalmente.
    Resumindo: Esse bloco valida o formulário, mostra os erros e só deixa salvar/avançar se não houver nenhum erro. */

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
        return {}; /* transforma o json de volta pra String */
    }
}

function saveForm(patch) {
    const current = loadForm();
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...current, ...patch }) /* Cria um novo objeto que contém todas as propriedades do objeto current 
        (os dados já salvos no localStorage) e todas as propriedades do objeto patch (os novos dados que você quer salvar).
        Se houver propriedades com o mesmo nome em current e patch, o valor de patch sobrescreve o de current.
        JSON.stringify(...) transforma esse novo objeto em uma string JSON, que é o formato aceito pelo localStorage. */
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
