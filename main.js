const summary = document.querySelector('summary');
const icon = document.querySelector('.rotate-icon');
let rotated = false;

summary.addEventListener('click', () => {
    if (rotated) {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(90deg)';
    }
    rotated = !rotated;
});

const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const modals = document.querySelectorAll(".modal");
const fades = document.querySelectorAll(".fade");

const toggleModal = (index) => {
    [modals[index], fades[index]].forEach((el) => el.classList.toggle("hide"));
};

openModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});

closeModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});


// --------------------------------------

const botaoContainer = document.getElementById('btn-cont')
const audioModal = document.getElementById('aud-modal')

// cria uma lista de botões usando o metodo map 
const botoes = objetos.map((objeto, indice)=>{
    const botao = document.createElement('button')
    botao.classList.add('botao-txt')

    botao.addEventListener('click', ()=>{
        audioModal.src = objeto.audio
    })
    return botao
})
