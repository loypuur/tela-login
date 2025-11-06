const form = document.getElementById('formLogin');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;

  if (login === '' || senha === '') {
    resultado.textContent = 'Preencha login e senha.';
    resultado.style.color = 'crimson';
    return;
  }

  resultado.style.color = '#333';
  resultado.textContent = `Login: ${login} | Senha: ${senha}`;

});
