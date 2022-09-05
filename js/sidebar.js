const menuOpenButton = document.querySelector('.gnb-menu-icon.is-menu')
const menuCloseButton = document.querySelector('.sidebar-close-button')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

// * open handle
function openHandler() {
  sidebar.classList.add('is-open')
  overlay.classList.add('is-active')
}

// * close handle
function closeHandler() {
  sidebar.classList.remove('is-open')
  overlay.classList.remove('is-active')
}

menuOpenButton.addEventListener('click', openHandler)
menuCloseButton.addEventListener('click', closeHandler)
overlay.addEventListener('click', closeHandler)
