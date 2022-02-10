let imgs = document.querySelectorAll('[data-anima]')

function animaScroll(params) {
    const h = window.scrollY
    console.log(h)
    imgs.forEach(img => {
        console.log(img.offsetTop)
        if (h > 400) {
            img.classList.add('animacao')
        }
    })
}

window.addEventListener('scroll', () => animaScroll())