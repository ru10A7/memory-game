document.addEventListener("DOMContentLoaded",() =>{
    // card options 
    const cards = [
        {
            name: 'fries',
            img:'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img:'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img:'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img:'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img:'src/images/hotdog.png'
        },
    ]

    cards.sort(() => 0.5 - Math.random())
    console.log(cards)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cards.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cards[cardId].img)
         
        if(cardsChosen.length ===2){
            setTimeout(checkForMath, 500)
        }
    }

    function checkForMath(){
        const cardss = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if(optionOneId == optionTwoId){
            alert('You have clicked the same image !')
            cardss[optionOneId].setAttribute('src','src/images/blank.png')
            cardss[optionTwoId].setAttribute('src','src/images/blank.png')
        }else if (cardsChosen[0] === cardsChosen[1]){
            alert('You have found a match !')
            cardss[optionOneId].setAttribute('src','src/images/white.png')
            cardss[optionTwoId].setAttribute('src','src/images/white.png')
            cardss[optionOneId].removeEventListener('click',flipCard)
            cardss[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cardss[optionOneId].setAttribute('src','src/images/blank.png')
            cardss[optionTwoId].setAttribute('src','src/images/blank.png')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cards.length/2){
            resultDisplay.textContent = ' Congratulations ! You have Won'
            console.log(resultDisplay.textContent)
        }
    }

    createBoard()
})
