export async function renderAboutPage() {
  const app = document.getElementById('app');
  const response = await fetch('src/About/about.html');
  const html = await response.text();
  app.innerHTML = html;
}