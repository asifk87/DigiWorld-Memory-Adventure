console.log("testing if this is connected");
// Important Elements on Website
let gameBoard = document.querySelector('#game-board')
let score = document.querySelector('#score')
let cards = document.querySelectorAll('.digi-card')
let reset = document.querySelector('#reset')


// reset function to rearrange the board with random cards
reset.addEventListener('click', function(){
    console.log(gameBoard.innerHTML)
    gameBoard.innerHTML = ''
    const unshuffledDeck = []
    // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    for (let index = 0; index < 10; index++) {
        let newLi = document.createElement('li')
        newLi.className = 'digi-card'
        newLi.innerText = (`${index} This is a number`)
        let cloneNewLi = newLi.cloneNode(true)
        unshuffledDeck.push(newLi)
        unshuffledDeck.push(cloneNewLi)
        // below will append newLi to the board
        // gameBoard.append(newLi);
    }
    console.log(unshuffledDeck);
/*     console loging to see what the array is, why is the length coming up zero here? */
    // console.log(unshuffledDeck.length);
/*     randomize the cards that enter into array */
    let digiDestined = []
    for (let i = 0; i < 20; i++) {
        console.log(`${i} time running loop`);
        console.log(`${unshuffledDeck.length} left in the array`);
        let rdomInd = Math.floor(Math.random() * unshuffledDeck.length)
        // console.log(rdomInd);
        let selected = unshuffledDeck[rdomInd]
        console.log(selected);
        // remove from array the index we already inerted
        unshuffledDeck.splice(rdomInd,1)
        console.log(`${unshuffledDeck}`);
        // // pushing 2 copies into into array to be applied to the board
        digiDestined.push(selected)
        console.log(digiDestined);
    }
    console.log(digiDestined);
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.appendChild(digiDestined[j]);
    }
})

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
        console.log(cards[i].innerText);
    } )

}