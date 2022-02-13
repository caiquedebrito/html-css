let imgs = document.querySelectorAll('[data-anima]')
// const img1 = document.getElementsByClassName('img1')
function animaScroll() {
    let top = window.scrollY 
    imgs.forEach(img => {
        if (top > img.offsetTop) {
            img.classList.add('animacao')
        }
    })
    // Pega as posições das images no eixo y
    // let img1Y = imgs[0].getBoundingClientRect().y
    // if (img1Y < 350) {
    //     for (let img of imgs) {
    //         img.classList.add('animacao')
    //     }
    // }

}

window.addEventListener('scroll', () => animaScroll())