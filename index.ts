document.addEventListener('DOMContentLoaded', () => {
  const scrollTop = document.querySelector('.scrollup') as HTMLLinkElement;
  let pageYOffset = 0;
  let timeout: number;

  window.onscroll = () => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    if (window.pageYOffset > 580) {
      scrollTop.style.display = 'block';
    } else {
      scrollTop.style.display = 'none';
    }
    pageYOffset = window.pageYOffset;
    timeout = window.setTimeout(() => {
      if (window.pageYOffset === pageYOffset) {
        scrollTop.style.display = 'none';
      }
    }, 3000);
  };

  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

const SHOW_MORE_SERTS = document.querySelector('.certificates_btn') as HTMLButtonElement;
const certificates = document.querySelectorAll('.certificates_item');

const showArrow = (event: Event) => {
  if (event.target !== null) {
    const target = event.target as HTMLImageElement;
    if (target.src.indexOf('up') === -1) {
      target.src = './assets/icons/arrow_up.svg';
    } else {
      target.src = './assets/icons/arrow_down.svg';
    }
  }
};

const showMoreContent = () => {
  certificates.forEach((item) => {
    if (item.classList.contains('certificates_item_hidden')) {
      item.classList.remove('certificates_item_hidden');
      item.classList.add('certificates_item_show');
    } else if (item.classList.contains('certificates_item_show')) {
      item.classList.remove('certificates_item_show');
      item.classList.add('certificates_item_hidden');
    }
  });
};

SHOW_MORE_SERTS.addEventListener('click', showArrow);
SHOW_MORE_SERTS.addEventListener('click', showMoreContent);
