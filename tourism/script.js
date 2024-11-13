// FAVORITAR

function favoritar() {
    // pega os elementos do html
    var favoritado = document.getElementById('img-favoritar');
    var texto = document.getElementById('texto-favoritar');

    // verifica se está favoritado e alterna o estado

    // favoritar
    if (favoritado.classList.contains('bx-heart')) {
        favoritado.setAttribute('class', 'bx bxs-heart favoritado'); // coração preenchido
        setTimeout(() => {texto.textContent = "FAVORITADO";}, 100); // muda o texto
    
    //desfavoritar
    } else {
        favoritado.setAttribute('class', 'bx bx-heart'); // volta para coração vazio
        setTimeout(() => {texto.textContent = "FAVORITAR";}, 100); // muda o texto
    }
}

/////////////////////////////////////////////

// AVALIAR 

const estrelas = document.querySelectorAll('.estrela'); // pega os elementos do html

estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {

        resetStars(); // limpa todas as estrelas

        // preenche todas as estrelas até a estrela clicada
        for (let i = 0; i <= index; i++) {
            estrelas[i].firstElementChild.classList.remove('bx-star'); // remove o ícone vazio
            estrelas[i].firstElementChild.classList.add('bxs-star');  // adiciona o ícone preenchido
        }

        // anima a estrela clicada
        estrela.firstElementChild.classList.add('clicked');
        setTimeout(() => {
            estrela.firstElementChild.classList.remove('clicked'); // remove a animação após 0.2s
        }, 200);
    });
});

// limpa todas as estrelas
function resetStars() {
    estrelas.forEach(estrela => {
        estrela.firstElementChild.classList.remove('bxs-star'); // remove o preenchimento
        estrela.firstElementChild.classList.add('bx-star'); // adiciona o ícone vazio
    });
}
