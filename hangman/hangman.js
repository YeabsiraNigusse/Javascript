
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
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status == 200){
        
        console.log(e.target)
        const data = JSON.parse(e.target.responseText) 
        console.log(data)
        console.log(data[0].currencies.NPR.symbol);
        console.log(e.target.status)
    }
})


request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()