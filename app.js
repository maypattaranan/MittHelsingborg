/* DOM Selectors */

const rootElement = document.documentElement
const backToTopContainer = document.querySelector("#back-to-top-container")
const backToTopButton = document.querySelector("#back-to-top-button")

/* Event Listeners */

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 600) {
    backToTopContainer.classList.add("active")
    backToTopContainer.classList.remove("inactive")
  } else {
    backToTopContainer.classList.add("inactive")
    backToTopContainer.classList.remove("active")
  }
})

backToTopButton.addEventListener("click", scrollToTop)

function scrollToTop() {
  rootElement.scrollTo({
    top: 0
  })
}
