const elementos = document.querySelectorAll('[data-anima]')
const animacaoClass = 'animacao'

function animaScroll() {
    const topoPaginaNaJanela = window.scrollY + 450
    console.log("top " + topoPaginaNaJanela)
    elementos.forEach(elemento => {
        console.log(elemento.offsetTop)
        if (topoPaginaNaJanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        } //else {
         //   elemento.classList.remove(animacaoClass)
        //}
    } )
}

if (elementos.length) {
    window.addEventListener('scroll', () => animaScroll())
}

const janelaModal = document.getElementById('janelaModal');

function cliqueModal(img) {
    
    const imgModal = document.getElementById('imgModal');
    const txtModal = document.getElementById('txtModal');
    
    janelaModal.classList.remove('escondeJanelaModal')
    janelaModal.classList.add('mostraJanelaModal')

    imgModal.setAttribute('src', img.src)
    txtModal.innerText  = img.alt
}

const btnFechar = document.getElementById('btnFechar')

btnFechar.onclick = () => {
    janelaModal.classList.add('escondeJanelaModal')
}


