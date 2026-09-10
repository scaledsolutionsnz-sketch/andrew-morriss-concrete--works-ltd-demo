(() => {
  'use strict';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  function closeMenu() { menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open menu');nav?.classList.remove('open'); }
  menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open); });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown', e=>{if(e.key==='Escape'){closeMenu();}});
  document.querySelectorAll('[data-gmail]').forEach(a=>{const to=a.dataset.user+'@'+a.dataset.domain;a.href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(to)+'&su='+encodeURIComponent('Concrete project enquiry')+'&body='+encodeURIComponent('Hi Andrew,\n\nI’d like to discuss a concrete project.\n\nLocation:\nType of work:\nApproximate size:\nPreferred timing:\n\nThanks,');a.target='_blank';a.rel='noopener';});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const slides=[...document.querySelectorAll('.hero-slides img')];
  const pause=document.querySelector('#pause-slides');let index=0,timer=null,paused=motion.matches;
  const loadSlides=()=>slides.forEach(img=>{if(img.dataset.src&&!img.src){img.src=img.dataset.src;img.loading='lazy';}});
  function next(){let nextIndex=(index+1)%slides.length;const image=slides[nextIndex];if(!image?.complete||!image.naturalWidth)return;slides[index].classList.remove('active');index=nextIndex;image.classList.add('active');document.querySelector('#slide-number').textContent=String(index+1).padStart(2,'0')+' / 03';}
  function sync(){clearInterval(timer);timer=null;const stopped=paused||motion.matches;pause?.setAttribute('aria-pressed',String(stopped));pause?.setAttribute('aria-label',stopped?'Play slideshow':'Pause slideshow');if(!stopped&&!document.hidden&&slides.length>1){loadSlides();timer=setInterval(next,6000);}}
  pause?.addEventListener('click',()=>{paused=!paused;sync();});motion.addEventListener('change',()=>{paused=motion.matches;sync();});document.addEventListener('visibilitychange',sync);if(slides.length){if('requestIdleCallback'in window)requestIdleCallback(sync);else setTimeout(sync,800);}
  if('IntersectionObserver'in window&&!motion.matches){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('waiting');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('waiting');observer.observe(el);});}
})();
