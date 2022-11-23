const container = document.querySelector('div#content')

export default function displayMenu() {
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

    let menu = document.createElement('ul')
    menu.classList.add('menu')

    let menuItems = [
        {
            "name": "SALMON BAGEL",
            "descript": "poppy seeds bagel, cream cheese, smoked salmon",
            "price": "$6"
        },
        {
            "name": "EGG BAGEL",
            "descript": "sesame seeds bagel, cream cheese, poached egg",
            "price": "$4"
        },
        {
            "name": "AVOCADO BAGEL",
            "descript": "sesame seeds bagel, cream cheese, avocado",
            "price": "$5"
        },
        {
            "name": "CREAM CHEESE BAGEL",
            "descript": "cream cheese on any bagel",
            "price": "$6"
        },
        {
            "name": "MAKE YOUR OWN 1 BAGEL",
            "descript": "1 ingredient of choice",
            "price": "$2.5"
        },
        {
            "name": "MAKE YOUR OWN 2 BAGEL",
            "descript": "2 ingredients of choice",
            "price": "$5"
        },
        {
            "name": "MAKE YOUR OWN 3 BAGEL",
            "descript": "3 ingredients of choice",
            "price": "$7"
        }
    ]
    for (const item of menuItems) {
        let itemLi = document.createElement('li')

        let itemName = document.createElement('span')
        itemName.classList.add('item-name')
        itemName.textContent = item.name
        itemLi.appendChild(itemName)
        
        let description = document.createElement('span')
        description.classList.add('descript')
        description.textContent = item.descript
        itemLi.appendChild(description)

        let price = document.createElement('span')
        price.classList.add('price')
        price.textContent = item.price
        itemLi.appendChild(price)

        menu.appendChild(itemLi)
    }

    main.appendChild(menu)

    container.appendChild(main)
}
