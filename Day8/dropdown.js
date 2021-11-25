const $tittle = document.querySelector('.tittle');
const $hidden = document.querySelector('#hidden');
const $company = document.querySelector('.company');

function printDropdown() {
  let time = null;

  $tittle.addEventListener('mouseover', () => {
    time = setTimeout(() => {
      $hidden.style.display = 'block';
    }, 1000);
  });

  $tittle.addEventListener('mouseout', () => {
    clearTimeout(time);
  });
}
printDropdown();
