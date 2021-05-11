console.log("testing if this is connected");
// Important Elements on site
let gameBoard = document.querySelector('#game-board')
let score = document.querySelector('#score')
let card = document.querySelector('.digi-card')
let cards = document.querySelectorAll('.digi-card')
let newGame = document.querySelector('#new-game')

// array for cards in players hand
let player1Hand = []

// newGame function to rearrange the board with random cards
newGame.addEventListener('click', function(){
    console.log(gameBoard.innerHTML)
    gameBoard.innerHTML = ''

    /* below creates new li list with html we need. since we're working with list on screen not making it */
    // const unshuffledDeck = []
    // // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    // for (let index = 0; index < 5; index++) {
    //     let newLi = document.createElement('li')
    //     newLi.className = 'digi-card'
    //     newLi.innerText = (`${index} This is a number`)
    //     // newLi.addEventListener('click', comparison)
    //     let cloneNewLi = newLi.cloneNode(true)
    //     unshuffledDeck.push(newLi)
    //     unshuffledDeck.push(cloneNewLi)
    //     // below will append newLi to the board
    //     // gameBoard.append(newLi);
    // }

    // console.log(unshuffledDeck);
/*     console loging to see what the array is, why is the length coming up zero here? */
    // console.log(unshuffledDeck.length);

    /* bring each of the list itmes from cards elements into a unshuffled array */
    let unshuffledDeck = []
    for (let index = 0; index < cards.length; index++) {
        unshuffledDeck.push(cards[index])
    }
    const num = unshuffledDeck.length
    /*     randomize the cards that enter into array */
    let digiDestined = []
    for (let i = 0; i < num; i++) {
        console.log(`${i} time running loop`);
        console.log(`${unshuffledDeck.length} left in the array`);
        let rdomInd = Math.floor(Math.random() * unshuffledDeck.length)
        // console.log(rdomInd);
        let selected = unshuffledDeck[rdomInd]
        // remove from array the index we already inerted
        unshuffledDeck.splice(rdomInd,1)
        // added a click comparsion to each array we're slecting 
        // selected.addEventListener('click', comparison)
        digiDestined.push(selected)
        console.log(digiDestined);
    }
    /* This appends each of the list items to the unordered list */
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.appendChild(digiDestined[j]);
    }

})

// we need a way to display cards
let displayCard = function() {
    this.classlist.toggle('show')
    this.classlist.toggle('disable')
}


// comparsion function, compare two values within an array
let compareArray = [];
/* player1Hand array was here */
function comparison(e) {
    player1Hand.push(e.target)
    console.log(player1Hand);
    let inHand = player1Hand.length;
    console.log(inHand);
    if (inHand == 2) {
        if(player1Hand[0].alt == player1Hand[1].alt){
            console.log(player1Hand[0].alt);
            console.log(player1Hand[1].alt);
            console.log("this is a match");
            player1Hand = []
        } else {
            console.log("this isn't a match");
            player1Hand = []
        }
    }
}

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    card = cards[i]
    // cards[i].addEventListener('click', function() {
    //     console.log(cards[i].innerHTML);
    // } )
    card.addEventListener('click',displayCard)
    card.addEventListener('click',comparison)

}