export async function renderHomePage() {
  const app = document.getElementById('app');
  const response = await fetch('src/HomePage/homepage.html');
  const html = await response.text();
  app.innerHTML = html;
  initBanner(); // Chame aqui, depois de inserir TODO o HTML da homepage
  initEstrelas();
}

function initBanner() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');
  let index = 0;
  let interval;

  // Cria os dots dinamicamente
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
  // Agora selecione os dots criados
  const dots = document.querySelectorAll('.dot');

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === n);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    document.querySelector('.carousel-track').style.transform = `translateX(-${n * 100}%)`;
    index = n;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    console.log('Botão próximo clicado');
    nextSlide();
    resetInterval();
  });
  if (prevBtn) prevBtn.addEventListener('click', () => {
    console.log('Botão anterior clicado');
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
  }

  showSlide(index);
  interval = setInterval(nextSlide, 10000);
}

function initEstrelas() {
  const estrelasContainers = document.querySelectorAll('.estrelas');

  estrelasContainers.forEach(container => {
    let avaliacao = 0;

    // cria 5 spans (estrelas) dentro de cada container
    container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const estrela = document.createElement('span');
      estrela.textContent = '★';
      estrela.style.cursor = 'pointer';
      estrela.style.fontSize = '28px';
      estrela.style.color = 'lightgray';

      // evento hover
      estrela.addEventListener('mouseenter', () => {
        pintarEstrelas(container, i);
      });

      // evento click
      estrela.addEventListener('click', () => {
        avaliacao = i;
        container.setAttribute('data-avaliacao', avaliacao);
      });

      // volta ao estado salvo ao sair
      container.addEventListener('mouseleave', () => {
        pintarEstrelas(container, avaliacao);
      });

      container.appendChild(estrela);
    }
  });

  function pintarEstrelas(container, qtd) {
    [...container.children].forEach((estrela, i) => {
      estrela.style.color = i < qtd ? '#FC4B38' : 'lightgray';
    });
  }
}
