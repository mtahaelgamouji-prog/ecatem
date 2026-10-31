(function(){
  var hd=document.querySelector('.hd');
  window.addEventListener('scroll',function(){hd.classList.toggle('sc',window.scrollY>10)},{passive:true});
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rotate(items,dots,ms){var i=0,t;if(!items.length)return;
    function go(n){i=(n+items.length)%items.length;items.forEach(function(x,k){x.classList.toggle('on',k===i);if(x.hasAttribute('aria-hidden'))x.setAttribute('aria-hidden',k===i?'false':'true')});if(dots)dots.forEach(function(d,k){d.setAttribute('aria-current',k===i?'true':'false')})}
    function auto(){clearInterval(t);if(!rm)t=setInterval(function(){go(i+1)},ms)}
    if(dots)dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});auto();}
  rotate([].slice.call(document.querySelectorAll('.sl')),[].slice.call(document.querySelectorAll('.sldots button')),6000);
  rotate([].slice.call(document.querySelectorAll('.ci')),null,2500);
  var tr=document.querySelector('.track');
  if(tr){var fit=function(){tr.parentNode.classList.toggle('fit',tr.scrollWidth<=tr.clientWidth+2)};fit();window.addEventListener('resize',fit);window.addEventListener('load',fit);document.querySelector('.carb.prev').addEventListener('click',function(){tr.scrollLeft-=340});document.querySelector('.carb.next').addEventListener('click',function(){tr.scrollLeft+=340})}
  var f=document.getElementById('f');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();
    var n=document.getElementById('nom'),em=document.getElementById('email'),note=document.getElementById('note');
    if(!n.value.trim()){n.focus();note.textContent='Veuillez indiquer votre nom.';return}
    if(!em.value.trim()||!em.checkValidity()){em.focus();note.textContent='Veuillez indiquer une adresse e-mail valide.';return}
    note.textContent='Merci, votre message a bien été préparé. (Le formulaire sera relié à votre messagerie lors de la mise en ligne.)';});
  var fb=document.querySelectorAll('.pk-filters button');
  fb.forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');
    fb.forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on?'true':'false')});
    document.querySelectorAll('.pk').forEach(function(p){p.hidden=!(f==='all'||p.getAttribute('data-cat')===f)})})});
  try{var q=new URLSearchParams(location.search).get('produit');
    if(q&&document.getElementById('msg')){var sel=document.getElementById('prod');
      if(sel&&/parasol/i.test(q)){for(var i=0;i<sel.options.length;i++){if(/parasol/i.test(sel.options[i].text))sel.selectedIndex=i}}
      var m=document.getElementById('msg');if(!m.value)m.value='Bonjour, je souhaite un devis pour : '+q+'.\n'}}catch(e){}
})();
