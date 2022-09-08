const gnb = document.querySelector('.gnb')

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY

  if (scrollY >= 200) {
    gnb.classList.add('is-scroll')
  } else {
    gnb.classList.remove('is-scroll')
  }
})
