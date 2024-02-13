
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const readMoreText = document.querySelector('.read-more-text');

    readMoreBtn.addEventListener('click', function() {
      readMoreText.classList.toggle('show');
      if (readMoreText.classList.contains('show')) {
        readMoreBtn.textContent = 'Mostrar Menos';
      } else {
        readMoreBtn.textContent = 'Leia Mais...';
      }
    });
  });
