document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  if (nav) {
    const syncNav = () => nav.classList.toggle('scrolled', window.scrollY > 80);
    syncNav();
    window.addEventListener('scroll', syncNav);
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const tabs = document.querySelectorAll('.about-tab');
  if (tabs.length) {
    const sections = ['signal', 'team'];
    const syncTabs = () => {
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      tabs.forEach(tab => {
        const href = tab.getAttribute('href') || '';
        tab.classList.toggle('active', current && href.includes(`#${current}`));
      });
    };
    syncTabs();
    window.addEventListener('scroll', syncTabs);
  }

  const egg = document.getElementById('easterEgg');
  if (egg) {
    const checkTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      if ((h === 11 || h === 23) && m === 11) {
        egg.classList.add('visible');
        setTimeout(() => egg.classList.remove('visible'), 60000);
      }
    };
    checkTime();
    setInterval(checkTime, 30000);
  }

  const easterTrigger = document.getElementById('easterTrigger');
  const easterContent = document.getElementById('easterContent');
  if (easterTrigger && easterContent) {
    let clicks = 0;
    easterTrigger.addEventListener('click', () => {
      clicks += 1;
      if (clicks === 3) {
        easterContent.classList.add('revealed');
        easterContent.style.animation = 'fade-up 0.8s forwards';
      }
    });
  }
});

window.toggleForm = function(formId, toggleId) {
  const form = document.getElementById(formId);
  const btn = document.getElementById(toggleId);
  if (!form || !btn) return;
  const isOpen = form.classList.contains('open');
  form.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  const icon = btn.querySelector('.form-toggle-icon');
  if (icon) icon.textContent = isOpen ? '+' : '×';
  if (!isOpen) setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
};