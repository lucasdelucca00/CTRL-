export const routes = {
  '/': '/src/homepage/homepage.html',
  '/about': '/src/About/about.html'
};

export function navigateTo(route) {
  window.location.hash = route;
}

export async function router() {
  const path = window.location.hash.replace('#', '') || '/';
  const route = routes[path] || routes['/'];

  const html = await fetch(route).then(res => res.text());
  document.getElementById('app').innerHTML = html;

  const headerHtml = await fetch('/src/header/header.html').then(res => res.text());
  document.getElementById('header').innerHTML = headerHtml;

  const homepageHtml = await fetch('/src/homepage/homepage.html').then(res => res.text());
  document.getElementById('homepage').innerHTML = homepageHtml;

  const footerHtml = await fetch('/src/footer/footer.html').then(res => res.text());
  document.getElementById('footer').innerHTML = footerHtml;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);