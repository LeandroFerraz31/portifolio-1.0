// Obtém o elemento de navegação
const nav = document.getElementById('nav-bar');

// Obtém os itens do menu
const menuItems = nav.querySelectorAll('.menu a');

// Adiciona um manipulador de evento para cada item do menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe "active" de todos os itens do menu
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Adiciona a classe "active" ao item de menu atualmente clicado
    item.classList.add('active');
  });
});
