const inputEmail = document.getElementById('email');
const button = document.getElementById('button-submit');
const area = document.getElementById('text-area');

function validation(event) {
    if(inputEmail.value === '') {
        alert('Preencha o campo de email');
        inputEmail.focus();
        event.preventDefault();
    }
    if(area.value === '') {
        alert('Preencha o campo de mensagem');
        area.focus();
        event.preventDefault();
    }
};

window.onload = () => {
    button.addEventListener('click', validation);
};
