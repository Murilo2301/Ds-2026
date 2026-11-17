// Abre e fecha o menu no celular.
const botaoMenu = document.querySelector('.botao-menu');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  const menuEstaAberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', menuEstaAberto);
});

// Curiosidades mostradas pelo botão no fim da página.
const curiosidades = [
  'O GPS também pode ajudar a orientar máquinas no campo.',
  'Um sensor pode medir a umidade do solo.',
  'Drones ajudam a observar plantações e pastagens de cima.',
  'A ordenhadeira ajuda na retirada do leite, mas a higiene continua necessária.'
];

const botaoCuriosidade = document.querySelector('#botao-curiosidade');
const textoCuriosidade = document.querySelector('#texto-curiosidade');
let numeroCuriosidade = 0;

botaoCuriosidade.addEventListener('click', () => {
  numeroCuriosidade = (numeroCuriosidade + 1) % curiosidades.length;
  textoCuriosidade.textContent = curiosidades[numeroCuriosidade];
});
