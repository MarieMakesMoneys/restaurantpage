let container = document.querySelector('div#content') 

export default function displayHome() {
    let intro = document.createElement('div')
    intro.classList.add('intro')
    intro.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia incidunt quia iure et laboriosam unde, quas veritatis quasi quae pariatur, ipsum in? Est rem cupiditate itaque, perferendis ipsam nulla!"
    container.appendChild(intro)

    let button = document.createElement('button')
    button.textContent = "Browse the menu"
    container.appendChild(button)
}

