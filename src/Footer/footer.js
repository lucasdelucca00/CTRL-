export async function renderFooter() {
  const header = document.getElementById('footer');
  const response = await fetch('src/Footer/footer.html');
  const html = await response.text();
  header.innerHTML = html;
}
