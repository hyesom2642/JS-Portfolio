const popupCloseButton = document.querySelector('.popup-close-button')
const projectOverlay = document.querySelector('.overlay')

const projectItem = document.querySelectorAll('.project-item')
const projectItmeImages = document.querySelectorAll('.project-item img')
const projectItemSkills = document.querySelectorAll('.project-skills li')

const projectPopup = document.querySelector('.popup')
const projectPopupImages = document.querySelector('.popup .popup-image')
const projectPopupTitle = document.querySelector('.popup .popup-title')
const popupSkills = document.querySelectorAll('.popup-skills li')
const popupDese = document.querySelector('.popup-desc')
const popupDemoButton = document.querySelector('.popup-demo-button')
const popupCodeButton = document.querySelector('.popup-code-button')

// popup open
function popupOpen() {
  projectOverlay.classList.add('is-active')
  projectPopup.classList.add('is-open')
}
// popup close
function popupClose() {
  projectOverlay.classList.remove('is-active')
  projectPopup.classList.remove('is-open')
}
popupCloseButton.addEventListener('click', popupClose)
projectOverlay.addEventListener('click', popupClose)

// popup content
projectItem.forEach((item) => {
  item.addEventListener('click', function (e) {
    popupOpen(e)

    let photo = item.children[0]
    projectPopupImages.src = photo.src

    let title = item.children[1]
    projectPopupTitle.innerHTML = title.innerHTML

    // * 좀 더 좋은 방법이 있을 꺼같은데....
    for (let i = 0; i < item.children[2].children.length; i++) {
      // if (popupSkills[i].textContent == '') {
      //   popupSkills[i].removeChild
      // } else {
      let skills = item.children[2].children[i]
      popupSkills[i].textContent = skills.textContent
      // }
    }

    let desc = item.children[3]
    popupDese.innerHTML = desc.innerHTML

    let demoButton = item.children[4]
    popupDemoButton.href = demoButton.href

    let codeButton = item.children[5]
    popupCodeButton.href = codeButton.href
  })
})
