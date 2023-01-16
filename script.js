// Toggle Menu Function

const toggleMenu = document.getElementById('bar')

toggleMenu.addEventListener('click', openMenu)

function openMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

const close = document.getElementById('close')

close.addEventListener('click', closeMenu)

function closeMenu() {
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
}




