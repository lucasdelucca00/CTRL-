export async function openLogin() {
    const app = document.getElementById('app');
    const response = await fetch('src/Login/login.html');
    const html = await response.text();
    app.innerHTML = app.innerHTML + html;
    const modal = document.getElementById("login");
    modal.style.display = "flex";
    const linkRoute = document.getElementById("link_route");

    const closeBtn = document.getElementById("closeModal");

    // Fechar modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        window.location.href = linkRoute.innerText;
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            window.location.href = linkRoute.innerText;
        }
    };
}