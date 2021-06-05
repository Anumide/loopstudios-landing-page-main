const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const close = document.querySelector('#closebtn');

hamburger.addEventListener('click', () =>{
  if(nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
  }else {
      nav.classList.add('hidden');
  }
})

close.addEventListener('click', () =>{
  if(nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
  }else {
      nav.classList.add('hidden');
  }
})
