
let note = getSavedNotes()

const filters = {
    selectedtext: ''
}

renderNotes(note, filters)
document.querySelector('#createNote').addEventListener('click', function (e){
    note.push({
        title : '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(note))
    renderNotes(note, filters)
})
// step 2- getting the text from the user input

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.selectedtext = e.target.value
    renderNotes(note, filters)
})  

