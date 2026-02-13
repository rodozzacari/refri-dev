let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let header = document.querySelector('header');

let count = list.length 
let active = 0;

console.log(list)

function updateHeaderColor() {
    let backgroundColor = getComputedStyle(list[active]).getPropertyValue('--background').trim();
    header.style.setProperty('--header-background', backgroundColor);
}

// Atualizar cor do header no carregamento da página
updateHeaderColor();

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
    updateHeaderColor();
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
    updateHeaderColor();
}
