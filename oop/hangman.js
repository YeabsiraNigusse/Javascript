
const Hangman = function (word, remainingGusess){
    this.word = word.toLowerCase().split('');
    this.remainingGusess = remainingGusess;
    this.gussedLetters = ['c']
    

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

   

}

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('Yeab Nigusse', 4)
console.log(game2.getPuzzle())
