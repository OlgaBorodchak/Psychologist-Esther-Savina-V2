import '../src/main.css';

import { initNavbar } from './js/navbar.js';
import { initFaq } from './js/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaq();
});
