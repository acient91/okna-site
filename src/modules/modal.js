const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  let count = 0;
  let idInterval;

  const animate = () => {
    count++
    idInterval = requestAnimationFrame(animate);

    console.log(count);
    if (count < 50) {
      headerModal.style.left = count + '%';
      console.log(count);
    } else {
      cancelAnimationFrame(idInterval);
      count = 0;
    };
  };

  body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('btn-warning')) {
      headerModal.style.display = 'flex';
      overlay.style.display = 'flex';
      headerModal.classList.add('header-modal--opened');
      animate();
    } else if (e.target.classList.contains('header-modal__close') || e.target.classList.contains('overlay')) {
      headerModal.style.display = 'none';
      overlay.style.display = 'none';
      headerModal.classList.remove('header-modal--opened');
    };
  });
};

export default modal;