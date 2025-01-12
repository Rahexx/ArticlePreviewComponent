const articleBtn = document.querySelector('.article__btn');
const share = document.querySelector('.share');
const shareBtn = share.querySelector('.share__btn');
console.log(shareBtn);
articleBtn.addEventListener('click', () => {
  share.classList.remove('share--hide');
  share.classList.add('share--show');
});

shareBtn.addEventListener('click', () => {
  share.classList.remove('share--show');
  share.classList.add('share--hide');
});
