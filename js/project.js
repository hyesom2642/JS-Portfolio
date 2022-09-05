const popupCloseButton = document.querySelector('.popup-close-button')
const projectOverlay = document.querySelector('.overlay')

const projectItem = document.querySelectorAll('.project-item')
let projectItmeImages = document.querySelectorAll('.project-item img')
let projectItemSkills = document.querySelectorAll('.project-skills li')

const projectPopup = document.querySelector('.popup')
let projectPopupImages = document.querySelector('.popup .popup-image')
let projectPopupTitle = document.querySelector('.popup .popup-title')
const popupSkills = document.querySelector('.popup-skills')

// popup open
function popupOpen(e) {
  e.preventDefault()
  projectOverlay.classList.add('is-active')
  projectPopup.classList.add('is-open')
}
// popup close
function popupClose() {
  projectPopup.classList.remove('is-open')
  projectOverlay.classList.remove('is-acitve')
}
projectOverlay.addEventListener('click', popupClose)
popupCloseButton.addEventListener('click', popupClose)

projectItem.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    let photo = item.lastElementChild
    projectPopupImages.src = photo.src

    let title = item.firstElementChild
    projectPopupTitle.innerHTML = title.innerHTML

    popupOpen(e)
  })
})
