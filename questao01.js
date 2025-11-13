function inserirTitulo() {
    const input = document.getElementById('txt-titulo');
    const titulo = document.getElementById('titulo');
    titulo.innerText = input.value;
    titulo.style.color = 'blue';
}
