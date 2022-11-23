import './style.css'
import displayHome from './home.js'
import displayMenu from './menu.js'
import displayAbout from './about-us.js'


displayHome()

const home = document.querySelector('.navhome')
const menu = document.querySelector('.navmenu')
const about = document.querySelector('.navabout')
const container = document.querySelector('div#content')
var homeBtn = document.querySelector('button')

home.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    displayHome()
    
    homeBtn = document.querySelector('button')
    homeBtn.addEventListener('click', () => {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        displayMenu()
    })
})

menu.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    displayMenu()
})

about.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    displayAbout()
})

homeBtn.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    displayMenu()
})