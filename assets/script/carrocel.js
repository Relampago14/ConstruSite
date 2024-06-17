let slide = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (n >= slides.length) {
    slide = 0;
  }
  if (n < 0) {
    slide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slide].style.display = 'block';


  dots.forEach((dot, index ) => {
    if (index === slide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function anteriorSlide() {
  showSlide(slide -= 1);
}

function proximoSlide() {
  showSlide(slide += 1);
}


const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
  showSlide(index);
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    showSlide(index);
  });
  dotsContainer.appendChild(dot);
});