const inputEmail = document.getElementById('email');
const button = document.getElementById('button-submit');
const area = document.getElementById('text-area');

function validation() {
    if(inputEmail.value === '') {
        alert('Preencha o campo de email');
        inputEmail.focus();
    }
    if(area.value === '') {
        alert('Preencha o campo de mensagem');
        area.focus();
    }
};

window.onload = () => {
    button.addEventListener('click', validation);
};
