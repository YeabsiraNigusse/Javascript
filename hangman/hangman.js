
displayPuzzle()
displayRemaining()
displayStatus()

window.addEventListener('keypress', function (e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGusses(guess)
    console.log(game1.remainingGusess)
     
    document.querySelector('#puzzle').innerHTML = ''

    displayStatus()
    displayPuzzle()
    displayRemaining()
   
    
})