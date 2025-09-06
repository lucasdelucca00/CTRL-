import { renderHomePage } from "./HomePage/homePage.js";
import { renderAboutPage } from "./About/about.js";
import { renderHeader } from "./Header/header.js";
import { renderFooter } from "./Footer/footer.js";
import { openLogin } from "./Login/login.js";


const routes = {
  '/': renderHomePage,
  '/about': renderAboutPage,
  '/login': openLogin


};

export function navigateTo(route) {
  window.location.hash = route;
}

export async function router() {
  const path = window.location.hash.replace('#', '') || '/';
  const route = routes[path] || routes['/'];

  route();

  renderHeader();

  renderFooter();
}

window.addEventListener('hashchange', router);
