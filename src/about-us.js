let container = document.querySelector('div#content')

export default function displayAbout() {
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

    container.appendChild(about)  
}