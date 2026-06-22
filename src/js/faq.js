export function initFaq() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const body = item.querySelector('.faq-body');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-body').hidden = true;
        i.querySelector('.faq-btn').setAttribute('aria-expanded','false');
      });
      if (!isOpen) {
        item.classList.add('open');
        body.hidden = false;
        btn.setAttribute('aria-expanded','true');
      }
    });
  });
}
