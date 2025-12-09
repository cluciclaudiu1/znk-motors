
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const backdrop = document.getElementById('backdrop');

  function closeMenu(){
    burger.classList.remove('active');
    nav.classList.remove('open');
    backdrop.classList.remove('show');
    burger.setAttribute('aria-expanded','false');
  }

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('active');
    nav.classList.toggle('open', open);
    backdrop.classList.toggle('show', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  backdrop.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });

  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // cât de devreme apare (px de la marginea ecranului)

    reveals.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
