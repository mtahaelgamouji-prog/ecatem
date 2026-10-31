(function(){
  // Diaporama (page d'accueil)
  var slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('.dots button'),i=0,t;
  if(slides.length){
    var go=function(n){i=n;slides.forEach(function(s,k){s.classList.toggle('on',k===n);s.setAttribute('aria-hidden',k===n?'false':'true')});dots.forEach(function(d,k){d.setAttribute('aria-current',k===n?'true':'false')})};
    var auto=function(){clearInterval(t);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;t=setInterval(function(){go((i+1)%slides.length)},6000)};
    dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});
    auto();
  }
  // Formulaire (page contact)
  var f=document.getElementById('f');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var n=document.getElementById('nom'),m=document.getElementById('email'),note=document.getElementById('note');
      if(!n.value.trim()){n.focus();note.textContent='Veuillez indiquer votre nom.';return}
      if(!m.value.trim()||!m.checkValidity()){m.focus();note.textContent='Veuillez indiquer une adresse e-mail valide.';return}
      note.textContent='Merci. Dans la version en ligne, votre message serait transmis à ECATEM.';
    });
  }
})();
