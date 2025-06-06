export function validarFormulario(data, schema) {
    const errors = {};
    for (const campo in schema) {
        const regras = schema[campo];
        const valor = data[campo] ?? '';

        if (regras.required && !valor.trim()) {
            errors[campo] = 'Obrigatório';
            continue;
        }
        if (regras.min && valor.length < regras.min) {
            errors[campo] = `Mínimo ${regras.min} caracteres`;
            continue;
        }
        if (regras.regex && !regras.regex.test(valor)) {
            errors[campo] = 'Formato inválido';
            continue;
        }
    }
    return errors;
}

export function toggleErro(inputEl, msg) {
    const box = inputEl.parentElement;
    if (box) {
        box.classList.toggle('disable', Boolean(msg));
        let span = box.querySelector('.error-msg');
        if (!span) {
            span = document.createElement('span');
            span.className = 'error-msg';
            box.appendChild(span);
        }
        span.textContent = msg || '';
    }
}
