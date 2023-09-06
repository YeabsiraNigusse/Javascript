

const Hangman = function (word, remainingGusess){
    this.word = word.toLowerCase().split('');
    this.remainingGusess = remainingGusess;
    this.gussedLetters = []
    this.status = ''

}

Hangman.prototype.getPuzzle = function (){
    let puzzle = ''

    this.word.forEach(letter => {
        if (this.gussedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    });
    return puzzle
}

Hangman.prototype.makeGusses = function(gussedLetter){

    if (this.status != 'failed'){
        const uniqeLetter = !this.gussedLetters.includes(gussedLetter)
        const inccorectGuss = !this.word.includes(gussedLetter)

        if (uniqeLetter){
             this.gussedLetters.push(gussedLetter)
                        }
        if(uniqeLetter && inccorectGuss){
            this.remainingGusess--
        }
    }

    
}

Hangman.prototype.checkStatus = function () {
    const allFound = this.word.every((letter) => this.gussedLetters.includes(letter));

    if (allFound && this.status != 'failed') {
        this.status = 'finished';
    } else if (this.remainingGusess <= 0) {
        this.status = 'failed';
    } else {
        this.status = 'playing';
    }

    return this.status;
};




const game1 = new Hangman('cat', 3)

const game2 = new Hangman('Yeab Nigusse', 4)
console.log(game2.getPuzzle())


const displayPuzzle = function(){
    const puzzle = document.createElement('p')
    puzzle.textContent = game1.getPuzzle()
    document.querySelector('#puzzle').appendChild(puzzle)
}

const displayRemaining = function(){

    const remainingGusess = document.createElement('p')
    remainingGusess.textContent = `Remaining Gusses: ${game1.remainingGusess}`
    document.querySelector('#puzzle').appendChild(remainingGusess)
}

const displayStatus = function (){

    if (game1.remainingGusess == 0){
        const status = document.createElement('p')
        status.textContent = `Nice Try! The Word was ${game1.word.join('')}`
        document.querySelector('#puzzle').appendChild(status)
    }

    if (game1.word.every((letter) => game1.gussedLetters.includes(letter))){
        const status = document.createElement('p')
        status.textContent = `Great Work! You Gussed The word.`
        document.querySelector('#puzzle').appendChild(status)
    }
    console.log(game1.checkStatus())
    
}

