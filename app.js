const ball = document.querySelector('.ball')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav-bg')
const sections = document.querySelectorAll('.secondary-title')
const home = document.querySelector('.home')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')
const about = document.querySelector('.about')
const links = document.querySelectorAll('.nav-link')

// Setup isScrolling variable
var isScrolling

// Listen for scroll events
// window.addEventListener(
//   'scroll',
//   function (event) {
//     const position = scrollY
//     ball.style.top = `${this.scrollY}rem`
//     window.clearTimeout(isScrolling)

//     // Set a timeout to run after scrolling ends
//     isScrolling = setTimeout(function () {
//       // Run the callback
//       console.log(ball)
//     }, 500)
//   },
//   false
// )

openBtn.addEventListener('click', () => {
  nav.forEach((navBg) => navBg.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
  nav.forEach((navBg) => navBg.classList.remove('visible'))
})

window.addEventListener('scroll', updateList)

function updateList() {
  const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    )
  })
  console.log([...document.querySelectorAll('h1, h2')].indexOf(titles[0]))
  document
    .querySelectorAll('.active')
    .forEach((c) => c.classList.remove('active'))
  links[
    [...document.querySelectorAll('h1, h2')].indexOf(titles[0])
  ].classList.add('active')
}
updateList()

// ripple button

const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop - 2940
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft + 40
    const yInside = (y - buttonTop) * 5

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})

const projects = document.querySelectorAll('.project')

projects.forEach((project) => {
  project.addEventListener('mouseenter', function (e) {
    project.lastElementChild.classList.add('moveup')
  })
})

projects.forEach((project) => {
  project.addEventListener('mouseleave', function (e) {
    project.lastElementChild.classList.remove('moveup')
  })
})
