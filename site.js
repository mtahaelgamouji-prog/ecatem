(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b&&m)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
  var s=document.querySelectorAll('.slide'),d=document.querySelectorAll('.dots button'),i=0,t;
  if(s.length){
    var go=function(n){i=(n+s.length)%s.length;s.forEach(function(x,k){x.classList.toggle('on',k===i);x.setAttribute('aria-hidden',k===i?'false':'true')});d.forEach(function(x,k){x.setAttribute('aria-current',k===i?'true':'false')})};
    var auto=function(){clearInterval(t);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;t=setInterval(function(){go(i+1)},6000)};
    d.forEach(function(x,k){x.addEventListener('click',function(){go(k);auto()})});auto();
  }
  var f=document.getElementById('f');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();
    var n=document.getElementById('nom'),m2=document.getElementById('email'),note=document.getElementById('note');
    if(!n.value.trim()){n.focus();note.textContent='Veuillez indiquer votre nom.';return}
    if(!m2.value.trim()||!m2.checkValidity()){m2.focus();note.textContent='Veuillez indiquer une adresse e-mail valide.';return}
    note.textContent='Merci, votre message a bien été préparé. (Le formulaire sera relié à votre messagerie lors de la mise en ligne.)';});
})();
