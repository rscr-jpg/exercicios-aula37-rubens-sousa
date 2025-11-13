function cadastrarUsuario() {
    // Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('uf').value;

    // Converter a data do formato yyyy-mm-dd para dd/mm/aaaa
    let dataFormatada = '';
    if (dataNasc) {
        const partes = dataNasc.split('-'); // [aaaa, mm, dd]
        dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    // Montar a frase usando template string
    const frase = `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    // Exibir no elemento <p id="resultado">
    const resultado = document.getElementById('resultado');
    resultado.textContent = frase;

    // Definir cor e tamanho da fonte
    resultado.style.color = 'green';
    resultado.style.fontSize = '24px';
}
