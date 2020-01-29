const btn = document.querySelector('.navbar__sidebar--icon');
const sidebar  = document.querySelector('.navigation');
const header  = document.querySelector('.header');

btn.addEventListener('click', function(e) {
    sidebar.classList.toggle('show-sidebar');
});



