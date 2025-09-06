import { router } from './router.js';
import './Header/style.css';
import './HomePage/style.css';
import './Footer/style.css';
import './About/style.css';
import './Login/style.css';


document.addEventListener('DOMContentLoaded', () => {
  router();
});

/*
window.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
});
*/