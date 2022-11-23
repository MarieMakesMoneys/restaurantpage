let container = document.querySelector('div#content') 

export default function displayHome() {
    let main = document.createElement('div')
    main.classList.add('main')

    let nav = document.createElement('ul')
    nav.classList.add('nav')

    let navHome = document.createElement('li')
    navHome.textContent = "HOME"
    let navMenu = document.createElement('li')
    navMenu.textContent = "MENU"
    let navAbout = document.createElement('li')
    navAbout.textContent = "ABOUT US"

    nav.appendChild(navHome)
    nav.appendChild(navMenu)
    nav.appendChild(navAbout)
    main.appendChild(nav)

    let intro = document.createElement('div')
    intro.classList.add('intro')
    intro.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia incidunt quia iure et laboriosam unde, quas veritatis quasi quae pariatur, ipsum in? Est rem cupiditate itaque, perferendis ipsam nulla!"
    main.appendChild(intro)

    let button = document.createElement('button')
    button.textContent = "Browse the menu"
    main.appendChild(button)

    container.appendChild(main)    
}

