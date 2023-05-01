// // DOM - Document Object Manipulation                                    document.querySelectorAll('p')
// // an object that models html document inside a javascript               p.remove()
//                                                                          p.textContent = '*****'
//                                                                          document.createElement('p')
//                                                                          appendChild(newParagraph)
//                                                                          addEventListener('click', function(){}
// const ps = document.querySelectorAll('p')// an object of paragraph      
// //console.log(p)
// ps.forEach(function(p){ // catching all paragraph tags
//     //p.remove()
//     p.textContent = '*****'
// })

// // what do you learn untill now
// // 1. document setup
// // 2. manipulation of html document via DOM - like READING TEXT CONTENT, REMOVING TEXT and SELECTING SPECIFIC ELEMENT

// adding new element 

// const newParagraph = document.createElement('p')//CREATING ELEMENT
// newParagraph.textContent = 'this is new paragraph element from javascript'//giving it a value
// document.querySelector('body').appendChild(newParagraph)//giving it a position

// How do we recive an input from the browser inserted by the user
// by adding input event listener

let note = []

const filters = {
    selectedtext: ''
}
// rendering notes take notes and text it is filtered
// step 1 - filtering notes(arrays) that only contain that text
const js = {
    title: 'learning JS',
    body: 'i am learning JS section 8'
}

note.push(js)
//localStorage.setItem('notes', JSON.stringify(note))
const noteJSON = localStorage.getItem('notes')
if (noteJSON !== null){
    note = JSON.parse(noteJSON)
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.selectedtext.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    //console.log(filteredNotes)
    filteredNotes.forEach(function(note){
        const noteEle = document.createElement('p')

        if (note.title.length > 0){
            noteEle.textContent = note.title
        }
        else{
            noteEle.textContent = 'Unnamed Title'
        }
        document.querySelector('#notes').appendChild(noteEle)
    })
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

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

