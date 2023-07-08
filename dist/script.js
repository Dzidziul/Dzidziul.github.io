const navBar = document.querySelector('[data-navbar-menu]')
const navBarBtn = document.querySelector('[data-navbar-button]')


window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) navBar.classList.remove('mobile')
})

window.addEventListener('load', () => {
    if (window.innerWidth <= 700) navBar.classList.add('mobile')
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 700) navBar.classList.add('mobile')
})


navBarBtn.addEventListener('click', () => {
    navBar.classList.toggle('left');
    navBarBtn.classList.toggle('active');
})

console.lo