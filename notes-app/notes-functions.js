const getSavedNotes = function(){
    const noteJSON = localStorage.getItem('notes')
    console.log(noteJSON)
     if (noteJSON !== null){
         return JSON.parse(noteJSON)
     }else{
         return []
        }
}

const generateNewElement = function(note){
    const noteEle = document.createElement('p')

        if (note.title.length > 0){
            noteEle.textContent = note.title
        }
        else{
            noteEle.textContent = 'Unnamed Title'
        }
        return noteEle
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.selectedtext.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    //console.log(filteredNotes)
    filteredNotes.forEach(function(note){
        noteEle = generateNewElement(note)
        document.querySelector('#notes').appendChild(noteEle)
    })
}