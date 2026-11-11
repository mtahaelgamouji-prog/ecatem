(function(){
  var L=(document.documentElement.lang||'fr').slice(0,2);
  var M={fr:{name:'Veuillez indiquer votre nom.',mail:'Veuillez indiquer une adresse e-mail valide.',ok:'Merci, votre message a bien été préparé. (Le formulaire sera relié à votre messagerie lors de la mise en ligne.)',quote:'Bonjour, je souhaite un devis pour : '},
  en:{name:'Please enter your name.',mail:'Please enter a valid email address.',ok:'Thank you, your message is ready. (The form will be connected to your mailbox when the site goes live.)',quote:'Hello, I would like a quote for: '},
  ar:{name:'يرجى إدخال اسمكم.',mail:'يرجى إدخال بريد إلكتروني صحيح.',ok:'شكراً، تم تجهيز رسالتكم. (سيتم ربط النموذج ببريدكم عند الإطلاق.)',quote:'مرحباً، أرغب في الحصول على عرض سعر لـ: '}}[L]||{};
  var hd=document.querySelector('.hd');
  window.addEventListener('scroll',function(){hd.classList.toggle('sc',window.scrollY>10)},{passive:true});
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rotate(items,dots,ms,o){var i=0,t;o=o||{};if(!items.length)return;
    function go(n){i=(n+items.length)%items.length;items.forEach(function(x,k){x.classList.toggle('on',k===i);if(x.hasAttribute('aria-hidden'))x.setAttribute('aria-hidden',k===i?'false':'true')});if(dots)dots.forEach(function(d,k){d.setAttribute('aria-current',k===i?'true':'false')});if(o.change)o.change(i)}
    function auto(){clearInterval(t);if(!rm)t=setInterval(function(){go(i+1)},ms)}
    if(dots)dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});
    if(o.prev)o.prev.addEventListener('click',function(){go(i-1);auto()});
    if(o.next)o.next.addEventListener('click',function(){go(i+1);auto()});
    if(o.change)o.change(0);auto();}
  var sls=[].slice.call(document.querySelectorAll('.sl')),peek=document.querySelector('.slnext');
  rotate(sls,[].slice.call(document.querySelectorAll('.sldots button')),6500,{prev:document.querySelector('.slprev'),next:document.querySelector('.slnx'),change:function(k){if(!peek)return;var im=sls[(k+1)%sls.length].querySelector('.slimg');if(im){peek.style.backgroundImage='url("'+(im.currentSrc||im.src)+'")'}}});
  rotate([].slice.call(document.querySelectorAll('.ci')),null,2500);
  var tr=document.querySelector('.track');
  if(tr){var fit=function(){tr.parentNode.classList.toggle('fit',tr.scrollWidth<=tr.clientWidth+2)};fit();window.addEventListener('resize',fit);window.addEventListener('load',fit);document.querySelector('.carb.prev').addEventListener('click',function(){tr.scrollLeft-=340});document.querySelector('.carb.next').addEventListener('click',function(){tr.scrollLeft+=340})}
  var f=document.getElementById('f');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();
    var n=document.getElementById('nom'),em=document.getElementById('email'),note=document.getElementById('note');
    if(!n.value.trim()){n.focus();note.textContent=M.name;return}
    if(!em.value.trim()||!em.checkValidity()){em.focus();note.textContent=M.mail;return}
    note.textContent=M.ok;});
  var fb=document.querySelectorAll('.pk-filters button');
  fb.forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');
    fb.forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on?'true':'false')});
    document.querySelectorAll('.pk').forEach(function(p){p.hidden=!(f==='all'||p.getAttribute('data-cat')===f)})})});
  try{var q=new URLSearchParams(location.search).get('produit');
    if(q&&document.getElementById('msg')){var sel=document.getElementById('prod');
      if(sel&&/parasol|مظل/i.test(q)){for(var i=0;i<sel.options.length;i++){if(/parasol|مظل/i.test(sel.options[i].text))sel.selectedIndex=i}}
      var m=document.getElementById('msg');if(!m.value)m.value=M.quote+q+'.\n'}}catch(e){}
  // galerie produit
  document.querySelectorAll('.pg').forEach(function(g){var s=g.querySelectorAll('.pg-s'),t=g.querySelectorAll('.pg-t'),c=g.querySelector('.pg-count b'),i=0;
    var go=function(n){i=(n+s.length)%s.length;s.forEach(function(x,k){x.classList.toggle('on',k===i)});t.forEach(function(x,k){x.classList.toggle('on',k===i)});if(c)c.textContent=i+1;if(t[i])t[i].scrollIntoView({block:'nearest',inline:'nearest'})};
    var rtl=document.documentElement.dir==='rtl';
    g.querySelector('.pg-prev').addEventListener('click',function(){go(i-1)});g.querySelector('.pg-next').addEventListener('click',function(){go(i+1)});
    t.forEach(function(x,k){x.addEventListener('click',function(){go(k)})});
    var x0=null;var m=g.querySelector('.pg-main');m.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});m.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(i+((dx<0)!==rtl?1:-1))}x0=null})});
  // onglets
  document.querySelectorAll('.tabs').forEach(function(tl){var bs=tl.querySelectorAll('[role=tab]');bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false');var p=document.getElementById(x.getAttribute('aria-controls'));if(p)p.hidden=!on})})})});
  // filtres parasols depuis l'adresse (#mat, #grand, #deporte)
  var fh=location.hash.slice(1);
  if(fh){var fbtn=document.querySelector('.pk-filters button[data-f="'+fh+'"]');if(fbtn){fbtn.click();var pf=document.querySelector('.pk-filters');if(pf)setTimeout(function(){pf.scrollIntoView({block:'start'});window.scrollBy(0,-120)},50)}}
  // recherche
  var sb=document.querySelector('.sbtn'),so=document.getElementById('srch'),sq=document.getElementById('sq'),sr=document.getElementById('sres'),sh=document.getElementById('shint'),sn=document.getElementById('snone'),IDX=null,sel=-1;
  if(sb&&so){
    var norm=function(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[إأآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي')};
    var load=function(){if(IDX)return Promise.resolve(IDX);return fetch('search.json').then(function(r){return r.json()}).then(function(d){IDX=d.map(function(x){x.n=norm(x.t+' '+x.k+' '+x.d);return x});return IDX}).catch(function(){IDX=[];return IDX})};
    var open=function(){so.hidden=false;sb.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';sq.value='';sr.innerHTML='';sh.hidden=false;sn.hidden=true;setTimeout(function(){sq.focus()},30);load()};
    var close=function(){so.hidden=true;sb.setAttribute('aria-expanded','false');document.body.style.overflow='';sb.focus()};
    var run=function(){var q=norm(sq.value.trim());sel=-1;if(q.length<2){sr.innerHTML='';sh.hidden=false;sn.hidden=true;return}
      var w=q.split(/\s+/);load().then(function(ix){var res=ix.map(function(x){var sc=0;for(var i=0;i<w.length;i++){if(x.n.indexOf(w[i])<0)return null;if(norm(x.t).indexOf(w[i])>=0)sc+=3;else sc+=1}return [sc,x]}).filter(Boolean).sort(function(a,b){return b[0]-a[0]}).slice(0,12);
        sh.hidden=true;sn.hidden=res.length>0;sr.innerHTML=res.map(function(r){var x=r[1];return '<li><a href="'+x.u+'"><em>'+x.k+'</em><b>'+x.t+'</b>'+(x.d?'<small>'+x.d+'</small>':'')+'</a></li>'}).join('')})};
    sb.addEventListener('click',open);so.querySelector('.srch-x').addEventListener('click',close);
    so.addEventListener('click',function(e){if(e.target===so)close()});
    sq.addEventListener('input',run);
    document.addEventListener('keydown',function(e){if(so.hidden){if(e.key==='/'&&!/input|textarea|select/i.test((document.activeElement||{}).tagName)){e.preventDefault();open()}return}
      var links=sr.querySelectorAll('a');
      if(e.key==='Escape')close();
      else if(e.key==='ArrowDown'&&links.length){e.preventDefault();sel=Math.min(sel+1,links.length-1)}
      else if(e.key==='ArrowUp'&&links.length){e.preventDefault();sel=Math.max(sel-1,0)}
      else if(e.key==='Enter'&&links.length){e.preventDefault();location.href=links[Math.max(sel,0)].getAttribute('href');return}
      else return;
      links.forEach(function(a,i){a.classList.toggle('on',i===sel)});if(links[sel])links[sel].scrollIntoView({block:'nearest'})});
    so.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&a.hash&&a.pathname===location.pathname){close()}});
  }
})();
