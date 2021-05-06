console.log("testing if this is connected");
// Important Elements on Website
let gameBoard = document.querySelector('#game-board')
let score = document.querySelector('#score')
let cards = document.querySelectorAll('.digi-card')
let reset = document.querySelector('#reset')


// reset function to rearrange the board with random cards
reset.addEventListener('click', function(event){
    console.log(gameBoard.innerHTML)
    gameBoard.innerHTML = ''
    const array1 = []
    // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    for (let index = 0; index < 5; index++) {
        const newLi = document.createElement('li')
        newLi.className = 'digi-card'
        newLi.innerText = (`${index} This is a number`)
        array1.push(newLi)
        // this below will append newLi to the board
        // gameBoard.append(newLi);
        console.log(newLi);
    }
    // randomize the cards that enter into array
    var digiDestined = []
    for ( let i = 0; i < array1.length; i++) {
        let randomInd = Math.floor(Math.random()*array1.length)
        console.log(randomInd);
        let selected = array1[randomInd]
        // pushing 2 copies into into array to be applied tot he board
        digiDestined.push(selected)
        // digiDestined.push(selected)
        // remove from array the index we already inerted *** NOT WORKING
        array1.splice(randomInd,1)
    }
    console.log(digiDestined);
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.append(digiDestined[j]);
    }
})

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
        console.log(cards[i].innerText);
    } )

}