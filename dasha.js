document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('show-img-btn');
  const img = document.getElementById('random-img');

  const images = [
    'images/epifancev.jpg',
    'images/banana.jpg',
    'images/kupitman.jpg',
    'images/cat_selfi.jpg',
    'images/minion.jpg',
    'images/hype.jpg',
    'images/samokat.jpg',
    'images/swaga.jpg'
  ];

  btn.addEventListener('click', function () {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage;
    img.style.display = 'block';
    img.style.opacity = '0';
    setTimeout(() => {
      img.style.transition = 'opacity 0.5s';
      img.style.opacity = '1';
    }, 10);
  });
});
