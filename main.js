const articleBtn = document.querySelector('.article__btn');
const share = document.querySelector('.share');
const shareBtn = share.querySelector('.share__btn');

articleBtn.addEventListener('click', () => {
  if (
    share.classList.contains('share--initial') ||
    share.classList.contains('share--hide')
  ) {
    share.classList.remove('share--initial', 'share--hide');
    share.classList.add('share--show');
  } else {
    share.classList.remove('share--show');
    share.classList.add('share--hide');
  }
});

shareBtn.addEventListener('click', () => {
  share.classList.remove('share--show');
  share.classList.add('share--hide');
});
