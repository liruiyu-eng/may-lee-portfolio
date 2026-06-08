(function(){
  const nav=document.querySelector('.nav');
  const btn=document.querySelector('.nav-toggle');
  if(btn){btn.addEventListener('click',()=>nav.classList.toggle('open'));}

  const active=document.body.dataset.active;
  if(active){document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===active)a.classList.add('active')});}

  const langBtn=document.querySelector('.lang-toggle');
  const setLang=(lang)=>{
    document.documentElement.lang = lang==='en'?'en':'zh-CN';
    document.querySelectorAll('[data-zh]').forEach(el=>{
      const val=el.getAttribute(lang==='en'?'data-en':'data-zh');
      if(val!==null) el.innerHTML=val;
    });
    if(langBtn) langBtn.textContent=lang==='en'?'中':'EN';
    localStorage.setItem('maylee-lang',lang);
  };
  const saved=localStorage.getItem('maylee-lang')||'zh';
  setLang(saved);
  if(langBtn){langBtn.addEventListener('click',()=>setLang((localStorage.getItem('maylee-lang')||'zh')==='zh'?'en':'zh'));}

  const modal=document.getElementById('contactModal');
  const openers=document.querySelectorAll('[data-open-contact]');
  const closers=document.querySelectorAll('[data-close-contact]');
  const open=()=>{ if(modal){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); } };
  const close=()=>{ if(modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); } };
  openers.forEach(el=>el.addEventListener('click',open));
  closers.forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
})();
