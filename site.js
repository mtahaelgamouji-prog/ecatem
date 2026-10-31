(function(){
  // Diaporama
  var slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('.dots button'),i=0,t;
  if(slides.length){
    var go=function(n){i=(n+slides.length)%slides.length;slides.forEach(function(s,k){s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',k===i?'false':'true')});dots.forEach(function(d,k){d.setAttribute('aria-current',k===i?'true':'false')})};
    var auto=function(){clearInterval(t);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;t=setInterval(function(){go(i+1)},6000)};
    dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});
    var p=document.querySelector('.arr.prev'),n=document.querySelector('.arr.next');
    if(p)p.addEventListener('click',function(){go(i-1);auto()});
    if(n)n.addEventListener('click',function(){go(i+1);auto()});
    auto();
  }
  // Formulaire de contact
  var f=document.getElementById('f');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var nom=document.getElementById('nom'),m=document.getElementById('email'),note=document.getElementById('note');
      if(!nom.value.trim()){nom.focus();note.textContent='Veuillez indiquer votre nom.';return}
      if(!m.value.trim()||!m.checkValidity()){m.focus();note.textContent='Veuillez indiquer une adresse e-mail valide.';return}
      note.textContent='Merci, votre message a bien été préparé. (Le formulaire sera relié à votre messagerie lors de la mise en ligne.)';
    });
  }
})();
