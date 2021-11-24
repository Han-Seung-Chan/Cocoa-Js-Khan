const $tittle = document.querySelector('.tittle');
const $hidden = document.querySelector('#hidden');
const $company = document.querySelector('.company');

let time;

$tittle.addEventListener('mouseout', () => {
  clearTimeout(time);
});

$tittle.addEventListener('mouseover', () => {
  time = setTimeout(() => {
    $hidden.style.display = 'block';
  }, 1000);
});
