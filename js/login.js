const Cadastro = document.querySelector('.Cadastro');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    Cadastro.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    Cadastro.classList.remove('active');
});

