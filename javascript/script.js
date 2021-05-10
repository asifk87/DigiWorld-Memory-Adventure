console.log("testing if this is connected");
// Important Elements on Website
let gameBoard = document.querySelector('#game-board')
let score = document.querySelector('#score')
let cards = document.querySelectorAll('.digi-card')
let newGame = document.querySelector('#new-game')

// comparsion function, compare two values within an array
let compareArray = [];
let player1Hand = []
let comparison = function(e) {
    console.log(e.target);
    compareArray.push(e.target)
    console.log(compareArray);
    if( compareArray[0] == compareArray[1]){
        player1Hand.push(compareArray)
        console.log(player1Hand);
    } else if (compareArray[0] !== compareArray[1]){
        console.log("this isn't a match");
    } else {
        console.log("this didn't work");
    }
}

// newGame function to rearrange the board with random cards
newGame.addEventListener('click', function(){
    console.log(gameBoard.innerHTML)
    gameBoard.innerHTML = ''
    const unshuffledDeck = []
    // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    for (let index = 0; index < 5; index++) {
        let newLi = document.createElement('li')
        newLi.className = 'digi-card'
        newLi.innerText = (`${index} This is a number`)
        // newLi.addEventListener('click', comparison)
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
    const num = unshuffledDeck.length
    let digiDestined = []
    for (let i = 0; i < num; i++) {
        console.log(`${i} time running loop`);
        console.log(`${unshuffledDeck.length} left in the array`);
        let rdomInd = Math.floor(Math.random() * unshuffledDeck.length)
        // console.log(rdomInd);
        let selected = unshuffledDeck[rdomInd]
        console.log(selected);
        // remove from array the index we already inerted
        unshuffledDeck.splice(rdomInd,1)
        // added a click comparsion to each array we're slecting 
        selected.addEventListener('click', comparison)
        digiDestined.push(selected)
        console.log(digiDestined);
    }
    /* This appends each of the list items to the unordered list */
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.appendChild(digiDestined[j]);
    }

})

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        console.log(cards[i].innerText);
    } )

}