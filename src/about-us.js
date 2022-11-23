let container = document.querySelector('div#content')

export default function displayAbout() {
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

    let about = document.createElement('div')
    about.classList.add('about')

    let aboutPic = document.createElement('img')
    aboutPic.classList.add('about-pic')
    aboutPic.setAttribute('src', '../src/food-photographer-eV5PkVkDWDs-unsplash.jpg')
    about.appendChild(aboutPic)
    let aboutText = document.createElement('div')
    aboutText.classList.add('about-text')
    aboutText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam ducimus, voluptas voluptatibus dignissimos cum, magnam enim eveniet vel placeat ex dolorem officia dolorum! Doloribus at omnis veritatis mollitia."
    about.appendChild(aboutText)

    main.appendChild(about)

    container.appendChild(main)  
}