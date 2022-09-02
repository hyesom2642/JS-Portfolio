const title_top = document.querySelector('.home-title-top')
const title_bottom = document.querySelector('.home-title-bottom')

function titleHandler(e) {
  e.preventDefault()

  let scrollY = window.scrollY

  title_top.style.marginLeft = scrollY * -4 + 'px'
  title_bottom.style.marginRight = scrollY * -4 + 'px'
}

window.addEventListener('scroll', titleHandler)
