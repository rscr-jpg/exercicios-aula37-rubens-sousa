function mudarForma() {
    const forma = document.getElementById('forma');
    const botao = document.getElementById('btn-forma');

    if (forma.style.borderRadius === '50%') {
        // Muda para quadrado
        forma.style.borderRadius = '0%';
        botao.innerText = 'Retornar forma original';
    } else {
        // Muda para círculo
        forma.style.borderRadius = '50%';
        botao.innerText = 'Mudar forma';
    }
}
