const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const close = document.querySelector('#closebtn');

hamburger.addEventListener('click', () =>{
  nav.classList.remove('-left-full');
  nav.classList.add('left-0');
})

close.addEventListener('click', () =>{
  nav.classList.remove('left-0');
  nav.classList.add('-left-full');
})
