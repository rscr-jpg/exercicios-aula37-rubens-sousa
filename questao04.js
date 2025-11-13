function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const mensagem = document.getElementById('mensagem');

    // Regex para validar o formato do CPF
    const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (nome === '' || cpf === '') {
        mensagem.style.color = 'red';
        mensagem.innerText = 'Os campos Nome e CPF são obrigatórios.';
    } else if (!cpfValido.test(cpf)) {
        mensagem.style.color = 'red';
        mensagem.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
    } else {
        mensagem.style.color = 'green';
        mensagem.innerText = 'Cadastro validado com sucesso!';
    }
}
