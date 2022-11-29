const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]

// basic random shuffle of an array
cardArray.sort(() => 0.5 - Math.random());

// console.log(cardArray)

const gridDisplay = document.querySelector('#grid');
// console.log(gridDisplay)
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        // console.log(card, i)
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
};

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    console.log('check for a match')
    if (cardsChosen[0] == [1]) {
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
    }
}

function flipCard() {
    // console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    // console.log('clicked', cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}