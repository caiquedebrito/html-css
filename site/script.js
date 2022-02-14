let imgs = document.querySelectorAll('[data-anima]')

// Função para a transição das imagens
function animaScroll() {
    let posImg = imgs[1].offsetTop //Posição Y da imagem no documento
    let pixelScroll = window.scrollY //quantidade de pixel "rolado"
    let screenHeight = screen.availHeight //altura do navegador

    if (pixelScroll >= posImg*0.25 && pixelScroll >= screen.availHeight * 0.25) {
        imgs.forEach(img => img.classList.add('transition'))
    }
}

window.addEventListener('scroll', () => animaScroll())