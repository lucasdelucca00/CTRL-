export async function renderHeader() {
  const header = document.getElementById('header');
  const response = await fetch('src/Header/header.html');
  const html = await response.text();
  header.innerHTML = html;
}