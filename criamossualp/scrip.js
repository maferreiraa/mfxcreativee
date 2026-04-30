document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // CONTROLE DO MENU SANDUÍCHE E OVERLAY
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const menuOverlay = document.getElementById('menu-overlay');
  const navItems = document.querySelectorAll('.nav-item');

  function closeMenu() {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
  }

  // Abrir/Fechar ao clicar no sanduíche
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  // Fechar ao clicar no fundo escuro
  menuOverlay.addEventListener('click', closeMenu);

  // Fechar ao clicar em um link (Comportamento de One-Page)
  navItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // ==========================================
  // CONTROLE DO FAQ (ACCORDION/SANFONA)
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Fecha outros itens que estejam abertos
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Abre/Fecha o item clicado
      item.classList.toggle('active');
    });
  });

});
