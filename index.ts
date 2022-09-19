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
const SHOW_MORE_PROJECTS = document.querySelector('.projects_btn') as HTMLButtonElement;
const certificates = document.querySelectorAll('.certificates_item');
const projects = document.querySelectorAll('.projects_item');

const changeArrow = (event: Event) => {
  if (event.target !== null) {
    const target = event.target as HTMLImageElement;
    if (target.src.indexOf('up') === -1) {
      target.src = './assets/icons/arrow_up.svg';
    } else {
      target.src = './assets/icons/arrow_down.svg';
    }
  }
};

const showMoreContent = (event: Event) => {
  let arr = certificates;
  if (event.target !== null) {
    const target = event.target as HTMLImageElement;
    const btnClassName = target.closest('button')!.className;
    arr = (btnClassName.indexOf('certificates') === -1)
      ? projects
      : certificates;
  }
  arr.forEach((item, index) => { if (index > 2) { item.classList.toggle('hidden'); } });
};

SHOW_MORE_SERTS.addEventListener('click', changeArrow);
SHOW_MORE_SERTS.addEventListener('click', showMoreContent);

SHOW_MORE_PROJECTS.addEventListener('click', changeArrow);
SHOW_MORE_PROJECTS.addEventListener('click', showMoreContent);
