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
