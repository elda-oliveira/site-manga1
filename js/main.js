document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-container');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
      menu.classList.toggle('active');
      navbar.classList.toggle('active');
  }

 
  function updateActiveClass() {
      let currentPath = window.location.pathname;
      let links = document.querySelectorAll('.nav-link');

      links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').endsWith(currentPath) || currentPath.endsWith(link.getAttribute('href'))) {
              link.classList.add('active');
          }
      });
  }

  updateActiveClass();
  window.addEventListener('resize', updateActiveClass);
  window.addEventListener('popstate', updateActiveClass);
});
